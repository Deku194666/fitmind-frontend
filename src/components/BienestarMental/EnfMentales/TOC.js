import React, { useEffect } from 'react';
import './TOC.css'; 

function TOC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className='fxh-title'>Trastorno Obsesivo-Compulsivo (TOC)</p>

      <p className='fxh-subtitle'>📌 Introducción</p>
      <p className='fxh-text'>
        El TOC es un trastorno mental caracterizado por <strong>obsesiones</strong> (pensamientos intrusivos recurrentes) y <strong>compulsiones</strong> (conductas repetitivas para aliviar la ansiedad). Afecta al <strong>1-2% de la población</strong> (DSM-5) y suele comenzar en la adolescencia o adultez temprana. No es un simple "perfeccionismo": es un trastorno discapacitante que consume <strong>más de 1 hora diaria</strong> en rituales mentales o físicos.
      </p>

      <p className='fxh-subsubtitle'>🧠 Tipos Principales</p>
      <ul className='fxh-list'>
        <li><strong>Limpieza/contaminación:</strong> Miedo a gérmenes + rituales de lavado.</li>
        <li><strong>Verificación:</strong> Dudas patológicas (ej.: revisar llaves 20 veces).</li>
        <li><strong>Orden/simetría:</strong> Necesidad de organización extrema.</li>
        <li><strong>Acumulación:</strong> Dificultad para desechar objetos (no confundir con trastorno de acumulación).</li>
        <li><strong>Pensamientos prohibidos:</strong> Obsesiones agresivas/sexuales sin compulsiones visibles.</li>
      </ul>

      <p className='fxh-subsubtitle'>🧬 Fisiopatología</p>
      <ul className='fxh-list'>
        <li><strong>Hiperactividad córtico-estriado-tálamo-cortical:</strong> Circuito cerebral "atascado" en bucles de pensamiento.</li>
        <li><strong>Desequilibrio serotoninérgico:</strong> Niveles bajos de serotonina en áreas frontales.</li>
        <li><strong>Disfunción en los ganglios basales:</strong> Errores en el filtrado de pensamientos irrelevantes.</li>
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
              <td>Genética (3-5x más riesgo en familiares de 1° grado)</td>
              <td>Perfeccionismo patológico</td>
              <td>Infecciones por estreptococo (PANDAS en niños)</td>
            </tr>
            <tr>
              <td>Alteraciones en el receptor 5-HT2A (serotonina)</td>
              <td>Intolerancia a la incertidumbre</td>
              <td>Trauma infantil</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subsubtitle'>🚨 Síntomas Clave (DSM-5)</p>
      <p className='fxh-text'><strong>💡 Criterios diagnósticos:</strong></p>
      <ul className='fxh-list'>
        <li><strong>Obsesiones:</strong> Pensamientos/intrusos no deseados que causan ansiedad extrema.</li>
        <li><strong>Compulsiones:</strong> Comportamientos repetitivos (ej.: lavarse) o actos mentales (ej.: rezar) para neutralizar la ansiedad.</li>
        <li>Duran ≥1 hora/día o causan deterioro clínicamente significativo.</li>
        <li>No se explican mejor por otro trastorno mental.</li>
      </ul>

      <p className='fxh-subsubtitle'>🩺 Diagnóstico</p>
      <p className='fxh-text'>1. Evaluación Clínica:</p>
      <ul className='fxh-list'>
        <li>Escala <strong>Y-BOCS</strong> (Gold Standard) para evaluar severidad.</li>
        <li>Entrevista clínica estructurada (DIS-IV).</li>
      </ul>

      <p className='fxh-text'>2. Diagnóstico Diferencial:</p>
      <ul className='fxh-list'>
        <li>Descartar: Trastorno de acumulación, TOC inducido por sustancias.</li>
      </ul>

      <p className='fxh-subsubtitle'>💊 Tratamiento</p>
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
              <td>ISRS (altas dosis)</td>
              <td>Fluoxetina (80mg/día), Sertralina (200mg/día)</td>
              <td>↑ Serotonina en corteza orbitofrontal</td>
            </tr>
            <tr>
              <td>Antipsicóticos (adyuvantes)</td>
              <td>Risperidona</td>
              <td>Modulación dopaminérgica</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-text'>🟢 No Farmacológico:</p>
      <ul className='fxh-list'>
        <li><strong>ERP (Exposición con Prevención de Respuesta):</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li><strong>Exposición:</strong> Enfrentar gradualmente el estímulo obsesivo (ej.: tocar un picaporte).</li>
            <li><strong>Prevención:</strong> No realizar la compulsión (ej.: no lavarse las manos).</li>
          </ul>
        </li>
        <li><strong>Terapia Cognitiva:</strong> Reestructurar creencias disfuncionales (ej.: "Si no reviso 10 veces, mi familia morirá").</li>
      </ul>

      <p className='fxh-subsubtitle'>🌱 Prevención y Manejo</p>
      <p className='fxh-text'>🟢 Técnicas de Autogestión:</p>
      <ul className='fxh-list'>
        <li><strong>Retraso de compulsiones:</strong> Postergar gradualmente el ritual (ej.: lavarse después de 5 minutos).</li>
        <li><strong>Automonitoreo:</strong> Registrar obsesiones-compulsiones en app móvil (ej.: nOCD).</li>
      </ul>

      <p className='fxh-text'>🚨 Señales de Alerta:</p>
      <ul className='fxh-list'>
        <li>Pérdida de piel por lavado excesivo.</li>
        <li>Rituales que impiden salir de casa.</li>
        <li>Pensamientos suicidas por frustración.</li>
      </ul>

      <p className='fxh-subtitle'>📌 Conclusión</p>
      <p className='fxh-text'>
        El TOC es un trastorno crónico pero <strong>manejable con ERP + ISRS</strong> (60-70% de mejoría). La clave es romper el ciclo obsesión-compulsión mediante exposición gradual. En casos graves, técnicas avanzadas como <strong>estimulación cerebral profunda</strong> pueden considerarse. La psicoeducación familiar es esencial para reducir acomodaciones que mantienen los síntomas.
      </p>
    </div>
  );
}

export default TOC;
