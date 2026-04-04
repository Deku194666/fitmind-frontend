import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Parkinson.css';

function EnfermedadDeParkinson() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail233">

      <p className="fxh-title">Enfermedad de Parkinson (EP)</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>Enfermedad de Parkinson (EP)</strong> es un trastorno neurodegenerativo progresivo cuyo núcleo
        clínico son los <em>síntomas motores</em> (bradicinesia, rigidez, temblor de reposo, inestabilidad postural) y
        múltiples <em>síntomas no motores</em> (sueño, ánimo, cognición, autonómicos). Se asocia a pérdida de neuronas dopaminérgicas
        en la sustancia negra y acumulación de <em>α-sinucleína</em>.
      </p>

      <p className="fxh-subtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li>Degeneración de neuronas dopaminérgicas nigroestriatales → déficit de dopamina en ganglios basales.</li>
        <li>Cuerpos de Lewy (α-sinucleína) en regiones específicas del SNC, progresión rostro-caudal.</li>
        <li>Desbalance de circuitos motores → bradicinesia y rigidez.</li>
        <li>Afectación no dopaminérgica → síntomas no motores.</li>
      </ul>

      <p className="fxh-subtitle">Clasificación (estadificación Hoehn &amp; Yahr)</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Estadio</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>I</td><td>Unilateral, mínima discapacidad.</td></tr>
            <tr><td>II</td><td>Bilateral, sin inestabilidad postural.</td></tr>
            <tr><td>III</td><td>Inestabilidad postural leve-moderada; independiente.</td></tr>
            <tr><td>IV</td><td>Marcada limitación; requiere ayuda para algunas actividades.</td></tr>
            <tr><td>V</td><td>Confinado a silla/cama sin asistencia.</td></tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Causas y factores de riesgo ⚠️</p>
      <ul className="fxh-list">
        <li>Edad avanzada (inicio 60–70 años).</li>
        <li>Combinación de factores genéticos y ambientales.</li>
        <li>Exposición a pesticidas/solventes; traumatismos craneales repetidos.</li>
        <li>Historia familiar (minoría de casos).</li>
      </ul>

      <p className="fxh-subtitle">Síntomas</p>
      <p className="fxh-subsubtitle">🔧 Motores</p>
      <ul className="fxh-list">
        <li>Bradicinesia, rigidez, temblor de reposo, hipomimia, marcha festinante.</li>
        <li>Inestabilidad postural y caídas en etapas avanzadas.</li>
        <li>Micrografía, hipofonía, congelamiento de la marcha (“freezing”).</li>
      </ul>
      <p className="fxh-subsubtitle">🧩 No motores</p>
      <ul className="fxh-list">
        <li>Trastornos del sueño, fatiga.</li>
        <li>Ansiedad, depresión, apatía; deterioro cognitivo/demencia.</li>
        <li>Disautonomía: constipación, hipotensión ortostática, urgencia urinaria, sialorrea.</li>
        <li>Hiposmia, dolor, parestesias.</li>
      </ul>

      <p className="fxh-subtitle">Signos de emergencia</p>
      <ul className="fxh-list">
        <li>Caídas con traumatismo o incapacidad para levantarse.</li>
        <li>Confusión aguda, fiebre, rigidez severa (síndrome neuroléptico maligno).</li>
        <li>Aspiración, disfagia marcada o dificultad respiratoria.</li>
        <li>Cambios súbitos de conciencia o alucinaciones severas.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🧪</p>
      <ul className="fxh-list">
        <li>Clínico: bradicinesia + (temblor de reposo o rigidez) y respuesta a levodopa.</li>
        <li>Neuroimagen estructural para descartar otras causas; DAT-SPECT si dudoso.</li>
        <li>Evaluación de síntomas no motores y funcionalidad (escalas clínicas).</li>
      </ul>

      <p className="fxh-subtitle">💊 Tratamiento</p>
      <p className="fxh-subsubtitle">📌 Manejo farmacológico</p>
      <ul className="fxh-list">
        <li><strong>Levodopa/carbidopa</strong>: eficaz para síntomas motores; riesgo de fluctuaciones y discinesias.</li>
        <li>Agonistas dopaminérgicos, IMAO-B, COMT; amantadina para discinesias.</li>
        <li>Tratamiento de síntomas no motores (depresión, sueño, dolor, constipación).</li>
      </ul>

      <p className="fxh-subsubtitle">🛠️ Procedimientos</p>
      <ul className="fxh-list">
        <li>Estimulación cerebral profunda (DBS) en pacientes seleccionados.</li>
        <li>Bombas de infusión intestinal (levodopa) en casos específicos.</li>
      </ul>

      <p className="fxh-subsubtitle">🧘‍♂️ Manejo no farmacológico</p>
      <ul className="fxh-list">
        <li>Fisioterapia, terapia ocupacional, fonoaudiología.</li>
        <li>Nutrición adecuada; fibra/hidratación.</li>
        <li>Apoyo psicológico y educación del paciente/cuidador; manejo del estrés.</li>
        <li>Prevención de caídas: ayudas técnicas, adecuación del hogar.</li>
      </ul>

      <p className="fxh-subtitle">🧨 Complicaciones</p>
      <ul className="fxh-list">
        <li>Fluctuaciones motoras, discinesias inducidas por levodopa.</li>
        <li>Caídas, fracturas; congelamiento de la marcha.</li>
        <li>Neumonía aspirativa, infecciones intercurrentes.</li>
        <li>Trastornos cognitivos, psicosis, depresión/ansiedad.</li>
        <li>Problemas autonómicos graves.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        La <strong>Enfermedad de Parkinson</strong> requiere abordaje integral y personalizado: fármacos, rehabilitación,
        educación y soporte psicosocial. El seguimiento periódico permite ajustar terapias, prevenir complicaciones
        y mantener la mejor calidad de vida posible para el paciente y su entorno.
      </p>

    </div>
  );
}

export default EnfermedadDeParkinson;