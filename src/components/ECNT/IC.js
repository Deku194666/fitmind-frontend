import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './InsuficienciaCardiaca.css';

function InsuficienciaCardiaca() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail232">

      <p className="fxh-title">Insuficiencia Cardíaca (IC)</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>Insuficiencia Cardíaca (IC)</strong> es un síndrome clínico en el que el corazón no logra
        bombear sangre suficiente para cubrir las necesidades del organismo o lo hace a expensas de
        presiones de llenado elevadas. Es una causa importante de hospitalización y mortalidad,
        especialmente en personas mayores.  
      </p>

      <p className="fxh-subtitle">🧬 Fisiopatología</p>

      <ul className="fxh-list">
        <li><strong> - Disfunción sistólica:</strong> menor fracción de eyección (FE), contracción ineficaz.</li>
        <li><strong> - Disfunción diastólica:</strong> relajación/llenado alterados, presiones elevadas.</li>
        <li><strong> - Activación neurohormonal:</strong> sistema renina–angiotensina–aldosterona y simpático → retención de sodio/agua, vasoconstricción.</li>
        <li><strong> - Remodelado cardíaco:</strong> dilatación/hipertrofia que perpetúa el ciclo de IC.</li>
      </ul>

      <p className="fxh-subtitle">Clasificación</p>
      <p className="fxh-text">Por fracción de eyección (FE):</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IC con FE reducida (HFrEF)</td>
              <td>FE &lt; 40% — disfunción sistólica predominante.</td>
            </tr>
            <tr>
              <td>IC con FE levemente reducida (HFmrEF)</td>
              <td>FE 40–49% — fenotipo intermedio.</td>
            </tr>
            <tr>
              <td>IC con FE preservada (HFpEF)</td>
              <td>FE ≥ 50% — disfunción diastólica y rigidez ventricular.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-text">Por clase funcional (NYHA):</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Clase</th>
              <th>Limitación</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>I</td><td>Sin limitación de actividad física habitual.</td></tr>
            <tr><td>II</td><td>Leve limitación; síntomas con actividad moderada.</td></tr>
            <tr><td>III</td><td>Marcada limitación; síntomas con actividad leve.</td></tr>
            <tr><td>IV</td><td>Síntomas en reposo o con mínima actividad.</td></tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Causas ⚠️</p>
      <ul className="fxh-list">
        <li> - Cardiopatía isquémica: <Link to="/ecnt/iam">IAM</Link>.</li>
        <li> - <Link to="/ecnt/hipertension">Hipertensión arterial</Link> crónica.</li>
        <li> - <Link to="/ecnt/valvulopatias">Valvulopatías</Link>, miocardiopatías, miocarditis.</li>
        <li> - <Link to="/ecnt/arritmias">Arritmias</Link> persistentes.</li>
        <li> - Tóxicos/fármacos: alcohol, drogas, quimioterapia.</li>
        <li> - Trastornos endocrinos/metabólicos: <Link to="/ecnt/diabetes">Diabetes</Link>, tiroideos, <Link to="/ecnt/obesidad">Obesidad</Link>.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas frecuentes 🔍</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/sintomas/disnea">Disnea</Link> (esfuerzo, ortopnea, paroxística nocturna).</li>
        <li> - Fatiga, intolerancia al ejercicio.</li>
        <li> - Edemas en piernas, aumento de peso por retención hídrica.</li>
        <li> - Tos nocturna, plenitud abdominal, ascitis en casos avanzados.</li>
      </ul>

      <p className="fxh-subtitle">Signos de emergencia</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/sintomas/disnea">Disnea</Link> severa en reposo, saturación baja, <Link to="/ecnt/sintomas/cianosis">Cianosis</Link>.</li>
        <li> - Dolor torácico intenso o súbito (<Link to="/ecnt/iam">IAM</Link> asociado).</li>
        <li> - Hipotensión, confusión, oliguria — sospecha de shock cardiogénico.</li>
        <li><strong> - Edema pulmonar</strong> agudo: tos con espuma rosada, ansiedad marcada.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🧪</p>
      <ul className="fxh-list">
        <li> - Examen físico: ingurgitación yugular, estertores, edemas,  <Link to="/ecnt/hepatomegalia">Hepatomegalia</Link>.</li>
        <li> - <Link to="/examenes/ekg">Electrocardiograma (EKG)</Link> y <Link to="/examenes/radiografia">Radiografía</Link> de tórax.</li>
        <li> - <Link to="/examenes/ecg">Ecocardiograma</Link>: FE, estructura, <Link to="/ecnt/valvulopatia">Valvulopatías</Link>.</li>
        <li> - Biomarcadores: BNP/NT-proBNP, <Link to="/examenes2/hemograma"> Hemograma</Link>, electrolitos, función renal/hepática, TSH.</li>
        <li> - Pruebas funcionales, estrés o coronariografía en casos seleccionados.</li>
      </ul>

      <p className="fxh-subtitle">💊 Tratamiento</p>

      <p className="fxh-subsubtitle">1. Manejo agudo</p>
      <ul className="fxh-list">
        <li> - Oxígeno, posición sentada, monitorización.</li>
        <li> - Diuréticos IV (furosemida) para congestión.</li>
        <li> - Vasodilatadores seleccionados, control de presión/ritmo.</li>
        <li> - Tratar causa precipitante (<Link to="/ecnt/iam">IAM</Link>, FA rápida, infección, exceso de sal/líquidos).</li>
      </ul>

      <p className="fxh-subsubtitle">2. Manejo crónico</p>
      <ul className="fxh-list">
        <li><strong> - Bloqueo neurohormonal</strong>: <Link to="/farmacos/iecas">IECA</Link>/<Link to="/farmacos/araii"  > ARA II</Link>/ARNI, betabloqueadores, antagonistas de aldosterona.</li>
        <li><strong> - iSGLT2</strong> según indicación.</li>
        <li> - Diuréticos para control de volumen; educación en autorregulación.</li>
        <li> - Dispositivos: resincronización (TRC) y DAI según riesgo.</li>
        <li> - Manejo de comorbilidades: <Link to="/ecnt/hipertension">HTA</Link>, <Link to="/ecnt/diabetes">DM</Link>, FA, apnea del sueño.</li>
        <li> - HFpEF: control de comorbilidades, presión arterial, volumen, iSGLT2 y ejercicio supervisado.</li>
      </ul>

      <p className="fxh-subtitle">🧘‍♂️ Tratamiento no farmacológico</p>
      <ul className="fxh-list">
        <li> - Restricción moderada de sodio; control de líquidos.</li>
        <li> - Control de peso diario; educación para detectar descompensación.</li>
        <li> - Ejercicio/rehabilitación cardíaca según tolerancia.</li>
        <li> - Evitar tabaco, moderar alcohol; vacunas al día.</li>
      </ul>

      <p className="fxh-subtitle">🧨 Complicaciones</p>
      <ul className="fxh-list">
        <li> - Edema pulmonar agudo.</li>
        <li> - <Link to="/ecnt/acv">ACV</Link> (especialmente en FA no anticoagulada).</li>
        <li> - Trombosis/embolias, disfunción renal/hepática.</li>
        <li> - <Link to="/ecnt/arritmias">Arritmias</Link> y muerte súbita.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        La <strong>Insuficiencia Cardíaca</strong> requiere diagnóstico oportuno, optimización de tratamiento,
        autocuidado y control de comorbilidades. La educación, adherencia y seguimiento cercano reducen
        hospitalizaciones y mejoran la calidad de vida.
      </p>

    </div>
  );
}

export default InsuficienciaCardiaca;