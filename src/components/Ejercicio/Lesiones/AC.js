import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AC.css';

function AC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxac-detail">

      <p className="fxac-title">
        Lesión de los Ligamentos Acromioclaviculares del Hombro
      </p>

      <p className="fxac-subtitle">📌 Introducción</p>
      <p className="fxac-text">
        La lesión de los <strong>Ligamentos Acromioclaviculares</strong> representa el
        <strong> 9-12% de las lesiones de la cintura escapular</strong>.
        Es frecuente en deportes de contacto y caídas directas sobre el hombro.
        La articulación AC es clave en la transmisión de fuerzas entre el miembro superior y el esqueleto axial.
      </p>

      <p className="fxac-subtitle">📌 Anatomía Clave 🦴</p>
      <ul className="fxac-list">
        <li><strong>Ligamentos AC</strong>: Superior, inferior, anterior y posterior (el superior es el más fuerte).</li>
        <li><strong>Ligamentos coracoclaviculares</strong>: Trapezoide y conoide (principales estabilizadores verticales).</li>
        <li><strong>Biomecánica</strong>: Resisten fuerzas de cizallamiento y compresión.</li>
      </ul>

      <p className="fxac-subtitle">📌 Clasificación de Rockwood 📊</p>
      <div className="fxac-table-wrapper">
        <table className="fxac-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Daño Estructural</th>
              <th>Hallazgos Clínicos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>I</strong></td>
              <td>Esguince ligamentos AC</td>
              <td>Dolor localizado, sin deformidad</td>
            </tr>
            <tr>
              <td><strong>II</strong></td>
              <td>Rotura parcial AC</td>
              <td>Elevación ≤50%</td>
            </tr>
            <tr>
              <td><strong>III</strong></td>
              <td>Rotura completa AC + CC</td>
              <td>Elevación 100%</td>
            </tr>
            <tr>
              <td><strong>IV-VI</strong></td>
              <td>Desplazamientos severos</td>
              <td>Deformidad evidente</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxac-subtitle">📌 Estudios de Imagen</p>
      <div className="fxac-table-wrapper">
        <table className="fxac-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/examenes/rx" className="fxac-link">
                  Radiografía
                </Link>
              </td>
              <td>Elevación clavicular</td>
              <td>Vista Zanca</td>
            </tr>
            <tr>
              <td>
                <Link to="/examenes/rmn" className="fxac-link">
                  RMN
                </Link>
              </td>
              <td>Integridad ligamentaria</td>
              <td>Evaluar tejidos blandos</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Evaluación dinámica</td>
              <td>Seguimiento</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxac-subtitle">📌 Tratamiento</p>
      <ul className="fxac-list">
        <li><strong>Conservador</strong>: Grados I-II (reposo, hielo, fortalecimiento progresivo).</li>
        <li><strong>Quirúrgico</strong>: Grados IV-VI o fracaso del manejo conservador.</li>
      </ul>

      <p className="fxac-subtitle">📌 Rehabilitación 🏋️‍♂️</p>
      <div className="fxac-table-wrapper">
        <table className="fxac-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Objetivo</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Control del dolor</td>
              <td>0-2 semanas</td>
            </tr>
            <tr>
              <td>2</td>
              <td>ROM progresivo</td>
              <td>2-6 semanas</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Fortalecimiento</td>
              <td>6-12 semanas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxac-subtitle">📌 Conclusión</p>
      <p className="fxac-text">
        El manejo depende del grado de lesión y del nivel funcional del paciente.
        Una rehabilitación progresiva es esencial para prevenir inestabilidad residual y dolor crónico.
      </p>

    </div>
  );
}

export default AC;
