// RegistroTrote2.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ResponsiveContainer, LineChart, Line,
  CartesianGrid, XAxis, YAxis, Tooltip, Legend,
} from "recharts";
import { FaRunning, FaClock, FaFire, FaChartLine, FaStar } from "react-icons/fa";
import "./RegistroTrote2.css";

const MetricCard = ({ icon, children }) => (
  <div className="metric-card">
    {icon && <div className="icon">{icon}</div>}
    {children}
  </div>
);

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

function RegistroTrote2() {
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
          `${process.env.REACT_APP_API_URL}/api/trote/historial/${usuario_id}`,
          { headers: { "user-id": usuario_id } }
        );

        const lista = Array.isArray(res.data) ? res.data : [];

        const mapped = lista.map(item => {
          const fechaRaw = item.fecha || item.createdAt || item._id;
          let ts = Date.parse(fechaRaw);
          if (Number.isNaN(ts) && item._id) {
            ts = parseInt(String(item._id).substring(0, 8), 16) * 1000;
          }
          const segundos = Number(item.tiempo) || 0;
          const minutos = segundos / 60;
          const kcal = Number(item.calorias) || 0;

          return {
            _id: item._id,
            ts,
            fechaLabel: formatDateLabel(fechaRaw),
            minutos: Number(minutos.toFixed(2)),
            calorias: Number(kcal.toFixed(2)),
            kcal_x_min: minutos > 0 ? Number((kcal / minutos).toFixed(2)) : 0,
          };
        });

        mapped.sort((a, b) => a.ts - b.ts);
        if (!cancel) setData(mapped);
      } catch (err) {
        console.error("Error al cargar trote:", err);
        if (!cancel) setData([]);
      } finally {
        if (!cancel) setLoading(false);
      }
    };

    fetchRegistros();

    const onNuevo = (e) => {
      if (!e?.detail?.tipo || e.detail.tipo === "trote") fetchRegistros();
    };
    window.addEventListener("ejercicio:registrado", onNuevo);

    const onVisible = () => {
      if (document.visibilityState === "visible") fetchRegistros();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      cancel = true;
      window.removeEventListener("ejercicio:registrado", onNuevo);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  if (loading) return <p className="mensaje">Cargando datos...</p>;
  if (!data || data.length === 0) return <p className="mensaje">No hay registros para graficar.</p>;

  // Métricas adicionales
  const totalMinutos = data.reduce((acc, x) => acc + (x.minutos || 0), 0);
  const totalCalorias = data.reduce((acc, x) => acc + (x.calorias || 0), 0);
  const promedioIntensidad = data.length > 0 ? (data.reduce((acc, x) => acc + (x.kcal_x_min || 0), 0) / data.length).toFixed(2) : 0;
  const mejorSesion = data.reduce((max, x) => (x.calorias > (max.calorias || 0) ? x : max), {});

  return (
    <div className="registro-container">
      <p className="titulo">📊 Análisis de Trote</p>

      <div className="intro">
        Bienvenido a la sección de análisis de tus sesiones de trote. Aquí podrás ver
        un resumen completo de tus entrenamientos: duración, calorías quemadas e
        intensidad. Cada gráfico te permite visualizar la evolución de tus resultados
        y descubrir tu mejor desempeño.
      </div>

      <div className="resumen">
        <MetricCard icon={<FaRunning size={28} color="#f59e0b" />}>
          <p className="subtitulo">Sesiones</p>
          <p className="valor">{data.length}</p>
        </MetricCard>

        <MetricCard icon={<FaClock size={28} color="#6366f1" />}>
          <p className="subtitulo">Minutos totales</p>
          <p className="valor">{totalMinutos.toFixed(1)}</p>
        </MetricCard>

        <MetricCard icon={<FaFire size={28} color="#ef4444" />}>
          <p className="subtitulo">Calorías totales</p>
          <p className="valor">{totalCalorias.toFixed(0)}</p>
        </MetricCard>

        <MetricCard icon={<FaChartLine size={28} color="#10b981" />}>
          <p className="subtitulo">Promedio intensidad (kcal/min)</p>
          <p className="valor">{promedioIntensidad}</p>
        </MetricCard>

        <MetricCard icon={<FaStar size={28} color="#facc15" />}>
          <p className="subtitulo">Mejor sesión</p>
          <p className="valor">{mejorSesion.calorias ? `${mejorSesion.calorias} kcal` : "-"}</p>
        </MetricCard>
      </div>
      
      <div className="graficas">

  <div className="chart-card">
    <p className="subtitulo">⏱️ Tiempo de trote (min)</p>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="fechaLabel" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="minutos" stroke="#4f46e5" dot={{ r: 3 }} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>

  <div className="chart-card">
    <p className="subtitulo">🔥 Calorías (kcal)</p>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="fechaLabel" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="calorias" stroke="#ef4444" dot={{ r: 3 }} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>

  <div className="chart-card">
    <p className="subtitulo">⚖️ Intensidad (kcal/min)</p>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="fechaLabel" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="kcal_x_min" stroke="#10b981" dot={{ r: 3 }} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>

</div>


</div>
  );
}

export default RegistroTrote2;
