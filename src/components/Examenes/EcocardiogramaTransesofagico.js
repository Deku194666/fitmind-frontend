


import React, { useEffect } from 'react';
import './EcocardiogramaTransesofagico.css';
import { Link } from 'react-router-dom';


function EcocardiogramaTransesofagico() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail268">

      <p className="fxh-title">❤️ Ecocardiograma transesofágico</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>ecocardiograma transesofágico</strong> es un examen
        diagnóstico que utiliza <strong>ultrasonido</strong> para obtener
        imágenes detalladas del corazón a través del <strong>esófago</strong>.
      </p>

      <p className="fxh-text">
        Este procedimiento permite obtener imágenes más claras del corazón
        en comparación con el ecocardiograma transtorácico, especialmente
        cuando se necesita evaluar estructuras cardíacas específicas
        como las válvulas, las cavidades del corazón o la presencia
        de coágulos sanguíneos.
      </p>


      <p className="fxh-subtitle">🧪 ¿Para qué se utiliza?</p>

      <ul className="fxh-list">

        <li>Evaluar válvulas cardíacas con mayor precisión</li>
        <li>Detectar coágulos en el corazón</li>
        <li>Diagnosticar infecciones cardíacas (endocarditis)</li>
        <li>Evaluar anomalías cardíacas complejas</li>
        <li>Obtener imágenes más detalladas del corazón</li>

      </ul>


      <p className="fxh-subtitle">⚙️ ¿Cómo se realiza?</p>

      <p className="fxh-text">
        Durante el procedimiento, se introduce una <strong>sonda flexible</strong>
        con un transductor de ultrasonido a través de la boca hasta el
        <strong>esófago</strong>. Desde esta posición, el dispositivo puede
        capturar imágenes detalladas del corazón debido a la cercanía
        entre el esófago y el corazón.
      </p>


      <p className="fxh-subtitle">📋 Indicaciones comunes</p>

      <ul className="fxh-list">

        <li>Sospecha de infecciones cardíacas</li>
        <li>Evaluación detallada de válvulas cardíacas</li>
        <li>Detección de coágulos en el corazón</li>
        <li>Evaluación antes de cirugías cardíacas</li>
        <li>Diagnóstico de anomalías cardíacas complejas</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Riesgos del procedimiento</p>

      <ul className="fxh-list">

        <li>Molestia o irritación en la garganta</li>
        <li>Náuseas o reflejo nauseoso</li>
        <li>Reacciones a medicamentos sedantes</li>
        <li>Riesgo bajo de lesiones en el esófago</li>

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
              <td>Estructura cardíaca normal</td>
              <td>Corazón con funcionamiento adecuado</td>
              <td>Control médico rutinario</td>
            </tr>

            <tr>
              <td>Problemas valvulares</td>
              <td>Alteración en válvulas cardíacas</td>
              <td>Seguimiento o tratamiento especializado</td>
            </tr>

            <tr>
              <td>Presencia de coágulos</td>
              <td>Riesgo de eventos cardiovasculares</td>
              <td>Tratamiento anticoagulante</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Recomendaciones</p>

      <ul className="fxh-list">

        <li>Ayuno previo según indicación médica</li>
        <li>Informar alergias o medicamentos al médico</li>
        <li>Descansar después del procedimiento</li>
        <li>Evitar comer hasta que desaparezca el efecto anestésico</li>
        <li>Consultar los resultados con el cardiólogo</li>

      </ul>

    </div>

  );

}

export default EcocardiogramaTransesofagico;
