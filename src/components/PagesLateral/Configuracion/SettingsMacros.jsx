


import React, { useState, useEffect } from "react";
import "./SettingsMacros.css";

export default function SettingsMacros() {

  // 🔥 SCROLL ARRIBA
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🔥 ESTADOS
  const [proteinas, setProteinas] = useState(80);
  const [carbohidratos, setCarbohidratos] = useState(200);
  const [grasas, setGrasas] = useState(70);
  const [fibra, setFibra] = useState(25);
  const [mensaje, setMensaje] = useState("");

  // 🔥 CARGAR DESDE LOCALSTORAGE
  useEffect(() => {
    const p = localStorage.getItem("meta_proteinas");
    const c = localStorage.getItem("meta_carbohidratos");
    const g = localStorage.getItem("meta_grasas");
    const f = localStorage.getItem("meta_fibra");

    if (p) setProteinas(Number(p));
    if (c) setCarbohidratos(Number(c));
    if (g) setGrasas(Number(g));
    if (f) setFibra(Number(f));
  }, []);

  // 🔥 GUARDAR
  const guardarMetas = () => {
    localStorage.setItem("meta_proteinas", proteinas);
    localStorage.setItem("meta_carbohidratos", carbohidratos);
    localStorage.setItem("meta_grasas", grasas);
    localStorage.setItem("meta_fibra", fibra);

    setMensaje("Metas guardadas correctamente 🔥");
  };

  return (
    <div className="fxh-wrapper settings-macros">
      <div className="fxh-container settings-container">

        <h1 className="fxh-title">⚙️ Configuración de Macros</h1>

        <div className="fxh-card settings-card">

          <h2>Metas diarias</h2>

          <p>Define tus macronutrientes diarios según tus objetivos</p>

          {/* PROTEINAS */}
          <input
            type="number"
            className="settings-input"
            value={proteinas}
            onChange={(e) => setProteinas(e.target.value)}
            placeholder="Proteínas (g)"
          />

          {/* CARBOS */}
          <input
            type="number"
            className="settings-input"
            value={carbohidratos}
            onChange={(e) => setCarbohidratos(e.target.value)}
            placeholder="Carbohidratos (g)"
          />

          {/* GRASAS */}
          <input
            type="number"
            className="settings-input"
            value={grasas}
            onChange={(e) => setGrasas(e.target.value)}
            placeholder="Grasas (g)"
          />

          {/* FIBRA */}
          <input
            type="number"
            className="settings-input"
            value={fibra}
            onChange={(e) => setFibra(e.target.value)}
            placeholder="Fibra (g)"
          />

          <button
            className="fxh-button"
            onClick={guardarMetas}
          >
            Guardar metas
          </button>

          {mensaje && <p className="settings-message">{mensaje}</p>}

        </div>

      </div>
    </div>
  );
}