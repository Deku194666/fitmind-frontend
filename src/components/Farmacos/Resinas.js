import React, { useEffect } from 'react';
import './Resinas.css';

function Resinas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <h1 className="fxh-title">Resinas de Intercambio Iónico</h1>

      <h2 className="fxh-subtitle">📌 Introducción</h2>
      <p className="fxh-text">
        Las <strong>Resinas Secuestradoras de Ácidos Biliares</strong> son fármacos hipolipemiantes que actúan en el tracto gastrointestinal,
        uniéndose a los ácidos biliares y evitando su reabsorción. Esto reduce el colesterol LDL, aunque su uso ha disminuido 
        con la aparición de fármacos más eficaces y mejor tolerados como las estatinas.
      </p>

      <h2 className="fxh-subtitle">🔬 Mecanismo de Acción</h2>
      <p className="fxh-text">
        Se unen de forma irreversible a los ácidos biliares en el intestino, impidiendo su reabsorción en el íleon. 
        Esto obliga al hígado a utilizar más colesterol para sintetizar nuevos ácidos biliares, disminuyendo el colesterol plasmático,
        especialmente el <strong>LDL-C</strong>.
      </p>

      <h2 className="fxh-subtitle">💊 Principales Fármacos y Dosis</h2>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis Habitual</th>
              <th>Presentación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Colestiramina</td>
              <td>4–16 g/día en 1–2 dosis</td>
              <td>Polvo para suspensión oral</td>
            </tr>
            <tr>
              <td>Colestipol</td>
              <td>5–30 g/día</td>
              <td>Polvo o tabletas</td>
            </tr>
            <tr>
              <td>Colesevelam</td>
              <td>1.875–3.75 g/día</td>
              <td>Tabletas o suspensión</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxh-subtitle">💡 Indicaciones Terapéuticas</h2>
      <ul className="fxh-list">
        <li>Hipercolesterolemia leve a moderada.</li>
        <li>Alternativa en pacientes intolerantes a estatinas.</li>
        <li>Hipercolesterolemia familiar en combinación con otros hipolipemiantes.</li>
        <li>Colestasis pruriginosa (uso no lipídico).</li>
        <li>Diarrea por ácido biliar (uso off-label).</li>
      </ul>

      <h2 className="fxh-subtitle">⚠️ Efectos Adversos Comunes</h2>
      <ul className="fxh-list">
        <li>Estreñimiento, distensión abdominal, flatulencias.</li>
        <li>Náuseas, sabor desagradable.</li>
        <li>Interferencia en la absorción de vitaminas liposolubles (A, D, E, K).</li>
        <li>Pueden reducir la absorción de otros medicamentos (ej. digoxina, warfarina, estatinas).</li>
      </ul>

      <h2 className="fxh-subtitle">🧠 Consideraciones Clínicas</h2>
      <ul className="fxh-list">
        <li>Deben administrarse separados al menos 1–4 horas de otros medicamentos orales.</li>
        <li>Buena alternativa durante el embarazo, ya que no se absorben sistémicamente.</li>
        <li>Inicio de acción lento (semanas) y respuesta limitada en comparación con estatinas.</li>
        <li>Requieren buena adherencia, lo que puede ser difícil por sus efectos gastrointestinales.</li>
      </ul>

      <h2 className="fxh-subtitle">📚 Conclusión</h2>
      <p className="fxh-text">
        Las <strong>Resinas Secuestradoras de Ácidos Biliares</strong> ofrecen una opción útil en ciertos contextos clínicos, 
        como intolerancia a estatinas o durante el embarazo. Su eficacia es modesta y su tolerancia puede ser un desafío, 
        pero siguen teniendo un rol particular dentro del arsenal terapéutico para el manejo de dislipidemias.
      </p>

    </div>
  );
}

export default Resinas;
