import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TEA.css';

function TEA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail23">
      <p className="fxh-title">Trastorno del Espectro Autista (TEA)</p>

      <p className="fxh-subsubtitle">📌Introducción</p>
      <p className="fxh-text">
        El Trastorno del Espectro Autista es una condición del neurodesarrollo que afecta aproximadamente al <strong>1-2% de la población mundial</strong> (CDC, 2023), con una ratio de 4:1 hombres/mujeres. 
        Se caracteriza por diferencias en la <strong>comunicación social</strong> y patrones <strong>repetitivos/restrictivos</strong> de comportamiento. No es una enfermedad sino una forma diferente de procesar la información, 
        que requiere apoyos personalizados según cada individuo.
      </p>

      <p className="fxh-subsubtitle">🧠 Niveles de Soporte (DSM-5)</p>
      <ul className="fxh-list">
        <li><strong>Nivel 1 (Requiere apoyo):</strong> Dificultades en interacciones sociales, independiente pero con desafíos.</li>
        <li><strong>Nivel 2 (Apoyo sustancial):</strong> Comunicación verbal y no verbal marcadamente alterada, rutinas inflexibles.</li>
        <li><strong>Nivel 3 (Apoyo muy sustancial):</strong> Limitaciones graves en comunicación, conductas disruptivas.</li>
      </ul>

      <p className="fxh-subsubtitle">🧬 Bases Neurobiológicas</p>
      <ul className="fxh-list">
        <li><strong>Conectividad cerebral atípica:</strong> Hipoconectividad en redes sociales, hiperconectividad en áreas sensoriales.</li>
        <li><strong>Diferencias estructurales:</strong> Mayor volumen cerebral en primeros años, crecimiento acelerado de la amígdala.</li>
        <li><strong>Factores genéticos:</strong> 80% heredabilidad, genes implicados (SHANK3, NLGN3).</li>
        <li><strong>Procesamiento sensorial:</strong> 90% presentan hipo/hipersensibilidad.</li>
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
              <td>Social</td>
              <td>Dificultad en reciprocidad emocional</td>
              <td>No responder a sonrisas, contacto visual limitado</td>
            </tr>
            <tr>
              <td>Comunicación</td>
              <td>Uso literal del lenguaje</td>
              <td>Dificultad con ironía o metáforas</td>
            </tr>
            <tr>
              <td>Conductual</td>
              <td>Intereses restringidos</td>
              <td>Fascinación por temas específicos (ej: horarios de trenes)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subsubtitle">🚨 Señales Tempranas (12-24 meses)</p>
      <ul className="fxh-list">
        <li>No responde a su nombre para los 12 meses.</li>
        <li>No señala objetos para mostrar interés (14 meses).</li>
        <li>No juega "simulando" (ej: dar de comer a muñecas) para los 18 meses.</li>
        <li>Evita el contacto visual o prefiere jugar solo.</li>
        <li>Alinamiento obsesivo de juguetes.</li>
      </ul>

      <p className="fxh-subsubtitle">🩺 Evaluación Diagnóstica</p>
      <p className="fxh-text"><strong>1. Herramientas Clínicas:</strong></p>
      <ul className="fxh-list">
        <li><strong>ADOS-2:</strong> Observación semiestructurada (gold standard).</li>
        <li><strong>ADI-R:</strong> Entrevista a padres/cuidadores.</li>
        <li><strong>M-CHAT:</strong> Cuestionario de screening para niños pequeños.</li>
      </ul>

      <p className="fxh-text"><strong>2. Diagnóstico Diferencial:</strong></p>
      <ul className="fxh-list">
        <li><strong>TDAH:</strong> Dificultad atención sin problemas sociales.</li>
        <li><strong>Mutismo selectivo:</strong> Ansiedad social específica.</li>
        <li><strong>Trastorno del lenguaje:</strong> Sin patrones repetitivos.</li>
      </ul>

      <p className="fxh-subsubtitle">💡 Estrategias de Apoyo</p>
      <p className="fxh-text"><strong>📌 Comunicación:</strong></p>
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
              <td>Lenguaje claro</td>
              <td>Frases cortas y literales</td>
              <td>Reduce malentendidos</td>
            </tr>
            <tr>
              <td>Apoyos visuales</td>
              <td>Agendas con pictogramas</td>
              <td>Facilita transiciones</td>
            </tr>
            <tr>
              <td>Historias sociales</td>
              <td>Guiones para situaciones</td>
              <td>Prepara para interacciones</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-text"><strong>📌 Integración Sensorial:</strong></p>
      <ul className="fxh-list">
        <li><strong>Hipersensibilidad auditiva:</strong> Uso de auriculares con cancelación de ruido.</li>
        <li><strong>Hipo-sensibilidad táctil:</strong> Chalecos con peso o abrazos firmes.</li>
        <li><strong>Dificultad vestibular:</strong> Columpios o hamacas terapéuticas.</li>
      </ul>

      <p className="fxh-subsubtitle">🌱 Intervenciones Basadas en Evidencia</p>
      <ul className="fxh-list">
        <li><strong>ABA (Análisis Conductual Aplicado):</strong> 40 horas/semana en niños pequeños.</li>
        <li><strong>TEACCH:</strong> Estructuración visual del ambiente.</li>
        <li><strong>Floortime:</strong> Interacción a través del juego.</li>
        <li><strong>Terapia Ocupacional:</strong> Enfoque en integración sensorial.</li>
      </ul>

      <p className="fxh-text"><strong>🚨 Consideraciones Clínicas:</strong></p>
      <ul className="fxh-list">
        <li><strong>Comorbilidades frecuentes:</strong> Ansiedad (40%), epilepsia (30%), TDAH (50%).</li>
        <li><strong>Manejo farmacológico:</strong> Sólo para síntomas específicos (ej: risperidona para irritabilidad).</li>
        <li><strong>Pronóstico:</strong> Mejor con diagnóstico temprano (menor a 3 años) e intervención intensiva.</li>
      </ul>

      <p className="fxh-subsubtitle">📌 Enfoque Neurodiverso</p>
      <p className="fxh-text">
        El TEA no es un "déficit" sino una <strong>forma diferente de ser</strong>. Las intervenciones deben enfocarse en desarrollar fortalezas (atención al detalle, pensamiento lógico) 
        mientras se proveen apoyos para los desafíos. La meta no es "normalizar" sino permitir una <strong>calidad de vida autodeterminada</strong>, respetando la identidad autista.
      </p>
    </div>
  );
}

export default TEA;
