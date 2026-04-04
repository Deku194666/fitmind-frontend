

import React from "react";
import "./VitalSignsIntro.css";
import { useNavigate } from "react-router-dom";

export default function VitalSignsIntro() {

  const navigate = useNavigate();

  return (
    <div className="fxh-wrapper vitals-intro">
      <div className="fxh-container vitals-container">

        {/* 🔥 TÍTULO */}
        <h1 className="fxh-title">
          🩺 Signos Vitales
        </h1>

        {/* 🔥 CARD PRINCIPAL */}
        <div className="fxh-card vitals-card">

          <h2>Monitorea tu salud en tiempo real</h2>

          <p>
            Los signos vitales son indicadores clave de tu estado físico. 
            Controlarlos te permite detectar cambios importantes en tu salud 
            y tomar decisiones a tiempo.
          </p>

          <p>
            Con FitMind podrás registrar y hacer seguimiento de tus valores 
            para mantener un control constante de tu bienestar.
          </p>

        </div>

        {/* 🔥 FUNCIONALIDADES */}
        <div className="fxh-card vitals-card">

          <h3>¿Qué puedes registrar?</h3>

          <ul>
            <li>🫀 Frecuencia cardíaca</li>
            <li>🩸 Presión arterial</li>
            <li>🌡️ Temperatura corporal</li>
            <li>🫁 Saturación de oxígeno</li>
            <li>💨 Frecuencia respiratoria</li>
          </ul>

        </div>

     
      </div>
    </div>
  );
}