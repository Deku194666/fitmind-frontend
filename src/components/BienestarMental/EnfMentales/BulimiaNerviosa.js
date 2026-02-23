import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BulimiaNerviosa.css';

function BulimiaNerviosa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Bulimia Nerviosa</p>

      <p className="fxh-subsubtitle">📌Introducción</p>
      <p className="fxh-text">
        La bulimia nerviosa es un trastorno alimentario caracterizado por <strong>episodios recurrentes de atracones</strong> 
        seguidos de <strong>conductas compensatorias</strong> (vómitos, laxantes, ejercicio excesivo). Afecta al <strong>1-3% de la población</strong>, 
        con un pico de inicio entre los <strong>15-25 años</strong> (90% mujeres). A diferencia de la anorexia, el 70% de pacientes tienen peso normal, 
        lo que dificulta su detección. Presenta alta comorbilidad con depresión (50-70%) y abuso de sustancias (30%).
      </p>

      <p className="fxh-subsubtitle">🧠 Subtipos Clínicos</p>
      <ul className="fxh-list">
        <li><strong>Purgativo:</strong> Uso regular de vómitos/laxantes/diuréticos (80% de casos).</li>
        <li><strong>No purgativo:</strong> Compensación mediante ayuno o ejercicio excesivo (menos común).</li>
        <li><strong>Mixto:</strong> Alternancia entre métodos purgativos y no purgativos.</li>
      </ul>

      <p className="fxh-subsubtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li><strong>Desregulación serotoninérgica:</strong> Niveles bajos de 5-HT predisponen a impulsividad.</li>
        <li><strong>Alteraciones en el circuito de recompensa:</strong> Hiperactivación del núcleo accumbens durante atracones.</li>
        <li><strong>Desequilibrio electrolítico:</strong> Hipokalemia e hipocloremia por purgas recurrentes.</li>
        <li><strong>Adaptación gástrica:</strong> Retraso en el vaciamiento por vómitos crónicos.</li>
      </ul>

      <p className="fxh-subsubtitle">📌 Factores de Riesgo</p>
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
              <td>Polimorfismos en genes 5-HTT y COMT</td>
              <td>Impulsividad alta</td>
              <td>Dietas restrictivas previas</td>
            </tr>
            <tr>
              <td>Antecedentes familiares de TCA</td>
              <td>Perfeccionismo disfuncional</td>
              <td>Presión social por delgadez</td>
            </tr>
            <tr>
              <td>Comorbilidad con TDAH (20%)</td>
              <td>Dificultad regulación emocional</td>
              <td>Abuso sexual en la infancia</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subsubtitle">🚨 Criterios Diagnósticos (DSM-5)</p>
      <p className="fxh-text"><strong>💡 Requisitos:</strong></p>
      <ul className="fxh-list">
        <li><strong>Atracones recurrentes:</strong> Ingesta de mayor que 2,000 kcal en menor a 2h con sensación de pérdida de control.</li>
        <li><strong>Conductas compensatorias:</strong> ≥1 vez/semana durante 3 meses.</li>
        <li><strong>Autoevaluación influenciada:</strong> Por el peso/figura corporal.</li>
        <li><strong>No exclusivo:</strong> De anorexia nerviosa.</li>
      </ul>

      <p className="fxh-subsubtitle">🩺 Evaluación Clínica</p>
      <p className="fxh-text"><strong>1. Exámenes Esenciales:</strong></p>
      <ul className="fxh-list">
        <li><strong>Electrolitos séricos:</strong> K+ menor que 3.0 mEq/L requiere hospitalización.</li>
        <li><strong>Amilasa salival:</strong> Elevada en vómitos crónicos.</li>
        <li><strong>Evaluación dental:</strong> Erosión del esmalte (pH bucal menor que 5.0).</li>
      </ul>

      <p className="fxh-text"><strong>2. Escalas Validadas:</strong></p>
      <ul className="fxh-list">
        <li><strong>EDI-3:</strong> Subescalas de bulimia e insatisfacción corporal.</li>
        <li><strong>BULIT-R:</strong> Específica para síntomas bulímicos.</li>
      </ul>

      <p className="fxh-subsubtitle">💊 Tratamiento Basado en Evidencia</p>
      <p className="fxh-text"><strong>🔴 Intervenciones Médicas:</strong></p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Ámbito</th>
              <th>Intervención</th>
              <th>Detalles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Farmacológico</td>
              <td>Fluoxetina (60 mg/día)</td>
              <td>Único fármaco aprobado por FDA para BN</td>
            </tr>
            <tr>
              <td>Nutricional</td>
              <td>Plan de 3 comidas + 2 snacks</td>
              <td>Evitar períodos mayor a 4h sin comer</td>
            </tr>
            <tr>
              <td>Urgencias</td>
              <td>Corrección de hipokalemia</td>
              <td>KCl IV si K+ menor 2.5 mEq/L</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-text"><strong>🟢 Psicoterapias Efectivas:</strong></p>
      <ul className="fxh-list">
        <li><strong>TCC específica para BN:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Fase 1: Psicoeducación y normalización alimentaria.</li>
            <li>Fase 2: Exposición gradual a alimentos "prohibidos".</li>
            <li>Fase 3: Prevención de recaídas.</li>
          </ul>
        </li>
        <li><strong>DBT (Terapia Dialéctico-Conductual):</strong> Manejo de emociones intensas sin atracones.</li>
        <li><strong>Terapia Interpersonal:</strong> Para casos con relaciones problemáticas.</li>
      </ul>

      <p className="fxh-subsubtitle">🌱 Manejo del Ciclo Atracón-Purga</p>
      <ul className="fxh-list">
        <li><strong>Registro alimentario:</strong> Anotar hora, alimento, emoción y contexto.</li>
        <li><strong>Demora progresiva:</strong> Aumentar tiempo entre atracón y purga (inicial 15 min).</li>
        <li><strong>Exposición con prevención:</strong> Comer alimentos temidos sin purgar.</li>
      </ul>

      <p className="fxh-text"><strong>🚨 Complicaciones Médicas:</strong></p>
      <ul className="fxh-list">
        <li><strong>Gastrointestinales:</strong> Esofagitis, síndrome de Mallory-Weiss.</li>
        <li><strong>Cardíacas:</strong> Arritmias por hipokalemia.</li>
        <li><strong>Endocrinas:</strong> Amenorrea secundaria (30% de casos).</li>
      </ul>

      <p className="fxh-subsubtitle">📌Pronóstico</p>
      <p className="fxh-text">
        Con tratamiento, <strong>50-70% logran remisión sostenida</strong> a 5 años. Factores de buen pronóstico incluyen: inicio temprano
        del tratamiento, ausencia de abuso de sustancias y buen apoyo social. La mortalidad es del 2-3% (por arritmias o suicidio). 
        La <strong>TCC tiene una eficacia del 60%</strong> en reducir conductas purgativas a los 6 meses.
      </p>
    </div>
  );
}

export default BulimiaNerviosa;
