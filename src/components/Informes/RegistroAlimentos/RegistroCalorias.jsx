

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RegistroCalorias.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import { Flame, TrendingUp } from "lucide-react";

// Card reutilizable
const MetricCard = ({ icon, children }) => (
  <div className="metric-card">
    {icon && <div className="icon">{icon}</div>}
    {children}
  </div>
);

// Formato fecha
const formatDateLabel = (fechaStr) => {
  if (!fechaStr) return "";

  const [year, month, day] = fechaStr.split("-");
  return `${day}/${month}`;
};

function RegistroCalorias() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel = false;

    const fetchData = async () => {
      try {
        const usuario_id = localStorage.getItem("usuario_id");

        if (!usuario_id) {
          if (!cancel) {
            setData([]);
            setLoading(false);
          }
          return;
        }

        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/registroalimentos/calorias/${usuario_id}`,
          { headers: { "user-id": usuario_id } }
        );

        console.log("DATA BACKEND 👉", res.data);

        const registros = Array.isArray(res.data) ? res.data : [];

        const mapped = registros.map(item => {
            const fechaRaw = item.fecha; 
            const ts = new Date(fechaRaw).getTime();
            
            return {
                _id: item.fecha,
                ts,
                fechaLabel: formatDateLabel(fechaRaw),
                calorias: Number(item.calorias_consumidas) || 0
            };
        });

        mapped.sort((a, b) => a.ts - b.ts);

        if (!cancel) setData(mapped);
      } catch (err) {
        console.error("Error al cargar calorías:", err);
        if (!cancel) setData([]);
      } finally {
        if (!cancel) setLoading(false);
      }
    };

    fetchData();
    return () => { cancel = true; };
  }, []);

  if (loading) return <p className="mensaje">Cargando datos...</p>;
  if (!data.length) return <p className="mensaje">No hay registros para graficar.</p>;

  // Métricas
  const total = data.length;
  const promedio = (
    data.reduce((acc, x) => acc + x.calorias, 0) / total
  ).toFixed(0);

  const ultimo = data[data.length - 1]?.calorias || 0;

  return (
    <div className="registro-container">
      <p className="titulo22">🔥 Análisis de Calorías</p>

      <div className="intro">
        Visualiza tu consumo calórico a lo largo del tiempo y detecta patrones en tu alimentación.
      </div>

      {/* Cards */}
      <div className="resumen22">
        <MetricCard icon={<Flame size={28} color="#ff6b6b" />}>
          <p className="subtitulo">Promedio Diario</p>
          <p className="valor">{promedio} kcal</p>
        </MetricCard>

        <MetricCard icon={<TrendingUp size={28} color="#4dabf7" />}>
          <p className="subtitulo">Último Registro</p>
          <p className="valor">{ultimo} kcal</p>
        </MetricCard>
      </div>

      {/* Gráfico */}
      <div className="graficas">
        <div className="chart-card">
          <p className="subtitulo">📈 Evolución de Calorías</p>

          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fechaLabel" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="calorias"
                stroke="#ff6b6b"
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default RegistroCalorias;