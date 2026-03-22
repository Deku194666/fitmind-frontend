

import React, { useEffect } from 'react';
import './Sincope.css';
import { Link } from 'react-router-dom';


function Sincope() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail274">

      <p className="fxh-title">🧠 Síncope</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>síncope</strong> es una pérdida temporal de la
        <strong>conciencia</strong> causada por una disminución
        momentánea del flujo sanguíneo hacia el cerebro.
      </p>

      <p className="fxh-text">
        Generalmente ocurre de forma repentina y suele durar
        pocos segundos o minutos. En muchos casos la persona
        recupera la conciencia rápidamente después del episodio.
      </p>


      <p className="fxh-subtitle">📋 Síntomas asociados</p>

      <ul className="fxh-list">

        <li>Pérdida temporal de conciencia</li>
        <li>Mareos o sensación de desmayo</li>
        <li>Visión borrosa</li>
        <li>Sudoración fría</li>
        <li>Debilidad</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Posibles causas</p>

      <ul className="fxh-list">

        <li>Presión arterial baja</li>
        <li>Deshidratación</li>
        <li>Problemas cardíacos</li>
        <li>Hipoglucemia</li>
        <li>Estrés o ansiedad</li>

      </ul>


      <p className="fxh-subtitle">🧪 Diagnóstico</p>

      <ul className="fxh-list">

        <li>Evaluación clínica</li>
        <li>Electrocardiograma</li>
        <li>Monitoreo cardíaco</li>
        <li>Análisis de sangre</li>
        <li>Prueba de mesa basculante</li>

      </ul>


      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Causa</th>
              <th>Tratamiento</th>
              <th>Objetivo</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Deshidratación</td>
              <td>Hidratación y reposo</td>
              <td>Restablecer volumen de líquidos</td>
            </tr>

            <tr>
              <td>Hipotensión</td>
              <td>Control de presión arterial</td>
              <td>Mejorar circulación</td>
            </tr>

            <tr>
              <td>Problemas cardíacos</td>
              <td>Tratamiento cardiológico</td>
              <td>Prevenir episodios</td>
            </tr>

            <tr>
              <td>Hipoglucemia</td>
              <td>Administración de glucosa</td>
              <td>Normalizar niveles de azúcar</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Cuándo consultar al médico</p>

      <ul className="fxh-list">

        <li>Episodios frecuentes de desmayo</li>
        <li>Pérdida de conciencia prolongada</li>
        <li>Dolor en el pecho</li>
        <li>Latidos cardíacos irregulares</li>
        <li>Confusión después del episodio</li>

      </ul>

    </div>

  );

}

export default Sincope;
