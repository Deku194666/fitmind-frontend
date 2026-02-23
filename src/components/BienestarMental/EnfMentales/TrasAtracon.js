import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TrasPorAtracon.css';

function TrasPorAtracon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Trastorno por Atracón</p>

      <p className="fxh-subsubtitle">📌Introducción</p>
      <p className="fxh-text">
        El Trastorno por Atracón (BED) es el trastorno alimentario más común en adultos, caracterizado por 
        <strong> episodios recurrentes de ingesta compulsiva</strong> sin conductas compensatorias. Afecta al 
        <strong>2-3.5% de la población mundial</strong> (DSM-5) con una distribución más equitativa entre géneros (2:1 mujeres/hombres). 
        El 60-70% de los casos presentan obesidad, pero puede ocurrir en cualquier IMC. Reconocido como diagnóstico independiente desde 2013, 
        implica grave malestar y pérdida de control sobre la alimentación.
      </p>

      <p className="fxh-subsubtitle">🧠 Características Clínicas</p>
      <ul className="fxh-list">
        <li><strong>Atracones objetivos:</strong> Ingesta de mayor a 2,000 kcal en menor a 2h con sensación de voracidad.</li>
        <li><strong>Atracones subjetivos:</strong> Pequeñas cantidades percibidas como excesivas.</li>
        <li><strong>Comorbilidades:</strong> 80% trastorno del estado de ánimo, 50% ansiedad.</li>
        <li><strong>Curso crónico:</strong> 40% permanecen sintomáticos a 5 años sin tratamiento.</li>
      </ul>

      <p className="fxh-subsubtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li><strong>Desregulación dopaminérgica:</strong> Disminución de receptores D2 en estriado ventral.</li>
        <li><strong>Alteraciones en el eje HPA:</strong> Respuesta exagerada al estrés con hipercortisolemia.</li>
        <li><strong>Resistencia a leptina:</strong> Alteración en señales de saciedad.</li>
        <li><strong>Patrón circadiano alterado:</strong> 70% de atracones ocurren por la noche.</li>
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
              <td>Polimorfismos en gene FTO (rs9939609)</td>
              <td>Desregulación emocional</td>
              <td>Historia de dietas yo-yó</td>
            </tr>
            <tr>
              <td>Deficiencia de BDNF</td>
              <td>Perfeccionismo alimentario</td>
              <td>Acceso a comida hiperpalatable</td>
            </tr>
            <tr>
              <td>Comorbilidad con TDAH (25%)</td>
              <td>Alexitimia</td>
              <td>Abuso emocional en infancia</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subsubtitle">🚨 Criterios Diagnósticos (DSM-5)</p>
      <p className="fxh-text"><strong>💡 Requisitos (≥1 episodio/semana por 3 meses):</strong></p>
      <ul className="fxh-list">
        <li><strong>Ingesta acelerada:</strong> Comer mucho más rápido de lo normal.</li>
        <li><strong>Malestar físico:</strong> Hasta sentirse desagradablemente lleno.</li>
        <li><strong>Sin hambre:</strong> Comer grandes cantidades sin apetito.</li>
        <li><strong>Vergüenza:</strong> Preferencia por comer en solitario.</li>
        <li><strong>Asco/culpa:</strong> Posterior al episodio.</li>
      </ul>

      <p className="fxh-subsubtitle">🩺 Evaluación Clínica</p>
      <p className="fxh-text"><strong>1. Instrumentos Validados:</strong></p>
      <ul className="fxh-list">
        <li><strong>EDE-Q:</strong> Evalúa frecuencia y severidad.</li>
        <li><strong>BES:</strong> Específico para sintomatología.</li>
        <li><strong>Inventario de Alimentación Caótica:</strong> Detecta patrones irregulares.</li>
      </ul>

      <p className="fxh-text"><strong>2. Diagnóstico Diferencial:</strong></p>
      <ul className="fxh-list">
        <li><strong>Bulimia nerviosa:</strong> Presencia de conductas compensatorias.</li>
        <li><strong>Obesidad sin TCA:</strong> Ausencia de pérdida de control.</li>
        <li><strong>Síndrome del comedor nocturno:</strong> mayor a 25% de calorías tras la cena.</li>
      </ul>

      <p className="fxh-subsubtitle">💊 Tratamiento Basado en Evidencia</p>
      <p className="fxh-text"><strong>🔴 Intervenciones Médicas:</strong></p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Modalidad</th>
              <th>Opción</th>
              <th>Efectividad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Farmacológico</td>
              <td>Lisdexanfetamina (50-70 mg/día)</td>
              <td>Reduce 65% episodios (único aprobado por FDA)</td>
            </tr>
            <tr>
              <td>Nutricional</td>
              <td>Alimentación regular cada 3-4h</td>
              <td>Disminuye 40% urgencias por comer</td>
            </tr>
            <tr>
              <td>Cirugía bariátrica</td>
              <td>Evaluación prequirúrgica obligatoria</td>
              <td>30% desarrollan nuevos atracones post-cirugía</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-text"><strong>🟢 Psicoterapias Efectivas:</strong></p>
      <ul className="fxh-list">
        <li><strong>TCC específica:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Autorregistro de episodios (hora, desencadenante, alimentos).</li>
            <li>Exposición a alimentos prohibidos sin atracón.</li>
            <li>Reestructuración de pensamientos "todo o nada".</li>
          </ul>
        </li>
        <li><strong>DBT:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Tolerancia al malestar.</li>
            <li>Regulación emocional.</li>
            <li>Efectividad interpersonal.</li>
          </ul>
        </li>
        <li><strong>ACT:</strong> Reducción de evitación experiencial.</li>
      </ul>

      <p className="fxh-subsubtitle">🌱 Técnicas de Alimentación Consciente</p>
      <ul className="fxh-list">
        <li><strong>B</strong>ajar el tenedor entre bocados.</li>
        <li><strong>A</strong>preciar colores/olores de la comida.</li>
        <li><strong>S</strong>aborear cada bocado (20 segundos).</li>
        <li><strong>I</strong>dentificar señales de saciedad.</li>
        <li><strong>C</strong>omprobar hambre real (escala 1-10).</li>
        <li><strong>O</strong>bservar emociones sin juzgar.</li>
      </ul>

      <p className="fxh-text"><strong>🚨 Complicaciones Frecuentes:</strong></p>
      <ul className="fxh-list">
        <li><strong>Metabólicas:</strong> Resistencia a insulina, hígado graso.</li>
        <li><strong>Gastrointestinales:</strong> Reflujo, síndrome de intestino irritable.</li>
        <li><strong>Psicológicas:</strong> Depresión (60%), ideación suicida (15%).</li>
      </ul>

      <p className="fxh-subsubtitle">📌Pronóstico</p>
      <p className="fxh-text">
        Con tratamiento adecuado, <strong>50-60% logran remisión sostenida</strong> a 2 años. La TCC alcanza tasas de éxito del 
        <strong>70% en reducción de episodios</strong> a los 4 meses. Factores predictivos positivos incluyen: menor duración 
        del trastorno, ausencia de antecedentes de trauma complejo y buen apoyo social. La mortalidad es menor que en otros TCA
        (menor a 1%), pero la calidad de vida se ve significativamente afectada.
      </p>
    </div>
  );
}

export default TrasPorAtracon;
