import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LPAA.css';

function LPAA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxlp-detail">

      <p className="fxlp-title">
        Esguince de Ligamento Peroneoastragalino Anterior (LPAA)
      </p>

      <p className="fxlp-subtitle">📌 Introducción</p>
      <p className="fxlp-text">
        El <strong>Esguince de Tobillo</strong> es una de las lesiones musculoesqueléticas más comunes, representando ≈25% de todas las lesiones deportivas. 
        El <strong>Ligamento Peroneoastragalino Anterior (LPAA)</strong> es el más afectado (≈65-70% de los casos) debido a su posición anatómica y función de estabilización contra la inversión forzada del pie.
      </p>

      <p className="fxlp-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxlp-list">
        <li><strong>LPAA</strong>: Se origina en el maléolo peroneo y se inserta en el astrágalo.</li>
        <li><strong>Ligamento Peroneocalcáneo (LPC)</strong>: Segundo más lesionado.</li>
        <li><strong>Ligamento Peroneoastragalino Posterior (LPAP)</strong>: Raramente se lesiona.</li>
      </ul>

      <p className="fxlp-subtitle">Clasificación por Grado 📊</p>
      <div className="fxlp-table-wrapper">
        <table className="fxlp-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Daño Estructural</th>
              <th>Síntomas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I (Leve)</td>
              <td>Microdesgarros (&lt;25%)</td>
              <td>Dolor leve, sin inestabilidad</td>
            </tr>
            <tr>
              <td>II (Moderado)</td>
              <td>Rotura parcial (25-75%)</td>
              <td>Dolor moderado, edema, dificultad para apoyar</td>
            </tr>
            <tr>
              <td>III (Grave)</td>
              <td>Rotura completa (&gt;75%)</td>
              <td>Dolor intenso, inestabilidad mecánica</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlp-subtitle">Diagnóstico 🩺</p>
      <p className="fxlp-text"><strong>Examen Físico</strong></p>
      <ul className="fxlp-list">
        <li><strong>Prueba del cajón anterior</strong></li>
        <li><strong>Prueba de inversión</strong></li>
      </ul>

      <p className="fxlp-text"><strong>Estudios de Imagen</strong></p>
      <div className="fxlp-table-wrapper">
        <table className="fxlp-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Indicación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/examenes/rx">Radiografía</Link></td>
              <td>Descartar fractura</td>
            </tr>
            <tr>
              <td><Link to="/examenes/ecografia">Ecografía</Link></td>
              <td>Evaluar integridad ligamentaria</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rnm">RMN</Link></td>
              <td>Casos complejos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlp-subtitle">Tratamiento Conservador 🏥</p>
      <ul className="fxlp-list">
        <li>Inmovilización relativa</li>
        <li>Hielo 15-20 min</li>
        <li>Compresión y elevación</li>
        <li>Rehabilitación progresiva</li>
      </ul>

      <p className="fxlp-subtitle">Rehabilitación 🏋️‍♂️</p>
      <div className="fxlp-table-wrapper">
        <table className="fxlp-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Objetivos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0-2 semanas</td>
              <td>Control edema y dolor</td>
            </tr>
            <tr>
              <td>2-6 semanas</td>
              <td>Fortalecimiento</td>
            </tr>
            <tr>
              <td>6-12 semanas</td>
              <td>Retorno deportivo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlp-subtitle">Complicaciones ⚠️</p>
      <ul className="fxlp-list">
        <li>Inestabilidad crónica</li>
        <li>Pinzamiento anterolateral</li>
        <li>Artrosis postraumática</li>
      </ul>

      <p className="fxlp-subtitle">Conclusión</p>
      <p className="fxlp-text">
        La mayoría de los esguinces responden a tratamiento conservador. 
        La rehabilitación temprana es clave para prevenir recidivas.
      </p>

    </div>
  );
}

export default LPAA;
