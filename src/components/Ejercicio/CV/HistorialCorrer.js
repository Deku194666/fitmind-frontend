

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

const HistorialCorrer = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const obtenerHistorial = async () => {
      const usuario_id = localStorage.getItem('usuario_id');
      if (!usuario_id) return;

      try {
        const res = await axios.get(`http://10.93.154.208:4000/api/correr/historial/${usuario_id}`);
        setHistorial(res.data);
      } catch (err) {
        console.error('Error al obtener historial:', err);
      }
    };

    obtenerHistorial();
  }, []);

  const formatTiempo = (segundos) => {
    const h = Math.floor(segundos / 3600);
    const m = Math.floor((segundos % 3600) / 60);
    const s = segundos % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (historial.length === 0) return null;

  return (
    <div style={{ maxWidth: '60rem', margin: '2rem auto', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '12px' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>📈 Gráfico de calorías quemadas corriendo</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={historial.map((item, i) => ({ ...item, index: i + 1 }))}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="index" label={{ value: 'Sesión', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Calorías', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Line type="monotone" dataKey="calorias" stroke="#ff4081" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      <h3 style={{ marginTop: '2rem' }}>📋 Historial de sesiones de correr</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={th}>Fecha</th>
            <th style={th}>Duración</th>
            <th style={th}>Calorías</th>
          </tr>
        </thead>
        <tbody>
          {historial.map((sesion, idx) => (
            <tr key={idx}>
              <td style={td}>{new Date(sesion.fecha).toLocaleString()}</td>
              <td style={td}>{formatTiempo(sesion.tiempo)}</td>
              <td style={td}>{sesion.calorias} kcal</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const th = {
  border: '1px solid #ccc',
  padding: '8px',
  backgroundColor: '#e3f2fd',
};
const td = {
  border: '1px solid #ccc',
  padding: '8px',
  textAlign: 'center',
};

export default HistorialCorrer;
