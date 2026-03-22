import React, { useEffect } from 'react';
import './Budesonida.css';
import { Link } from 'react-router-dom';


function Budesonida() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail272">

      <p className="fxh-title">💊 Budesonida</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>budesonida</strong> es un medicamento que pertenece
        al grupo de los <strong>corticosteroides</strong>. Se utiliza
        principalmente para reducir la <strong>inflamación en las vías
        respiratorias</strong> y mejorar la respiración.
      </p>

      <p className="fxh-text">
        Este medicamento se usa con frecuencia en el tratamiento del
        <strong>asma</strong> y de la <strong>enfermedad pulmonar
        obstructiva crónica (EPOC)</strong>. A diferencia de los
        broncodilatadores, la budesonida actúa disminuyendo la
        inflamación de los bronquios.
      </p>


      <p className="fxh-subtitle">🩺 ¿Para qué se utiliza?</p>

      <ul className="fxh-list">

        <li>Tratamiento del asma</li>
        <li>Enfermedad pulmonar obstructiva crónica (EPOC)</li>
        <li>Rinitis alérgica</li>
        <li>Inflamación de las vías respiratorias</li>
        <li>Prevención de crisis asmáticas</li>

      </ul>


      <p className="fxh-subtitle">⚙️ ¿Cómo actúa?</p>

      <p className="fxh-text">
        La budesonida actúa reduciendo la <strong>inflamación y la
        hinchazón</strong> en las vías respiratorias. Esto permite
        que los bronquios permanezcan más abiertos y facilita
        el paso del aire hacia los pulmones.
      </p>


      <p className="fxh-subtitle">📋 Formas de administración</p>

      <ul className="fxh-list">

        <li>Inhalador</li>
        <li>Nebulización</li>
        <li>Spray nasal</li>
        <li>Cápsulas inhaladas</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos secundarios</p>

      <ul className="fxh-list">

        <li>Irritación de garganta</li>
        <li>Ronquera</li>
        <li>Tos</li>
        <li>Infecciones orales por hongos</li>
        <li>Dolor de cabeza</li>

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
              <td>Uso diario según indicación médica</td>
              <td>Controlar inflamación bronquial</td>
            </tr>

            <tr>
              <td>Nebulización</td>
              <td>Dosis prescrita por el médico</td>
              <td>Mejorar respiración</td>
            </tr>

            <tr>
              <td>Spray nasal</td>
              <td>Aplicación nasal diaria</td>
              <td>Tratar rinitis alérgica</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Recomendaciones</p>

      <ul className="fxh-list">

        <li>Usar únicamente bajo indicación médica</li>
        <li>No suspender el tratamiento sin consultar al médico</li>
        <li>Enjuagar la boca después de usar inhalador</li>
        <li>No exceder la dosis indicada</li>
        <li>Realizar controles médicos periódicos</li>

      </ul>

    </div>

  );

}

export default Budesonida;
