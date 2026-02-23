import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TDAH.css';

function TDAH() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Trastorno por Déficit de Atención e Hiperactividad (TDAH)</p>

      <p className="fxh-subsubtitle">📌Introducción</p>
      <p className="fxh-text">
        El TDAH es un trastorno del neurodesarrollo que afecta aproximadamente al <strong>5-7% de los niños</strong> y persiste en la edad adulta en el 60% de los casos (OMS, 2023), 
        con una ratio de 2:1 hombres/mujeres. Se caracteriza por patrones persistentes de <strong>inatención</strong>, <strong>hiperactividad</strong> e <strong>impulsividad</strong> que interfieren con el funcionamiento diario. 
        Es un trastorno con base biológica que requiere manejo multimodal.
      </p>

      <p className="fxh-subsubtitle">🧠 Subtipos (DSM-5)</p>
      <ul className="fxh-list">
        <li><strong>Presentación combinada:</strong> Síntomas de inatención e hiperactividad-impulsividad.</li>
        <li><strong>Presentación predominante inatenta:</strong> Dificultades de atención sin hiperactividad marcada.</li>
        <li><strong>Presentación predominante hiperactiva/impulsiva:</strong> Inquietud e impulsividad predominantes.</li>
      </ul>

      <p className="fxh-subsubtitle">🧬 Bases Neurobiológicas</p>
      <ul className="fxh-list">
        <li><strong>Disfunción dopaminérgica:</strong> Alteración en receptores DRD4 y DAT1.</li>
        <li><strong>Diferencias estructurales:</strong> Volumen reducido en corteza prefrontal y ganglios basales.</li>
        <li><strong>Factores genéticos:</strong> 75% heredabilidad, genes implicados (DRD4, SNAP25).</li>
        <li><strong>Procesamiento ejecutivo:</strong> Dificultades en memoria de trabajo, control inhibitorio.</li>
      </ul>

      <p className="fxh-subsubtitle">📌 Características Clave</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Área</th>
              <th>Manifestaciones</th>
              <th>Ejemplos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inatención</td>
              <td>Dificultad para mantener el foco</td>
              <td>Errores por descuido, pérdida de objetos</td>
            </tr>
            <tr>
              <td>Hiperactividad</td>
              <td>Movimiento excesivo</td>
              <td>Incapacidad para permanecer sentado, hablar en exceso</td>
            </tr>
            <tr>
              <td>Impulsividad</td>
              <td>Actuar sin pensar</td>
              <td>Interrumpir conversaciones, tomar decisiones precipitadas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subsubtitle">🚨 Señales Tempranas (6-12 años)</p>
      <ul className="fxh-list">
        <li>Dificultad para seguir instrucciones múltiples.</li>
        <li>Evita tareas que requieren esfuerzo mental sostenido.</li>
        <li>Se levanta en situaciones donde debe permanecer sentado.</li>
        <li>Habla excesivamente y responde antes de terminar la pregunta.</li>
        <li>Dificultad para esperar turnos en juegos o actividades.</li>
      </ul>

      <p className="fxh-subsubtitle">🩺 Evaluación Diagnóstica</p>
      <p className="fxh-text"><strong>1. Herramientas Clínicas:</strong></p>
      <ul className="fxh-list">
        <li><strong>Conners CBRS:</strong> Escalas para evaluar síntomas.</li>
        <li><strong>ADHD-RS:</strong> Escala de calificación para TDAH.</li>
        <li><strong>Evaluación neuropsicológica:</strong> Pruebas de funciones ejecutivas.</li>
      </ul>

      <p className="fxh-text"><strong>2. Diagnóstico Diferencial:</strong></p>
      <ul className="fxh-list">
        <li><strong>TEA:</strong> Dificultades sociales más marcadas.</li>
        <li><strong>Ansiedad:</strong> Inatención secundaria a preocupación.</li>
        <li><strong>Trastornos del aprendizaje:</strong> Dificultades académicas específicas.</li>
      </ul>

      <p className="fxh-subsubtitle">💡 Estrategias de Manejo</p>
      <p className="fxh-text"><strong>🔹 Ambiente:</strong></p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Técnica</th>
              <th>Implementación</th>
              <th>Beneficio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estructuración</td>
              <td>Rutinas predecibles</td>
              <td>Reduce ansiedad</td>
            </tr>
            <tr>
              <td>Fragmentación</td>
              <td>Dividir tareas en pasos</td>
              <td>Facilita la ejecución</td>
            </tr>
            <tr>
              <td>Señales visuales</td>
              <td>Recordatorios gráficos</td>
              <td>Compensa fallas de memoria</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-text"><strong>🔹 Manejo Conductual:</strong></p>
      <ul className="fxh-list">
        <li><strong>Refuerzo positivo:</strong> Premiar conductas deseadas inmediatamente.</li>
        <li><strong>Tiempo fuera:</strong> Para manejar impulsividad agresiva.</li>
        <li><strong>Economía de fichas:</strong> Sistema estructurado de recompensas.</li>
      </ul>

      <p className="fxh-subsubtitle">🌱 Intervenciones Basadas en Evidencia</p>
      <ul className="fxh-list">
        <li><strong>Terapia cognitivo-conductual:</strong> Para manejo de impulsividad en adultos.</li>
        <li><strong>Entrenamiento en habilidades parentales:</strong> Para manejo en niños.</li>
        <li><strong>Intervenciones académicas:</strong> Adaptaciones en el aula.</li>
        <li><strong>Mindfulness:</strong> Mejora atención y regulación emocional.</li>
      </ul>

      <p className="fxh-text"><strong>🚨 Consideraciones Clínicas:</strong></p>
      <ul className="fxh-list">
        <li><strong>Comorbilidades frecuentes:</strong> Trastornos de aprendizaje (40%), ansiedad (30%), trastorno oposicionista (50%).</li>
        <li><strong>Manejo farmacológico:</strong> Estimulantes (metilfenidato) y no estimulantes (atomoxetina).</li>
        <li><strong>Pronóstico:</strong> Mejor con diagnóstico temprano e intervención multimodal.</li>
      </ul>

      <p className="fxh-subsubtitle">📌 Enfoque Neurodiverso</p>
      <p className="fxh-text">
        El TDAH no es un "déficit" sino una <strong>forma diferente de funcionamiento cerebral</strong>. Las intervenciones deben enfocarse en desarrollar fortalezas (creatividad, pensamiento divergente) 
        mientras se proveen estrategias para los desafíos. La meta es lograr un <strong>funcionamiento óptimo</strong> respetando las características individuales.
      </p>
    </div>
  );
}

export default TDAH;
