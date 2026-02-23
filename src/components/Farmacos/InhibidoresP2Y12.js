import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './InhibidoresP2Y12.css';

function InhibidoresP2Y12() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <p className="fxh-title">
        Inhibidores del Receptor P2Y12
      </p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Inhibidores del Receptor P2Y12</strong> son antiagregantes plaquetarios que bloquean
        de forma reversible o irreversible el receptor P2Y12 del ADP, impidiendo la activación
        y agregación plaquetaria. Se utilizan principalmente tras un
        <strong> síndrome coronario agudo</strong> o <strong>angioplastía coronaria</strong>.
      </p>

      <p className="fxh-subtitle">🔬 Mecanismo de Acción</p>
      <p className="fxh-text">
        El receptor plaquetario <strong>P2Y12</strong> se activa por el ADP, promoviendo la agregación.
        Estos fármacos bloquean dicho receptor, reduciendo la formación de trombos.
        Algunos actúan de forma irreversible (clopidogrel, prasugrel),
        mientras que otros son reversibles (ticagrelor).
      </p>

      <p className="fxh-subtitle">💊 Fármacos Representativos</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Tipo</th>
              <th>Observaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Clopidogrel</td>
              <td>Irreversible</td>
              <td>Profármaco. Requiere activación hepática (CYP2C19).</td>
            </tr>
            <tr>
              <td>Prasugrel</td>
              <td>Irreversible</td>
              <td>Más potente. Evitar en ≥75 años, bajo peso o ACV previo.</td>
            </tr>
            <tr>
              <td>Ticagrelor</td>
              <td>Reversible</td>
              <td>Acción directa. Inicio rápido. Puede causar disnea.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="fxh-list">
        <li>Síndrome coronario agudo.</li>
        <li>Intervención coronaria percutánea con stent.</li>
        <li>Enfermedad arterial periférica (clopidogrel).</li>
        <li>Prevención secundaria de eventos cardiovasculares.</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="fxh-list">
        <li>Hemorragias.</li>
        <li>Disnea (ticagrelor).</li>
        <li>Trastornos gastrointestinales.</li>
        <li>Erupciones cutáneas o neutropenia (raro).</li>
      </ul>

      <p className="fxh-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="fxh-list">
        <li>Doble antiagregación por 12 meses post-SCA o stent.</li>
        <li>Evaluar riesgo hemorrágico antes de tratamiento prolongado.</li>
        <li>Ticagrelor no requiere activación hepática.</li>
        <li>Evitar prasugrel en alto riesgo hemorrágico o ACV previo.</li>
        <li>Suspender antes de cirugía según vida media.</li>
      </ul>

      <p className="fxh-subtitle">📚 Conclusión</p>
      <p className="fxh-text">
        Los <strong>Inhibidores del Receptor P2Y12</strong> son esenciales en la
        estrategia antiagregante moderna, especialmente en SCA y postangioplastía.
        La elección debe basarse en el perfil clínico y riesgo de sangrado.
      </p>

    </div>
  );
}

export default InhibidoresP2Y12;
