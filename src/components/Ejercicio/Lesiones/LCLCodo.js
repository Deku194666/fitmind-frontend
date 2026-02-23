import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LCLCodo.css';

function LCLCodo() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxlcl-detail">

      <h1 className="fxlcl-title">
        Lesión del Ligamento Colateral Lateral  (LCL)   de Codo
      </h1>

      <h2 className="fxlcl-subtitle">📌 Introducción</h2>
      <p className="fxlcl-text">
        La lesión del <strong>ligamento colateral lateral (LCL)</strong> del codo es menos frecuente que la del LCM pero crucial en la estabilidad contra fuerzas de varo y rotación.
        Representa el <strong>5-10% de las lesiones ligamentosas de codo</strong>, siendo más común en traumatismos agudos o luxaciones posterolaterales.
      </p>

      <h2 className="fxlcl-subtitle">🦴 Anatomía Clave</h2>
      <ul className="fxlcl-list">
        <li><strong>Estructura del LCL</strong></li>
        <ul className="fxlcl-list nested">
          <li>Fascículo lateral: estabilizador primario</li>
          <li>Ligamento anular: estabiliza cabeza radial</li>
          <li>Ligamento accesorio lateral: refuerzo posterolateral</li>
        </ul>

        <li><strong>Biomecánica</strong></li>
        <ul className="fxlcl-list nested">
          <li>Resiste fuerzas de varo y rotación externa</li>
          <li>Máxima tensión en extensión completa</li>
          <li>Estabiliza 40% de resistencia a varo a 30°</li>
        </ul>

        <li><strong>Relaciones anatómicas</strong></li>
        <ul className="fxlcl-list nested">
          <li>Nervio radial próximo al complejo LCL</li>
          <li>Extensor común como estabilizador dinámico</li>
        </ul>
      </ul>

      <h2 className="fxlcl-subtitle">📊 Clasificación</h2>

      <div className="fxlcl-table-wrapper">
        <table className="fxlcl-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Daño Estructural</th>
              <th>Hallazgos Clínicos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>Microdesgarros</td>
              <td>Dolor lateral sin inestabilidad</td>
            </tr>
            <tr>
              <td>II</td>
              <td>Desgarro parcial</td>
              <td>Laxitud leve (2-4mm)</td>
            </tr>
            <tr>
              <td>III</td>
              <td>Rotura completa</td>
              <td>Inestabilidad rotatoria marcada</td>
            </tr>
            <tr>
              <td>Crónica</td>
              <td>Insuficiencia ligamentosa</td>
              <td>Inestabilidad recurrente</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxlcl-subtitle">🤕 Mecanismos de Lesión</h2>
      <ul className="fxlcl-list">
        <li>Caída sobre mano extendida</li>
        <li>Luxación posterolateral</li>
        <li>Trauma directo lateral</li>
        <li>Microtrauma repetitivo (gimnasia, lanzadores)</li>
      </ul>

      <h2 className="fxlcl-subtitle">🩺 Diagnóstico</h2>
      <p className="fxlcl-text">
        Dolor lateral, prueba de varo a 30°, prueba de silla, prueba de mesa y pivot shift para evaluar inestabilidad rotatoria.
      </p>

      <h2 className="fxlcl-subtitle">📷 Estudios de Imagen</h2>

      <div className="fxlcl-table-wrapper">
        <table className="fxlcl-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link className="fxlcl-link" to="/examenes/rx">Radiografía</Link></td>
              <td>Avulsiones, fracturas</td>
              <td>Evaluación ósea</td>
            </tr>
            <tr>
              <td><Link className="fxlcl-link" to="/examenes/rmn">RMN</Link></td>
              <td>Integridad fibras</td>
              <td>Gold standard</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Laxitud en varo</td>
              <td>Seguimiento dinámico</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxlcl-subtitle">🏥 Tratamiento</h2>
      <ul className="fxlcl-list">
        <li>Grado I-II → Manejo conservador</li>
        <li>Grado III → Reparación o reconstrucción</li>
        <li>Retorno deportivo: 6-9 meses</li>
      </ul>

      <h2 className="fxlcl-subtitle">⚠️ Complicaciones</h2>
      <ul className="fxlcl-list">
        <li>Inestabilidad residual</li>
        <li>Rigidez articular</li>
        <li>Neuropatía radial</li>
        <li>Artrosis lateral</li>
      </ul>

      <h2 className="fxlcl-subtitle">Conclusión</h2>
      <p className="fxlcl-text">
        Las lesiones del LCL requieren alto índice de sospecha tras luxaciones. Las parciales responden a tratamiento conservador; las completas con inestabilidad suelen requerir cirugía.
      </p>

    </div>
  );
}

export default LCLCodo;
