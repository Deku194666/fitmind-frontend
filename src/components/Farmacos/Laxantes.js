import React, { useEffect } from 'react';
import './Laxantes.css';

function Laxantes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail82">

      <p className="fxh-title">Laxantes</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Laxantes</strong> son fármacos utilizados para facilitar o estimular la evacuación intestinal en casos de estreñimiento, preparación para procedimientos diagnósticos (como colonoscopías) o cirugía intestinal.
      </p>

      <p className="fxh-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="fxh-list">
        <li>Aumentan el volumen o el contenido de agua de las heces.</li>
        <li>Estimulan la motilidad intestinal.</li>
        <li>Aumentan la secreción de líquidos en el colon.</li>
      </ul>

      <p className="fxh-subtitle">📋 Clasificación e Indicaciones</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Ejemplos</th>
              <th>Indicaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Formadores de masa</td>
              <td>Psyllium, Metilcelulosa</td>
              <td>Estreñimiento crónico leve</td>
            </tr>
            <tr>
              <td>Osmóticos</td>
              <td>Lactulosa, Polietilenglicol, Sales de magnesio</td>
              <td>Preparación para colonoscopía, estreñimiento agudo</td>
            </tr>
            <tr>
              <td>Estimulantes</td>
              <td>Bisacodilo, Senósidos</td>
              <td>Uso ocasional en estreñimiento refractario</td>
            </tr>
            <tr>
              <td>Emolientes (ablandadores)</td>
              <td>Docusato sódico</td>
              <td>Pacientes con fisuras anales, postquirúrgicos</td>
            </tr>
            <tr>
              <td>Lubricantes</td>
              <td>Aceite mineral</td>
              <td>Uso ocasional, evitar en niños y ancianos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">⚠️ Efectos Adversos</p>
      <ul className="fxh-list">
        <li>Distensión abdominal, flatulencia (formadores de masa)</li>
        <li>Diarrea, desequilibrios electrolíticos (osmóticos y estimulantes)</li>
        <li>Dependencia a largo plazo (uso crónico de estimulantes)</li>
        <li>Aspiración y neumonía lipoidea (aceite mineral en pacientes encamados)</li>
      </ul>

      <p className="fxh-subtitle">🔄 Contraindicaciones</p>
      <ul className="fxh-list">
        <li>Obstrucción intestinal</li>
        <li>Dolor abdominal sin diagnóstico</li>
        <li>Colitis o apendicitis aguda</li>
        <li>Uso prolongado sin supervisión médica</li>
      </ul>

      <p className="fxh-subtitle">📉 Interacciones Relevantes</p>
      <ul className="fxh-list">
        <li>Sales de magnesio pueden alterar absorción de algunos antibióticos</li>
        <li>Lactulosa puede reducir eficacia de otros fármacos si se toma simultáneamente</li>
        <li>Vitaminas liposolubles (A, D, E, K) pueden malabsorberse con aceite mineral</li>
      </ul>

      <p className="fxh-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="fxh-list">
        <li>Fomentar cambios en dieta y estilo de vida antes de iniciar laxantes farmacológicos</li>
        <li>Evitar el uso crónico sin evaluación médica</li>
        <li>Elegir el tipo de laxante según el caso clínico</li>
        <li>Buena hidratación es clave para eficacia y seguridad</li>
      </ul>

    </div>
  );
}

export default Laxantes;
