


import React from "react";
import "./HydrationIntro.css";
import { useNavigate } from "react-router-dom";

export default function HydrationIntro() {

  const navigate = useNavigate();

  return (
    <div className="fxh-wrapper hydration-intro">
      <div className="fxh-container hydration-container">

        {/* 🔥 TÍTULO */}
        <h1 className="fxh-title">
          💧 Hidratación
        </h1>

        {/* 🔥 CARD PRINCIPAL */}
        <div className="fxh-card hydration-card">

          <h2>¿Por qué es importante hidratarse?</h2>

          <p>
            Mantener una buena hidratación es fundamental para el funcionamiento
            de tu cuerpo. El agua ayuda a regular la temperatura, transportar
            nutrientes y mejorar tu energía diaria.
          </p>

          <p>
            En FitMind podrás registrar tu consumo de agua y llevar un seguimiento
            diario para alcanzar tus objetivos personalizados.
          </p>

        </div>

        {/* 🔥 BENEFICIOS */}
        <div className="fxh-card hydration-card">

          <h3>¿Qué puedes hacer aquí?</h3>

          <ul>
            <li>💧 Registrar tu consumo diario de agua</li>
            <li>🎯 Definir tu meta personalizada</li>
            <li>📊 Ver tu progreso</li>
            <li>🔔 Recibir recordatorios</li>
          </ul>

        </div>

      </div>
    </div>
  );
}