import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Obesidad.css';

function Obesidad() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">

      <p className="title-main">Obesidad</p>

      <p className="title-section">Introducción 📌</p>
      <p className="text-body">
        La <strong>Obesidad</strong> es una enfermedad crónica caracterizada por un exceso de grasa corporal que puede afectar negativamente la salud.
        Se define comúnmente mediante el índice de masa corporal (IMC), siendo obesidad un IMC ≥ 30 kg/m². Es un factor de riesgo importante para múltiples
        enfermedades no transmisibles como diabetes tipo 2, hipertensión, dislipidemia, enfermedad cardiovascular y ciertos tipos de cáncer.
      </p>

      <p className="title-section">Fisiopatología 🧬</p>
      <ul className="text-body">
        <li> - Exceso de ingesta calórica y sedentarismo → acumulación de grasa corporal.</li>
        <li> - Disfunción hipotalámica que altera la regulación del apetito.</li>
        <li> - Alteraciones hormonales: resistencia a la insulina, leptina elevada con resistencia.</li>
        <li> - Inflamación crónica de bajo grado por tejido adiposo visceral.</li>
      </ul>

      <p className="title-section">Clasificación 🔍</p>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Clasificación</th>
            <th>IMC (kg/m²)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sobrepeso</td>
            <td>25 – 29.9</td>
          </tr>
          <tr>
            <td>Obesidad grado I</td>
            <td>30 – 34.9</td>
          </tr>
          <tr>
            <td>Obesidad grado II</td>
            <td>35 – 39.9</td>
          </tr>
          <tr>
            <td>Obesidad grado III (mórbida)</td>
            <td>≥ 40</td>
          </tr>
        </tbody>
      </table>

      <p className="title-section">Causas ⚠️</p>
      <ul className="text-body">
        <li> - Factores genéticos.</li>
        <li> - Dieta hipercalórica, sedentarismo y falta de sueño.</li>
        <li>
           - Factores psicológicos:
          <Link to="/bienestarmental/enfmentales/tag"> Ansiedad</Link>,
          <Link to="/bienestarmental/enfmentales/depresion"> Depresión</Link>.
        </li>
        <li> - Enfermedades endocrinas (hipotiroidismo, Cushing).</li>
        <li> - Uso de corticoides y psicofármacos.</li>
      </ul>

      <p className="title-section">Diagnóstico 🧪</p>
      <ul className="text-body">
        <li> - IMC.</li>
        <li> - Circunferencia abdominal.</li>
        <li>
          - Evaluación de comorbilidades:
          <Link to="/examenes2/glicemia"> Glicemia</Link>,
          <Link to="/examenes2/perfillipidico"> Perfil lipídico</Link>.
        </li>
        <li> - Historia clínica y evaluación nutricional.</li>
      </ul>

      <p className="title-section">Tratamiento 💊</p>
      <p className="text-body">
        El objetivo es reducir peso, mejorar la salud metabólica y prevenir complicaciones.
      </p>

      <ul className="text-body">
        <li> - Orlistat.</li>
        <li> - Liraglutida (GLP-1).</li>
        <li> - Bupropión / Naltrexona.</li>
      </ul>

      <p className="title-section">Tratamiento no farmacológico 🥦</p>
      <ul className="text-body">
        <li> - Dieta balanceada.</li>
        <li> - Ejercicio físico regular.</li>
        <li> - Apoyo psicológico y educación nutricional.</li>
        <li> - Modificación de hábitos.</li>
      </ul>

      <p className="title-section">Complicaciones 🧨</p>
      <ul className="text-body">
        <li> - <Link to="/ecnt/diabetes">Diabetes Mellitus tipo II</Link>.</li>
        <li> - <Link to="/ecnt/hipertension">Hipertensión arterial</Link>.</li>
        <li> - <Link to="/ecnt/acv">Accidente cerebrovascular</Link>.</li>
        <li> - <Link to="/ecnt/apneadelsueno"> Apnea del Sueño</Link>.</li>
        <li> - <Link to="/ecnt/artrosis">Artrosis</Link>.</li>
      </ul>

      <p className="title-section">Conclusión ✅</p>
      <p className="text-body">
        La <strong>Obesidad</strong> es una enfermedad crónica, multifactorial y prevenible que requiere un enfoque integral y sostenido.
        La intervención temprana y el acompañamiento profesional son claves para mejorar la calidad de vida.
      </p>

    </div>
  );
}

export default Obesidad;
