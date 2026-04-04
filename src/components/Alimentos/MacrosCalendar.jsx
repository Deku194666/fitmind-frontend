



import axios from "axios";
import "./MacrosCalendar.css";
import React, { useState, useMemo, useEffect } from "react";


const num = (v, d = 0) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : d;
};

const COMIDAS = {
  desayuno: "Desayuno",
  colacion_manana: "Colación Mañana",
  almuerzo: "Almuerzo",
  colacion_tarde: "Colación Tarde",
  cena: "Cena",
};

export default function MacrosCalendar() {
  const [fecha, setFecha] = useState("");
  const [registro, setRegistro] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [metaProteinas, setMetaProteinas] = useState(80);
  const [metaCarbos, setMetaCarbos] = useState(200);
  const [metaGrasas, setMetaGrasas] = useState(70);
  const [metaFibra, setMetaFibra] = useState(25);


  // 🔥 SCROLL AL INICIO
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
  const p = localStorage.getItem("meta_proteinas");
  const c = localStorage.getItem("meta_carbohidratos");
  const g = localStorage.getItem("meta_grasas");
  const f = localStorage.getItem("meta_fibra");

  if (p) setMetaProteinas(Number(p));
  if (c) setMetaCarbos(Number(c));
  if (g) setMetaGrasas(Number(g));
  if (f) setMetaFibra(Number(f));
}, []);

  // =========================
  // 🔍 BUSCAR POR DÍA
  // =========================
  const buscarRegistro = async () => {
    if (!fecha) return;

    try {
      const usuario_id = localStorage.getItem("usuario_id");

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/registroalimentos/dia/${usuario_id}`,
        {
          params: { fecha },
          headers: { "user-id": usuario_id },
        }
      );

      if (!res.data || res.data.length === 0) {
        setRegistro(null);
        setMensaje("No hay macronutrientes registrados este día");
        return;
      }

      const base = {
        desayuno: [],
        colacion_manana: [],
        almuerzo: [],
        colacion_tarde: [],
        cena: [],
      };

      res.data.forEach((r) => {
        if (base[r.comida]) base[r.comida] = r.alimentos || [];
      });

      setRegistro(base);
      setMensaje("");
    } catch (error) {
      console.error(error);
      setMensaje("Error cargando macronutrientes");
    }
  };

  // =========================
  // 🧮 MACROS POR COMIDA
  // =========================
  const macrosPorComida = useMemo(() => {
    if (!registro) return {};

    const result = {};

    Object.entries(registro).forEach(([comida, alimentos]) => {
      const totales = {
        proteinas: 0,
        carbohidratos: 0,
        grasas: 0,
        fibra: 0,
      };

      alimentos.forEach((a) => {
        const cant = num(a.cantidad, 1);

        totales.proteinas += num(a.proteinas) * cant;
        totales.carbohidratos += num(a.carbohidratos) * cant;
        totales.grasas += num(a.grasas) * cant;
        totales.fibra += num(a.fibra) * cant;
      });

      result[comida] = totales;
    });

    return result;
  }, [registro]);

  // =========================
  // 🧮 TOTAL DEL DÍA
  // =========================
  const totalDia = useMemo(() => {
    const total = {
      proteinas: 0,
      carbohidratos: 0,
      grasas: 0,
      fibra: 0,
    };

    Object.values(macrosPorComida).forEach((m) => {
      total.proteinas += m.proteinas || 0;
      total.carbohidratos += m.carbohidratos || 0;
      total.grasas += m.grasas || 0;
      total.fibra += m.fibra || 0;
    });

    return total;
  }, [macrosPorComida]);

  return (
    <div className="fxh-wrapper macros-calendar">
      <div className="fxh-container macros-container">

        <h1 className="fxh-title">🥗 Macronutrientes del día</h1>

        {/* SELECTOR */}
        <div className="fxh-card macros-card">
          <p className="macros-label">Selecciona un día</p>

          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="macros-input"
          />

          <button onClick={buscarRegistro} className="fxh-button">
            Ver macros
          </button>

          {mensaje && <p className="macros-message">{mensaje}</p>}
        </div>

        {/* 🔥 RESULTADO TOTAL */}
        {registro && (
          <>
            <div className="fxh-card macros-result">
              <h2>Total del día</h2>

              <p  className="proteinas"  ><strong>Proteínas:</strong> {totalDia.proteinas.toFixed(1)} g</p>
              <p  className="carbos" > <strong>Carbohidratos:</strong> {totalDia.carbohidratos.toFixed(1)} g</p>
              <p  className="grasas"   ><strong>Grasas:</strong> {totalDia.grasas.toFixed(1)} g</p>
              <p  className="fibra"  ><strong>Fibra:</strong> {totalDia.fibra.toFixed(1)} g</p>
            </div>


            <div className="fxh-card calories-result">
  <h2>Proteínas objetivo</h2>
  <p className="calories-number">
    {metaProteinas} g
  </p>
</div>

<div className="fxh-card calories-result">
  <h2>Carbohidratos objetivo</h2>
  <p className="calories-number">
    {metaCarbos} g
  </p>
</div>

<div className="fxh-card calories-result">
  <h2>Grasas objetivo</h2>
  <p className="calories-number">
    {metaGrasas} g
  </p>
</div>

<div className="fxh-card calories-result">
  <h2>Fibra objetivo</h2>
  <p className="calories-number">
    {metaFibra} g
  </p>
</div>



            

            {/* 🔥 POR COMIDA */}
            <div className="fxh-card macros-meals">
              <h3>Distribución por comida</h3>

              {Object.entries(COMIDAS).map(([key, label]) => {
                const m = macrosPorComida[key] || {};

                return (
                  <div key={key} className="meal-block">
                    <h4>{label}</h4>

                    <div className="meal-macros">
                      <span>P: {num(m.proteinas).toFixed(1)}g</span>
                      <span>C: {num(m.carbohidratos).toFixed(1)}g</span>
                      <span>G: {num(m.grasas).toFixed(1)}g</span>
                      <span>F: {num(m.fibra).toFixed(1)}g</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

      </div>
    </div>
  );
}