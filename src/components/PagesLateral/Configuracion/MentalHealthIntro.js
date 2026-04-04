

import React from "react";
import "./MentalHealthIntro.css";
import { useNavigate } from "react-router-dom";

export default function MentalHealthIntro() {

  const navigate = useNavigate();

  return (
    <div className="fxh-wrapper mental-intro">
      <div className="fxh-container mental-container">

        {/* 🔥 TÍTULO */}
        <h1 className="fxh-title">
          🧠 Salud Mental
        </h1>

        {/* 🔥 CARD PRINCIPAL */}
        <div className="fxh-card mental-card">

          <h2>Cuida tu bienestar emocional</h2>

          <p>
            La salud mental es tan importante como la física. Registrar tu estado
            emocional te ayuda a entender tus pensamientos, emociones y hábitos.
          </p>

          <p>
            Con FitMind podrás llevar un seguimiento de tu bienestar y mejorar
            tu equilibrio emocional día a día.
          </p>

        </div>

        {/* 🔥 FUNCIONALIDADES */}
        <div className="fxh-card mental-card">

          <h3>¿Qué puedes hacer aquí?</h3>

          <ul>
            <li>😊 Registrar tu estado de ánimo</li>
            <li>🧘 Seguimiento de actividades como yoga o meditación</li>
            <li>📝 Escribir pensamientos o notas</li>
            <li>📊 Analizar tu bienestar a lo largo del tiempo</li>
          </ul>

        </div>

        {/* 🔥 BENEFICIOS */}
        <div className="fxh-card mental-card">

          <h3>Beneficios</h3>

          <ul>
            <li>🧠 Mayor autoconocimiento</li>
            <li>💬 Mejor gestión emocional</li>
            <li>🌿 Reducción del estrés</li>
            <li>✨ Mejora del bienestar general</li>
          </ul>

        </div>

     
      </div>
    </div>
  );
}