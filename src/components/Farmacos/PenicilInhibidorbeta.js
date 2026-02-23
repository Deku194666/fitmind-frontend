import React, { useEffect } from 'react';
import './PenicilInhibidorBeta.css'; 

function PenicilInhibidorBeta() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-detail">
      <p className="pb-title">Penicilinas + Inhibidor de β-lactamasas</p>

      <p className="pb-subtitle">📌 Introducción</p>
      <p className="pb-text">
        Las <strong>Penicilinas combinadas con Inhibidores de β-Lactamasas</strong> son fármacos antibacterianos que combinan una penicilina con un inhibidor que bloquea las β-lactamasas producidas por algunas bacterias, las cuales degradan la penicilina. Esto amplía el espectro antibacteriano permitiendo tratar infecciones causadas por bacterias resistentes.
      </p>

      <p className="pb-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="pb-list">
        <li>La penicilina inhibe la síntesis de la pared bacteriana bloqueando la enzima transpeptidasa.</li>
        <li>El inhibidor de β-lactamasas bloquea las enzimas β-lactamasas que degradan la penicilina.</li>
        <li>Permite que la penicilina actúe sobre bacterias productoras de β-lactamasas, extendiendo su espectro.</li>
      </ul>

      <p className="pb-subtitle">📋 Indicaciones Principales</p>
      <ul className="pb-list">
        <li>Infecciones respiratorias bajas: neumonía, bronquitis</li>
        <li>Infecciones de piel y tejidos blandos</li>
        <li>Infecciones intraabdominales</li>
        <li>Infecciones urinarias complicadas</li>
        <li>Abscesos y otros procesos con bacterias productoras de β-lactamasas</li>
      </ul>

      <p className="pb-subtitle">💊 Ejemplos Comunes</p>
      <div className="pb-table-wrapper">
        <table className="pb-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Comentarios</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amoxicilina + Ácido clavulánico</td>
              <td>500/125 mg cada 8 h o 875/125 mg cada 12 h (vía oral)</td>
              <td>Ampliamente usado en infecciones respiratorias</td>
            </tr>
            <tr>
              <td>Ampicilina + Sulbactam</td>
              <td>1-2 g cada 6-8 h (vía parenteral)</td>
              <td>Uso hospitalario para infecciones graves</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="pb-subtitle">⚠️ Efectos Adversos</p>
      <ul className="pb-list">
        <li>Reacciones alérgicas: rash, urticaria, anafilaxia (raro pero grave)</li>
        <li>Gastrointestinales: diarrea, náuseas, vómitos</li>
        <li>Colitis asociada a antibióticos (Clostridioides difficile)</li>
        <li>Elevación transitoria de enzimas hepáticas</li>
      </ul>

      <p className="pb-subtitle">🔄 Contraindicaciones</p>
      <ul className="pb-list">
        <li>Hipersensibilidad a penicilinas o inhibidores de β-lactamasas</li>
        <li>Alergia severa previa a β-lactámicos</li>
        <li>Mononucleosis infecciosa (puede aumentar rash con amoxicilina)</li>
      </ul>

      <p className="pb-subtitle">📉 Interacciones Relevantes</p>
      <ul className="pb-list">
        <li>Incrementa efecto de anticoagulantes orales</li>
        <li>Reduce eficacia de anticonceptivos orales en algunos casos</li>
      </ul>

      <p className="pb-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="pb-list">
        <li>Administrar con alimentos para mejorar tolerancia gástrica</li>
        <li>Completar el tratamiento para evitar resistencias bacterianas</li>
        <li>Monitorizar signos de alergia durante el tratamiento</li>
        <li>Ajustar dosis en insuficiencia renal según indicación médica</li>
      </ul>
    </div>
  );
}

export default PenicilInhibidorBeta;
