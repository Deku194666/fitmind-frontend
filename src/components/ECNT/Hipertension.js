import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hipertension.css';

function Hipertension() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hipertension-container">

      <p className="title-main">Hipertensión Arterial</p>

      <p className="title-section">📌 Introducción</p>
      <p className="text-body">
        La <strong>Hipertensión Arterial (HTA)</strong> es una enfermedad crónica caracterizada por el aumento
        sostenido de la presión arterial por encima de los valores normales.
        Es uno de los principales factores de riesgo para enfermedades cardiovasculares,
        accidentes cerebrovasculares e insuficiencia renal.
        Se considera hipertensión cuando los valores son iguales o superiores a <strong>140/90 mmHg</strong>.
      </p>

      <p className="title-section">🧬 Fisiología</p>
      <ul className="text-body">
        <li>Gasto cardíaco 🫀.</li>
        <li>Resistencia vascular periférica.</li>
        <li>Sistema nervioso simpático.</li>
        <li>Sistema renina-angiotensina-aldosterona (RAAS).</li>
        <li>Mecanismos renales de control del volumen.</li>
      </ul>

      <p className="title-section">📌 Tipos de Hipertensión</p>

      <p className="text-body"><strong>Hipertensión primaria (esencial):</strong></p>
      <ul className="text-body">
        <li>90–95% de los casos.</li>
        <li>Sin causa identificable.</li>
        <li>Relacionada con genética, edad, obesidad, sedentarismo y dieta alta en sal.</li>
      </ul>

      <p className="text-body"><strong>Hipertensión secundaria:</strong></p>
      <ul className="text-body">
        <li>5–10% de los casos.</li>
        <li>Asociada a enfermedad renal, endocrina o fármacos.</li>
      </ul>

      <p className="title-section">🚨 Factores de Riesgo</p>
      <ul className="text-body">
        <li>Edad &gt; 40 años.</li>
        <li><Link to="/ecnt/obesidad">Obesidad</Link> y sedentarismo.</li>
        <li>Dieta rica en sal y grasas.</li>
        <li>Alcohol y tabaco.</li>
        <li>Antecedentes familiares.</li>
        <li>Estrés crónico.</li>
      </ul>

      <p className="title-section">🔍 Síntomas</p>
      <p className="text-body">
        En la mayoría de los casos es <strong>asintomática</strong>. En fases avanzadas puede causar:
      </p>
      <ul className="text-body">
        <li>Cefalea.</li>
        <li>Mareos y visión borrosa.</li>
        <li>Acúfenos.</li>
        <li>Epistaxis.</li>
        <li>Fatiga.</li>
      </ul>

      <p className="title-section">🩺 Diagnóstico</p>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Clasificación</th>
            <th>Presión Sistólica</th>
            <th>Presión Diastólica</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Normal</td>
            <td>&lt; 120</td>
            <td>&lt; 80</td>
          </tr>
          <tr>
            <td>Elevada</td>
            <td>120–129</td>
            <td>&lt; 80</td>
          </tr>
          <tr>
            <td>HTA Grado 1</td>
            <td>130–139</td>
            <td>80–89</td>
          </tr>
          <tr>
            <td>HTA Grado 2</td>
            <td>≥ 140</td>
            <td>≥ 90</td>
          </tr>
          <tr>
            <td>Crisis hipertensiva</td>
            <td>≥ 180</td>
            <td>≥ 120</td>
          </tr>
        </tbody>
      </table>

      <p className="title-section">💊 Tratamiento Médico</p>
      <ul className="text-body">
        <li>Diuréticos tiazídicos.</li>
        <li>IECA / ARA II.</li>
        <li>Calcioantagonistas.</li>
        <li>Betabloqueadores.</li>
      </ul>

      <p className="title-section">🧘 Tratamiento No Farmacológico</p>
      <ul className="text-body">
        <li>Dieta DASH.</li>
        <li>Actividad física regular.</li>
        <li>Pérdida de peso.</li>
        <li>Reducción de alcohol y tabaco.</li>
        <li>Manejo del estrés.</li>
      </ul>

      <p className="title-section">🧨 Complicaciones</p>
      <ul className="text-body">
        <li><Link to="/ecnt/iam">Infarto Agudo de Miocardio</Link>.</li>
        <li><Link to="/ecnt/acv">Accidente Cerebrovascular</Link>.</li>
        <li><Link to="/ecnt/erc">Enfermedad Renal Crónica</Link>.</li>
        <li>Retinopatía hipertensiva.</li>
        <li>Insuficiencia cardíaca.</li>
      </ul>

      <p className="title-section">📌 Conclusión</p>
      <p className="text-body">
        La <strong>Hipertensión Arterial</strong> es una enfermedad silenciosa pero potencialmente grave.
        Su control adecuado reduce significativamente el riesgo de complicaciones cardiovasculares y renales.
      </p>

    </div>
  );
}

export default Hipertension;
