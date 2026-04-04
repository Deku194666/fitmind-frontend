import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TendinopatiaHombro.css';

function TendinopatiaHombro() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail48">

      <p className="fxh-title">Lesiones Tendinosas del Hombro</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las lesiones tendinosas del hombro son una de las causas más comunes de dolor y disfunción del miembro superior. 
        Afectan principalmente al manguito rotador, un conjunto de tendones que estabilizan y movilizan la articulación glenohumeral. 
        Estas lesiones pueden ser de tipo degenerativo o traumático, y van desde tendinopatías leves hasta roturas completas.
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Manguito rotador</strong>: formado por los tendones del supraespinoso, infraespinoso, subescapular y redondo menor.</li>
        <li><strong>Porción larga del bíceps</strong>: transcurre intraarticularmente y puede verse afectada en patología del manguito.</li>
        <li><strong>Deltoides</strong>: músculo importante para la elevación, pero no parte del manguito.</li>
      </ul>

      <p className="fxh-subtitle">Tendinopatías Comunes ⚠️</p>
      <ul className="fxh-list">
        <li><strong>Tendinopatía del supraespinoso</strong>: la más frecuente. Dolor en el arco doloroso (60°–120°) de abducción.</li>
        <li><strong>Tendinopatía del infraespinoso</strong>: dolor posterior, asociado a rotación externa.</li>
        <li><strong>Tendinopatía del subescapular</strong>: dolor anterior y debilidad en rotación interna.</li>
        <li><strong>Tendinopatía del bíceps</strong>: dolor anterior con irradiación al brazo. Posible asociación con ruptura parcial del manguito.</li>
      </ul>

      <p className="fxh-subtitle">Roturas Tendinosas 🩸</p>
      <ul className="fxh-list">
        <li><strong>Rotura parcial</strong>: desgarros incompletos de espesor o longitud variable.</li>
        <li><strong>Rotura completa del supraespinoso</strong>: pérdida de fuerza en abducción.</li>
        <li><strong>Roturas masivas del manguito</strong>: compromiso de 2 o más tendones.</li>
        <li><strong>Rotura de la porción larga del bíceps</strong>: signo de Popeye.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🩺</p>

      <p className="fxh-subsubtitle">1. Examen Físico</p>
      <ul className="fxh-list">
        <li><strong>Test de Jobe</strong>: debilidad en abducción contra resistencia.</li>
        <li><strong>Test de Patte</strong>: rotación externa resistida.</li>
        <li><strong>Lift-off Test</strong>: evalúa subescapular.</li>
        <li><strong>Test Speed/Yergason</strong>: dolor en tendón del bíceps.</li>
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
              <td>Evalúa continuidad y engrosamiento</td>
              <td>Screening inicial</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Diagnóstico definitivo</td>
              <td>Sospecha de rotura completa</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>
      <ul className="fxh-list">
        <li><strong>Reposo relativo</strong> y modificación de actividad</li>
        <li><strong>AINES</strong> y crioterapia</li>
        <li><strong>Ejercicios activos asistidos</strong></li>
        <li><strong>Fortalecimiento escapular</strong></li>
        <li><strong>Fisioterapia</strong>: US, electroanalgesia</li>
        <li><strong>Infiltraciones con corticoides</strong></li>
        <li><strong>Ondas de choque</strong> en tendinopatía calcificada</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>
      <ul className="fxh-list">
        <li><strong>Reparación artroscópica</strong> del manguito</li>
        <li><strong>Tenotomía o tenodesis del bíceps</strong></li>
        <li><strong>Reconstrucción con injerto</strong> o prótesis reversa</li>
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
              <td>1 (0–4 sem)</td>
              <td>Inmovilización y control del dolor</td>
              <td>4 semanas</td>
            </tr>
            <tr>
              <td>2 (4–8 sem)</td>
              <td>Movilidad pasiva y activa asistida</td>
              <td>4 semanas</td>
            </tr>
            <tr>
              <td>3 (8–12 sem)</td>
              <td>Fortalecimiento progresivo</td>
              <td>4 semanas</td>
            </tr>
            <tr>
              <td>4 (12+ sem)</td>
              <td>Retorno a deporte y trabajo</td>
              <td>1–3 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Prevención 🛡️</p>
      <ul className="fxh-list">
        <li>Evitar sobreuso por encima del nivel del hombro</li>
        <li>Fortalecimiento del manguito rotador</li>
        <li>Mejorar movilidad torácica y postura</li>
        <li>Técnica deportiva adecuada</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        Las lesiones tendinosas del hombro son altamente prevalentes y afectan la funcionalidad. 
        Su tratamiento requiere un enfoque individualizado y progresivo. 
        La detección precoz y la rehabilitación adecuada son esenciales para evitar complicaciones.
      </p>

    </div>
  );
}

export default TendinopatiaHombro;
