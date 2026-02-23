import React, { useEffect } from 'react';
import NavBarAnticoagulantes from './NavBarAnticoagulantes';
import './AntiCoagulantes.css';

function AntiCoagulantes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <NavBarAnticoagulantes />

      <p className="fxh-title">Fármacos Anticoagulantes</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Anticoagulantes</strong> son fármacos que interfieren con la coagulación sanguínea,
        previniendo la formación o extensión de trombos. Son fundamentales en el tratamiento y prevención
        de enfermedades tromboembólicas venosas y arteriales.
      </p>

      <p className="fxh-subtitle">🔬 Clasificación de Anticoagulantes</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Ejemplos</th>
              <th>Mecanismo de acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Antagonistas de la vitamina K</td>
              <td>Warfarina, Acenocumarol</td>
              <td>Inhiben la síntesis de factores II, VII, IX y X dependientes de vitamina K</td>
            </tr>
            <tr>
              <td>Heparinas</td>
              <td>Heparina no fraccionada (HNF), Enoxaparina</td>
              <td>Potencian la acción de la antitrombina III</td>
            </tr>
            <tr>
              <td>Anticoagulantes orales directos (DOACs)</td>
              <td>Rivaroxabán, Apixabán, Dabigatrán</td>
              <td>Inhiben directamente el factor Xa o la trombina</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="fxh-list">
        <li>Prevención y tratamiento de Trombosis Venosa Profunda (TVP) y Embolia Pulmonar (EP).</li>
        <li>Prevención de accidente cerebrovascular en fibrilación auricular.</li>
        <li>Tratamiento y prevención secundaria del infarto agudo de miocardio.</li>
        <li>Anticoagulación en prótesis valvulares mecánicas (warfarina).</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="fxh-list">
        <li><strong>Hemorragia:</strong> principal complicación de todos los anticoagulantes.</li>
        <li><strong>Warfarina:</strong> requiere control de INR.</li>
        <li><strong>Heparina:</strong> trombocitopenia inducida por heparina (TIH).</li>
        <li><strong>DOACs:</strong> menor riesgo de sangrado intracraneal, pero posible sangrado gastrointestinal.</li>
      </ul>

      <p className="fxh-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="fxh-list">
        <li>Monitorizar INR regularmente en pacientes con warfarina.</li>
        <li>Ajustar dosis de DOACs en insuficiencia renal.</li>
        <li>Evitar uso concomitante con AINEs por riesgo de sangrado.</li>
        <li>Disponibilidad de antídotos específicos (vitamina K, idarucizumab, andexanet alfa).</li>
      </ul>

      <p className="fxh-subtitle">📦 Combinaciones Frecuentes</p>
      <ul className="fxh-list">
        <li>Aspirina + Anticoagulante (según riesgo trombótico).</li>
        <li>Heparina + Warfarina hasta alcanzar INR terapéutico.</li>
        <li>Evitar triple terapia prolongada.</li>
      </ul>

      <p className="fxh-subtitle">📚 Conclusión</p>
      <p className="fxh-text">
        Los <strong>Anticoagulantes</strong> son herramientas vitales en la prevención y tratamiento de eventos tromboembólicos.
        Su manejo requiere evaluación cuidadosa del riesgo-beneficio, monitorización clínica y educación del paciente.
      </p>

    </div>
  );
}

export default AntiCoagulantes;
