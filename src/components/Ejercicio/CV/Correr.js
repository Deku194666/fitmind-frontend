import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const STORAGE_KEY = 'correr_timer';

const Correr = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [tiempo, setTiempo] = useState(0);
  const [tiempoBase, setTiempoBase] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [ultimaSesion, setUltimaSesion] = useState(null);
  const [isHydrated, setIsHydrated] = useState(false);

  const intervalRef = useRef(null);

  const caloriasPorMinuto = 12;
  const calorias = ((tiempo / 60) * caloriasPorMinuto).toFixed(2);

  /* ===============================
     🔁 RESTAURAR ESTADO
     =============================== */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setIsRunning(data.isRunning);
        setTiempoBase(data.tiempoBase || 0);
        setStartTime(data.startTime);
        setTiempo(data.tiempoBase || 0);
      } catch (e) {
        console.error('Error restaurando correr:', e);
      }
    }
    setIsHydrated(true);
  }, []);

  /* ===============================
     ⏱️ CRONÓMETRO REAL
     =============================== */
  useEffect(() => {
    if (!isHydrated) return;

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
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
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
        JSON.stringify({
          isRunning: true,
          startTime: now,
          tiempoBase
        })
      );
    } else {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const total = tiempoBase + elapsed;

      setTiempo(total);
      setTiempoBase(total);
      setIsRunning(false);
      setStartTime(null);

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          isRunning: false,
          startTime: null,
          tiempoBase: total
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
      timeoutId = setTimeout(cerrarSesion, 60000);
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
     📥 ÚLTIMA SESIÓN
     =============================== */
  useEffect(() => {
    const fetchUltimaSesion = async () => {
      const usuario_id = localStorage.getItem('usuario_id');
      if (!usuario_id) return;
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/correr/${usuario_id}`,
          { headers: { 'user-id': usuario_id } }
        );
        setUltimaSesion(res.data);
      } catch (err) {
        console.error('❌ Error al obtener la última sesión de correr:', err.response?.data || err.message);
      }
    };
    fetchUltimaSesion();
  }, []);

  /* ===============================
     💾 FINALIZAR SESIÓN
     =============================== */
  const handleFinalizar = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) {
      alert('Usuario no autenticado');
      return;
    }
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/correr`,
        { usuario_id, tiempo, calorias: parseFloat(calorias) },
        { headers: { 'user-id': usuario_id } }
      );
      alert('✅ Sesión registrada con éxito');
      setUltimaSesion({ tiempo, calorias: parseFloat(calorias), fecha: new Date() });
      handleReset();
    } catch (error) {
      console.error('❌ Error al registrar sesión de correr:', error.response?.data || error.message);
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
    "Mejora la capacidad cardiovascular y respiratoria",
    "Reduce el riesgo de enfermedades cardíacas y ACV",
    "Favorece la pérdida de grasa corporal",
    "Aumenta la resistencia física",
    "Libera endorfinas y mejora el ánimo",
    "Mejora la calidad del sueño"
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
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    }}>
      <h2>🏃 Cronómetro de Correr</h2>

      <h1 style={{ fontSize: '4rem', fontFamily: 'monospace' }}>
        {formatTime(tiempo)}
      </h1>

      <div style={{ display: 'flex', gap: '1rem' }}>
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
        <div style={{ marginTop: '3rem', padding: '1rem', backgroundColor: '#d0f0c0', borderRadius: '10px' }}>
          <h3>📊 Última sesión registrada</h3>
          <p>⏱️ {formatTime(ultimaSesion.tiempo)}</p>
          <p>🔥 {ultimaSesion.calorias} kcal</p>
          <p>🗓️ {new Date(ultimaSesion.fecha).toLocaleString()}</p>
        </div>
      )}

      <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: '#e3f2fd', borderRadius: '12px' }}>
        <h2>🏃‍♂️ Beneficios de correr</h2>
        <ul>
          {beneficios.map((b, i) => <li key={i}>✅ {b}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Correr;
