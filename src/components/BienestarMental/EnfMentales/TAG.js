import React, { useEffect } from 'react';
import './TAG.css';

function TAG() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className='fxh-title'>Trastorno de Ansiedad Generalizada (TAG)</p>

      <p className='fxh-subtitle'>📌 Introducción</p>
      <p className='fxh-text'>
        El <strong>TAG</strong> es un trastorno de ansiedad caracterizado por preocupación excesiva y persistente (≥6 meses) sobre diversos aspectos de la vida (salud, trabajo, relaciones), incluso sin motivos reales. Afecta al 3-5% de la población mundial (OMS) y es más común en mujeres. A diferencia del estrés normal, el TAG interfiere severamente en la vida diaria y se acompaña de síntomas físicos.
      </p>

      <p className='fxh-subsubtitle'>🧠 Tipos de Ansiedad Relacionados</p>
      <ul className='fxh-list'>
        <li><strong>TAG puro:</strong> Preocupación crónica sin desencadenantes específicos.</li>
        <li><strong>TAG + somatización:</strong> Ansiedad con síntomas físicos predominantes (dolor, fatiga).</li>
        <li><strong>TAG comórbido:</strong> Asociado a depresión u otros trastornos de ansiedad.</li>
      </ul>

      <p className='fxh-subsubtitle'>🧬 Fisiopatología</p>
      <ul className='fxh-list'>
        <li><strong>Desequilibrio neuroquímico:</strong> GABA ↓ (neurotransmisor calmante), Noradrenalina y serotonina alteradas.</li>
        <li><strong>Hiperactividad cerebral:</strong> Amígdala (miedo) sobreactivada, Corteza prefrontal (regulación emocional) menos eficiente.</li>
      </ul>

      <p className='fxh-subsubtitle'>📌 Factores de Riesgo</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Biológicos</th>
              <th>Psicológicos</th>
              <th>Ambientales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Genética (30-50% herencia)</td>
              <td>Perfeccionismo</td>
              <td>Estrés crónico (laboral, familiar)</td>
            </tr>
            <tr>
              <td>Alteraciones en el eje HPA (cortisol)</td>
              <td>Intolerancia a la incertidumbre</td>
              <td>Trauma infantil</td>
            </tr>
            <tr>
              <td>Enfermedades crónicas (tiroides)</td>
              <td>Sesgo atencional (hacia amenazas)</td>
              <td>Acontecimientos vitales estresantes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subsubtitle'>🚨 Síntomas Clave (DSM-5)</p>
      <p className='fxh-text'><strong>💡 Criterios diagnósticos:</strong></p>
      <ul className='fxh-list'>
        <li>Ansiedad y preocupación excesiva ≥6 meses.</li>
        <li>Dificultad para controlar la preocupación.</li>
        <li><strong>3+ de estos síntomas:</strong> Inquietud o nerviosismo, Fatiga fácil, Dificultad para concentrarse, Irritabilidad, Tensión muscular, Alteraciones del sueño.</li>
      </ul>

      <p className='fxh-subsubtitle'>🩺 Diagnóstico</p>
      <p className='fxh-text'>1. Evaluación Clínica:</p>
      <ul className='fxh-list'>
        <li>Entrevista estructurada (GAD-7, escala de ansiedad).</li>
        <li>Descarte de condiciones médicas (hipertiroidismo, cardiopatías).</li>
      </ul>

      <p className='fxh-text'>2. Escalas Validadas:</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Test</th>
              <th>Qué Mide</th>
              <th>Puntaje</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GAD-7</td>
              <td>Severidad de ansiedad</td>
              <td>0-21</td>
            </tr>
            <tr>
              <td>STAI</td>
              <td>Ansiedad estado/rasgo</td>
              <td>20-80</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-text'>3. Exámenes Complementarios:</p>
      <ul className='fxh-list'>
        <li><strong>Analítica sanguínea:</strong> cortisol, hormonas tiroideas</li>
      </ul>

      <p className='fxh-subsubtitle'>💊 Tratamiento Médico</p>
      <p className='fxh-text'>🔴 Farmacológico:</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Clase</th>
              <th>Ejemplos</th>
              <th>Mecanismo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ISRS</td>
              <td>Sertralina, Escitalopram</td>
              <td>↑ Serotonina</td>
            </tr>
            <tr>
              <td>IRSN</td>
              <td>Venlafaxina</td>
              <td>↑ Serotonina + Noradrenalina</td>
            </tr>
            <tr>
              <td>Benzodiacepinas</td>
              <td>Alprazolam (solo corto plazo)</td>
              <td>Potencian GABA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-text'>🟢 No Farmacológico:</p>
      <ul className='fxh-list'>
        <li><strong>TCC:</strong> Reestructuración de pensamientos, Exposición gradual a preocupaciones.</li>
        <li><strong>Mindfulness:</strong> Reducción del 30% en síntomas con 8 semanas de práctica.</li>
        <li><strong>Biofeedback:</strong> Entrenamiento para controlar respuestas fisiológicas (frecuencia cardíaca, tensión muscular).</li>
      </ul>

      <p className='fxh-subsubtitle'>🌱 Prevención y Manejo</p>
      <ul className='fxh-list'>
        <li>Ejercicio aeróbico (libera endorfinas).</li>
        <li>Técnicas de respiración diafragmática (4-7-8).</li>
        <li>Exposición a luz solar.</li>
      </ul>

      <p className='fxh-text'>🧘‍♂️ Técnicas de Autogestión:</p>
      <ul className='fxh-list'>
        <li>"Diario de preocupaciones": escribirlas y posponerlas a un "momento de preocupación" programado.</li>
        <li>Lista de "peores escenarios" para confrontar miedos irracionales.</li>
      </ul>

      <p className='fxh-text'>🚨 Señales de Alerta:</p>
      <ul className='fxh-list'>
        <li>Evitar actividades por miedo excesivo.</li>
        <li>Síntomas físicos persistentes (mareos, taquicardias).</li>
        <li>Consumo de sustancias para "automedicarse".</li>
      </ul>

      <p className='fxh-subtitle'>📌 Conclusión</p>
      <p className='fxh-text'>
        El <strong>TAG</strong> es un trastorno multifactorial con bases biológicas y psicológicas, pero altamente tratable. La combinación de medicación + TCC tiene una eficacia del 70-80%. La psicoeducación y la detección temprana son clave para evitar complicaciones (ej.: depresión secundaria).
      </p>
    </div>
  );
}

export default TAG;
