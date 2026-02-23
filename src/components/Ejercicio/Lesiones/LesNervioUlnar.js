import React, { useEffect } from 'react';
import './LesNervioUlnar.css';

function LesNervioUlnar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Lesión del Nervio Ulnar</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        El nervio ulnar es clave para la función intrínseca de la mano, controlando la mayoría de los músculos intrínsecos y la sensibilidad del 5º dedo y mitad medial del 4º.
        Su compresión en el codo (canal cubital) es la segunda neuropatía por atrapamiento más común en extremidades superiores.
        Las lesiones crónicas pueden llevar a la característica "mano en garra ulnar".
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Origen</strong>: Cordón medial del plexo braquial (C8-T1)</li>
        <li>
          <strong>Recorrido crítico</strong>:
          <ul className="fxh-sublist">
            <li>Surco epitrócleo-olecraniano (codo)</li>
            <li>Canal de Guyon (muñeca)</li>
          </ul>
        </li>
        <li>
          <strong>Ramas motoras clave</strong>:
          <ul className="fxh-sublist">
            <li>Músculos intrínsecos (interóseos, hipotenar, lumbricales 3-4)</li>
            <li>Flexor cubital del carpo</li>
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
              <td>Canal cubital (codo)</td>
              <td>Síndrome del canal cubital</td>
              <td>Compresión por arcada de Osborne</td>
            </tr>
            <tr>
              <td>Canal de Guyon (muñeca)</td>
              <td>Síndrome del canal de Guyon</td>
              <td>Trauma repetitivo (ciclistas)</td>
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
        <li><strong>Pérdida aducción/abducción dedos</strong>: Afectación interóseos</li>
        <li><strong>Debilidad pinza clave</strong>: Aductor del pulgar</li>
        <li><strong>Mano en garra</strong>: Hiperextensión MCF + flexión IF</li>
      </ul>

      <p className="fxh-subsubtitle">2. Síntomas Sensitivos</p>
      <ul className="fxh-list">
        <li><strong>Parestesias</strong>: 5º dedo y mitad ulnar del 4º</li>
        <li><strong>Signo de Tinel positivo</strong>: En canal cubital</li>
        <li><strong>Dolor</strong>: Cara medial del codo</li>
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
              <td>Froment</td>
              <td>Sujetar papel entre pulgar e índice</td>
              <td>Flexión IF del pulgar (compensación)</td>
            </tr>
            <tr>
              <td>Wartenberg</td>
              <td>Observar posición 5º dedo</td>
              <td>Abducción pasiva</td>
            </tr>
            <tr>
              <td>Tinel</td>
              <td>Percusión canal cubital</td>
              <td>Parestesias territorio ulnar</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>

      <p className="fxh-subsubtitle">Canal Cubital:</p>
      <ul className="fxh-list">
        <li><strong>Órtesis nocturna</strong>: Codo en 45°</li>
        <li><strong>Evitar apoyos prolongados</strong></li>
        <li><strong>Deslizamientos nerviosos</strong></li>
      </ul>

      <p className="fxh-subsubtitle">Canal de Guyon:</p>
      <ul className="fxh-list">
        <li><strong>Evitar presión directa</strong></li>
        <li><strong>Férula muñeca neutra</strong></li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>

      <p className="fxh-subsubtitle">Indicaciones:</p>
      <ul className="fxh-list">
        <li>Déficit motor progresivo</li>
        <li>Atrofia intrínseca</li>
        <li>Falla tratamiento &gt; 3 meses</li>
      </ul>

      <p className="fxh-subsubtitle">Técnicas:</p>
      <ul className="fxh-list">
        <li>
          <strong>Descompresión canal cubital</strong>
          <ul className="fxh-sublist">
            <li>Transposición anterior</li>
            <li>Epineurolysis</li>
          </ul>
        </li>
        <li><strong>Liberación canal de Guyon</strong></li>
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
              <td>Aguda (0-3 sem)</td>
              <td>Protección, control edema</td>
              <td>Hasta retiro suturas</td>
            </tr>
            <tr>
              <td>Subaguda (3-8 sem)</td>
              <td>Movilidad, prevenir fibrosis</td>
              <td>5 semanas</td>
            </tr>
            <tr>
              <td>Recuperación (&gt;8 sem)</td>
              <td>Fuerza intrínseca</td>
              <td>3-6 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Complicaciones ⚠️</p>
      <ul className="fxh-list">
        <li>Rigidez articular</li>
        <li>Recidiva (hasta 25%)</li>
        <li>Déficit residual</li>
      </ul>

      <p className="fxh-subtitle">Prevención 🛡️</p>
      <ul className="fxh-list">
        <li>Evitar apoyos prolongados</li>
        <li>Ergonomía laboral</li>
        <li>Fortalecimiento intrínseco</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        Las lesiones del nervio ulnar generan discapacidad significativa en la función fina de la mano.
        El diagnóstico temprano es fundamental para prevenir atrofia irreversible.
        La recuperación depende del tiempo de evolución y grado de afectación previa.
      </p>
    </div>
  );
}

export default LesNervioUlnar;
