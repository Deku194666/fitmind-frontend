


import React, { useEffect } from 'react';
import './ToxinaBotulinica.css';

function ToxinaBotulinica() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail263">

      <p className="fxh-title">💉 Toxina botulínica</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>toxina botulínica</strong> es una sustancia producida por
        la bacteria <strong>Clostridium botulinum</strong>. En medicina se
        utiliza en dosis controladas para tratar diversas condiciones
        neurológicas y musculares, además de aplicaciones en medicina
        estética.
      </p>

      <p className="fxh-text">
        Este tratamiento funciona bloqueando temporalmente la comunicación
        entre los nervios y los músculos, lo que provoca una
        <strong> relajación muscular localizada</strong>.
      </p>


      <p className="fxh-subtitle">🧪 Usos médicos</p>

      <ul className="fxh-list">

        <li>Migraña crónica</li>
        <li>Espasmos musculares</li>
        <li>Distonía cervical</li>
        <li>Hiperhidrosis (sudoración excesiva)</li>
        <li>Tratamiento estético de arrugas</li>

      </ul>


      <p className="fxh-subtitle">⚙️ Mecanismo de acción</p>

      <p className="fxh-text">
        La toxina botulínica bloquea la liberación del neurotransmisor
        <strong>acetilcolina</strong> en la unión neuromuscular.
        Esto impide que el músculo reciba la señal de contracción,
        produciendo una <strong>relajación temporal del músculo</strong>.
      </p>


      <p className="fxh-subtitle">📋 Aplicación</p>

      <ul className="fxh-list">

        <li>Se administra mediante inyección local</li>
        <li>El procedimiento debe realizarlo un profesional de salud</li>
        <li>El efecto suele comenzar entre 3 y 7 días</li>
        <li>La duración del efecto suele ser de 3 a 6 meses</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos secundarios</p>

      <ul className="fxh-list">

        <li>Dolor o inflamación en el sitio de inyección</li>
        <li>Debilidad muscular temporal</li>
        <li>Dolor de cabeza</li>
        <li>Caída temporal del párpado en algunos casos</li>
        <li>Reacciones alérgicas poco frecuentes</li>

      </ul>


      <p className="fxh-subtitle">💉 Presentaciones</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Tipo</th>
              <th>Uso</th>
              <th>Duración aproximada</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Inyección terapéutica</td>
              <td>Espasmos musculares y distonías</td>
              <td>3 a 4 meses</td>
            </tr>

            <tr>
              <td>Tratamiento para migraña</td>
              <td>Prevención de migraña crónica</td>
              <td>3 meses</td>
            </tr>

            <tr>
              <td>Tratamiento estético</td>
              <td>Reducción de arrugas faciales</td>
              <td>3 a 6 meses</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Precauciones</p>

      <ul className="fxh-list">

        <li>Debe ser aplicada por profesionales capacitados</li>
        <li>No utilizar en infecciones en la zona de aplicación</li>
        <li>Evitar durante embarazo o lactancia sin indicación médica</li>
        <li>Informar al médico sobre enfermedades neuromusculares</li>
        <li>Seguir siempre las recomendaciones médicas</li>

      </ul>

    </div>

  );

}

export default ToxinaBotulinica;