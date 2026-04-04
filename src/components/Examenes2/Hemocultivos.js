

import React, { useEffect } from 'react';
import './Hemocultivos.css';

function Hemocultivos() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail283">

      <p className="fxh-title">🧪 Hemocultivos</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        Los <strong>hemocultivos</strong> son un examen de laboratorio
        utilizado para detectar la presencia de <strong>bacterias,
        hongos u otros microorganismos</strong> en la sangre.
      </p>

      <p className="fxh-text">
        Este examen es fundamental para diagnosticar infecciones graves
        del torrente sanguíneo, como la <strong>sepsis</strong> o la
        <strong> endocarditis</strong>, y permite identificar el
        microorganismo responsable para indicar el tratamiento adecuado.
      </p>


      <p className="fxh-subtitle">🩺 ¿Para qué se realiza?</p>

      <ul className="fxh-list">

        <li>Detectar infecciones en la sangre</li>
        <li>Diagnosticar sepsis</li>
        <li>Diagnosticar endocarditis</li>
        <li>Identificar bacterias u hongos en el torrente sanguíneo</li>
        <li>Guiar el tratamiento con antibióticos</li>

      </ul>


      <p className="fxh-subtitle">⚙️ ¿Cómo se realiza el examen?</p>

      <p className="fxh-text">
        Para realizar un hemocultivo se toma una muestra de sangre
        mediante una punción venosa. La muestra se coloca en frascos
        especiales que permiten el crecimiento de microorganismos
        en el laboratorio.
      </p>

      <p className="fxh-text">
        Generalmente se toman <strong>dos o más muestras</strong> en
        diferentes momentos para aumentar la precisión del diagnóstico.
      </p>


      <p className="fxh-subtitle">📋 Preparación para el examen</p>

      <ul className="fxh-list">

        <li>No requiere ayuno en la mayoría de los casos</li>
        <li>Informar si se están tomando antibióticos</li>
        <li>Seguir las indicaciones del personal de salud</li>

      </ul>


      <p className="fxh-subtitle">📊 Interpretación de resultados</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Resultado</th>
              <th>Significado</th>
              <th>Acción médica</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Negativo</td>
              <td>No se detectan microorganismos</td>
              <td>Descarta infección sanguínea</td>
            </tr>

            <tr>
              <td>Positivo</td>
              <td>Presencia de bacterias u hongos</td>
              <td>Inicio de tratamiento específico</td>
            </tr>

            <tr>
              <td>Contaminado</td>
              <td>Posible contaminación de la muestra</td>
              <td>Repetir el examen</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Importancia del examen</p>

      <ul className="fxh-list">

        <li>Permite detectar infecciones graves de forma temprana</li>
        <li>Ayuda a elegir el antibiótico adecuado</li>
        <li>Reduce el riesgo de complicaciones graves</li>
        <li>Es clave en el diagnóstico de sepsis</li>
        <li>Permite monitorear la evolución de infecciones</li>

      </ul>

    </div>

  );

}

export default Hemocultivos;
