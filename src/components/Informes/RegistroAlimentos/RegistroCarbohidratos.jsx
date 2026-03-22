


import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RegistroCarbohidratos.css";
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
import { Wheat, TrendingUp } from "lucide-react";

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

function RegistroCarbohidratos() {
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
          `${process.env.REACT_APP_API_URL}/api/registroalimentos/macros/${usuario_id}`,
          { headers: { "user-id": usuario_id } }
        );

        console.log("DATA CARBOS 👉", res.data);

        const registros = Array.isArray(res.data) ? res.data : [];

        const mapped = registros.map(item => {
          const fechaRaw = item.fecha;
          const ts = new Date(fechaRaw).getTime();

          return {
            _id: item.fecha,
            ts,
            fechaLabel: formatDateLabel(fechaRaw),
            carbohidratos: Number(item.carbohidratos) || 0
          };
        });

        mapped.sort((a, b) => a.ts - b.ts);

        if (!cancel) setData(mapped);
      } catch (err) {
        console.error("Error al cargar carbohidratos:", err);
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
    data.reduce((acc, x) => acc + x.carbohidratos, 0) / total
  ).toFixed(1);

  const ultimo = data[data.length - 1]?.carbohidratos || 0;

  return (
    <div className="registro-container">
      <p className="titulo22">🍞 Análisis de Carbohidratos</p>

      <div className="intro">
        Visualiza tu consumo de carbohidratos a lo largo del tiempo y analiza tu principal fuente de energía diaria.
      </div>

      {/* Cards */}
      <div className="resumen22">
        <MetricCard icon={<Wheat size={28} color="#f4a261" />}>
          <p className="subtitulo">Promedio Diario</p>
          <p className="valor">{promedio} g</p>
        </MetricCard>

        <MetricCard icon={<TrendingUp size={28} color="#4dabf7" />}>
          <p className="subtitulo">Último Registro</p>
          <p className="valor">{ultimo} g</p>
        </MetricCard>
      </div>

      {/* Gráfico */}
      <div className="graficas">
        <div className="chart-card">
          <p className="subtitulo">📈 Evolución de Carbohidratos</p>

          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fechaLabel" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="carbohidratos"
                stroke="#f4a261"
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

export default RegistroCarbohidratos;