import React, { useEffect } from 'react';
import NavBarLesLigRod from './NavBarLesLigRod';
import './LesionLigRodilla.css';

function LesionLigRodilla() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxlr-detail">
      <NavBarLesLigRod />

      <p className="fxlr-title">Lesiones de Ligamentos de Rodilla</p>

      <p className="fxlr-subtitle">📌 Introducción</p>
      <p className="fxlr-text">
        Las lesiones ligamentosas de rodilla representan el 40% de las lesiones deportivas en extremidades inferiores.
      </p>

      <p className="fxlr-subtitle">📌 Ligamentos Principales</p>
      <ul className="fxlr-list">
        <li><strong>LCA</strong> - Lesión más frecuente</li>
        <li><strong>LCP</strong> - Trauma directo</li>
        <li><strong>LCM</strong> - Mecanismo en valgo</li>
        <li><strong>LCL</strong> - Mecanismo en varo</li>
      </ul>

      <p className="fxlr-subtitle">📌 Clasificación</p>
      <div className="fxlr-table-wrapper">
        <table className="fxlr-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Daño</th>
              <th>Síntomas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>Microdesgarros</td>
              <td>Dolor leve</td>
            </tr>
            <tr>
              <td>II</td>
              <td>Rotura parcial</td>
              <td>Edema + inestabilidad leve</td>
            </tr>
            <tr>
              <td>III</td>
              <td>Rotura completa</td>
              <td>Inestabilidad marcada</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlr-subtitle">📌 Manejo Específico</p>
      <div className="fxlr-flex">
        <div className="fxlr-half">
          <p className="fxlr-text"><strong>Tratamiento Conservador</strong></p>
          <ul className="fxlr-list">
            <li>Indicado en Grado I-II</li>
            <li>Fisioterapia + fortalecimiento</li>
            <li>Trabajo propioceptivo</li>
          </ul>
        </div>

        <div className="fxlr-half">
          <p className="fxlr-text"><strong>Tratamiento Quirúrgico</strong></p>
          <ul className="fxlr-list">
            <li>Grado III o atletas</li>
            <li>Reconstrucción con injerto</li>
            <li>Rehabilitación prolongada</li>
          </ul>
        </div>
      </div>

      <p className="fxlr-subtitle">📌 Rehabilitación</p>
      <div className="fxlr-table-wrapper">
        <table className="fxlr-table">
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
              <td>Control edema</td>
              <td>0-2 semanas</td>
            </tr>
            <tr>
              <td>Subaguda</td>
              <td>Fortalecimiento</td>
              <td>2-6 semanas</td>
            </tr>
            <tr>
              <td>Funcional</td>
              <td>Propiocepción</td>
              <td>6-12 semanas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlr-subtitle">📌 Complicaciones</p>
      <ul className="fxlr-list">
        <li>Inestabilidad crónica</li>
        <li>Artrosis precoz</li>
        <li>Lesiones meniscales secundarias</li>
      </ul>

    </div>
  );
}

export default LesionLigRodilla;
