

import React, { useEffect } from 'react';
import './EcocardiogramaTranstoracico.css';
import { Link } from 'react-router-dom';


function EcocardiogramaTranstoracico() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail267">

      <p className="fxh-title">❤️ Ecocardiograma transtorácico</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>ecocardiograma transtorácico</strong> es un examen
        médico no invasivo que utiliza <strong>ultrasonido</strong> para
        obtener imágenes del corazón a través del pecho. Es el tipo
        más común de ecocardiograma y permite evaluar la estructura
        y función del corazón.
      </p>

      <p className="fxh-text">
        Este estudio permite observar el tamaño del corazón,
        el funcionamiento de las <strong>válvulas cardíacas</strong>,
        el movimiento del músculo cardíaco y el flujo de sangre
        dentro de las cavidades cardíacas.
      </p>


      <p className="fxh-subtitle">🧪 ¿Para qué se utiliza?</p>

      <ul className="fxh-list">

        <li>Evaluar el tamaño y estructura del corazón</li>
        <li>Detectar enfermedades de las válvulas cardíacas</li>
        <li>Diagnosticar insuficiencia cardíaca</li>
        <li>Detectar anomalías congénitas del corazón</li>
        <li>Evaluar el flujo sanguíneo cardíaco</li>

      </ul>


      <p className="fxh-subtitle">⚙️ ¿Cómo se realiza?</p>

      <p className="fxh-text">
        Durante el procedimiento, el paciente se acuesta en una camilla
        mientras un profesional coloca un <strong>transductor</strong>
        sobre el pecho. Este dispositivo emite ondas de ultrasonido
        que producen imágenes del corazón en tiempo real en un monitor.
      </p>


      <p className="fxh-subtitle">📋 Indicaciones comunes</p>

      <ul className="fxh-list">

        <li>Dolor en el pecho</li>
        <li>Sospecha de enfermedad cardíaca</li>
        <li>Evaluación de soplos cardíacos</li>
        <li>Dificultad para respirar</li>
        <li>Control de enfermedades cardíacas</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Riesgos del procedimiento</p>

      <ul className="fxh-list">

        <li>Es un procedimiento seguro y no invasivo</li>
        <li>No utiliza radiación</li>
        <li>Puede causar leve molestia por la presión del transductor</li>

      </ul>


      <p className="fxh-subtitle">📊 Interpretación de resultados</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Resultado</th>
              <th>Significado</th>
              <th>Posible manejo</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Corazón normal</td>
              <td>Estructura y función normales</td>
              <td>Control médico rutinario</td>
            </tr>

            <tr>
              <td>Problemas valvulares</td>
              <td>Alteración en válvulas cardíacas</td>
              <td>Tratamiento médico o seguimiento</td>
            </tr>

            <tr>
              <td>Disminución de función cardíaca</td>
              <td>Posible insuficiencia cardíaca</td>
              <td>Evaluación cardiológica y tratamiento</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Recomendaciones</p>

      <ul className="fxh-list">

        <li>Seguir indicaciones médicas antes del examen</li>
        <li>Informar antecedentes cardíacos al médico</li>
        <li>Consultar los resultados con un especialista</li>
        <li>Realizar controles médicos si se recomienda</li>
        <li>Mantener hábitos de vida saludables</li>

      </ul>

    </div>

  );

}

export default EcocardiogramaTranstoracico;
