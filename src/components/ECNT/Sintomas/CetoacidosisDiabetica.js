


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CetoacidosisDiabetica.css';

function CetoacidosisDiabetica() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail316">

      <p className="fxh-title">Cetoacidosis Diabética</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>cetoacidosis diabética</strong> es una complicación aguda grave de la diabetes,
        caracterizada por hiperglucemia, acidosis metabólica y producción excesiva de cuerpos cetónicos.
      </p>

      <p className="fxh-subtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li> - Déficit de insulina.</li>
        <li> - Aumento de glucosa en sangre.</li>
        <li> - Lipólisis y producción de cetonas.</li>
        <li> - Acidosis metabólica.</li>
      </ul>

      <p className="fxh-subtitle">Causas ⚠️</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/diabetes">Diabetes tipo 1</Link>.</li>
        <li> - Infecciones.</li>
        <li> - Suspensión de insulina.</li>
        <li> - Estrés físico o cirugía.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas 🔍</p>
      <ul className="fxh-list">
        <li> - Poliuria y polidipsia.</li>
        <li> - Náuseas y vómitos.</li>
        <li> - Dolor abdominal.</li>
        <li> - Respiración de Kussmaul.</li>
        <li> - Aliento cetónico.</li>
      </ul>

      <p className="fxh-subtitle">🚨 Signos de alarma</p>
      <ul className="fxh-list">
        <li> - Alteración de conciencia.</li>
        <li> - Deshidratación severa.</li>
        <li> - Hipotensión.</li>
        <li> - Shock.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🧪</p>
      <ul className="fxh-list">
        <li> - Glucosa elevada.</li>
        <li> - Cetonas en sangre/orina.</li>
        <li> - Gasometría arterial.</li>
        <li> - Electrolitos séricos.</li>
      </ul>

      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-flex">

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Manejo inicial</p>
          <ul className="fxh-list">
            <li> - Hidratación intravenosa.</li>
            <li> - Insulina IV.</li>
            <li> - Corrección de electrolitos.</li>
          </ul>
        </div>

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Seguimiento</p>
          <ul className="fxh-list">
            <li> - Monitoreo de glucosa.</li>
            <li> - Control de potasio.</li>
            <li> - Tratamiento de la causa.</li>
          </ul>
        </div>

      </div>

      <p className="fxh-subtitle">Complicaciones</p>
      <ul className="fxh-list">
        <li> - Edema cerebral.</li>
        <li> - <Link to="/ecnt/arritmias">Arritmias</Link>.</li>
        <li> - Insuficiencia renal.</li>
        <li> - Muerte.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        La cetoacidosis diabética es una emergencia médica que requiere tratamiento inmediato.
        Un manejo oportuno reduce significativamente la mortalidad y las complicaciones.
      </p>

    </div>
  );
}

export default CetoacidosisDiabetica;