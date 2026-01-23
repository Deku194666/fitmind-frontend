import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarLesLig from './NavBarLesLig';
import './LesionesLigamentosas.css';

function LesionesLigamentos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lesiones-container">
      <NavBarLesLig />

      <p className="title-main">Lesiones Ligamentosas Comunes</p>

      <p className="title-section2">📌 Introducción</p>
      <p className="text-body">
        Las lesiones ligamentosas representan el <strong>25–40%</strong> de todas las lesiones deportivas y son frecuentes
        en actividades con cambios bruscos de dirección. Los ligamentos aportan estabilidad articular y su correcto
        manejo previene inestabilidad crónica.
      </p>

      <p className="title-subsection2">📌 Esguince de Tobillo</p>
      <p className="text-body">
        Representa el <strong>85%</strong> de las lesiones ligamentosas. Afecta principalmente al ligamento
        peroneoastragalino anterior (LPAA), por inversión forzada del pie.
      </p>

      <ul className="text-body">
        <li><strong>Grado I:</strong> Microdesgarros</li>
        <li><strong>Grado II:</strong> Rotura parcial</li>
        <li><strong>Grado III:</strong> Rotura completa</li>
      </ul>

      <p className="title-subsection2">📌 Lesión del LCA</p>
      <p className="text-body">
        Ocurre por rotación con pie fijo y valgo de rodilla. Frecuente en fútbol, esquí y baloncesto.
      </p>

      <ul className="text-body">
        <li><strong>Lachman:</strong> Alta sensibilidad</li>
        <li><strong>Cajón anterior</strong></li>
        <li><strong>Pivot shift</strong></li>
      </ul>

      <p className="title-subsection2">📌 Lesión del LCM</p>
      <p className="text-body">
        Es el ligamento más lesionado de la rodilla. Tiene buena capacidad de cicatrización en grados I–II.
      </p>

      <p className="title-subsection2">📌 Lesión del LCC</p>
      <p className="text-body">
        Menos frecuente pero subdiagnosticada. Típica en traumatismos directos sobre la tibia.
      </p>

      <p className="title-section2">📌 Técnicas de Rehabilitación</p>
      <table className="styled-table2">
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

      <p className="title-section2">🌱 Prevención</p>
      <ul className="text-body">
        <li>Programas neuromusculares</li>
        <li>Fortalecimiento del core</li>
        <li>Calzado adecuado</li>
      </ul>

      <p className="title-section2">📌 Conclusión</p>
      <p className="text-body">
        El abordaje individualizado y la rehabilitación temprana reducen el riesgo de inestabilidad crónica.
        Los programas preventivos disminuyen significativamente la incidencia de estas lesiones.
      </p>
    </div>
  );
}

export default LesionesLigamentos;
