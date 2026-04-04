import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';

const STORAGE_KEY = 'fitmind_musculacion';

const Musculacion = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [tiempo, setTiempo] = useState(0);
  const [tiempoBase, setTiempoBase] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [ultimaSesion, setUltimaSesion] = useState(null);
  const [loading, setLoading] = useState(true);
  const isHydrated = useRef(false);
  const intervalRef = useRef(null);

  const [mostrarNotas, setMostrarNotas] = useState(false);
  const [notas, setNotas] = useState('');
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const caloriasPorMinuto = 10;
  const calorias = ((tiempo / 60) * caloriasPorMinuto).toFixed(2);

  /* ===============================
     🔁 RESTAURAR ESTADO (FIX REAL)
     =============================== */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      isHydrated.current = true;
      return;
    }

    try {
      const data = JSON.parse(saved);

      if (typeof data.tiempo === 'number') {
        setTiempo(data.tiempo);
        setTiempoBase(data.tiempo);
      }

      if (typeof data.notas === 'string') {
        setNotas(data.notas);
      }

      if (data.isRunning && typeof data.startTime === 'number') {
        setIsRunning(true);
        setStartTime(data.startTime);
      }
    } catch (err) {
      console.error('Error restaurando cronómetro:', err);
    } finally {
      isHydrated.current = true;
    }
  }, []);

  /* ===============================
     💾 GUARDAR ESTADO (FIX REAL)
     =============================== */
  useEffect(() => {
    if (!isHydrated.current) return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        isRunning,
        startTime,
        tiempoBase: tiempo,
        tiempo,
        notas
      })
    );
  }, [isRunning, startTime, tiempo, notas]);

  /* ===============================
     ⏱️ CRONÓMETRO REAL
     =============================== */
  useEffect(() => {
    if (!isRunning || !startTime) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setTiempo(elapsed);
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, startTime]);

  /* ===============================
     📡 ÚLTIMA SESIÓN
     =============================== */
  const fetchUltimaSesion = useCallback(async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) {
      setUltimaSesion(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/api/musculacion/ultimo/${usuario_id}`);
      const sesion = res.data || {};
      setUltimaSesion({
        tiempo: Number(sesion.tiempo) || 0,
        calorias: Number(sesion.calorias) || 0,
        notas: sesion.notas || '',
        fecha: sesion.fecha ? new Date(sesion.fecha) : null
      });
    } catch (err) {
      console.error('Error al obtener última sesión:', err);
      setUltimaSesion(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUltimaSesion();
  }, [fetchUltimaSesion]);

  /* ===============================
     🎮 CONTROLES
     =============================== */
  const handleStartStop = () => {
    if (!isRunning) {
      setStartTime(Date.now());
      setIsRunning(true);
    } else {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const total = tiempoBase + elapsed;
      setTiempo(total);
      setTiempoBase(total);
      setIsRunning(false);
      setStartTime(null);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTiempo(0);
    setTiempoBase(0);
    setStartTime(null);
    setNotas('');
    localStorage.removeItem(STORAGE_KEY);
  };

  const handleFinalizar = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return alert('Usuario no autenticado');

    try {
      await axios.post(
        `${API_URL}/api/musculacion`,
        { usuario_id, tiempo, calorias: parseFloat(calorias), notas },
        { headers: { 'user-id': usuario_id } }
      );
      await fetchUltimaSesion();
      handleReset();
      alert('✅ Sesión registrada con éxito');
    } catch (error) {
      console.error('Error al registrar sesión:', error);
      alert('Error al registrar en la base de datos');
    }
  };

  const formatTime = (segundos) => {
    const h = Math.floor(segundos / 3600);
    const m = Math.floor((segundos % 3600) / 60);
    const s = segundos % 60;
    return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  };

  const beneficios = [
    "Fortalece y tonifica los músculos principales",
    "Mejora la resistencia y fuerza física",
    "Aumenta la densidad ósea y salud articular",
    "Favorece la postura y coordinación motora",
    "Contribuye al bienestar mental y reducción del estrés",
    "Ideal para personalizar rutinas según nivel y objetivos"
  ];

  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      marginTop:'4rem',
      padding:'2rem',
      maxWidth:'60rem',
      margin:'auto',
      backgroundColor:'#f9f9f9',
      borderRadius:'12px',
      boxShadow:'0 4px 15px rgba(0,0,0,0.1)',
      textAlign:'center'
    }}>

      {/* ===============================
         📘 INTRODUCCIÓN DEL MÓDULO
      =============================== */}
      <div style={{ width:'100%', marginBottom:'2rem' }}>
        <button
          onClick={() => setMostrarInfo(!mostrarInfo)}
          style={{
            backgroundColor:'#2980b9',
            color:'#fff',
            padding:'0.6rem 1.5rem',
            border:'none',
            borderRadius:'8px',
            cursor:'pointer',
            fontSize:'1.4rem',
            transition:'all 0.3s'
          }}
        >
          {mostrarInfo ? 'Ocultar información' : 'ℹ️ ¿Qué es este módulo?'}
        </button>

        {mostrarInfo && (
          <div style={{
            marginTop:'1.5rem',
            padding:'1.5rem',
            backgroundColor:'#ffffff',
            borderRadius:'12px',
            boxShadow:'0 4px 15px rgba(0,0,0,0.08)',
            textAlign:'justify',
            lineHeight:'1.6'
          }}>
            <h3 style={{ color:'#2980b9', fontWeight:'600', textAlign:'center' }}>
              🏋️‍♂️ Musculación
            </h3>
            <p style={{ fontSize:'1.6rem', marginBottom:'2rem' }}>
              La musculación es un entrenamiento de fuerza que fortalece, tonifica músculos y mejora la resistencia física. Este módulo permite cronometrar tus sesiones, calcular calorías estimadas y registrar tus progresos.
            </p>

            <h3 style={{ color:'#2980b9', fontWeight:'600', textAlign:'center' }}>
              ⚙️ ¿Cómo funciona este módulo?
            </h3>
            <p style={{ fontSize:'1.6rem', marginBottom:'2rem' }}>
              El cronómetro registra el tiempo total de tu entrenamiento de musculación. Mientras está activo:
            </p>
            <ul style={{ fontSize:'1.6rem', marginBottom:'2rem' }}>
              <li>⏱️ Se mide el tiempo exacto en segundos</li>
              <li>🔥 Se estiman las calorías quemadas según la duración</li>
              <li>📝 Se pueden agregar notas de tus ejercicios</li>
              <li>🗓️ Se guarda la fecha y hora al finalizar la sesión</li>
            </ul>

            <h3 style={{ color:'#2980b9', fontWeight:'600', textAlign:'center' }}>
              📋 ¿Cómo usarlo?
            </h3>
            <ol style={{ fontSize:'1.6rem', marginBottom:'2rem' }}>
              <li>Presiona <strong>Iniciar</strong> cuando comiences tu entrenamiento.</li>
              <li>Usa <strong>Detener</strong> si necesitas pausar tu sesión.</li>
              <li>Haz clic en <strong>Reiniciar</strong> si deseas empezar desde cero.</li>
              <li>Selecciona <strong>Finalizar sesión</strong> para guardar el registro.</li>
              <li>Agrega notas adicionales para tu seguimiento.</li>
            </ol>

            <p style={{ fontSize:'1.6rem' }}>
              💡 Recomendación: Mantén la técnica correcta, respira adecuadamente y ajusta la intensidad según tu nivel.
            </p>
          </div>
        )}
      </div>

      <h2>🏋️ Cronómetro de Musculación</h2>
      <h1 style={{ fontSize:'4rem', fontFamily:'monospace', margin:'1rem 0' }}>
        {formatTime(tiempo)}
      </h1>

      <div style={{ display:'flex', gap:'1rem' }}>
        <button
          onClick={handleStartStop}
          style={{
            padding:'0.8rem 2rem',
            borderRadius:'8px',
            border:'none',
            backgroundColor: isRunning ? '#f44336' : '#4caf50',
            color:'#fff',
            fontSize:'1.2rem',
            cursor:'pointer'
          }}
        >
          {isRunning ? 'Detener' : 'Iniciar'}
        </button>

        <button
          onClick={handleReset}
          style={{
            padding:'0.8rem 2rem',
            borderRadius:'8px',
            border:'1px solid #ccc',
            background:'#fff',
            fontSize:'1.2rem',
            cursor:'pointer'
          }}
        >
          Reiniciar
        </button>
      </div>

      {!isRunning && tiempo > 0 && (
        <button
          onClick={handleFinalizar}
          style={{
            marginTop:'2rem',
            padding:'0.8rem 2.5rem',
            background:'#2196f3',
            color:'#fff',
            border:'none',
            borderRadius:'8px',
            fontSize:'1.2rem',
            cursor:'pointer'
          }}
        >
          Finalizar sesión
        </button>
      )}

      <p style={{ marginTop:'2rem', fontSize:'1.2rem' }}>
        🔥 Calorías estimadas: <strong>{calorias} kcal</strong>
      </p>

      <button
        onClick={() => setMostrarNotas(!mostrarNotas)}
        style={{
          marginTop:'1.5rem',
          padding:'0.6rem 1.8rem',
          borderRadius:'8px',
          border:'1px solid #ccc',
          background:'#fff',
          cursor:'pointer'
        }}
      >
        📝 {mostrarNotas ? 'Ocultar notas' : 'Agregar notas'}
      </button>

      {mostrarNotas && (
        <textarea
          value={notas}
          onChange={(e) => setNotas(e.target.value)}
          placeholder="Anota tus ejercicios..."
          style={{
            width:'100%',
            marginTop:'1rem',
            minHeight:'120px',
            padding:'1rem',
            borderRadius:'8px',
            border:'1px solid #ccc'
          }}
        />
      )}

      <div style={{
        marginTop:'3rem',
        padding:'1rem',
        background:'#e0f7fa',
        borderRadius:'10px',
        width:'100%'
      }}>
        {loading ? <p>Cargando última sesión...</p> :
          ultimaSesion ? (
            <>
              <h3>📊 Última sesión registrada </h3>
              <p>⏱️ <strong> Tiempo: </strong> {formatTime(ultimaSesion.tiempo)}</p>
              <p>🔥 <strong> Calorias: </strong> {ultimaSesion.calorias.toFixed(2)} kcal</p>
              <p>🗓️ <strong> Fecha: </strong>  {ultimaSesion.fecha?.toLocaleString()}</p>
              {ultimaSesion.notas && ultimaSesion.notas.trim().length > 0 && (
                <div style={{ marginTop:'1rem', textAlign:'left' }}>
                  <p><strong>📝 Notas:</strong></p>
                  <pre style={{
                    whiteSpace:'pre-wrap',
                    background:'#fff',
                    padding:'0.8rem',
                    borderRadius:'6px',
                    fontSize:'0.95rem'
                  }}>{ultimaSesion.notas}</pre>
                </div>
              )}
            </>
          ) : <p>No hay sesiones registradas</p>
        }
      </div>

      {/* ===============================
         🏆 Beneficios 
      =============================== */}
      <div style={{
        marginTop:'3rem',
        padding:'2rem',
        background:'#e3f2fd',
        borderRadius:'12px',
        width:'100%'
      }}>
        <h2 style={{ color:'#2980b9', fontSize:'2.5rem', textAlign:'center', fontWeight:'700' }}>
          🏋️ Beneficios de la Musculación
        </h2>
        <ul style={{ listStyle:'none', padding:0, marginTop:'1rem', fontSize:'1.4rem', lineHeight:'1.4' }}>
          {beneficios.map((b,i) => (
            <li key={i} style={{ marginBottom:'0.8rem', display:'flex', gap:'0.5rem', alignItems:'flex-start' }}>
              <span style={{ color:'#2980b9' }}>✔</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Musculacion;