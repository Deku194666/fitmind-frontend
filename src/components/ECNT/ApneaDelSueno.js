

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ApneaDelSueno.css';

function ApneaDelSueno() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail303">

      <p className="fxh-title">Apnea del Sueño</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>apnea del sueño</strong> es un trastorno del sueño caracterizado
        por pausas repetidas en la respiración durante el descanso nocturno.
        Estas pausas pueden durar desde unos segundos hasta más tiempo y
        pueden ocurrir muchas veces durante la noche, afectando la calidad
        del sueño y la oxigenación del cuerpo.
      </p>

      <p className="fxh-subtitle">¿Qué es la apnea del sueño? 😴</p>

      <ul className="fxh-list">
        <li> - Trastorno respiratorio que ocurre durante el sueño.</li>
        <li> - Se producen pausas en la respiración.</li>
        <li> - Reduce el nivel de oxígeno en la sangre.</li>
        <li> - Puede afectar seriamente la calidad del descanso.</li>
      </ul>

      <p className="fxh-subtitle">Tipos de apnea del sueño</p>

      <div className="fxh-flex">

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Apnea obstructiva del sueño</p>

          <ul className="fxh-list">
            <li> - Es la forma más común.</li>
            <li> - Ocurre cuando los músculos de la garganta se relajan.</li>
            <li> - Provoca bloqueo parcial o total de las vías respiratorias.</li>
          </ul>

        </div>

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Apnea central del sueño</p>

          <ul className="fxh-list">
            <li> - El cerebro no envía señales adecuadas para respirar.</li>
            <li> - No existe una obstrucción física de las vías respiratorias.</li>
            <li> - Es menos frecuente que la apnea obstructiva.</li>
          </ul>

        </div>

      </div>

      <p className="fxh-subtitle">Causas comunes ⚠️</p>

      <ul className="fxh-list">
        <li> - <Link to="/ecnt/obesidad">Obesidad</Link>.</li>
        <li> - Alteraciones anatómicas de la garganta.</li>
        <li> - Consumo de alcohol o sedantes.</li>
        <li> - Envejecimiento.</li>
        <li> - Antecedentes familiares.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas asociados</p>

      <ul className="fxh-list">
        <li> - Ronquidos fuertes.</li>
        <li> - Pausas respiratorias durante el sueño.</li>
        <li> - Somnolencia diurna excesiva.</li>
        <li> - Dolor de cabeza matutino.</li>
        <li> - Dificultad para concentrarse.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico</p>

      <ul className="fxh-list">
        <li> - Evaluación clínica del paciente.</li>
        <li> - Estudio del sueño (polisomnografía).</li>
        <li> - Evaluación de factores de riesgo.</li>
        <li> - Monitoreo de oxígeno durante el sueño.</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento</p>

      <ul className="fxh-list">
        <li> - Cambios en el estilo de vida.</li>
        <li> - Pérdida de peso.</li>
        <li> - Uso de dispositivos CPAP.</li>
        <li> - Cirugía en algunos casos.</li>
      </ul>

      <p className="fxh-subtitle">Complicaciones</p>

      <ul className="fxh-list">
        <li> - <Link to="/ecnt/hipertension">Hipertensión  arterial</Link>. </li>
        <li> - Enfermedades cardiovasculares.</li>
        <li> - Fatiga crónica.</li>
        <li> - Mayor riesgo de accidentes por somnolencia.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        La <strong>apnea del sueño</strong> es un trastorno que puede afectar
        significativamente la salud y la calidad de vida. El diagnóstico
        temprano y el tratamiento adecuado ayudan a prevenir complicaciones
        y mejorar el descanso y el bienestar general.
      </p>

    </div>

  );

}

export default ApneaDelSueno;