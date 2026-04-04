

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hemoptisis.css';

function Hemoptisis() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail301">

      <p className="fxh-title">Hemoptisis</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>hemoptisis</strong> es la expulsión de sangre proveniente de
        las vías respiratorias al toser. Este síntoma puede variar desde pequeñas
        cantidades de sangre mezcladas con el esputo hasta sangrados más
        abundantes. Puede estar relacionado con diversas enfermedades del
        sistema respiratorio como infecciones pulmonares, bronquitis o
        <Link to="/enfermedades/neumonia">neumonía</Link>.
      </p>

      <p className="fxh-subtitle">¿Qué es la hemoptisis? 🫁</p>

      <ul className="fxh-list">
        <li>Expulsión de sangre al toser.</li>
        <li>La sangre proviene de los pulmones o de los bronquios.</li>
        <li>Puede aparecer de forma súbita o progresiva.</li>
        <li>Es un signo que requiere evaluación médica.</li>
      </ul>

      <p className="fxh-subtitle">Clasificación</p>

      <div className="fxh-flex">

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Hemoptisis leve</p>

          <ul className="fxh-list">
            <li>Pequeñas cantidades de sangre.</li>
            <li>Generalmente mezclada con el esputo.</li>
            <li>Frecuente en infecciones respiratorias.</li>
          </ul>

        </div>

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Hemoptisis masiva</p>

          <ul className="fxh-list">
            <li>Sangrado abundante.</li>
            <li>Puede comprometer la respiración.</li>
            <li>Requiere atención médica urgente.</li>
          </ul>

        </div>

      </div>

      <p className="fxh-subtitle">Causas comunes ⚠️</p>

      <ul className="fxh-list">
        <li>Infecciones respiratorias.</li>
        <li><Link to="/enfermedades/bronquitis">Bronquitis</Link>.</li>
        <li><Link to="/enfermedades/neumonia">Neumonía</Link>.</li>
        <li>Tuberculosis.</li>
        <li>Traumatismos en las vías respiratorias.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas asociados</p>

      <ul className="fxh-list">
        <li>Tos persistente.</li>
        <li>Dificultad para respirar.</li>
        <li>Dolor en el pecho.</li>
        <li>Fiebre en caso de infección.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico</p>

      <ul className="fxh-list">
        <li>Evaluación clínica del paciente.</li>
        <li>Radiografía de tórax.</li>
        <li>Tomografía computarizada.</li>
        <li>Análisis de esputo.</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento</p>

      <ul className="fxh-list">
        <li>Tratamiento de la causa subyacente.</li>
        <li>Medicamentos antibióticos si hay infección.</li>
        <li>Control médico especializado.</li>
        <li>Hospitalización en casos graves.</li>
      </ul>

      <p className="fxh-subtitle">Cuándo buscar atención médica</p>

      <ul className="fxh-list">
        <li>Si aparece sangre al toser.</li>
        <li>Si el sangrado es abundante.</li>
        <li>Si se acompaña de dificultad respiratoria.</li>
        <li>Si existe dolor torácico o fiebre.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        La <strong>hemoptisis</strong> es un síntoma que puede indicar diversas
        enfermedades del sistema respiratorio. Aunque en algunos casos puede
        ser leve, siempre debe ser evaluada por un profesional de salud para
        determinar su causa y recibir el tratamiento adecuado.
      </p>

    </div>

  );

}

export default Hemoptisis;