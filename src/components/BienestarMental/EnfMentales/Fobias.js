import React, { useEffect } from 'react';
import './Fobias.css'; 

function Fobias() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className='fxh-title'>Fobias Específicas</p>

      <p className='fxh-subtitle'>📌 Introducción</p>
      <p className='fxh-text'>
        Las fobias específicas son un tipo de trastorno de ansiedad caracterizado por un <strong>miedo intenso e irracional</strong> hacia objetos o situaciones concretas (ej.: arañas, alturas, sangre). Afectan al <strong>7-9% de la población</strong> (DSM-5) y generan respuestas de evitación que interfieren con la vida diaria. A diferencia del miedo normal, la reacción es desproporcionada y persistente (≥6 meses).
      </p>

      <p className='fxh-subsubtitle'>🧠 Tipos Comunes</p>
      <ul className='fxh-list'>
        <li><strong>Animales:</strong> Arañas (aracnofobia), perros (cinofobia).</li>
        <li><strong>Ambientales:</strong> Alturas (acrofobia), tormentas (astrafobia).</li>
        <li><strong>Sangre-inyecciones-daño (SID):</strong> Agujas (belonefobia), sangre (hematofobia).</li>
        <li><strong>Situacionales:</strong> Aviones (aerofobia), espacios cerrados (claustrofobia).</li>
      </ul>

      <p className='fxh-subsubtitle'>🧬 Fisiopatología</p>
      <ul className='fxh-list'>
        <li><strong>Hiperactivación amígdala:</strong> Respuesta exagerada al estímulo fóbico.</li>
        <li><strong>Déficit regulación cortical:</strong> Corteza prefrontal no logra inhibir el miedo.</li>
        <li><strong>Condicionamiento clásico:</strong> Asociación traumática previa (ej.: mordedura de perro).</li>
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
              <td>Genética (2-3x más riesgo si familiares directos)</td>
              <td>Sensibilidad a la ansiedad</td>
              <td>Experiencias traumáticas directas</td>
            </tr>
            <tr>
              <td>Respuesta vasovagal exagerada (en fobias SID)</td>
              <td>Sesgo atencional hacia amenazas</td>
              <td>Aprendizaje vicario (ver a otros reaccionar con miedo)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subsubtitle'>🚨 Síntomas Clave (DSM-5)</p>
      <p className='fxh-text'><strong>💡 Criterios diagnósticos:</strong></p>
      <ul className='fxh-list'>
        <li>Miedo marcado hacia un objeto/situación específica.</li>
        <li>El estímulo casi siempre provoca ansiedad inmediata (puede llegar a ataque de pánico).</li>
        <li>Evitación activa o resistencia con intenso malestar.</li>
        <li>Duración ≥6 meses.</li>
        <li>Deterioro significativo en áreas sociales/laborales.</li>
      </ul>

      <p className='fxh-subsubtitle'>🩺 Diagnóstico</p>
      <p className='fxh-text'>1. Evaluación Clínica:</p>
      <ul className='fxh-list'>
        <li>Entrevista estructurada (<strong>ADIS-5</strong>).</li>
        <li>Escala de <strong>Fear Questionnaire (FQ)</strong> para gravedad.</li>
      </ul>

      <p className='fxh-text'>2. Exámenes Complementarios:</p>
      <ul className='fxh-list'>
        <li>En fobias SID: prueba de inclinación para evaluar respuesta vasovagal.</li>
      </ul>

      <p className='fxh-subsubtitle'>💊 Tratamiento</p>
      <p className='fxh-text'>🔴 Farmacológico (solo en casos graves):</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Clase</th>
              <th>Ejemplos</th>
              <th>Uso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Betabloqueantes</td>
              <td>Propranolol</td>
              <td>Reduce síntomas físicos (ej.: antes de vuelos)</td>
            </tr>
            <tr>
              <td>Benzodiacepinas</td>
              <td>Lorazepam</td>
              <td>Uso ocasional en exposición inevitable</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-text'>🟢 No Farmacológico (tratamiento de primera línea):</p>
      <ul className='fxh-list'>
        <li><strong>Terapia de Exposición:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li><strong>En vivo:</strong> Enfrentamiento gradual al estímulo (ej.: acercarse a un perro).</li>
            <li><strong>Realidad Virtual:</strong> Para fobias difíciles de replicar (ej.: volar en avión).</li>
          </ul>
        </li>
        <li><strong>Técnica de Tensión Aplicada (para fobias SID):</strong> Contracción muscular para prevenir desmayos.</li>
      </ul>

      <p className='fxh-subsubtitle'>🌱 Prevención y Manejo</p>
      <p className='fxh-text'>🟢 Técnicas de Autogestión:</p>
      <ul className='fxh-list'>
        <li><strong>Desensibilización sistemática:</strong> Lista jerárquica de exposiciones de menor a mayor ansiedad.</li>
        <li><strong>Respiración con biofeedback:</strong> Monitorear frecuencia cardíaca durante exposición.</li>
      </ul>

      <p className='fxh-text'>🚨 Señales de Alerta:</p>
      <ul className='fxh-list'>
        <li>Evitación que limita actividades esenciales (ej.: no ir al médico por miedo a agujas).</li>
        <li>Ataques de pánico ante el estímulo fóbico.</li>
      </ul>

      <p className='fxh-subtitle'>📌 Conclusión</p>
      <p className='fxh-text'>
        Las fobias específicas son altamente tratables con <strong>terapia de exposición</strong> (eficacia del 75-90%). La clave es la constancia en las prácticas de enfrentamiento gradual. En casos leves, la psicoeducación y técnicas de relajación pueden ser suficientes, mientras que en fobias incapacitantes, la combinación con realidad virtual muestra excelentes resultados.
      </p>
    </div>
  );
}

export default Fobias;
