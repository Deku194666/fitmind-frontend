

import React, { useEffect } from 'react';
import './Sibilancias.css';
import { Link } from 'react-router-dom';

function Sibilancias() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail285">

      <p className="fxh-title">🫁 Sibilancias</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        Las <strong>sibilancias</strong> son sonidos respiratorios agudos
        y silbantes que se producen cuando el aire pasa a través de
        <strong>vías respiratorias estrechas o inflamadas</strong>.
      </p>

      <p className="fxh-text">
        Generalmente se escuchan durante la <strong>respiración</strong>,
        especialmente al exhalar, y pueden indicar problemas respiratorios
        como asma, bronquitis u otras enfermedades pulmonares.
      </p>


      <p className="fxh-subtitle">📋 Síntomas asociados</p>

      <ul className="fxh-list">

        <li>Dificultad para respirar</li>
        <li>Opresión en el pecho</li>
        <li>Tos</li>
        <li>Respiración rápida</li>
        <li>Fatiga</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Causas comunes</p>

      <ul className="fxh-list">

        <li><Link to="/ecnt/asma">  - Asma </Link></li>
        <li> - Bronquitis</li>
        <li> <Link to="/ecnt/epoc">  - Enfermedad pulmonar obstructiva crónica  (EPOC)  </Link></li>
        <li> - Reacciones alérgicas</li>
        <li> - Infecciones respiratorias</li>

      </ul>


      <p className="fxh-subtitle">🧪 Diagnóstico</p>

      <ul className="fxh-list">

        <li> - Evaluación clínica</li>
        <li><Link to="/examenes/espirometria"> - Espirometría </Link> </li>
        <li> - Radiografía de tórax</li>
        <li> - Pruebas de función pulmonar</li>

      </ul>


      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Tratamiento</th>
              <th>Tipo</th>
              <th>Objetivo</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Broncodilatadores</td>
              <td>Medicamentos</td>
              <td>Abrir las vías respiratorias</td>
            </tr>

            <tr>
              <td>Corticoides</td>
              <td>Medicamentos</td>
              <td>Reducir la inflamación</td>
            </tr>

            <tr>
              <td>Oxigenoterapia</td>
              <td>Terapia</td>
              <td>Mejorar la oxigenación</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Cuándo consultar al médico</p>

      <ul className="fxh-list">

        <li>Dificultad respiratoria intensa</li>
        <li>Sibilancias persistentes</li>
        <li>Dolor en el pecho</li>
        <li>Coloración azulada en labios o piel</li>
        <li>Empeoramiento rápido de los síntomas</li>

      </ul>

    </div>

  );

}

export default Sibilancias;
