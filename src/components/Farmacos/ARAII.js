import React, { useEffect } from "react";
import "./ARAII.css";

function ARAII() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail62">

      <h1 className="fxh-title">
        Antagonistas de los Receptores de Angiotensina II (ARA II)
      </h1>

      <h2 className="fxh-subtitle">📌 Introducción</h2>
      <p className="fxh-text">
        Los <strong>ARA II</strong> bloquean directamente los receptores AT<sub>1</sub> de la angiotensina II,
        evitando sus efectos vasoconstrictores, reduciendo la secreción de aldosterona y mejorando
        el perfil hemodinámico sin provocar tos, a diferencia de los IECA.
      </p>

      <h2 className="fxh-subtitle">🔬 Mecanismo de Acción</h2>
      <p className="fxh-text">
        Se unen selectivamente a los receptores AT<sub>1</sub>, impidiendo la vasoconstricción,
        la retención de sodio y el remodelado vascular. Generan vasodilatación,
        reducción de la presión arterial y protección renal y miocárdica.
      </p>

      <h2 className="fxh-subtitle">🧪 Ejemplos Comunes</h2>
      <ul className="fxh-list">
        <li>Losartán</li>
        <li>Valsartán</li>
        <li>Candesartán</li>
        <li>Telmisartán</li>
        <li>Irbesartán</li>
        <li>Olmesartán</li>
      </ul>

      <h2 className="fxh-subtitle">📋 Indicaciones Clínicas</h2>
      <ul className="fxh-list">
        <li>Hipertensión arterial esencial</li>
        <li>Insuficiencia cardíaca crónica</li>
        <li>Prevención de progresión de nefropatía diabética</li>
        <li>Post-infarto agudo de miocardio con disfunción ventricular</li>
        <li>Intolerancia a IECA</li>
      </ul>

      <h2 className="fxh-subtitle">💊 Dosis Habitual</h2>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis Inicial</th>
              <th>Dosis Mantenimiento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Losartán</td>
              <td>50 mg/día</td>
              <td>50–100 mg/día</td>
            </tr>
            <tr>
              <td>Valsartán</td>
              <td>80 mg/día</td>
              <td>80–320 mg/día</td>
            </tr>
            <tr>
              <td>Candesartán</td>
              <td>8 mg/día</td>
              <td>8–32 mg/día</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxh-subtitle">📈 Farmacocinética</h2>
      <ul className="fxh-list">
        <li><strong>Absorción:</strong> variable según compuesto</li>
        <li><strong>Vida media:</strong> 6–24 horas</li>
        <li><strong>Metabolismo:</strong> hepático (mayoría)</li>
        <li><strong>Excreción:</strong> renal y biliar</li>
        <li><strong>Unión a proteínas:</strong> mayor al 90%</li>
      </ul>

      <h2 className="fxh-subtitle">⚠️ Efectos Adversos</h2>
      <ul className="fxh-list">
        <li>Hiperpotasemia</li>
        <li>Hipotensión</li>
        <li>Alteración de la función renal</li>
        <li>Mareos, cefalea</li>
        <li>Angioedema (menos frecuente que en IECA)</li>
      </ul>

      <h2 className="fxh-subtitle">🚫 Contraindicaciones</h2>
      <ul className="fxh-list">
        <li>Embarazo y lactancia</li>
        <li>Estenosis bilateral de arterias renales</li>
        <li>Hiperpotasemia severa</li>
        <li>Angioedema previo por ARA II</li>
      </ul>

      <h2 className="fxh-subtitle">🔄 Interacciones Farmacológicas</h2>
      <ul className="fxh-list">
        <li>Diuréticos ahorradores de potasio → riesgo de hiperkalemia</li>
        <li>AINEs → posible pérdida de eficacia y riesgo renal</li>
        <li>Lítio → aumento de toxicidad</li>
        <li>No combinar con IECA salvo indicación específica</li>
      </ul>

      <h2 className="fxh-subtitle">🧠 Consideraciones Clínicas</h2>
      <ul className="fxh-list">
        <li>Alternativa cuando hay intolerancia a IECA</li>
        <li>Útiles en pacientes diabéticos con proteinuria</li>
        <li>Controlar función renal y potasio</li>
        <li>Pueden combinarse con diuréticos o calcioantagonistas</li>
      </ul>

    </div>
  );
}

export default ARAII;
