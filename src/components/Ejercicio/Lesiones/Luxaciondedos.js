import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Luxaciondedos.css"; // Nuevo CSS basado en LesionFCT

function Luxaciondedos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxfct-detail">

      <p className="fxfct-title">
        Luxación de Dedos (Articulaciones Interfalángicas y Metacarpofalángicas)
      </p>

      <p className="fxfct-subtitle">📌 Introducción</p>
      <p className="fxfct-text">
        La luxación de dedos es una <strong>pérdida completa de la congruencia articular</strong> 
        entre las falanges o entre metacarpianos y falanges, generalmente por trauma directo o hiperextensión. 
        Representa el <strong>15-20% de las lesiones traumáticas de la mano</strong>, siendo más frecuentes 
        en las articulaciones interfalángicas proximales (IFP) y en deportistas.
      </p>

      <p className="fxfct-subtitle">🦴 Anatomía Clave</p>
      <ul className="fxfct-list">
        <li>
          <strong>Estabilizadores articulares</strong>
          <ul>
            <li><strong>Placa volar</strong>: Principal restrictor de hiperextensión</li>
            <li><strong>Ligamentos colaterales</strong>: Previenen desviación lateral</li>
            <li><strong>Fibras check-rein</strong>: Refuerzan placa volar proximalmente</li>
          </ul>
        </li>
        <li>
          <strong>Articulaciones afectadas</strong>
          <ul>
            <li>IFP (75%)</li>
            <li>MCF (20%)</li>
            <li>IFD (5%)</li>
          </ul>
        </li>
      </ul>

      <p className="fxfct-subtitle">Clasificación de Luxaciones 📊</p>
      <div className="fxfct-table-wrapper">
        <table className="fxfct-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Dirección</th>
              <th>Mecanismo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Dorsal (90%)</strong></td>
              <td>Falange desplazada dorsalmente</td>
              <td>Hiperextensión + fuerza axial</td>
            </tr>
            <tr>
              <td><strong>Volar (5%)</strong></td>
              <td>Falange desplazada volarmente</td>
              <td>Flexión forzada + rotación</td>
            </tr>
            <tr>
              <td><strong>Lateral (5%)</strong></td>
              <td>Desviación radial/cubital</td>
              <td>Trauma lateral directo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxfct-subtitle">Diagnóstico 🩺</p>
      <p className="fxfct-subtitle" style={{ fontSize: "2.4rem" }}>Estudios de Imagen</p>
      <div className="fxfct-table-wrapper">
        <table className="fxfct-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link className="fxfct-link" to="/examenes/rx">Radiografía</Link></td>
              <td>Pérdida congruencia articular</td>
              <td>Identificar fracturas asociadas</td>
            </tr>
            <tr>
              <td><Link className="fxfct-link" to="/examenes/rmn">RMN</Link></td>
              <td>Lesión placa volar / ligamentos</td>
              <td>Casos complejos</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Luxaciondedos;
