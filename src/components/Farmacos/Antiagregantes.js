import React, { useEffect } from 'react';
import NavBarAntiagregantes from './NavBarAntiagregantes';
import './Antiagregantes.css';

function Antiagregantes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <NavBarAntiagregantes />

      <p className="fxh-title">
        Fármacos Antiagregantes Plaquetarios
      </p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Antiagregantes Plaquetarios</strong> inhiben la activación o agregación de las plaquetas,
        reduciendo la formación de trombos arteriales. Son esenciales en la prevención
        de eventos isquémicos, especialmente en el contexto cardiovascular.
      </p>

      <p className="fxh-subtitle">🔬 Clasificación de Antiagregantes</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Clase</th>
              <th>Ejemplos</th>
              <th>Mecanismo de acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inhibidores COX-1</td>
              <td>Ácido acetilsalicílico (AAS)</td>
              <td>Bloquea la síntesis de tromboxano A2</td>
            </tr>
            <tr>
              <td>Inhibidores del receptor P2Y12</td>
              <td>Clopidogrel, Prasugrel, Ticagrelor</td>
              <td>Bloquean la activación plaquetaria mediada por ADP</td>
            </tr>
            <tr>
              <td>Inhibidores GP IIb/IIIa</td>
              <td>Abciximab, Eptifibatida</td>
              <td>Bloquean la agregación plaquetaria final</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="fxh-list">
        <li>Prevención secundaria de IAM y ACV isquémico.</li>
        <li>Síndrome coronario agudo (SCA).</li>
        <li>Prevención de trombosis en stents coronarios.</li>
        <li>Enfermedad arterial periférica.</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="fxh-list">
        <li><strong>AAS:</strong> Irritación gástrica, úlceras, hemorragias.</li>
        <li><strong>Clopidogrel:</strong> Hematomas y sangrado.</li>
        <li><strong>Ticagrelor/Prasugrel:</strong> Mayor riesgo hemorrágico.</li>
        <li><strong>GP IIb/IIIa:</strong> Uso hospitalario por alto riesgo de sangrado.</li>
      </ul>

      <p className="fxh-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="fxh-list">
        <li>AAS como pilar en prevención secundaria.</li>
        <li>Clopidogrel en terapia dual o si hay contraindicación a AAS.</li>
        <li>Ticagrelor/Prasugrel más potentes pero mayor riesgo hemorrágico.</li>
        <li>Ajustar según perfil trombótico y hemorrágico del paciente.</li>
      </ul>

      <p className="fxh-subtitle">📦 Combinaciones Frecuentes</p>
      <ul className="fxh-list">
        <li>AAS + Clopidogrel (terapia antiplaquetaria dual).</li>
        <li>AAS + Ticagrelor/Prasugrel en alto riesgo isquémico.</li>
        <li>Evitar triple terapia prolongada si también recibe anticoagulantes.</li>
      </ul>

      <p className="fxh-subtitle">📚 Conclusión</p>
      <p className="fxh-text">
        Los <strong>Antiagregantes Plaquetarios</strong> son fundamentales en la prevención
        de eventos trombóticos arteriales. La elección debe balancear eficacia
        y riesgo de sangrado según el contexto clínico.
      </p>

    </div>
  );
}

export default Antiagregantes;
