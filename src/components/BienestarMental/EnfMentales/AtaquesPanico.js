import React, { useEffect } from 'react';
import './AtaquesPanico.css';

function AtaquesPanico() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className='fxh-title'>Ataques de Pánico (Trastorno de Pánico)</p>

      <p className='fxh-subtitle'>📌 Introducción</p>
      <p className='fxh-text'>
        Un ataque de pánico es un episodio repentino de <strong>miedo intenso o malestar extremo</strong> que alcanza su pico en minutos, acompañado de síntomas físicos y cognitivos abrumadores. El <strong>Trastorno de Pánico (TP)</strong> se diagnostica cuando los ataques son recurrentes y generan preocupación persistente. Afecta al <strong>2-3% de la población</strong> y es más frecuente en mujeres (2:1).
      </p>

      <p className='fxh-subsubtitle'>🧠 Tipos de Crisis Relacionadas</p>
      <ul className='fxh-list'>
        <li><strong>Ataque espontáneo (inesperado):</strong> Sin desencadenante claro.</li>
        <li><strong>Ataque situacional:</strong> Desencadenado por estímulos específicos (ej.: espacios cerrados).</li>
        <li><strong>Ataque nocturno:</strong> Ocurre durante el sueño, con activación súbita (taquicardia, sudoración).</li>
      </ul>

      <p className='fxh-subsubtitle'>🧬 Fisiopatología</p>
      <ul className='fxh-list'>
        <li><strong>Hiperactividad de la amígdala:</strong> Respuesta exagerada al peligro percibido.</li>
        <li><strong>Desequilibrio neuroquímico:</strong> Noradrenalina ↑ (sistema de alarma), GABA ↓ (falta de inhibición calmante).</li>
        <li><strong>Sistema nervioso autónomo:</strong> Activación del eje simpático (lucha/huida).</li>
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
              <td>Genética (40% heredabilidad)</td>
              <td>Catastrofización corporal ("me voy a morir")</td>
              <td>Eventos traumáticos (ej.: accidentes)</td>
            </tr>
            <tr>
              <td>Alteraciones en el locus coeruleus (noradrenalina)</td>
              <td>Miedo al miedo (ansiedad anticipatoria)</td>
              <td>Estrés crónico</td>
            </tr>
            <tr>
              <td>Enfermedades (hipertiroidismo, arritmias)</td>
              <td>-</td>
              <td>Consumo de estimulantes (cafeína, drogas)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subsubtitle'>🚨 Síntomas Clave (DSM-5)</p>
      <p className='fxh-text'><strong>💡 Criterios para ataque de pánico:</strong></p>
      <ul className='fxh-list'>
        <li>4+ de estos síntomas (en ≤10 minutos):</li>
        <li><strong>Cardiovasculares:</strong> Taquicardia, palpitaciones.</li>
        <li><strong>Respiratorios:</strong> Disnea, sensación de ahogo.</li>
        <li><strong>Neurológicos:</strong> Mareos, desrealización.</li>
        <li><strong>Cognitivos:</strong> Miedo a morir o "volverse loco".</li>
      </ul>

      <p className='fxh-text'><strong>💡 Criterios para Trastorno de Pánico:</strong></p>
      <ul className='fxh-list'>
        <li>Ataques recurrentes + 1 mes de:</li>
        <li>- Preocupación persistente por nuevos ataques.</li>
        <li>- Cambios conductuales para evitarlos (ej.: no salir de casa).</li>
      </ul>

      <p className='fxh-subsubtitle'>🩺 Diagnóstico</p>
      <p className='fxh-text'>1. Evaluación Clínica:</p>
      <ul className='fxh-list'>
        <li>Escala <strong>PDSS</strong> (Panic Disorder Severity Scale).</li>
        <li>Descarte de condiciones médicas (arritmias, hipertiroidismo).</li>
      </ul>

      <p className='fxh-text'>2. Escalas Validadas:</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Test</th>
              <th>Qué Mide</th>
              <th>Puntaje</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PDSS</td>
              <td>Severidad del TP</td>
              <td>0-28</td>
            </tr>
            <tr>
              <td>ASI-3</td>
              <td>Sensibilidad a la ansiedad</td>
              <td>0-72</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-text'>3. Exámenes Complementarios:</p>
      <ul className='fxh-list'>
        <li><strong>Analítica sanguínea:</strong> hormonas tiroideas, cortisol.</li>
        <li><strong>ECG:</strong> descartar arritmias.</li>
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
              <td>ISRS</td>
              <td>Paroxetina, Sertralina</td>
              <td>↑ Serotonina</td>
            </tr>
            <tr>
              <td>Benzodiacepinas</td>
              <td>Alprazolam (corto plazo)</td>
              <td>Potencian GABA</td>
            </tr>
            <tr>
              <td>IRSN</td>
              <td>Venlafaxina</td>
              <td>↑ Serotonina + Noradrenalina</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-text'>🟢 No Farmacológico:</p>
      <ul className='fxh-list'>
        <li><strong>TCC:</strong> Exposición interoceptiva (simular síntomas para reducir el miedo).</li>
        <li><strong>Mindfulness:</strong> Enfocarse en el presente sin juzgar los síntomas.</li>
      </ul>

      <p className='fxh-subsubtitle'>🌱 Prevención y Manejo Durante una Crisis</p>
      <ol className='fxh-list'>
        <li><strong>Reconocer:</strong> "Esto es un ataque de pánico, no peligro real".</li>
        <li><strong>Respiración 4-7-8:</strong> Inhalar 4s, sostener 7s, exhalar 8s.</li>
        <li><strong>Anclaje sensorial:</strong> Tocar un objeto frío o contar colores.</li>
        <li><strong>Repetir mantras:</strong> "Pasará en minutos".</li>
        <li><strong>Pos-crisis:</strong> Registrar desencadenantes.</li>
      </ol>

      <p className='fxh-text'>🧘‍♂️ Cambios en el Estilo de Vida:</p>
      <ul className='fxh-list'>
        <li>Reducir cafeína/alcohol.</li>
        <li>Ejercicio regular (regula noradrenalina).</li>
      </ul>

      <p className='fxh-text'>🚨 Señales de Alerta:</p>
      <ul className='fxh-list'>
        <li>Evitar lugares donde ocurrieron ataques previos (agorafobia).</li>
        <li>Visitas frecuentes a urgencias por miedo a infarto.</li>
      </ul>

      <p className='fxh-subtitle'>📌 Conclusión</p>
      <p className='fxh-text'>
        El Trastorno de Pánico es altamente tratable con <strong>TCC + ISRS</strong>. La psicoeducación es vital para entender que los síntomas, aunque aterradores, no son peligrosos. Sin tratamiento, puede derivar en agorafobia o depresión.
      </p>
    </div>
  );
}

export default AtaquesPanico;
