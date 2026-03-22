import React, { useEffect } from 'react';
import './Diazepam.css';

function Diazepam() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail280">

      <p className="fxh-title">💊 Diazepam</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>diazepam</strong> es un medicamento que pertenece al
        grupo de las <strong>benzodiacepinas</strong>. Se utiliza para
        tratar trastornos relacionados con la ansiedad, espasmos
        musculares y convulsiones.
      </p>

      <p className="fxh-text">
        Este medicamento actúa sobre el sistema nervioso central,
        produciendo efectos <strong>sedantes, ansiolíticos,
        relajantes musculares y anticonvulsivantes</strong>.
      </p>


      <p className="fxh-subtitle">🩺 ¿Para qué se utiliza?</p>

      <ul className="fxh-list">

        <li>Trastornos de ansiedad</li>
        <li>Espasmos musculares</li>
        <li>Convulsiones</li>
        <li>Síndrome de abstinencia alcohólica</li>
        <li>Procedimientos médicos que requieren sedación</li>

      </ul>


      <p className="fxh-subtitle">⚙️ ¿Cómo actúa?</p>

      <p className="fxh-text">
        El diazepam actúa aumentando la actividad del
        <strong>neurotransmisor GABA</strong> en el cerebro.
        Esto produce un efecto calmante en el sistema
        nervioso central, reduciendo la ansiedad,
        relajando los músculos y ayudando a controlar
        las convulsiones.
      </p>


      <p className="fxh-subtitle">📋 Formas de presentación</p>

      <ul className="fxh-list">

        <li>Tabletas</li>
        <li>Solución oral</li>
        <li>Inyección intravenosa o intramuscular</li>
        <li>Supositorios rectales</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos secundarios</p>

      <ul className="fxh-list">

        <li>Somnolencia</li>
        <li>Mareos</li>
        <li>Fatiga</li>
        <li>Debilidad muscular</li>
        <li>Problemas de coordinación</li>

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
              <td>Tabletas</td>
              <td>Según indicación médica</td>
              <td>Controlar ansiedad o espasmos</td>
            </tr>

            <tr>
              <td>Solución oral</td>
              <td>Uso pediátrico o adultos</td>
              <td>Facilitar administración</td>
            </tr>

            <tr>
              <td>Inyección</td>
              <td>Uso hospitalario</td>
              <td>Control rápido de convulsiones</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Recomendaciones</p>

      <ul className="fxh-list">

        <li>Usar solo bajo indicación médica</li>
        <li>No consumir alcohol durante el tratamiento</li>
        <li>No suspender el medicamento abruptamente</li>
        <li>Evitar conducir si produce somnolencia</li>
        <li>Seguir estrictamente la dosis indicada</li>

      </ul>

    </div>

  );

}

export default Diazepam;
