

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const STORAGE_KEY = 'fitmind_bicicleta';

const Bicicleta = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [tiempo, setTiempo] = useState(0);
  const [tiempoBase, setTiempoBase] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [ultimaSesion, setUltimaSesion] = useState(null);

  const intervalRef = useRef(null);
  const isHydrated = useRef(false);

  const caloriasPorMinuto = 9.0;
  const calorias = ((tiempo / 60) * caloriasPorMinuto).toFixed(2);

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
      console.error('Error restaurando bicicleta:', err);
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
          `${process.env.REACT_APP_API_URL}/api/bicicleta/${usuario_id}`,
          { headers: { 'user-id': usuario_id } }
        );
        setUltimaSesion(res.data);
      } catch (err) {
        console.error('❌ Error al obtener la última sesión de bicicleta:', err);
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

  const handleFinalizar = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) {
      alert("Usuario no autenticado");
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/bicicleta`,
        { usuario_id, tiempo, calorias },
        { headers: { 'user-id': usuario_id } }
      );
      alert('✅ Sesión de bicicleta registrada con éxito');
      setUltimaSesion({ tiempo, calorias, fecha: new Date() });
      handleReset();
    } catch (error) {
      console.error('❌ Error al registrar sesión de bicicleta:', error);
      alert('Error al registrar en la base de datos');
    }
  };

  /* ===============================
     ⏲️ FORMATO TIEMPO
     =============================== */
  const formatTime = (segundos) => {
    const h = Math.floor(segundos / 3600);
    const m = Math.floor((segundos % 3600) / 60);
    const s = segundos % 60;
    return `${h.toString().padStart(2,'0')}:${m
      .toString()
      .padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  };

  /* ===============================
     🎨 UI (SIN CAMBIOS)
     =============================== */

  const beneficios = [
    "Fortalece las piernas y mejora la salud cardiovascular",
    "Quema muchas calorías sin tanto impacto en articulaciones",
    "Ayuda al equilibrio y la coordinación",
    "Reduce el estrés y mejora el estado de ánimo",
    "Aumenta la capacidad pulmonar y resistencia",
    "Ideal como medio de transporte ecológico y saludable"
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

      <h2>🚴‍♂️ Cronómetro de Bicicleta</h2>
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
            color: '#333',
            fontSize: '1.2rem',
            cursor: 'pointer',
            transition: 'all 0.3s'
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
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.2rem',
              cursor: 'pointer',
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
              transition: 'background-color 0.3s'
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
        <div style={{ marginTop: '3rem', padding: '1rem', backgroundColor: '#c8e6c9', borderRadius: '10px' }}>
          <h3>📊 Última sesión registrada</h3>
          <p>⏱️ Tiempo: <strong>{formatTime(ultimaSesion.tiempo)}</strong></p>
          <p>🔥 Calorías: <strong>{ultimaSesion.calorias} kcal</strong></p>
          <p>🗓️ Fecha: <strong>{new Date(ultimaSesion.fecha).toLocaleString()}</strong></p>
        </div>
      )}

      <div style={{ maxWidth: '60rem', margin: '4rem auto', textAlign: 'left', padding: '2rem', backgroundColor: '#f3f9ff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.6rem' }}>
          🚴 Beneficios de andar en bicicleta
        </h2>
        <p style={{ marginTop: '1rem', fontSize: '1.5rem' }}>
          El ciclismo es una excelente actividad aeróbica con múltiples beneficios:
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

export default Bicicleta;