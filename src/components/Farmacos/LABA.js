import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LABA.css';

function LABA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="laba-detail">

      <p className="laba-title">Agonistas β2 de Acción Prolongada (LABA)</p>

      <p className="laba-subtitle">📌 Introducción</p>
      <p className="laba-text">
        Los <strong>LABA</strong> son broncodilatadores de acción prolongada utilizados como tratamiento de mantenimiento en 
        enfermedades respiratorias como <Link to="/ecnt/asma">Asma</Link> y <Link to="/ecnt/enfermedadpulmonarobstructivacronica">EPOC</Link>.
        Actúan estimulando los receptores β2 del músculo liso bronquial, produciendo una broncodilatación sostenida por 12 a 24 horas.
      </p>

      <p className="laba-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="laba-list">
        <li>Activan de forma selectiva los receptores β2 adrenérgicos en el árbol bronquial.</li>
        <li>Inducen relajación del músculo liso bronquial.</li>
        <li>Reducen la hiperreactividad bronquial.</li>
        <li>No tienen efectos antiinflamatorios significativos.</li>
      </ul>

      <p className="laba-subtitle">📋 Indicaciones Principales</p>
      <ul className="laba-list">
        <li>Asma persistente (en combinación con corticosteroides inhalados)</li>
        <li>EPOC moderada a severa</li>
        <li>Broncoespasmo recurrente nocturno</li>
        <li>Prevención de síntomas respiratorios persistentes</li>
      </ul>

      <p className="laba-subtitle">💊 Ejemplos Comunes</p>
      <div className="laba-table-wrapper">
        <table className="laba-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Duración de acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Salmeterol</td>
              <td>50 mcg cada 12 h (inhalado)</td>
              <td>≈ 12 horas</td>
            </tr>
            <tr>
              <td>Formoterol</td>
              <td>12-24 mcg cada 12 h (inhalado)</td>
              <td>≈ 12 horas</td>
            </tr>
            <tr>
              <td>Indacaterol</td>
              <td>150-300 mcg cada 24 h (inhalado)</td>
              <td>≈ 24 horas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="laba-subtitle">⚠️ Efectos Adversos</p>
      <ul className="laba-list">
        <li><strong>Taquicardia</strong></li>
        <li><strong>Temblor</strong></li>
        <li><strong>Palpitaciones</strong></li>
        <li><strong>Hipokalemia</strong></li>
        <li><strong>Insomnio</strong></li>
        <li><strong>Dolor de cabeza</strong></li>
      </ul>

      <p className="laba-subtitle">🔄 Contraindicaciones</p>
      <ul className="laba-list">
        <li>Monoterapia en el asma (riesgo de exacerbaciones graves)</li>
        <li>Hipersensibilidad al principio activo</li>
        <li>Precaución en pacientes con arritmias o enfermedades cardiovasculares</li>
      </ul>

      <p className="laba-subtitle">📉 Interacciones Relevantes</p>
      <ul className="laba-list">
        <li>Con β-bloqueadores: antagonismo farmacológico</li>
        <li>Con otros simpaticomiméticos: riesgo de efectos cardiovasculares</li>
        <li>Con diuréticos y corticosteroides: mayor riesgo de hipokalemia</li>
      </ul>

      <p className="laba-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="laba-list">
        <li>Usar siempre en combinación con corticosteroides inhalados en asma</li>
        <li>No usar para alivio rápido de síntomas (no sustituye a SABA)</li>
        <li>Supervisar la frecuencia cardíaca en pacientes con enfermedad cardíaca</li>
        <li>Revaluar periódicamente la necesidad del tratamiento a largo plazo</li>
      </ul>

    </div>
  );
}

export default LABA;
