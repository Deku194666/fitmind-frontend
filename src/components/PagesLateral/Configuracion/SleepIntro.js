

import React from "react";
import "./SleepIntro.css";
import { useNavigate } from "react-router-dom";

export default function SleepIntro() {

  const navigate = useNavigate();

  return (
    <div className="fxh-wrapper sleep-intro">
      <div className="fxh-container sleep-container">

        {/* 🔥 TÍTULO */}
        <h1 className="fxh-title">
          😴 Sueño
        </h1>

        {/* 🔥 CARD PRINCIPAL */}
        <div className="fxh-card sleep-card">

          <h2>Descansa mejor, vive mejor</h2>

          <p>
            El sueño es fundamental para tu salud física y mental. Dormir bien
            mejora tu energía, concentración y estado de ánimo.
          </p>

          <p>
            Con FitMind podrás registrar tus horas de descanso y analizar
            la calidad de tu sueño para mejorar tus hábitos.
          </p>

        </div>

        {/* 🔥 FUNCIONALIDADES */}
        <div className="fxh-card sleep-card">

          <h3>¿Qué puedes hacer aquí?</h3>

          <ul>
            <li>🛌 Registrar horas de sueño</li>
            <li>⏰ Controlar horarios de descanso</li>
            <li>📊 Analizar tu calidad de sueño</li>
            <li>📝 Añadir notas sobre tu descanso</li>
          </ul>

        </div>

        {/* 🔥 BENEFICIOS */}
        <div className="fxh-card sleep-card">

          <h3>Beneficios</h3>

          <ul>
            <li>⚡ Más energía durante el día</li>
            <li>🧠 Mejor concentración</li>
            <li>😊 Mejor estado de ánimo</li>
            <li>💪 Recuperación física</li>
          </ul>

        </div>

      </div>
    </div>
  );
}