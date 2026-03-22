import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LuxacionMMDedos.css';

function LuxacionMMDedos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lux-detail">

      <p className="lux-title">Luxaciones de Dedos, Mano y Muñeca</p>

      <p className="lux-subtitle">📌 Introducción</p>
      <p className="lux-text">
        Las luxaciones en la extremidad superior distal representan 
        <strong> 25% de todas las luxaciones articulares</strong>. 
        Su manejo requiere comprensión anatómica precisa para evitar complicaciones 
        como rigidez o inestabilidad crónica.
      </p>

      <p className="lux-subtitle">🦴 Anatomía Clave</p>
      <ul className="lux-list">
        <li><strong>Dedos:</strong> Placa volar y ligamentos colaterales</li>
        <li><strong>Mano:</strong> Arcos palmares y compartimentos thenar/hypothenar</li>
        <li><strong>Muñeca:</strong> TFCC y ligamentos intercarpianos</li>
      </ul>

      <p className="lux-subtitle">📊 Clasificación por Región</p>
      <div className="lux-table-wrapper">
        <table className="lux-table">
          <thead>
            <tr>
              <th>Articulación</th>
              <th>Tipo Frecuente</th>
              <th>Mecanismo</th>
              <th>Complicación Principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Interfalángica</td>
              <td>Dorsal (90%)</td>
              <td>Hiperextensión</td>
              <td>Rigidez</td>
            </tr>
            <tr>
              <td>Metacarpofalángica</td>
              <td>Dorsal (75%)</td>
              <td>Caída con puño cerrado</td>
              <td>Inestabilidad crónica</td>
            </tr>
            <tr>
              <td>Carpo (Lunato)</td>
              <td>Perilunar</td>
              <td>Hiperextensión forzada</td>
              <td>Necrosis avascular</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="lux-subtitle">🩺 Diagnóstico por Imagen</p>
      <div className="lux-table-wrapper">
        <table className="lux-table">
          <thead>
            <tr>
              <th>Región</th>
              <th>Estudio Ideal</th>
              <th>Hallazgo Clave</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dedos</td>
              <td>RX AP/Lateral</td>
              <td>Pérdida congruencia articular</td>
            </tr>
            <tr>
              <td>Mano</td>
              <td>RX + TAC</td>
              <td>Lesión arcos metacarpianos</td>
            </tr>
            <tr>
              <td>Muñeca</td>
              <td>RMN + TAC 3D</td>
              <td>Disrupción ligamentosa</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="lux-subtitle">🔄 Técnicas de Reducción</p>
      <div className="lux-flex">
        <div className="lux-half">
          <p className="lux-subsubtitle">Dedos</p>
          <ul className="lux-list">
            <li>Tracción axial + flexión progresiva</li>
            <li>Bloqueo digital</li>
            <li>Test estabilidad colateral</li>
          </ul>
        </div>

        <div className="lux-half">
          <p className="lux-subsubtitle">Muñeca</p>
          <ul className="lux-list">
            <li>Técnica Watson-Jones</li>
            <li>Sedación consciente</li>
            <li>Evaluar arco de Gilula</li>
          </ul>
        </div>
      </div>

      <p className="lux-subtitle">🏋️ Rehabilitación</p>
      <div className="lux-table-wrapper">
        <table className="lux-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Dedos</th>
              <th>Muñeca</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aguda</td>
              <td>Férula seguridad</td>
              <td>Férula neutra</td>
            </tr>
            <tr>
              <td>Subaguda</td>
              <td>Movilización activa</td>
              <td>Movilización pasiva</td>
            </tr>
            <tr>
              <td>Funcional</td>
              <td>Ejercicios pinza</td>
              <td>Propiocepción con carga</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="lux-subtitle">Conclusión</p>
      <p className="lux-text">
        El manejo requiere reducción precisa, estabilización adecuada y rehabilitación temprana.
        Las lesiones carpianas complejas pueden requerir cirugía.
      </p>

    </div>
  );
}

export default LuxacionMMDedos;
