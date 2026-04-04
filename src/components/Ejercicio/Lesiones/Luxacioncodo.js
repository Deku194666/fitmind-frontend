import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Luxacioncodo.css';

function Luxacioncodo() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxluxc-detail">

      <h1 className="fxluxc-title">Luxación de Codo</h1>

      <h2 className="fxluxc-subtitle">📌 Introducción</h2>
      <p className="fxluxc-text">
        La luxación de codo es la <strong>segunda luxación más común</strong> en adultos 
        (después del hombro), representando el 10-25% de todas las luxaciones. 
        El mecanismo típico es una caída sobre la mano extendida con el codo en extensión (FOOSH injury). 
        Las luxaciones posteriores representan el <strong>90% de los casos</strong>.
      </p>

      <h2 className="fxluxc-subtitle">🦴 Anatomía Clave</h2>
      <ul className="fxluxc-list">
        <li>Ligamento colateral medial</li>
        <li>Complejo ligamentoso lateral (LCL)</li>
        <li>Proceso coronoides</li>
        <li>Cápsula articular</li>
        <li>Músculos flexores y extensores</li>
        <li>Nervio cubital</li>
        <li>Arteria braquial</li>
      </ul>

      <h2 className="fxluxc-subtitle">📊 Clasificación</h2>

      <div className="fxluxc-table-wrapper">
        <table className="fxluxc-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Dirección</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Posterior</strong></td>
              <td>90%</td>
              <td>Mecanismo FOOSH, asociada a fracturas</td>
            </tr>
            <tr>
              <td><strong>Anterior</strong></td>
              <td>5%</td>
              <td>Alta tasa de lesión nerviosa</td>
            </tr>
            <tr>
              <td><strong>Lateral/Medial</strong></td>
              <td>3%</td>
              <td>Trauma de alta energía</td>
            </tr>
            <tr>
              <td><strong>Divergente</strong></td>
              <td>&lt;1%</td>
              <td>Inestabilidad grave</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxluxc-subtitle">🩺 Estudios de Imagen</h2>

      <div className="fxluxc-table-wrapper">
        <table className="fxluxc-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link className="fxluxc-link" to="/examenes/rx">Radiografía</Link></td>
              <td>Relación articular, fracturas</td>
              <td>Evaluación inicial</td>
            </tr>
            <tr>
              <td><Link className="fxluxc-link" to="/examenes/tc">TC</Link></td>
              <td>Fragmentos intraarticulares</td>
              <td>Evaluación prequirúrgica</td>
            </tr>
            <tr>
              <td><Link className="fxluxc-link" to="/examenes/rmn">RMN</Link></td>
              <td>Lesiones ligamentosas</td>
              <td>Casos complejos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxluxc-subtitle">🏥 Manejo</h2>
      <ul className="fxluxc-list">
        <li>Reducción cerrada urgente</li>
        <li>Inmovilización 90° flexión</li>
        <li>Evaluación neurovascular post-reducción</li>
        <li>Cirugía en casos inestables o fracturas asociadas</li>
      </ul>

      <h2 className="fxluxc-subtitle">🔄 Rehabilitación</h2>

      <div className="fxluxc-table-wrapper">
        <table className="fxluxc-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Objetivo</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aguda</td>
              <td>Protección</td>
              <td>0-3 semanas</td>
            </tr>
            <tr>
              <td>Subaguda</td>
              <td>Recuperar movilidad</td>
              <td>3-6 semanas</td>
            </tr>
            <tr>
              <td>Fortalecimiento</td>
              <td>Recuperar fuerza</td>
              <td>6-12 semanas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxluxc-subtitle">⚠️ Complicaciones</h2>
      <ul className="fxluxc-list">
        <li>Inestabilidad recurrente</li>
        <li>Rigidez articular</li>
        <li>Heterotopia ósea</li>
        <li>Artrosis postraumática</li>
      </ul>

      <h2 className="fxluxc-subtitle">📈 Pronóstico</h2>
      <p className="fxluxc-text">
        Las luxaciones simples tienen excelente pronóstico con tratamiento conservador. 
        Los casos complejos pueden requerir cirugía y rehabilitación prolongada.
      </p>

    </div>
  );
}

export default Luxacioncodo;
