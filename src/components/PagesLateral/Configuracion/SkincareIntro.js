

import React from "react";
import "./SkincareIntro.css";
import { useNavigate } from "react-router-dom";

export default function SkincareIntro() {

  const navigate = useNavigate();

  return (
    <div className="fxh-wrapper skincare-intro">
      <div className="fxh-container skincare-container">

        {/* 🔥 TÍTULO */}
        <h1 className="fxh-title">
          🧴 Cuidado de la Piel
        </h1>

        {/* 🔥 CARD PRINCIPAL */}
        <div className="fxh-card skincare-card">

          <h2>Cuida tu piel día a día</h2>

          <p>
            Mantener una rutina de cuidado de la piel es clave para una piel sana.
            Registrar tus hábitos te permite entender qué funciona mejor para ti.
          </p>

          <p>
            Con FitMind podrás llevar un seguimiento diario de tu rutina y el
            estado de tu piel.
          </p>

        </div>

        {/* 🔥 FUNCIONALIDADES */}
        <div className="fxh-card skincare-card">

          <h3>¿Qué puedes hacer aquí?</h3>

          <ul>
            <li>☀️ Registrar rutina de mañana</li>
            <li>🌙 Registrar rutina de noche</li>
            <li>🧴 Evaluar estado de tu piel</li>
            <li>📝 Añadir notas diarias</li>
          </ul>

        </div>

        {/* 🔥 BENEFICIOS */}
        <div className="fxh-card skincare-card">

          <h3>Beneficios</h3>

          <ul>
            <li>✨ Mejorar tu rutina diaria</li>
            <li>📊 Identificar qué productos funcionan</li>
            <li>🧠 Entender cambios en tu piel</li>
            <li>💆‍♀️ Mantener una piel saludable</li>
          </ul>

        </div>


      </div>
    </div>
  );
}