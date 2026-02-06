import React, { useState, useMemo } from 'react';
import axios from 'axios';

/* =====================
   Utils
===================== */

const num = (v, d = 0) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : d;
};


/* =====================
   Nombres de comidas (UI)
===================== */
const COMIDAS = {
  desayuno: 'Desayuno',
  colacion_manana: 'Colación Mañana',
  almuerzo: 'Almuerzo',
  colacion_tarde: 'Colación Tarde',
  cena: 'Cena',
};

function HistorialAlimentos() {
  const [fecha, setFecha] = useState('');
  const [registro, setRegistro] = useState(null);
  const [mensaje, setMensaje] = useState('');

  // =========================
  // 🔍 BUSCAR REGISTRO POR DÍA
  // =========================
  const buscarRegistro = async () => {
    if (!fecha) return;

    try {
      const usuario_id = localStorage.getItem('usuario_id');

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/registroalimentos/dia/${usuario_id}`,
        {
          params: { fecha }, // YYYY-MM-DD
          headers: { 'user-id': usuario_id },
        }
      );

      if (!res.data || res.data.length === 0) {
        setRegistro(null);
        setMensaje('No hay registros para este día');
        return;
      }

      const base = {
        desayuno: [],
        colacion_manana: [],
        almuerzo: [],
        colacion_tarde: [],
        cena: [],
      };

      res.data.forEach((r) => {
        if (base[r.comida]) base[r.comida] = r.alimentos || [];
      });

      setRegistro(base);
      setMensaje('');
    } catch (error) {
      console.error(error);
      setMensaje('Error cargando historial');
    }
  };

  // =========================
  // 🧮 CÁLCULO TOTALES DEL DÍA
  // =========================
  const totalesDia = useMemo(() => {
    const totales = {
      calorias: 0,
      proteinas: 0,
      grasas: 0,
      carbohidratos: 0,
      fibra: 0,
    };

    if (!registro) return totales;

    Object.values(registro).forEach((alimentos) => {
      alimentos.forEach((a) => {
        const cant = num(a.cantidad, 1);

        totales.calorias += num(a.calorias) * cant;
        totales.proteinas += num(a.proteinas) * cant;
        totales.grasas += num(a.grasas) * cant;
        totales.carbohidratos += num(a.carbohidratos) * cant;
        totales.fibra += num(a.fibra) * cant;
      });
    });

    return totales;
  }, [registro]);

  return (
    <>
      <div className="registro-container">
        <h2>Historial de Alimentos</h2>

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
            onClick={buscarRegistro}
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
            Ver registro
          </button>

          {mensaje && <p className="registro-mensaje">{mensaje}</p>}
        </div>

        {/* REGISTRO POR COMIDA */}
        {registro && (
          <div className="registro-listado">
            {Object.entries(registro).map(([comida, alimentos]) => {
              const totalesComida = alimentos.reduce(
                (acc, a) => {
                  const cant = num(a.cantidad, 1);
                  acc.calorias       += num(a.calorias) * cant;
                  acc.proteinas      += num(a.proteinas) * cant;
                  acc.grasas         += num(a.grasas) * cant;
                  acc.carbohidratos  += num(a.carbohidratos) * cant;
                  acc.fibra          += num(a.fibra) * cant;
                  
                  return acc;
                },
                
                {
                  calorias: 0,
                  proteinas: 0,
                  grasas: 0,
                  carbohidratos: 0,
                  fibra: 0,
                }
              );


              return (
                <div key={comida}>
                  <h4>{COMIDAS[comida]}</h4>

                  {alimentos.length === 0 ? (
                    <p className="registro-vacio">Sin registros</p>
                  ) : (
                    <>
                      <ul>
                        {alimentos.map((a, i) => (
                          <li key={i}>
                            {a.nombre} — {a.cantidad} porciones
                          </li>
                        ))}
                      </ul>
                      <div className="registro-totales">
                      <strong>Calorías:</strong> {totalesComida.calorias.toFixed(0)} kcal<br />
                      <strong>Proteínas:</strong> {totalesComida.proteinas.toFixed(1)} g<br />
                      <strong>Grasas:</strong> {totalesComida.grasas.toFixed(1)} g<br />
                      <strong>Carbohidratos:</strong> {totalesComida.carbohidratos.toFixed(1)} g<br />
                      <strong>Fibra:</strong> {totalesComida.fibra.toFixed(1)} g
                      </div>
                      
                    </>
                  )}
                </div>
                );
              })}
          </div>
        )}
      </div>

      {/* =========================
          📊 RESUMEN TOTAL DEL DÍA
      ========================= */}
      {registro && (
        <div className="registro-resumen-dia">
          <h3 style={{ textAlign: 'center' }}>📊 Totales del día</h3>
          <p style={{ textAlign: 'center', fontSize:'1.2rem' }}>
            <strong>Calorías:</strong> {totalesDia.calorias.toFixed(0)} kcal <br />
            <strong>Proteínas:</strong> {totalesDia.proteinas.toFixed(1)} g<br />
            <strong>Grasas:</strong> {totalesDia.grasas.toFixed(1)} g<br />
            <strong>Carbohidratos:</strong> {totalesDia.carbohidratos.toFixed(1)} g<br />
            <strong>Fibra:</strong> {totalesDia.fibra.toFixed(1)} g
          </p>
        </div>
      )}
    </>
  );
}

export default HistorialAlimentos;
