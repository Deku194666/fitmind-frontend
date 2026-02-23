import React, { useEffect } from 'react';
import './Fibratos.css';

function Fibratos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <h1 className="fxh-title">Fibratos</h1>

      <h2 className="fxh-subtitle">📌 Introducción</h2>
      <p className="fxh-text">
        Los <strong>Fibratos</strong> son medicamentos hipolipemiantes que actúan principalmente reduciendo los niveles de 
        <strong> triglicéridos</strong> y aumentando el <strong>colesterol HDL</strong> (colesterol “bueno”). 
        Son útiles en el tratamiento de la <strong>hipertrigliceridemia</strong> y en pacientes con riesgo de pancreatitis 
        por triglicéridos muy elevados.
      </p>

      <h2 className="fxh-subtitle">🔬 Mecanismo de Acción</h2>
      <p className="fxh-text">
        Activan los <strong>receptores PPAR-α</strong> (receptores activados por proliferadores de peroxisomas tipo alfa), 
        lo cual induce la expresión de enzimas que aumentan la oxidación de ácidos grasos y disminuyen la producción hepática de VLDL. 
        También incrementan la síntesis de ApoA-I y ApoA-II, aumentando el colesterol HDL.
      </p>

      <h2 className="fxh-subtitle">💊 Ejemplos</h2>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fenofibrato</td>
              <td>Mayor uso actual. Buena tolerancia. Puede combinarse con estatinas con precaución.</td>
            </tr>
            <tr>
              <td>Gemfibrozilo</td>
              <td>Más riesgo de interacciones con estatinas. Uso limitado en la actualidad.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxh-subtitle">💡 Indicaciones Terapéuticas</h2>
      <ul className="fxh-list">
        <li>Hipertrigliceridemia severa (&gt; 500 mg/dL) para prevenir pancreatitis.</li>
        <li>Dislipidemia mixta (colesterol elevado + triglicéridos elevados).</li>
        <li>Pacientes con bajo colesterol HDL y triglicéridos altos.</li>
        <li>Alternativa o complemento en casos de intolerancia a estatinas.</li>
      </ul>

      <h2 className="fxh-subtitle">⚠️ Efectos Adversos Comunes</h2>
      <ul className="fxh-list">
        <li>Dolor muscular (especialmente al combinarlos con estatinas).</li>
        <li>Molestias gastrointestinales (náuseas, dolor abdominal).</li>
        <li>Cálculos biliares (por aumento de excreción de colesterol biliar).</li>
        <li>Aumento leve de transaminasas hepáticas.</li>
      </ul>

      <h2 className="fxh-subtitle">🧠 Consideraciones Clínicas</h2>
      <ul className="fxh-list">
        <li>Evitar gemfibrozilo en combinación con estatinas por mayor riesgo de rabdomiolisis.</li>
        <li>Revisar función hepática y renal antes y durante el tratamiento.</li>
        <li>No usar en enfermedad hepática activa o colelitiasis.</li>
        <li>Evaluar beneficios en pacientes con dislipidemia aterogénica (diabéticos o síndrome metabólico).</li>
      </ul>

      <h2 className="fxh-subtitle">📚 Conclusión</h2>
      <p className="fxh-text">
        Los <strong>Fibratos</strong> son fármacos útiles en el manejo de hipertrigliceridemias y en la prevención de complicaciones como la pancreatitis. 
        Aunque su impacto en la reducción de eventos cardiovasculares es menor que el de las estatinas, tienen un rol relevante en situaciones específicas, 
        especialmente en dislipidemias mixtas o en pacientes con bajo HDL.
      </p>

    </div>
  );
}

export default Fibratos;
