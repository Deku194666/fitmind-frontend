

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LDL.css';

function LDL() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail292">

      <p className="fxh-title">Colesterol LDL</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        El <strong>colesterol LDL</strong> (lipoproteína de baja densidad) es conocido
        comúnmente como <strong>"colesterol malo"</strong>, ya que niveles elevados
        pueden favorecer la acumulación de placas de grasa en las arterias,
        proceso conocido como <Link to="/ecnt/aterosclerosis">aterosclerosis</Link>.
        Esto aumenta el riesgo de enfermedades cardiovasculares como
        <Link to="/ecnt/iam"> infarto agudo al miocardio</Link> y
        <Link to="/ecnt/acv"> accidente cerebrovascular</Link>.
      </p>

      <p className="fxh-subtitle">🧬 ¿Qué es el colesterol LDL?</p>

      <ul className="fxh-list">
        <li>Lipoproteína encargada de transportar colesterol desde el hígado hacia los tejidos.</li>
        <li>Participa en la formación de membranas celulares y hormonas.</li>
        <li>Niveles elevados pueden depositarse en las paredes arteriales.</li>
        <li>Es uno de los principales indicadores de riesgo cardiovascular.</li>
      </ul>

      <p className="fxh-subtitle">Valores de referencia</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Nivel</th>
              <th>LDL (mg/dL)</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Óptimo</td>
              <td>Menos de 100</td>
            </tr>

            <tr>
              <td>Casi óptimo</td>
              <td>100 – 129</td>
            </tr>

            <tr>
              <td>Límite alto</td>
              <td>130 – 159</td>
            </tr>

            <tr>
              <td>Alto</td>
              <td>160 – 189</td>
            </tr>

            <tr>
              <td>Muy alto</td>
              <td>190 o más</td>
            </tr>

          </tbody>

        </table>

      </div>

      <p className="fxh-subtitle">Indicaciones clínicas ⚠️</p>

      <ul className="fxh-list">
        <li>Evaluación del riesgo cardiovascular.</li>
        <li>Control de <Link to="/ecnt/dislipidemia">dislipidemia</Link>.</li>
        <li>Seguimiento en pacientes con <Link to="/ecnt/diabetes">diabetes</Link>.</li>
        <li>Monitoreo en <Link to="/ecnt/hipertension">hipertensión</Link>.</li>
        <li>Control en pacientes con enfermedad cardiovascular.</li>
      </ul>

      <p className="fxh-subtitle">Factores que aumentan el LDL 🔍</p>

      <ul className="fxh-list">
        <li>Dieta rica en grasas saturadas y trans.</li>
        <li>Sedentarismo.</li>
        <li>Obesidad.</li>
        <li>Tabaquismo.</li>
        <li>Factores genéticos.</li>
      </ul>

      <p className="fxh-subtitle">Interpretación de resultados</p>

      <div className="fxh-flex">

        <div className="fxh-half">

          <p className="fxh-subsubtitle">LDL elevado</p>

          <ul className="fxh-list">
            <li>Mayor riesgo de <Link to="/ecnt/aterosclerosis">aterosclerosis</Link>.</li>
            <li>Incremento del riesgo de <Link to="/ecnt/iam">infarto</Link>.</li>
            <li>Mayor probabilidad de <Link to="/ecnt/acv">ACV</Link>.</li>
            <li>Asociado a <Link to="/ecnt/dislipidemia">dislipidemia</Link>.</li>
          </ul>

        </div>

        <div className="fxh-half">

          <p className="fxh-subsubtitle">LDL bajo</p>

          <ul className="fxh-list">
            <li>Dieta baja en grasas.</li>
            <li>Tratamiento con estatinas.</li>
            <li>Algunas enfermedades hepáticas.</li>
            <li>Hipertiroidismo.</li>
          </ul>

        </div>

      </div>

      <p className="fxh-subtitle">Preparación para el examen</p>

      <ul className="fxh-list">
        <li>Ayuno de 8 a 12 horas antes del examen.</li>
        <li>Evitar alcohol antes del examen.</li>
        <li>No realizar ejercicio intenso previo a la prueba.</li>
        <li>Informar medicamentos al médico.</li>
      </ul>

      <p className="fxh-subtitle">Procedimiento</p>

      <ul className="fxh-list">
        <li>Extracción de sangre venosa.</li>
        <li>Análisis en laboratorio clínico.</li>
        <li>Generalmente se mide junto con colesterol total, HDL y triglicéridos.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        El colesterol <strong>LDL</strong> es uno de los principales marcadores
        utilizados para evaluar el riesgo de enfermedades cardiovasculares.
        Mantener niveles adecuados mediante una dieta saludable, ejercicio
        regular y control médico puede reducir significativamente el riesgo
        de <Link to="/ecnt/iam">infarto</Link> y
        <Link to="/ecnt/acv">accidente cerebrovascular</Link>.
      </p>

    </div>

  );

}

export default LDL;