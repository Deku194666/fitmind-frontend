

import React, { useEffect } from 'react';
import './Pregabalina.css';

function Pregabalina() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail260">

      <p className="fxh-title">💊 Pregabalina</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>pregabalina</strong> es un medicamento utilizado para
        tratar principalmente el <strong>dolor neuropático, la epilepsia
        y algunos trastornos de ansiedad</strong>. Pertenece al grupo de
        los <strong>anticonvulsivos</strong> y actúa sobre el sistema
        nervioso central.
      </p>

      <p className="fxh-text">
        Este medicamento ayuda a reducir la actividad anormal de las
        neuronas, lo que permite disminuir la sensación de dolor de
        origen nervioso y controlar ciertos tipos de convulsiones.
      </p>


      <p className="fxh-subtitle">🧪 Usos médicos</p>

      <ul className="fxh-list">

        <li>Dolor neuropático</li>
        <li>Epilepsia (como tratamiento complementario)</li>
        <li>Fibromialgia</li>
        <li>Trastorno de ansiedad generalizada</li>
        <li>Dolor asociado a lesiones nerviosas</li>

      </ul>


      <p className="fxh-subtitle">⚙️ Mecanismo de acción</p>

      <p className="fxh-text">
        La pregabalina actúa uniéndose a ciertas subunidades de los
        <strong>canales de calcio</strong> en las neuronas del sistema
        nervioso central. Esto reduce la liberación de neurotransmisores
        relacionados con el dolor y la excitación neuronal, ayudando
        a disminuir los síntomas neurológicos.
      </p>


      <p className="fxh-subtitle">📋 Dosis comunes</p>

      <ul className="fxh-list">

        <li>Dosis inicial habitual: 75 mg dos veces al día</li>
        <li>Dosis ajustada según indicación médica</li>
        <li>Dosis diaria habitual: entre 150 mg y 600 mg</li>
        <li>Se administra en 2 o 3 tomas diarias</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos secundarios</p>

      <ul className="fxh-list">

        <li>Mareos</li>
        <li>Somnolencia</li>
        <li>Aumento de peso</li>
        <li>Visión borrosa</li>
        <li>Hinchazón en manos o pies</li>

      </ul>


      <p className="fxh-subtitle">💊 Presentaciones</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Forma</th>
              <th>Dosis común</th>
              <th>Uso</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Cápsulas</td>
              <td>25 mg / 75 mg</td>
              <td>Dosis inicial</td>
            </tr>

            <tr>
              <td>Cápsulas</td>
              <td>150 mg</td>
              <td>Dolor neuropático</td>
            </tr>

            <tr>
              <td>Cápsulas</td>
              <td>300 mg</td>
              <td>Tratamiento avanzado</td>
            </tr>

            <tr>
              <td>Solución oral</td>
              <td>Dosis ajustada</td>
              <td>Uso pediátrico o dificultad para tragar</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Precauciones</p>

      <ul className="fxh-list">

        <li>No suspender el medicamento de forma abrupta</li>
        <li>Seguir siempre la dosis indicada por el médico</li>
        <li>Puede causar somnolencia o mareos</li>
        <li>Evitar conducir si produce efectos sedantes</li>
        <li>Consultar al médico durante embarazo o lactancia</li>

      </ul>

    </div>

  );

}

export default Pregabalina;