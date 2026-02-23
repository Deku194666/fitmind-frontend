import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProtectoresGastricos.css';

function ProtectoresGastricos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pg-detail">
      <p className="pg-title">Protectores Gástricos</p>

      <p className="pg-subtitle">📌 Introducción</p>
      <p className="pg-text">
        Los <strong>Protectores Gástricos</strong> son medicamentos utilizados para prevenir o tratar lesiones de la mucosa gástrica, especialmente en pacientes con riesgo de úlceras o que reciben tratamientos agresivos como AINEs o corticoides. Incluyen principalmente los inhibidores de la bomba de protones (IBP) y los antagonistas H2.
      </p>

      <p className="pg-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="pg-list">
        <li>Los IBP inhiben irreversiblemente la H⁺/K⁺ ATPasa en las células parietales, reduciendo la producción de ácido gástrico.</li>
        <li>Los antagonistas H2 bloquean los receptores histamínicos H2, disminuyendo la secreción ácida.</li>
        <li>Favorecen la cicatrización de úlceras y disminuyen el riesgo de sangrado digestivo.</li>
      </ul>

      <p className="pg-subtitle">📋 Indicaciones Principales</p>
      <ul className="pg-list">
        <li>Enfermedad por reflujo gastroesofágico (ERGE)</li>
        <li>Gastritis y úlceras gástricas o duodenales</li>
        <li>Profilaxis de daño gástrico por AINEs o corticoides</li>
        <li>Síndrome de Zollinger-Ellison</li>
        <li>Erradicación de Helicobacter pylori (en combinación)</li>
      </ul>

      <p className="pg-subtitle">💊 Ejemplos Comunes</p>
      <div className="pg-table-wrapper">
        <table className="pg-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Grupo</th>
              <th>Dosis habitual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/farmacos/farmacos2/omeprazol">Omeprazol</Link></td>
              <td>IBP</td>
              <td>20-40 mg/día</td>
            </tr>
            <tr>
              <td>Pantoprazol</td>
              <td>IBP</td>
              <td>20-40 mg/día</td>
            </tr>
            <tr>
              <td>Ranitidina</td>
              <td>Antihistamínico H2</td>
              <td>150 mg cada 12 h</td>
            </tr>
            <tr>
              <td>Sucralfato</td>
              <td>Citoprotector</td>
              <td>1 g 4 veces al día</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="pg-subtitle">⚠️ Efectos Adversos</p>
      <ul className="pg-list">
        <li>Diarrea, náuseas, dolor abdominal</li>
        <li>Hipomagnesemia en uso prolongado (IBP)</li>
        <li>Riesgo aumentado de infecciones intestinales</li>
        <li>Fracturas óseas por mala absorción de calcio (uso crónico de IBP)</li>
        <li>Interacciones con clopidogrel (omeprazol)</li>
      </ul>

      <p className="pg-subtitle">🔄 Contraindicaciones</p>
      <ul className="pg-list">
        <li>Hipersensibilidad a algún componente</li>
        <li>Uso prolongado sin causa médica justificada</li>
        <li>Insuficiencia hepática (precaución con algunos IBP)</li>
      </ul>

      <p className="pg-subtitle">📉 Interacciones Relevantes</p>
      <ul className="pg-list">
        <li>Omeprazol reduce el efecto de clopidogrel</li>
        <li>Alteración en la absorción de vitamina B12, hierro y calcio</li>
        <li>Modifica biodisponibilidad de algunos antifúngicos</li>
      </ul>

      <p className="pg-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="pg-list">
        <li>Preferir IBP para tratamiento de esofagitis o úlceras</li>
        <li>Evitar el uso innecesario crónico sin indicación médica</li>
        <li>Revisar riesgo de osteoporosis y suplementar calcio si es necesario</li>
        <li>Administrar en ayunas para mayor eficacia (IBP)</li>
      </ul>
    </div>
  );
}

export default ProtectoresGastricos;
