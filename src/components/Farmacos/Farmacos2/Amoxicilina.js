import React, { useEffect } from 'react';
import './Amoxicilina.css';
import { Link } from 'react-router-dom';


function Amoxicilina() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail276">

      <p className="fxh-title">💊 Amoxicilina</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>amoxicilina</strong> es un antibiótico perteneciente al
        grupo de las <strong>penicilinas</strong>. Se utiliza para tratar
        diversas infecciones causadas por bacterias.
      </p>

      <p className="fxh-text">
        Este medicamento actúa eliminando las bacterias responsables
        de la infección y es uno de los antibióticos más utilizados
        en medicina debido a su eficacia y seguridad.
      </p>


      <p className="fxh-subtitle">🩺 ¿Para qué se utiliza?</p>

      <ul className="fxh-list">

        <li>Infecciones respiratorias</li>
        <li>Otitis (infección del oído)</li>
        <li>Sinusitis</li>
        <li>Infecciones urinarias</li>
        <li>Infecciones de la piel</li>
        <li>Infecciones dentales</li>

      </ul>


      <p className="fxh-subtitle">⚙️ ¿Cómo actúa?</p>

      <p className="fxh-text">
        La amoxicilina actúa interfiriendo en la <strong>formación de
        la pared celular de las bacterias</strong>. Esto provoca la
        destrucción de las bacterias y ayuda a eliminar la infección.
      </p>


      <p className="fxh-subtitle">📋 Formas de administración</p>

      <ul className="fxh-list">

        <li>Cápsulas</li>
        <li>Tabletas</li>
        <li>Suspensión oral</li>
        <li>Jarabe</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos secundarios</p>

      <ul className="fxh-list">

        <li>Náuseas</li>
        <li>Diarrea</li>
        <li>Dolor abdominal</li>
        <li>Erupciones cutáneas</li>
        <li>Reacciones alérgicas</li>

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
              <td>Cápsulas o tabletas</td>
              <td>Según indicación médica</td>
              <td>Tratar infecciones bacterianas</td>
            </tr>

            <tr>
              <td>Suspensión oral</td>
              <td>Uso frecuente en niños</td>
              <td>Facilitar administración</td>
            </tr>

            <tr>
              <td>Tratamiento completo</td>
              <td>Duración indicada por el médico</td>
              <td>Eliminar completamente la infección</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Recomendaciones</p>

      <ul className="fxh-list">

        <li>Tomar el medicamento según indicación médica</li>
        <li>No suspender el tratamiento antes de tiempo</li>
        <li>No usar antibióticos sin prescripción</li>
        <li>Informar al médico si existen alergias a penicilinas</li>
        <li>Completar todo el tratamiento indicado</li>

      </ul>

    </div>

  );

}

export default Amoxicilina;
