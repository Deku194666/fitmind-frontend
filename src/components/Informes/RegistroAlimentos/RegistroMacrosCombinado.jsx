


import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RegistroMacrosCombinado.css";
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

// Formato fecha
const formatDateLabel = (fechaStr) => {
  if (!fechaStr) return "";
  const [year, month, day] = fechaStr.split("-");
  return `${day}/${month}`;
};

function RegistroMacrosCombinado() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel = false;

    const fetchData = async () => {
      try {
        const usuario_id = localStorage.getItem("usuario_id");

        if (!usuario_id) {
          setData([]);
          setLoading(false);
          return;
        }

        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/registroalimentos/macros/${usuario_id}`
        );

        const registros = Array.isArray(res.data) ? res.data : [];

        const mapped = registros.map(item => {
          const ts = new Date(item.fecha).getTime();

          const proteinas = Number(item.proteinas) || 0;
          const carbos = Number(item.carbohidratos) || 0;
          const grasas = Number(item.grasas) || 0;

          // 🔥 cálculo calorías
          const calorias = (proteinas * 4) + (carbos * 4) + (grasas * 9);

          return {
            fechaLabel: formatDateLabel(item.fecha),
            ts,
            proteinas,
            carbohidratos: carbos,
            grasas,
            calorias
          };
        });

        mapped.sort((a, b) => a.ts - b.ts);

        if (!cancel) setData(mapped);
      } catch (err) {
        console.error("Error macros combinado:", err);
        if (!cancel) setData([]);
      } finally {
        if (!cancel) setLoading(false);
      }
    };

    fetchData();
    return () => { cancel = true; };
  }, []);

  if (loading) return <p className="mensaje">Cargando datos...</p>;
  if (!data.length) return <p className="mensaje">No hay datos disponibles.</p>;

  return (
    <div className="registro-container">
      <p className="titulo22">📊 Análisis Nutricional Completo</p>

      <div className="intro">
        Visualiza la relación entre calorías y macronutrientes para entender mejor tu alimentación.
      </div>

      <div className="graficas">
        <div className="chart-card">
          <p className="subtitulo">📈 Evolución de Macros + Calorías</p>

          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fechaLabel" />
              <YAxis />
              <Tooltip />
              <Legend />

              {/* 🔥 CALORIAS */}
              <Line
                type="monotone"
                dataKey="calorias"
                stroke="#ff6b6b"
                strokeWidth={2}
                dot={false}
              />

              {/* 🥩 PROTEINAS */}
              <Line
                type="monotone"
                dataKey="proteinas"
                stroke="#e63946"
                dot={false}
              />

              {/* 🍞 CARBOS */}
              <Line
                type="monotone"
                dataKey="carbohidratos"
                stroke="#f59f00"
                dot={false}
              />

              {/* 🥑 GRASAS */}
              <Line
                type="monotone"
                dataKey="grasas"
                stroke="#82c91e"
                dot={false}
              />

            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default RegistroMacrosCombinado;