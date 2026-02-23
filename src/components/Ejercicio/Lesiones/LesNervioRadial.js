import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LesNervioRadial.css';

function LesNervioRadial() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Lesión del Nervio Radial</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        El nervio radial es el más frecuentemente lesionado de los nervios periféricos del miembro superior, representando aproximadamente el <strong>70% de todas las neuropatías compresivas del brazo</strong>. 
        Es una lesión particularmente incapacitante debido a su papel crucial en la extensión de muñeca y dedos. La recuperación completa puede tardar <strong>3-6 meses</strong> dependiendo de la gravedad.
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Origen</strong>: Rama terminal del cordón posterior del plexo braquial (C5-T1)</li>
        <li><strong>Recorrido crítico</strong>: Surco espiral del húmero (vulnerable en fracturas)</li>
        <li><strong>Ramas principales</strong>: Nervio interóseo posterior (motor) y ramo superficial (sensitivo)</li>
      </ul>

      <p className="fxh-subtitle">Etiología y Localizaciones Comunes 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Localización</th>
              <th>Causa Común</th>
              <th>Manifestaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Axila</strong></td>
              <td>Uso incorrecto de muletas</td>
              <td>Pérdida extensión codo + muñeca</td>
            </tr>
            <tr>
              <td><strong>Surco espiral</strong></td>
              <td>Fractura húmero medio</td>
              <td>"Mano péndula" clásica</td>
            </tr>
            <tr>
              <td><strong>Codo</strong></td>
              <td>Compresión por arcada fibrosa</td>
              <td>Debilidad extensores dedos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Manifestaciones Clínicas 🩺</p>

      <p className="fxh-subsubtitle">1. Síntomas Motores</p>
      <ul className="fxh-list">
        <li><strong>Pérdida extensión muñeca</strong>: "Mano péndula" o "en gota"</li>
        <li><strong>Pérdida extensión dedos</strong>: Dificultad para abrir la mano</li>
        <li><strong>Supinación débil</strong>: Con el codo extendido</li>
      </ul>

      <p className="fxh-subsubtitle">2. Síntomas Sensitivos</p>
      <ul className="fxh-list">
        <li><strong>Hipoestesia</strong>: Dorso de mano (zona del "tabaquero anatómico")</li>
        <li><strong>Parestesias</strong>: Cara dorsal del pulgar, índice y mitad radial del dedo medio</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🔍</p>

      <p className="fxh-subsubtitle">1. Examen Físico</p>
      <ul className="fxh-list">
        <li><strong>Prueba de extensión resistida</strong>: Muñeca y dedos contra resistencia</li>
        <li><strong>Signo del "reloj de pulsera"</strong>: Incapacidad para mantener extensión muñeca</li>
        <li><strong>Evaluación tríceps</strong>: Para diferenciar nivel de lesión</li>
      </ul>

      <p className="fxh-subsubtitle">2. Estudios Complementarios</p>
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
              <td><Link to="/examenes/emg">EMG/NCV</Link></td>
              <td>Velocidad conducción nerviosa</td>
              <td>Localizar nivel lesión (gold standard)</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Integridad nervio, compresiones</td>
              <td>Evaluar lesiones estructurales</td>
            </tr>
            <tr>
              <td>Ecografía Nerviosa</td>
              <td>Visualización directa nervio</td>
              <td>Dinámica, bajo costo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>

      <p className="fxh-subsubtitle">Indicado en:</p>
      <ul className="fxh-list">
        <li>Neuropraxias (grado I)</li>
        <li>Compresiones agudas sin sección nerviosa</li>
        <li>Pacientes con contraindicaciones quirúrgicas</li>
      </ul>

      <p className="fxh-subsubtitle">Protocolo:</p>
      <ul className="fxh-list">
        <li><strong>Fase aguda (0-6 semanas)</strong></li>
        <ul className="fxh-sublist">
          <li>Férula de extensión de muñeca y dedos</li>
          <li>Movilizaciones pasivas para prevenir rigidez</li>
        </ul>

        <li><strong>Fase subaguda (6-12 semanas)</strong></li>
        <ul className="fxh-sublist">
          <li>Ejercicios activo-asistidos</li>
          <li>Electroestimulación neuromuscular</li>
        </ul>

        <li><strong>Fase crónica (&gt;12 semanas)</strong></li>
        <ul className="fxh-sublist">
          <li>Fortalecimiento progresivo</li>
          <li>Entrenamiento funcional</li>
        </ul>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>

      <p className="fxh-subsubtitle">Indicaciones:</p>
      <ul className="fxh-list">
        <li>Ausencia de recuperación después de 3 meses</li>
        <li>Lesiones por sección completa (grado IV-V)</li>
        <li>Compresión mecánica demostrada</li>
      </ul>

      <p className="fxh-subsubtitle">Técnicas Quirúrgicas:</p>
      <ul className="fxh-list">
        <li><strong>Neurolysis</strong>: Liberación de adherencias</li>
        <li><strong>Reparación primaria</strong>: Para secciones limpias</li>
        <li><strong>Injerto nervioso</strong>: En defectos mayores de 2cm</li>
        <li><strong>Transferencias tendinosas</strong>: En casos crónicos irreparables</li>
      </ul>

      <p className="fxh-subtitle">Pronóstico y Recuperación ⏳</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo Lesión</th>
              <th>Tasa Recuperación</th>
              <th>Tiempo Esperado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Neuropraxia (grado I)</td>
              <td>100%</td>
              <td>6-12 semanas</td>
            </tr>
            <tr>
              <td>Axonotmesis (grado II-III)</td>
              <td>70-90%</td>
              <td>3-6 meses</td>
            </tr>
            <tr>
              <td>Neurotmesis (grado IV-V)</td>
              <td>30-50%</td>
              <td>6-18 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Complicaciones ⚠️</p>
      <ul className="fxh-list">
        <li>Contracturas en flexión</li>
        <li>Dolor neuropático</li>
        <li>Fibrosis postquirúrgica</li>
        <li>Recuperación incompleta</li>
      </ul>

      <p className="fxh-subtitle">Prevención 🛡️</p>
      <ul className="fxh-list">
        <li>Técnica adecuada con muletas</li>
        <li>Manejo correcto fracturas de húmero</li>
        <li>Posicionamiento quirúrgico adecuado</li>
        <li>Ejercicios de movilidad en pacientes encamados</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        La lesión del nervio radial requiere un enfoque multidisciplinario con tratamiento conservador inicial en la mayoría de casos. 
        La recuperación espontánea es común en neuropraxias, mientras que las lesiones axonales graves pueden requerir intervención quirúrgica. 
        La rehabilitación temprana y las órtesis adecuadas son cruciales para prevenir complicaciones y maximizar la recuperación funcional.
      </p>
    </div>
  );
}

export default LesNervioRadial;
