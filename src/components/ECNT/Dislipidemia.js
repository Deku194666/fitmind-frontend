import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dislipidemia.css';

function Dislipidemia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dislipidemia-container">

      <p className="title-main">Dislipidemia</p>

      <p className="title-section">📌 Introducción</p>
      <p className="text-body">
        La <strong>Dislipidemia</strong> es un trastorno del metabolismo de los lípidos caracterizado
        por niveles anormales de colesterol total, LDL, HDL y triglicéridos.
        Es un factor de riesgo clave para enfermedades cardiovasculares como la
        <Link to="/ecnt/ateroesclerosis"> aterosclerosis</Link>, el
        <Link to="/ecnt/iam"> infarto agudo de miocardio</Link> y el
        <Link to="/ecnt/acv"> accidente cerebrovascular</Link>.
        Frecuentemente es asintomática y se detecta en controles de rutina.
      </p>

      <p className="title-section">🧬 Fisiología</p>
      <p className="text-body">
        El colesterol y los triglicéridos se transportan en la sangre unidos a lipoproteínas:
      </p>
      <ul className="text-body">
        <li><strong>LDL:</strong> transporta colesterol hacia los tejidos.</li>
        <li><strong>HDL:</strong> retira colesterol y lo lleva al hígado.</li>
        <li><strong>VLDL y quilomicrones:</strong> transportan triglicéridos.</li>
      </ul>
      <p className="text-body">
        El desequilibrio entre estas lipoproteínas favorece la acumulación de grasa
        en la pared arterial, aumentando el riesgo cardiovascular.
      </p>

      <p className="title-section">📌 Tipos de Dislipidemia</p>

      <p className="text-body"><strong>Dislipidemia primaria (genética):</strong></p>
      <ul className="text-body">
        <li>Origen hereditario.</li>
        <li>Ejemplo: hipercolesterolemia familiar.</li>
      </ul>

      <p className="text-body"><strong>Dislipidemia secundaria:</strong></p>
      <ul className="text-body">
        <li>
          Asociada a <Link to="/ecnt/diabetes">diabetes</Link>, hipotiroidismo,
          <Link to="/ecnt/erc"> enfermedad renal</Link>, hepática,
          <Link to="/ecnt/obesidad"> obesidad</Link> o fármacos.
        </li>
      </ul>

      <p className="text-body"><strong>Según alteración lipídica:</strong></p>
      <ul className="text-body">
        <li>Hipercolesterolemia.</li>
        <li>Hipertrigliceridemia.</li>
        <li>Dislipidemia mixta.</li>
        <li>HDL bajo.</li>
      </ul>

      <p className="title-section">🔍 Síntomas</p>
      <p className="text-body">
        Generalmente es <strong>asintomática</strong> hasta la aparición de complicaciones cardiovasculares.
      </p>

      <p className="title-section">🩺 Diagnóstico</p>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Lípido</th>
            <th>Valores normales</th>
            <th>Alterado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Colesterol total</td>
            <td>&lt; 200 mg/dL</td>
            <td>≥ 240 mg/dL</td>
          </tr>
          <tr>
            <td>LDL</td>
            <td>&lt; 100 mg/dL</td>
            <td>≥ 160 mg/dL</td>
          </tr>
          <tr>
            <td>HDL</td>
            <td>&gt; 40–50 mg/dL</td>
            <td>&lt; 40 mg/dL</td>
          </tr>
          <tr>
            <td>Triglicéridos</td>
            <td>&lt; 150 mg/dL</td>
            <td>≥ 200 mg/dL</td>
          </tr>
        </tbody>
      </table>

      <p className="title-section">💊 Tratamiento Médico</p>
      <ul className="text-body">
        <li>Estatinas (atorvastatina, rosuvastatina).</li>
        <li>Fibratos.</li>
        <li>Ezetimiba.</li>
        <li>Inhibidores PCSK9.</li>
        <li>Ácidos grasos omega-3.</li>
      </ul>

      <p className="title-section">🧘 Tratamiento No Farmacológico</p>
      <ul className="text-body">
        <li>Dieta baja en grasas saturadas y trans.</li>
        <li>Consumo de fibra, frutas y verduras.</li>
        <li>Actividad física regular.</li>
        <li>Pérdida de peso.</li>
        <li>Abandono del tabaco y alcohol.</li>
      </ul>

      <p className="title-section">🧨 Complicaciones</p>
      <ul className="text-body">
        <li><Link to="/ecnt/ateroesclerosis">Aterosclerosis</Link>.</li>
        <li><Link to="/ecnt/iam">Infarto agudo de miocardio</Link>.</li>
        <li><Link to="/ecnt/acv">Accidente cerebrovascular</Link>.</li>
        <li>Pancreatitis.</li>
        <li>Esteatosis hepática.</li>
      </ul>

      <p className="title-section">📌 Conclusión</p>
      <p className="text-body">
        La <strong>Dislipidemia</strong> es un trastorno frecuente y silencioso.
        Su detección precoz y tratamiento adecuado reducen de forma significativa
        el riesgo de eventos cardiovasculares mayores.
      </p>

    </div>
  );
}

export default Dislipidemia;
