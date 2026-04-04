

import React, { useEffect } from 'react';
import './Levodopa.css';
import { Link } from 'react-router-dom';


function Levodopa() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail278">

      <p className="fxh-title">💊 Levodopa</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>levodopa</strong> es un medicamento utilizado
        principalmente para el tratamiento de la
        <strong> enfermedad de Parkinson</strong>.
      </p>

      <p className="fxh-text">
        Este medicamento actúa aumentando los niveles de
        <strong>dopamina</strong> en el cerebro, un neurotransmisor
        fundamental para el control del movimiento.
      </p>


      <p className="fxh-subtitle">🩺 ¿Para qué se utiliza?</p>

      <ul className="fxh-list">

        <li>Enfermedad de Parkinson</li>
        <li>Trastornos del movimiento</li>
        <li>Rigidez muscular</li>
        <li>Temblor asociado al Parkinson</li>

      </ul>


      <p className="fxh-subtitle">⚙️ ¿Cómo actúa?</p>

      <p className="fxh-text">
        La levodopa se convierte en <strong>dopamina</strong>
        dentro del cerebro. La dopamina ayuda a mejorar
        la comunicación entre las células nerviosas que
        controlan los movimientos del cuerpo.
      </p>


      <p className="fxh-subtitle">📋 Formas de administración</p>

      <ul className="fxh-list">

        <li>Tabletas</li>
        <li>Tabletas de liberación prolongada</li>
        <li>Combinación con carbidopa</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos secundarios</p>

      <ul className="fxh-list">

        <li>Náuseas</li>
        <li>Mareos</li>
        <li>Movimientos involuntarios</li>
        <li>Somnolencia</li>
        <li>Hipotensión</li>

      </ul>


      <p className="fxh-subtitle">💊 Dosis y uso</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Presentación</th>
              <th>Uso común</th>
              <th>Objetivo</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Tabletas</td>
              <td>Según indicación médica</td>
              <td>Controlar síntomas del Parkinson</td>
            </tr>

            <tr>
              <td>Liberación prolongada</td>
              <td>Administración programada</td>
              <td>Efecto prolongado</td>
            </tr>

            <tr>
              <td>Levodopa + Carbidopa</td>
              <td>Tratamiento combinado</td>
              <td>Mejorar eficacia del medicamento</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Recomendaciones</p>

      <ul className="fxh-list">

        <li>Tomar el medicamento según indicación médica</li>
        <li>No suspender el tratamiento abruptamente</li>
        <li>Realizar controles médicos periódicos</li>
        <li>Informar al médico sobre efectos secundarios</li>
        <li>Seguir estrictamente la dosis indicada</li>

      </ul>

    </div>

  );

}

export default Levodopa;
