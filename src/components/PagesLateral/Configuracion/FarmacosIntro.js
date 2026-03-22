


import React from "react";
import "./FarmacosIntro.css";
import { useNavigate } from "react-router-dom";

export default function FarmacosIntro() {

  const navigate = useNavigate();

  return (
    <div className="fxh-wrapper farmacos-intro">
      <div className="fxh-container farmacos-container">

        {/* 🔥 TÍTULO */}
        <h1 className="fxh-title">
          💊 Fármacos
        </h1>

        {/* 🔥 CARD PRINCIPAL */}
        <div className="fxh-card farmacos-card">

          <h2>Gestiona tu medicación de forma segura</h2>

          <p>
            Llevar un control adecuado de tus medicamentos es fundamental para tu salud.
            Registrar tus fármacos te ayuda a evitar olvidos y mejorar la adherencia a tratamientos.
          </p>

          <p>
            Con FitMind podrás organizar tus medicamentos, horarios y dosis de manera sencilla.
          </p>

        </div>

        {/* 🔥 FUNCIONALIDADES */}
        <div className="fxh-card farmacos-card">

          <h3>¿Qué puedes hacer aquí?</h3>

          <ul>
            <li>💊 Registrar tus medicamentos</li>
            <li>⏰ Definir horarios de toma</li>
            <li>📅 Ver registros en calendario</li>
            <li>📝 Añadir notas importantes</li>
          </ul>

        </div>

        {/* 🔥 BENEFICIOS */}
        <div className="fxh-card farmacos-card">

          <h3>Beneficios</h3>

          <ul>
            <li>✅ Evitar olvidos</li>
            <li>📊 Mejor control del tratamiento</li>
            <li>🧠 Reducir errores en la medicación</li>
            <li>❤️ Mejorar tu bienestar general</li>
          </ul>

        </div>

      </div>
    </div>
  );
}