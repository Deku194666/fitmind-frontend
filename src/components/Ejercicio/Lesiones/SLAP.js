import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SLAP.css';

function SLAP() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxslap-detail">

      <p className="fxslap-title">
        Lesión SLAP (Superior Labrum Anterior to Posterior)
      </p>

      <p className="fxslap-subtitle">📌 Introducción</p>
      <p className="fxslap-text">
        La lesión SLAP es un <strong>desgarro del labrum superior</strong> en la zona de inserción del tendón de la porción larga del bíceps.
        Representa el <strong>6-12% de las patologías del hombro</strong> y es frecuente en atletas que realizan movimientos por encima de la cabeza.
      </p>

      <p className="fxslap-subtitle">📌 Anatomía Clave 🦴</p>
      <ul className="fxslap-list">
        <li><strong>Labrum superior</strong>: Zona de anclaje del bíceps.</li>
        <li><strong>Complejo bíceps-labrum</strong>: Absorbe fuerzas de tracción y torsión.</li>
        <li><strong>Zona de transición</strong>: Área vulnerable entre cartílago fibroso e hialino.</li>
      </ul>

      <p className="fxslap-subtitle">📌 Clasificación de Snyder 📊</p>
      <div className="fxslap-table-wrapper">
        <table className="fxslap-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descripción</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>I</strong></td>
              <td>Degeneración labral</td>
              <td>Inserción del bíceps intacta</td>
            </tr>
            <tr>
              <td><strong>II</strong></td>
              <td>Desinserción labral</td>
              <td>Tipo más común</td>
            </tr>
            <tr>
              <td><strong>III</strong></td>
              <td>Asa de balde</td>
              <td>Bíceps intacto</td>
            </tr>
            <tr>
              <td><strong>IV</strong></td>
              <td>Extiende al bíceps</td>
              <td>Puede requerir tenodesis</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxslap-subtitle">📌 Estudios de Imagen 🩺</p>
      <div className="fxslap-table-wrapper">
        <table className="fxslap-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/examenes/rx" className="fxslap-link">Radiografía</Link></td>
              <td>Generalmente normal</td>
              <td>Descartar patología ósea</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn" className="fxslap-link">RMN</Link></td>
              <td>Desgarro labral superior</td>
              <td>Alta sensibilidad</td>
            </tr>
            <tr>
              <td>Artro-RMN</td>
              <td>Contraste bajo labrum</td>
              <td>Gold standard</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxslap-subtitle">📌 Tratamiento</p>
      <ul className="fxslap-list">
        <li><strong>Conservador</strong>: Tipos I y III seleccionados.</li>
        <li><strong>Quirúrgico</strong>: Tipo II y IV con alta demanda funcional.</li>
      </ul>

      <p className="fxslap-subtitle">📌 Rehabilitación 🏋️‍♂️</p>
      <div className="fxslap-table-wrapper">
        <table className="fxslap-table">
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
              <td>Protección reparación</td>
              <td>0-4 sem</td>
            </tr>
            <tr>
              <td>2</td>
              <td>ROM progresivo</td>
              <td>4-8 sem</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Fortalecimiento</td>
              <td>8-12 sem</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Retorno deportivo</td>
              <td>6-9 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default SLAP;
