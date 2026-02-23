import React, { useEffect } from 'react';
import './TrasDelirante.css';

function TrasDelirante() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Trastorno Delirante</p>

      <p className="fxh-subsubtitle">📌Introducción</p>
      <p className="fxh-text">
        El trastorno delirante es una condición psiquiátrica caracterizada por <strong>delirios no extraños</strong> (creencias
        falsas pero plausibles) que persisten durante <strong>≥1 mes</strong>, sin alucinaciones prominentes. Afecta al <strong>0.2% de
        la población</strong> (DSM-5) y suele manifestarse entre los <strong>40-55 años</strong>. A diferencia de la esquizofrenia, los 
        pacientes mantienen un funcionamiento relativamente normal en áreas no relacionadas con su delirio, lo que dificulta su detección
        temprana.
      </p>

      <p className="fxh-subsubtitle">🧠 Tipos Clínicos (según tema delirante)</p>
      <ul className="fxh-list">
        <li><strong>Persecutorio:</strong> Creencia de ser víctima de espionaje, engaño o conspiración (60-70% de casos).</li>
        <li><strong>Celotípico:</strong> Convicción infundada de infidelidad de la pareja ("síndrome de Otelo").</li>
        <li><strong>Erómano:</strong> Idea delirante de que alguien (generalmente de mayor estatus) está enamorado del paciente.</li>
        <li><strong>Grandioso:</strong> Creencia de tener talentos, conocimientos o relaciones especiales (ej.: "soy un genio incomprendido").</li>
        <li><strong>Somático:</strong> Preocupación por funciones corporales (ej.: "tengo parásitos bajo la piel").</li>
      </ul>

      <p className="fxh-subsubtitle">🧬Fisiopatología</p>
      <ul className="fxh-list">
        <li><strong>Disfunción dopaminérgica:</strong> Hiperactividad en vía mesolímbica (similar a esquizofrenia pero localizada).</li>
        <li><strong>Alteraciones en unión temporoparietal:</strong> Fallos en la atribución de agencia (origen de los pensamientos).</li>
        <li><strong>Déficit en monitorización de realidad:</strong> Incapacidad para contrastar creencias con evidencia objetiva.</li>
        <li><strong>Factores neuroinflamatorios:</strong> Elevación de marcadores como IL-6 en algunos pacientes.</li>
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
              <td>Historia familiar de trastornos psicóticos</td>
              <td>Estilo cognitivo rígido</td>
              <td>Aislamiento social prolongado</td>
            </tr>
            <tr>
              <td>Lesiones en ganglios basales</td>
              <td>Sesgo atribucional externo ("todo es culpa de otros")</td>
              <td>Estrés migratorio ("síndrome de Ulises")</td>
            </tr>
            <tr>
              <td>Hipoacusia/ceguera (teoría de la privación sensorial)</td>
              <td>-</td>
              <td>Acoso laboral ("mobbing") persistente</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subsubtitle">🚨 Síntomas Clave (DSM-5)</p>
      <p className="fxh-text">💡 Criterios diagnósticos:</p>
      <ul className="fxh-list">
        <li><strong>Delirios no extraños</strong> (ej.: ser engañado, seguido o envenenado) durante ≥1 mes.</li>
        <li><strong>Sin alucinaciones prominentes</strong> (pueden presentarse transitoriamente si son táctiles/olfativas).</li>
        <li>Funcionamiento fuera del área delirante relativamente preservado.</li>
        <li>No cumple criterios de esquizofrenia.</li>
        <li>No atribuible a sustancias u otra condición médica.</li>
      </ul>

      <p className="fxh-subsubtitle">🩺 Diagnóstico</p>
      <p className="fxh-text">1. Evaluación Clínica:</p>
      <ul className="fxh-list">
        <li>Entrevista con <strong>Escala de Delirios de Peters (PDI-21)</strong>.</li>
        <li>Evaluación de <strong>insight</strong> (generalmente ausente o pobre).</li>
        <li>Historia de <strong>sobrevaloración ideativa</strong> (ideas fijas previas al delirio).</li>
      </ul>

      <p className="fxh-text">2. Diagnóstico Diferencial:</p>
      <ul className="fxh-list">
        <li><strong>Esquizofrenia:</strong> Presencia de alucinaciones auditivas y síntomas negativos.</li>
        <li><strong>Trastorno obsesivo-compulsivo:</strong> El paciente reconoce lo irracional de sus pensamientos.</li>
        <li><strong>Demencia:</strong> Deterioro cognitivo global y fluctuaciones.</li>
      </ul>

      <p className="fxh-subtitle">💊 Tratamiento</p>
      <p className="fxh-text">🔴 Farmacológico:</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Clase</th>
              <th>Ejemplos</th>
              <th>Estrategia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Antipsicóticos atípicos</td>
              <td>Risperidona, Paliperidona</td>
              <td>Dosis más bajas que en esquizofrenia</td>
            </tr>
            <tr>
              <td>ISRS</td>
              <td>Sertralina</td>
              <td>Para componentes ansiosos/depresivos</td>
            </tr>
            <tr>
              <td>Terapia depot</td>
              <td>Paliperidona palmitato</td>
              <td>En casos de mala adherencia</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-text">🟢 No Farmacológico:</p>
      <ul className="fxh-list">
        <li><strong>Terapia Cognitiva para Delirios (Manschreck):</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Explorar <strong>evidencia alternativa</strong> sin confrontar directamente el delirio.</li>
            <li>Trabajar <strong>consecuencias emocionales</strong> ("¿Cómo le afecta esta creencia?").</li>
          </ul>
        </li>
        <li><strong>Terapia Familiar:</strong> Reducir EMC (Emoción Expresada Crítica) y evitar alimentar el delirio.</li>
        <li><strong>Entrenamiento en Habilidades Sociales:</strong> Mejorar relaciones interpersonales no afectadas por el delirio.</li>
      </ul>

      <p className="fxh-subsubtitle">🌱 Manejo Práctico</p>
      <p className="fxh-text">🟢 Estrategias para Familiares:</p>
      <ul className="fxh-list">
        <li><strong>No confrontar:</strong> Evitar discusiones directas sobre el delirio ("Veo que eso te preocupa" vs. "Eso es imposible").</li>
        <li><strong>Redirigir:</strong> Centrar conversaciones en áreas neutras (pasatiempos, noticias).</li>
        <li><strong>Establecer límites:</strong> No participar en rituales derivados del delirio (ej.: revisar cámaras de seguridad).</li>
      </ul>

      <p className="fxh-text">🧠 Técnicas de Autogestión (para insight parcial):</p>
      <ul className="fxh-list">
        <li><strong>Registro de "señales de alarma":</strong> Identificar patrones previos a exacerbaciones.</li>
        <li><strong>Técnica del "como si":</strong> Actuar temporalmente como si el delirio no fuera cierto.</li>
      </ul>

      <p className="fxh-text">🚨 Señales de Riesgo:</p>
      <ul className="fxh-list">
        <li><strong>Delirios de tipo persecutorio:</strong> Riesgo de auto/heteroagresividad.</li>
        <li><strong>Abandono de tratamiento:</strong> Recuperación de síntomas en 2-4 semanas.</li>
        <li><strong>Consumo de sustancias:</strong> Empeoramiento de síntomas.</li>
      </ul>

      <p className="fxh-subtitle">📌Conclusión</p>
      <p className="fxh-text">
        El trastorno delirante tiene <strong>mejor pronóstico que la esquizofrenia</strong>, con un <strong>50% de remisión 
        completa</strong> con tratamiento adecuado. La terapia cognitiva adaptada y el manejo familiar son esenciales para evitar
         la cronificación. Aunque la falta de insight dificulta la adherencia, enfoques colaborativos ("tratamiento para el estrés 
         que le causan sus creencias") pueden mejorar la aceptación.
      </p>
    </div>
  );
}

export default TrasDelirante;
