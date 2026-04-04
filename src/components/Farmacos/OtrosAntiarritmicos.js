import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OtrosAntiarritmicos.css';

function OtrosAntiarritmicos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail68">

      <p className="fxh-title">Otros Antiarrítmicos: Adenosina y Digoxina</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Existen fármacos antiarrítmicos que no se clasifican dentro de las clases tradicionales de Vaughan Williams,
        pero desempeñan un papel importante en el tratamiento de ciertas arritmias.
        Entre ellos destacan la <strong>Adenosina</strong> y la <strong>Digoxina</strong>,
        que actúan principalmente sobre el nodo auriculoventricular (AV) o modulan el tono vagal.
      </p>

      <p className="fxh-subtitle">🔬 Fármacos Destacados</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Mecanismo de acción</th>
              <th>Uso clínico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Adenosina</td>
              <td>
                Activa receptores A1 en el nodo AV, abre canales de potasio e inhibe AMPc,
                reduciendo la conducción nodal.
              </td>
              <td>
                Taquicardia supraventricular paroxística (TSVP). Efecto rápido y de corta duración.
              </td>
            </tr>
            <tr>
              <td>Digoxina</td>
              <td>
                Inhibe la Na⁺/K⁺ ATPasa y aumenta el tono vagal,
                reduciendo la conducción a través del nodo AV.
              </td>
              <td>
                Control de frecuencia en fibrilación auricular,
                especialmente en pacientes con insuficiencia cardíaca.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="fxh-list">
        <li><strong>Adenosina:</strong> tratamiento agudo de taquicardias por reentrada nodal AV.</li>
        <li><strong>Digoxina:</strong> control de respuesta ventricular en FA y flutter auricular con disfunción sistólica.</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="fxh-list">
        <li><strong>Adenosina:</strong> rubor facial, disnea, dolor torácico transitorio, bloqueo AV, broncoespasmo.</li>
        <li><strong>Digoxina:</strong> náuseas, vómitos, xantopsia (visión amarilla), arritmias ventriculares, toxicidad digital.</li>
      </ul>

      <p className="fxh-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="fxh-list">
        <li>Adenosina debe administrarse en bolo IV rápido con monitoreo ECG continuo.</li>
        <li>Contraindicada en asma grave y en síndrome de WPW con fibrilación auricular.</li>
        <li>Digoxina tiene margen terapéutico estrecho; requiere monitoreo plasmático.</li>
        <li>Ajustar dosis en insuficiencia renal y en pacientes ancianos.</li>
      </ul>

      <p className="fxh-subtitle">📦 Combinaciones Frecuentes</p>
      <ul className="fxh-list">
        <li>Digoxina + betabloqueadores o calcioantagonistas (con precaución).</li>
        <li>Adenosina + maniobras vagales en manejo inicial de TSVP.</li>
      </ul>

      <p className="fxh-subtitle">📚 Conclusión</p>
      <p className="fxh-text">
        Adenosina y digoxina son herramientas útiles y específicas para el control de ciertas arritmias.
        Su empleo debe basarse en el tipo de arritmia, el perfil del paciente y las posibles contraindicaciones,
        especialmente en insuficiencia cardíaca o disfunción renal.
      </p>

    </div>
  );
}

export default OtrosAntiarritmicos;
