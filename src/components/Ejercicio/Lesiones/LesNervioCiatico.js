import React, { useEffect } from 'react';
import './LesNervioCiatico.css';

function LesNervioCiatico() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Lesión del Nervio Ciático</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        El nervio ciático es el nervio más largo y voluminoso del cuerpo humano (L4-S3).
        Controla la musculatura posterior del muslo y toda la pierna distal a la rodilla.
        La ciática afecta al 10-40% de la población en algún momento de su vida y puede generar
        discapacidad significativa en la marcha.
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Origen</strong>: Plexo sacro (L4-S3)</li>
        <li>
          <strong>Recorrido crítico</strong>:
          <ul className="fxh-sublist">
            <li>Borde inferior del piriforme</li>
            <li>Región posterior del muslo</li>
            <li>Bifurcación en nervio tibial y peroneo común</li>
          </ul>
        </li>
        <li>
          <strong>Ramas importantes</strong>:
          <ul className="fxh-sublist">
            <li>Nervio tibial (flexión plantar)</li>
            <li>Nervio peroneo común (dorsiflexión)</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-subtitle">Localizaciones Comunes de Lesión 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Localización</th>
              <th>Mecanismo</th>
              <th>Causa Principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Salida pélvica</td>
              <td>Síndrome piriforme</td>
              <td>Hipertrofia/espasmo muscular</td>
            </tr>
            <tr>
              <td>Región glútea</td>
              <td>Trauma iatrogénico</td>
              <td>Inyecciones intramusculares</td>
            </tr>
            <tr>
              <td>Fémur posterior</td>
              <td>Trauma directo</td>
              <td>Fracturas de fémur</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Manifestaciones Clínicas 🩺</p>

      <p className="fxh-subsubtitle">1. Síntomas Motores</p>
      <ul className="fxh-list">
        <li><strong>Debilidad flexión rodilla</strong></li>
        <li><strong>Pie caído</strong> (afectación peronea)</li>
        <li><strong>Dificultad puntillas</strong> (afectación tibial)</li>
      </ul>

      <p className="fxh-subsubtitle">2. Síntomas Sensitivos</p>
      <ul className="fxh-list">
        <li><strong>Dolor irradiado</strong>: Glúteo a pie</li>
        <li><strong>Parestesias</strong>: Muslo posterior y pierna</li>
        <li><strong>Lasègue positivo</strong></li>
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
              <td>Lasègue</td>
              <td>Elevación pierna extendida</td>
              <td>Dolor &lt; 30°</td>
            </tr>
            <tr>
              <td>FAIR test</td>
              <td>Flexión + aducción + RI</td>
              <td>Dolor piriforme</td>
            </tr>
            <tr>
              <td>EMG/NCV</td>
              <td>Conducción nerviosa</td>
              <td>Localiza lesión</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>

      <p className="fxh-subsubtitle">Ciática por Hernia Discal:</p>
      <ul className="fxh-list">
        <li>Reposo relativo (2-3 días)</li>
        <li>AINEs + relajantes</li>
        <li>Ejercicios McKenzie</li>
        <li>Infiltraciones epidurales</li>
      </ul>

      <p className="fxh-subsubtitle">Síndrome Piriforme:</p>
      <ul className="fxh-list">
        <li>Estiramientos específicos</li>
        <li>Terapia manual</li>
        <li>Evitar sedestación prolongada</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>

      <p className="fxh-subsubtitle">Indicaciones:</p>
      <ul className="fxh-list">
        <li>Déficit motor progresivo</li>
        <li>Síndrome cauda equina</li>
        <li>Falla &gt; 6-12 semanas</li>
      </ul>

      <p className="fxh-subsubtitle">Técnicas:</p>
      <ul className="fxh-list">
        <li>Discectomía lumbar</li>
        <li>Neurolisis</li>
        <li>Reparación microquirúrgica</li>
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
              <td>Aguda (0-4 sem)</td>
              <td>Control dolor</td>
              <td>Hasta resolución</td>
            </tr>
            <tr>
              <td>Subaguda (4-12 sem)</td>
              <td>Movilidad</td>
              <td>8 semanas</td>
            </tr>
            <tr>
              <td>Recuperación (&gt;12 sem)</td>
              <td>Reentrenamiento marcha</td>
              <td>3-6 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Complicaciones ⚠️</p>
      <ul className="fxh-list">
        <li>Síndrome dolor regional complejo</li>
        <li>Pie equino</li>
        <li>Ulceraciones plantares</li>
      </ul>

      <p className="fxh-subtitle">Prevención 🛡️</p>
      <ul className="fxh-list">
        <li>Higiene postural</li>
        <li>Fortalecimiento core</li>
        <li>Ergonomía laboral</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        La lesión del nervio ciático tiene alto impacto funcional.
        El 90% de las ciáticas por hernia discal mejoran en 6 semanas con manejo conservador.
        La rehabilitación prolongada es clave para prevenir secuelas.
      </p>
    </div>
  );
}

export default LesNervioCiatico;
