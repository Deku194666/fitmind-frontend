import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Diabetes.css';

function Diabetes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="diabetes-container">

      <p className="title-main">Diabetes Mellitus</p>

      <p className="title-section">📌 Introducción</p>
      <p className="text-body">
        La <strong>Diabetes Mellitus</strong> es una enfermedad metabólica crónica caracterizada por
        niveles elevados de glucosa en sangre debido a defectos en la secreción o acción de la insulina.
        Es un problema de salud pública global por su alta prevalencia y complicaciones a largo plazo.
      </p>

      <p className="title-section">🧬 Fisiopatología</p>
      <p className="text-body">
        En condiciones normales, la insulina permite el ingreso de glucosa a las células.
        En la diabetes existe déficit absoluto o resistencia a su acción, produciendo hiperglucemia
        sostenida que genera daño vascular, nervioso, renal y cardiovascular.
      </p>

      <p className="title-section">📌 Tipos de Diabetes</p>

      <ul className="text-body">
        <li>
          <strong>Diabetes tipo 1:</strong> enfermedad autoinmune con destrucción de células beta,
          aparece en edades tempranas y requiere insulina de por vida.
        </li>
        <li>
          <strong>Diabetes tipo 2:</strong> asociada a
          <Link to="/ecnt/obesidad"> obesidad</Link>, sedentarismo y genética; se caracteriza por
          resistencia a la insulina.
        </li>
        <li>
          <strong>Diabetes gestacional:</strong> aparece durante el embarazo y aumenta el riesgo
          de diabetes tipo 2 futura.
        </li>
      </ul>

      <p className="title-section">🔍 Síntomas</p>
      <ul className="text-body">
        <li>Polidipsia (sed excesiva).</li>
        <li>Poliuria (orina frecuente).</li>
        <li>Polifagia (hambre excesiva).</li>
        <li>Fatiga.</li>
        <li>Visión borrosa.</li>
        <li>Hormigueo en extremidades.</li>
      </ul>

      <p className="title-section">🧪 Diagnóstico</p>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Prueba</th>
            <th>Valores normales</th>
            <th>Diabetes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Glucosa en ayunas</td>
            <td>&lt; 100 mg/dL</td>
            <td>≥ 126 mg/dL</td>
          </tr>
          <tr>
            <td>HbA1c</td>
            <td>&lt; 5.7%</td>
            <td>≥ 6.5%</td>
          </tr>
          <tr>
            <td>Glucosa aleatoria</td>
            <td>&lt; 140 mg/dL</td>
            <td>≥ 200 mg/dL</td>
          </tr>
        </tbody>
      </table>

      <p className="title-section">💊 Tratamiento médico</p>
      <ul className="text-body">
        <li>Insulina.</li>
        <li>Antidiabéticos orales.</li>
        <li>Monitoreo glucémico.</li>
        <li>Modificación del estilo de vida.</li>
      </ul>

      <p className="title-section">🧘 Tratamiento no farmacológico</p>
      <ul className="text-body">
        <li>Dieta balanceada.</li>
        <li>Ejercicio físico regular.</li>
        <li>Control del estrés.</li>
        <li>Educación diabetológica.</li>
      </ul>

      <p className="title-section">🧨 Complicaciones</p>
      <ul className="text-body">
        <li>Retinopatía.</li>
        <li>Nefropatía.</li>
        <li>Neuropatía.</li>
        <li>Enfermedad cardiovascular.</li>
      </ul>

      <p className="title-section">📌 Conclusión</p>
      <p className="text-body">
        La <strong>Diabetes Mellitus</strong> requiere un abordaje integral y continuo.
        El diagnóstico precoz, tratamiento individualizado y educación del paciente
        permiten prevenir complicaciones y mejorar la calidad de vida.
      </p>

    </div>
  );
}

export default Diabetes;
