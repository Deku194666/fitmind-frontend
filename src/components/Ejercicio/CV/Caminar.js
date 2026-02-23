import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const STORAGE_KEY = 'caminar_timer';

const Caminar = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [tiempo, setTiempo] = useState(0);
  const [tiempoBase, setTiempoBase] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [ultimaSesion, setUltimaSesion] = useState(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const [mostrarInfo, setMostrarInfo] = useState(false); // <- nuevo estado

  const intervalRef = useRef(null);

  const caloriasPorMinuto = 4.5;
  const calorias = Number(((tiempo / 60) * caloriasPorMinuto).toFixed(2));

  /* ===============================
     🔁 HIDRATAR DESDE LOCALSTORAGE
  =============================== */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      setIsRunning(data.isRunning);
      setTiempoBase(data.tiempoBase || 0);
      setStartTime(data.startTime);
      setTiempo(data.tiempoBase || 0);
    }
    setIsHydrated(true);
  }, []);

  /* ===============================
     ⏱️ CRONÓMETRO REAL
  =============================== */
  useEffect(() => {
    if (!isHydrated) return;
    if (!isRunning || !startTime) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
      return;
    }
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setTiempo(tiempoBase + elapsed);
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isRunning, startTime, tiempoBase, isHydrated]);

  /* ===============================
     🎮 CONTROLES
  =============================== */
  const handleStartStop = () => {
    if (!isRunning) {
      const now = Date.now();
      setStartTime(now);
      setIsRunning(true);
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ isRunning: true, startTime: now, tiempoBase })
      );
    } else {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const nuevoTiempo = tiempoBase + elapsed;
      setTiempo(nuevoTiempo);
      setTiempoBase(nuevoTiempo);
      setIsRunning(false);
      setStartTime(null);
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ isRunning: false, startTime: null, tiempoBase: nuevoTiempo })
      );
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTiempo(0);
    setTiempoBase(0);
    setStartTime(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  /* ===============================
     ⛔ CIERRE POR INACTIVIDAD
  =============================== */
  const cerrarSesion = () => {
    alert('⏱️ Sesión expirada por inactividad');
    localStorage.clear();
    window.location.href = '/login';
  };

  useEffect(() => {
    let timeoutId;
    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(cerrarSesion, 3000000);
    };
    window.addEventListener('mousemove', resetTimeout);
    window.addEventListener('keydown', resetTimeout);
    resetTimeout();
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', resetTimeout);
      window.removeEventListener('keydown', resetTimeout);
    };
  }, []);

  /* ===============================
     📥 ÚLTIMA SESIÓN
  =============================== */
  const fetchUltimaSesion = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/caminar/${usuario_id}`,
        { headers: { 'user-id': usuario_id } }
      );
      if (res.data && typeof res.data === 'object') setUltimaSesion(res.data);
    } catch (err) {
      if (err.response?.status === 401) cerrarSesion();
    }
  };

  useEffect(() => {
    fetchUltimaSesion();
    const onVisible = () => {
      if (document.visibilityState === 'visible') fetchUltimaSesion();
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, []);

  /* ===============================
     💾 FINALIZAR SESIÓN
  =============================== */
  const handleFinalizar = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/caminar`,
        { usuario_id, tiempo, calorias },
        { headers: { 'user-id': usuario_id } }
      );

      alert('✅ Sesión de caminata registrada');
      setUltimaSesion({ tiempo, calorias, fecha: new Date() });
      window.dispatchEvent(new CustomEvent('ejercicio:registrado', { detail: { tipo: 'caminar' } }));
      handleReset();
    } catch (error) {
      if (error.response?.status === 401) cerrarSesion();
      else alert('Error al registrar en la base de datos');
    }
  };

  /* ===============================
     ⏲️ FORMATO TIEMPO
  =============================== */
  const formatTime = (segundos = 0) => {
    const s = Math.max(0, Number(segundos) || 0);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const r = s % 60;
    return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${r.toString().padStart(2,'0')}`;
  };

  const beneficios = [
    'Mejora la salud cardiovascular con bajo impacto articular',
    'Ayuda a mantener un peso saludable',
    'Reduce el estrés y mejora el estado de ánimo',
    'Favorece la circulación sanguínea',
    'Aumenta la resistencia física progresivamente',
    'Ideal para personas de todas las edades',
  ];

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      marginTop: '4rem', padding: '2rem', maxWidth: '60rem',
      marginLeft: 'auto', marginRight: 'auto',
      backgroundColor: '#f9f9f9', borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    }}>

      {/* ===============================
         📘 INTRODUCCIÓN DEL MÓDULO
      =============================== */}
      <div style={{ width: '100%', marginBottom: '2rem' }}>
        <button
          onClick={() => setMostrarInfo(!mostrarInfo)}
          style={{
            backgroundColor: '#2980b9',
            color: '#fff',
            padding: '0.6rem 1.5rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.4rem',
            transition: 'all 0.3s'
          }}
        >
          {mostrarInfo ? 'Ocultar información' : 'ℹ️ ¿Qué es este módulo?'}
        </button>

        {mostrarInfo && (
          <div style={{
            marginTop: '1.5rem',
            padding: '1.5rem',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            textAlign: 'justify',
            lineHeight: '1.6'
          }}>
            <h3 style={{ color: '#2980b9', fontWeight: '600', textAlign:'center' }}>
              🚶‍♂️ ¿Qué es Caminar?
            </h3>
            <p style={{ fontSize:'1.6rem', marginBottom:'2rem' }}>
              Caminar es un ejercicio aeróbico de bajo impacto que mejora la salud cardiovascular, fortalece piernas y ayuda a mantener un peso saludable.
            </p>

            <h3 style={{ color: '#2980b9', fontWeight: '600', textAlign:'center' }}>
              ⚙️ ¿Cómo funciona este módulo?
            </h3>
            <p style={{ fontSize:'1.6rem', marginBottom:'2rem' }}>
              El cronómetro registra el tiempo total de tu caminata. Mientras está activo:
            </p>
            <ul style={{ fontSize:'1.6rem', marginBottom:'2rem' }}>
              <li>⏱️ Se mide el tiempo exacto en segundos</li>
              <li>🔥 Se estiman las calorías quemadas según la duración</li>
              <li>🗓️ Se guarda la fecha y hora al finalizar la sesión</li>
            </ul>

            <h3 style={{ color: '#2980b9', fontWeight: '600', textAlign:'center' }}>
              📋 ¿Cómo usarlo?
            </h3>
            <ol style={{ fontSize:'1.6rem', marginBottom:'2rem' }}>
              <li>Presiona <strong>Iniciar</strong> cuando comiences tu caminata.</li>
              <li>Usa <strong>Detener</strong> si necesitas pausar tu entrenamiento.</li>
              <li>Haz clic en <strong>Reiniciar</strong> si deseas empezar desde cero.</li>
              <li>Selecciona <strong>Finalizar sesión</strong> para guardar el registro.</li>
            </ol>

            <p style={{ fontSize:'1.6rem' }}>
              💡 Recomendación: Mantén un ritmo constante, postura correcta y disfruta tu caminata.
            </p>
          </div>
        )}
      </div>

      <h2 style={{ textAlign: 'center'}}  >🚶‍♂️ Cronómetro de Caminata</h2>

      <h1 style={{ fontSize: '4rem', fontWeight: '700', margin: '1rem 0', fontFamily: 'monospace' }}>
        {formatTime(tiempo)}
      </h1>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <button
          onClick={handleStartStop}
          style={{
            padding: '0.8rem 2rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: isRunning ? '#f44336' : '#4caf50',
            color: '#fff',
            fontSize: '1.2rem'
          }}
        >
          {isRunning ? 'Detener' : 'Iniciar'}
        </button>

        <button
          onClick={handleReset}
          style={{
            padding: '0.8rem 2rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            fontSize: '1.2rem'
          }}
        >
          Reiniciar
        </button>
      </div>

      {!isRunning && tiempo > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <button
            onClick={handleFinalizar}
            style={{
              backgroundColor: '#2196f3',
              color: '#fff',
              padding: '0.8rem 2.5rem',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1.2rem'
            }}
          >
            Finalizar sesión
          </button>
        </div>
      )}

      <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
        🔥 Calorías quemadas estimadas: <strong>{calorias} kcal</strong>
      </p>

      {ultimaSesion && (
        <div style={{ marginTop: '3rem', padding: '1rem', backgroundColor: '#d0f0c0', borderRadius: '10px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: '700'   }} >📊 Última sesión registrada</h3>
          <p style={{ fontSize: '1.3rem'  }} > ⏱️ <strong> Tiempo: </strong> {formatTime(ultimaSesion.tiempo)}</p>
          <p style={{ fontSize: '1.3rem'  }} > 🔥 <strong> Calorias: </strong>  {Number(ultimaSesion.calorias).toFixed(2)} kcal</p>
          <p style={{ fontSize: '1.3rem'  }} > 🗓️  <strong> Fecha: </strong> {new Date(ultimaSesion.fecha).toLocaleString()}</p>
        </div>
      )}

      {/* ===============================
         💪 BENEFICIOS ESTILIZADOS
      =============================== */}
      <div style={{
        marginTop: '4rem',
        padding: '2rem',
        backgroundColor: '#e3f2fd',
        borderRadius: '12px'
      }}>
        <p style={{
          display: 'flex', gap: '0.5rem', fontSize: '2.5rem',
          textAlign: 'center', fontWeight:'700', color:'#2980b9'
        }}>🚶‍♀️ Beneficios de caminar</p>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          marginTop: '1.5rem',
          fontSize: '1.4rem',
          lineHeight: '1.4'
        }}>
          {beneficios.map((b, i) => (
            <li key={i} style={{ marginBottom: '0.8rem', display:'flex', gap:'0.5rem', alignItems:'flex-start' }}>
              <span style={{ color:'#2980b9' }}>✔</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Caminar;