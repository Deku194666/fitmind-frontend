


import React, { useState, useEffect } from "react";
import "./SettingsCalories.css";

export default function SettingsCalories() {

  // 🔥 SCROLL ARRIBA
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🔥 ESTADO
  const [metaCalorias, setMetaCalorias] = useState(2200);
  const [mensaje, setMensaje] = useState("");

  // 🔥 CARGAR DESDE LOCALSTORAGE
  useEffect(() => {
    const guardado = localStorage.getItem("meta_calorias");
    if (guardado) {
      setMetaCalorias(Number(guardado));
    }
  }, []);

  // 🔥 GUARDAR META
  const guardarMeta = () => {
    localStorage.setItem("meta_calorias", metaCalorias);
    setMensaje("Meta guardada correctamente 🔥");
  };

  return (
    <div className="fxh-wrapper settings-calories">
      <div className="fxh-container settings-container">

        <h1 className="fxh-title">⚙️ Configuración</h1>

        <div className="fxh-card settings-card">

          <h2>Meta diaria de calorías</h2>

          <p>
            Define cuántas calorías deseas consumir al día según tus objetivos.
          </p>

          <input
            type="number"
            className="settings-input"
            value={metaCalorias}
            onChange={(e) => setMetaCalorias(e.target.value)}
          />

          <button
            className="fxh-button"
            onClick={guardarMeta}
          >
            Guardar meta
          </button>

          {mensaje && <p className="settings-message">{mensaje}</p>}

        </div>

      </div>
    </div>
  );
}