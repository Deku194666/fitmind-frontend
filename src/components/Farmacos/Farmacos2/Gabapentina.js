

import React, { useEffect } from 'react';
import './Gabapentina.css';

function Gabapentina() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail259">

      <p className="fxh-title">💊 Gabapentina</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>gabapentina</strong> es un medicamento utilizado
        principalmente para tratar <strong>convulsiones y dolor
        neuropático</strong>. Pertenece a un grupo de medicamentos
        conocidos como <strong>anticonvulsivos</strong> o
        <strong> moduladores del sistema nervioso</strong>.
      </p>

      <p className="fxh-text">
        Este medicamento actúa sobre el sistema nervioso ayudando
        a disminuir la actividad anormal de las neuronas. Se utiliza
        frecuentemente para tratar afecciones como <strong>epilepsia,
        neuralgia posherpética y dolor nervioso</strong>.
      </p>


      <p className="fxh-subtitle">🧪 Usos médicos</p>

      <ul className="fxh-list">

        <li>Epilepsia</li>
        <li>Dolor neuropático</li>
        <li>Neuralgia posherpética</li>
        <li>Dolor asociado a lesiones nerviosas</li>
        <li>Síndrome de piernas inquietas</li>

      </ul>


      <p className="fxh-subtitle">⚙️ Mecanismo de acción</p>

      <p className="fxh-text">
        La gabapentina actúa modulando la actividad de ciertos
        neurotransmisores en el sistema nervioso central.
        Esto ayuda a reducir la excitabilidad de las neuronas,
        lo que contribuye a disminuir las convulsiones y
        el dolor de origen nervioso.
      </p>


      <p className="fxh-subtitle">📋 Dosis comunes</p>

      <ul className="fxh-list">

        <li>Dosis inicial: 300 mg al día</li>
        <li>Dosis ajustada progresivamente según indicación médica</li>
        <li>Dosis habitual: entre 900 mg y 1800 mg al día</li>
        <li>La dosis puede dividirse en varias tomas diarias</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos secundarios</p>

      <ul className="fxh-list">

        <li>Mareos</li>
        <li>Somnolencia</li>
        <li>Fatiga</li>
        <li>Coordinación reducida</li>
        <li>Hinchazón en extremidades</li>

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
              <td>300 mg / 400 mg</td>
              <td>Dolor neuropático y epilepsia</td>
            </tr>

            <tr>
              <td>Tabletas</td>
              <td>600 mg / 800 mg</td>
              <td>Control de convulsiones</td>
            </tr>

            <tr>
              <td>Solución oral</td>
              <td>Dosis ajustada</td>
              <td>Uso pediátrico o pacientes con dificultad para tragar</td>
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
        <li>Consultar al médico en embarazo o lactancia</li>

      </ul>

    </div>

  );

}

export default Gabapentina;