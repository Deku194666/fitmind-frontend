

import React, { useEffect } from 'react';
import './Angiografia.css';

function Angiografia() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail266">

      <p className="fxh-title">🩻 Angiografía</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>angiografía</strong> es un examen médico utilizado
        para visualizar los <strong>vasos sanguíneos</strong> del cuerpo,
        como arterias y venas. Este procedimiento permite detectar
        <strong>bloqueos, estrechamientos o anomalías</strong> en el
        sistema circulatorio.
      </p>

      <p className="fxh-text">
        Para realizar este estudio se utiliza un <strong>medio de contraste</strong>
        que se inyecta en los vasos sanguíneos y se observa mediante
        imágenes de <strong>rayos X, tomografía o resonancia</strong>.
        Es una herramienta fundamental en el diagnóstico de
        enfermedades cardiovasculares.
      </p>


      <p className="fxh-subtitle">🧪 ¿Para qué se utiliza?</p>

      <ul className="fxh-list">

        <li>Detectar obstrucciones en los vasos sanguíneos</li>
        <li>Diagnosticar enfermedades cardiovasculares</li>
        <li>Evaluar aneurismas</li>
        <li>Identificar malformaciones vasculares</li>
        <li>Planificar procedimientos quirúrgicos</li>

      </ul>


      <p className="fxh-subtitle">⚙️ ¿Cómo se realiza?</p>

      <p className="fxh-text">
        Durante el procedimiento, un médico introduce un
        <strong>catéter</strong> en un vaso sanguíneo, generalmente
        a través de la <strong>ingle o la muñeca</strong>. A través
        de este catéter se inyecta el medio de contraste que permite
        visualizar el flujo sanguíneo en los vasos mediante imágenes.
      </p>


      <p className="fxh-subtitle">📋 Tipos de angiografía</p>

      <ul className="fxh-list">

        <li>Angiografía coronaria (arterias del corazón)</li>
        <li>Angiografía cerebral (vasos del cerebro)</li>
        <li>Angiografía pulmonar</li>
        <li>Angiografía periférica (extremidades)</li>
        <li>Angiografía renal</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Riesgos del procedimiento</p>

      <ul className="fxh-list">

        <li>Reacciones alérgicas al medio de contraste</li>
        <li>Sangrado en el sitio de inserción</li>
        <li>Infección</li>
        <li>Daño en vasos sanguíneos</li>
        <li>Complicaciones poco frecuentes relacionadas al contraste</li>

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
              <td>Vasos normales</td>
              <td>Flujo sanguíneo adecuado</td>
              <td>Control médico rutinario</td>
            </tr>

            <tr>
              <td>Estrechamiento</td>
              <td>Reducción del flujo sanguíneo</td>
              <td>Medicamentos o angioplastia</td>
            </tr>

            <tr>
              <td>Bloqueo completo</td>
              <td>Interrupción del flujo</td>
              <td>Cirugía o intervención vascular</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Recomendaciones</p>

      <ul className="fxh-list">

        <li>Seguir las indicaciones médicas antes del examen</li>
        <li>Informar alergias o medicamentos al médico</li>
        <li>Descansar después del procedimiento</li>
        <li>Beber líquidos para eliminar el contraste</li>
        <li>Asistir a controles médicos posteriores</li>

      </ul>

    </div>

  );

}

export default Angiografia;
