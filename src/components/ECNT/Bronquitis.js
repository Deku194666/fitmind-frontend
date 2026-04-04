

import React, { useEffect } from 'react';
import './Bronquitis.css';
import { Link } from 'react-router-dom';



function Bronquitis() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail251">

      <p className="fxh-title">🫁 Bronquitis</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>bronquitis</strong> es una inflamación de los bronquios,
        las vías respiratorias que transportan el aire hacia los pulmones.
        Se caracteriza principalmente por <strong>tos persistente,
        producción de moco y dificultad respiratoria</strong>.
        Existen dos formas principales: <strong>bronquitis aguda</strong> y
        <strong> bronquitis crónica</strong>.
      </p>


      <p className="fxh-subtitle">🫁 Bronquitis aguda</p>

      <p className="fxh-text">
        La bronquitis aguda es una inflamación temporal de los bronquios
        generalmente causada por infecciones virales. Es frecuente después
        de un resfriado o infección respiratoria y suele durar entre
        <strong> 1 y 3 semanas</strong>.
      </p>


      <p className="fxh-subtitle">📋 Síntomas de bronquitis aguda</p>

      <ul className="fxh-list">

        <li> 1) Tos persistente</li>
        <li> 2) Producción de moco</li>
        <li> 3) Fatiga</li>
        <li> 4) Dolor o molestia en el pecho</li>
        <li> 5) Fiebre leve</li>
        <li> 6) Sibilancias</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Causas de bronquitis aguda</p>

      <ul className="fxh-list">

        <li> 1) Virus respiratorios (<Link to="/ecnt/influenza"> Influenza</Link>, rinovirus)</li>
        <li> 2) Infecciones respiratorias superiores</li>
        <li> 3) Exposición a humo o irritantes</li>

      </ul>


      <p className="fxh-subtitle">🫁 Bronquitis crónica</p>

      <p className="fxh-text">
        La bronquitis crónica es una enfermedad respiratoria de larga
        duración caracterizada por <strong>tos productiva durante al menos
        3 meses al año durante 2 años consecutivos</strong>.
        Forma parte del grupo de enfermedades conocidas como
        <strong> EPOC (enfermedad pulmonar obstructiva crónica)</strong>.
      </p>


      <p className="fxh-subtitle">📋 Síntomas de bronquitis crónica</p>

      <ul className="fxh-list">

        <li>Tos persistente con moco</li>
        <li>Dificultad para respirar</li>
        <li>Sibilancias</li>
        <li>Fatiga</li>
        <li>Infecciones respiratorias frecuentes</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Factores de riesgo</p>

      <ul className="fxh-list">

        <li>Tabaquismo</li>
        <li>Exposición a contaminación del aire</li>
        <li>Polvo o químicos en el trabajo</li>
        <li>Infecciones respiratorias repetidas</li>

      </ul>


      <p className="fxh-subtitle">🧪 Diagnóstico</p>

      <ul className="fxh-list">

        <li>Evaluación clínica</li>
        <li>Radiografía de tórax</li>
        <li>Pruebas de función pulmonar</li>
        <li>Análisis de esputo</li>

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
              <td>Bronquitis aguda</td>
              <td>Reposo, hidratación, analgésicos</td>
              <td>Aliviar síntomas</td>
            </tr>

            <tr>
              <td>Broncodilatadores</td>
              <td>Salbutamol</td>
              <td>Mejorar respiración</td>
            </tr>

            <tr>
              <td>Bronquitis crónica</td>
              <td>Broncodilatadores y corticoides</td>
              <td>Controlar inflamación</td>
            </tr>

            <tr>
              <td>Casos bacterianos</td>
              <td>Antibióticos</td>
              <td>Eliminar infección</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Prevención</p>

      <ul className="fxh-list">

        <li>Evitar el tabaquismo</li>
        <li>Vacunación contra influenza</li>
        <li>Evitar contaminación y humo</li>
        <li>Lavado frecuente de manos</li>
        <li>Uso de mascarilla en ambientes contaminados</li>

      </ul>

    </div>

  );

}

export default Bronquitis;