import React, { useEffect } from 'react';
import './Cefalosporinas.css'; 

function Cefalosporinas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ce-detail">
      <p className="ce-title">Cefalosporinas</p>

      <p className="ce-subtitle">📌 Introducción</p>
      <p className="ce-text">
        Las <strong>Cefalosporinas</strong> de segunda y tercera generación son antibióticos beta-lactámicos con amplio espectro de acción, 
        utilizados frecuentemente para el tratamiento de infecciones respiratorias, urinarias y de piel, entre otras. La tercera generación 
        tiene mayor actividad contra bacterias gram negativas y mejor penetración en tejidos.
      </p>

      <p className="ce-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="ce-list">
        <li>Inhiben la síntesis de la pared bacteriana al unirse a las proteínas ligadoras de penicilina (PLP).</li>
        <li>Provocan lisis y muerte bacteriana (bactericidas).</li>
        <li>Mayor resistencia a las beta-lactamasas que las penicilinas.</li>
      </ul>

      <p className="ce-subtitle">📋 Indicaciones Principales</p>
      <ul className="ce-list">
        <li>Infecciones respiratorias: neumonía, bronquitis bacteriana</li>
        <li>Infecciones urinarias</li>
        <li>Infecciones de piel y tejidos blandos</li>
        <li>Infecciones intraabdominales (tercer generación)</li>
        <li>Profilaxis quirúrgica (segunda generación)</li>
      </ul>

      <p className="ce-subtitle">💊 Ejemplos Comunes</p>
      <div className="ce-table-wrapper">
        <table className="ce-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Vida media</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cefuroxima</td>
              <td>250-500 mg cada 12 h</td>
              <td>1-1.5 horas</td>
            </tr>
            <tr>
              <td>Cefaclor</td>
              <td>250-500 mg cada 8 h</td>
              <td>0.5-1 hora</td>
            </tr>
            <tr>
              <td>Ceftriaxona</td>
              <td>1-2 g cada 24 h</td>
              <td>6-9 horas</td>
            </tr>
            <tr>
              <td>Cefotaxima</td>
              <td>1-2 g cada 6-8 h</td>
              <td>1 hora</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="ce-subtitle">⚠️ Efectos Adversos</p>
      <ul className="ce-list">
        <li>Reacciones alérgicas: rash, prurito, anafilaxia (raro)</li>
        <li>Alteraciones gastrointestinales: diarrea, náuseas</li>
        <li>Colitis pseudomembranosa (por alteración de la microbiota)</li>
        <li>Alteraciones hematológicas (trombocitopenia, leucopenia) en casos raros</li>
        <li>Reacciones locales en sitio de inyección (ceftriaxona, cefotaxima)</li>
      </ul>

      <p className="ce-subtitle">🔄 Contraindicaciones</p>
      <ul className="ce-list">
        <li>Hipersensibilidad a cefalosporinas o penicilinas</li>
        <li>Encefalopatía en insuficiencia renal grave (ajustar dosis)</li>
      </ul>

      <p className="ce-subtitle">📉 Interacciones Relevantes</p>
      <ul className="ce-list">
        <li>Potencian efecto anticoagulante de warfarina</li>
        <li>Interacciones con diuréticos y aminoglucósidos (toxicidad renal)</li>
        <li>Probenecid puede aumentar niveles plasmáticos</li>
      </ul>

      <p className="ce-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="ce-list">
        <li>Ajustar dosis en insuficiencia renal</li>
        <li>Monitorear función renal y hematológica en tratamientos prolongados</li>
        <li>Evitar uso en pacientes con alergia conocida a beta-lactámicos</li>
        <li>Administrar preferentemente por vía parenteral en infecciones graves (3ª generación)</li>
      </ul>
    </div>
  );
}

export default Cefalosporinas;
