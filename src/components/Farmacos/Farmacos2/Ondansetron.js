import React, { useEffect } from 'react';
import './Ondansetron.css';

function Ondansetron() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail247">

      <p className="fxh-title">💊 Ondansetrón</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>Ondansetrón</strong> es un medicamento antiemético utilizado
        para prevenir y tratar las <strong>náuseas y vómitos</strong>. Se usa
        principalmente en pacientes que reciben quimioterapia, radioterapia
        o después de cirugías. Pertenece al grupo de los antagonistas
        selectivos del receptor serotoninérgico <strong>5-HT3</strong>.
      </p>


      <p className="fxh-subtitle">🧪 Mecanismo de acción</p>

      <p className="fxh-text">
        El ondansetrón actúa bloqueando los receptores <strong>5-HT3</strong>
        de serotonina en el sistema nervioso central y en el tracto
        gastrointestinal. Estos receptores participan en el reflejo
        del vómito, por lo que su inhibición reduce la aparición de
        náuseas y vómitos.
      </p>


      <p className="fxh-subtitle">📋 Indicaciones clínicas</p>

      <ul className="fxh-list">

        <li>Náuseas y vómitos inducidos por quimioterapia</li>

        <li>Náuseas y vómitos inducidos por radioterapia</li>

        <li>Prevención de náuseas y vómitos postoperatorios</li>

        <li>Tratamiento de vómitos en diferentes contextos clínicos</li>

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
              <td>Náuseas por quimioterapia</td>
              <td>8 mg cada 8–12 h</td>
              <td>Oral / IV</td>
            </tr>

            <tr>
              <td>Náuseas postoperatorias</td>
              <td>4 mg dosis única</td>
              <td>IV</td>
            </tr>

            <tr>
              <td>Prevención general de vómitos</td>
              <td>4–8 mg</td>
              <td>Oral</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📈 Farmacocinética</p>

      <ul className="fxh-list">

        <li><strong>Absorción:</strong> buena absorción oral</li>

        <li><strong>Pico plasmático:</strong> 1–2 horas</li>

        <li><strong>Metabolismo:</strong> hepático (CYP450)</li>

        <li><strong>Vida media:</strong> 3–6 horas</li>

        <li><strong>Eliminación:</strong> renal y hepática</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos adversos frecuentes</p>

      <ul className="fxh-list">

        <li>Cefalea</li>

        <li>Estreñimiento</li>

        <li>Mareos</li>

        <li>Fatiga</li>

        <li>Elevación leve de enzimas hepáticas</li>

      </ul>


      <p className="fxh-subtitle">🚫 Contraindicaciones</p>

      <ul className="fxh-list">

        <li>Hipersensibilidad al ondansetrón</li>

        <li>Uso concomitante con apomorfina</li>

        <li>Precaución en pacientes con prolongación del intervalo QT</li>

      </ul>


      <p className="fxh-subtitle">🔄 Interacciones relevantes</p>

      <ul className="fxh-list">

        <li>Fármacos que prolongan el intervalo QT</li>

        <li>Inhibidores o inductores del CYP450</li>

        <li>Algunos antidepresivos serotoninérgicos</li>

      </ul>


      <p className="fxh-subtitle">📌 Observaciones prácticas</p>

      <ul className="fxh-list">

        <li>Puede administrarse antes de quimioterapia para prevenir vómitos</li>

        <li>Ajustar dosis en insuficiencia hepática grave</li>

        <li>Controlar riesgo de prolongación del intervalo QT</li>

        <li>Disponible en tabletas, solución oral e inyección</li>

      </ul>

    </div>

  );

}

export default Ondansetron;