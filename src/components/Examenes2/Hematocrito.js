

import React, { useEffect } from 'react';
import './Hematocrito.css';
import { Link } from 'react-router-dom';

function Hematocrito() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail264">

      <p className="fxh-title">🩸 Hematocrito</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>hematocrito</strong> es un examen de sangre que mide
        el <strong>porcentaje de glóbulos rojos</strong> presentes en la
        sangre en relación con el volumen total de sangre.
      </p>

      <p className="fxh-text">
        Este examen es importante para evaluar la capacidad de la sangre
        para transportar oxígeno y puede ayudar a diagnosticar
        <strong>anemia, deshidratación, policitemia y otros trastornos
        sanguíneos</strong>.
      </p>


      <p className="fxh-subtitle">🧪 ¿Para qué se realiza?</p>

      <ul className="fxh-list">

        <li>Diagnosticar anemia</li>
        <li>Detectar deshidratación</li>
        <li>Evaluar trastornos de la sangre</li>
        <li>Controlar enfermedades crónicas</li>
        <li>Monitorear tratamientos médicos</li>

      </ul>


      <p className="fxh-subtitle">⚙️ ¿Cómo se realiza el examen?</p>

      <p className="fxh-text">
        El examen de hematocrito se realiza mediante una
        <strong>muestra de sangre</strong> tomada generalmente de una
        vena del brazo. La muestra se analiza en el laboratorio para
        determinar el porcentaje de glóbulos rojos en la sangre.
      </p>


      <p className="fxh-subtitle">📋 Valores normales</p>

      <ul className="fxh-list">

        <li>Hombres adultos: 40% a 54%</li>
        <li>Mujeres adultas: 36% a 48%</li>
        <li>Niños: 30% a 44%</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Valores bajos</p>

      <ul className="fxh-list">

        <li>Anemia</li>
        <li>Pérdida de sangre</li>
        <li>Deficiencia de hierro</li>
        <li>Enfermedades crónicas</li>
        <li>Problemas en la médula ósea</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Valores altos</p>

      <ul className="fxh-list">

        <li>Deshidratación</li>
        <li>Policitemia</li>
        <li>Enfermedades pulmonares</li>
        <li>Vivir en altitudes elevadas</li>
        <li>Problemas cardíacos</li>

      </ul>


      <p className="fxh-subtitle">📊 Interpretación de resultados</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Resultado</th>
              <th>Posible significado</th>
              <th>Acción médica</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Bajo</td>
              <td>  <Link to="/ecnt/anemia"> Anemia  </Link>   </td>   
              <td>Evaluación médica adicional</td>
            </tr>

            <tr>
              <td>Normal</td>
              <td>Función sanguínea adecuada</td>
              <td>Control rutinario</td>
            </tr>

            <tr>
              <td>Alto</td>
              <td>Deshidratación o policitemia</td>
              <td>Evaluación médica</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Recomendaciones</p>

      <ul className="fxh-list">

        <li> 1) Seguir indicaciones médicas antes del examen</li>
        <li> 2) Informar al médico sobre medicamentos</li>
        <li> 3) Realizar controles periódicos si hay enfermedades crónicas</li>
        <li> 4) Mantener una alimentación equilibrada</li>
        <li> 5) Consultar al médico si los valores son anormales</li>

      </ul>

    </div>

  );

}

export default Hematocrito;