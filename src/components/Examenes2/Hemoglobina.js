



import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hemoglobina.css';

function Hemoglobina() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail291">

      <p className="fxh-title">Examen de Hemoglobina</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        El examen de <strong>hemoglobina</strong> es una prueba de laboratorio que
        mide la cantidad de hemoglobina presente en la sangre. La hemoglobina es
        una proteína contenida en los glóbulos rojos encargada de transportar
        oxígeno desde los pulmones hacia los tejidos del cuerpo.
        Este examen forma parte del <Link to="/examenes2/hemograma">hemograma </Link>
        y es fundamental para el diagnóstico de diversas condiciones como
        <Link to="/ecnt/anemia"> anemia</Link>, policitemia y trastornos hematológicos.
      </p>

      <p className="fxh-subtitle">🧬 Función de la hemoglobina</p>

      <ul className="fxh-list">
        <li>Transportar oxígeno desde los pulmones hacia los tejidos.</li>
        <li>Transportar dióxido de carbono desde los tejidos hacia los pulmones.</li>
        <li>Mantener el equilibrio ácido-base de la sangre.</li>
        <li>Participar en el metabolismo celular.</li>
      </ul>

      <p className="fxh-subtitle">Valores de referencia</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Grupo</th>
              <th>Valores normales</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Hombres adultos</td>
              <td>13 – 17 g/dL</td>
            </tr>

            <tr>
              <td>Mujeres adultas</td>
              <td>12 – 15 g/dL</td>
            </tr>

            <tr>
              <td>Niños</td>
              <td>11 – 16 g/dL</td>
            </tr>

            <tr>
              <td>Embarazo</td>
              <td>≥ 11 g/dL</td>
            </tr>

          </tbody>

        </table>

      </div>

      <p className="fxh-subtitle">Indicaciones clínicas ⚠️</p>

      <ul className="fxh-list">
        <li>Evaluación de <Link to="/ecnt/anemia">anemia</Link>.</li>
        <li>Estudio de fatiga, debilidad o <Link to="/ecnt/sintomas/disnea">disnea</Link>.</li>
        <li>Control de enfermedades hematológicas.</li>
        <li>Seguimiento de sangrados o pérdidas de sangre.</li>
        <li>Evaluación general en chequeos médicos.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas asociados a hemoglobina baja 🔍</p>

      <ul className="fxh-list">
        <li>Fatiga o debilidad.</li>
        <li>Mareos.</li>
        <li>Palidez.</li>
        <li>Falta de aire.</li>
        <li>Taquicardia.</li>
      </ul>

      <p className="fxh-subtitle">Interpretación de resultados</p>

      <div className="fxh-flex">

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Hemoglobina baja</p>

          <ul className="fxh-list">
            <li><Link to="/ecnt/anemia">Anemia</Link>.</li>
            <li>Deficiencia de hierro.</li>
            <li>Hemorragias.</li>
            <li>Enfermedad renal crónica.</li>
            <li>Enfermedades crónicas.</li>
          </ul>

        </div>

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Hemoglobina alta</p>

          <ul className="fxh-list">
            <li>Policitemia.</li>
            <li>Deshidratación.</li>
            <li>Enfermedad pulmonar crónica.</li>
            <li>Vivir en grandes altitudes.</li>
          </ul>

        </div>

      </div>

      <p className="fxh-subtitle">Preparación para el examen</p>

      <ul className="fxh-list">
        <li>Generalmente no requiere ayuno.</li>
        <li>Evitar ejercicio intenso antes del examen.</li>
        <li>Informar medicamentos al médico.</li>
      </ul>

      <p className="fxh-subtitle">Procedimiento</p>

      <ul className="fxh-list">
        <li>Extracción de una muestra de sangre venosa.</li>
        <li>Análisis en laboratorio clínico.</li>
        <li>Resultados generalmente disponibles el mismo día.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        El examen de <strong>hemoglobina</strong> es una prueba fundamental para
        evaluar el estado de los glóbulos rojos y la capacidad de transporte de
        oxígeno en la sangre. Su medición permite detectar condiciones como
        <Link to="/ecnt/anemia"> anemia</Link>, hemorragias o trastornos
        hematológicos, facilitando el diagnóstico temprano y el tratamiento adecuado.
      </p>

    </div>

  );

}

export default Hemoglobina;