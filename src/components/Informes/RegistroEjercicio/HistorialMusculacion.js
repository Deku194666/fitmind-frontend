

import React, { useState, useMemo } from 'react';
import axios from 'axios';

/* =====================
   Utils
===================== */
const num = (v, d = 0) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : d;
};

const formatFechaHora = (fecha) => {
  if (!fecha) return '';
  return new Date(fecha).toLocaleString();
};

function HistorialMusculacion() {
  const [fecha, setFecha] = useState('');
  const [sesiones, setSesiones] = useState([]);
  const [mensaje, setMensaje] = useState('');

  // =========================
  // 🔍 BUSCAR SESIONES POR DÍA
  // =========================
  const buscarSesiones = async () => {
    if (!fecha) return;

    try {
      const usuario_id = localStorage.getItem('usuario_id');

      console.log('Fecha enviada:', fecha);


      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/musculacion/dia/${usuario_id}`,
        {
          params: { fecha },
          headers: { 'user-id': usuario_id },
        }
      );

      if (!res.data || res.data.length === 0) {
        setSesiones([]);
        setMensaje('No hay sesiones de musculación este día');
        return;
      }

      setSesiones(res.data);
      setMensaje('');
    } catch (error) {
      console.error(error);
      setMensaje('Error cargando historial de musculación');
    }
  };

  // =========================
  // 📊 TOTALES DEL DÍA
  // =========================
  const totalesDia = useMemo(() => {
    return sesiones.reduce(
      (acc, s) => {
        acc.tiempo += num(s.tiempo);
        acc.calorias += num(s.calorias);
        return acc;
      },
      { tiempo: 0, calorias: 0 }
    );
  }, [sesiones]);

  return (
    <>
      <div className="registro-container">
        <h2>Historial de Musculación</h2>

        {/* SELECTOR FECHA */}
        <div className="registro-form-card">
          <p className="registro-form-title">Seleccionar día</p>

          <input
            type="date"
            className="registro-input"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />

          <button
            onClick={buscarSesiones}
            style={{
              marginTop: '12px',
              padding: '12px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: '#2980b9',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Ver sesiones
          </button>

          {mensaje && <p className="registro-mensaje">{mensaje}</p>}
        </div>

        {/* LISTADO DE SESIONES */}
        {sesiones.length > 0 && (
          <div className="registro-listado">
            {sesiones.map((s, i) => (
              <div key={s._id || i} className="registro-card">
                <p><strong>🗓️ Fecha:</strong> {formatFechaHora(s.fecha)}</p>
                <p><strong>⏱️ Tiempo:</strong> {(num(s.tiempo) / 60).toFixed(1)} min</p>
                <p><strong>🔥 Calorías:</strong> {num(s.calorias).toFixed(0)} kcal</p>

                {s.notas && (
                  <>
                    <p><strong>📝 Ejercicios realizados:</strong></p>
                    <pre className="registro-notas">{s.notas}</pre>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* =========================
          📊 RESUMEN DEL DÍA
      ========================= */}
      {sesiones.length > 0 && (
        <div className="registro-resumen-dia">
          <h3>📊 Totales del día</h3>
          <p>
            <strong>Tiempo total:</strong> {(totalesDia.tiempo / 60).toFixed(1)} min
          </p>
          <p>
            <strong>Calorías totales:</strong> {totalesDia.calorias.toFixed(0)} kcal
          </p>
        </div>
      )}
    </>
  );
}

export default HistorialMusculacion;
