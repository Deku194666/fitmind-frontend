import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Yoga = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [tiempo, setTiempo] = useState(0);
  const [ultimaSesion, setUltimaSesion] = useState(null);
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const caloriasPorMinuto = 6;
  const calorias = ((tiempo / 60) * caloriasPorMinuto).toFixed(2);

  // 🔑 Cierre de sesión por inactividad
  const cerrarSesion = () => {
    alert('⏱️ Sesión expirada por inactividad');
    localStorage.clear();
    window.location.href = '/login';
  };

  useEffect(() => {
    let timeoutId;
    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(cerrarSesion, 600000); // 10 minutos
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

  // ⏱️ Cronómetro
  useEffect(() => {
    let intervalo;
    if (isRunning) intervalo = setInterval(() => setTiempo(prev => prev + 1), 1000);
    else clearInterval(intervalo);
    return () => clearInterval(intervalo);
  }, [isRunning]);

  // 🔄 Última sesión
  useEffect(() => {
    const fetchUltimaSesion = async () => {
      const usuario_id = localStorage.getItem('usuario_id');
      if (!usuario_id) return;
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/yoga/${usuario_id}`,
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
  const handleReset = () => { setIsRunning(false); setTiempo(0); };

  const handleFinalizar = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return alert("Usuario no autenticado");

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/yoga`,
        { usuario_id, tiempo, calorias: parseFloat(calorias) },
        { headers: { 'user-id': usuario_id } }
      );
      alert('✅ Sesión de yoga registrada con éxito');
      setUltimaSesion({ tiempo, calorias: parseFloat(calorias), fecha: new Date() });
      setTiempo(0);
    } catch (error) {
      console.error('❌ Error al registrar sesión de yoga:', error.response?.data || error.message);
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
    "Reduce el estrés y la ansiedad",
    "Mejora la calidad del sueño",
    "Aumenta la flexibilidad y el equilibrio",
    "Fortalece músculos y articulaciones",
    "Favorece la concentración y la claridad mental",
    "Contribuye a una mejor postura y respiración",
  ];

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      marginTop: '4rem', padding: '2rem', maxWidth: '60rem',
      marginLeft: 'auto', marginRight: 'auto',
      backgroundColor: '#f9f9f9', borderRadius: '12px',
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
              🧘‍♂️ ¿Qué es Yoga?
            </h3>
            <p style={{ fontSize:'1.6rem', marginBottom:'2rem' }}>
              Yoga es una práctica física, mental y espiritual que mejora flexibilidad, equilibrio, fuerza y bienestar emocional.
            </p>

            <h3 style={{ color: '#2980b9', fontWeight: '600', textAlign:'center' }}>
              ⚙️ ¿Cómo funciona este módulo?
            </h3>
            <p style={{ fontSize:'1.6rem', marginBottom:'2rem' }}>
              El cronómetro registra el tiempo total de tu sesión de yoga. Mientras está activo:
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
              <li>Presiona <strong>Iniciar</strong> cuando comiences tu práctica.</li>
              <li>Usa <strong>Detener</strong> si necesitas pausar tu entrenamiento.</li>
              <li>Haz clic en <strong>Reiniciar</strong> si deseas empezar desde cero.</li>
              <li>Selecciona <strong>Finalizar sesión</strong> para guardar el registro.</li>
            </ol>

            <p style={{ fontSize:'1.6rem' }}>
              💡 Recomendación: Mantén la postura correcta, respira profundamente y ajusta la intensidad según tu nivel.
            </p>
          </div>
        )}
      </div>

      <h2>🧘 Cronómetro de Yoga</h2>
      <h1 style={{ fontSize:'4rem', fontWeight:'700', margin:'1rem 0', fontFamily:'monospace', color:'#333' }}>
        {formatTime(tiempo)}
      </h1>

      <div style={{ display:'flex', gap:'1rem', marginTop:'1rem' }}>
        <button onClick={handleStartStop} style={{
          padding:'0.8rem 2rem', borderRadius:'8px', border:'none',
          backgroundColor: isRunning ? '#f44336' : '#4caf50', color:'#fff',
          fontSize:'1.2rem', cursor:'pointer', transition:'background-color 0.3s'
        }}>{isRunning ? 'Detener' : 'Iniciar'}</button>

        <button onClick={handleReset} style={{
          padding:'0.8rem 2rem', borderRadius:'8px', border:'1px solid #ccc',
          backgroundColor:'#fff', color:'#333', fontSize:'1.2rem', cursor:'pointer', transition:'all 0.3s'
        }}>Reiniciar</button>
      </div>

      {!isRunning && tiempo > 0 && (
        <div style={{ marginTop:'2rem' }}>
          <button onClick={handleFinalizar} style={{
            backgroundColor:'#2196f3', color:'#fff', padding:'0.8rem 2.5rem',
            border:'none', borderRadius:'8px', fontSize:'1.2rem', cursor:'pointer',
            boxShadow:'0 3px 6px rgba(0,0,0,0.1)', transition:'background-color 0.3s'
          }}>Finalizar sesión</button>
        </div>
      )}

      <p style={{ marginTop:'2rem', fontSize:'1.2rem' }}>
        🔥 Calorías quemadas estimadas: <strong>{calorias} kcal</strong>
      </p>

      {ultimaSesion && (
        <div style={{ marginTop:'3rem', padding:'1rem', backgroundColor:'#e0f7fa', borderRadius:'10px' }}>
          <h3>📊 Última sesión registrada</h3>
          <p>⏱️ Tiempo: <strong>{formatTime(ultimaSesion.tiempo)}</strong></p>
          <p>🔥 Calorías: <strong>{ultimaSesion.calorias} kcal</strong></p>
          <p>🗓️ Fecha: <strong>{new Date(ultimaSesion.fecha).toLocaleString()}</strong></p>
        </div>
      )}

      <div style={{
        marginTop:'3rem', padding:'2rem', backgroundColor:'#e3f2fd',
        borderRadius:'12px'
      }}>
        <p style={{ display:'flex', gap:'0.5rem', fontSize:'2.5rem', textAlign:'center', fontWeight:'700', color:'#2980b9' }}>
          🧘‍♀️ Beneficios del Yoga
        </p>
        <ul style={{ listStyle:'none', padding:0, marginTop:'1rem', fontSize:'1.4rem', lineHeight:'1.4' }}>
          {beneficios.map((b,i)=>(
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

export default Yoga;