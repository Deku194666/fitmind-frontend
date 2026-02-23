import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Estatinas.css";

function Estatinas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <h1 className="fxh-title">
        Estatinas
      </h1>

      <h2 className="fxh-subtitle">📌 Introducción</h2>
      <p className="fxh-text">
        Las <strong>Estatinas</strong> son fármacos hipolipemiantes ampliamente utilizados para el tratamiento de la <strong>dislipidemia</strong>
        y la prevención de eventos cardiovasculares. Reducen el colesterol LDL, ayudando a prevenir
        <strong> Infarto Agudo al Miocardio</strong>, <strong> Accidente Cerebrovascular</strong> y muerte cardiovascular.
      </p>

      <h2 className="fxh-subtitle">🔬 Mecanismo de Acción</h2>
      <p className="fxh-text">
        Inhiben competitivamente la <strong>HMG-CoA reductasa</strong>, enzima clave en la síntesis hepática de colesterol.
        Esto aumenta los receptores hepáticos de LDL y favorece su captación desde la sangre, reduciendo sus niveles plasmáticos.
      </p>

      <h2 className="fxh-subtitle">💊 Ejemplos y Potencia</h2>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Estatina</th>
              <th>Potencia</th>
              <th>Comentarios</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/farmacos/farmacos2/atorvastatina">
                  Atorvastatina
                </Link>
              </td>
              <td>Alta</td>
              <td>Larga vida media. Eficaz para prevención secundaria.</td>
            </tr>
            <tr>
              <td>Rosuvastatina</td>
              <td>Alta</td>
              <td>Más potente. Útil en hipercolesterolemia severa.</td>
            </tr>
            <tr>
              <td>Simvastatina</td>
              <td>Moderada</td>
              <td>Mayor riesgo de interacciones. Administrar en la noche.</td>
            </tr>
            <tr>
              <td>Pravastatina</td>
              <td>Baja</td>
              <td>Menor riesgo de interacciones. Buena tolerabilidad.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxh-subtitle">💡 Indicaciones Terapéuticas</h2>
      <ul className="fxh-list">
        <li>Dislipidemia (LDL elevado).</li>
        <li>Prevención secundaria en enfermedad aterosclerótica.</li>
        <li>Prevención primaria en alto riesgo cardiovascular.</li>
        <li>Hiperlipidemia familiar.</li>
      </ul>

      <h2 className="fxh-subtitle">⚠️ Efectos Adversos</h2>
      <ul className="fxh-list">
        <li>Mialgias y calambres.</li>
        <li>Elevación de enzimas hepáticas.</li>
        <li>Miopatía o rabdomiolisis (raro).</li>
        <li>Molestias gastrointestinales leves.</li>
      </ul>

      <h2 className="fxh-subtitle">🧠 Consideraciones Clínicas</h2>
      <ul className="fxh-list">
        <li>Monitorizar CPK si hay síntomas musculares.</li>
        <li>Controlar pruebas hepáticas al inicio.</li>
        <li>Evitar exceso de alcohol y jugo de pomelo.</li>
        <li>Dosis nocturna preferible en estatinas de vida corta.</li>
        <li>Evaluar adherencia a largo plazo.</li>
      </ul>

      <h2 className="fxh-subtitle">📚 Conclusión</h2>
      <p className="fxh-text">
        Las <strong>Estatinas</strong> son el pilar fundamental de la prevención cardiovascular.
        Individualizar la terapia y monitorear efectos adversos es clave para optimizar sus beneficios.
      </p>

    </div>
  );
}

export default Estatinas;
