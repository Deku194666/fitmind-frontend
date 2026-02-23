import React, { useEffect } from 'react';
import './AntagonistasMRA.css';

function AntagonistasMRA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <p className="fxh-title">
        Antagonistas de los Receptores Mineralocorticoides (MRA)
      </p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>MRA</strong> (Mineralocorticoid Receptor Antagonists), también conocidos como 
        <strong> antagonistas de la aldosterona</strong>, bloquean los efectos de esta hormona en el túbulo distal 
        de la nefrona. Suprimen la reabsorción de sodio y la excreción de potasio inducidas por aldosterona, 
        y poseen efectos cardiovasculares beneficiosos más allá del control del volumen.
      </p>

      <p className="fxh-subtitle">🔬 Mecanismo de Acción</p>
      <p className="fxh-text">
        Inhiben competitivamente los receptores de mineralocorticoides en el túbulo colector renal, evitando 
        los efectos de la aldosterona. Esto reduce la reabsorción de sodio y agua y disminuye la excreción 
        de potasio. También poseen propiedades antifibróticas y antiinflamatorias en tejido cardíaco y vascular.
      </p>

      <p className="fxh-subtitle">💊 Principales Fármacos</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis Típica</th>
              <th>Comentario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Espironolactona</td>
              <td>12.5–100 mg/día</td>
              <td>Puede causar ginecomastia por afinidad con receptores androgénicos</td>
            </tr>
            <tr>
              <td>Eplerenona</td>
              <td>25–50 mg/día</td>
              <td>Más selectivo, menor riesgo de efectos hormonales</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="fxh-list">
        <li>Insuficiencia cardíaca con fracción de eyección reducida (ICFER).</li>
        <li>Hipertensión resistente.</li>
        <li>Hiperaldosteronismo primario.</li>
        <li>Cirrosis hepática con ascitis.</li>
        <li>Síndrome nefrótico con retención de sodio.</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="fxh-list">
        <li>Hiperpotasemia.</li>
        <li>Insuficiencia renal.</li>
        <li>Ginecomastia y disfunción sexual (espironolactona).</li>
        <li>Hiponatremia.</li>
      </ul>

      <p className="fxh-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="fxh-list">
        <li>Monitorizar potasio y función renal antes y durante el tratamiento.</li>
        <li>Evitar si potasio &gt; 5.0 mEq/L o aclaramiento &lt; 30 ml/min.</li>
        <li>Preferir eplerenona si hay efectos hormonales adversos.</li>
        <li>Iniciar con precaución en pacientes con enfermedad renal.</li>
      </ul>

      <p className="fxh-subtitle">📚 Conclusión</p>
      <p className="fxh-text">
        Los <strong>MRA</strong> son esenciales en el tratamiento de la insuficiencia cardíaca y otras condiciones 
        con activación del sistema renina-angiotensina-aldosterona. Mejoran la supervivencia, 
        pero requieren monitoreo cercano por el riesgo de hiperpotasemia.
      </p>

    </div>
  );
}

export default AntagonistasMRA;
