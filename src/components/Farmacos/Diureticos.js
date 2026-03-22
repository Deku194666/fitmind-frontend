import React, { useEffect } from "react";
import "./Diureticos.css";

function Diureticos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail63">

      <h1 className="fxh-title">
        Diuréticos
      </h1>

      <h2 className="fxh-subtitle">📌 Introducción</h2>
      <p className="fxh-text">
        Los <strong>Diuréticos</strong> aumentan la excreción renal de agua y electrolitos,
        especialmente sodio, reduciendo el volumen intravascular.
        Son ampliamente utilizados en el tratamiento de la
        <strong> Hipertensión Arterial</strong>,
        <strong> Insuficiencia Cardíaca</strong> y
        <strong> Síndromes Edematosos</strong>.
      </p>

      <h2 className="fxh-subtitle">🔬 Clasificación de Diuréticos</h2>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Ejemplos</th>
              <th>Mecanismo de acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tiazídicos</td>
              <td>Hidroclorotiazida, Indapamida</td>
              <td>Inhiben la reabsorción de sodio en el túbulo contorneado distal</td>
            </tr>
            <tr>
              <td>De asa</td>
              <td>Furosemida, Torasemida</td>
              <td>Inhiben el cotransportador Na+/K+/2Cl- en el asa de Henle</td>
            </tr>
            <tr>
              <td>Ahorradores de potasio</td>
              <td>Espironolactona, Amilorida</td>
              <td>Bloquean receptores de aldosterona o canales de sodio en túbulos colectores</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxh-subtitle">💡 Indicaciones Terapéuticas</h2>
      <ul className="fxh-list">
        <li>Hipertensión arterial.</li>
        <li>Insuficiencia cardíaca congestiva.</li>
        <li>Edema por síndrome nefrótico, cirrosis hepática o insuficiencia renal.</li>
        <li>Hiperaldosteronismo primario.</li>
      </ul>

      <h2 className="fxh-subtitle">⚠️ Efectos Adversos Comunes</h2>
      <ul className="fxh-list">
        <li><strong>Tiazidas:</strong> Hipokalemia, hiponatremia, hiperuricemia, hiperglucemia.</li>
        <li><strong>De asa:</strong> Hipovolemia, ototoxicidad, hipokalemia.</li>
        <li><strong>Ahorradores de potasio:</strong> Hiperpotasemia, ginecomastia.</li>
      </ul>

      <h2 className="fxh-subtitle">🧠 Consideraciones Clínicas</h2>
      <ul className="fxh-list">
        <li>Monitorizar electrolitos séricos y función renal.</li>
        <li>Útiles en adultos mayores con HTA.</li>
        <li>Evitar combinación de ahorradores de potasio con IECA/ARA II sin control estricto.</li>
        <li>En edema severo o insuficiencia renal, preferir diuréticos de asa.</li>
      </ul>

      <h2 className="fxh-subtitle">📦 Combinaciones Frecuentes</h2>
      <ul className="fxh-list">
        <li>Tiazida + IECA o ARA II.</li>
        <li>Diurético de asa + espironolactona en insuficiencia cardíaca avanzada.</li>
        <li>Tiazida + betabloqueador en hipertensión resistente.</li>
      </ul>

      <h2 className="fxh-subtitle">📚 Conclusión</h2>
      <p className="fxh-text">
        Los <strong>Diuréticos</strong> son fundamentales en el manejo de patologías cardiovasculares
        y edematosas. Su uso racional, basado en la fisiopatología del paciente y control clínico
        adecuado, permite optimizar beneficios y minimizar riesgos.
      </p>

    </div>
  );
}

export default Diureticos;
