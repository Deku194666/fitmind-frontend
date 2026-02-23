import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const STORAGE_KEY = 'sprint_cronometro';

const Sprint = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [tiempo, setTiempo] = useState(0);
  const [tiempoBase, setTiempoBase] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [ultimaSesion, setUltimaSesion] = useState(null);
  const [mostrarInfo, setMostrarInfo] = useState(false); // <- estado agregado

  const intervalRef = useRef(null);

  const caloriasPorMinuto = 15;
  const calorias = ((tiempo / 60) * caloriasPorMinuto).toFixed(2);

  /* ===============================
     🔑 CIERRE POR INACTIVIDAD
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
    resetTimeout();
    window.addEventListener('mousemove', resetTimeout);
    window.addEventListener('keydown', resetTimeout);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', resetTimeout);
      window.removeEventListener('keydown', resetTimeout);
    };
  }, []);

  /* ===============================
     💾 CARGAR ESTADO GUARDADO
     =============================== */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    const data = JSON.parse(saved);
    setIsRunning(data.isRunning);
    setTiempoBase(data.tiempoBase || 0);
    setTiempo(data.tiempoBase || 0);
    setStartTime(data.startTime);
  }, []);

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
      setTiempo(tiempoBase + elapsed);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isRunning, startTime, tiempoBase]);

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
        JSON.stringify({
          isRunning: true,
          startTime: now,
          tiempoBase
        })
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
        JSON.stringify({
          isRunning: false,
          startTime: null,
          tiempoBase: nuevoTiempo
        })
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
     📥 ÚLTIMA SESIÓN
     =============================== */
  useEffect(() => {
    const fetchUltimaSesion = async () => {
      const usuario_id = localStorage.getItem('usuario_id');
      if (!usuario_id) return;
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/sprint/${usuario_id}`,
          { headers: { 'user-id': usuario_id } }
        );
        setUltimaSesion(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUltimaSesion();
  }, []);

  const handleFinalizar = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/sprint`,
        { usuario_id, tiempo, calorias: parseFloat(calorias) },
        { headers: { 'user-id': usuario_id } }
      );

      alert('✅ Sesión de sprint registrada con éxito');
      setUltimaSesion({ tiempo, calorias: parseFloat(calorias), fecha: new Date() });
      handleReset();
    } catch (error) {
      alert('Error al registrar la sesión');
    }
  };

  const formatTime = (segundos) => {
    const h = Math.floor(segundos / 3600);
    const m = Math.floor((segundos % 3600) / 60);
    const s = segundos % 60;
    return `${h.toString().padStart(2, '0')}:${m
      .toString()
      .padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const beneficios = [
    "Aumenta significativamente la capacidad cardiovascular",
    "Mejora la resistencia anaeróbica y aeróbica",
    "Favorece la quema de grasa post-ejercicio",
    "Potencia el desarrollo muscular de piernas y core",
    "Reduce el tiempo total de entrenamiento con alta eficacia",
    "Mejora la velocidad y coordinación neuromuscular"
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '4rem',
      padding: '2rem',
      maxWidth: '60rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      textAlign: 'center'
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
              ⚡ ¿Qué es Sprint por Intervalos?
            </h3>
            <p style={{ fontSize:'1.6rem', marginBottom:'2rem' }}>
              El Sprint por Intervalos es un ejercicio de alta intensidad diseñado para mejorar la capacidad cardiovascular,
              fuerza de piernas y velocidad, además de optimizar la quema de calorías en menos tiempo.
            </p>

            <h3 style={{ color: '#2980b9', fontWeight: '600', textAlign:'center' }}>
              ⚙️ ¿Cómo funciona este módulo?
            </h3>
            <p style={{ fontSize:'1.6rem', marginBottom:'2rem' }}>
              El cronómetro registra el tiempo total que dedicas a los sprints. Mientras está activo:
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
              <li>Presiona <strong>Iniciar</strong> cuando comiences los sprints.</li>
              <li>Usa <strong>Detener</strong> si necesitas pausar tu entrenamiento.</li>
              <li>Haz clic en <strong>Reiniciar</strong> si deseas empezar desde cero.</li>
              <li>Selecciona <strong>Finalizar sesión</strong> para guardar el registro.</li>
            </ol>

            <p style={{ fontSize:'1.6rem' }}>
              💡 Recomendación: Alterna intensidad alta y baja según tu nivel y mantén la técnica correcta para evitar lesiones.
            </p>
          </div>
        )}
      </div>

      <h2>⚡ Cronómetro de Sprint por Intervalos</h2>

      <h1 style={{
        fontSize: '4rem',
        fontWeight: '700',
        margin: '1rem 0',
        fontFamily: 'monospace'
      }}>
        {formatTime(tiempo)}
      </h1>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={handleStartStop}
        style={{
            padding: '0.8rem 2rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: isRunning ? '#f44336' : '#4caf50',
            color: '#fff',
            fontSize: '1.2rem'
          }}>
          {isRunning ? 'Detener' : 'Iniciar'}
        </button>
        <button onClick={handleReset}
        style={{
            padding: '0.8rem 2rem',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#fff',
            fontSize: '1.2rem'
          }}
          >Reiniciar</button>
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

      <p style={{ marginTop: '2rem', fontSize: '1.3rem'  }}>
        🔥 Calorías estimadas: <strong>{calorias} kcal</strong>
      </p>

      {ultimaSesion && (
        <div style={{ marginTop: '3rem', padding: '1rem', backgroundColor: '#d0f0c0', borderRadius: '10px', textAlign: 'center',  }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: '700', textAlign: 'center'  }} >📊 Última sesión Registrada </h3>
          <p style={{ fontSize: '1.3rem'  }} > ⏱️ <strong> Tiempo: </strong> {formatTime(ultimaSesion.tiempo)}</p>
          <p style={{ fontSize: '1.3rem'  }} >🔥 <strong> Calorias: </strong> {ultimaSesion.calorias} kcal</p>
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
          display: 'flex',
          gap: '0.1rem',
          fontSize: '2.7rem',
          textAlign: 'center',
          fontWeight:'700',
          color:'#2980b9'
        }}>⚡ Beneficios del Sprint</p>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          marginTop: '1.5rem',
          fontSize: '1.4rem',
          lineHeight: '1.4'
        }}>
          {beneficios.map((b, i) => (
            <li key={i} style={{
              marginBottom: '0.8rem',
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'flex-start'
            }}>
              <span style={{ color: '#2980b9' }}>✔</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Sprint;