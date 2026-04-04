import React, { useEffect } from "react";
import "./CaloriesIntro.css";
import { useNavigate } from "react-router-dom";
import NavBarCaloriesIntro from "./NavBarCaloriesIntro";

export default function CaloriesIntro() {

  const navigate = useNavigate();

  // 🔥 SCROLL AL INICIO
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBarCaloriesIntro />

      <div className="fxh-wrapper calories-intro">
        <div className="fxh-container calories-container">

          {/* 🔥 TÍTULO */}
          <h1 className="fxh-title">
            🔥 Calorías
          </h1>

          {/* 🔥 CARD PRINCIPAL */}
          <div className="fxh-card calories-card">

            <h2>Controla tu energía diaria</h2>

            <p>
              Las calorías representan la energía que tu cuerpo utiliza cada día.
              Llevar un control te ayuda a alcanzar tus objetivos físicos y mejorar tu salud.
            </p>

            <p>
              Con FitMind podrás registrar y visualizar tu consumo diario de calorías
              de forma simple y rápida.
            </p>

          </div>

          {/* 🔥 FUNCIONALIDADES */}
          <div className="fxh-card calories-card">

            <h3>¿Qué puedes hacer aquí?</h3>

            <ul>
              <li>🔥 Registrar calorías consumidas</li>
              <li>📊 Ver tu progreso diario</li>
              <li>🎯 Comparar con tu meta calórica</li>
              <li>📅 Llevar seguimiento diario</li>
            </ul>

          </div>

          {/* 🔥 BENEFICIOS */}
          <div className="fxh-card calories-card">

            <h3>Beneficios</h3>

            <ul>
              <li>⚖️ Control de peso más preciso</li>
              <li>💪 Mejor rendimiento físico</li>
              <li>🧠 Mayor conciencia alimentaria</li>
              <li>🎯 Alcanzar tus objetivos más rápido</li>
            </ul>

          </div>

        </div>
      </div>
    </>
  );
}