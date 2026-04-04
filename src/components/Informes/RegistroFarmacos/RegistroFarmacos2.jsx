import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { FaPills, FaCheckCircle, FaChartLine, FaStar } from "react-icons/fa";
import "./RegistroFarmacos2.css";

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

function RegistroFarmacos2() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel = false;

    const fetchRegistros = async () => {
      try {
        const usuario_id = localStorage.getItem("usuario_id");
        if (!usuario_id) { setData([]); setLoading(false); return; }

        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/farmacos/${usuario_id}`,
          { headers: { "user-id": usuario_id } }
        );

        const lista = Array.isArray(res.data) ? res.data : [];
        const mapped = lista.map(item => {
          const fechaRaw = item.fechaInicio || item.creadoEn || item._id;
          let ts = Date.parse(fechaRaw);
          if (Number.isNaN(ts) && item._id) ts = parseInt(String(item._id).substring(0,8),16)*1000;

          const dosis = parseFloat(item.dosis) || 0;
          const tomado = Array.isArray(item.horas) ? item.horas.length : 0;

          return {
            _id: item._id,
            ts,
            fechaLabel: formatDateLabel(fechaRaw),
            dosis: Number(dosis.toFixed(2)),
            tomado,
            nombre: item.farmaco || "Desconocido",
          };
        }).sort((a,b)=>a.ts-b.ts);

        if (!cancel) setData(mapped);

      } catch(err) {
        console.error("Error al cargar fármacos:", err);
        if (!cancel) setData([]);
      } finally {
        if (!cancel) setLoading(false);
      }
    };

    fetchRegistros();
    return () => { cancel = true; };
  }, []);

  if (loading) return <p className="mensaje">Cargando datos...</p>;
  if (!data.length) return <p className="mensaje">No hay registros de fármacos.</p>;

  const total = data.length;
  const totalTomados = data.reduce((acc,x)=>acc+x.tomado,0);
  const adherencia = ((totalTomados/total)*100).toFixed(1);
  const promedioDosis = (data.reduce((acc,x)=>acc+x.dosis,0)/total).toFixed(1);

  const chartWidth = Math.max(data.length*90,600);

  return (
    <div className="registro-container">
      <p className="titulo21">💊 Análisis de Fármacos</p>

      <div className="intro">
        Analiza tu adherencia al tratamiento, dosis y frecuencia de uso de tus medicamentos.
      </div>

      <div className="resumen21">
        <MetricCard icon={<FaPills size={28} color="#6366f1" />}>
          <p className="subtitulo">Registros</p>
          <p className="valor">{total}</p>
        </MetricCard>

        <MetricCard icon={<FaCheckCircle size={28} color="#22c55e" />}>
          <p className="subtitulo">Adherencia</p>
          <p className="valor">{adherencia}%</p>
        </MetricCard>

        <MetricCard icon={<FaChartLine size={28} color="#4f46e5" />}>
          <p className="subtitulo">Promedio dosis</p>
          <p className="valor">{promedioDosis}</p>
        </MetricCard>

        <MetricCard icon={<FaStar size={28} color="#facc15" />}>
          <p className="subtitulo">Total tomados</p>
          <p className="valor">{totalTomados}</p>
        </MetricCard>
      </div>

      <div className="graficas">
        <div className="chart-card scroll-x">
          <p className="subtitulo">💊 Dosis</p>
          <div style={{minWidth:chartWidth, display:"inline-block"}}>
            <LineChart width={chartWidth} height={350} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fechaLabel" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="dosis" stroke="#6366f1" dot={{ r: 3 }} activeDot={{ r: 6 }} />
            </LineChart>
          </div>
        </div>

        <div className="chart-card scroll-x">
          <p className="subtitulo">✅ Cumplimiento</p>
          <div style={{minWidth:chartWidth, display:"inline-block"}}>
            <LineChart width={chartWidth} height={350} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fechaLabel" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="tomado" stroke="#22c55e" dot={{ r: 3 }} activeDot={{ r: 6 }} />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroFarmacos2;