import React, { useEffect } from 'react';
import './Esquizo.css';

function Esquizo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail20">
      <p className="fxh-title">Esquizofrenia</p>

      <p className="fxh-subsubtitle">📌Introducción</p>
      <p className="fxh-text">
        La esquizofrenia es un trastorno psicótico crónico que afecta la percepción de la realidad, caracterizado por <strong>síntomas positivos</strong> (alucinaciones, delirios), <strong>negativos</strong> (apatía, aislamiento) y <strong>cognitivos</strong>. Afecta aproximadamente al <strong>1% de la población mundial</strong> (OMS) y suele debutar entre los <strong>15-35 años</strong>. No es "personalidad múltiple" ni implica violencia inherente: con tratamiento adecuado, muchos pacientes logran una vida funcional.
      </p>

      <p className="fxh-subsubtitle">🧠 Tipos Clínicos</p>
      <ul className="fxh-list">
        <li><strong>Paranoide:</strong> Delirios persecutorios/religiosos + alucinaciones auditivas (el tipo más común).</li>
        <li><strong>Desorganizada:</strong> Lenguaje y conducta caóticos, afectividad inapropiada.</li>
        <li><strong>Catatónica:</strong> Alteraciones psicomotoras (inmovilidad o agitación extrema).</li>
        <li><strong>Residual:</strong> Predominio de síntomas negativos tras episodios agudos.</li>
        <li><strong>Indiferenciada:</strong> Síntomas mixtos no clasificables en otros tipos.</li>
      </ul>

      <p className="fxh-subsubtitle">🧬Fisiopatología</p>
      <ul className="fxh-list">
        <li><strong>Exceso dopaminérgico:</strong> Hiperactividad en vía mesolímbica (síntomas positivos).</li>
        <li><strong>Déficit dopaminérgico:</strong> Hipofunción en vía mesocortical (síntomas negativos/cognitivos).</li>
        <li><strong>Alteraciones estructurales:</strong> Ventrículos cerebrales agrandados, reducción de materia gris.</li>
        <li><strong>Inflamación neuroglial:</strong> Microglía activada en corteza prefrontal.</li>
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
              <td>Genética (riesgo 10% si un familiar de 1° grado lo padece)</td>
              <td>Dificultades en teoría de la mente</td>
              <td>Consumo de cannabis en adolescencia (especialmente variedades high-THC)</td>
            </tr>
            <tr>
              <td>Mutaciones en genes como DISC1 o COMT</td>
              <td>Estilo cognitivo "jump-to-conclusions"</td>
              <td>Trauma infantil (abuso, bullying)</td>
            </tr>
            <tr>
              <td>Complicaciones obstétricas (hipoxia neonatal)</td>
              <td>-</td>
              <td>Migración urbana en jóvenes vulnerables</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subsubtitle">🚨 Síntomas Clave (DSM-5)</p>
      <p className="fxh-text">💡 Criterios diagnósticos (requiere 2+ por ≥1 mes):</p>
      <ul className="fxh-list">
        <li><strong>Positivos:</strong> Delirios, alucinaciones (auditivas en 70% de casos), lenguaje desorganizado.</li>
        <li><strong>Negativos:</strong> Abulia (falta de voluntad), alogia (pobreza verbal), anhedonia.</li>
        <li><strong>Desorganizados:</strong> Conducta impredecible, afecto inapropiado.</li>
        <li><strong>Cognitivos:</strong> Déficits en memoria de trabajo, atención sostenida.</li>
      </ul>

      <p className="fxh-subsubtitle">🩺 Diagnóstico</p>
      <p className="fxh-text">1. Evaluación Clínica:</p>
      <ul className="fxh-list">
        <li>Escala <strong>PANSS</strong> (Positive and Negative Syndrome Scale).</li>
        <li>Entrevista clínica estructurada (SCID-5).</li>
        <li>Historia familiar y descarte de consumo de sustancias.</li>
      </ul>

      <p className="fxh-text">2. Exámenes Complementarios:</p>
      <ul className="fxh-list">
        <li><strong>Neuroimagen:</strong> RMN para descartar lesiones (tumores, quistes).</li>
        <li><strong>Analítica:</strong> TSH, vitamina B12, screening toxicológico.</li>
      </ul>

      <p className="fxh-subtitle">💊 Tratamiento</p>
      <p className="fxh-text">🔴 Farmacológico:</p>
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
              <td>Antipsicóticos típicos</td>
              <td>Haloperidol, Clorpromazina</td>
              <td>Bloqueo receptores D2 (riesgo de EPS)</td>
            </tr>
            <tr>
              <td>Antipsicóticos atípicos</td>
              <td>Risperidona, Olanzapina, Aripiprazol</td>
              <td>Bloqueo D2 + 5-HT2A (menos EPS)</td>
            </tr>
            <tr>
              <td>Adyuvantes</td>
              <td>Antidepresivos ISRS (para síntomas negativos)</td>
              <td>↑ Serotonina</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-text">🟢 No Farmacológico:</p>
      <ul className="fxh-list">
        <li><strong>Terapia Cognitivo-Conductual para Psicosis (TCCp):</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Normalización de experiencias.</li>
            <li>Reestructuración de delirios mediante pruebas de realidad.</li>
          </ul>
        </li>
        <li><strong>Entrenamiento en Habilidades Sociales:</strong> Mejora interacciones y autonomía.</li>
        <li><strong>Remediación Cognitiva:</strong> Ejercicios computarizados para atención/memoria.</li>
        <li><strong>Psicoeducación Familiar:</strong> Manejo de crisis y reducción de EMC (Emoción Expresada Crítica).</li>
      </ul>

      <p className="fxh-subsubtitle">🌱 Prevención y Manejo</p>
      <p className="fxh-text">🟢 Intervenciones Tempranas (Pródromo):</p>
      <ul className="fxh-list">
        <li><strong>Programas como "RAISE" (NIMH):</strong> Detección en adolescentes con síntomas básicos (ej.: percepción alterada).</li>
        <li><strong>Ácidos grasos omega-3:</strong> Pueden reducir riesgo de conversión a psicosis.</li>
      </ul>

      <p className="fxh-text">🧠 Estrategias de Autogestión:</p>
      <ul className="fxh-list">
        <li><strong>Diario de síntomas:</strong> Registrar desencadenantes de alucinaciones/delirios.</li>
        <li><strong>Técnicas de grounding:</strong> Uso de objetos fríos o música para anclarse durante alucinaciones.</li>
      </ul>

      <p className="fxh-text">🚨 Señales de Alerta (Recaída):</p>
      <ul className="fxh-list">
        <li>Aumento de aislamiento (dejar de salir de la habitación).</li>
        <li>Deterioro en higiene personal.</li>
        <li>Hablar solo o reírse sin motivo aparente.</li>
      </ul>

      <p className="fxh-subtitle">📌Conclusión</p>
      <p className="fxh-text">
        La esquizofrenia es un trastorno <strong>manejable con antipsicóticos + terapias psicosociales</strong>. El diagnóstico precoz y la adherencia al tratamiento mejoran significativamente el pronóstico. Aunque no tiene cura, hasta un <strong>30% de pacientes logran remisión funcional</strong>. La desestigmatización y el apoyo comunitario son esenciales para la reinserción social.
      </p>
    </div>
  );
}

export default Esquizo;
