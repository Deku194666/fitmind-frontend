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
    // 🔥 CLAVE ABSOLUTA
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
      )}, [isRunning, startTime, tiempo, notas]);


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

  if (intervalRef.current) return; // evita duplicados

  intervalRef.current = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    setTiempo(elapsed); // ✅ SOLO elapsed, NADA MÁS
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
      const res = await axios.get(
        `${API_URL}/api/musculacion/ultimo/${usuario_id}`
      );

      const sesion = res.data || {};
      setUltimaSesion({
        tiempo: Number(sesion.tiempo) || 0,
        calorias: Number(sesion.calorias) || 0,
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
    // ▶️ INICIAR / REANUDAR
    setStartTime(Date.now());
    setIsRunning(true);
  } else {
    // ⏸️ PAUSAR (guardar tiempo acumulado)
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const total = tiempoBase + elapsed;

    setTiempo(total);
    setTiempoBase(total); // 🔑 ESTA LÍNEA ES LA CLAVE
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
        { usuario_id, tiempo, calorias: parseFloat(calorias) },
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
    return `${h.toString().padStart(2,'0')}:${m
      .toString()
      .padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  };


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '4rem',
      padding: '2rem',
      maxWidth: '60rem',
      margin: 'auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h2>🏋️ Cronómetro de Musculación</h2>

      <h1 style={{
        fontSize: '4rem',
        fontFamily: 'monospace',
        margin: '1rem 0'
      }}>
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
          }}>
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
          }}>
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
          }}>
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
        }}>
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
              <h3>📊 Última sesión</h3>
              <p>⏱️ {formatTime(ultimaSesion.tiempo)}</p>
              <p>🔥 {ultimaSesion.calorias.toFixed(2)} kcal</p>
              <p>🗓️ {ultimaSesion.fecha?.toLocaleString()}</p>
            </>
          ) : <p>No hay sesiones registradas</p>
        }
      </div>
    </div>
  );
};

export default Musculacion;
