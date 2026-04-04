import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contusion.css'; // Nuevo CSS basado en LesionFCT

function Contusion() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxfct-detail">

      <p className="fxfct-title">Contusiones Musculares</p>

      <p className="fxfct-subtitle">📌 Introducción</p>
      <p className="fxfct-text">
        Las <strong>Contusiones Musculares</strong> son lesiones por impacto directo que representan el <strong>20-30% de las lesiones deportivas</strong> en deportes de contacto como fútbol, rugby y artes marciales🥊. Ocurren cuando un traumatismo comprime el músculo contra estructuras óseas, causando daño vascular y acumulación de sangre (hematoma) en el tejido muscular. Su gravedad depende de la fuerza del impacto y la vascularización de la zona afectada.
      </p>

      <p className="fxfct-subtitle">📌 Clasificación por Gravedad 🧠</p>
      <ul className="fxfct-list">
        <li><strong>Grado I (Leve):</strong> Hematoma intramuscular pequeño (menor a 3cm). Dolor moderado con menor a 70% de rango articular conservado.</li>
        <li><strong>Grado II (Moderada):</strong> Hematoma 3-5cm. Pérdida de 30-50% de fuerza y movimiento.</li>
        <li><strong>Grado III (Grave):</strong> Hematoma grande (mayor a 5cm) o intermuscular. Limitación funcional severa (mayor a 50% pérdida movimiento).</li>
      </ul>

      <p className="fxfct-subtitle">📌 Fisiopatología 🧬</p>
      <p className="fxfct-text">El mecanismo lesional involucra tres fases:</p>
      <ul className="fxfct-list">
        <li><strong>Trauma inicial:</strong> Ruptura de vasos sanguíneos y fibras musculares → formación de hematoma.</li>
        <li><strong>Respuesta inflamatoria:</strong> Edema y liberación de citoquinas en primeras 72h.</li>
        <li><strong>Reparación:</strong> Fibroblastos forman tejido cicatricial (riesgo de miositis osificante en 5-10% de casos).</li>
      </ul>
      <p className="fxfct-text">Los músculos más afectados son cuádriceps (40%), gemelos (25%) y bíceps braquial (15%) por su localización superficial.</p>

      <p className="fxfct-subtitle">📌 Factores de Riesgo</p>
      <ul className="fxfct-list">
        <li>Deportes de contacto/colisión (fútbol, rugby, baloncesto)</li>
        <li><Link className="fxfct-link" to="/ecnt/hemofilia">Trastornos de coagulación</Link> (aumentan tamaño del hematoma)</li>
        <li>Uso de anticoagulantes</li>
        <li>Mala técnica en deportes (ej.: bloqueos incorrectos en artes marciales)</li>
        <li>Equipamiento deportivo inadecuado (falta de protecciones)</li>
      </ul>

      <p className="fxfct-subtitle">📌 Síntomas Característicos</p>
      <p className="fxfct-text">Manifestaciones clínicas por fase:</p>
      <ul className="fxfct-list">
        <li>📌 <strong>Inmediatas (0-2h):</strong> Dolor punzante, espasmo muscular protector</li>
        <li>📌 <strong>6-24h:</strong> Hinchazón progresiva, equimosis (moretón)</li>
        <li>📌 <strong>24-72h:</strong> Rigidez, limitación funcional máxima</li>
        <li>📌 <strong>mayor a 72h:</strong> Cambio coloración piel (verde-amarilla) por degradación hemoglobina</li>
      </ul>

      <p className="fxfct-subtitle">🩺 Diagnóstico</p>
      <p className="fxfct-text">Evaluación Inicial</p>
      <p className="fxfct-text">📌 Protocolo PRICE (primeras 48h):</p>
      <ul className="fxfct-list">
        <li>🛡️ <strong>P</strong>rotection: Evitar nuevos traumatismos</li>
        <li>❄️ <strong>R</strong>est: Reposo relativo 24-48h</li>
        <li>🧊 <strong>I</strong>ce: Crioterapia 15min cada 2h</li>
        <li>🎗️ <strong>C</strong>ompression: Vendaje elástico (30-40mmHg)</li>
        <li>🔼 <strong>E</strong>levation: Elevar extremidad sobre corazón</li>
      </ul>

      <p className="fxfct-subtitle">📌 Estudios de Imagen</p>
      <div className="fxfct-table-wrapper">
        <table className="fxfct-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link className="fxfct-link" to="/examenes/ecografia">Ecografía</Link></td>
              <td>- Tamaño hematoma<br/>- Integridad fascia<br/>- Flujo sanguíneo residual</td>
              <td>Primera elección (rápida, dinámica)</td>
            </tr>
            <tr>
              <td><Link className="fxfct-link" to="/examenes/rnm">RMN</Link></td>
              <td>- Extensión real del daño<br/>- Edema óseo asociado<br/>- Signos tempranos de miositis</td>
              <td>Casos complejos o duda diagnóstica</td>
            </tr>
            <tr>
              <td>RX</td>
              <td>- Fracturas asociadas<br/>- Calcificaciones tardías (mayor a 3s)</td>
              <td>Descarta complicaciones óseas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxfct-subtitle">📌 Diagnóstico Diferencial</p>
      <ul className="fxfct-list">
        <li><strong>Desgarro muscular:</strong> Dolor en contracción activa (no solo a la palpación)</li>
        <li><strong>Fractura por estrés:</strong> Dolor nocturno y con carga peso</li>
        <li><strong>Trombosis venosa:</strong> Signos de inflamación vascular</li>
      </ul>

      <p className="fxfct-subtitle">📌 Tratamiento Médico</p>
      <ul className="fxfct-list">
        <li>🔴 Fase Aguda (0-72h): Protocolo PRICE estricto, analgesia, movilización pasiva suave</li>
        <li>🔴 Fase Subaguda (3d-2s): Termoterapia, drenaje linfático, ejercicios isométricos, ultrasonido pulsado</li>
        <li>🔴 Fase Crónica (mayor a 2s): Masaje profundo, estiramientos dinámicos, electroterapia</li>
      </ul>

      <p className="fxfct-subtitle">📌 Tratamientos Avanzados</p>
      <ul className="fxfct-list">
        <li><strong>Punción evacuadora:</strong> Hematomas mayor a 5cm con tensión tisular</li>
        <li><strong>Ondas de choque:</strong> Prevenir miositis osificante</li>
        <li><strong>EPI (Electrólisis Percutánea):</strong> En fibrosis residual</li>
      </ul>

      <p className="fxfct-subtitle">📌 Rehabilitación Progresiva</p>
      <div className="fxfct-table-wrapper">
        <table className="fxfct-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Objetivos</th>
              <th>Ejercicios</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Inflamatoria (0-3d)</td>
              <td>Control edema, mantener rango pasivo</td>
              <td>Movilizaciones pasivas suaves</td>
            </tr>
            <tr>
              <td>2. Reparación (3d-3s)</td>
              <td>Reabsorber hematoma, recuperar fuerza</td>
              <td>Isométricos → concéntricos ligeros</td>
            </tr>
            <tr>
              <td>3. Remodelación (3-6s)</td>
              <td>Recuperar función completa, prevenir recidivas</td>
              <td>Excéntricos → pliometría</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxfct-subtitle">📌 Complicaciones</p>
      <ul className="fxfct-list">
        <li><strong>Síndrome compartimental:</strong> Urgencia quirúrgica</li>
        <li><strong>Miositis osificante:</strong> Calcificación intramuscular</li>
        <li><strong>Fibrosis muscular:</strong> Rigidez y dolor crónico</li>
        <li><strong>Infección:</strong> Sobre todo en hematomas drenados</li>
      </ul>

      <p className="fxfct-subtitle">📌 Conclusión</p>
      <p className="fxfct-text">
        Las <strong>Contusiones Musculares</strong>, aunque frecuentes, requieren manejo adecuado para evitar complicaciones. El protocolo PRICE en fase aguda seguido de rehabilitación progresiva es fundamental. La ecografía temprana ayuda a clasificar la gravedad y guiar el tratamiento. En deportistas, el uso de protecciones y técnica adecuada reduce su incidencia. La recuperación completa suele lograrse en 2-6 semanas según gravedad, siendo clave respetar los tiempos biológicos de reparación tisular.
      </p>

    </div>
  );
}

export default Contusion;
