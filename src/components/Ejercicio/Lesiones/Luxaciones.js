import React, { useEffect } from "react";
import NavBarLesLux from "./NavBarLesLux";
import "./Luxaciones.css";

function Luxaciones() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lux-detail">

      <NavBarLesLux />

      <p className="lux-title">Luxaciones Articulares Comunes</p>

      <p className="lux-subtitle">📌 Introducción</p>
      <p className="lux-text">
        Las <strong>Luxaciones Articulares</strong> representan el 
        <strong> 5-10% de todas las lesiones articulares</strong>, siendo emergencias ortopédicas 
        que requieren reducción inmediata. Ocurren cuando hay pérdida completa de la 
        congruencia articular. Las complicaciones neurovasculares pueden ser devastadoras.
      </p>

      <p className="lux-subtitle">📌 Luxación Glenohumeral (Hombro)</p>
      <p className="lux-text">
        Representa el <strong>50% de todas las luxaciones</strong>. La dirección anterior 
        es la más común (95%).
      </p>

      <p className="lux-subsubtitle">Clasificación:</p>
      <ul className="lux-list">
        <li><strong>Tipo I:</strong> Traumática aguda</li>
        <li><strong>Tipo II:</strong> Recidivante</li>
        <li><strong>Tipo III:</strong> Habitual</li>
        <li><strong>Tipo IV:</strong> Voluntaria</li>
      </ul>

      <p className="lux-subtitle">📌 Luxación de Codo</p>
      <p className="lux-text">
        Segunda luxación más común (20%). La posterior representa el 90%.
      </p>

      <p className="lux-subsubtitle">Complicaciones inmediatas:</p>
      <ul className="lux-list">
        <li>Lesión de arteria braquial</li>
        <li>Atrapamiento nervio cubital</li>
        <li>Inestabilidad crónica</li>
      </ul>

      <p className="lux-subtitle">📌 Luxación de Cadera</p>
      <p className="lux-text">
        Emergencia mayor con riesgo de necrosis avascular (10-20%).
      </p>

      <p className="lux-subsubtitle">Clasificación Thompson-Epstein:</p>
      <ul className="lux-list">
        <li>Tipo I: Sin fractura</li>
        <li>Tipo II: Borde posterior &gt;25%</li>
        <li>Tipo III: Conminuta</li>
        <li>Tipo IV: Fractura acetábulo</li>
        <li>Tipo V: Fractura cabeza femoral</li>
      </ul>

      <p className="lux-subtitle">📌 Técnicas de Reducción</p>
      <div className="lux-table-wrapper">
        <table className="lux-table">
          <thead>
            <tr>
              <th>Articulación</th>
              <th>Método</th>
              <th>Éxito</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hombro</td>
              <td>Stimson</td>
              <td>70-80%</td>
            </tr>
            <tr>
              <td>Codo</td>
              <td>Tracto + flexión</td>
              <td>85-90%</td>
            </tr>
            <tr>
              <td>Cadera</td>
              <td>Allis</td>
              <td>60-70%</td>
            </tr>
            <tr>
              <td>Rótula</td>
              <td>Extensión progresiva</td>
              <td>95%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="lux-subtitle">📌 Manejo Post-Reducción</p>
      <div className="lux-table-wrapper">
        <table className="lux-table">
          <thead>
            <tr>
              <th>Articulación</th>
              <th>Inmovilización</th>
              <th>Rehabilitación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hombro</td>
              <td>Cabestrillo 3-4 sem</td>
              <td>Pendulares → rotadores</td>
            </tr>
            <tr>
              <td>Codo</td>
              <td>Férula 90°</td>
              <td>ROM progresivo</td>
            </tr>
            <tr>
              <td>Cadera</td>
              <td>Tracto 2-3 sem</td>
              <td>Carga progresiva</td>
            </tr>
            <tr>
              <td>Rótula</td>
              <td>Rodillera</td>
              <td>Fortalecimiento VMO</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="lux-subtitle">⚠️ Complicaciones</p>
      <ul className="lux-list">
        <li>Lesión neurovascular</li>
        <li>Fractura asociada</li>
        <li>Inestabilidad crónica</li>
        <li>Necrosis avascular</li>
      </ul>

      <p className="lux-subtitle">📌 Conclusión</p>
      <p className="lux-text">
        Las luxaciones requieren manejo inmediato, evaluación neurovascular 
        completa y rehabilitación estructurada para prevenir recurrencias.
      </p>

    </div>
  );
}

export default Luxaciones;
