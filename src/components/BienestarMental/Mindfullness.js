import React, { useEffect } from 'react';
import './Mindfulness.css';

function Mindfulness() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail5">

      <p className='fxh-title'>🧠 Mindfulness y Gestión Emocional</p>

      <p className='fxh-subtitle'>📌 ¿Qué es el Mindfulness?</p>
      <p className='fxh-text'>
        Mindfulness, o atención plena, es la capacidad de estar presente en el momento con conciencia, sin juzgar lo que ocurre.
        Esta práctica mejora la regulación emocional, reduce el estrés y mejora el rendimiento físico y mental.
      </p>

      <p className='fxh-subtitle'>🎯 Aplicación en el ejercicio físico</p>
      <ul className='fxh-list'>
        <li>Permite una mayor conexión cuerpo-mente durante el entrenamiento.</li>
        <li>Reduce distracciones y mejora el enfoque en la técnica.</li>
        <li>Contribuye a la prevención de lesiones al aumentar la conciencia corporal.</li>
      </ul>

      <p className='fxh-subtitle'>💡 Estrategias prácticas</p>
      <ul className='fxh-list'>
        <li><strong>Respiración consciente:</strong> Enfocar la atención en la inhalación y exhalación.</li>
        <li><strong>Escaneo corporal:</strong> Recorrer mentalmente cada parte del cuerpo para detectar tensiones.</li>
        <li><strong>Aceptación:</strong> Observar pensamientos sin juzgarlos.</li>
      </ul>

      <p className='fxh-subtitle'>🧬 Neurobiología</p>
      <p className='fxh-text'>
        Estudios con neuroimagen muestran cambios funcionales y estructurales en la corteza prefrontal,
        amígdala e ínsula. Esto mejora la regulación emocional y disminuye la reactividad al estrés.
      </p>

      <p className='fxh-subtitle'>🩺 Uso en Patologías Crónicas</p>
      <ul className='fxh-list'>
        <li><strong>Diabetes:</strong> Mejor control glucémico.</li>
        <li><strong>Hipertensión:</strong> Disminución presión arterial basal.</li>
        <li><strong>Dolor crónico:</strong> Mejora relación con el dolor.</li>
        <li><strong>Asma:</strong> Mejor autorregulación respiratoria.</li>
      </ul>

      <p className='fxh-subtitle'>📊 Rutina para el Ejercicio</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Etapa</th>
              <th>Ejercicio Mental</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Antes de entrenar</td>
              <td>2 minutos de respiración consciente</td>
            </tr>
            <tr>
              <td>Durante</td>
              <td>Foco en técnica y ritmo respiratorio</td>
            </tr>
            <tr>
              <td>Recuperación</td>
              <td>Escaneo corporal + agradecimiento</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subtitle'>📈 Seguimiento en FitMind</p>
      <p className='fxh-text'>
        En la app podrás registrar duración, nivel de estrés antes y después,
        y tipo de práctica para visualizar progreso.
      </p>

    </div>
  );
}

export default Mindfulness;
