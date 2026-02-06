import React, { useEffect } from 'react';
import './Cataratas.css';
import { Link } from 'react-router-dom';

function Cataratas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">
      <p className="title-main">Cataratas</p>

      <p className="title-section">Introducción 📌</p>
      <p className="text-body">
        Las <strong>Cataratas</strong> son una opacificación progresiva del cristalino del ojo que afecta la visión.
        Es la causa más frecuente de ceguera reversible a nivel mundial, especialmente en adultos mayores.
      </p>

      <p className="title-section">Fisiopatología 🧬</p>
      <ul className="text-body">
        <li>Desnaturalización de proteínas del cristalino.</li>
        <li>Daño oxidativo y acumulación de pigmentos.</li>
        <li>Alteración del metabolismo celular.</li>
        <li>Alteraciones genéticas en cataratas congénitas.</li>
      </ul>

      <p className="title-section">Clasificación 🔍</p>
      <p className="text-body">Según su localización:</p>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Tipo de catarata</th>
            <th>Ubicación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nuclear</td>
            <td>Centro del cristalino</td>
          </tr>
          <tr>
            <td>Cortical</td>
            <td>Periferia del cristalino</td>
          </tr>
          <tr>
            <td>Subcapsular posterior</td>
            <td>Debajo de la cápsula posterior</td>
          </tr>
        </tbody>
      </table>

      <p className="text-body">Según origen:</p>
      <ul className="text-body">
        <li>Senil</li>
        <li>Congénita</li>
        <li>Secundaria</li>
        <li>Traumática</li>
      </ul>

      <p className="title-section">Causas y Factores de Riesgo ⚠️</p>
      <ul className="text-body">
        <li>Edad avanzada</li>
        <li><Link to="/ecnt/diabetes">Diabetes Mellitus</Link></li>
        <li>Exposición a rayos UV</li>
        <li>Tabaquismo</li>
        <li>Uso crónico de corticoides</li>
      </ul>

      <p className="title-section">Diagnóstico 🧪</p>
      <ul className="text-body">
        <li>Evaluación oftalmológica completa</li>
        <li>Lámpara de hendidura</li>
        <li>Disminución de la agudeza visual</li>
      </ul>

      <p className="title-section">Tratamiento 💊</p>
      <p className="text-body">
        El tratamiento definitivo es quirúrgico mediante facoemulsificación con implante de lente intraocular.
      </p>

      <p className="title-section">Conclusión ✅</p>
      <p className="text-body">
        Las cataratas son una causa prevenible y tratable de pérdida visual.
        La cirugía permite recuperar la visión y mejorar significativamente la calidad de vida.
      </p>
    </div>
  );
}

export default Cataratas;
