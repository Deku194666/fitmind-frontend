import React, { useEffect } from 'react';
import './Salbutamol.css';
import { Link } from 'react-router-dom';


function Salbutamol() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail271">

      <p className="fxh-title">💊 Salbutamol</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>salbutamol</strong> es un medicamento utilizado para
        tratar y prevenir el <strong>espasmo de los bronquios</strong>,
        una condición en la que las vías respiratorias se estrechan
        dificultando la respiración.
      </p>

      <p className="fxh-text">
        Pertenece al grupo de los <strong>broncodilatadores</strong> y
        actúa relajando los músculos de las vías respiratorias,
        permitiendo que el aire fluya con mayor facilidad hacia
        los pulmones.
      </p>


      <p className="fxh-subtitle">🩺 ¿Para qué se utiliza?</p>

      <ul className="fxh-list">

        <li>Tratamiento del asma</li>
        <li>Broncoespasmo</li>
        <li>Enfermedad pulmonar obstructiva crónica (EPOC)</li>
        <li>Broncoconstricción inducida por ejercicio</li>
        <li>Dificultad respiratoria</li>

      </ul>


      <p className="fxh-subtitle">⚙️ ¿Cómo actúa?</p>

      <p className="fxh-text">
        El salbutamol estimula los <strong>receptores beta-2 adrenérgicos</strong>
        en los músculos de los bronquios, lo que provoca la
        <strong>relajación de las vías respiratorias</strong> y facilita
        el paso del aire hacia los pulmones.
      </p>


      <p className="fxh-subtitle">📋 Formas de administración</p>

      <ul className="fxh-list">

        <li>Inhalador</li>
        <li>Nebulización</li>
        <li>Jarabe</li>
        <li>Tabletas</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos secundarios</p>

      <ul className="fxh-list">

        <li>Temblor en las manos</li>
        <li>Palpitaciones</li>
        <li>Dolor de cabeza</li>
        <li>Nerviosismo</li>
        <li>Taquicardia</li>

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
              <td>Inhalador</td>
              <td>1–2 inhalaciones según indicación médica</td>
              <td>Aliviar broncoespasmo</td>
            </tr>

            <tr>
              <td>Nebulización</td>
              <td>Dosis prescrita por el médico</td>
              <td>Facilitar respiración</td>
            </tr>

            <tr>
              <td>Jarabe o tabletas</td>
              <td>Uso menos frecuente</td>
              <td>Tratamiento sistémico</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Recomendaciones</p>

      <ul className="fxh-list">

        <li>Usar solo bajo indicación médica</li>
        <li>No exceder la dosis recomendada</li>
        <li>Consultar al médico si los síntomas empeoran</li>
        <li>Usar correctamente el inhalador</li>
        <li>Mantener controles médicos periódicos</li>

      </ul>

    </div>

  );

}

export default Salbutamol;
