

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FibrilacionAuricular.css';

function FibrilacionAuricular() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail318">

      <p className="fxh-title">Fibrilación Auricular</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>fibrilación auricular</strong> es una arritmia cardíaca frecuente
        caracterizada por una actividad eléctrica desorganizada en las aurículas,
        lo que produce un ritmo irregular y generalmente rápido.
      </p>

      <p className="fxh-subtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li> - Actividad eléctrica caótica en las aurículas.</li>
        <li> - Pérdida de contracción auricular efectiva.</li>
        <li> - Ritmo ventricular irregular.</li>
        <li> - Formación de trombos en aurícula.</li>
      </ul>

      <p className="fxh-subtitle">Clasificación</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Paroxística</td>
              <td>Episodios autolimitados (&lt; 7 días)</td>
            </tr>
            <tr>
              <td>Persistente</td>
              <td>&gt; 7 días, requiere intervención</td>
            </tr>
            <tr>
              <td>Permanente</td>
              <td>Ritmo constante, no reversible</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Causas ⚠️</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/hipertension">Hipertensión</Link>.</li>
        <li> - <Link to="/ecnt/cardiopatia">Enfermedad cardíaca</Link>.</li>
        <li> - <Link to="/ecnt/hipertiroidismo">Hipertiroidismo</Link>.</li>
        <li> - Consumo de alcohol.</li>
        <li> - Edad avanzada.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas 🔍</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/sintomas/palpitaciones">Palpitaciones</Link>.</li>
        <li> - Fatiga.</li>
        <li> - Disnea.</li>
        <li> - Mareos.</li>
        <li> - Puede ser asintomática.</li>
      </ul>

      <p className="fxh-subtitle">🚨 Signos de alarma</p>
      <ul className="fxh-list">
        <li> - Dolor torácico.</li>
        <li> - <Link to="/ecnt/sintomas/sincope">Síncope</Link>.</li>
        <li> - Déficit neurológico (ACV).</li>
        <li> - Inestabilidad hemodinámica.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🧪</p>
      <ul className="fxh-list">
        <li> - <Link to="/examenes/ekg">Electrocardiograma</Link>.</li>
        <li> - Monitoreo Holter.</li>
        <li> - Ecocardiograma.</li>
        <li> - Estudios tiroideos.</li>
      </ul>

      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-flex">

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Control del ritmo/frecuencia</p>
          <ul className="fxh-list">
            <li> - Beta bloqueadores.</li>
            <li> - Antiarrítmicos.</li>
            <li> - Cardioversión eléctrica.</li>
          </ul>
        </div>

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Prevención de trombos</p>
          <ul className="fxh-list">
            <li> - Anticoagulación.</li>
            <li> - Evaluación de riesgo (CHA₂DS₂-VASc).</li>
          </ul>
        </div>

      </div>

      <p className="fxh-subtitle">Complicaciones</p>
      <ul className="fxh-list">
        <li> - Accidente cerebrovascular.</li>
        <li> - Insuficiencia cardíaca.</li>
        <li> - Tromboembolismo.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        La fibrilación auricular es una arritmia frecuente con riesgo significativo
        de complicaciones, especialmente eventos tromboembólicos, por lo que requiere
        manejo integral y seguimiento continuo.
      </p>

    </div>
  );
}

export default FibrilacionAuricular;