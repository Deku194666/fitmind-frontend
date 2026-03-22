

import React, { useEffect } from 'react';
import './Metoclopramida.css';

function Metoclopramida() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail248">

      <p className="fxh-title">💊 Metoclopramida</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>Metoclopramida</strong> es un medicamento antiemético y procinético
        utilizado para tratar <strong>náuseas, vómitos y trastornos de la motilidad gastrointestinal</strong>.
        Actúa tanto a nivel del sistema nervioso central como del tracto digestivo,
        facilitando el vaciamiento gástrico y reduciendo el reflejo del vómito.
      </p>


      <p className="fxh-subtitle">🧪 Mecanismo de acción</p>

      <p className="fxh-text">
        La metoclopramida bloquea los receptores <strong>dopaminérgicos D2</strong> en el
        sistema nervioso central, particularmente en el centro del vómito.
        Además, aumenta la liberación de acetilcolina en el tracto digestivo,
        mejorando la motilidad gastrointestinal y acelerando el vaciamiento gástrico.
      </p>


      <p className="fxh-subtitle">📋 Indicaciones clínicas</p>

      <ul className="fxh-list">

        <li>Náuseas y vómitos de diversas causas</li>

        <li>Gastroparesia diabética</li>

        <li>Reflujo gastroesofágico</li>

        <li>Prevención de vómitos asociados a medicamentos o procedimientos</li>

        <li>Facilitar estudios diagnósticos gastrointestinales</li>

      </ul>


      <p className="fxh-subtitle">💊 Dosis habitual</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Indicación</th>
              <th>Dosis habitual</th>
              <th>Vía de administración</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Náuseas y vómitos</td>
              <td>10 mg cada 8 horas</td>
              <td>Oral / IV / IM</td>
            </tr>

            <tr>
              <td>Gastroparesia</td>
              <td>10 mg antes de las comidas</td>
              <td>Oral</td>
            </tr>

            <tr>
              <td>Prevención de vómitos</td>
              <td>10 mg</td>
              <td>IV</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📈 Farmacocinética</p>

      <ul className="fxh-list">

        <li><strong>Absorción:</strong> rápida por vía oral</li>

        <li><strong>Pico plasmático:</strong> 1–2 horas</li>

        <li><strong>Metabolismo:</strong> hepático</li>

        <li><strong>Vida media:</strong> 5–6 horas</li>

        <li><strong>Eliminación:</strong> renal</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos adversos frecuentes</p>

      <ul className="fxh-list">

        <li>Somnolencia</li>

        <li>Fatiga</li>

        <li>Inquietud o agitación</li>

        <li>Diarrea</li>

        <li>Mareos</li>

      </ul>


      <p className="fxh-subtitle">🚫 Contraindicaciones</p>

      <ul className="fxh-list">

        <li>Obstrucción o perforación gastrointestinal</li>

        <li>Hemorragia gastrointestinal</li>

        <li>Feocromocitoma</li>

        <li>Hipersensibilidad al medicamento</li>

      </ul>


      <p className="fxh-subtitle">🔄 Interacciones relevantes</p>

      <ul className="fxh-list">

        <li>Antipsicóticos (aumenta riesgo de efectos extrapiramidales)</li>

        <li>Alcohol y sedantes (aumentan somnolencia)</li>

        <li>Anticolinérgicos (disminuyen efecto procinético)</li>

      </ul>


      <p className="fxh-subtitle">📌 Observaciones prácticas</p>

      <ul className="fxh-list">

        <li>No usar por períodos prolongados sin supervisión médica</li>

        <li>Puede producir efectos extrapiramidales en algunos pacientes</li>

        <li>Ajustar dosis en insuficiencia renal</li>

        <li>Disponible en tabletas, solución oral e inyección</li>

      </ul>

    </div>

  );

}

export default Metoclopramida;