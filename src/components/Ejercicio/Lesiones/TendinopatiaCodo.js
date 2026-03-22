import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TendinopatiaCodo.css';

function TendinopatiaCodo() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail49">

      <p className="fxh-title">Lesiones Tendinosas del Codo</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las lesiones tendinosas del codo suelen presentarse como cuadros dolorosos asociados al sobreuso 
        de los músculos extensores o flexores del antebrazo. Las más comunes son la epicondilitis lateral 
        (codo de tenista) y medial (codo de golfista), ambas causadas por microtraumatismos repetitivos. 
        Aunque son benignas, pueden volverse crónicas y afectar la función.
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Epicóndilo lateral</strong>: inserción de extensores del antebrazo (principalmente el extensor radial corto del carpo).</li>
        <li><strong>Epicóndilo medial</strong>: inserción de los músculos flexores-pronadores (flexor radial del carpo, pronador redondo, etc.).</li>
        <li><strong>Tendón del tríceps</strong>: inserción en el olécranon, menos frecuente pero puede lesionarse en deportes explosivos.</li>
      </ul>

      <p className="fxh-subtitle">Tendinopatías Comunes ⚠️</p>
      <ul className="fxh-list">
        <li><strong>Epicondilitis lateral (codo de tenista)</strong>: dolor en la cara externa del codo, irradiado al antebrazo.</li>
        <li><strong>Epicondilitis medial (codo de golfista)</strong>: dolor en la cara interna del codo, aumenta con flexión de muñeca.</li>
        <li><strong>Tendinopatía del tríceps</strong>: dolor posterior del codo, especialmente en extensión contra resistencia.</li>
      </ul>

      <p className="fxh-subtitle">Roturas Tendinosas 🩸</p>
      <ul className="fxh-list">
        <li><strong>Rotura parcial</strong>: frecuente en epicondilitis crónica; degeneración focal del tendón.</li>
        <li><strong>Rotura completa del tendón del tríceps</strong>: poco frecuente; pérdida de extensión activa.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🩺</p>

      <p className="fxh-subsubtitle">1. Examen Físico</p>
      <ul className="fxh-list">
        <li><strong>Test de Cozen</strong>: dolor con extensión de muñeca contra resistencia.</li>
        <li><strong>Test de Mill</strong>: dolor con estiramiento pasivo de extensores.</li>
        <li><strong>Test inverso de Cozen</strong>: dolor con flexión resistida.</li>
        <li><strong>Palpación dolorosa</strong> en epicóndilos.</li>
      </ul>

      <p className="fxh-subsubtitle">2. Estudios de Imagen</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Utilidad</th>
              <th>Indicaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ecografía</td>
              <td>Evalúa engrosamiento y roturas parciales</td>
              <td>Inicial y seguimiento</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Visualización precisa del tendón</td>
              <td>Dolor persistente o sospecha de rotura completa</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>
      <ul className="fxh-list">
        <li><strong>Reposo relativo</strong> y modificación de actividades</li>
        <li><strong>AINES</strong> orales o tópicos</li>
        <li><strong>Férula de descarga</strong> en fase aguda</li>
        <li><strong>Terapia física</strong>: fortalecimiento excéntrico y terapia manual</li>
        <li><strong>Ejercicios progresivos</strong> de muñeca y antebrazo</li>
        <li><strong>Infiltraciones con corticoides</strong></li>
        <li><strong>PRP</strong> en casos seleccionados</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>
      <ul className="fxh-list">
        <li><strong>Desbridamiento quirúrgico</strong> en casos resistentes</li>
        <li><strong>Reinserción tendinosa</strong> en rotura del tríceps</li>
        <li><strong>Tenotomía o liberación</strong> abierta o artroscópica</li>
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
              <td>1 (0–2 sem)</td>
              <td>Reducción del dolor</td>
              <td>1–2 semanas</td>
            </tr>
            <tr>
              <td>2 (2–6 sem)</td>
              <td>Movilidad activa y fortalecimiento inicial</td>
              <td>4 semanas</td>
            </tr>
            <tr>
              <td>3 (6–12 sem)</td>
              <td>Fortalecimiento funcional y retorno progresivo</td>
              <td>6 semanas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Prevención 🛡️</p>
      <ul className="fxh-list">
        <li>Evitar gestos repetitivos sin pausa</li>
        <li>Fortalecimiento excéntrico regular</li>
        <li>Corrección ergonómica y técnica deportiva</li>
        <li>Estiramientos antes y después de actividad</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        Las lesiones tendinosas del codo pueden cronificarse si no se tratan adecuadamente. 
        Un manejo integral con rehabilitación guiada mejora significativamente los resultados funcionales.
      </p>

    </div>
  );
}

export default TendinopatiaCodo;
