


import React, { useEffect } from 'react';
import './AngiografiaCoronaria.css';

function AngiografiaCoronaria() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail265">

      <p className="fxh-title">❤️ Angiografía coronaria</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>angiografía coronaria</strong> es un procedimiento
        médico utilizado para visualizar las <strong>arterias coronarias</strong>,
        que son los vasos sanguíneos encargados de llevar sangre al corazón.
      </p>

      <p className="fxh-text">
        Este examen permite detectar <strong>estrechamientos,
        bloqueos o anomalías</strong> en las arterias coronarias y
        es una herramienta fundamental para diagnosticar
        <strong>enfermedad coronaria</strong>.
      </p>


      <p className="fxh-subtitle">🧪 ¿Para qué se realiza?</p>

      <ul className="fxh-list">

        <li>Diagnosticar enfermedad coronaria</li>
        <li>Detectar obstrucciones en las arterias del corazón</li>
        <li>Evaluar dolor en el pecho (angina)</li>
        <li>Planificar procedimientos cardíacos</li>
        <li>Evaluar resultados de cirugías cardíacas</li>

      </ul>


      <p className="fxh-subtitle">⚙️ ¿Cómo se realiza el procedimiento?</p>

      <p className="fxh-text">
        Durante la angiografía coronaria, un médico introduce un
        <strong>catéter</strong> a través de una arteria, generalmente
        en la muñeca o en la ingle. A través de este catéter se inyecta
        un <strong>medio de contraste</strong> que permite visualizar
        las arterias coronarias mediante imágenes de rayos X.
      </p>


      <p className="fxh-subtitle">📋 Indicaciones comunes</p>

      <ul className="fxh-list">

        <li>Dolor persistente en el pecho</li>
        <li>Sospecha de enfermedad coronaria</li>
        <li>Resultados anormales en pruebas cardíacas</li>
        <li>Infarto de miocardio</li>
        <li>Evaluación antes de cirugía cardíaca</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Riesgos del procedimiento</p>

      <ul className="fxh-list">

        <li>Reacciones alérgicas al contraste</li>
        <li>Sangrado en el sitio de inserción del catéter</li>
        <li>Infección</li>
        <li>Arritmias cardíacas</li>
        <li>Complicaciones poco frecuentes en el corazón o vasos sanguíneos</li>

      </ul>


      <p className="fxh-subtitle">📊 Interpretación de resultados</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Resultado</th>
              <th>Significado</th>
              <th>Posible acción médica</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Arterias normales</td>
              <td>Flujo sanguíneo adecuado</td>
              <td>Control médico rutinario</td>
            </tr>

            <tr>
              <td>Estrechamiento leve</td>
              <td>Inicio de enfermedad coronaria</td>
              <td>Tratamiento médico y cambios de estilo de vida</td>
            </tr>

            <tr>
              <td>Bloqueo significativo</td>
              <td>Enfermedad coronaria avanzada</td>
              <td>Angioplastia o cirugía cardíaca</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Recomendaciones</p>

      <ul className="fxh-list">

        <li>Seguir indicaciones médicas antes del procedimiento</li>
        <li>Informar al médico sobre medicamentos actuales</li>
        <li>Evitar alimentos o bebidas antes del examen si se indica</li>
        <li>Descansar después del procedimiento</li>
        <li>Acudir a controles médicos posteriores</li>

      </ul>

    </div>

  );

}

export default AngiografiaCoronaria;
