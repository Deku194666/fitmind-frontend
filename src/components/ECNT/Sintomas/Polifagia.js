


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Polifagia.css';

function Polifagia() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail309">

      <p className="fxh-title">Polifagia</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>polifagia</strong> es un síntoma caracterizado por un
        aumento anormal del apetito o una sensación constante de hambre.
        Puede presentarse incluso después de haber ingerido alimentos y
        está asociada a diferentes trastornos metabólicos, hormonales o
        psicológicos.
      </p>

      <p className="fxh-subtitle">¿Qué es la polifagia? 🍽️</p>

      <ul className="fxh-list">
        <li>Aumento excesivo del apetito.</li>
        <li>Sensación constante de hambre.</li>
        <li>Necesidad frecuente de ingerir alimentos.</li>
        <li>Puede presentarse junto con otros síntomas metabólicos.</li>
      </ul>

      <p className="fxh-subtitle">Causas comunes ⚠️</p>

      <ul className="fxh-list">
        <li>Diabetes mellitus.</li>
        <li>Hipoglucemia.</li>
        <li>Trastornos hormonales.</li>
        <li>Estrés o ansiedad.</li>
        <li>Trastornos alimentarios.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas asociados</p>

      <ul className="fxh-list">
        <li>Hambre constante.</li>
        <li>Pérdida o aumento de peso.</li>
        <li>Fatiga o debilidad.</li>
        <li>Sed excesiva (polidipsia).</li>
        <li>Micción frecuente (poliuria).</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico</p>

      <ul className="fxh-list">
        <li>Evaluación clínica del paciente.</li>
        <li>Análisis de glucosa en sangre.</li>
        <li>Pruebas hormonales.</li>
        <li>Evaluación nutricional.</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento</p>

      <ul className="fxh-list">
        <li>Tratamiento de la causa subyacente.</li>
        <li>Control de los niveles de glucosa.</li>
        <li>Plan de alimentación equilibrado.</li>
        <li>Seguimiento médico o nutricional.</li>
      </ul>

      <p className="fxh-subtitle">Cuándo consultar al médico</p>

      <ul className="fxh-list">
        <li>Si el hambre es excesiva y persistente.</li>
        <li>Si se acompaña de sed intensa.</li>
        <li>Si hay cambios importantes en el peso.</li>
        <li>Si se presentan otros síntomas metabólicos.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        La <strong>polifagia</strong> es un síntoma que puede estar
        relacionado con diversas alteraciones del organismo,
        especialmente metabólicas o endocrinas. La evaluación médica
        permite identificar la causa y establecer el tratamiento
        adecuado para controlar el apetito excesivo.
      </p>

    </div>

  );

}

export default Polifagia;