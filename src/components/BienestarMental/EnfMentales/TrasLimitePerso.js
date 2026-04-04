import React, { useEffect } from 'react';
import './TrasLimitePerso.css';

function TrasLimitePerso() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail25">

      <p className="fxh-title">
        Trastorno Límite de Personalidad (TLP)
      </p>

      <p className="fxh-subsubtitle">📌 Introducción</p>
      <p className="fxh-text">
        El TLP afecta aproximadamente al <strong>1.6% de la población general</strong>.
        Se caracteriza por <strong>inestabilidad emocional</strong>, 
        <strong> relaciones interpersonales intensas</strong>,
        <strong> autoimagen inestable</strong> y 
        <strong> conductas impulsivas</strong>.
      </p>

      {/* ================= CRITERIOS ================= */}

      <p className="fxh-subtitle">Criterios Diagnósticos (DSM-5)</p>
      <ul className="fxh-list">
        <li><strong>Esfuerzos para evitar abandono</strong></li>
        <li><strong>Relaciones intensas e inestables</strong></li>
        <li><strong>Alteración de identidad</strong></li>
        <li><strong>Impulsividad autodestructiva</strong></li>
        <li><strong>Conductas suicidas o autolesivas</strong></li>
        <li><strong>Inestabilidad afectiva</strong></li>
        <li><strong>Sentimientos crónicos de vacío</strong></li>
        <li><strong>Ira inapropiada</strong></li>
        <li><strong>Ideación paranoide transitoria</strong></li>
      </ul>

      {/* ================= BASES NEURO ================= */}

      <p className="fxh-subtitle">🧠 Bases Neurobiológicas</p>
      <ul className="fxh-list">
        <li><strong>Amígdala hiperreactiva:</strong> Respuesta emocional intensa.</li>
        <li><strong>Corteza prefrontal hipofuncionante:</strong> Baja regulación emocional.</li>
        <li><strong>Desequilibrio serotoninérgico:</strong> Impulsividad.</li>
        <li><strong>Hipocampo reducido:</strong> Alteración memoria emocional.</li>
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
              <td>TLP impulsivo</td>
              <td>Conductas temerarias</td>
              <td>40%</td>
            </tr>
            <tr>
              <td>TLP petulante</td>
              <td>Hostilidad y negativismo</td>
              <td>25%</td>
            </tr>
            <tr>
              <td>TLP autodestructivo</td>
              <td>Autocastigo y culpa</td>
              <td>35%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================= RIESGO ================= */}

      <p className="fxh-subtitle">🚨 Factores de Riesgo</p>
      <ul className="fxh-list">
        <li>Historia de abuso o negligencia.</li>
        <li>Familiares con TLP o trastornos afectivos.</li>
        <li>Invalidación emocional temprana.</li>
        <li>Separaciones traumáticas.</li>
        <li>Disregulación familiar.</li>
      </ul>

      {/* ================= EVALUACIÓN ================= */}

      <p className="fxh-subtitle">🩺 Evaluación Diagnóstica</p>

      <p className="fxh-subsubtitle">Herramientas Clínicas</p>
      <ul className="fxh-list">
        <li><strong>DIB-R:</strong> Entrevista diagnóstica.</li>
        <li><strong>MSI-BPD:</strong> Screening 10 ítems.</li>
        <li><strong>SCID-II:</strong> Entrevista estructurada.</li>
      </ul>

      <p className="fxh-subsubtitle">Diagnóstico Diferencial</p>
      <ul className="fxh-list">
        <li>Trastorno bipolar</li>
        <li>Depresión mayor</li>
        <li>Trastorno disociativo</li>
      </ul>

      {/* ================= INTERVENCIONES ================= */}

      <p className="fxh-subtitle">💡 Intervenciones Basadas en Evidencia</p>

      <p className="fxh-subsubtitle">🔹 Terapia Dialéctico-Conductual (DBT)</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Módulo</th>
              <th>Habilidades</th>
              <th>Objetivo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mindfulness</td>
              <td>Observar, describir</td>
              <td>Conciencia plena</td>
            </tr>
            <tr>
              <td>Tolerancia malestar</td>
              <td>STOP, distracción</td>
              <td>Manejo crisis</td>
            </tr>
            <tr>
              <td>Regulación emocional</td>
              <td>Acción opuesta</td>
              <td>Modular intensidad</td>
            </tr>
            <tr>
              <td>Efectividad interpersonal</td>
              <td>DEAR MAN</td>
              <td>Relaciones sanas</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================= AUTORREGULACIÓN ================= */}

      <p className="fxh-subtitle">🌱 Estrategias de Autoregulación</p>
      <ul className="fxh-list">
        <li>Técnica TIPP</li>
        <li>Diario emocional</li>
        <li>Kit de crisis</li>
        <li>Escala de angustia</li>
      </ul>

      <p className="fxh-subsubtitle">🚨 Consideraciones Clínicas</p>
      <ul className="fxh-list">
        <li>Alta comorbilidad con depresión.</li>
        <li>Farmacología solo sintomática.</li>
        <li>Buen pronóstico con tratamiento.</li>
        <li>Evaluar riesgo suicida continuamente.</li>
      </ul>

      {/* ================= CONCLUSIÓN ================= */}

      <p className="fxh-subsubtitle">📌 Conclusión</p>
      <p className="fxh-text">
        El TLP es un <strong>patrón aprendido de supervivencia emocional</strong>.
        La recuperación implica regulación emocional, identidad estable
        y construcción de relaciones saludables.
      </p>

    </div>
  );
}

export default TrasLimitePerso;
