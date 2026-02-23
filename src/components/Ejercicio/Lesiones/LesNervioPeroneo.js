import React, { useEffect } from 'react';
import './LesNervioPeroneo.css';

function LesNervioPeroneo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Lesión del Nervio Peroneo Común</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        El nervio peroneo común (L4-S2) es la rama más vulnerable del ciático, con alta incidencia de lesión por su trayecto superficial alrededor de la cabeza del peroné.
        Es la causa más frecuente de pie caído adquirido, representando hasta el 75% de las mononeuropatías de miembro inferior.
        Su afectación produce incapacidad para la dorsiflexión y eversión del pie.
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Origen</strong>: Rama del ciático poplíteo externo (L4-S2)</li>
        <li>
          <strong>Recorrido crítico</strong>:
          <ul className="fxh-sublist">
            <li>Cuello fibular (punto de máxima vulnerabilidad)</li>
            <li>Bifurcación en peroneo superficial y profundo</li>
          </ul>
        </li>
        <li>
          <strong>Inervación motora</strong>:
          <ul className="fxh-sublist">
            <li><strong>Peroneo profundo</strong>: Tibial anterior y extensores de los dedos (dorsiflexión)</li>
            <li><strong>Peroneo superficial</strong>: Peroneo largo y corto (eversión)</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-subtitle">Localizaciones Comunes de Lesión 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Localización</th>
              <th>Mecanismo</th>
              <th>Causa Principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cuello fibular</td>
              <td>Compresión externa</td>
              <td>Inmovilizaciones prolongadas, posiciones en cuclillas</td>
            </tr>
            <tr>
              <td>Arco fibular</td>
              <td>Atrapamiento</td>
              <td>Fibrosis postraumática</td>
            </tr>
            <tr>
              <td>Trauma agudo</td>
              <td>Luxación rodilla / fracturas</td>
              <td>Accidentes de tráfico, deportivos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Manifestaciones Clínicas 🩺</p>

      <p className="fxh-subsubtitle">1. Síntomas Motores</p>
      <ul className="fxh-list">
        <li><strong>Pie caído</strong>: Incapacidad para dorsiflexión (marcha en steppage)</li>
        <li><strong>Debilidad eversión</strong>: Afectación peroneo superficial</li>
        <li><strong>Atrofia tibial anterior</strong>: Visible en casos crónicos</li>
      </ul>

      <p className="fxh-subsubtitle">2. Síntomas Sensitivos</p>
      <ul className="fxh-list">
        <li><strong>Hipoestesia</strong>: Cara lateral de la pierna y dorso del pie</li>
        <li><strong>Tinel positivo</strong>: Percusión en cuello fibular</li>
        <li><strong>Dolor</strong>: Poco frecuente (excepto síndromes compresivos)</li>
      </ul>

      <p className="fxh-subtitle">Pruebas Diagnósticas 🔍</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Técnica</th>
              <th>Positividad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Test dorsiflexión resistida</td>
              <td>Levantar pie contra resistencia</td>
              <td>Debilidad tibial anterior</td>
            </tr>
            <tr>
              <td>Test eversión resistida</td>
              <td>Eversión contra resistencia</td>
              <td>Debilidad peroneos</td>
            </tr>
            <tr>
              <td>EMG / NCV</td>
              <td>Estudio conducción nerviosa</td>
              <td>Localiza nivel de lesión (sensibilidad 90%)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>

      <p className="fxh-subsubtitle">Para Compresiones Leves:</p>
      <ul className="fxh-list">
        <li><strong>Órtesis de pie caído</strong></li>
        <li><strong>Modificación de hábitos</strong>: Evitar cruzar piernas</li>
        <li><strong>Terapia física</strong>: Electroestimulación y ejercicios de rango</li>
      </ul>

      <p className="fxh-subsubtitle">Para Neuropraxia Postraumática:</p>
      <ul className="fxh-list">
        <li><strong>Observación</strong>: 3-6 meses (regeneración axonal)</li>
        <li><strong>Vitamina B12</strong>: Posible efecto neurotrófico</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>

      <p className="fxh-subsubtitle">Indicaciones:</p>
      <ul className="fxh-list">
        <li>Pie caído persistente mayor a 3-6 meses</li>
        <li>EMG con denervación aguda sin mejoría</li>
        <li>Lesiones traumáticas completas</li>
      </ul>

      <p className="fxh-subsubtitle">Técnicas Quirúrgicas:</p>
      <ul className="fxh-list">
        <li><strong>Neurolisis</strong>: Liberación en cuello fibular</li>
        <li><strong>Transferencia tendinosa</strong>: Tibial posterior a dorsiflexores</li>
        <li><strong>Injerto nervioso</strong>: Defectos mayores a 3 cm</li>
      </ul>

      <p className="fxh-subtitle">Rehabilitación 🏋️‍♂️</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Objetivos</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aguda (0-6 sem)</td>
              <td>Prevenir equino, mantener ROM</td>
              <td>Hasta recuperación motora inicial</td>
            </tr>
            <tr>
              <td>Subaguda (6-12 sem)</td>
              <td>Reentrenamiento marcha</td>
              <td>6 semanas</td>
            </tr>
            <tr>
              <td>Recuperación (&gt;12 sem)</td>
              <td>Fuerza selectiva y propiocepción</td>
              <td>3-6 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Complicaciones ⚠️</p>
      <ul className="fxh-list">
        <li><strong>Deformidad en equinovaro</strong></li>
        <li><strong>Ulceraciones dorso del pie</strong></li>
        <li><strong>Fallo transferencia tendinosa</strong>: Hasta 20%</li>
      </ul>

      <p className="fxh-subtitle">Prevención 🛡️</p>
      <ul className="fxh-list">
        <li><strong>Protección cuello fibular</strong> en cirugías prolongadas</li>
        <li><strong>Educación pacientes</strong>: Evitar posiciones compresivas</li>
        <li><strong>Vigilancia EMG</strong> en fracturas proximales</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        Las lesiones del peroneo común requieren diagnóstico precoz por su impacto en la marcha.
        El 70% de las neuropraxias se recuperan espontáneamente en 3 meses.
        La neurolisis tiene éxito en el 85% si se realiza dentro de los 6 meses.
        Las transferencias tendinosas permiten marcha sin órtesis en el 65% de los casos.
      </p>
    </div>
  );
}

export default LesNervioPeroneo;
