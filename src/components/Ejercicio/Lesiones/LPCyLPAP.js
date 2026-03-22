import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LPCyLPAP.css';

function LPCyLPAP() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxll-detail">

      <p className="fxll-title">
        Esguince de Ligamento Peroneocalcáneo (LPC) y Peroneoastragalino Posterior (LPAP)
      </p>

      <p className="fxll-subtitle">📌 Introducción</p>
      <p className="fxll-text">
        Los ligamentos <strong>LPC</strong> y <strong>LPAP</strong> forman parte del complejo lateral del tobillo.
        El LPC es el segundo más lesionado en esguinces por inversión, mientras que el LPAP rara vez se lesiona de forma aislada.
      </p>

      <p className="fxll-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxll-list">
        <li><strong>LPC</strong>: Del maléolo peroneo al calcáneo.</li>
        <li><strong>LPAP</strong>: Del maléolo peroneo al astrágalo posterior.</li>
        <li>Ambos forman el complejo lateral junto al LPAA.</li>
      </ul>

      <p className="fxll-subtitle">Clasificación por Grado 📊</p>
      <div className="fxll-table-wrapper">
        <table className="fxll-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>LPC</th>
              <th>LPAP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>Microdesgarros</td>
              <td>Raro aislado</td>
            </tr>
            <tr>
              <td>II</td>
              <td>Rotura parcial</td>
              <td>Asociado a LPAA</td>
            </tr>
            <tr>
              <td>III</td>
              <td>Rotura completa</td>
              <td>Inestabilidad mecánica</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxll-subtitle">Diagnóstico 🩺</p>
      <ul className="fxll-list">
        <li><strong>LPC</strong>: Dolor submaleolar lateral</li>
        <li><strong>LPAP</strong>: Dolor posterior al maléolo</li>
        <li>Pruebas de inversión y rotación externa</li>
      </ul>

      <p className="fxll-text"><strong>Estudios de Imagen</strong></p>
      <div className="fxll-table-wrapper">
        <table className="fxll-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>LPC</th>
              <th>LPAP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/examenes/rx">Radiografía</Link></td>
              <td>Avulsión calcánea</td>
              <td>Fractura posterior</td>
            </tr>
            <tr>
              <td><Link to="/examenes/ecografia">Ecografía</Link></td>
              <td>Visualización dinámica</td>
              <td>Limitada</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Edema pericalcáneo</td>
              <td>Gold standard</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxll-subtitle">Tratamiento 🏥</p>
      <ul className="fxll-list">
        <li><strong>LPC:</strong> Movilización temprana + fortalecimiento</li>
        <li><strong>LPAP:</strong> Inmovilización prolongada</li>
        <li>Cirugía en roturas completas inestables</li>
      </ul>

      <p className="fxll-subtitle">Complicaciones ⚠️</p>
      <ul className="fxll-list">
        <li>Inestabilidad lateral crónica</li>
        <li>Artrosis tibiotalar posterior</li>
      </ul>

      <p className="fxll-subtitle">📌 Conclusión</p>
      <p className="fxll-text">
        Las lesiones del LPC suelen responder a rehabilitación funcional,
        mientras que las del LPAP indican trauma severo y requieren manejo más estricto.
      </p>

    </div>
  );
}

export default LPCyLPAP;
