

import React, { useEffect } from 'react';
import './Neumonia.css';

function Neumonia() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail277">

      <p className="fxh-title">🫁 Neumonía</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>neumonía</strong> es una infección que afecta a los
        <strong>pulmones</strong>, específicamente a los alvéolos,
        que son pequeños sacos de aire donde ocurre el intercambio
        de oxígeno.
      </p>

      <p className="fxh-text">
        Esta enfermedad puede ser causada por <strong>bacterias,
        virus u hongos</strong>. Los alvéolos pueden llenarse de
        líquido o pus, lo que dificulta la respiración y el
        intercambio normal de oxígeno.
      </p>


      <p className="fxh-subtitle">📋 Síntomas</p>

      <ul className="fxh-list">

        <li>Fiebre</li>
        <li>Tos con flema</li>
        <li>Dificultad para respirar</li>
        <li>Dolor en el pecho al respirar</li>
        <li>Fatiga</li>
        <li>Escalofríos</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Causas</p>

      <ul className="fxh-list">

        <li>Bacterias (como Streptococcus pneumoniae)</li>
        <li>Virus respiratorios</li>
        <li>Hongos</li>
        <li>Aspiración de alimentos o líquidos</li>

      </ul>


      <p className="fxh-subtitle">🧪 Diagnóstico</p>

      <ul className="fxh-list">

        <li>Evaluación clínica</li>
        <li>Radiografía de tórax</li>
        <li>Análisis de sangre</li>
        <li>Cultivo de esputo</li>
        <li>Oximetría de pulso</li>

      </ul>


      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Tipo de neumonía</th>
              <th>Tratamiento</th>
              <th>Objetivo</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Bacteriana</td>
              <td>Antibióticos</td>
              <td>Eliminar la infección</td>
            </tr>

            <tr>
              <td>Viral</td>
              <td>Tratamiento sintomático</td>
              <td>Aliviar síntomas</td>
            </tr>

            <tr>
              <td>Casos graves</td>
              <td>Hospitalización y oxígeno</td>
              <td>Mejorar oxigenación</td>
            </tr>

            <tr>
              <td>Fiebre o dolor</td>
              <td>Analgésicos y antipiréticos</td>
              <td>Controlar síntomas</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Prevención</p>

      <ul className="fxh-list">

        <li>Vacunación contra neumococo</li>
        <li>Vacunación contra influenza</li>
        <li>Lavado frecuente de manos</li>
        <li>Evitar el tabaquismo</li>
        <li>Fortalecer el sistema inmunológico</li>

      </ul>

    </div>

  );

}

export default Neumonia;
