import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Ateroesclerosis.css';

function Ateroesclerosis() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail237">

      <p className="fxh-title">Ateroesclerosis</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        La <strong>Ateroesclerosis</strong> es un proceso crónico en el que se acumulan lípidos,
        células inflamatorias y tejido fibroso en la pared de las arterias formando <em>placas</em>.
        Estas placas pueden estrechar u obstruir el flujo sanguíneo y romperse, causando trombosis.
        Es la base de la mayoría de las <strong>Enfermedades Cardiovasculares  </strong> 
         (<Link to="/ecnt/iam">Infarto Agudo al Miocardio (IAM)</Link>, 
          <Link to="/ecnt/acv"> Accidente CerebroVascular (ACV)</Link>, 
         <strong> Enfermedad Arterial Periférica</strong>).
      </p>

      <p className="fxh-subsubtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li><strong>Disfunción endotelial</strong> por factores de riesgo (<Link to="/ecnt/hipertension">Hipertensión Arterial</Link>, tabaquismo, hiperglucemia).</li>
        <li><strong>Acúmulo de LDL</strong> en íntima arterial y oxidación lipídica.</li>
        <li><strong>Inflamación</strong>: entrada de monocitos/macrófagos → células espumosas.</li>
        <li><strong>Placa fibroateromatosa</strong>: núcleo lipídico + capa fibrosa.</li>
        <li><strong>Rotura/erosión</strong> de placa → trombo agudo y oclusión.</li>
      </ul>

      <p className="fxh-subsubtitle">Clasificación (por territorio afectado)</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Territorio</th>
              <th>Manifestaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coronario</td>
              <td>Angina, <Link to="/ecnt/iam">Infarto Agudo al Miocardio</Link></td>
            </tr>
            <tr>
              <td>Cerebrovascular</td>
              <td>AIT / <Link to="/ecnt/acv">ACV isquémico</Link></td>
            </tr>
            <tr>
              <td>Periférico</td>
              <td>Claudicación intermitente, dolor en reposo, úlceras</td>
            </tr>
            <tr>
              <td>Aorta</td>
              <td>Aneurisma/rotura; placas ulceradas</td>
            </tr>
            <tr>
              <td>Renal</td>
              <td>Estenosis de arteria renal, HTA resistente</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subsubtitle">Causas y Factores de Riesgo ⚠️</p>
      <ul className="fxh-list">
        <li><Link to="/ecnt/dislipidemia">Dislipidemia</Link> (LDL alto, HDL bajo, hipertrigliceridemia)</li>
        <li><Link to="/ecnt/hipertension">Hipertensión arterial</Link></li>
        <li><Link to="/ecnt/diabetes">Diabetes mellitus</Link>, resistencia a la insulina</li>
        <li>Tabaquismo (activo y pasivo)</li>
        <li><Link to="/ecnt/obesidad">Obesidad</Link>, sedentarismo, dieta alta en ultraprocesados y sodio</li>
        <li>Edad, sexo masculino pospuberal, menopausia, historia familiar precoz</li>
        <li>Enfermedad renal crónica, inflamación crónica</li>
      </ul>

      <p className="fxh-subsubtitle">Síntomas frecuentes 🔍</p>
      <p className="fxh-text">
        Puede ser <strong>asintomática</strong> durante años. Se manifiesta según el territorio: dolor torácico con esfuerzo,
        claudicación de pantorrillas al caminar, episodios neurológicos focales transitorios (AIT), disfunción eréctil.
      </p>

      <p className="fxh-subsubtitle">Signos de emergencia (actuar rápido)</p>
      <ul className="fxh-list">
        <li>🚨 Dolor torácico opresivo prolongado → sospecha de <Link to="/ecnt/iam">IAM</Link></li>
        <li>🚨 Déficit neurológico súbito → <Link to="/ecnt/acv">ACV</Link></li>
        <li>🚨 Dolor de pierna en reposo con palidez/frialdad → isquemia crítica</li>
        <li>🚨 Dolor abdominal/lumbar súbito intenso → aneurisma aórtico roto</li>
      </ul>

      <p className="fxh-subsubtitle">Diagnóstico 🧪</p>
      <ul className="fxh-list">
        <li>Perfil lipídico (LDL, HDL, TG), glicemia/HbA1c, función renal</li>
        <li>Índice tobillo-brazo (ITB) en sospecha periférica</li>
        <li>Ecografía Doppler, angio-TC/RM, ecografía carotídea</li>
        <li>Estratificación de riesgo global (SCORE/Framingham) y calcio coronario</li>
      </ul>

      <p className="fxh-subsubtitle">💊 Tratamiento</p>
      <p className="fxh-text"><strong>1. Control de factores de riesgo</strong></p>
      <ul className="fxh-list">
        <li>Estatinas (reducción de LDL); considerar ezetimiba/PCSK9 en alto riesgo</li>
        <li>Control de <Link to="/ecnt/hipertension">HTA</Link> y <Link to="/ecnt/diabetes">DM</Link> según guías</li>
        <li>Antiagregación plaquetaria (aspirina) en prevención secundaria</li>
        <li>Cese tabáquico, manejo de peso y actividad física regular</li>
      </ul>

      <p className="fxh-text"><strong>2. Revascularización</strong> (según territorio/síntomas)</p>
      <ul className="fxh-list">
        <li>Angioplastia con stent (coronaria, periférica) o cirugía de bypass</li>
        <li>Endarterectomía carotídea o stent en estenosis significativa</li>
      </ul>

      <p className="fxh-subsubtitle">🧘‍♂️ Tratamiento no farmacológico</p>
      <ul className="fxh-list">
        <li>Dieta cardioprotectora (Mediterránea/DASH): rica en frutas, verduras, fibra, omega-3</li>
        <li>Ejercicio aeróbico + fuerza 150–300 min/sem si es posible</li>
        <li>Reducción de sodio; evitar ultraprocesados y grasas trans</li>
        <li>Manejo del estrés y sueño adecuado</li>
      </ul>

      <p className="fxh-subsubtitle">🧨 Complicaciones</p>
      <ul className="fxh-list">
        <li><Link to="/ecnt/iam">Infarto de miocardio</Link>, angina inestable</li>
        <li><Link to="/ecnt/acv">ACV isquémico</Link> y AIT</li>
        <li>Isquemia crítica de extremidades, amputación</li>
        <li>Aneurisma/rotura aórtica, embolia periférica</li>
      </ul>

      <p className="fxh-subtitle">📌 Conclusión</p>
      <p className="fxh-text">
        La <strong>Ateroesclerosis</strong> es prevenible y tratable. El control intensivo de factores de riesgo,
        cambios de estilo de vida y terapias dirigidas reducen eventos mayores y mejoran la calidad y expectativa de vida.
        La detección precoz y el seguimiento estructurado son clave.
      </p>

    </div>
  );
}

export default Ateroesclerosis;