


import React from "react";
import "./ExerciseIntro.css";
import { useNavigate } from "react-router-dom";

export default function ExerciseIntro() {

  const navigate = useNavigate();

  return (
    <div className="fxh-wrapper exercise-intro">
      <div className="fxh-container exercise-container">

        {/* 🔥 TÍTULO */}
        <h1 className="fxh-title">
          🏃 Ejercicio
        </h1>

        {/* 🔥 CARD PRINCIPAL */}
        <div className="fxh-card exercise-card">

          <h2>Activa tu cuerpo y mejora tu salud</h2>

          <p>
            El ejercicio es fundamental para mantener un estilo de vida saludable.
            Te ayuda a mejorar tu condición física, reducir el estrés y aumentar tu energía.
          </p>

          <p>
            Con FitMind podrás registrar tus actividades y llevar un seguimiento
            de tu progreso para alcanzar tus objetivos.
          </p>

        </div>

        {/* 🔥 FUNCIONALIDADES */}
        <div className="fxh-card exercise-card">

          <h3>¿Qué puedes hacer aquí?</h3>

          <ul>
            <li>🏋️ Registrar tus entrenamientos</li>
            <li>⏱️ Medir duración de ejercicios</li>
            <li>🔥 Calcular calorías quemadas</li>
            <li>📈 Monitorear tu progreso</li>
          </ul>

        </div>

        {/* 🔥 BENEFICIOS */}
        <div className="fxh-card exercise-card">

          <h3>Beneficios</h3>

          <ul>
            <li>💪 Mejorar tu condición física</li>
            <li>🧠 Reducir el estrés</li>
            <li>❤️ Fortalecer tu salud cardiovascular</li>
            <li>⚡ Aumentar tu energía diaria</li>
          </ul>

        </div>

      </div>
    </div>
  );
}