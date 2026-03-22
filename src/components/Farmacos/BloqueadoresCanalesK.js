import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BloqueadoresCanalesK.css';

function BloqueadoresCanalesK() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail67">

      <p className="fxh-title">Bloqueadores de los Canales de Potasio</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>bloqueadores de los canales de potasio</strong> pertenecen a la clase III de los antiarrítmicos según la clasificación de Vaughan Williams.
        Actúan prolongando la repolarización al inhibir los canales de potasio responsables de la fase 3 del potencial de acción,
        lo que prolonga el QT y el período refractario, ayudando a prevenir <strong>taquiarritmias supraventriculares y ventriculares</strong>.
      </p>

      <p className="fxh-subtitle">🔬 Ejemplos Representativos</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Características</th>
              <th>Uso Clínico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amiodarona</td>
              <td>Prolonga el QT, con acción en múltiples canales. Vida media muy larga.</td>
              <td>Taquicardias ventriculares, fibrilación auricular.</td>
            </tr>
            <tr>
              <td>Sotalol</td>
              <td>También tiene efecto betabloqueador. Prolonga el intervalo QT.</td>
              <td>Arritmias supraventriculares y ventriculares.</td>
            </tr>
            <tr>
              <td>Dofetilida, Ibutilida</td>
              <td>Bloqueo selectivo del canal I<sub>Kr</sub>. Uso hospitalario.</td>
              <td>Cardioversión química de FA o flutter auricular.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="fxh-list">
        <li>Fibrilación auricular (prevención de recurrencias o cardioversión farmacológica).</li>
        <li>Flutter auricular.</li>
        <li>Taquicardias ventriculares sostenidas.</li>
        <li>Prevención de muerte súbita en pacientes de alto riesgo.</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="fxh-list">
        <li>Prolongación del intervalo QT (riesgo de torsades de pointes).</li>
        <li>Bradicardia e hipotensión.</li>
        <li>Toxicidad tiroidea (amiodarona).</li>
        <li>Fibrosis pulmonar a largo plazo (amiodarona).</li>
        <li>Hepatotoxicidad, fotosensibilidad y depósitos corneales.</li>
      </ul>

      <p className="fxh-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="fxh-list">
        <li>Amiodarona requiere monitoreo hepático, pulmonar, tiroideo y visual.</li>
        <li>Sotalol requiere ajuste en insuficiencia renal.</li>
        <li>Evitar combinación con fármacos que prolonguen el QT.</li>
        <li>Dofetilida e ibutilida requieren hospitalización y ECG continuo.</li>
      </ul>

      <p className="fxh-subtitle">📦 Combinaciones Frecuentes</p>
      <ul className="fxh-list">
        <li>Amiodarona + marcapasos o desfibrilador implantable.</li>
        <li>Sotalol + anticoagulante en fibrilación auricular.</li>
        <li>Amiodarona + betabloqueador en casos refractarios (con vigilancia).</li>
      </ul>

      <p className="fxh-subtitle">📚 Conclusión</p>
      <p className="fxh-text">
        Los bloqueadores de los canales de potasio son antiarrítmicos potentes y versátiles,
        especialmente útiles en fibrilación auricular y arritmias ventriculares.
        Sin embargo, requieren uso cuidadoso debido a su perfil de toxicidad
        y riesgo de arritmias inducidas por fármacos.
      </p>

    </div>
  );
}

export default BloqueadoresCanalesK;
