import "./MacrosIntro.css";
import { useNavigate } from "react-router-dom";
import NavBarMacrosIntro from "./NavBarMacrosIntro";
import React, { useEffect } from "react";

export default function MacrosIntro() {

  // 🔥 SCROLL AL INICIO
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <NavBarMacrosIntro />

      <div className="fxh-wrapper macros-intro">
        <div className="fxh-container macros-container">

          <h1 className="fxh-title">
            🥗 Macronutrientes
          </h1>

          <div className="fxh-card macros-card">

            <h2>Equilibra tu alimentación</h2>

            <p>
              Los macronutrientes son esenciales para el funcionamiento de tu cuerpo.
              Incluyen proteínas, carbohidratos, grasas y fibra.
            </p>

            <p>
              Con FitMind podrás analizar tu consumo diario y mantener un equilibrio
              adecuado según tus objetivos.
            </p>

          </div>

          <div className="fxh-card macros-card">

            <h3>¿Qué puedes hacer aquí?</h3>

            <ul>
              <li>🍗 Registrar proteínas</li>
              <li>🍞 Controlar carbohidratos</li>
              <li>🥑 Monitorear grasas</li>
              <li>🌾 Seguir tu consumo de fibra</li>
            </ul>

          </div>

          <div className="fxh-card macros-card">

            <h3>Beneficios</h3>

            <ul>
              <li>💪 Mejor desarrollo muscular</li>
              <li>⚡ Energía equilibrada</li>
              <li>🧠 Mejor rendimiento mental</li>
              <li>🥗 Alimentación más consciente</li>
            </ul>

          </div>

        </div>
      </div>
    </>
  );
}