

import React, { useEffect } from 'react';
import './Loratadina.css';

function Loratadina() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail250">

      <p className="fxh-title">💊 Loratadina</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>Loratadina</strong> es un antihistamínico de segunda generación
        utilizado para tratar síntomas de alergia como rinitis alérgica,
        urticaria y prurito. A diferencia de los antihistamínicos de primera
        generación, produce <strong>menos sedación</strong> porque tiene menor
        penetración en el sistema nervioso central.
      </p>

      <p className="fxh-subtitle">🧪 Mecanismo de acción</p>

      <p className="fxh-text">
        La loratadina actúa como antagonista selectivo de los
        <strong>receptores H1 de histamina</strong>. Al bloquear estos
        receptores reduce los efectos de la histamina liberada durante
        las reacciones alérgicas, disminuyendo síntomas como estornudos,
        picazón, secreción nasal y enrojecimiento ocular.
      </p>

      <p className="fxh-subtitle">📋 Indicaciones clínicas</p>

      <ul className="fxh-list">

        <li>Rinitis alérgica estacional o perenne</li>

        <li>Urticaria</li>

        <li>Prurito asociado a alergias</li>

        <li>Conjuntivitis alérgica</li>

        <li>Reacciones alérgicas cutáneas</li>

      </ul>

      <p className="fxh-subtitle">💊 Dosis habitual</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Grupo</th>
              <th>Dosis habitual</th>
              <th>Frecuencia</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Adultos</td>
              <td>10 mg</td>
              <td>Una vez al día</td>
            </tr>

            <tr>
              <td>Niños (2–12 años)</td>
              <td>5 mg</td>
              <td>Una vez al día</td>
            </tr>

            <tr>
              <td>Dosis máxima</td>
              <td>10 mg</td>
              <td>Por día</td>
            </tr>

          </tbody>

        </table>

      </div>

      <p className="fxh-subtitle">📈 Farmacocinética</p>

      <ul className="fxh-list">

        <li><strong>Absorción:</strong> rápida por vía oral</li>

        <li><strong>Pico plasmático:</strong> 1–3 horas</li>

        <li><strong>Metabolismo:</strong> hepático (CYP3A4 y CYP2D6)</li>

        <li><strong>Vida media:</strong> 8–14 horas</li>

        <li><strong>Eliminación:</strong> renal y biliar</li>

      </ul>

      <p className="fxh-subtitle">⚠️ Efectos adversos frecuentes</p>

      <ul className="fxh-list">

        <li>Cefalea</li>

        <li>Fatiga</li>

        <li>Sequedad de boca</li>

        <li>Somnolencia leve (poco frecuente)</li>

      </ul>

      <p className="fxh-subtitle">🚫 Contraindicaciones</p>

      <ul className="fxh-list">

        <li>Hipersensibilidad a loratadina</li>

        <li>Precaución en insuficiencia hepática</li>

        <li>Uso bajo supervisión médica en embarazo y lactancia</li>

      </ul>

      <p className="fxh-subtitle">🔄 Interacciones relevantes</p>

      <ul className="fxh-list">

        <li>Ketoconazol</li>

        <li>Eritromicina</li>

        <li>Cimetidina</li>

        <li>Inhibidores del CYP3A4</li>

      </ul>

      <p className="fxh-subtitle">📌 Observaciones prácticas</p>

      <ul className="fxh-list">

        <li>Produce menos somnolencia que antihistamínicos de primera generación</li>

        <li>Puede administrarse con o sin alimentos</li>

        <li>Disponible en tabletas y jarabe</li>

        <li>Uso frecuente en tratamiento de alergias estacionales</li>

      </ul>

    </div>

  );

}

export default Loratadina;