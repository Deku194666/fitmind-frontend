import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AnorexiaNerviosa.css';

function AnorexiaNerviosa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Anorexia Nerviosa</p>

      <p className="fxh-subsubtitle">📌Introducción</p>
      <p className="fxh-text">
        La anorexia nerviosa es un trastorno alimentario potencialmente mortal caracterizado por 
        <strong> restricción calórica extrema</strong>, <strong>miedo intenso a ganar peso</strong> y 
        <strong> alteración en la percepción corporal</strong>. Con una mortalidad del <strong>5-10% a 10 años</strong> 
        (la más alta entre los trastornos psiquiátricos), afecta predominantemente a mujeres jóvenes (ratio 9:1) 
        y suele iniciarse entre los <strong>12-25 años</strong>. No es un "estilo de vida" sino una enfermedad biopsicosocial compleja.
      </p>

      <p className="fxh-subsubtitle">🧠 Subtipos Clínicos</p>
      <ul className="fxh-list">
        <li><strong>Restrictivo:</strong> Pérdida de peso mediante dieta, ayuno y ejercicio excesivo (50-60% de casos).</li>
        <li><strong>Atracón/purga:</strong> Episodios de ingesta compulsiva seguidos de vómitos/laxantes (más común en varones).</li>
        <li><strong>Mixto:</strong> Combinación de ambos patrones con variabilidad temporal.</li>
      </ul>

      <p className="fxh-subsubtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li><strong>Alteración en la red de recompensa:</strong> Hiperactivación del núcleo accumbens ante imágenes de bajo peso.</li>
        <li><strong>Disfunción hipotalámica:</strong> Niveles alterados de leptina, grelina y péptido YY.</li>
        <li><strong>Cambios estructurales cerebrales:</strong> Reducción de volumen en ínsula y corteza prefrontal.</li>
        <li><strong>Adaptación metabólica:</strong> Disminución del metabolismo basal (hasta un 30-40%).</li>
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
              <td>Genética (heredabilidad 50-80%)</td>
              <td>Perfeccionismo patológico</td>
              <td>Presión cultural por delgadez</td>
            </tr>
            <tr>
              <td>Polimorfismos en genes BDNF y COMT</td>
              <td>Baja autoestima corporal</td>
              <td>Deportes estéticos (danza, gimnasia)</td>
            </tr>
            <tr>
              <td>Comorbilidad con TOC (30-40%)</td>
              <td>Alexitimia (dificultad identificar emociones)</td>
              <td>Historia de bullying por peso</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subsubtitle">🚨 Criterios Diagnósticos (DSM-5)</p>
      <p className="fxh-text"><strong>💡 Requisitos:</strong></p>
      <ul className="fxh-list">
        <li><strong>Restricción energética:</strong> Peso corporal significativamente bajo (IMC ≤17.5 en adultos).</li>
        <li><strong>Miedo intenso a engordar:</strong> Persiste a pesar de la delgadez.</li>
        <li><strong>Alteración corporal:</strong> Distorsión de la imagen corporal o subestimación del bajo peso.</li>
        <li><strong>Especificar:</strong> Tipo restrictivo o atracón/purga + nivel de gravedad (IMC).</li>
      </ul>

      <p className="fxh-subsubtitle">🩺 Evaluación Clínica</p>
      <p className="fxh-text"><strong>1. Exámenes Esenciales:</strong></p>
      <ul className="fxh-list">
        <li><strong>Analítica completa:</strong> Electrolitos, función tiroidea, albúmina, hemograma.</li>
        <li><strong><Link to="/examenes/ekg">Electrocardiograma (EKG)</Link>:</strong> Detectar bradicardia (menor de 50 lpm) o prolongación QT.</li>
        <li><strong>Densitometría ósea:</strong> En casos mayor a 6 meses de amenorrea.</li>
      </ul>

      <p className="fxh-text"><strong>2. Escalas Validadas:</strong></p>
      <ul className="fxh-list">
        <li><strong>EDI-3:</strong> Evalúa actitudes y síntomas.</li>
        <li><strong>SCOFF Questionnaire:</strong> Screening rápido (2+ respuestas positivas = riesgo).</li>
      </ul>

      <p className="fxh-subsubtitle">💊 Tratamiento Multidisciplinar</p>
      <p className="fxh-text"><strong>🔴 Intervenciones Médicas:</strong></p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Ámbito</th>
              <th>Intervención</th>
              <th>Detalles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nutricional</td>
              <td>Realimentación progresiva</td>
              <td>1,200-1,500 kcal/día inicial, aumento 200-300 kcal/semana</td>
            </tr>
            <tr>
              <td>Farmacológico</td>
              <td>Olanzapina (2.5-10 mg/día)</td>
              <td>Reduce ansiedad y facilita ganancia peso</td>
            </tr>
            <tr>
              <td>Monitorización</td>
              <td>Protocolo de realimentación</td>
              <td>Prevenir síndrome de realimentación (fósforo menor a 3.0 mg/dL)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-text"><strong>🟢 Psicoterapias:</strong></p>
      <ul className="fxh-list">
        <li><strong>Terapia Familiar (Maudsley):</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Fase 1: Padres supervisan todas las comidas.</li>
            <li>Fase 2: Transición progresiva de control al paciente.</li>
            <li>Fase 3: Trabajar autonomía y prevención de recaídas.</li>
          </ul>
        </li>
        <li><strong>CBT-E (TCC específica):</strong> Modificar creencias sobre peso, comida y autovalía.</li>
        <li><strong>Terapia de Aceptación y Compromiso (ACT):</strong> Manejo de emociones sin conductas restrictivas.</li>
      </ul>

      <p className="fxh-subsubtitle">🌱 Manejo de la Imagen Corporal</p>
      <ul className="fxh-list">
        <li><strong>Exposición con espejo:</strong> Observación gradual sin conductas de evitación.</li>
        <li><strong>Reconocimiento corporal:</strong> Uso de prendas ajustadas para reintegrar sensaciones.</li>
        <li><strong>Reestructuración cognitiva:</strong> Cuestionar creencias ("Grasa = seguridad").</li>
      </ul>

      <p className="fxh-text"><strong>🚨 Señales de Alerta Médica:</strong></p>
      <ul className="fxh-list">
        <li><strong>Inestabilidad cardiovascular:</strong> Bradicardia menor a 40 lpm, hipotensión menor a  90/60 mmHg.</li>
        <li><strong>Alteraciones hidroelectrolíticas:</strong> Potasio menor a 3.0 mEq/L, fósforo menor a  2.0 mg/dL.</li>
        <li><strong>Hipotermia:</strong> Temperatura menor a  35.5°C.</li>
      </ul>

      <p className="fxh-subsubtitle">📌 Pronóstico</p>
      <p className="fxh-text">
        Con tratamiento intensivo, <strong>50-70% logran recuperación significativa</strong>, pero el 30% desarrolla curso crónico.
        Factores de buen pronóstico incluyen diagnóstico temprano (menos de 3 años de evolución) y apoyo familiar. 
        La mortalidad a largo plazo sigue siendo elevada (20% a 20 años), principalmente por complicaciones médicas o suicidio.
      </p>
    </div>
  );
}

export default AnorexiaNerviosa;
