


import React, { useEffect } from 'react';
import './ECG.css';
import { Link } from 'react-router-dom';



function Ecocardiograma() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail266">

      <p className="fxh-title">❤️ Ecocardiograma</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>ecocardiograma</strong> es un examen médico que utiliza
        <strong> ultrasonido</strong> para obtener imágenes detalladas del
        <strong> corazón</strong>. Este estudio permite observar la estructura,
        tamaño y funcionamiento del corazón en tiempo real.
      </p>

      <p className="fxh-text">
        Es una prueba segura, no invasiva y ampliamente utilizada para
        diagnosticar diversas enfermedades cardíacas, evaluar el flujo
        sanguíneo y analizar el funcionamiento de las válvulas del corazón.
      </p>


      <p className="fxh-subtitle">🧪 ¿Para qué se utiliza?</p>

      <ul className="fxh-list">

        <li>Evaluar la estructura del corazón</li>
        <li>Detectar problemas en las válvulas cardíacas</li>
        <li>Diagnosticar insuficiencia cardíaca</li>
        <li>Detectar malformaciones cardíacas</li>
        <li>Evaluar el flujo sanguíneo dentro del corazón</li>

      </ul>


      <p className="fxh-subtitle">⚙️ ¿Cómo se realiza?</p>

      <p className="fxh-text">
        Durante el procedimiento, un profesional de salud coloca un
        <strong>transductor</strong> sobre el pecho del paciente.
        Este dispositivo emite <strong>ondas de ultrasonido</strong>
        que rebotan en el corazón y generan imágenes en un monitor,
        permitiendo observar el movimiento del corazón en tiempo real.
      </p>


      <p className="fxh-subtitle">📋 Tipos de ecocardiograma</p>

      <ul className="fxh-list">

        <li>  <Link to="/examenes/ecocardiogramatranstoracico"> Ecocardiograma Transtorácico </Link>  </li>   
        <li>  <Link to="/examenes/ecocardiogramatrasesofagico">  Ecocardiograma Transesofágico  </Link>    </li>   
        <li>Ecocardiograma Doppler</li>
        <li>Ecocardiograma de esfuerzo</li>
        <li>Ecocardiograma tridimensional</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Posibles riesgos</p>

      <ul className="fxh-list">

        <li>Generalmente es un procedimiento seguro</li>
        <li>Molestia leve durante la presión del transductor</li>
        <li>En el ecocardiograma transesofágico puede haber irritación de garganta</li>

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
              <td>Estructura y función adecuadas</td>
              <td>Seguimiento médico rutinario</td>
            </tr>

            <tr>
              <td>Problemas valvulares</td>
              <td>Funcionamiento anormal de válvulas</td>
              <td>Tratamiento médico o cirugía</td>
            </tr>

            <tr>
              <td>Disminución de la función cardíaca</td>
              <td>Posible insuficiencia cardíaca</td>
              <td>Evaluación y tratamiento especializado</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Recomendaciones</p>

      <ul className="fxh-list">

        <li>Seguir indicaciones médicas antes del examen</li>
        <li>Informar al médico sobre enfermedades cardíacas previas</li>
        <li>Consultar resultados con un especialista</li>
        <li>Realizar controles cardíacos periódicos si se recomienda</li>
        <li>Mantener hábitos de vida saludables</li>

      </ul>

    </div>

  );

}

export default Ecocardiograma;
