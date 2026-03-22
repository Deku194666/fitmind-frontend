

import React, { useEffect } from 'react';
import './Celecoxib.css';

function Celecoxib() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail262">

      <p className="fxh-title">💊 Celecoxib</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>celecoxib</strong> es un medicamento perteneciente al
        grupo de los <strong>antiinflamatorios no esteroideos (AINE)</strong>.
        Se utiliza para tratar el <strong>dolor, la inflamación y la rigidez
        articular</strong> en diversas enfermedades musculoesqueléticas.
      </p>

      <p className="fxh-text">
        A diferencia de otros AINE, el celecoxib actúa de forma más
        selectiva sobre la enzima <strong>COX-2</strong>, lo que ayuda
        a reducir la inflamación con menor irritación gástrica en
        comparación con algunos antiinflamatorios tradicionales.
      </p>


      <p className="fxh-subtitle">🧪 Usos médicos</p>

      <ul className="fxh-list">

        <li>Osteoartritis</li>
        <li>Artritis reumatoide</li>
        <li>Dolor agudo</li>
        <li>Dolor menstrual (dismenorrea)</li>
        <li>Inflamación articular</li>

      </ul>


      <p className="fxh-subtitle">⚙️ Mecanismo de acción</p>

      <p className="fxh-text">
        El celecoxib inhibe de forma selectiva la enzima
        <strong> ciclooxigenasa-2 (COX-2)</strong>, responsable de la
        producción de prostaglandinas asociadas a la inflamación
        y el dolor. Al bloquear esta enzima, el medicamento
        ayuda a disminuir la inflamación y aliviar el dolor.
      </p>


      <p className="fxh-subtitle">📋 Dosis comunes</p>

      <ul className="fxh-list">

        <li>Dosis habitual: 100 mg a 200 mg por día</li>
        <li>Puede administrarse una o dos veces al día</li>
        <li>La dosis depende de la condición médica</li>
        <li>Siempre debe utilizarse bajo indicación médica</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos secundarios</p>

      <ul className="fxh-list">

        <li>Dolor de cabeza</li>
        <li>Malestar estomacal</li>
        <li>Náuseas</li>
        <li>Mareos</li>
        <li>Retención de líquidos en algunos casos</li>

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
              <td>100 mg</td>
              <td>Dolor e inflamación leve a moderada</td>
            </tr>

            <tr>
              <td>Cápsulas</td>
              <td>200 mg</td>
              <td>Artritis y dolor crónico</td>
            </tr>

            <tr>
              <td>Cápsulas</td>
              <td>400 mg</td>
              <td>Dolor agudo bajo supervisión médica</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Precauciones</p>

      <ul className="fxh-list">

        <li>No usar en personas alérgicas a sulfonamidas</li>
        <li>Usar con precaución en enfermedades cardíacas</li>
        <li>Evitar uso prolongado sin supervisión médica</li>
        <li>No combinar con otros AINE sin indicación médica</li>
        <li>Consultar al médico durante embarazo o lactancia</li>

      </ul>

    </div>

  );

}

export default Celecoxib;