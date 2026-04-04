import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const STORAGE_KEY = 'fitmind_elongacion';

const Elongacion = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [isRunning, setIsRunning] = useState(false);
  const [tiempo, setTiempo] = useState(0);
  const [tiempoBase, setTiempoBase] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [ultimaSesion, setUltimaSesion] = useState(null);
  const [mostrarInfo, setMostrarInfo] = useState(false);


  const intervalRef = useRef(null);
  const isHydrated = useRef(false);

  const caloriasPorMinuto = 3;
  const calorias = tiempo > 0 ? ((tiempo / 60) * caloriasPorMinuto).toFixed(2) : 0;

  // 🔑 Función para cerrar sesión por inactividad
  const cerrarSesion = () => {
    alert('⏱️ Sesión expirada por inactividad');
    localStorage.clear();
    window.location.href = '/login';
  };

  // ⏱️ Timeout de inactividad
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
     🔁 RESTAURAR ESTADO
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

      if (data.isRunning && typeof data.startTime === 'number') {
        setIsRunning(true);
        setStartTime(data.startTime);
      }
    } catch (err) {
      console.error('Error restaurando elongación:', err);
    } finally {
      isHydrated.current = true;
    }
  }, []);

  /* ===============================
     💾 GUARDAR ESTADO
     =============================== */
  useEffect(() => {
    if (!isHydrated.current) return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        isRunning,
        startTime,
        tiempo
      })
    );
  }, [isRunning, startTime, tiempo]);

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
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, startTime, tiempoBase]);

  /* ===============================
     📡 ÚLTIMA SESIÓN
     =============================== */
  useEffect(() => {
    const fetchUltimaSesion = async () => {
      const usuario_id = localStorage.getItem('usuario_id');
      if (!usuario_id) return;

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/elongacion/${usuario_id}`,
          { headers: { 'user-id': usuario_id } }
        );
        if (res.data && Object.keys(res.data).length > 0) {
          setUltimaSesion(res.data);
        }
      } catch (err) {
        console.error('Error al obtener la última sesión:', err.response?.data || err.message);
      }
    };
    fetchUltimaSesion();
  }, []);

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
    localStorage.removeItem(STORAGE_KEY);
  };

  // Guardar sesión
  const handleFinalizar = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) {
      alert("Usuario no autenticado");
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/elongacion`,
        { usuario_id, tiempo, calorias: parseFloat(calorias) },
        { headers: { 'user-id': usuario_id } }
      );
      alert('✅ Sesión registrada con éxito');
      setUltimaSesion({ tiempo, calorias: parseFloat(calorias), fecha: new Date() });
      handleReset();
    } catch (error) {
      console.error('❌ Error al registrar elongación:', error.response?.data || error.message);
      alert('Error al registrar en la base de datos');
    }
  };

  const formatTime = (segundos) => {
    if (!segundos || segundos <= 0) return '00:00:00';
    const h = Math.floor(segundos / 3600);
    const m = Math.floor((segundos % 3600) / 60);
    const s = segundos % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s
      .toString().padStart(2, '0')}`;
  };

  const beneficios = [
    "Mejora la flexibilidad y el rango de movimiento",
    "Disminuye el riesgo de lesiones musculares",
    "Reduce la tensión muscular y el estrés",
    "Mejora la postura y el equilibrio",
    "Aumenta la circulación sanguínea en los músculos",
    "Favorece la recuperación post-ejercicio",
  ];

  /* ===============================
     🎨 UI (SIN TOCAR)
     =============================== */
  

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

<div style={{
  width: '100%',
  marginBottom: '2rem'
}}>
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
      <h3 style={{ color: '#2980b9', fontWeight: '600', textAlign:'center'  }}  >  🧘 ¿Qué es la elongación?</h3>
      <p  style={{ fontSize:'1.6rem', fontWeight:'400', marginBottom: '2rem'  }} >
        La elongación es una práctica fundamental para mejorar la flexibilidad,
        reducir tensiones musculares y prevenir lesiones. Es ideal antes o después
        de realizar actividad física.
      </p>

      <h3 style={{ color: '#2980b9', fontWeight: '600', textAlign:'center'  }}   >⚙️ ¿Cómo funciona este módulo?</h3>
      <p style={{ fontSize:'1.6rem', fontWeight:'400', marginBottom: '2rem'  }}  >
        Este cronómetro registra el tiempo que dedicas a elongar.
        Mientras el contador está activo:
      </p>
      <ul>
        <li>⏱️ Se mide el tiempo exacto en segundos</li>
        <li>🔥 Se estiman calorías quemadas</li>
        <li>🗓️ Se guarda la fecha y hora al finalizar</li>
      </ul>

      <h3 style={{ color: '#2980b9', fontWeight: '600', textAlign:'center'  }}    >📋 ¿Cómo usarlo?</h3>
      <ol style={{ fontSize:'1.6rem', fontWeight:'400', marginBottom: '2rem'  }} >
        <li>Presiona <strong>Iniciar</strong> cuando comiences a elongar.</li>
        <li>Presiona <strong>Detener</strong> cuando termines. igualmente puedes presionar detener para pausarlo.  </li>
        <li>Presiona <strong>Reiniciar</strong> si quieres volver a iniciar.  </li>
        <li>Haz clic en <strong>Finalizar sesión</strong> para guardar.</li>
      </ol>

      <p style={{ marginTop: '1rem', fontSize:'1.6rem', fontWeight:'400', marginBottom: '2rem' }}>
        💡 Recomendación: Mantén cada estiramiento entre 20 y 40 segundos
        y respira profundamente.
      </p>
    </div>
  )}
</div>




      <h2>⏱️ Cronómetro de Elongación</h2>
      <h1 style={{
        fontSize: '4rem',
        fontWeight: '700',
        margin: '1rem 0',
        fontFamily: 'monospace',
        color: '#333'
      }}>
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
            fontSize: '1.2rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}>
          {isRunning ? 'Detener' : 'Iniciar'}
        </button>

        <button
          onClick={handleReset}
          style={{
            padding: '0.8rem 2rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            color: '#333',
            fontSize: '1.2rem',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}>
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
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.2rem',
              cursor: 'pointer',
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
              transition: 'background-color 0.3s'
            }}>
            Finalizar sesión
          </button>
        </div>
      )}

      <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
        🔥 Calorías quemadas estimadas: <strong>{calorias} kcal</strong>
      </p>

      {ultimaSesion ? (
        <div style={{
          marginTop: '3rem',
          padding: '1rem',
          backgroundColor: '#e0f7fa',
          borderRadius: '10px'
        }}>
          <h3>📊 Última sesión registrada</h3>
          <p>⏱️ <strong> Tiempo: </strong>  {formatTime(ultimaSesion.tiempo)}</p>
          <p>🔥 <strong> Calorías: </strong> {ultimaSesion.calorias} kcal</p>
          <p>🗓️ <strong> Fecha: </strong>  {new Date(ultimaSesion.fecha).toLocaleString()}</p>
        </div>
      ) : (
        <p style={{ marginTop: '2rem', color: '#888' }}>No hay sesiones registradas aún.</p>
      )}

      <div style={{
        maxWidth: '60rem',
        margin: '4rem auto',
        textAlign: 'left',
        padding: '2rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.6rem' }}>
          🌿 Beneficios de la Elongación
        </h2>
        <p style={{ marginTop: '1rem', fontSize: '1.5rem' }}>
          Incluir elongaciones regularmente en tu rutina mejora tu salud física y mental. Algunos beneficios son:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.6' }}>
          {beneficios.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Elongacion;
