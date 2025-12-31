import React, { useEffect, useState } from 'react';
import axios from 'axios';



const HistorialRegistroAlimentos = () => {
  throw new Error("💥 ESTE ES EL HISTORIAL DE ALIMENTOS");
  console.log("🔥 HistorialRegistroAlimentos MONTADO");
  const usuario_id = '694c6fc8e2b9e104efdca3b9'; // ⚠️ luego lo sacamos del auth
  const hoy = new Date().toISOString().split('T')[0];

  const [fecha, setFecha] = useState(hoy);
  const [registros, setRegistros] = useState([]);
  const [cargando, setCargando] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;

  console.log(
  "DEBUG → REACT_APP_API_URL:",
  process.env.REACT_APP_API_URL
);


  const obtenerRegistros = async () => {
    try {
      setCargando(true);

      const res = await axios.get (
        `${API_URL}/api/registroalimentos/dia/${usuario_id}`,
        {
          params: { fecha } }
      );

      console.log("DEBUG → respuesta historial alimentos:", res.data);


      setRegistros(res.data);
    } catch (error) {
      console.error('Error al obtener historial diario', error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
  console.log("DEBUG → useEffect ejecutado, fecha:", fecha);
  obtenerRegistros();
}, [fecha]);


  return (
    <div style={{ padding: '2rem' }}>
      <h2>📊 Historial de Registro de Alimentos</h2>

      {/* Selector de fecha */}
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      {cargando && <p>Cargando...</p>}

      {!cargando && registros.length === 0 && (
        <p>No hay registros para este día</p>
      )}

      {!cargando && registros.map((comida) => (
        <div key={comida._id} style={{ marginTop: '2rem' }}>
          <h3>{comida.comida}</h3>

          {comida.alimentos.length === 0 ? (
            <p>Sin alimentos registrados</p>
          ) : (
            <ul>
              {comida.alimentos.map((a, index) => (
                <li key={index}>
                  {a.nombre} — {a.cantidad} porción(es) — {a.calorias} kcal
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default HistorialRegistroAlimentos;
