import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Distimia.css';

function Distimia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detai14">
      <p className='fxh-title'>Distimia (Trastorno Depresivo Persistente)</p>

      <p className='fxh-subtitle'>📌 Introducción</p>
      <p className='fxh-text'>
        La <strong>Distimia</strong> es un trastorno depresivo crónico que afecta al 3-6% de la población. Se caracteriza por un estado de ánimo deprimido persistente (≥2 años), menos intenso que la depresión mayor pero más prolongado. Muchos pacientes describen sentirse "siempre así", lo que dificulta su identificación y tratamiento oportuno.
      </p>

      <p className='fxh-subtitle'>🧠 Tipos de Distimia</p>

      <p className='fxh-subsubtitle'>📌 Distimia Típica</p>
      <ul className='fxh-list'>
        <li>Síntomas depresivos leves pero constantes.</li>
        <li>Duración ≥2 años en adultos (1 año en adolescentes).</li>
      </ul>

      <p className='fxh-subsubtitle'>📌 Distimia con Depresión Mayor Superpuesta</p>
      <ul className='fxh-list'>
        <li>Episodios de depresión mayor que ocurren sobre la distimia base.</li>
        <li>Conocida como "depresión doble".</li>
      </ul>

      <p className='fxh-subtitle'>🧬 Fisiopatología</p>
      <p className='fxh-text'>El cerebro con distimia muestra:</p>
      <ul className='fxh-list'>
        <li><strong>Desequilibrio neuroquímico:</strong> Serotonina ↓ (menos intenso que depresión mayor), Noradrenalina ↓ (afecta energía y motivación).</li>
        <li><strong>Cambios estructurales:</strong> Reducción moderada del hipocampo, menor actividad en la corteza prefrontal.</li>
      </ul>

      <p className='fxh-subtitle'>📌 Factores de Riesgo</p>
      <div className='fxh-table-wrapper'>
        <table className='fxh-table'>
          <thead>
            <tr>
              <th>Biológicos</th>
              <th>Psicológicos</th>
              <th>Ambientales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Historia familiar de depresión</td>
              <td>Baja autoestima</td>
              <td>Negligencia emocional en infancia</td>
            </tr>
            <tr>
              <td>Enfermedades crónicas</td>
              <td>Perfeccionismo</td>
              <td>Aislamiento social prolongado</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subtitle'>🚨 Síntomas Clave (DSM-5)</p>
      <p className='fxh-subsubtitle'>💡 Requisito: Estado de ánimo deprimido la mayor parte del día, durante ≥2 años</p>
      <ul className='fxh-list'>
        <li>Pérdida de apetito o sobrealimentación</li>
        <li>Insomnio o hipersomnia</li>
        <li>Falta de energía o fatiga</li>
        <li>Baja autoestima</li>
        <li>Dificultades de concentración</li>
        <li>Sentimientos de desesperanza</li>
      </ul>

      <p className='fxh-subtitle'>🩺 Diagnóstico</p>

      <p className='fxh-subsubtitle'>1. Evaluación Clínica</p>
      <ul className='fxh-list'>
        <li>Entrevista estructurada</li>
        <li><strong>Escalas:</strong> PHQ-9 (para depresión), Escala de Depresión de Hamilton</li>
      </ul>

      <p className='fxh-subsubtitle'>2. Diagnóstico Diferencial</p>
      <div className='fxh-table-wrapper'>
        <table className='fxh-table'>
          <thead>
            <tr>
              <th>Condición</th>
              <th>Diferencias</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Depresión Mayor</td>
              <td>Episodios más intensos pero menos duraderos</td>
            </tr>
            <tr>
              <td>Trastorno de Adaptación</td>
              <td>Relacionado con un evento estresante específico</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subsubtitle'>3. Exámenes Complementarios</p>
      <ul className='fxh-list'>
        <li><strong>Analítica:</strong> hormonas tiroideas, vitamina D</li>
        <li><strong>Neuroimagen:</strong> en casos resistentes</li>
      </ul>

      <p className='fxh-subtitle'>💊 Tratamiento Médico</p>

      <p className='fxh-subsubtitle'>🔴 Farmacológico</p>
      <ul className='fxh-list'>
        <li><strong>ISRS:</strong> Sertralina, Escitalopram</li>
        <li><strong>Bupropión:</strong> Para fatiga y falta de motivación</li>
      </ul>

      <p className='fxh-subsubtitle'>🟢 No Farmacológico</p>
      <ul className='fxh-list'>
        <li><strong>Terapia Cognitivo-Conductual (TCC):</strong> Reestructuración de pensamientos negativos, Activación conductual gradual</li>
        <li><strong>Mindfulness:</strong> Reducción del estrés basado en atención plena</li>
      </ul>

      <p className='fxh-subtitle'>🌱 Prevención y Manejo</p>

      <p className='fxh-subsubtitle'>🟢 Rutinas Saludables</p>
      <ul className='fxh-list'>
        <li>Ejercicio regular (aumenta BDNF)</li>
        <li>Higiene del sueño</li>
        <li>Exposición a luz solar</li>
      </ul>

      <p className='fxh-subsubtitle'>🧘‍♂️ Técnicas de Autogestión</p>
      <ul className='fxh-list'>
        <li>Diario de emociones</li>
        <li>Lista de actividades placenteras</li>
      </ul>

      <p className='fxh-subsubtitle'>🚨 Señales de Alerta</p>
      <ul className='fxh-list'>
        <li>Aislamiento social repentino</li>
        <li>Abandono de responsabilidades</li>
      </ul>

      <p className='fxh-subtitle'>📌 Conclusión</p>
      <p className='fxh-text'>
        La <strong>Distimia</strong>, aunque menos intensa que la depresión mayor, es igualmente discapacitante por su naturaleza crónica, llegando a normalizarse como parte de la personalidad. Sin embargo, es tratable: la combinación de terapia cognitivo-conductual, medicación cuando sea necesaria y cambios en el estilo de vida puede disipar esa "niebla emocional" persistente. El proceso requiere paciencia (por su cronicidad), pero la recuperación es posible, permitiendo redescubrir la capacidad de disfrutar la vida. Lo crucial es buscar ayuda profesional y entender que ese estado no define la identidad, sino que es una condición médica manejable.
      </p>
    </div>
  );
}

export default Distimia;
