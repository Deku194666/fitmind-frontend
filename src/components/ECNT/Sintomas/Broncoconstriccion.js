

import React, { useEffect } from 'react';
import './Broncoconstriccion.css';
import { Link } from 'react-router-dom';


function Broncoconstriccion() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail2270">

      <p className="fxh-title">🫁 Broncoconstricción</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>broncoconstricción</strong> es el estrechamiento de los
        <strong> bronquios</strong>, las vías respiratorias que transportan
        el aire hacia los pulmones. Este estrechamiento reduce el flujo de
        aire y puede causar dificultad para respirar.
      </p>

      <p className="fxh-text">
        Este fenómeno ocurre cuando los <strong>músculos que rodean los bronquios
        se contraen</strong>, lo que limita el paso del aire. Es común en
        enfermedades respiratorias como el <Link to="/ecnt/asma">asma</Link> y puede ser
        desencadenado por diversos factores ambientales o físicos.
      </p>


      <p className="fxh-subtitle">📋 Síntomas</p>

      <ul className="fxh-list">

        <li> 1) Dificultad para respirar</li>
        <li> 2) Sibilancias (silbidos al respirar)</li>
        <li> 3) Opresión en el pecho</li>
        <li> 4) Tos persistente</li>
        <li> 5) Respiración rápida</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Causas</p>

      <ul className="fxh-list">

        <li> 1) Asma</li>
        <li> 2) Reacciones alérgicas</li>
        <li> 3) Ejercicio físico intenso</li>
        <li> 4) Exposición a aire frío</li>
        <li> 5) Contaminación o irritantes</li>

      </ul>


      <p className="fxh-subtitle">🧪 Diagnóstico</p>

      <ul className="fxh-list">

        <li> 1) Evaluación clínica</li>
        <li> 2) Espirometría</li>
        <li> 3) Pruebas de función pulmonar</li>
        <li> 4) Pruebas de alergia</li>
        <li> 5) Evaluación de síntomas respiratorios</li>

      </ul>


      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Tratamiento</th>
              <th>Ejemplo</th>
              <th>Objetivo</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Broncodilatadores</td>
              <td><Link to="/farmacos/farmacos2/salbutamol"> Salbutamol</Link>.  </td>
              <td>Relajar los músculos de los bronquios</td>
            </tr>

            <tr>
              <td>Corticoides inhalados</td>
              <td>Budesonida</td>
              <td>Reducir inflamación de las vías respiratorias</td>
            </tr>

            <tr>
              <td>Antialérgicos</td>
              <td>Antihistamínicos</td>
              <td>Controlar reacciones alérgicas</td>
            </tr>

            <tr>
              <td>Control ambiental</td>
              <td>Evitar irritantes</td>
              <td>Reducir desencadenantes</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Prevención</p>

      <ul className="fxh-list">

        <li>Evitar exposición a alérgenos</li>
        <li>Controlar el asma adecuadamente</li>
        <li>Evitar humo del tabaco</li>
        <li>Usar mascarilla en ambientes contaminados</li>
        <li>Seguir tratamiento médico indicado</li>

      </ul>

    </div>

  );

}

export default Broncoconstriccion;
