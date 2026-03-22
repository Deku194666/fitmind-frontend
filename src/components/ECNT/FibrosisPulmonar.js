import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FibrosisPulmonar.css';

function FibrosisPulmonar() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail234">

      <p className="fxh-title">Fibrosis Pulmonar</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>Fibrosis Pulmonar</strong> es un grupo de enfermedades intersticiales en las que el tejido del pulmón
        se cicatriza (<em>fibrosis</em>), volviéndose rígido y dificultando el intercambio de oxígeno. Cursa con
        <strong> disnea progresiva</strong> y <strong>tos seca</strong>. Puede ser <em>idiopática</em> o secundaria a
        exposiciones, fármacos y enfermedades autoinmunes. 
      </p>

      <p className="fxh-subtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li> - Lesión repetida del epitelio alveolar → activación de fibroblastos y miofibroblastos.</li>
        <li> - Depósito de colágeno y matriz extracelular → engrosamiento intersticial y pérdida de elasticidad.</li>
        <li> - Disminución de la <strong>capacidad de difusión (DLCO)</strong> y patrón <strong>restrictivo</strong> en espirometría.</li>
        <li> - Microvasculatura alterada → hipoxemia con ejercicio, luego en reposo.</li>
      </ul>

      <p className="fxh-subtitle">Clasificación</p>
      <p className="fxh-text">Por etiología y patrón:</p>
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
              <td>Fibrosis pulmonar idiopática (FPI)</td>
              <td>Curso crónico; patrón <strong>UIP</strong> en TACAR (panalización, predominio subpleural/basal).</td>
            </tr>
            <tr>
              <td>Secundaria a autoinmunidad</td>
              <td>AR, ES, miositis; suele mostrar <strong>NSIP</strong> u otros patrones; responde a inmunomodulación.</td>
            </tr>
            <tr>
              <td>Exposición/ocupacional</td>
              <td>Sílice, asbesto, polvo metal/madera, agricultura; prevención clave (EPP).</td>
            </tr>
            <tr>
              <td>Fármacos/radiación</td>
              <td>Bleomicina, nitrofurantoína, amiodarona, metotrexato; radioterapia torácica.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Causas y factores de riesgo ⚠️</p>
      <ul className="fxh-list">
        <li> - Tabaquismo y exposiciones laborales/ambientales prolongadas.</li>
        <li> - Enfermedades del tejido conectivo (artritis reumatoide, esclerosis sistémica, miositis).</li>
        <li> - Fármacos/fitoquímicos; radioterapia; infecciones previas.</li>
        <li> - Edad &gt; 60 años, sexo masculino (FPI), susceptibilidad genética/familiar.</li>
        <li> - Reflujo gastroesofágico severo y microaspiración.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas frecuentes 🔍</p>
      <ul className="fxh-list">
        <li> -  <Link to="/ecnt/sintomas/disnea">Disnea</Link> de esfuerzo progresiva; luego de reposo en fases avanzadas.</li>
        <li> - Tos seca persistente.</li>
        <li> - Estertores inspiratorios “<em>velcro</em>” en bases pulmonares.</li>
        <li> - Acropaquia (uñas en palillo de tambor) en algunos casos.</li>
        <li> - Fatiga, pérdida de peso, limitación funcional.</li>
      </ul>

      <p className="fxh-subtitle">Signos de emergencia</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/sintomas/disnea">Disnea</Link> súbita o marcada (sospecha de <strong>exacerbación aguda</strong> o neumotórax).</li>
        <li> - <Link to="/ecnt/sintomas/cianosis">Cianosis</Link>,  saturación de O₂ muy baja, confusión o somnolencia.</li>
        <li> - Dolor torácico súbito, <Link to="/ecnt/sintomas/hemoptisis">Hemoptisis</Link>, fiebre alta con deterioro respiratorio.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🧪</p>
      <ul className="fxh-list">
        <li><strong> - TACAR (<Link to="/examenes/tc">TC </Link> de alta resolución)</strong>: patrón, extensión y distribución.</li>
        <li><strong> - Pruebas de función pulmonar</strong>: patrón restrictivo (↓ FVC) y ↓ DLCO.</li>
        <li><strong> - Prueba de caminata 6 min</strong>, oximetría/gasometría.</li>
        <li> - Serologías autoinmunidad, búsqueda etiológica; BAL/biopsia en casos seleccionados.</li>
        <li><strong> - Discusión multidisciplinaria</strong> (neumología–radiología–patología) si hay duda diagnóstica.</li>
      </ul>

      <p className="fxh-subtitle">💊 Tratamiento</p>
      <p className="fxh-subsubtitle">📌 Antifibróticos (FPI)</p>
      <ul className="fxh-list">
        <li><strong> - Pirfenidona</strong> o <strong>nintedanib</strong>: enlentecen el declive de FVC; seguimiento de efectos adversos.</li>
        <li> - Evitar corticoides crónicos salvo <strong>exacerbaciones</strong> o entidades específicas.</li>
      </ul>

      <p className="fxh-subsubtitle">📌 Etiologías secundarias</p>
      <ul className="fxh-list">
        <li> - Inmunomodulación en <strong>enfermedades autoinmunes</strong>.</li>
        <li> - Suspensión de fármacos causales y control de exposiciones.</li>
      </ul>

      <p className="fxh-subsubtitle">📌 Soporte y rehabilitación</p>
      <ul className="fxh-list">
        <li><strong> - Oxigenoterapia</strong> si hipoxemia; mejora tolerancia al esfuerzo y calidad de vida.</li>
        <li><strong> - Rehabilitación pulmonar</strong>, entrenamiento de marcha y respiración.</li>
        <li> - Vacunas al día, manejo de reflujo y nutrición.</li>
        <li><strong> - Derivación a trasplante pulmonar</strong> en casos seleccionados.</li>
        <li> - Cuidados paliativos/soporte psicosocial en enfermedad avanzada.</li>
      </ul>

      <p className="fxh-subtitle">🧨 Complicaciones</p>
      <ul className="fxh-list">
        <li> - Exacerbación aguda con infiltrados nuevos.</li>
        <li> - Hipertensión pulmonar, cor pulmonale.</li>
        <li> - Neumotórax, infecciones respiratorias recurrentes.</li>
        <li> - Desnutrición, sarcopenia, limitación severa del ejercicio.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        La <strong>Fibrosis Pulmonar</strong> requiere diagnóstico preciso y manejo integral:
        control etiológico, antifibróticos en FPI, oxígeno y rehabilitación. El seguimiento periódico permite detectar
        exacerbaciones, optimizar soporte y evaluar trasplante en casos adecuados, buscando mantener la mejor calidad de vida.
      </p>

    </div>
  );
}

export default FibrosisPulmonar;