import React, { useEffect } from 'react';
import './DiureticosAsa.css';

function DiureticosAsa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <p className="fxh-title">
        Diuréticos de Asa
      </p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Diuréticos de Asa</strong> son fármacos potentes que actúan en la porción ascendente del asa de Henle en la nefrona,
        inhibiendo el cotransporte de sodio-potasio-cloro (Na⁺/K⁺/2Cl⁻). Son usados principalmente en el tratamiento de 
        <strong> Edema</strong>, <strong> Insuficiencia Cardíaca</strong> y 
        <strong> Hipertensión Arterial resistente</strong>.
      </p>

      <p className="fxh-subtitle">🔬 Mecanismo de Acción</p>
      <p className="fxh-text">
        Inhiben el transporte de Na⁺/K⁺/2Cl⁻ en la rama ascendente gruesa del asa de Henle, provocando pérdida significativa 
        de sodio, cloro y agua, además de potasio, calcio y magnesio. Esto produce un potente efecto diurético.
      </p>

      <p className="fxh-subtitle">💊 Principales Fármacos</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis Típica</th>
              <th>Vía</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Furosemida</td>
              <td>20–80 mg/día</td>
              <td>Oral / IV</td>
            </tr>
            <tr>
              <td>Bumetanida</td>
              <td>0.5–2 mg/día</td>
              <td>Oral / IV</td>
            </tr>
            <tr>
              <td>Torasemida</td>
              <td>5–20 mg/día</td>
              <td>Oral</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="fxh-list">
        <li>Edema de origen cardíaco, renal o hepático.</li>
        <li>Insuficiencia cardíaca congestiva para aliviar congestión.</li>
        <li>Hipertensión arterial resistente.</li>
        <li>Hipercalcemia (aumenta excreción de calcio).</li>
        <li>Insuficiencia renal aguda en contextos seleccionados.</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="fxh-list">
        <li>Hipopotasemia, hiponatremia.</li>
        <li>Deshidratación e hipotensión.</li>
        <li>Hiperuricemia y riesgo de gota.</li>
        <li>Ototoxicidad (altas dosis o administración IV rápida).</li>
        <li>Hipomagnesemia, hipocalcemia.</li>
      </ul>

      <p className="fxh-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="fxh-list">
        <li>Monitorizar electrolitos y función renal.</li>
        <li>Puede combinarse con tiazidas en resistencia diurética.</li>
        <li>Útil vía IV en edema pulmonar o ICC descompensada.</li>
        <li>Ajustar dosis en insuficiencia renal grave.</li>
      </ul>

      <p className="fxh-subtitle">📚 Conclusión</p>
      <p className="fxh-text">
        Los <strong>Diuréticos de Asa</strong> son fundamentales en el manejo de la sobrecarga de volumen,
        especialmente en insuficiencia cardíaca o enfermedad renal. Su uso requiere vigilancia por el riesgo
        de desbalances electrolíticos y ototoxicidad.
      </p>

    </div>
  );
}

export default DiureticosAsa;
