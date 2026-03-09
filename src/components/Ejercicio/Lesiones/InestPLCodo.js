import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './InestPLCodo.css';

function InestPLCodo() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxiplc-detail">

      <h1 className="fxiplc-title">
        Inestabilidad Posterolateral de Codo
      </h1>

      <h2 className="fxiplc-subtitle">📌 Introducción</h2>
      <p className="fxiplc-text">
        La inestabilidad posterolateral (IPL) del codo es un patrón complejo de inestabilidad rotatoria 
        causado por fallo del complejo ligamentoso lateral. Representa el 80% de las inestabilidades 
        crónicas del codo y frecuentemente se diagnostica erróneamente como epicondilitis rebelde.
      </p>

      <h2 className="fxiplc-subtitle">🦴 Anatomía Clave</h2>
      <ul className="fxiplc-list">
        <li><strong>Estabilizadores estáticos</strong></li>
        <ul className="fxiplc-list nested">
          <li>Ligamento colateral lateral</li>
          <li>Ligamento anular</li>
          <li>Cápsula posterolateral</li>
        </ul>

        <li><strong>Estabilizadores dinámicos</strong></li>
        <ul className="fxiplc-list nested">
          <li>Extensor común</li>
          <li>Supinador</li>
          <li>Ancóneo</li>
        </ul>

        <li><strong>Biomecánica</strong></li>
        <ul className="fxiplc-list nested">
          <li>Máxima inestabilidad a 40° flexión</li>
          <li>Secuencia de fallo: LCL → cápsula → LCM</li>
        </ul>
      </ul>

      <h2 className="fxiplc-subtitle">📊 Estadificación de O'Driscoll</h2>

      <div className="fxiplc-table-wrapper">
        <table className="fxiplc-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Estructuras Afectadas</th>
              <th>Manifestaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>LCL solamente</td>
              <td>Subluxación transitoria</td>
            </tr>
            <tr>
              <td>2</td>
              <td>LCL + cápsula posterolateral</td>
              <td>Subluxación incompleta</td>
            </tr>
            <tr>
              <td>3A</td>
              <td>+ LCM posterior</td>
              <td>Luxación completa</td>
            </tr>
            <tr>
              <td>3B</td>
              <td>+ LCM completo</td>
              <td>Inestabilidad multidireccional</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxiplc-subtitle">🤕 Mecanismos de Lesión</h2>
      <ul className="fxiplc-list">
        <li>Caída con supinación</li>
        <li>Luxaciones posterolaterales</li>
        <li>Microtrauma repetitivo (gimnasia, lanzadores)</li>
        <li>Iatrogénica (liberación lateral excesiva)</li>
      </ul>

      <h2 className="fxiplc-subtitle">🩺 Diagnóstico</h2>
      <p className="fxiplc-text">
        Pivot shift (85% sensibilidad), prueba de silla, prueba de mesa, test de varo recurvatum 
        y pruebas dinámicas bajo carga axial.
      </p>

      <h2 className="fxiplc-subtitle">📷 Estudios de Imagen</h2>

      <div className="fxiplc-table-wrapper">
        <table className="fxiplc-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link className="fxiplc-link" to="/examenes/rx">Radiografía</Link></td>
              <td>Subluxación radial</td>
              <td>Evaluación ósea</td>
            </tr>
            <tr>
              <td><Link className="fxiplc-link" to="/examenes/rmn">RMN</Link></td>
              <td>Integridad LCL</td>
              <td>Evaluación ligamentosa</td>
            </tr>
            <tr>
              <td>Fluoroscopia</td>
              <td>Subluxación dinámica</td>
              <td>Estudio intraoperatorio</td>
            </tr>
            <tr>
              <td>Artro-TC</td>
              <td>Lesiones osteocondrales</td>
              <td>Planificación quirúrgica</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxiplc-subtitle">🏥 Tratamiento</h2>
      <ul className="fxiplc-list">
        <li>Grado 1 → Manejo conservador</li>
        <li>Grado 2-3 → Reconstrucción ligamentosa</li>
        <li>Retorno deportivo: 9-12 meses</li>
      </ul>

      <h2 className="fxiplc-subtitle">⚠️ Complicaciones</h2>
      <ul className="fxiplc-list">
        <li>Inestabilidad residual</li>
        <li>Rigidez articular</li>
        <li>Neuropatía radial</li>
        <li>Artrosis posterolateral</li>
      </ul>

      <h2 className="fxiplc-subtitle">📈 Pronóstico</h2>
      <p className="fxiplc-text">
        Reparación aguda: 85-90% buenos resultados. Reconstrucción crónica: 75-85% éxito.
        El diagnóstico precoz es clave para evitar progresión degenerativa.
      </p>

    </div>
  );
}

export default InestPLCodo;
