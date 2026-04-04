import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './GH.css';

function GH() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxgh-detail">

      <p className="fxgh-title">
        Lesión de los Ligamentos Glenohumerales del Hombro
      </p>

      <p className="fxgh-subtitle">📌 Introducción</p>
      <p className="fxgh-text">
        La lesión de los <strong>Ligamentos Glenohumerales</strong> representa aproximadamente el
        <strong> 30% de las lesiones de la articulación glenohumeral</strong>.
        Son fundamentales para la estabilidad estática del hombro,
        especialmente en rangos extremos de movimiento.
      </p>

      <p className="fxgh-subtitle">📌 Anatomía Clave</p>
      <ul className="fxgh-list">
        <li><strong>LGHS</strong>: Limita traslación inferior y rotación externa.</li>
        <li><strong>LGHM</strong>: Estabiliza contra traslación anterior a 45° abducción.</li>
        <li><strong>LGHI</strong>: Principal estabilizador anterior y posterior.</li>
      </ul>

      <p className="fxgh-subtitle">📌 Clasificación</p>
      <div className="fxgh-table-wrapper">
        <table className="fxgh-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Daño</th>
              <th>Síntomas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I (Leve)</td>
              <td>Microtrauma sin laxitud</td>
              <td>Dolor sin inestabilidad</td>
            </tr>
            <tr>
              <td>II (Moderado)</td>
              <td>Rotura parcial</td>
              <td>Dolor + subluxación</td>
            </tr>
            <tr>
              <td>III (Severa)</td>
              <td>Rotura completa</td>
              <td>Luxación franca</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxgh-subtitle">📌 Diagnóstico</p>

      <p className="fxgh-subsection">Examen Físico</p>
      <ul className="fxgh-list">
        <li>Prueba de aprensión</li>
        <li>Prueba de sulcus</li>
        <li>Prueba de relocación</li>
        <li>Prueba de carga y desplazamiento</li>
      </ul>

      <p className="fxgh-subsection">Estudios de Imagen</p>
      <div className="fxgh-table-wrapper">
        <table className="fxgh-table">
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
                <Link to="/examenes/rx" className="fxgh-link">
                  Radiografía
                </Link>
              </td>
              <td>Lesión de Hill-Sachs, Bankart óseo</td>
              <td>Descartar fracturas</td>
            </tr>
            <tr>
              <td>
                <Link to="/examenes/rmn" className="fxgh-link">
                  RMN
                </Link>
              </td>
              <td>Integridad ligamentaria</td>
              <td>Evaluación tejidos blandos</td>
            </tr>
            <tr>
              <td>Artro-RMN</td>
              <td>Desgarros labrales</td>
              <td>Alta precisión capsuloligamentaria</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxgh-subtitle">📌 Tratamiento</p>

      <p className="fxgh-subsection">Conservador</p>
      <ul className="fxgh-list">
        <li>Inmovilización breve</li>
        <li>Recuperación progresiva ROM</li>
        <li>Fortalecimiento rotadores y escapulares</li>
      </ul>

      <p className="fxgh-subsection">Quirúrgico</p>
      <ul className="fxgh-list">
        <li>Reparación artroscópica de Bankart</li>
        <li>Procedimiento de Latarjet</li>
        <li>Reparación de HAGL</li>
      </ul>

      <p className="fxgh-subtitle">📌 Rehabilitación</p>
      <div className="fxgh-table-wrapper">
        <table className="fxgh-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Objetivos</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Protección</td>
              <td>Control dolor y ROM limitado</td>
              <td>0-3 semanas</td>
            </tr>
            <tr>
              <td>Intermedia</td>
              <td>ROM completo + fortalecimiento</td>
              <td>3-12 semanas</td>
            </tr>
            <tr>
              <td>Avanzada</td>
              <td>Retorno deportivo</td>
              <td>3-6 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxgh-subtitle">📌 Complicaciones</p>
      <ul className="fxgh-list">
        <li>Inestabilidad recurrente</li>
        <li>Rigidez postquirúrgica</li>
        <li>Artrosis glenohumeral</li>
      </ul>

      <p className="fxgh-subtitle">📌 Conclusión</p>
      <p className="fxgh-text">
        El manejo debe individualizarse según edad, actividad y tipo de inestabilidad.
        Una rehabilitación adecuada es clave para prevenir recurrencias.
      </p>

    </div>
  );
}

export default GH;
