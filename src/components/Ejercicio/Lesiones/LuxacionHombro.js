import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./LuxacionHombro.css";

function LuxacionHombro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lux-detail">

      <p className="lux-title">Luxación de Hombro y Clavícula</p>

      <p className="lux-subtitle">📌 Introducción</p>
      <p className="lux-text">
        La luxación glenohumeral es la <strong>articulación más frecuentemente luxada</strong>,
        representando el 50% de todas las luxaciones. La recurrencia en menores de 25 años
        alcanza el <strong>70-90%</strong> sin tratamiento adecuado.
      </p>

      <p className="lux-subtitle">🦴 Anatomía Clave</p>
      <ul className="lux-list">
        <li><strong>Hombro (Glenohumeral)</strong>: Labrum, IGHL, manguito rotador.</li>
        <li><strong>Clavícula (AC)</strong>: Ligamentos AC y coracoclaviculares.</li>
        <li><strong>Relaciones</strong>: Nervio axilar (5-10%), arteria axilar (&lt;1%).</li>
      </ul>

      <p className="lux-subtitle">📊 Clasificación</p>
      <div className="lux-table-wrapper">
        <table className="lux-table">
          <thead>
            <tr>
              <th>Articulación</th>
              <th>Tipo</th>
              <th>Frecuencia</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Glenohumeral</strong></td>
              <td>Anterior</td>
              <td>95%</td>
              <td>Abducción + rotación externa</td>
            </tr>
            <tr>
              <td></td>
              <td>Posterior</td>
              <td>4%</td>
              <td>Trauma axial en aducción</td>
            </tr>
            <tr>
              <td></td>
              <td>Inferior</td>
              <td>1%</td>
              <td>Hiperabducción forzada</td>
            </tr>
            <tr>
              <td><strong>Acromioclavicular</strong></td>
              <td>I-II</td>
              <td>70%</td>
              <td>Ruptura parcial AC</td>
            </tr>
            <tr>
              <td></td>
              <td>III</td>
              <td>25%</td>
              <td>Ruptura AC + CC</td>
            </tr>
            <tr>
              <td></td>
              <td>IV-VI</td>
              <td>5%</td>
              <td>Dislocación grave</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="lux-subtitle">🩺 Estudios de Imagen</p>
      <div className="lux-table-wrapper">
        <table className="lux-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/examenes/rx">Radiografía</Link></td>
              <td>Relación articular</td>
              <td>AP, axial, Y escapular</td>
            </tr>
            <tr>
              <td><Link to="/examenes/tc">TC</Link></td>
              <td>Defectos óseos</td>
              <td>Evaluación prequirúrgica</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Lesiones labrales</td>
              <td>Luxaciones recurrentes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="lux-subtitle">🔄 Rehabilitación</p>
      <div className="lux-table-wrapper">
        <table className="lux-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Hombro</th>
              <th>Clavícula</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0-3 sem</td>
              <td>Sling, movilidad pasiva</td>
              <td>Sling, movilidad distal</td>
            </tr>
            <tr>
              <td>3-6 sem</td>
              <td>ROM progresivo</td>
              <td>Movilidad activa</td>
            </tr>
            <tr>
              <td>6-12 sem</td>
              <td>Fortalecimiento</td>
              <td>Resistencia progresiva</td>
            </tr>
            <tr>
              <td>3-6 mes</td>
              <td>Retorno deportivo</td>
              <td>Actividad plena</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default LuxacionHombro;
