import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BoxeoSaco = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [tiempo, setTiempo] = useState(0); 
  const [ultimaSesion, setUltimaSesion] = useState(null);
  const [hydrated, setHydrated] = useState(false);


  const caloriasPorMinuto = 11; 
  const calorias = ((tiempo / 60) * caloriasPorMinuto).toFixed(2); 

  // 🔄 Restaurar cronómetro desde localStorage al montar
  useEffect(() => {
    const savedTiempo = localStorage.getItem('boxeosaco_tiempo');
    const savedIsRunning = localStorage.getItem('boxeosaco_isRunning');

    if (savedTiempo !== null) setTiempo(Number(savedTiempo));
    if (savedIsRunning === 'true') setIsRunning(true);

    setHydrated(true);
  }, []);

  // 🔄 Guardar estado del cronómetro en localStorage
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem('boxeosaco_tiempo', tiempo);
    localStorage.setItem('boxeosaco_isRunning', isRunning);
  }, [tiempo, isRunning]);

  const cerrarSesion = () => {
    alert('⏱️ Sesión expirada por inactividad');
    localStorage.clear();
    window.location.href = '/login';
  };

  // ⏱️ Timeout de inactividad
  useEffect(() => {
    let timeoutId;
    const resetTimeout = () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (isRunning) return; // 👈 NO cerrar sesión si está corriendo
      timeoutId = setTimeout(cerrarSesion, 600000);
    };
    window.addEventListener('mousemove', resetTimeout);
    window.addEventListener('keydown', resetTimeout);
    resetTimeout(); 
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', resetTimeout);
      window.removeEventListener('keydown', resetTimeout);
    };
  }, [isRunning]);


  // ⏱️ Cronómetro
  useEffect(() => {
    let intervalo;
    if (isRunning) intervalo = setInterval(() => setTiempo(prev => prev + 1), 1000);
    else clearInterval(intervalo);
    return () => clearInterval(intervalo);
  }, [isRunning]);

  // 📥 Obtener última sesión
  useEffect(() => {
    const fetchUltimaSesion = async () => {
      const usuario_id = localStorage.getItem('usuario_id');
      if (!usuario_id) return;
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/boxeosaco/${usuario_id}`,
          { headers: { 'user-id': usuario_id } }
        );
        setUltimaSesion(res.data);
      } catch (err) {
        console.error('❌ Error al obtener la última sesión:', err.response?.data || err.message);
      }
    };
    fetchUltimaSesion();
  }, []);

  const handleStartStop = () => setIsRunning(!isRunning);

  const handleReset = () => {
    setIsRunning(false);
    setTiempo(0);
    localStorage.removeItem('boxeosaco_tiempo');
    localStorage.removeItem('boxeosaco_isRunning');
  };

  const handleFinalizar = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return alert("Usuario no autenticado");

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/boxeosaco`,
        { usuario_id, tiempo, calorias: parseFloat(calorias) },
        { headers: { 'user-id': usuario_id } }
      );
      setUltimaSesion({ tiempo, calorias: parseFloat(calorias), fecha: new Date() });
      handleReset();
      alert('✅ Sesión de boxeo en saco registrada con éxito');
    } catch (error) {
      console.error('❌ Error al registrar sesión:', error.response?.data || error.message);
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
    "Mejora la resistencia cardiovascular y respiratoria",
    "Incrementa la fuerza y potencia muscular",
    "Favorece la coordinación y reflejos",
    "Ayuda a reducir el estrés y la ansiedad",
    "Quema un alto número de calorías en poco tiempo",
    "Desarrolla agilidad, velocidad y equilibrio"
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
      <h2>🥊 Cronómetro de Boxeo en Saco</h2>
      <h1 style={{ fontSize: '4rem', fontWeight: '700', margin: '1rem 0', fontFamily: 'monospace', color: '#333' }}>
        {formatTime(tiempo)}
      </h1>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <button onClick={handleStartStop} style={{
          padding: '0.8rem 2rem',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: isRunning ? '#f44336' : '#4caf50',
          color: '#fff',
          fontSize: '1.2rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}>{isRunning ? 'Detener' : 'Iniciar'}</button>

        <button onClick={handleReset} style={{
          padding: '0.8rem 2rem',
          border: '1px solid #ccc',
          borderRadius: '8px',
          backgroundColor: '#fff',
          color: '#333',
          fontSize: '1.2rem',
          cursor: 'pointer'
        }}>Reiniciar</button>
      </div>

      {!isRunning && tiempo > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <button onClick={handleFinalizar} style={{
            backgroundColor: '#d32f2f',
            color: '#fff',
            padding: '0.8rem 2.5rem',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.2rem',
            cursor: 'pointer',
            boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
            transition: 'background-color 0.3s'
          }}>Finalizar sesión</button>
        </div>
      )}

      <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
        🔥 Calorías quemadas estimadas: <strong>{calorias} kcal</strong>
      </p>

      {ultimaSesion && (
        <div style={{ marginTop: '3rem', padding: '1rem', backgroundColor: '#ffcdd2', borderRadius: '10px' }}>
          <h3>📊 Última sesión registrada</h3>
          <p>⏱️ Tiempo: <strong>{formatTime(ultimaSesion.tiempo)}</strong></p>
          <p>🔥 Calorías: <strong>{ultimaSesion.calorias} kcal</strong></p>
          <p>🗓️ Fecha: <strong>{new Date(ultimaSesion.fecha).toLocaleString()}</strong></p>
        </div>
      )}

      <div style={{
        maxWidth: '60rem',
        margin: '4rem auto',
        textAlign: 'left',
        padding: '2rem',
        backgroundColor: '#ffebee',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.6rem' }}>🥊 Beneficios del boxeo en saco</h2>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.6' }}>
          {beneficios.map((item, index) => <li key={index}>✅ {item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default BoxeoSaco;
