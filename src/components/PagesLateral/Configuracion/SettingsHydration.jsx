


import React, { useState, useEffect } from "react";
import "./SettingsHydration.css";

export default function SettingsHydration() {

  // 🔥 SCROLL ARRIBA
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🔥 ESTADO
  const [metaHidratacion, setMetaHidratacion] = useState(2000);
  const [mensaje, setMensaje] = useState("");

  // 🔥 CARGAR DESDE LOCALSTORAGE
  useEffect(() => {
    const guardado = localStorage.getItem("meta_hidratacion");
    if (guardado) {
      setMetaHidratacion(Number(guardado));
    }
  }, []);

  // 🔥 GUARDAR META
  const guardarMeta = () => {
    if (!metaHidratacion || metaHidratacion <= 0) {
      setMensaje("Ingresa una cantidad válida 💧");
      return;
    }

    localStorage.setItem("meta_hidratacion", metaHidratacion);
    setMensaje("Meta de hidratación guardada 💧🔥");
  };

  return (
    <div className="fxh-wrapper settings-hydration">
      <div className="fxh-container settings-container">

        <h1 className="fxh-title">⚙️ Configuración</h1>

        <div className="fxh-card settings-card">

          <h2>Meta diaria de hidratación</h2>

          <p>
            Define cuánta agua deseas beber al día según tu estilo de vida.
          </p>

          <input
            type="number"
            className="settings-input"
            value={metaHidratacion}
            onChange={(e) => setMetaHidratacion(e.target.value)}
            min="1"
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