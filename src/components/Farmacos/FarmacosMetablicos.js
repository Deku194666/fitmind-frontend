

import React, { useEffect } from 'react';
import './FarmacosMetabolicos.css';

function FarmacosMetabolicos() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      

      <p className="fxh-title">Fármacos Metabólicos</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Fármacos Metabólicos</strong> son esenciales en el tratamiento de trastornos
        del metabolismo como diabetes mellitus, dislipidemias, obesidad, síndrome metabólico
        y alteraciones tiroideas. Actúan regulando procesos bioquímicos fundamentales
        relacionados con la glucosa, lípidos, proteínas y hormonas.
      </p>

      <p className="fxh-subtitle">📜 Historia de los Fármacos Metabólicos</p>
      <ul className="fxh-list">
        <li><strong>1921:</strong> Descubrimiento de la insulina (Banting y Best).</li>
        <li><strong>1950s:</strong> Sulfonilureas (primeros antidiabéticos orales).</li>
        <li><strong>1977:</strong> Metformina aprobada ampliamente.</li>
        <li><strong>1987:</strong> Estatinas (lovastatina).</li>
        <li><strong>2005:</strong> Inhibidores DPP-4.</li>
        <li><strong>2013:</strong> Inhibidores SGLT2.</li>
        <li><strong>Actualidad:</strong> Agonistas GLP-1 (control glucémico y pérdida de peso).</li>
      </ul>

      <p className="fxh-subtitle">🔍 Clasificación por Patologías</p>

      <p className="fxh-subtitle" style={{ fontSize: "2.6rem" }}>📌 1. Antidiabéticos</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Ejemplos</th>
              <th>Mecanismo</th>
              <th>Efectos Adversos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Biguanidas</td>
              <td>Metformina</td>
              <td>Disminuye gluconeogénesis hepática</td>
              <td>GI, acidosis láctica (raro)</td>
            </tr>
            <tr>
              <td>SGLT2</td>
              <td>Empagliflozina</td>
              <td>Aumenta excreción renal de glucosa</td>
              <td>Infecciones urinarias</td>
            </tr>
            <tr>
              <td>GLP-1</td>
              <td>Semaglutida</td>
              <td>Aumenta insulina dependiente de glucosa</td>
              <td>Náuseas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle" style={{ fontSize: "2.6rem" }}>📌 2. Hipolipemiantes</p>
      <ul className="fxh-list">
        <li><strong>Estatinas:</strong> Atorvastatina (↓ LDL).</li>
        <li><strong>Fibratos:</strong> Fenofibrato (↓ triglicéridos).</li>
        <li><strong>Inhibidores PCSK9:</strong> Evolocumab (↓ LDL potente).</li>
      </ul>

      <p className="fxh-subtitle" style={{ fontSize: "2.6rem" }}>📌 3. Tratamiento de Obesidad</p>
      <ul className="fxh-list">
        <li><strong>Agonistas GLP-1:</strong> Semaglutida (regulación del apetito).</li>
        <li><strong>Orlistat:</strong> Inhibe absorción de grasas.</li>
      </ul>

      <p className="fxh-subtitle" style={{ fontSize: "2.6rem" }}>📌 4. Trastornos Tiroideos</p>
      <ul className="fxh-list">
        <li><strong>Hipotiroidismo:</strong> Levotiroxina.</li>
        <li><strong>Hipertiroidismo:</strong> Metimazol.</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Efectos Adversos Claves</p>
      <ul className="fxh-list">
        <li><strong>Metformina:</strong> Trastornos gastrointestinales.</li>
        <li><strong>Estatinas:</strong> Mialgias, elevación CPK.</li>
        <li><strong>SGLT2:</strong> Riesgo de infecciones urinarias.</li>
        <li><strong>Levotiroxina:</strong> Riesgo de hipertiroidismo si sobredosificación.</li>
      </ul>

      <p className="fxh-subtitle">✅ Conclusión</p>
      <p className="fxh-text">
        Los <strong>Fármacos Metabólicos</strong> constituyen un pilar fundamental en el manejo
        de enfermedades crónicas de alta prevalencia mundial. Su correcta selección,
        individualización y monitoreo permiten reducir complicaciones cardiovasculares,
        renales y endocrinas, mejorando significativamente la calidad de vida del paciente.
      </p>

    </div>
  );
}

export default FarmacosMetabolicos;