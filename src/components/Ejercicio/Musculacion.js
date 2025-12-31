import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';

const Musculacion = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [tiempo, setTiempo] = useState(0);
  const [ultimaSesion, setUltimaSesion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hydrated, setHydrated] = useState(false);


  const [mostrarEjercicios, setMostrarEjercicios] = useState(false);
  const [ejercicios, setEjercicios] = useState([]);
  const [nuevoEjercicio, setNuevoEjercicio] = useState({
    nombre: '',
    series: '',
    repeticiones: ''
  });

  const caloriasPorMinuto = 10;
  const calorias = ((tiempo / 60) * caloriasPorMinuto).toFixed(2);

  const beneficiosMusculacion = [
    "Aumenta la fuerza y resistencia muscular",
    "Mejora la composición corporal",
    "Fortalece huesos y articulaciones",
    "Acelera el metabolismo basal",
    "Previene lesiones musculares",
    "Mejora la postura y estabilidad",
    "Contribuye a la salud mental y autoestima",
  ];

  // 🔄 Restaurar cronómetro desde localStorage al montar
  useEffect(() => {
  const savedTiempo = localStorage.getItem('musculacion_tiempo');
  const savedIsRunning = localStorage.getItem('musculacion_isRunning');
  const savedEjercicios = localStorage.getItem('musculacion_ejercicios');


  if (savedTiempo !== null) setTiempo(Number(savedTiempo));
  if (savedIsRunning === 'true') setIsRunning(true);
  if (savedEjercicios) setEjercicios(JSON.parse(savedEjercicios));
  

  setHydrated(true); // 👈 CLAVE
}, []);

  // 🔄 Guardar estado del cronómetro en localStorage
  useEffect(() => {
    if (!hydrated) return; 

    localStorage.setItem('musculacion_tiempo', tiempo);
    localStorage.setItem('musculacion_isRunning', isRunning);
    localStorage.setItem('musculacion_ejercicios', JSON.stringify(ejercicios)); // 👈 aquí
}, [tiempo, isRunning, ejercicios, hydrated]);
  
  

  // 🔑 Función para cerrar sesión por inactividad
  const cerrarSesion = () => {
    alert('⏱️ Sesión expirada por inactividad');
    localStorage.clear();
    window.location.href = '/login';
  };

  // ⏱️ Timeout de inactividad: 5 minutos
  useEffect(() => {
    let timeoutId;
    const resetTimeout = () => {
      clearTimeout(timeoutId);
      if (isRunning) return; // no cerrar sesión si el cronómetro está corriendo
      timeoutId = setTimeout(cerrarSesion, 300000);
    };

    resetTimeout();
    window.addEventListener('mousemove', resetTimeout);
    window.addEventListener('keydown', resetTimeout);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', resetTimeout);
      window.removeEventListener('keydown', resetTimeout);
    };
  }, [isRunning]);

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
        fecha: sesion.fecha ? new Date(sesion.fecha) : null,
        ejercicios: sesion.ejercicios || []
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

  // Cronómetro
  useEffect(() => {
    let intervalo;
    if (isRunning) intervalo = setInterval(() => setTiempo(prev => prev + 1), 1000);
    else clearInterval(intervalo);
    return () => clearInterval(intervalo);
  }, [isRunning]);

  const handleStartStop = () => setIsRunning(!isRunning);

  const handleReset = () => {
    setIsRunning(false);
    setTiempo(0);
    localStorage.removeItem('musculacion_tiempo');
    localStorage.removeItem('musculacion_isRunning');
  };

  const handleFinalizar = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return alert("Usuario no autenticado");

    try {
      await axios.post(
        `${API_URL}/api/musculacion`,
        { usuario_id, tiempo, calorias: parseFloat(calorias), ejercicios },
        { headers: { 'user-id': usuario_id } }
      );

      await fetchUltimaSesion();
      handleReset();
      setEjercicios([]);
      alert('✅ Sesión registrada con éxito');
    } catch (error) {
      console.error('Error al registrar sesión:', error);
      alert('Error al registrar en la base de datos');
    }
  };

  const agregarEjercicio = () => {
    if (!nuevoEjercicio.nombre) return;
    setEjercicios([...ejercicios, nuevoEjercicio]);
    setNuevoEjercicio({ nombre:'', series:'', repeticiones:'' });
  };

  const eliminarEjercicio = (index) => {
    setEjercicios(ejercicios.filter((_, i) => i !== index));
  };

  const formatTime = (segundos) => {
    const h = Math.floor(segundos / 3600);
    const m = Math.floor((segundos % 3600) / 60);
    const s = segundos % 60;
    return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  };

  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      marginTop:'4rem',
      padding:'2rem',
      maxWidth:'60rem',
      marginLeft:'auto',
      marginRight:'auto',
      backgroundColor:'#f9f9f9',
      borderRadius:'12px',
      boxShadow:'0 4px 15px rgba(0,0,0,0.1)'
    }}>
      <h2>🏋️ Cronómetro de Musculación</h2>

      <h1 style={{ fontSize:'4rem', fontWeight:'700', margin:'1rem 0', fontFamily:'monospace', color:'#333' }}>
        {formatTime(tiempo)}
      </h1>

      <div style={{ display:'flex', gap:'1rem', marginTop:'1rem' }}>
        <button onClick={handleStartStop} style={{
          padding:'0.8rem 2rem',
          borderRadius:'8px',
          border:'none',
          backgroundColor:isRunning ? '#f44336':'#4caf50',
          color:'#fff',
          fontSize:'1.2rem',
          cursor:'pointer'
        }}>{isRunning ? 'Detener' : 'Iniciar'}</button>

        <button onClick={handleReset} style={{
          padding:'0.8rem 2rem',
          borderRadius:'8px',
          border:'1px solid #ccc',
          backgroundColor:'#fff',
          color:'#333',
          fontSize:'1.2rem',
          cursor:'pointer'
        }}>Reiniciar</button>
      </div>

      {!isRunning && tiempo > 0 && (
        <div style={{ marginTop:'2rem' }}>
          <button onClick={handleFinalizar} style={{
            backgroundColor:'#2196f3',
            color:'#fff',
            padding:'0.8rem 2.5rem',
            border:'none',
            borderRadius:'8px',
            fontSize:'1.2rem',
            cursor:'pointer'
          }}>
            Finalizar sesión
          </button>
        </div>
      )}

      <p style={{ marginTop:'2rem', fontSize:'1.2rem' }}>
        🔥 Calorías quemadas estimadas: <strong>{calorias} kcal</strong>
      </p>

      {/* Última sesión */}
      <div style={{ marginTop:'2rem', padding:'1rem', backgroundColor:'#e0f7fa', borderRadius:'10px', width:'100%' }}>
        {loading ? <p>Cargando última sesión...</p> :
          ultimaSesion ? (
            <>
              <h3>📊 Última sesión registrada</h3>
              <p>⏱️ Tiempo: <strong>{formatTime(ultimaSesion.tiempo)}</strong></p>
              <p>🔥 Calorías: <strong>{ultimaSesion.calorias.toFixed(2)} kcal</strong></p>
              <p>🗓️ Fecha: <strong>{ultimaSesion.fecha ? ultimaSesion.fecha.toLocaleString() : "Sin datos"}</strong></p>

              {ultimaSesion.ejercicios && ultimaSesion.ejercicios.length > 0 && (
                <div style={{ marginTop:'1rem' }}>
                  <h4>📝 Ejercicios realizados:</h4>
                  <ul>
                    {ultimaSesion.ejercicios.map((ej, index) => (
                      <li key={index}>{ej.nombre} — {ej.series} x {ej.repeticiones}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : <p>No hay sesiones registradas aún</p>
        }
      </div>

      {/* Lista de ejercicios activa */}
      <button onClick={() => setMostrarEjercicios(!mostrarEjercicios)} style={{
        marginTop:'1.5rem',
        padding:'0.6rem 1.5rem',
        borderRadius:'8px',
        border:'1px solid #ccc',
        backgroundColor:'#fff',
        cursor:'pointer'
      }}>📝 Anotar ejercicios</button>

      {mostrarEjercicios && (
        <div style={{
          marginTop:'1.5rem',
          width:'100%',
          padding:'1.2rem',
          backgroundColor:'#fff',
          borderRadius:'10px',
          boxShadow:'0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display:'flex', gap:'0.5rem' }}>
            <input placeholder="Ejercicio" value={nuevoEjercicio.nombre}
              onChange={e => setNuevoEjercicio({ ...nuevoEjercicio, nombre: e.target.value })}/>
            <input placeholder="Series" value={nuevoEjercicio.series}
              onChange={e => setNuevoEjercicio({ ...nuevoEjercicio, series: e.target.value })}/>
            <input placeholder="Reps" value={nuevoEjercicio.repeticiones}
              onChange={e => setNuevoEjercicio({ ...nuevoEjercicio, repeticiones: e.target.value })}/>
            <button onClick={agregarEjercicio}>➕</button>
          </div>

          <ul style={{ marginTop:'1rem' }}>
            {ejercicios.map((ej, index) => (
              <li key={index}>
                🏋️ {ej.nombre} — {ej.series} x {ej.repeticiones}
                <button onClick={() => eliminarEjercicio(index)}> 🗑️</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Beneficios */}
      <div style={{
        maxWidth:'60rem',
        margin:'4rem auto',
        textAlign:'left',
        padding:'2rem',
        backgroundColor:'#f9f9f9',
        borderRadius:'12px',
        boxShadow:'0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize:'1.6rem' }}>💪 Beneficios de la Musculación</h2>
        <ul>
          {beneficiosMusculacion.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Musculacion;
