import React, { useEffect } from 'react';
import './LesNervioMediano.css';

function LesNervioMediano() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Lesión del Nervio Mediano</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        El nervio mediano es responsable de la inervación motora de los músculos de la eminencia tenar y sensitiva de la palma de la mano. 
        Su compresión en el túnel carpiano afecta al <strong>3-6% de los adultos</strong>, siendo más frecuente en mujeres (3:1). 
        Las lesiones proximales pueden causar el característico "<strong>signo de la mano del simio</strong>".
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Origen</strong>: Cordones medial y lateral del plexo braquial (C5-T1)</li>
        <li><strong>Recorrido</strong>: Cara anterior del brazo, pasa por túnel carpiano</li>
        <li>
          <strong>Ramas importantes</strong>:
          <ul className="fxh-sublist">
            <li>Rama motora recurrente (eminencia tenar)</li>
            <li>Nervio interóseo anterior (flexores profundos)</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-subtitle">Localizaciones Comunes de Lesión 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Localización</th>
              <th>Síndrome</th>
              <th>Causa Principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Túnel carpiano</td>
              <td>Síndrome del túnel carpiano</td>
              <td>Compresión por retináculo flexor</td>
            </tr>
            <tr>
              <td>Pronador redondo</td>
              <td>Síndrome del pronador</td>
              <td>Hipertrofia muscular</td>
            </tr>
            <tr>
              <td>Arco de Struthers</td>
              <td>Compresión supracondílea</td>
              <td>Bandas fibrosas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Manifestaciones Clínicas 🩺</p>

      <p className="fxh-subsubtitle">1. Síntomas Motores</p>
      <ul className="fxh-list">
        <li><strong>Pérdida de oposición del pulgar</strong>: Dificultad para pinza fina</li>
        <li><strong>Debilidad flexión dedos índice y medio</strong></li>
        <li><strong>Atrofia eminencia tenar</strong>: En casos crónicos</li>
      </ul>

      <p className="fxh-subsubtitle">2. Síntomas Sensitivos</p>
      <ul className="fxh-list">
        <li><strong>Parestesias</strong>: Pulgar, índice, medio y mitad radial del anular</li>
        <li><strong>Dolor nocturno</strong>: Característico en síndrome del túnel carpiano</li>
        <li><strong>Signo de Tinel</strong>: Percusión sobre trayecto nervioso</li>
      </ul>

      <p className="fxh-subtitle">Pruebas Diagnósticas 🔍</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Técnica</th>
              <th>Positividad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Phalen</td>
              <td>Flexión palmar máxima 60 seg</td>
              <td>Sensibilidad 68%, Especificidad 73%</td>
            </tr>
            <tr>
              <td>Tinel</td>
              <td>Percusión sobre túnel carpiano</td>
              <td>Sensibilidad 50%, Especificidad 77%</td>
            </tr>
            <tr>
              <td>Prueba del círculo</td>
              <td>Formar círculo con pulgar e índice</td>
              <td>Alteración en lesión proximal</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>

      <p className="fxh-subsubtitle">Para Síndrome del Túnel Carpiano:</p>
      <ul className="fxh-list">
        <li><strong>Férula nocturna</strong>: Posición neutra de muñeca</li>
        <li><strong>Modificación actividades</strong>: Evitar flexo-extensión repetitiva</li>
        <li><strong>Infiltraciones</strong>: Corticoesteroides locales</li>
        <li><strong>Terapia física</strong>: Ejercicios de deslizamiento nervioso</li>
      </ul>

      <p className="fxh-subsubtitle">Para Lesiones Proximales:</p>
      <ul className="fxh-list">
        <li><strong>Reposo</strong>: Evitar movimientos repetitivos de pronación</li>
        <li><strong>Antiinflamatorios</strong>: Control de sintomatología</li>
        <li><strong>Órtesis</strong>: Para mantener función de pinza</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>

      <p className="fxh-subsubtitle">Indicaciones:</p>
      <ul className="fxh-list">
        <li>Falla tratamiento conservador (3-6 meses)</li>
        <li>Atrofia muscular o déficit motor progresivo</li>
        <li>EMG con denervación aguda</li>
      </ul>

      <p className="fxh-subsubtitle">Técnicas Quirúrgicas:</p>
      <ul className="fxh-list">
        <li>
          <strong>Liberación del túnel carpiano</strong>
          <ul className="fxh-sublist">
            <li>Abierta vs endoscópica</li>
            <li>Tasa de éxito mayor a 90% en casos típicos</li>
          </ul>
        </li>
        <li><strong>Descompresión del pronador</strong>: Liberación de arcadas fibrosas</li>
        <li><strong>Reparación microquirúrgica</strong>: Para lesiones traumáticas</li>
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
              <td>Aguda (0-2 sem)</td>
              <td>Control edema, protección</td>
              <td>Hasta retiro suturas</td>
            </tr>
            <tr>
              <td>Subaguda (2-6 sem)</td>
              <td>Movilidad, deslizamiento nervioso</td>
              <td>4 semanas</td>
            </tr>
            <tr>
              <td>Recuperación (6-12 sem)</td>
              <td>Fuerza, función fina</td>
              <td>6 semanas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Complicaciones ⚠️</p>
      <ul className="fxh-list">
        <li>Dolor cicatricial</li>
        <li>Neuralgia postquirúrgica</li>
        <li>Recidiva (5-10%)</li>
        <li>Pérdida temporal fuerza de prensión</li>
      </ul>

      <p className="fxh-subtitle">Prevención 🛡️</p>
      <ul className="fxh-list">
        <li>Ergonomía laboral</li>
        <li>Pausas activas</li>
        <li>Fortalecimiento intrínseco</li>
        <li>Control enfermedades sistémicas</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        El nervio mediano es fundamental para la función fina de la mano. Su compresión en el túnel carpiano es extremadamente frecuente 
        y responde bien al tratamiento conservador en fases iniciales. Las lesiones proximales requieren alto índice de sospecha clínica. 
        La intervención quirúrgica temprana en casos seleccionados previene daño irreversible y mejora significativamente la calidad de vida.
      </p>
    </div>
  );
}

export default LesNervioMediano;
