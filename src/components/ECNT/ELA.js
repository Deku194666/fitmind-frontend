

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ELA.css';

function ELA() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail236">

      <p className="fxh-title">Esclerosis Lateral Amiotrófica (ELA)</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        La <strong>Esclerosis Lateral Amiotrófica (ELA)</strong> es una enfermedad neurodegenerativa progresiva que afecta 
        las neuronas motoras superiores e inferiores, provocando debilidad muscular, espasticidad, fasciculaciones y 
        atrofia muscular. Suele preservar la función cognitiva, pero impacta severamente la autonomía y calidad de vida.
      </p>

      <p className="fxh-subsubtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li>Pérdida progresiva de motoneuronas en corteza motora, tronco cerebral y médula espinal.</li>
        <li>Degeneración de axones y pérdida de sinapsis musculares → debilidad y atrofia.</li>
        <li>Acumulación anormal de proteínas (TDP-43, SOD1) en células neuronales.</li>
        <li>Inflamación y estrés oxidativo contribuyen a progresión rápida.</li>
      </ul>

      <p className="fxh-subsubtitle">Síntomas frecuentes 🔍</p>
      <ul className="fxh-list">
        <li>Debilidad progresiva en extremidades superiores e inferiores.</li>
        <li>Dificultad para hablar, tragar y respirar.</li>
        <li>Fasciculaciones (temblores musculares finos) y calambres.</li>
        <li>Pérdida de masa muscular y movilidad reducida.</li>
      </ul>

      <p className="fxh-subtitle">🧨 Signos de emergencia</p>
      <ul className="fxh-list">
        <li>🚨 Insuficiencia respiratoria aguda o progresiva.</li>
        <li>🚨 Disfagia grave con riesgo de aspiración.</li>
        <li>🚨 Debilidad extrema que limita funciones básicas (baño, alimentación).</li>
      </ul>

      <p className="fxh-subtitle">🧪 Diagnóstico</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Prueba / Evaluación</th>
              <th>Propósito</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Electromiografía (EMG)</td>
              <td>Detecta desmielinización y actividad fasciculante de músculos afectados.</td>
            </tr>
            <tr>
              <td>Resonancia magnética (RMN)</td>
              <td>Descarta otras causas de debilidad progresiva.</td>
            </tr>
            <tr>
              <td>Evaluación clínica</td>
              <td>Identificación de debilidad, atrofia, espasticidad y reflejos patológicos.</td>
            </tr>
            <tr>
              <td>Criterios de El Escorial</td>
              <td>Confirma diagnóstico de ELA mediante hallazgos clínicos y electromiográficos.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💊 Tratamiento</p>
      <ul className="fxh-list">
        <li>Riluzol: ralentiza progresión de enfermedad.</li>
        <li>Edaravona: antioxidante que reduce daño neuronal en fases seleccionadas.</li>
        <li>Ventilación no invasiva: soporte respiratorio en debilidad diafragmática.</li>
        <li>Terapias de rehabilitación: fisioterapia, terapia ocupacional y logopedia.</li>
        <li>Soporte nutricional y cuidados paliativos según necesidades.</li>
      </ul>

      <p className="fxh-subtitle">🌿 Enfoque Integral</p>
      <ul className="fxh-list">
        <li>Apoyo familiar y emocional para paciente y cuidadores.</li>
        <li>Adaptaciones en el hogar y ayudas técnicas para movilidad.</li>
        <li>Monitoreo respiratorio y nutricional continuo.</li>
        <li>Atención multidisciplinaria para mejorar calidad de vida.</li>
      </ul>

      <p className="fxh-subtitle">📌 Conclusión</p>
      <p className="fxh-text">
        La <strong>ELA</strong> es una enfermedad progresiva sin cura, pero con manejo integral y multidisciplinario se puede 
        mejorar la funcionalidad y calidad de vida del paciente. El diagnóstico precoz, tratamiento farmacológico, soporte 
        respiratorio y rehabilitación son claves en su abordaje.
      </p>

    </div>
  );
}

export default ELA;