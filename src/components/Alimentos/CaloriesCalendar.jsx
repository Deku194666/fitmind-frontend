import axios from "axios";
import "./CaloriesCalendar.css";
import React, { useState, useMemo, useEffect } from "react";
import { NUTRITION_GOALS } from "../../config";

const CALORIAS_META = NUTRITION_GOALS.calorias;

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

export default function CaloriesCalendar() {
  const [fecha, setFecha] = useState("");
  const [registro, setRegistro] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [metaCalorias, setMetaCalorias] = useState(2200);

  // 🔥 SCROLL AL INICIO
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
  const guardado = localStorage.getItem("meta_calorias");
  if (guardado) {
    setMetaCalorias(Number(guardado));
  }
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
        setMensaje("No hay calorías registradas este día");
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
      setMensaje("Error cargando calorías");
    }
  };

  // =========================
  // 🧮 TOTAL POR COMIDA
  // =========================
  const caloriasPorComida = useMemo(() => {
    if (!registro) return {};

    const result = {};

    Object.entries(registro).forEach(([comida, alimentos]) => {
      let total = 0;

      alimentos.forEach((a) => {
        const cant = num(a.cantidad, 1);
        total += num(a.calorias) * cant;
      });

      result[comida] = total;
    });

    return result;
  }, [registro]);

  // =========================
  // 🧮 TOTAL DEL DÍA
  // =========================
  const totalCalorias = useMemo(() => {
    return Object.values(caloriasPorComida).reduce(
      (acc, val) => acc + val,
      0
    );
  }, [caloriasPorComida]);



  

  return (
    <div className="fxh-wrapper calories-calendar">
      <div className="fxh-container calories-container">

        <h1 className="fxh-title">🔥 Calorías del día</h1>

        {/* SELECTOR */}
        <div className="fxh-card calories-card">
          <p className="calories-label">Selecciona un día</p>

          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="calories-input"
          />

          <button onClick={buscarRegistro} className="fxh-button">
            Ver calorías
          </button>

          {mensaje && <p className="calories-message">{mensaje}</p>}
        </div>

        {/* 🔥 RESULTADO TOTAL */}
        {registro && (
          <>
            <div className="fxh-card calories-result">
              <h2>Total del día</h2>
              <p className="calories-number">
                {totalCalorias.toFixed(0)} kcal
              </p>
            </div>


            <div className="fxh-card calories-result">
              <h2>Meta diaria</h2>
              <p className="calories-number">
                {metaCalorias} kcal
              </p>
            </div>
            
            
            <div className="fxh-card calories-result">
              <h2>Diferencia</h2>
              <p className="calories-number">
                {(CALORIAS_META - totalCalorias).toFixed(0)} kcal
              </p>
            </div>

            {/* 🔥 CALORÍAS POR COMIDA */}
            <div className="fxh-card calories-meals">
              <h3>Distribución por comida</h3>

              {Object.entries(COMIDAS).map(([key, label]) => (
                <div key={key} className="meal-row">
                  <span>{label}</span>
                  <span>
                    {caloriasPorComida[key]
                      ? `${caloriasPorComida[key].toFixed(0)} kcal`
                      : "0 kcal"}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}