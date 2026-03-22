import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TendinopatiaMMDedos.css';

function TendinopatiaMMDedos() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail50">

      <p className="fxh-title">Lesiones Tendinosas de Muñeca, Mano y Dedos</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las lesiones tendinosas en la muñeca, mano y dedos incluyen tendinitis por sobreuso, 
        atrapamientos tendinosos y roturas. Son frecuentes en personas que realizan movimientos 
        repetitivos, como trabajadores manuales, músicos y deportistas.
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Tendones extensores</strong>: recorren el dorso de la mano y extienden dedos y muñeca.</li>
        <li><strong>Tendones flexores</strong>: ubicados en la cara palmar; permiten la flexión.</li>
        <li><strong>Retináculos</strong>: fijan los tendones y evitan desplazamientos.</li>
        <li><strong>Poleas digitales</strong>: especialmente la A1, clave en dedo en gatillo.</li>
      </ul>

      <p className="fxh-subtitle">Tendinopatías Comunes ⚠️</p>
      <ul className="fxh-list">
        <li><strong>Tenosinovitis de De Quervain</strong>: dolor radial al mover el pulgar.</li>
        <li><strong>Dedo en gatillo</strong>: bloqueo o chasquido al flexionar/extender.</li>
        <li><strong>Tendinitis extensora o flexora</strong>: dolor por sobrecarga.</li>
        <li><strong>Enfermedad de Dupuytren</strong>: fibrosis palmar progresiva (diagnóstico diferencial).</li>
      </ul>

      <p className="fxh-subtitle">Roturas Tendinosas 🩸</p>
      <ul className="fxh-list">
        <li><strong>Rotura de extensores</strong>: pérdida de extensión digital.</li>
        <li><strong>Rotura de flexores</strong>: frecuente en cortes profundos.</li>
        <li><strong>Mallet finger</strong>: caída de la falange distal.</li>
        <li><strong>Boutonnière</strong>: flexión proximal con extensión distal.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🩺</p>

      <p className="fxh-subsubtitle">1. Examen Físico</p>
      <ul className="fxh-list">
        <li><strong>Test de Finkelstein</strong>: dolor en De Quervain.</li>
        <li><strong>Palpación dolorosa</strong> en trayectos tendinosos.</li>
        <li><strong>Bloqueo o pérdida de movilidad</strong>: sugiere rotura.</li>
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
              <td>Primera elección</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Visualiza roturas completas</td>
              <td>Casos crónicos o quirúrgicos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>
      <ul className="fxh-list">
        <li><strong>Reposo</strong> y férulas temporales</li>
        <li><strong>AINES</strong></li>
        <li><strong>Movilidad suave</strong></li>
        <li><strong>Infiltraciones</strong> en casos seleccionados</li>
        <li><strong>Terapia ocupacional</strong></li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>
      <ul className="fxh-list">
        <li><strong>Liberación A1</strong> en dedo en gatillo</li>
        <li><strong>Reparación tendinosa</strong></li>
        <li><strong>Descompresión</strong> en De Quervain resistente</li>
        <li><strong>Cirugía reconstructiva</strong></li>
      </ul>

      <p className="fxh-subtitle">Rehabilitación 🤲</p>

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
              <td>Disminuir dolor</td>
              <td>1–2 semanas</td>
            </tr>
            <tr>
              <td>2 (2–6 sem)</td>
              <td>Recuperar movilidad</td>
              <td>4 semanas</td>
            </tr>
            <tr>
              <td>3 (6–12 sem)</td>
              <td>Fortalecimiento y destreza fina</td>
              <td>6 semanas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Prevención 🛡️</p>
      <ul className="fxh-list">
        <li>Evitar movimientos repetitivos sin pausa</li>
        <li>Fortalecer musculatura intrínseca</li>
        <li>Pausas activas laborales</li>
        <li>Soporte ergonómico adecuado</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        La mayoría de las lesiones tendinosas de muñeca y mano responden bien al manejo conservador. 
        Una evaluación adecuada y rehabilitación guiada reducen significativamente el riesgo de recurrencia.
      </p>

    </div>
  );
}

export default TendinopatiaMMDedos;
