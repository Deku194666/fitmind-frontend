import React, { useEffect } from 'react';
import NavBarLesLig from './NavBarLesLig';
import './LesionesLigamentosas.css';

function LesionesLigamentos() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="fxl-detail">
      <NavBarLesLig />

      <h1 className="fxl-title">Lesiones Ligamentosas Comunes</h1>

      <h2 className="fxl-subtitle">📌 Introducción</h2>
      <p className="fxl-text">
        Las lesiones ligamentosas representan el <strong>25–40%</strong> de todas las lesiones deportivas y son frecuentes
        en actividades con cambios bruscos de dirección. Los ligamentos aportan estabilidad articular y su correcto
        manejo previene inestabilidad crónica.
      </p>

      <h3 className="fxl-subsubtitle">📌 Esguince de Tobillo</h3>
      <p className="fxl-text">
        Representa el <strong>85%</strong> de las lesiones ligamentosas. Afecta principalmente al ligamento
        peroneoastragalino anterior (LPAA), por inversión forzada del pie.
      </p>

      <ul className="fxl-list">
        <li><strong>Grado I:</strong> Microdesgarros</li>
        <li><strong>Grado II:</strong> Rotura parcial</li>
        <li><strong>Grado III:</strong> Rotura completa</li>
      </ul>

      <h3 className="fxl-subsubtitle">📌 Lesión del LCA</h3>
      <p className="fxl-text">
        Ocurre por rotación con pie fijo y valgo de rodilla. Frecuente en fútbol, esquí y baloncesto.
      </p>

      <ul className="fxl-list">
        <li><strong>Lachman:</strong> Alta sensibilidad</li>
        <li><strong>Cajón anterior</strong></li>
        <li><strong>Pivot shift</strong></li>
      </ul>

      <h3 className="fxl-subsubtitle">📌 Lesión del LCM</h3>
      <p className="fxl-text">
        Es el ligamento más lesionado de la rodilla. Tiene buena capacidad de cicatrización en grados I–II.
      </p>

      <h3 className="fxl-subsubtitle">📌 Lesión del LCC</h3>
      <p className="fxl-text">
        Menos frecuente pero subdiagnosticada. Típica en traumatismos directos sobre la tibia.
      </p>

      <h2 className="fxl-subtitle">📌 Técnicas de Rehabilitación</h2>
      <div className="fxl-table-wrapper">
        <table className="fxl-table">
          <thead>
            <tr>
              <th>Técnica</th>
              <th>Aplicación</th>
              <th>Beneficio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Propiocepción</td>
              <td>Superficies inestables</td>
              <td>Control neuromuscular</td>
            </tr>
            <tr>
              <td>Fortalecimiento excéntrico</td>
              <td>Ejercicios controlados</td>
              <td>Estabilidad dinámica</td>
            </tr>
            <tr>
              <td>Vendaje funcional</td>
              <td>Taping específico</td>
              <td>Soporte articular</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxl-subtitle">🌱 Prevención</h2>
      <ul className="fxl-list">
        <li>Programas neuromusculares</li>
        <li>Fortalecimiento del core</li>
        <li>Calzado adecuado</li>
      </ul>

      <h2 className="fxl-subtitle">📌 Conclusión</h2>
      <p className="fxl-text">
        El abordaje individualizado y la rehabilitación temprana reducen el riesgo de inestabilidad crónica.
        Los programas preventivos disminuyen significativamente la incidencia de estas lesiones.
      </p>
    </div>
  );
}

export default LesionesLigamentos;
