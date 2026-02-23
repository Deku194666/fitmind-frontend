import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BloqueadoresCanalesNa.css';

function BloqueadoresCanalesNa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <p className="fxh-title">Bloqueadores de los Canales de Sodio</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Bloqueadores de los Canales de Sodio</strong> son antiarrítmicos de clase I según la clasificación de Vaughan Williams.
        Actúan inhibiendo el flujo de sodio durante la fase 0 del potencial de acción en las células cardíacas, lo que disminuye la velocidad de
        despolarización y la conducción del impulso. Son útiles para tratar diversas <strong>Taquiarritmias</strong>.
      </p>

      <p className="fxh-subtitle">🔬 Clasificación (Clase I: Subclases A, B y C)</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Subclase</th>
              <th>Ejemplos</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Clase IA</td>
              <td>Quinidina, Procainamida, Disopiramida</td>
              <td>Bloquean canales de sodio y potasio, prolongan el potencial de acción.</td>
            </tr>
            <tr>
              <td>Clase IB</td>
              <td>Lidocaína, Mexiletina</td>
              <td>Efecto en tejido isquémico, acortan el potencial de acción.</td>
            </tr>
            <tr>
              <td>Clase IC</td>
              <td>Flecainida, Propafenona</td>
              <td>Potente bloqueo de sodio, sin efecto en duración del potencial de acción.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="fxh-list">
        <li>Taquicardias ventriculares (lidocaína en emergencia).</li>
        <li>Arritmias supraventriculares y fibrilación auricular paroxística (flecainida, propafenona).</li>
        <li>Prevención de recurrencias de arritmias.</li>
        <li>En algunos casos de WPW bajo indicación especializada.</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="fxh-list">
        <li>Proarritmia (especialmente clase IC en cardiopatía estructural).</li>
        <li>Alteraciones neurológicas (temblores, mareos, visión borrosa).</li>
        <li>Hipotensión (procainamida, lidocaína).</li>
        <li>Efectos gastrointestinales (náuseas, vómitos).</li>
      </ul>

      <p className="fxh-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="fxh-list">
        <li>La clase IC está contraindicada en cardiopatía estructural.</li>
        <li>Monitoreo estrecho en uso hospitalario (lidocaína IV).</li>
        <li>No se recomiendan como tratamiento crónico en la mayoría de los pacientes.</li>
        <li>Procainamida puede inducir síndrome lupus-like con uso prolongado.</li>
      </ul>

      <p className="fxh-subtitle">📦 Combinaciones Frecuentes</p>
      <ul className="fxh-list">
        <li>Clase IC + betabloqueador o calcioantagonista.</li>
        <li>Evitar combinación con fármacos que prolonguen el QT.</li>
        <li>En emergencias, lidocaína IV puede combinarse con amiodarona.</li>
      </ul>

      <p className="fxh-subtitle">📚 Conclusión</p>
      <p className="fxh-text">
        Los <strong>Bloqueadores de los Canales de Sodio</strong> son antiarrítmicos potentes y útiles en situaciones específicas,
        pero con riesgo de efectos proarrítmicos. Su uso debe ser individualizado y supervisado por especialistas,
        especialmente en presencia de cardiopatía estructural o antecedentes de arritmias graves.
      </p>

    </div>
  );
}

export default BloqueadoresCanalesNa;
