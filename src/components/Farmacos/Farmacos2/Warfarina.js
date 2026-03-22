

import React, { useEffect } from 'react';
import './Warfarina.css';

function Warfarina() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail286">

      <p className="fxh-title">💊 Warfarina</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>warfarina</strong> es un medicamento anticoagulante
        utilizado para prevenir la formación de <strong>coágulos
        sanguíneos</strong>. Actúa interfiriendo con la producción
        de ciertos factores de coagulación en el hígado.
      </p>

      <p className="fxh-text">
        Este medicamento se utiliza para reducir el riesgo de
        <strong>trombosis, embolias y accidentes cerebrovasculares</strong>
        en personas con determinadas enfermedades cardiovasculares.
      </p>


      <p className="fxh-subtitle">🩺 ¿Para qué se utiliza?</p>

      <ul className="fxh-list">

        <li>Prevención de trombosis venosa profunda</li>
        <li>Prevención de embolia pulmonar</li>
        <li>Fibrilación auricular</li>
        <li>Válvulas cardíacas artificiales</li>
        <li>Prevención de accidentes cerebrovasculares</li>

      </ul>


      <p className="fxh-subtitle">⚙️ ¿Cómo actúa?</p>

      <p className="fxh-text">
        La warfarina actúa bloqueando la acción de la
        <strong>vitamina K</strong>, que es necesaria para la
        producción de varios factores de coagulación.
        Esto reduce la capacidad de la sangre para formar
        coágulos.
      </p>


      <p className="fxh-subtitle">📋 Formas de presentación</p>

      <ul className="fxh-list">

        <li>Tabletas orales</li>
        <li>Diferentes dosis según indicación médica</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos secundarios</p>

      <ul className="fxh-list">

        <li>Sangrados</li>
        <li>Moretones frecuentes</li>
        <li>Sangrado nasal</li>
        <li>Sangrado de encías</li>
        <li>Mareos</li>

      </ul>


      <p className="fxh-subtitle">💊 Dosis y control</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Control</th>
              <th>Objetivo</th>
              <th>Frecuencia</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>INR</td>
              <td>Medir nivel de anticoagulación</td>
              <td>Regular según indicación médica</td>
            </tr>

            <tr>
              <td>Controles médicos</td>
              <td>Ajustar dosis</td>
              <td>Periódicamente</td>
            </tr>

            <tr>
              <td>Análisis de sangre</td>
              <td>Monitorear seguridad del tratamiento</td>
              <td>Según evolución</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Recomendaciones</p>

      <ul className="fxh-list">

        <li>Seguir estrictamente la dosis indicada</li>
        <li>Realizar controles de INR regularmente</li>
        <li>Evitar cambios bruscos en el consumo de vitamina K</li>
        <li>Informar al médico sobre otros medicamentos</li>
        <li>Consultar ante cualquier sangrado inusual</li>

      </ul>

    </div>

  );

}

export default Warfarina;
