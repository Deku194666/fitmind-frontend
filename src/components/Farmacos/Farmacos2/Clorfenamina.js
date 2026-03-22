import React, { useEffect } from 'react';
import './Clorfenamina.css';

function Clorfenamina() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail249">

      <p className="fxh-title">💊 Clorfenamina</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>Clorfenamina</strong> (clorfeniramina) es un antihistamínico
        de primera generación utilizado para tratar síntomas asociados a
        reacciones alérgicas como rinitis alérgica, urticaria, prurito y
        otras manifestaciones alérgicas. Actúa bloqueando los receptores
        de histamina H1, reduciendo así los efectos de la histamina
        liberada durante las reacciones alérgicas.
      </p>

      <p className="fxh-subtitle">🧪 Mecanismo de acción</p>

      <p className="fxh-text">
        La clorfenamina actúa como antagonista competitivo de los
        <strong>receptores H1 de histamina</strong>. Al bloquear estos
        receptores, disminuye los efectos de la histamina como la
        vasodilatación, aumento de la permeabilidad vascular, prurito
        y secreción nasal asociados a las reacciones alérgicas.
      </p>

      <p className="fxh-subtitle">📋 Indicaciones clínicas</p>

      <ul className="fxh-list">

        <li>Rinitis alérgica</li>

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
              <td>4 mg</td>
              <td>Cada 4–6 horas</td>
            </tr>

            <tr>
              <td>Niños</td>
              <td>2 mg</td>
              <td>Cada 4–6 horas</td>
            </tr>

            <tr>
              <td>Dosis máxima adultos</td>
              <td>24 mg</td>
              <td>Por día</td>
            </tr>

          </tbody>

        </table>

      </div>

      <p className="fxh-subtitle">📈 Farmacocinética</p>

      <ul className="fxh-list">

        <li><strong>Absorción:</strong> buena absorción oral</li>

        <li><strong>Pico plasmático:</strong> 2–3 horas</li>

        <li><strong>Metabolismo:</strong> hepático</li>

        <li><strong>Vida media:</strong> 12–24 horas</li>

        <li><strong>Eliminación:</strong> principalmente renal</li>

      </ul>

      <p className="fxh-subtitle">⚠️ Efectos adversos frecuentes</p>

      <ul className="fxh-list">

        <li>Somnolencia</li>

        <li>Mareos</li>

        <li>Sequedad de boca</li>

        <li>Visión borrosa</li>

        <li>Estreñimiento</li>

      </ul>

      <p className="fxh-subtitle">🚫 Contraindicaciones</p>

      <ul className="fxh-list">

        <li>Hipersensibilidad a la clorfenamina</li>

        <li>Uso concomitante con inhibidores de la MAO</li>

        <li>Glaucoma de ángulo cerrado</li>

        <li>Hipertrofia prostática severa</li>

      </ul>

      <p className="fxh-subtitle">🔄 Interacciones relevantes</p>

      <ul className="fxh-list">

        <li>Alcohol y sedantes (aumentan somnolencia)</li>

        <li>Antidepresivos tricíclicos</li>

        <li>Inhibidores de la monoaminooxidasa (IMAO)</li>

      </ul>

      <p className="fxh-subtitle">📌 Observaciones prácticas</p>

      <ul className="fxh-list">

        <li>Puede causar somnolencia significativa</li>

        <li>Evitar conducir o manejar maquinaria si produce sedación</li>

        <li>Usar con precaución en adultos mayores</li>

        <li>Disponible en tabletas, jarabe e inyección</li>

      </ul>

    </div>

  );

}

export default Clorfenamina;