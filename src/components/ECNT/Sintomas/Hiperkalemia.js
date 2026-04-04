

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hiperkalemia.css';

function Hiperkalemia() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail316">

      <p className="fxh-title">Hiperkalemia</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>hiperkalemia</strong> es el aumento del potasio en sangre por encima de los valores normales.
        Es una alteración potencialmente grave porque puede afectar la función cardíaca y provocar arritmias.
      </p>

      <p className="fxh-subtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li> - Aumento del potasio extracelular.</li>
        <li> - Alteración del potencial de membrana celular.</li>
        <li> - Disminución de la excitabilidad cardíaca.</li>
        <li> - Riesgo de arritmias malignas.</li>
      </ul>

      <p className="fxh-subtitle">Clasificación</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Nivel</th>
              <th>Potasio sérico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Leve</td>
              <td>5.5 - 6.0 mEq/L</td>
            </tr>
            <tr>
              <td>Moderada</td>
              <td>6.1 - 6.9 mEq/L</td>
            </tr>
            <tr>
              <td>Severa</td>
              <td>≥ 7.0 mEq/L</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Causas ⚠️</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/insuficienciarenal">Insuficiencia renal</Link>.</li>
        <li> - Uso de medicamentos (<Link to="/farmacos/iecas">IECAs</Link>, <Link to="/farmacos/araii">ARA II</Link>).</li>
        <li> - <Link to="/ecnt/sintomas/acidosismetabolica">Acidosis metabólica</Link>.</li>
        <li> - Destrucción celular (rabdomiólisis).</li>
        <li> - Exceso de ingesta de potasio.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas 🔍</p>
      <ul className="fxh-list">
        <li> - Debilidad muscular.</li>
        <li> - <Link to="/ecnt/sintomas/fatiga">Fatiga</Link>.</li>  
        <li> -  <Link to="/ecnt/sintomas/palpitaciones">Palpitaciones</Link>.</li>
        <li> - Puede ser asintomática.</li>
      </ul>

      <p className="fxh-subtitle">🚨 Signos de alarma</p>
      <ul className="fxh-list">
        <li> - Alteraciones del ritmo cardíaco.</li>
        <li> - <Link to="/ecnt/sintomas/sincope">Síncope</Link>.</li>
        <li> - Parálisis muscular.</li>
        <li> - Cambios en el <Link to="/examenes/ekg">EKG</Link>.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🧪</p>
      <ul className="fxh-list">
        <li> - Medición de potasio en sangre.</li>
        <li> - <Link to="/examenes/ekg">Electrocardiograma</Link>.</li>
        <li> - Evaluación de función renal.</li>
        <li> - Gasometría.</li>
      </ul>

      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-flex">

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Manejo agudo</p>
          <ul className="fxh-list">
            <li> - Gluconato de calcio.</li>
            <li> - Insulina con glucosa.</li>
            <li> - Beta-agonistas.</li>
            <li> - Diuréticos o diálisis.</li>
          </ul>
        </div>

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Manejo crónico</p>
          <ul className="fxh-list">
            <li> - Restricción de potasio en dieta.</li>
            <li> - Ajuste de medicamentos.</li>
            <li> - Control de enfermedad renal.</li>
          </ul>
        </div>

      </div>

      <p className="fxh-subtitle">Complicaciones</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/arritmias">Arritmias</Link> graves.</li>
        <li> - Paro cardíaco.</li>
        <li> - Muerte.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        La hiperkalemia es una alteración electrolítica grave que requiere diagnóstico
        y tratamiento inmediato para prevenir complicaciones cardíacas potencialmente fatales.
      </p>

    </div>
  );
}

export default Hiperkalemia;