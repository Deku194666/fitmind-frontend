


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AcidosisMetabolica.css';

function AcidosisMetabolica() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail317">

      <p className="fxh-title">Acidosis Metabólica</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>acidosis metabólica</strong> es un trastorno ácido-base caracterizado por
        una disminución del pH sanguíneo debido a una reducción del bicarbonato o un aumento
        de ácidos en el organismo.
      </p>

      <p className="fxh-subtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li> - Disminución del bicarbonato (HCO₃⁻).</li>
        <li> - Acumulación de ácidos metabólicos.</li>
        <li> - Alteración del equilibrio ácido-base.</li>
        <li> - Compensación respiratoria (hiperventilación).</li>
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
              <td>Con anión gap elevado</td>
              <td>Acumulación de ácidos (láctico, cetonas)</td>
            </tr>
            <tr>
              <td>Sin anión gap (hiperclorémica)</td>
              <td>Pérdida de bicarbonato</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Causas ⚠️</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/sintomas/cetoacidosisdiabetica">Cetoacidosis diabética</Link>.</li>
        <li> - Sepsis.</li>
        <li> - Insuficiencia renal.</li>
        <li> - Diarrea severa.</li>
        <li> - Intoxicaciones (metanol, etilenglicol).</li>
      </ul>

      <p className="fxh-subtitle">Síntomas 🔍</p>
      <ul className="fxh-list">
        <li> - Respiración rápida (Kussmaul).</li>
        <li> - <Link to="/ecnt/sintomas/fatiga">Fatiga</Link>.</li>  
        <li> - Confusión.</li>
        <li> - Náuseas y vómitos.</li>
      </ul>

      <p className="fxh-subtitle">🚨 Signos de alarma</p>
      <ul className="fxh-list">
        <li> - Alteración del estado de conciencia.</li>
        <li> - Hipotensión.</li>
        <li> - Dificultad respiratoria severa.</li>
        <li> - Shock.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🧪</p>
      <ul className="fxh-list">
        <li> - Gasometría arterial.</li>
        <li> - Electrolitos séricos.</li>
        <li> - Cálculo del anión gap.</li>
        <li> - Función renal.</li>
      </ul>

      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-flex">

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Medidas generales</p>
          <ul className="fxh-list">
            <li> - Corregir la causa subyacente.</li>
            <li> - Hidratación adecuada.</li>
            <li> - Monitoreo continuo.</li>
          </ul>
        </div>

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Tratamiento médico</p>
          <ul className="fxh-list">
            <li> - Bicarbonato en casos severos.</li>
            <li> - Insulina (cetoacidosis).</li>
            <li> - Antibióticos (si infección).</li>
            <li> - Diálisis en casos graves.</li>
          </ul>
        </div>

      </div>

      <p className="fxh-subtitle">Complicaciones</p>
      <ul className="fxh-list">
        <li> - Shock.</li>
        <li> - <Link to="/ecnt/arritmias">Arritmias</Link>.</li>  
        <li> - Falla multiorgánica.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        La <strong>  Acidosis Metabólica  </strong>  es una condición potencialmente grave que requiere
        diagnóstico oportuno y tratamiento dirigido a la causa para evitar
        complicaciones severas.
      </p>

    </div>
  );
}

export default AcidosisMetabolica;