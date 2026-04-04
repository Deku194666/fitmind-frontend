import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RegistroSV.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { HeartPulse, Thermometer, Droplets, Wind } from "lucide-react";

// Card reutilizable
const MetricCard = ({ icon, children }) => (
  <div className="metric-card">
    {icon && <div className="icon">{icon}</div>}
    {children}
  </div>
);

// Formato fecha DD/MM HH:MM
const formatDateLabel = (fechaStr) => {
  if (!fechaStr) return "";
  const d = new Date(fechaStr);
  if (isNaN(d)) return fechaStr;
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${day}/${month} ${hours}:${minutes}`;
};

// Parse presión arterial
const parsePressure = (pres) => {
  if (!pres) return { sistolica: null, diastolica: null };
  const m = String(pres).match(/(\d{2,3})\s*\/\s*(\d{2,3})/);
  if (m) return { sistolica: parseInt(m[1], 10), diastolica: parseInt(m[2], 10) };
  return { sistolica: null, diastolica: null };
};

function RegistroSV2() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel = false;
    const fetchRegistros = async () => {
      try {
        const usuario_id = localStorage.getItem("usuario_id");
        if (!usuario_id) {
          if (!cancel) { setData([]); setLoading(false); }
          return;
        }

        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/signos-vitales/usuario/${usuario_id}`,
          { headers: { "user-id": usuario_id } }
        );

        const registros = Array.isArray(res.data) ? res.data : [];

        const mapped = registros.map(item => {
          const { sistolica, diastolica } = parsePressure(item.presion_arterial);
          const fechaRaw = item.fecha || new Date().toISOString();
          const ts = new Date(fechaRaw).getTime();
          return {
            _id: item._id,
            ts,
            fechaLabel: formatDateLabel(fechaRaw),
            frecuencia_cardiaca: Number(item.frecuencia_cardiaca) || 0,
            temperatura: Number(item.temperatura) || 0,
            saturacion_oxigeno: Number(item.saturacion_oxigeno) || 0,
            frecuencia_respiratoria: Number(item.frecuencia_respiratoria) || 0,
            sistolica,
            diastolica,
          };
        }).sort((a, b) => a.ts - b.ts);

        if (!cancel) setData(mapped);
      } catch (err) {
        console.error("Error al cargar signos vitales:", err);
        if (!cancel) setData([]);
      } finally {
        if (!cancel) setLoading(false);
      }
    };

    fetchRegistros();
    return () => { cancel = true; };
  }, []);

  if (loading) return <p className="mensaje">Cargando datos...</p>;
  if (!data || !data.length) return <p className="mensaje">No hay registros para graficar.</p>;

  // Métricas
  const promedioFC = data.length ? (data.reduce((acc, x) => acc + x.frecuencia_cardiaca, 0)/data.length).toFixed(1) : 0;
  const promedioTemp = data.length ? (data.reduce((acc, x) => acc + x.temperatura, 0)/data.length).toFixed(1) : 0;

  const chartWidth = Math.max(data.length * 90, 600);

  const charts = [
    { title: "🫀Frecuencia Cardiaca (lpm)", key: "frecuencia_cardiaca", stroke: "#e63946" },
    { title: "🌡️Temperatura (°C)", key: "temperatura", stroke: "#457b9d" },
    { title: "💨Saturación O₂ (%)", key: "saturacion_oxigeno", stroke: "#2a9d8f" },
    { title: "🫁Frecuencia Respiratoria (rpm)", key: "frecuencia_respiratoria", stroke: "#f4a261" }
  ];

  return (
    <div className="registro-container">
      <p className="titulo22">📊 Análisis de Signos Vitales</p>
      <div className="intro">
        Visualiza la evolución de tus registros de salud y detecta tendencias importantes.
      </div>

      <div className="resumen22">
        <MetricCard icon={<HeartPulse size={28} color="#e63946" />}>
          <p className="subtitulo">Frecuencia Cardiaca</p>
          <p className="valor">{promedioFC} lpm</p>
        </MetricCard>
        <MetricCard icon={<Thermometer size={28} color="#457b9d" />}>
          <p className="subtitulo">Temperatura</p>
          <p className="valor">{promedioTemp} °C</p>
        </MetricCard>
        <MetricCard icon={<Droplets size={28} color="#2a9d8f" />}>
          <p className="subtitulo">Saturación O₂</p>
          <p className="valor">{data[data.length-1]?.saturacion_oxigeno || "-"}%</p>
        </MetricCard>
        <MetricCard icon={<Wind size={28} color="#f4a261" />}>
          <p className="subtitulo">Frecuencia Respiratoria</p>
          <p className="valor">{data[data.length-1]?.frecuencia_respiratoria || "-"} rpm</p>
        </MetricCard>
      </div>

      <div className="graficas">
        {charts.map(chart => (
          <div className="chart-card scroll-x" key={chart.key}>
            <p className="subtitulo">{chart.title}</p>
            <div style={{ minWidth: chartWidth, display: "inline-block" }}>
              <LineChart width={chartWidth} height={350} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fechaLabel" />
                <YAxis />
                <Tooltip
                  content={({ active, payload }) => {
                    if (!active || !payload || !payload.length) return null;
                    return (
                      <div style={{
                        background: "#222",
                        padding: "8px",
                        borderRadius: "8px",
                        color: "#fff"
                      }}>
                        <p>{payload[0].value}</p>
                      </div>
                    );
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey={chart.key} stroke={chart.stroke} dot={{ r: 3 }} activeDot={{ r: 6 }} />
              </LineChart>
            </div>
          </div>
        ))}

        {/* Presión Arterial */}
        <div className="chart-card scroll-x">
          <p className="subtitulo">🩸Presión Arterial (mmHg)</p>
          <div style={{ minWidth: chartWidth, display: "inline-block" }}>
            <LineChart width={chartWidth} height={350} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fechaLabel" />
              <YAxis />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload || !payload.length) return null;
                  return (
                    <div style={{
                      background: "#222",
                      padding: "8px",
                      borderRadius: "8px",
                      color: "#fff"
                    }}>
                      {payload.map(p => <p key={p.dataKey}>{p.dataKey}: {p.value}</p>)}
                    </div>
                  );
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="sistolica" stroke="#8d99ae" dot={{ r: 3 }} />
              <Line type="monotone" dataKey="diastolica" stroke="#6a994e" dot={{ r: 3 }} />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroSV2;