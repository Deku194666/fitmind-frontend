import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ERC.css';

function ERC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="erc-container">

      <p className="title-main">Enfermedad Renal Crónica (ERC)</p>

      <p className="title-section">📌 Introducción</p>
      <p className="text-body">
        La <strong>Enfermedad Renal Crónica (ERC)</strong> es una condición progresiva caracterizada por
        la pérdida gradual y permanente de la función renal durante más de 3 meses.
        Se asocia a alto riesgo cardiovascular, falla renal terminal y mortalidad.
      </p>

      <p className="title-section">🧬 Fisiopatología</p>
      <p className="text-body">
        Los riñones cumplen funciones esenciales como filtración, regulación hidroelectrolítica
        y producción hormonal. En la ERC, la pérdida progresiva de nefronas genera:
      </p>
      <ul className="text-body">
        <li>Hiperfiltración compensatoria inicial.</li>
        <li>Glomeruloesclerosis progresiva.</li>
        <li>Proteinuria e inflamación crónica.</li>
        <li>Fibrosis renal irreversible.</li>
      </ul>

      <p className="title-section">🧪 Clasificación por estadio (FG)</p>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Estadio</th>
            <th>FG (ml/min/1.73 m²)</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>G1</td>
            <td>≥90</td>
            <td>Normal con daño renal</td>
          </tr>
          <tr>
            <td>G2</td>
            <td>60–89</td>
            <td>Disminución leve</td>
          </tr>
          <tr>
            <td>G3a</td>
            <td>45–59</td>
            <td>Leve a moderada</td>
          </tr>
          <tr>
            <td>G3b</td>
            <td>30–44</td>
            <td>Moderada a severa</td>
          </tr>
          <tr>
            <td>G4</td>
            <td>15–29</td>
            <td>Severamente reducida</td>
          </tr>
          <tr>
            <td>G5</td>
            <td>&lt;15</td>
            <td>Falla renal (diálisis)</td>
          </tr>
        </tbody>
      </table>

      <p className="title-section">⚠️ Causas</p>
      <ul className="text-body">
        <li><Link to="/ecnt/diabetes">Diabetes Mellitus</Link> (principal).</li>
        <li><Link to="/ecnt/hipertension">Hipertensión arterial</Link>.</li>
        <li>Glomerulonefritis crónicas.</li>
        <li>Enfermedades hereditarias (poliquistosis renal).</li>
        <li>Nefrotoxicidad farmacológica prolongada.</li>
      </ul>

      <p className="title-section">🔍 Síntomas</p>
      <ul className="text-body">
        <li>Fatiga y debilidad.</li>
        <li>Náuseas y vómitos.</li>
        <li>Edemas periféricos.</li>
        <li>Anemia.</li>
        <li>Trastornos óseos y electrolíticos.</li>
      </ul>

      <p className="title-section">🧑‍⚕️ Diagnóstico</p>
      <p className="text-body">
        Se basa en creatinina sérica, estimación del filtrado glomerular,
        detección de proteinuria, estudios de imagen y biopsia en casos seleccionados.
      </p>

      <p className="title-section">💊 Tratamiento médico</p>
      <ul className="text-body">
        <li>Control estricto de la presión arterial.</li>
        <li>Manejo adecuado de la diabetes.</li>
        <li>Dieta renal controlada.</li>
        <li>Tratamiento de anemia y alteraciones minerales.</li>
        <li>Evitar nefrotóxicos.</li>
        <li>Diálisis o trasplante en estadio terminal.</li>
      </ul>

      <p className="title-section">🧘 Tratamiento no farmacológico</p>
      <ul className="text-body">
        <li>Dieta renal personalizada.</li>
        <li>Ejercicio moderado.</li>
        <li>Suspensión del tabaco.</li>
        <li>Monitoreo clínico periódico.</li>
      </ul>

      <p className="title-section">🧨 Complicaciones</p>
      <ul className="text-body">
        <li>Anemia.</li>
        <li>Osteodistrofia renal.</li>
        <li>Hiperkalemia.</li>
        <li>Acidosis metabólica.</li>
        <li>
          <Link to="/ecnt/cardiovascularesecnt">Enfermedad cardiovascular</Link>.
        </li>
        <li>Falla renal terminal.</li>
      </ul>

      <p className="title-section">📌 Conclusión</p>
      <p className="text-body">
        La <strong>ERC</strong> es una enfermedad silenciosa y progresiva.
        El diagnóstico precoz, el control estricto de factores de riesgo
        y un manejo integral permiten retrasar su evolución y mejorar la calidad de vida.
      </p>

    </div>
  );
}

export default ERC;
