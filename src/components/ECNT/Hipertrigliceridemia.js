

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hipertrigliceridemia.css';

function Hipertrigliceridemia() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail296">

      <p className="fxh-title">Hipertrigliceridemia</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>hipertrigliceridemia</strong> es una condición caracterizada por
        niveles elevados de <Link to="/examenes/trigliceridos">triglicéridos</Link>
        en la sangre. Este aumento puede contribuir al desarrollo de enfermedades
        cardiovasculares y metabólicas como
        <Link to="/ecnt/aterosclerosis"> aterosclerosis</Link>,
        <Link to="/ecnt/iam"> infarto agudo al miocardio</Link> y
        <Link to="/ecnt/acv"> accidente cerebrovascular</Link>.
      </p>

      <p className="fxh-subtitle">¿Qué es la hipertrigliceridemia? 🧬</p>

      <ul className="fxh-list">
        <li>Trastorno caracterizado por niveles elevados de triglicéridos en sangre.</li>
        <li>Forma parte de las alteraciones del metabolismo de los lípidos.</li>
        <li>Puede estar asociada al síndrome metabólico.</li>
        <li>Se detecta mediante análisis de laboratorio.</li>
      </ul>

      <p className="fxh-subtitle">Clasificación según niveles</p>

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

      <p className="fxh-subtitle">Causas comunes ⚠️</p>

      <ul className="fxh-list">
        <li>Dieta rica en azúcares y grasas.</li>
        <li>Consumo excesivo de alcohol.</li>
        <li>Obesidad.</li>
        <li>Sedentarismo.</li>
        <li>Diabetes mal controlada.</li>
      </ul>

      <p className="fxh-subtitle">Factores de riesgo</p>

      <ul className="fxh-list">
        <li>Antecedentes familiares.</li>
        <li>Sobrepeso u obesidad.</li>
        <li>Hipotiroidismo.</li>
        <li>Síndrome metabólico.</li>
        <li>Uso de ciertos medicamentos.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas</p>

      <p className="fxh-text">
        En muchos casos la hipertrigliceridemia no produce síntomas evidentes.
        Sin embargo, niveles muy elevados pueden aumentar el riesgo de
        complicaciones cardiovasculares y metabólicas. En situaciones severas
        puede asociarse a pancreatitis aguda.
      </p>

      <p className="fxh-subtitle">Diagnóstico</p>

      <ul className="fxh-list">
        <li>Medición de <Link to="/examenes/trigliceridos">triglicéridos</Link>.</li>
        <li>Evaluación del <Link to="/examenes/colesterol-total">colesterol total</Link>.</li>
        <li>Análisis del <Link to="/examenes/ldl">colesterol LDL</Link>.</li>
        <li>Evaluación del <Link to="/examenes/hdl">colesterol HDL</Link>.</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento</p>

      <ul className="fxh-list">
        <li>Adoptar una dieta equilibrada.</li>
        <li>Reducir el consumo de azúcares simples.</li>
        <li>Realizar actividad física regular.</li>
        <li>Control del peso corporal.</li>
        <li>Uso de medicamentos bajo supervisión médica.</li>
      </ul>

      <p className="fxh-subtitle">Prevención</p>

      <ul className="fxh-list">
        <li>Mantener una alimentación saludable.</li>
        <li>Limitar el consumo de alcohol.</li>
        <li>Realizar ejercicio regularmente.</li>
        <li>Controlar enfermedades metabólicas.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        La <strong>hipertrigliceridemia</strong> es un trastorno frecuente del
        metabolismo de las grasas que puede aumentar el riesgo cardiovascular.
        La detección temprana mediante análisis de laboratorio y la adopción
        de hábitos saludables son claves para prevenir complicaciones.
      </p>

    </div>

  );

}

export default Hipertrigliceridemia;