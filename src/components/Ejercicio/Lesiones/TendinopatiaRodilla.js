import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TendinopatiasRodilla.css';

function TendinopatiasRodilla() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail46">

      <p className="fxh-title">Lesiones Tendinosas de Rodilla</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las <strong>tendinopatías y roturas de tendones de rodilla</strong> son lesiones frecuentes, especialmente en deportistas. 
        Afectan principalmente al <strong>tendón rotuliano</strong> y al <strong>tendón cuadricipital</strong>, siendo causas importantes de dolor anterior de rodilla. 
        También pueden verse involucrados los tendones de la <strong>pata de ganso</strong>, especialmente en corredores y pacientes con sobrepeso.
      </p>

      <p className="fxh-subtitle">Tendones Más Afectados 🦵</p>
      <ul className="fxh-list">
        <li><strong>Tendón rotuliano</strong>: Desde el vértice de la rótula a la tuberosidad tibial</li>
        <li><strong>Tendón cuadricipital</strong>: Desde el cuádriceps al polo superior de la rótula</li>
        <li><strong>Pata de ganso</strong>: Inserción conjunta de sartorio, grácil y semitendinoso en tibia proximal medial</li>
      </ul>

      <p className="fxh-subtitle">Clasificación Clínica 📊</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Lesión</th>
              <th>Síntomas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I (Leve)</td>
              <td>Tendinopatía reactiva</td>
              <td>Dolor post-ejercicio, sin limitación funcional</td>
            </tr>
            <tr>
              <td>II (Moderado)</td>
              <td>Tendinosis degenerativa</td>
              <td>Dolor al inicio, mejora con actividad, empeora al final</td>
            </tr>
            <tr>
              <td>III (Severo)</td>
              <td>Rotura parcial o total</td>
              <td>Dolor súbito, incapacidad para extender rodilla activamente</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Diagnóstico 🩺</p>

      <p className="fxh-subsubtitle">1. Evaluación Clínica</p>
      <ul className="fxh-list">
        <li><strong>Dolor anterior</strong> a la palpación del tendón afectado</li>
        <li><strong>Signo de extensión activa</strong>: Dolor o imposibilidad al elevar pierna extendida</li>
        <li><strong>Prueba de salto</strong> o <strong>sentadilla</strong>: Reproduce dolor</li>
      </ul>

      <p className="fxh-subsubtitle">2. Estudios de Imagen</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ecografía</td>
              <td>Engrosamiento, degeneración, rotura parcial</td>
              <td>Evaluación inicial, dinámica</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Rotura completa, edema, cambios crónicos</td>
              <td>Confirmación y planificación quirúrgica</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>
      <ul className="fxh-list">
        <li>Reposo relativo y modificación de la carga</li>
        <li>Ejercicios excéntricos (squat en declive, step up)</li>
        <li>Infiltraciones con PRP o corticoides (casos seleccionados)</li>
        <li>Fisioterapia con terapia manual, electroanalgesia y estiramientos</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>
      <ul className="fxh-list">
        <li>Indicado en roturas completas o lesiones crónicas refractarias</li>
        <li><strong>Sutura directa</strong> del tendón rotuliano o cuadricipital</li>
        <li><strong>Desbridamiento</strong> en casos de tendinosis severa</li>
        <li>Refuerzos con injerto en roturas extensas</li>
      </ul>

      <p className="fxh-subsubtitle">Postoperatorio:</p>
      <ul className="fxh-list">
        <li>Rodillera ortopédica en extensión 4-6 semanas</li>
        <li>Descarga parcial con bastones progresiva</li>
        <li>Rehabilitación desde la semana 2 con movilización pasiva</li>
      </ul>

      <p className="fxh-subtitle">Rehabilitación 🏋️‍♂️</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Objetivos</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 (0-2 sem)</td>
              <td>Control del dolor, movilización pasiva</td>
              <td>2 semanas</td>
            </tr>
            <tr>
              <td>2 (2-6 sem)</td>
              <td>Activación del cuádriceps, ROM progresivo</td>
              <td>4 semanas</td>
            </tr>
            <tr>
              <td>3 (6-12 sem)</td>
              <td>Fortalecimiento excéntrico, equilibrio</td>
              <td>6 semanas</td>
            </tr>
            <tr>
              <td>4 (3-6 mes)</td>
              <td>Saltos, pliometría, gestos deportivos</td>
              <td>3 meses</td>
            </tr>
            <tr>
              <td>5 (6+ mes)</td>
              <td>Retorno al deporte progresivo</td>
              <td>Individualizado</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Prevención 🛡️</p>
      <ul className="fxh-list">
        <li>Ejercicios excéntricos regulares (sentadillas en pendiente)</li>
        <li>Corrección biomecánica (pisada, alineación de miembros inferiores)</li>
        <li>Evitar sobrecarga aguda o entrenamiento excesivo</li>
        <li>Calentamiento y enfriamiento adecuados en entrenamientos</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        Las lesiones tendinosas de la rodilla son comunes, especialmente en personas activas. Su manejo depende del grado de afectación e incluye fisioterapia específica y, en casos graves, cirugía. 
        La rehabilitación progresiva y un enfoque preventivo son esenciales para evitar recurrencias y lograr una recuperación funcional completa.
      </p>

    </div>
  );
}

export default TendinopatiasRodilla;
