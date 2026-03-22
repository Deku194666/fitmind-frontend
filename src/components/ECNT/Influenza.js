

import React, { useEffect } from 'react';
import './Influenza.css';
import { Link } from 'react-router-dom';


function Influenza() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail252">

      <p className="fxh-title">🤧 Influenza (Gripe)</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>influenza</strong>, conocida comúnmente como <strong>gripe</strong>,
        es una enfermedad respiratoria contagiosa causada por virus de la influenza
        que infectan la nariz, la garganta y en algunos casos los pulmones.
        Puede provocar síntomas leves a graves y, en ciertos casos,
        complicaciones que requieren atención médica.
      </p>

      <p className="fxh-text">
        La influenza se transmite principalmente a través de
        <strong> gotículas respiratorias</strong> que se expulsan al
        toser, estornudar o hablar. Es una enfermedad frecuente durante
        las temporadas frías y puede afectar a personas de todas las edades.
      </p>


      <p className="fxh-subtitle">🦠 Tipos de virus de la influenza</p>

      <p className="fxh-text">
        Existen diferentes tipos de virus de la influenza que circulan
        entre los seres humanos. Los principales son:
      </p>

      <ul className="fxh-list">

        <li><strong>Influenza tipo A:</strong> responsable de epidemias y pandemias.</li>
        <li><strong>Influenza tipo B:</strong> causa brotes estacionales.</li>
        <li><strong>Influenza tipo C:</strong> provoca infecciones respiratorias leves.</li>

      </ul>


      <p className="fxh-subtitle">📋 Síntomas</p>

      <ul className="fxh-list">

        <li>Fiebre alta</li>
        <li>Escalofríos</li>
        <li>Tos seca</li>
        <li>Dolor de garganta</li>
        <li>Congestión o secreción nasal</li>
        <li>Dolor muscular</li>
        <li>Dolor de cabeza</li>
        <li>Fatiga intensa</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Factores de riesgo</p>

      <ul className="fxh-list">

        <li>Niños pequeños</li>
        <li>Adultos mayores</li>
        <li>Personas con enfermedades crónicas</li>
        <li>Sistema inmunológico debilitado</li>
        <li>Embarazo</li>

      </ul>


      <p className="fxh-subtitle">🧪 Diagnóstico</p>

      <ul className="fxh-list">

        <li>Evaluación clínica</li>
        <li>Pruebas rápidas de influenza</li>
        <li>Pruebas PCR</li>
        <li>Análisis de muestras respiratorias</li>

      </ul>


      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Tipo</th>
              <th>Tratamiento</th>
              <th>Objetivo</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Casos leves</td>
              <td>Reposo, hidratación, analgésicos</td>
              <td>Aliviar síntomas</td>
            </tr>

            <tr>
              <td>Antivirales</td>
              <td>Oseltamivir, Zanamivir</td>
              <td>Reducir duración de la enfermedad</td>
            </tr>

            <tr>
              <td>Fiebre o dolor</td>
              <td>Paracetamol o ibuprofeno</td>
              <td>Controlar fiebre y malestar</td>
            </tr>

            <tr>
              <td>Casos graves</td>
              <td>Hospitalización</td>
              <td>Evitar complicaciones</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Prevención</p>

      <ul className="fxh-list">

        <li>Vacunación anual contra la influenza</li>
        <li>Lavado frecuente de manos</li>
        <li>Cubrir boca y nariz al toser o estornudar</li>
        <li>Evitar contacto con personas enfermas</li>
        <li>Ventilar espacios cerrados</li>

      </ul>

    </div>

  );

}

export default Influenza;