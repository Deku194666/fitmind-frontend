import React, { useEffect } from 'react';
import NavBarFarmacosIC from './NavBarFarmacosIC';
import './FarmacosIC.css';

function FarmacosIC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail60">

      <NavBarFarmacosIC />

      <p className="fxh-title">
        Fármacos para Insuficiencia Cardíaca
      </p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        El tratamiento farmacológico de la <strong>Insuficiencia Cardíaca (IC)</strong> se basa en mejorar síntomas,
        reducir hospitalizaciones y prolongar la supervivencia. Se emplean distintas clases de medicamentos según
        el tipo de IC, la etapa funcional (NYHA) y las comorbilidades asociadas.
      </p>

      <p className="fxh-subtitle">🔬 Principales Grupos de Fármacos Utilizados</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Ejemplos</th>
              <th>Mecanismo / Rol</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Diuréticos de asa</td>
              <td>Furosemida</td>
              <td>Reducción de congestión y síntomas</td>
            </tr>
            <tr>
              <td>IECA / ARA II</td>
              <td>Enalapril, Losartán</td>
              <td>Disminuyen remodelado cardíaco y mortalidad</td>
            </tr>
            <tr>
              <td>Betabloqueadores</td>
              <td>Carvedilol, Bisoprolol, Metoprolol</td>
              <td>Reducen la frecuencia cardíaca y mortalidad</td>
            </tr>
            <tr>
              <td>Antagonistas MRA</td>
              <td>Espironolactona, Eplerenona</td>
              <td>Disminuyen fibrosis y mejoran sobrevida</td>
            </tr>
            <tr>
              <td>ARNI</td>
              <td>Sacubitrilo / Valsartán</td>
              <td>Alternativa a IECA/ARA II en pacientes seleccionados</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="fxh-list">
        <li>Insuficiencia cardíaca con fracción de eyección reducida.</li>
        <li>Congestión pulmonar o periférica.</li>
        <li>Pacientes sintomáticos pese a tratamiento estándar.</li>
        <li>IC con comorbilidades como hipertensión o enfermedad renal.</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="fxh-list">
        <li><strong>IECA / ARA II:</strong> Hipotensión, hiperkalemia, tos seca.</li>
        <li><strong>Diuréticos:</strong> Hipovolemia y alteraciones electrolíticas.</li>
        <li><strong>Betabloqueadores:</strong> Bradicardia, fatiga.</li>
        <li><strong>MRA:</strong> Hiperkalemia, ginecomastia.</li>
        <li><strong>ARNI:</strong> Hipotensión, angioedema (raro).</li>
      </ul>

      <p className="fxh-subtitle">📚 Conclusión</p>
      <p className="fxh-text">
        El tratamiento farmacológico de la <strong>Insuficiencia Cardíaca</strong> debe ser individualizado.
        La combinación adecuada de fármacos mejora la calidad de vida, reduce hospitalizaciones y mortalidad.
      </p>

    </div>
  );
}

export default FarmacosIC;
