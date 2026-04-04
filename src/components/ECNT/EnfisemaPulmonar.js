

import React, { useEffect } from 'react';
import './EnfisemaPulmonar.css';

function EnfisemaPulmonar() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail255">

      <p className="fxh-title">🫁 Enfisema Pulmonar</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>enfisema pulmonar</strong> es una enfermedad respiratoria
        crónica que forma parte del grupo de enfermedades conocidas como
        <strong> EPOC (enfermedad pulmonar obstructiva crónica)</strong>.
        Se caracteriza por el daño progresivo de los <strong>alvéolos</strong>,
        que son pequeños sacos de aire en los pulmones responsables del
        intercambio de oxígeno.
      </p>

      <p className="fxh-text">
        Cuando los alvéolos se dañan, pierden su elasticidad y se destruyen
        gradualmente, lo que dificulta la respiración y reduce la cantidad
        de oxígeno que llega al torrente sanguíneo. Esta enfermedad suele
        desarrollarse lentamente y empeorar con el tiempo.
      </p>


      <p className="fxh-subtitle">⚠️ Causas</p>

      <ul className="fxh-list">

        <li> 1) Tabaquismo (principal causa)</li>
        <li> 2) Exposición prolongada a humo o contaminantes</li>
        <li> 3) Inhalación de sustancias químicas o polvo</li>
        <li> 4) Deficiencia genética de alfa-1 antitripsina</li>

      </ul>


      <p className="fxh-subtitle">📋 Síntomas</p>

      <ul className="fxh-list">

        <li> 1) Dificultad para respirar</li>
        <li> 2) Falta de aire durante el esfuerzo</li>
        <li> 3) Tos crónica</li>
        <li> 4) Sibilancias</li>
        <li> 5) Fatiga</li>
        <li> 6) Pérdida de peso involuntaria</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Factores de riesgo</p>

      <ul className="fxh-list">

        <li> 1) Fumar cigarrillos</li>
        <li> 2) Exposición a humo de segunda mano</li>
        <li> 3) Contaminación ambiental</li>
        <li> 4) Exposición laboral a polvo o químicos</li>
        <li> 5) Edad avanzada</li>

      </ul>


      <p className="fxh-subtitle">🧪 Diagnóstico</p>

      <ul className="fxh-list">

        <li>Evaluación clínica</li>
        <li>Radiografía de tórax</li>
        <li>Tomografía computarizada</li>
        <li>Pruebas de función pulmonar</li>
        <li>Análisis de gases en sangre</li>

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
              <td>Broncodilatadores</td>
              <td>Medicamentos inhalados</td>
              <td>Facilitar la respiración</td>
            </tr>

            <tr>
              <td>Corticoides</td>
              <td>Antiinflamatorios inhalados</td>
              <td>Reducir inflamación pulmonar</td>
            </tr>

            <tr>
              <td>Oxigenoterapia</td>
              <td>Administración de oxígeno</td>
              <td>Mejorar niveles de oxígeno</td>
            </tr>

            <tr>
              <td>Rehabilitación pulmonar</td>
              <td>Ejercicios respiratorios</td>
              <td>Mejorar capacidad pulmonar</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Prevención</p>

      <ul className="fxh-list">

        <li>Evitar el tabaquismo</li>
        <li>Reducir exposición a contaminantes</li>
        <li>Usar protección respiratoria en ambientes laborales</li>
        <li>Realizar actividad física regular</li>
        <li>Realizar controles médicos periódicos</li>

      </ul>

    </div>

  );

}

export default EnfisemaPulmonar;