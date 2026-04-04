// RegistroHidratacion2.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import "./RegistroHidratacion2.css";

// Card de métricas y gráficas
const MetricCard = ({ children }) => (
  <div className="metric-card">{children}</div>
);

// Formateo DD/MM HH:MM
const formatDateLabel = (fechaStr, horaStr) => {
  if (!fechaStr) return "";
  const hora = horaStr || "00:00:00";
  const fechaCompleta = new Date(`${fechaStr}T${hora}`);
  if (isNaN(fechaCompleta)) return "";

  const dia = fechaCompleta.getDate().toString().padStart(2, "0");
  const mes = (fechaCompleta.getMonth() + 1).toString().padStart(2, "0");
  const horas = fechaCompleta.getHours().toString().padStart(2, "0");
  const minutos = fechaCompleta.getMinutes().toString().padStart(2, "0");

  return `${dia}/${mes} ${horas}:${minutos}`;
};

function RegistroHidratacion2() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistros = async () => {
      setLoading(true);
      try {
        const usuario_id = localStorage.getItem("usuario_id");
        if (!usuario_id) {
          setData([]);
          setLoading(false);
          return;
        }

        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/hidratacion/todos/${usuario_id}`,
          { headers: { "user-id": usuario_id } }
        );

        let mapped = [];
        
        if (Array.isArray(res.data) && res.data.length > 0) {
          
          const agrupado = {};
          res.data.forEach((item) => {
            const fecha = item.fecha.split("T")[0];
            const cantidad = Number(item.cantidad_ml) || 0;
            
            if (!agrupado[fecha]) {
              agrupado[fecha] = {
                fecha,
                cantidad: 0
              };
            }
          agrupado[fecha].cantidad += cantidad;
        
        });
        
        mapped = Object.values(agrupado)
        .map((item) => ({
          ts: new Date(item.fecha).getTime(),
          fechaLabel: item.fecha.split("-").reverse().join("/"), 
          cantidad: item.cantidad
        }))
        .sort((a, b) => a.ts - b.ts);
      }
      
      setData(mapped);
    
    } catch (err) {
      console.error("Error al cargar hidratación:", err);
      setData([]);
    
    } finally {
      setLoading(false);
    }
  };
  
  
  fetchRegistros();

    const handler = () => fetchRegistros();
    window.addEventListener("hidratacion:refresh", handler);
    return () => window.removeEventListener("hidratacion:refresh", handler);
  }, []);

  if (loading) return <p className="mensaje">Cargando datos...</p>;
  if (!data || data.length === 0) return <p className="mensaje">No hay registros para graficar.</p>;

  const totalConsumo = data.reduce((acc, x) => acc + (x.cantidad || 0), 0);

  const chartWidth = Math.max(data.length * 90, 600);

  return (
    <div className="registro-container">
      <p className="titulo">💧 Análisis de Hidratación</p>
      <div className="intro">
        Bienvenid@ a la sección de analisis de tu hidratación, aca puedes visualizar la
        evolución de tu consumo de agua diario y total (ml), e igualemnet semanal y mensual.
      </div>

      <div className="resumen">
        <MetricCard>
          <p className="subtitulo">Consumo total</p>
          <p className="valor">{totalConsumo} ml</p>
        </MetricCard>
      </div>

      <div className="graficas">
        <div className="chart-card scroll-x">
          <p className="subtitulo">💧 Consumo de Agua (ml)</p>
          <LineChart width={chartWidth} height={350} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fechaLabel" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="cantidad"
                name="Agua (ml)"
                stroke="#00aaff"
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
        </div>
      </div>
    </div>
  );
}

export default RegistroHidratacion2;