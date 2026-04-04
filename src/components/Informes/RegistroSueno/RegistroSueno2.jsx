import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { FaMoon, FaClock, FaChartLine, FaStar } from "react-icons/fa";
import "./RegistroSueno2.css";

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
  return `${day}/${month}`;
};

function RegistroSueno2() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel = false;

    const fetchRegistros = async () => {
      try {
        const usuario_id = localStorage.getItem("usuario_id");
        if (!usuario_id) { setData([]); setLoading(false); return; }

        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/sueno/historial/${usuario_id}`,
          { headers: { "user-id": usuario_id } }
        );

        const lista = Array.isArray(res.data) ? res.data : [];

        const mapped = lista.map(item => {
          const fechaRaw = item.fecha || item.createdAt || item._id;
          let ts = Date.parse(fechaRaw);
          if (Number.isNaN(ts) && item._id) {
            ts = parseInt(String(item._id).substring(0, 8), 16) * 1000;
          }

          const calcularHoras = (inicio, fin) => {
            if (!inicio || !fin) return 0;
            const [h1, m1] = inicio.split(":").map(Number);
            const [h2, m2] = fin.split(":").map(Number);
            let inicioMin = h1 * 60 + m1;
            let finMin = h2 * 60 + m2;
            if (finMin < inicioMin) finMin += 24*60;
            return (finMin - inicioMin)/60;
          };

          const horas = calcularHoras(item.horaDormir, item.horaDespertar);
          const calidad = Number(item.calidad) || 0;

          return {
            _id: item._id,
            ts,
            fechaLabel: formatDateLabel(fechaRaw),
            horas: Number(horas.toFixed(2)),
            calidad: Number(calidad.toFixed(1)),
          };
        }).sort((a,b) => a.ts - b.ts);

        if (!cancel) setData(mapped);

      } catch(err) {
        console.error("Error al cargar sueño:", err);
        if (!cancel) setData([]);
      } finally {
        if (!cancel) setLoading(false);
      }
    };

    fetchRegistros();
    const onNuevo = e => { if (!e?.detail?.tipo || e.detail.tipo==="sueno") fetchRegistros(); };
    window.addEventListener("sueno:registrado", onNuevo);

    return () => { cancel=true; window.removeEventListener("sueno:registrado", onNuevo); };
  }, []);

  if (loading) return <p className="mensaje">Cargando datos...</p>;
  if (!data.length) return <p className="mensaje">No hay registros de sueño.</p>;

  const totalHoras = data.reduce((acc,x)=>acc+(x.horas||0),0);
  const promedioHoras = (totalHoras/data.length).toFixed(2);
  const promedioCalidad = (data.reduce((acc,x)=>acc+(x.calidad||0),0)/data.length).toFixed(1);
  const mejorNoche = data.reduce((max,x)=>x.horas>(max.horas||0)?x:max,{});

  const chartWidth = Math.max(data.length*90, 600);

  return (
    <div className="registro-container">
      <p className="titulo22">😴 Análisis de Sueño</p>
      <div className="intro">
        Aquí puedes analizar la calidad de tu sueño, las horas dormidas y detectar patrones.
      </div>

      <div className="resumen22">
        <MetricCard icon={<FaMoon size={28} color="#6366f1" />}>
          <p className="subtitulo">Registros</p>
          <p className="valor">{data.length}</p>
        </MetricCard>

        <MetricCard icon={<FaClock size={28} color="#4f46e5" />}>
          <p className="subtitulo">Horas totales</p>
          <p className="valor">{totalHoras.toFixed(1)}</p>
        </MetricCard>

        <MetricCard icon={<FaChartLine size={28} color="#22c55e" />}>
          <p className="subtitulo">Promedio sueño</p>
          <p className="valor">{promedioHoras} h</p>
        </MetricCard>

        <MetricCard icon={<FaStar size={28} color="#facc15" />}>
          <p className="subtitulo">Mejor noche</p>
          <p className="valor">{mejorNoche.horas ? `${mejorNoche.horas} h`:"-"}</p>
        </MetricCard>
      </div>

      <div className="graficas">
        <div className="chart-card scroll-x">
          <p className="subtitulo">🕒 Horas de sueño</p>
          <div style={{ minWidth: chartWidth, display:"inline-block" }}>
            <LineChart width={chartWidth} height={350} data={data}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="fechaLabel"/>
              <YAxis/>
              <Tooltip/>
              <Legend/>
              <Line type="monotone" dataKey="horas" stroke="#6366f1" dot={{r:3}} activeDot={{r:6}}/>
            </LineChart>
          </div>
        </div>

        <div className="chart-card scroll-x">
          <p className="subtitulo">📊 Calidad del sueño</p>
          <div style={{ minWidth: chartWidth, display:"inline-block" }}>
            <LineChart width={chartWidth} height={350} data={data}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="fechaLabel"/>
              <YAxis/>
              <Tooltip/>
              <Legend/>
              <Line type="monotone" dataKey="calidad" stroke="#22c55e" dot={{r:3}} activeDot={{r:6}}/>
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroSueno2;