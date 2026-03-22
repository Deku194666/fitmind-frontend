


import React, { useEffect } from 'react';
import './Metformina.css';
import { Link } from 'react-router-dom';


function Metformina() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail277">

      <p className="fxh-title">💊 Metformina</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>metformina</strong> es un medicamento utilizado
        principalmente para el tratamiento de la
        <strong> diabetes tipo 2</strong>. Pertenece al grupo de los
        <strong>antidiabéticos orales</strong>.
      </p>

      <p className="fxh-text">
        Este medicamento ayuda a controlar los niveles de
        <strong>glucosa en la sangre</strong> y es uno de los
        tratamientos más utilizados para la diabetes debido a su
        eficacia y seguridad.
      </p>


      <p className="fxh-subtitle">🩺 ¿Para qué se utiliza?</p>

      <ul className="fxh-list">

        <li>Diabetes mellitus tipo 2</li>
        <li>Resistencia a la insulina</li>
        <li>Síndrome metabólico</li>
        <li>Síndrome de ovario poliquístico (SOP)</li>

      </ul>


      <p className="fxh-subtitle">⚙️ ¿Cómo actúa?</p>

      <p className="fxh-text">
        La metformina actúa reduciendo la
        <strong>producción de glucosa en el hígado</strong> y
        mejorando la <strong>sensibilidad a la insulina</strong>.
        Esto permite que el organismo utilice mejor la glucosa
        presente en la sangre.
      </p>


      <p className="fxh-subtitle">📋 Formas de administración</p>

      <ul className="fxh-list">

        <li>Tabletas</li>
        <li>Tabletas de liberación prolongada</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos secundarios</p>

      <ul className="fxh-list">

        <li>Náuseas</li>
        <li>Diarrea</li>
        <li>Dolor abdominal</li>
        <li>Pérdida del apetito</li>
        <li>Sabor metálico en la boca</li>

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
              <td>Controlar glucosa en sangre</td>
            </tr>

            <tr>
              <td>Liberación prolongada</td>
              <td>Administración diaria</td>
              <td>Control prolongado de glucosa</td>
            </tr>

            <tr>
              <td>Tratamiento continuo</td>
              <td>Uso prolongado</td>
              <td>Manejo de diabetes tipo 2</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Recomendaciones</p>

      <ul className="fxh-list">

        <li>Tomar el medicamento según indicación médica</li>
        <li>No suspender el tratamiento sin consultar al médico</li>
        <li>Mantener una dieta saludable</li>
        <li>Realizar actividad física regularmente</li>
        <li>Controlar periódicamente los niveles de glucosa</li>

      </ul>

    </div>

  );

}

export default Metformina;
