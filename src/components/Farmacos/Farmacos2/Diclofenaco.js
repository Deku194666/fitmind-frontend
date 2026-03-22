

import React, { useEffect } from 'react';
import './Diclofenaco.css';

function Diclofenaco() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail258">

      <p className="fxh-title">💊 Diclofenaco</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>diclofenaco</strong> es un medicamento perteneciente al
        grupo de los <strong>antiinflamatorios no esteroideos (AINE)</strong>.
        Se utiliza para aliviar el <strong>dolor, la inflamación y la fiebre</strong>
        asociados a diversas afecciones médicas.
      </p>

      <p className="fxh-text">
        Este medicamento es comúnmente utilizado para tratar
        <strong>dolores musculares, articulares, lesiones deportivas y
        enfermedades inflamatorias</strong>. Actúa reduciendo la producción
        de sustancias en el cuerpo que causan inflamación y dolor.
      </p>


      <p className="fxh-subtitle">🧪 Usos médicos</p>

      <ul className="fxh-list">

        <li> 1) Dolor muscular</li>
        <li> 2) Dolor articular</li>
        <li> 3) Artritis</li>
        <li> 4) Dolor postoperatorio</li>
        <li> 5) Dolor menstrual</li>
        <li> 6) Inflamaciones musculares</li>

      </ul>


      <p className="fxh-subtitle">⚙️ Mecanismo de acción</p>

      <p className="fxh-text">
        El diclofenaco actúa inhibiendo las enzimas
        <strong> ciclooxigenasa (COX-1 y COX-2)</strong>, responsables de la
        producción de prostaglandinas, sustancias que intervienen en los
        procesos de inflamación, dolor y fiebre. Al bloquear estas enzimas,
        el medicamento ayuda a disminuir los síntomas inflamatorios.
      </p>


      <p className="fxh-subtitle">📋 Dosis comunes</p>

      <ul className="fxh-list">

        <li>Adultos: 50 mg a 100 mg al día según indicación médica</li>
        <li>Dosis dividida en 2 o 3 tomas diarias</li>
        <li>La dosis máxima depende de la presentación y prescripción médica</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos secundarios</p>

      <ul className="fxh-list">

        <li>Dolor o irritación estomacal</li>
        <li>Náuseas</li>
        <li>Mareos</li>
        <li>Acidez estomacal</li>
        <li>Reacciones alérgicas en casos raros</li>

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
              <td>Tabletas</td>
              <td>50 mg</td>
              <td>Dolor e inflamación</td>
            </tr>

            <tr>
              <td>Cápsulas</td>
              <td>75 mg</td>
              <td>Dolor moderado</td>
            </tr>

            <tr>
              <td>Gel tópico</td>
              <td>Aplicación local</td>
              <td>Dolor muscular o articular</td>
            </tr>

            <tr>
              <td>Inyección</td>
              <td>Dosis médica</td>
              <td>Dolor intenso o inflamación aguda</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Precauciones</p>

      <ul className="fxh-list">

        <li>No usar en personas con alergia a AINE</li>
        <li>Evitar uso prolongado sin supervisión médica</li>
        <li>Usar con precaución en problemas gástricos</li>
        <li>Consultar al médico durante embarazo o lactancia</li>
        <li>No combinar con otros antiinflamatorios sin indicación médica</li>

      </ul>

    </div>

  );

}

export default Diclofenaco;