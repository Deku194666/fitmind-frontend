import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LCL.css';

function LCL() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxlcl-detail">

      <p className="fxlcl-title">
        Lesión del Ligamento Colateral Lateral (LCL)
      </p>

      <p className="fxlcl-subtitle">📌 Introducción</p>
      <p className="fxlcl-text">
        El <strong>Ligamento Colateral Lateral (LCL)</strong> es el principal estabilizador contra las fuerzas en varo de la rodilla, representando el <strong>2-8% de las lesiones ligamentosas</strong> de esta articulación.
        A diferencia del LCM, suele lesionarse por mecanismos de alta energía y frecuentemente se asocia a daños en el complejo posterolateral, requiriendo un manejo especializado.
      </p>

      <p className="fxlcl-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxlcl-list">
        <li>
          <strong>LCL</strong>: Se extiende desde el epicóndilo femoral lateral hasta la cabeza del peroné. No tiene inserción tibial.
        </li>
        <li><strong>Función principal</strong>: Resistir las fuerzas en varo y rotación externa.</li>
        <li>
          <strong>Relaciones anatómicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Complejo posterolateral</strong>: Ligamento popliteofibular, tendón poplíteo</li>
            <li><strong>Nervio peroneo común</strong>: Pasa cerca de su inserción peronea</li>
          </ul>
        </li>
      </ul>

      <p className="fxlcl-subtitle">Clasificación de la Lesión 📊</p>
      <div className="fxlcl-table-wrapper">
        <table className="fxlcl-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Daño Estructural</th>
              <th>Síntomas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I (Leve)</td>
              <td>Microdesgarros sin elongación</td>
              <td>Dolor lateral localizado, edema mínimo</td>
            </tr>
            <tr>
              <td>II (Moderado)</td>
              <td>Rotura parcial (5-10mm en varo a 30°)</td>
              <td>Dolor moderado, inestabilidad leve</td>
            </tr>
            <tr>
              <td>III (Completa)</td>
              <td>Rotura completa (mayor a 10mm en varo a 30°)</td>
              <td>Inestabilidad marcada, dolor en cabeza peronea</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlcl-subtitle">Mecanismos de Lesión 🤕</p>
      <ul className="fxlcl-list">
        <li><strong>Hiperextensión + varo forzado</strong></li>
        <li><strong>Trauma directo medial</strong></li>
        <li>
          <strong>Lesiones asociadas frecuentes</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>LCP (75% de los casos)</li>
            <li>LCA (15-30%)</li>
            <li>Complejo posterolateral (90% en lesiones grado III)</li>
          </ul>
        </li>
      </ul>

      <p className="fxlcl-subtitle">Diagnóstico 🩺</p>
      <ul className="fxlcl-list">
        <li>Varo stress test</li>
        <li>Prueba de recurvatum</li>
        <li>Dial test</li>
        <li>Evaluación nervio peroneo</li>
        <li>
          Estudios de imagen:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>
              <Link to="/examenes/radiografia" className="fxlcl-link">
                Radiografía
              </Link>
            </li>
            <li>
              <Link to="/examenes/rmn" className="fxlcl-link">
                RMN
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      <p className="fxlcl-subtitle">Tratamiento</p>
      <ul className="fxlcl-list">
        <li><strong>Conservador</strong>: Grado I-II aisladas</li>
        <li><strong>Quirúrgico</strong>: Grado III o lesiones combinadas</li>
        <li>Rehabilitación progresiva 6-9 meses</li>
      </ul>

      <p className="fxlcl-subtitle">Conclusión</p>
      <p className="fxlcl-text">
        Las lesiones del <strong>LCL</strong> requieren alta sospecha clínica por su frecuente asociación con el complejo posterolateral.
        Las lesiones grado III o combinadas suelen necesitar reconstrucción quirúrgica temprana.
      </p>

    </div>
  );
}

export default LCL;
