import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './InhibidoresCOX1.css';

function InhibidoresCOX1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <p className="fxh-title">
        Inhibidores de la COX-1
      </p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Inhibidores de la Ciclooxigenasa-1 (COX-1)</strong>, como la
        <strong> aspirina en dosis bajas</strong>, bloquean de forma irreversible esta enzima,
        reduciendo la formación de tromboxano A2 (TXA2). Esta acción inhibe la agregación
        plaquetaria, utilizándose como <strong>antiagregantes plaquetarios</strong>
        en la prevención cardiovascular.
      </p>

      <p className="fxh-subtitle">🔬 Mecanismo de Acción</p>
      <p className="fxh-text">
        La COX-1 participa en la síntesis de prostanoides como el TXA2 en las plaquetas,
        el cual induce vasoconstricción y agregación plaquetaria.
        La <strong>aspirina</strong> inhibe irreversiblemente esta enzima,
        suprimiendo la producción de TXA2 durante toda la vida de la plaqueta (7–10 días).
      </p>

      <p className="fxh-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="fxh-list">
        <li>Prevención primaria en pacientes con alto riesgo cardiovascular.</li>
        <li>Prevención secundaria de IAM o ACV isquémico.</li>
        <li>Enfermedad coronaria estable o síndrome coronario agudo.</li>
        <li>Enfermedad arterial periférica o revascularización previa.</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="fxh-list">
        <li>Irritación gástrica y dispepsia.</li>
        <li>Úlceras o sangrado digestivo.</li>
        <li>Hemorragias (epistaxis, hematomas).</li>
        <li>Hipersensibilidad (asma inducida por AAS).</li>
      </ul>

      <p className="fxh-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="fxh-list">
        <li>Aspirina en dosis bajas (75–100 mg/día) para efecto antiagregante.</li>
        <li>Evaluar riesgo-beneficio en prevención primaria.</li>
        <li>No usar en menores de 16 años con infecciones virales.</li>
        <li>Suspender antes de cirugías de alto riesgo hemorrágico.</li>
      </ul>

      <p className="fxh-subtitle">📦 Combinaciones Frecuentes</p>
      <ul className="fxh-list">
        <li>AAS + clopidogrel en doble antiagregación.</li>
        <li>AAS + IBP para protección gástrica.</li>
        <li>Evitar combinación con AINEs no selectivos.</li>
      </ul>

      <p className="fxh-subtitle">📚 Conclusión</p>
      <p className="fxh-text">
        Los <strong>Inhibidores de la COX-1</strong>, especialmente la aspirina
        en dosis bajas, son pilares en la prevención cardiovascular.
        Su efecto antiagregante se debe a la inhibición irreversible del TXA2.
        El uso debe individualizarse según riesgo cardiovascular y hemorrágico.
      </p>

    </div>
  );
}

export default InhibidoresCOX1;
