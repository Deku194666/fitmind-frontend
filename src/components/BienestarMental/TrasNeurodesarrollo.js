import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarTrasNeurodesar from './NavBarTrasNeurodesar';
import './TrasNeurodesarrollo.css';

function TrasNeurodesarrollo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <NavBarTrasNeurodesar />

      <p className="fxh-title">Trastornos del Neurodesarrollo</p>

      <p className="fxh-subsubtitle">📌Introducción</p>
      <p className="fxh-text">
        Los <strong>Trastornos del Neurodesarrollo</strong> son condiciones de origen neurológico que afectan el crecimiento y desarrollo del sistema nervioso, 
        manifestándose en la infancia y persistiendo frecuentemente hasta la edad adulta. Representan el <strong>15-20% de las consultas pediátricas</strong> (OMS) 
        y requieren abordajes personalizados que combinen intervenciones terapéuticas, educativas y familiares. Estos trastornos no son "etapas" que se superan, sino 
        variaciones neurobiológicas que demandan adaptaciones específicas.
      </p>

      <p className="fxh-subsubtitle">
        📌 <Link to="/bienestarmental/enfmentales/tdah">TDAH</Link> (Niños y Adultos)
      </p>
      <p className="fxh-text">
        El <Link to="/bienestarmental/enfmentales/tdah">Trastorno por Déficit de Atención/Hiperactividad (TDAH)</Link> afecta aproximadamente al 
        <strong>5-7% de niños</strong> y al <strong>2.5-4% de adultos</strong> mundialmente. Se caracteriza por un patrón persistente de inatención, hiperactividad e impulsividad que interfiere con el funcionamiento diario. El 60% de los casos infantiles continúan presentando síntomas en la adultez.
      </p>

      <p className="fxh-text"><strong>Test de Conners (Versión 3):</strong></p>
      <ul className="fxh-list">
        <li><strong>Para niños:</strong> 87% de sensibilidad en diagnóstico, evalúa:
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Inatención (ej.: dificultad para sostener tareas)</li>
            <li>Hiperactividad (ej.: movimiento excesivo)</li>
            <li>Problemas de aprendizaje</li>
          </ul>
        </li>
        <li><strong>Para adultos:</strong> Escala autoaplicada que identifica:
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Dificultades organizativas</li>
            <li>Procrastinación crónica</li>
            <li>Regulación emocional</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-text"><strong>Técnicas de enfoque:</strong></p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Técnica</th>
              <th>Aplicación</th>
              <th>Beneficio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pomodoro</td>
              <td>25 min trabajo + 5 min descanso</td>
              <td>Mejora sostenibilidad atencional</td>
            </tr>
            <tr>
              <td>Body doubling</td>
              <td>Presencia física/virtual de acompañante</td>
              <td>Reduce procrastinación</td>
            </tr>
            <tr>
              <td>Externalización</td>
              <td>Listas visibles y recordatorios físicos</td>
              <td>Compensa fallos en memoria de trabajo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subsubtitle">
        📌 <Link to="/bienestarmental/enfmentales/tea">Trastorno del Espectro Autista (TEA)</Link>
      </p>
      <p className="fxh-text">
        El <Link to="/bienestarmental/enfmentales/tea">TEA</Link> afecta aproximadamente al <strong>1-2% de la población</strong>, con ratio hombres/mujeres 4:1. 
        Se caracteriza por diferencias en la comunicación social y patrones restringidos/repetitivos de comportamiento. El 70% presentan comorbilidades (ansiedad, TDAH o epilepsia).
      </p>

      <p className="fxh-text"><strong>Guía de comunicación:</strong></p>
      <ul className="fxh-list">
        <li><strong>Lenguaje claro:</strong> Evitar metáforas o ironías ("Pies en el suelo" vs "Pon atención").</li>
        <li><strong>Apoyos visuales:</strong> Uso de pictogramas o agendas gráficas.</li>
        <li><strong>Tiempo de procesamiento:</strong> Esperar 10-15 segundos tras hacer una pregunta.</li>
        <li><strong>Scripting social:</strong> Enseñar frases para interacciones específicas.</li>
      </ul>

      <p className="fxh-text"><strong>Integración sensorial:</strong></p>
      <ul className="fxh-list">
        <li><strong>Hipersensibilidad:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Auditiva: Uso de tapones o auriculares con cancelación de ruido.</li>
            <li>Táctil: Ropa sin etiquetas y tejidos suaves.</li>
          </ul>
        </li>
        <li><strong>Hipo-sensibilidad:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Propioceptiva: Actividades con presión profunda (abrazos firmes).</li>
            <li>Vestibular: Columpios o plataformas oscilantes.</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-subsubtitle">📌 Intervenciones Clave</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Trastorno</th>
              <th>Terapia</th>
              <th>Farmacología</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TDAH</td>
              <td>Entrenamiento en funciones ejecutivas</td>
              <td>Metilfenidato, Atomoxetina</td>
            </tr>
            <tr>
              <td>TEA</td>
              <td>Análisis Conductual Aplicado (ABA)</td>
              <td>Risperidona (para irritabilidad)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subsubtitle">🌱 Estrategias de Apoyo</p>
      <p className="fxh-text"><strong>🟢 Para familias:</strong></p>
      <ul className="fxh-list">
        <li><strong>Rutinas estructuradas:</strong> Horarios visuales predecibles.</li>
        <li><strong>Refuerzo positivo:</strong> Premiar esfuerzos más que resultados.</li>
        <li><strong>Espacios de descompresión:</strong> Zonas tranquilas para regularse.</li>
      </ul>

      <p className="fxh-text"><strong>🚨 Señales Tempranas (2-5 años):</strong></p>
      <ul className="fxh-list">
        <li><strong>TDAH:</strong> Dificultad para esperar turnos, accidentes frecuentes.</li>
        <li><strong>TEA:</strong> Ausencia de señalar objetos, poco contacto visual.</li>
      </ul>

      <p className="fxh-subsubtitle">📌Conclusión</p>
      <p className="fxh-text">
        Los trastornos del neurodesarrollo requieren <strong>adaptaciones específicas</strong> más que "curas". Con intervenciones tempranas y apoyos adecuados, 
        las personas con TDAH o TEA pueden desarrollar al máximo su potencial. La neurodiversidad enfatiza que estas diferencias cerebrales son variaciones naturales humanas 
        que merecen aceptación y ajustes razonables en entornos educativos/laborales.
      </p>
    </div>
  );
}

export default TrasNeurodesarrollo;
