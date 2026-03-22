import React, { useEffect } from 'react';
import NavBarLesLigTob from './NavBarLesLigTob';
import './LesionLigTobillo.css';

function LesionLigTobillo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxlt-detail">
      <NavBarLesLigTob />

      <p className="fxlt-title">Lesiones de Ligamentos del Tobillo</p>

      <p className="fxlt-subtitle">📌 Introducción</p>
      <p className="fxlt-text">
        Los esguinces de tobillo representan el <strong>80% de todas las lesiones deportivas</strong> en esta articulación. 
        El complejo ligamentoso lateral es el más frecuentemente afectado (85% de casos), especialmente en deportes 
        con saltos y cambios de dirección.
      </p>

      <p className="fxlt-subtitle">📌 Ligamentos Principales</p>
      <ul className="fxlt-list">
        <li><strong>Ligamento peroneoastragalino anterior (LPAA)</strong> - El más lesionado</li>
        <li><strong>Ligamento peroneocalcáneo (LPC)</strong></li>
        <li><strong>Ligamento peroneoastragalino posterior (LPAP)</strong></li>
        <li><strong>Ligamento deltoideo (medial)</strong> - Lesiones menos frecuentes</li>
      </ul>

      <p className="fxlt-subtitle">📌 Clasificación de Esguinces</p>
      <div className="fxlt-table-wrapper">
        <table className="fxlt-table">
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
              <td>Estiramiento leve</td>
              <td>Dolor leve, sin inestabilidad</td>
            </tr>
            <tr>
              <td>II</td>
              <td>Rotura parcial</td>
              <td>Dolor moderado, inflamación, leve inestabilidad</td>
            </tr>
            <tr>
              <td>III</td>
              <td>Rotura completa</td>
              <td>Dolor intenso, hematoma, inestabilidad marcada</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlt-subtitle">📌 Tratamiento Inmediato</p>
      <p className="fxlt-text">Protocolo POLICE (primeras 48-72h):</p>

      <ul className="fxlt-list">
        <li><strong>P</strong>rotection: Proteger la zona lesionada</li>
        <li><strong>O</strong>ptimal Loading: Carga progresiva según tolerancia</li>
        <li><strong>I</strong>ce: Crioterapia 15-20 min cada 2-3h</li>
        <li><strong>C</strong>ompression: Vendaje elástico</li>
        <li><strong>E</strong>levation: Elevar el pie</li>
      </ul>

      <p className="fxlt-subtitle">📌 Recuperación</p>
      <ul className="fxlt-list">
        <li><strong>Grado I:</strong> 1-2 semanas</li>
        <li><strong>Grado II:</strong> 3-6 semanas</li>
        <li><strong>Grado III:</strong> 6-12 semanas</li>
      </ul>

      <p className="fxlt-subtitle">📌 Ejercicios de Rehabilitación</p>
      <ul className="fxlt-list">
        <li>Movimientos alfabeto con el pie (desde fase aguda)</li>
        <li>Ejercicios con banda elástica (flexión dorsal, eversión)</li>
        <li>Equilibrio sobre una pierna (progresar a superficies inestables)</li>
      </ul>

      <p className="fxlt-subtitle">📌 Prevención</p>
      <ul className="fxlt-list">
        <li>Ejercicios de propiocepción 2-3 veces por semana</li>
        <li>Calentamiento adecuado antes de actividad física</li>
        <li>Calzado adecuado para cada actividad</li>
      </ul>
    </div>
  );
}

export default LesionLigTobillo;
