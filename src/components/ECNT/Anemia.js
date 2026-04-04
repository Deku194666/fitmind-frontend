


import React, { useEffect } from 'react';
import './Anemia.css';

function Anemia() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail265">

      <p className="fxh-title">🩸 Anemia</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>anemia</strong> es una condición médica en la cual
        el cuerpo tiene una <strong>cantidad insuficiente de glóbulos
        rojos o hemoglobina</strong> en la sangre. Esto reduce la
        capacidad de la sangre para transportar oxígeno a los tejidos
        del organismo.
      </p>

      <p className="fxh-text">
        La anemia puede causar síntomas como <strong>fatiga,
        debilidad y dificultad para respirar</strong>. Existen
        diferentes tipos de anemia dependiendo de su causa
        y del mecanismo que afecta la producción o pérdida
        de glóbulos rojos.
      </p>


      <p className="fxh-subtitle">🧬 Tipos de anemia</p>

      <ul className="fxh-list">

        <li>Anemia por deficiencia de hierro</li>
        <li>Anemia por deficiencia de vitamina B12</li>
        <li>Anemia por deficiencia de ácido fólico</li>
        <li>Anemia aplásica</li>
        <li>Anemia hemolítica</li>

      </ul>


      <p className="fxh-subtitle">📋 Síntomas</p>

      <ul className="fxh-list">

        <li>Cansancio o fatiga</li>
        <li>Debilidad</li>
        <li>Palidez en la piel</li>
        <li>Mareos</li>
        <li>Dificultad para respirar</li>
        <li>Dolor de cabeza</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Causas</p>

      <ul className="fxh-list">

        <li>Deficiencia de hierro</li>
        <li>Pérdida de sangre</li>
        <li>Deficiencia de vitaminas</li>
        <li>Enfermedades crónicas</li>
        <li>Problemas en la médula ósea</li>

      </ul>


      <p className="fxh-subtitle">🧪 Diagnóstico</p>

      <ul className="fxh-list">

        <li>Hemograma completo</li>
        <li>Medición de hemoglobina</li>
        <li>Examen de hematocrito</li>
        <li>Estudios de hierro en sangre</li>
        <li>Evaluación médica clínica</li>

      </ul>


      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Tipo de tratamiento</th>
              <th>Ejemplo</th>
              <th>Objetivo</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Suplementos de hierro</td>
              <td>Hierro oral</td>
              <td>Corregir deficiencia de hierro</td>
            </tr>

            <tr>
              <td>Vitaminas</td>
              <td>Vitamina B12 o ácido fólico</td>
              <td>Corregir deficiencias nutricionales</td>
            </tr>

            <tr>
              <td>Tratamiento de causa</td>
              <td>Control de enfermedades crónicas</td>
              <td>Eliminar la causa subyacente</td>
            </tr>

            <tr>
              <td>Transfusión sanguínea</td>
              <td>Casos graves</td>
              <td>Aumentar glóbulos rojos rápidamente</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Prevención</p>

      <ul className="fxh-list">

        <li>Consumir alimentos ricos en hierro</li>
        <li>Mantener una dieta equilibrada</li>
        <li>Controlar enfermedades crónicas</li>
        <li>Realizar controles médicos periódicos</li>
        <li>Consultar al médico ante síntomas persistentes</li>

      </ul>

    </div>

  );

}

export default Anemia;