import React, { useEffect } from 'react';
import './Omeprazol.css';

function Omeprazol() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail279">

      <p className="fxh-title">💊 Omeprazol</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>omeprazol</strong> es un medicamento utilizado para
        reducir la producción de ácido en el estómago. Pertenece al grupo
        de fármacos llamados <strong>inhibidores de la bomba de protones</strong>.
      </p>

      <p className="fxh-text">
        Se utiliza principalmente para tratar enfermedades relacionadas
        con el exceso de ácido gástrico y para proteger el estómago en
        ciertos tratamientos médicos.
      </p>


      <p className="fxh-subtitle">🩺 ¿Para qué se utiliza?</p>

      <ul className="fxh-list">

        <li>Reflujo gastroesofágico</li>
        <li>Gastritis</li>
        <li>Úlcera gástrica</li>
        <li>Úlcera duodenal</li>
        <li>Prevención de daño gástrico por medicamentos</li>

      </ul>


      <p className="fxh-subtitle">⚙️ ¿Cómo actúa?</p>

      <p className="fxh-text">
        El omeprazol actúa bloqueando una estructura llamada
        <strong>bomba de protones</strong> en las células del estómago.
        Esto reduce la producción de ácido gástrico, permitiendo que
        el tejido del estómago y el esófago se recupere.
      </p>


      <p className="fxh-subtitle">📋 Formas de presentación</p>

      <ul className="fxh-list">

        <li>Cápsulas</li>
        <li>Tabletas</li>
        <li>Suspensión oral</li>
        <li>Presentación intravenosa (uso hospitalario)</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos secundarios</p>

      <ul className="fxh-list">

        <li>Dolor de cabeza</li>
        <li>Náuseas</li>
        <li>Dolor abdominal</li>
        <li>Diarrea</li>
        <li>Estreñimiento</li>

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
              <td>Cápsulas</td>
              <td>Una vez al día</td>
              <td>Reducir ácido estomacal</td>
            </tr>

            <tr>
              <td>Tabletas</td>
              <td>Según indicación médica</td>
              <td>Controlar reflujo o gastritis</td>
            </tr>

            <tr>
              <td>Intravenoso</td>
              <td>Uso hospitalario</td>
              <td>Tratamiento en casos graves</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Recomendaciones</p>

      <ul className="fxh-list">

        <li>Tomar el medicamento antes de las comidas</li>
        <li>No exceder la dosis indicada</li>
        <li>Seguir las indicaciones médicas</li>
        <li>Evitar automedicación prolongada</li>
        <li>Consultar al médico si los síntomas persisten</li>

      </ul>

    </div>

  );

}

export default Omeprazol;
