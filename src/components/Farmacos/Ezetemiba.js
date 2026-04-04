import React, { useEffect } from 'react';
import './Ezetimiba.css';

function Ezetimiba() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail77">

      <h1 className="fxh-title">Ezetimiba</h1>

      <h2 className="fxh-subtitle">📌 Introducción</h2>
      <p className="fxh-text">
        La <strong>Ezetimiba</strong> es un fármaco hipolipemiante que actúa inhibiendo la absorción intestinal de colesterol. 
        Se utiliza principalmente como complemento de las estatinas en el tratamiento de la 
        <strong> hipercolesterolemia</strong>, especialmente en pacientes que no alcanzan metas de LDL-C 
        solo con estatinas o que presentan intolerancia a estas.
      </p>

      <h2 className="fxh-subtitle">🔬 Mecanismo de Acción</h2>
      <p className="fxh-text">
        Inhibe de forma selectiva el transportador <strong>NPC1L1</strong> (Niemann-Pick C1-Like 1) en el borde en cepillo 
        del intestino delgado, reduciendo la absorción del colesterol dietario y biliar. 
        Esto genera una disminución del colesterol hepático y un aumento en la captación de LDL desde la sangre.
      </p>

      <h2 className="fxh-subtitle">💊 Presentación y Dosis</h2>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis Habitual</th>
              <th>Uso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ezetimiba</td>
              <td>10 mg una vez al día</td>
              <td>Monoterapia o combinación con estatinas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxh-subtitle">💡 Indicaciones Terapéuticas</h2>
      <ul className="fxh-list">
        <li>Hipercolesterolemia primaria (combinada con estatinas o en monoterapia).</li>
        <li>Intolerancia parcial o total a estatinas.</li>
        <li>Hipercolesterolemia familiar heterocigota.</li>
        <li>Prevención secundaria de eventos cardiovasculares en combinación con estatinas (ej. estudio IMPROVE-IT).</li>
      </ul>

      <h2 className="fxh-subtitle">⚠️ Efectos Adversos Comunes</h2>
      <ul className="fxh-list">
        <li>Diarrea, flatulencias.</li>
        <li>Dolor abdominal.</li>
        <li>Elevación leve de transaminasas (más frecuente en combinación con estatinas).</li>
        <li>Fatiga, mialgias.</li>
      </ul>

      <h2 className="fxh-subtitle">🧠 Consideraciones Clínicas</h2>
      <ul className="fxh-list">
        <li>No afecta la absorción de vitaminas liposolubles.</li>
        <li>Buena opción en combinación con estatinas cuando no se logra el objetivo de LDL-C.</li>
        <li>Evaluar función hepática al iniciar tratamiento combinado con estatinas.</li>
        <li>No se recomienda en pacientes con insuficiencia hepática moderada o grave.</li>
      </ul>

      <h2 className="fxh-subtitle">📚 Conclusión</h2>
      <p className="fxh-text">
        La <strong>Ezetimiba</strong> es una herramienta eficaz y segura para el tratamiento de la dislipidemia, 
        especialmente como complemento a las estatinas. Su mecanismo único permite una acción sinérgica, 
        logrando reducciones adicionales del colesterol LDL sin aumentar significativamente los efectos adversos.
      </p>

    </div>
  );
}

export default Ezetimiba;
