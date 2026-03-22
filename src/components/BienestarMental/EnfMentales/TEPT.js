import React, { useEffect } from 'react';
import './TEPT.css';

function TEPT() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail24">

      <p className="fxh-title">
        Trastorno de Estrés Postraumático (TEPT)
      </p>

      <p className="fxh-subsubtitle">📌 Introducción</p>
      <p className="fxh-text">
        El TEPT es un trastorno que afecta aproximadamente al 
        <strong> 3.5% de la población adulta</strong>. 
        Se desarrolla tras experimentar eventos traumáticos y se caracteriza por 
        <strong> reviviscencia</strong>, <strong> evitación</strong> y 
        <strong> hiperactivación</strong> persistente.
      </p>

      {/* ================= SINTOMATOLOGÍA ================= */}

      <p className="fxh-subtitle">Sintomatología Clínica (DSM-5)</p>
      <ul className="fxh-list">
        <li><strong>Síntomas intrusivos:</strong> Flashbacks, pesadillas.</li>
        <li><strong>Evitación persistente:</strong> De estímulos asociados al trauma.</li>
        <li><strong>Alteraciones cognitivas:</strong> Culpa, vergüenza.</li>
        <li><strong>Hiperactivación:</strong> Hipervigilancia, irritabilidad.</li>
      </ul>

      {/* ================= BASES NEURO ================= */}

      <p className="fxh-subtitle">🧠 Bases Neurobiológicas</p>
      <ul className="fxh-list">
        <li><strong>Amígdala hiperactiva:</strong> Respuesta exagerada al miedo.</li>
        <li><strong>Hipocampo reducido:</strong> Dificultad contextual.</li>
        <li><strong>Corteza prefrontal hipoactiva:</strong> Regulación emocional reducida.</li>
        <li><strong>Eje HPA alterado:</strong> Respuesta anormal al estrés.</li>
      </ul>

      {/* ================= SUBTIPOS ================= */}

      <p className="fxh-subtitle">📌 Subtipos Clínicos</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Características</th>
              <th>Prevalencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TEPT complejo</td>
              <td>Trauma prolongado, alteración identidad</td>
              <td>25%</td>
            </tr>
            <tr>
              <td>TEPT disociativo</td>
              <td>Despersonalización</td>
              <td>15-30%</td>
            </tr>
            <tr>
              <td>Inicio tardío</td>
              <td>Síntomas meses/años después</td>
              <td>10-20%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================= RIESGO ================= */}

      <p className="fxh-subtitle">🚨 Factores de Riesgo</p>
      <ul className="fxh-list">
        <li>Exposición previa a traumas.</li>
        <li>Falta de apoyo social.</li>
        <li>Historia de trastornos mentales.</li>
        <li>Tendencia a rumiación.</li>
        <li>Alta percepción de amenaza.</li>
      </ul>

      {/* ================= EVALUACIÓN ================= */}

      <p className="fxh-subtitle">🩺 Evaluación Diagnóstica</p>

      <p className="fxh-subsubtitle">Herramientas Clínicas</p>
      <ul className="fxh-list">
        <li><strong>CAPS-5:</strong> Entrevista estandarizada.</li>
        <li><strong>PCL-5:</strong> Escala autoadministrada.</li>
        <li><strong>IES-R:</strong> Impacto del trauma.</li>
      </ul>

      <p className="fxh-subsubtitle">Diagnóstico Diferencial</p>
      <ul className="fxh-list">
        <li>Trastorno de adaptación</li>
        <li>Depresión mayor</li>
        <li>Ansiedad generalizada</li>
      </ul>

      {/* ================= INTERVENCIONES ================= */}

      <p className="fxh-subtitle">💡 Intervenciones Basadas en Evidencia</p>

      <p className="fxh-subsubtitle">🔹 EMDR</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Técnica</th>
              <th>Objetivo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Preparación</td>
              <td>Lugar seguro</td>
              <td>Estabilización</td>
            </tr>
            <tr>
              <td>Procesamiento</td>
              <td>Movimientos bilaterales</td>
              <td>Reprocesamiento</td>
            </tr>
            <tr>
              <td>Reevaluación</td>
              <td>Escala SUDS</td>
              <td>Monitoreo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subsubtitle">🔹 Terapia Narrativa</p>
      <ul className="fxh-list">
        <li>Reconstrucción cronológica</li>
        <li>Externalización del trauma</li>
        <li>Cartas terapéuticas</li>
      </ul>

      {/* ================= AUTORREGULACIÓN ================= */}

      <p className="fxh-subtitle">🌱 Estrategias de Autoregulación</p>
      <ul className="fxh-list">
        <li>Técnica 5-4-3-2-1</li>
        <li>Respiración diafragmática</li>
        <li>Anclaje seguro</li>
        <li>Escritura expresiva</li>
      </ul>

      <p className="fxh-subsubtitle">🚨 Consideraciones Clínicas</p>
      <ul className="fxh-list">
        <li>Depresión, abuso de sustancias, dolor crónico.</li>
        <li>ISRS y prazosín en casos específicos.</li>
        <li>Buen pronóstico con tratamiento adecuado.</li>
      </ul>

      {/* ================= CONCLUSIÓN ================= */}

      <p className="fxh-subsubtitle">📌 Conclusión</p>
      <p className="fxh-text">
        El TEPT es una <strong>respuesta normal a eventos anormales</strong>.
        La recuperación implica integrar el trauma en la narrativa vital,
        reduciendo el sufrimiento y fortaleciendo la resiliencia.
      </p>

    </div>
  );
}

export default TEPT;
