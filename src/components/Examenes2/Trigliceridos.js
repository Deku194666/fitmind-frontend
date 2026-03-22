

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Trigliceridos.css';

function Trigliceridos() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail294">

      <p className="fxh-title">Triglicéridos</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        Los <strong>triglicéridos</strong> son un tipo de grasa presente en la sangre
        que el cuerpo utiliza como fuente de energía. Después de comer, el organismo
        convierte las calorías que no se utilizan inmediatamente en triglicéridos,
        los cuales se almacenan en el tejido adiposo. Niveles elevados pueden aumentar
        el riesgo de enfermedades cardiovasculares como
        <Link to="/ecnt/aterosclerosis"> aterosclerosis</Link>,
        <Link to="/ecnt/iam"> infarto agudo al miocardio</Link> y
        <Link to="/ecnt/acv"> accidente cerebrovascular</Link>.
      </p>

      <p className="fxh-subtitle">🧬 ¿Qué son los triglicéridos?</p>

      <ul className="fxh-list">
        <li>Tipo de lípido presente en la sangre.</li>
        <li>Fuente importante de energía para el organismo.</li>
        <li>Se almacenan en el tejido adiposo.</li>
        <li>Su medición forma parte del perfil lipídico.</li>
      </ul>

      <p className="fxh-subtitle">Valores de referencia</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Nivel</th>
              <th>Triglicéridos (mg/dL)</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Normal</td>
              <td>Menos de 150</td>
            </tr>

            <tr>
              <td>Límite alto</td>
              <td>150 – 199</td>
            </tr>

            <tr>
              <td>Alto</td>
              <td>200 – 499</td>
            </tr>

            <tr>
              <td>Muy alto</td>
              <td>500 o más</td>
            </tr>

          </tbody>

        </table>

      </div>

      <p className="fxh-subtitle">Indicaciones clínicas ⚠️</p>

      <ul className="fxh-list">
        <li>Evaluación del riesgo cardiovascular.</li>
        <li>Diagnóstico y seguimiento de <Link to="/ecnt/dislipidemia">dislipidemia</Link>.</li>
        <li>Control en pacientes con <Link to="/ecnt/diabetes">diabetes</Link>.</li>
        <li>Evaluación del síndrome metabólico.</li>
        <li>Parte del perfil lipídico completo.</li>
      </ul>

      <p className="fxh-subtitle">Factores que aumentan los triglicéridos 🔍</p>

      <ul className="fxh-list">
        <li>Dieta rica en azúcares y grasas.</li>
        <li>Obesidad.</li>
        <li>Sedentarismo.</li>
        <li>Consumo excesivo de alcohol.</li>
        <li>Diabetes mal controlada.</li>
      </ul>

      <p className="fxh-subtitle">Interpretación de resultados</p>

      <div className="fxh-flex">

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Triglicéridos elevados</p>

          <ul className="fxh-list">
            <li>Mayor riesgo de <Link to="/ecnt/aterosclerosis">aterosclerosis</Link>.</li>
            <li>Aumento del riesgo de <Link to="/ecnt/iam">infarto</Link>.</li>
            <li>Mayor probabilidad de <Link to="/ecnt/acv">ACV</Link>.</li>
            <li>Asociado al síndrome metabólico.</li>
          </ul>

        </div>

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Triglicéridos bajos</p>

          <ul className="fxh-list">
            <li>Dieta muy baja en grasas.</li>
            <li>Malnutrición.</li>
            <li>Algunas enfermedades metabólicas.</li>
            <li>Hipertiroidismo.</li>
          </ul>

        </div>

      </div>

      <p className="fxh-subtitle">Preparación para el examen</p>

      <ul className="fxh-list">
        <li>Ayuno de 8 a 12 horas antes del examen.</li>
        <li>Evitar alcohol el día previo.</li>
        <li>No realizar ejercicio intenso antes de la prueba.</li>
        <li>Informar medicamentos al médico.</li>
      </ul>

      <p className="fxh-subtitle">Procedimiento</p>

      <ul className="fxh-list">
        <li>Extracción de una muestra de sangre venosa.</li>
        <li>Análisis en laboratorio clínico.</li>
        <li>Generalmente se mide junto con colesterol total, LDL y HDL.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        Los <strong>triglicéridos</strong> son un indicador importante del metabolismo
        de las grasas y del riesgo cardiovascular. Mantener niveles adecuados mediante
        una dieta equilibrada, ejercicio regular y control médico puede ayudar a
        prevenir enfermedades cardiovasculares como
        <Link to="/ecnt/iam"> infarto</Link> y
        <Link to="/ecnt/acv"> accidente cerebrovascular</Link>.
      </p>

    </div>

  );

}

export default Trigliceridos;