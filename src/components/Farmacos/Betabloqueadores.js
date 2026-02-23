import React, { useEffect } from "react";
import "./Betabloqueadores.css";

function Betabloqueadores() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <h1 className="fxh-title">
        Betabloqueadores
      </h1>

      <h2 className="fxh-subtitle">📌 Introducción</h2>
      <p className="fxh-text">
        Los <strong>Betabloqueadores</strong> actúan bloqueando los receptores β-adrenérgicos,
        principalmente los β1 cardíacos. Disminuyen la frecuencia cardíaca,
        el gasto cardíaco y la presión arterial, siendo útiles en el tratamiento de
        <strong> Hipertensión Arterial</strong>,
        <strong> Angina de Pecho</strong> y
        <strong> Insuficiencia Cardíaca</strong>.
      </p>

      <h2 className="fxh-subtitle">🔬 Clasificación de Betabloqueadores</h2>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Ejemplos</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cardioselectivos (β1)</td>
              <td>Atenolol, Metoprolol, Bisoprolol</td>
              <td>Mayor afinidad por β1, menor riesgo de broncoconstricción</td>
            </tr>
            <tr>
              <td>No selectivos</td>
              <td>Propranolol, Nadolol</td>
              <td>Bloquean β1 y β2, contraindicado en asma</td>
            </tr>
            <tr>
              <td>Con actividad vasodilatadora</td>
              <td>Carvedilol, Nebivolol</td>
              <td>Bloqueo α1 o liberación de NO</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxh-subtitle">💡 Indicaciones Terapéuticas</h2>
      <ul className="fxh-list">
        <li>Hipertensión arterial.</li>
        <li>Insuficiencia cardíaca con fracción de eyección reducida.</li>
        <li>Angina de pecho y post-infarto.</li>
        <li>Taquiarritmias supraventriculares.</li>
        <li>Migraña (profilaxis).</li>
        <li>Temblor esencial y ansiedad situacional.</li>
      </ul>

      <h2 className="fxh-subtitle">⚠️ Efectos Adversos Comunes</h2>
      <ul className="fxh-list">
        <li>Bradicardia, hipotensión.</li>
        <li>Fatiga, mareos.</li>
        <li>Disfunción sexual.</li>
        <li>Broncoconstricción (no selectivos).</li>
        <li>Alteraciones del sueño o depresión.</li>
      </ul>

      <h2 className="fxh-subtitle">🧠 Consideraciones Clínicas</h2>
      <ul className="fxh-list">
        <li>Evitar en asma o EPOC (preferir cardioselectivos).</li>
        <li>No suspender bruscamente (riesgo de efecto rebote).</li>
        <li>Iniciar a dosis bajas en insuficiencia cardíaca.</li>
        <li>No recomendados como monoterapia en mayores sin comorbilidad cardiovascular.</li>
      </ul>

      <h2 className="fxh-subtitle">📦 Combinaciones Frecuentes</h2>
      <ul className="fxh-list">
        <li>Betabloqueador + IECA o ARA II.</li>
        <li>Betabloqueador + calcioantagonista no dihidropiridínico (con precaución).</li>
        <li>Betabloqueador + diurético tiazídico.</li>
      </ul>

      <h2 className="fxh-subtitle">📚 Conclusión</h2>
      <p className="fxh-text">
        Los <strong>Betabloqueadores</strong> son fármacos versátiles y eficaces en múltiples
        patologías cardiovasculares. Su uso debe adaptarse a cada paciente,
        evaluando beneficios y posibles contraindicaciones.
      </p>

    </div>
  );
}

export default Betabloqueadores;
