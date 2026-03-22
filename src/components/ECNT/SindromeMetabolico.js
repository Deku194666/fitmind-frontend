

import React, { useEffect } from 'react';
import './SindromeMetabolico.css';
import { Link } from 'react-router-dom';


function SindromeMetabolico() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail254">

      <p className="fxh-title">⚠️ Síndrome Metabólico</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>síndrome metabólico</strong> es un conjunto de condiciones
        médicas que ocurren al mismo tiempo y que aumentan el riesgo de
        desarrollar enfermedades cardiovasculares, <Link to="/ecnt/diabetes">diabetes</Link> tipo 2
        y <Link to="/ecnt/acv">accidentes cerebrovasculares</Link>.
      </p>

      <p className="fxh-text">
        Este síndrome se caracteriza principalmente por la presencia de
        <strong>presión arterial elevada, niveles altos de azúcar en la sangre,
        exceso de grasa abdominal y alteraciones en los niveles de colesterol
        o triglicéridos</strong>. Cuando estas condiciones se presentan juntas,
        el riesgo para la salud aumenta considerablemente.
      </p>


      <p className="fxh-subtitle">⚠️ Causas</p>

      <ul className="fxh-list">

        <li> - Resistencia a la insulina.</li>
        <li> - <Link to="/ecnt/obesidad">Obesidad</Link>, especialmente abdominal.</li>
        <li> - Sedentarismo.</li>
        <li> - Dieta rica en grasas y azúcares.</li>
        <li> - Factores genéticos.</li>

      </ul>


      <p className="fxh-subtitle">📋 Síntomas</p>

      <ul className="fxh-list">

        <li> - Aumento de grasa abdominal.</li>
        <li> - Presión arterial elevada.</li>
        <li> - Niveles altos de glucosa en sangre.</li>
        <li> - Fatiga.</li>
        <li> - Dificultad para controlar el peso.</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Factores de riesgo</p>

      <ul className="fxh-list">

        <li> - Sobrepeso u <Link to="/ecnt/obesidad">Obesidad</Link>.</li>
        <li> - Estilo de vida sedentario.</li>
        <li> - Antecedentes familiares de diabetes.</li>
        <li> - Edad avanzada.</li>
        <li> - <Link to="/ecnt/resistenciainsulina">Resistencia a la insulina</Link>.    </li>

      </ul>


      <p className="fxh-subtitle">🧪 Diagnóstico</p>

      <ul className="fxh-list">

        <li> - Medición de circunferencia abdominal.</li>
        <li> - Control de presión arterial.</li>
        <li> - Análisis de glucosa en sangre.</li>
        <li> - Medición de colesterol y triglicéridos.</li>

      </ul>


      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Tipo</th>
              <th>Tratamiento</th>
              <th>Objetivo</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Cambios en el estilo de vida</td>
              <td>Dieta saludable y ejercicio regular</td>
              <td>Reducir peso y mejorar metabolismo</td>
            </tr>

            <tr>
              <td>Control de presión</td>
              <td>Medicamentos antihipertensivos</td>
              <td>Regular presión arterial</td>
            </tr>

            <tr>
              <td>Control de glucosa</td>
              <td>Medicamentos o insulina</td>
              <td>Regular niveles de azúcar</td>
            </tr>

            <tr>
              <td>Control de lípidos</td>
              <td>Estatinas u otros fármacos</td>
              <td>Reducir colesterol y triglicéridos</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Prevención</p>

      <ul className="fxh-list">

        <li> - Mantener un peso corporal saludable.</li>
        <li> - Realizar actividad física regularmente.</li>
        <li> - Seguir una alimentación equilibrada.</li>
        <li> - Evitar el consumo excesivo de azúcares y grasas.</li>
        <li> - Realizar controles médicos periódicos.</li>

      </ul>

    </div>

  );

}

export default SindromeMetabolico;