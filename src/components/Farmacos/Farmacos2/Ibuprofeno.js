import React, { useEffect } from 'react';
import './Ibuprofeno.css';

function Ibuprofeno() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail256">

      <p className="fxh-title">💊 Ibuprofeno</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>ibuprofeno</strong> es un medicamento perteneciente al grupo
        de los <strong>antiinflamatorios no esteroideos (AINE)</strong>. Se
        utiliza comúnmente para aliviar el <strong>dolor, la inflamación y la
        fiebre</strong>.
      </p>

      <p className="fxh-text">
        Este medicamento actúa bloqueando la producción de ciertas sustancias
        en el cuerpo llamadas <strong>prostaglandinas</strong>, que están
        relacionadas con el dolor, la inflamación y la fiebre. Es uno de los
        analgésicos más utilizados en el mundo.
      </p>


      <p className="fxh-subtitle">🧪 Usos médicos</p>

      <ul className="fxh-list">

        <li>Dolor de cabeza</li>
        <li>Dolor muscular</li>
        <li>Dolor dental</li>
        <li>Dolor menstrual</li>
        <li>Fiebre</li>
        <li>Inflamación</li>

      </ul>


      <p className="fxh-subtitle">⚙️ Mecanismo de acción</p>

      <p className="fxh-text">
        El ibuprofeno actúa inhibiendo las enzimas
        <strong> ciclooxigenasa (COX-1 y COX-2)</strong>, responsables de la
        producción de prostaglandinas. Al disminuir estas sustancias, el
        medicamento reduce el dolor, la inflamación y la fiebre.
      </p>


      <p className="fxh-subtitle">📋 Dosis comunes</p>

      <ul className="fxh-list">

        <li>Adultos: 200 mg a 400 mg cada 6 a 8 horas</li>
        <li>Dosis máxima diaria recomendada: 1200 mg sin supervisión médica</li>
        <li>Niños: dosis ajustada según peso corporal</li>

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
              <td>200 mg / 400 mg</td>
              <td>Dolor y fiebre</td>
            </tr>

            <tr>
              <td>Cápsulas</td>
              <td>200 mg / 400 mg</td>
              <td>Dolor e inflamación</td>
            </tr>

            <tr>
              <td>Suspensión oral</td>
              <td>100 mg/5 ml</td>
              <td>Uso pediátrico</td>
            </tr>

            <tr>
              <td>Gel tópico</td>
              <td>Aplicación local</td>
              <td>Dolor muscular o articular</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Precauciones</p>

      <ul className="fxh-list">

        <li>No usar en personas con alergia a AINE</li>
        <li>Usar con precaución en enfermedades gástricas</li>
        <li>Evitar uso prolongado sin supervisión médica</li>
        <li>Consultar al médico durante embarazo o lactancia</li>

      </ul>

    </div>

  );

}

export default Ibuprofeno;