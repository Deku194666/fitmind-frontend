import React, { useEffect } from 'react';
import './EM.css';

function EM() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail91">

      <p className="fxh-title">Fármacos para Esclerosis Múltiple (EM)</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        La <strong>Esclerosis Múltiple (EM)</strong> es una enfermedad autoinmune inflamatoria crónica
        del sistema nervioso central que afecta la mielina. El tratamiento farmacológico
        busca reducir la actividad de la enfermedad, prevenir recaídas y enlentecer
        la progresión de la discapacidad.
      </p>

      <p className="fxh-subtitle">🎯 Objetivos del Tratamiento</p>
      <ul className="fxh-list">
        <li>Reducir la frecuencia y gravedad de las recaídas.</li>
        <li>Prevenir nuevas lesiones en resonancia magnética.</li>
        <li>Retrasar la progresión de la discapacidad.</li>
        <li>Controlar síntomas asociados (espasticidad, fatiga, dolor neuropático).</li>
      </ul>

      <p className="fxh-subtitle">💉 Tratamientos Modificadores de la Enfermedad (DMT)</p>
      <p className="fxh-text">
        Los DMT son fármacos inmunomoduladores o inmunosupresores que modifican la evolución de la EM.
      </p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Mecanismo</th>
              <th>Vía</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Interferón beta-1a / 1b</td>
              <td>Modulación de la respuesta inmune</td>
              <td>Subcutánea / Intramuscular</td>
            </tr>
            <tr>
              <td>Acetato de glatiramer</td>
              <td>Induce linfocitos reguladores</td>
              <td>Subcutánea</td>
            </tr>
            <tr>
              <td>Fingolimod / Siponimod</td>
              <td>Moduladores del receptor S1P</td>
              <td>Oral</td>
            </tr>
            <tr>
              <td>Natalizumab</td>
              <td>Anticuerpo monoclonal anti-integrina</td>
              <td>Intravenosa</td>
            </tr>
            <tr>
              <td>Ocrelizumab</td>
              <td>Anticuerpo monoclonal anti-CD20</td>
              <td>Intravenosa</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💊 Manejo de Recaídas</p>
      <p className="fxh-text">
        Las recaídas agudas se tratan con corticosteroides de alta dosis,
        como <strong>metilprednisolona intravenosa</strong> durante 3–5 días.
        En casos graves, puede considerarse plasmaféresis.
      </p>

      <p className="fxh-subtitle">🧠 Tratamiento de Síntomas</p>
      <ul className="fxh-list">
        <li><strong>Espasticidad:</strong> baclofeno, tizanidina.</li>
        <li><strong>Fatiga:</strong> amantadina, modafinilo.</li>
        <li><strong>Dolor neuropático:</strong> gabapentina, pregabalina.</li>
        <li><strong>Disfunción vesical:</strong> anticolinérgicos (oxibutinina).</li>
        <li><strong>Depresión:</strong> ISRS como sertralina o escitalopram.</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Consideraciones Importantes</p>
      <ul className="fxh-list">
        <li>Monitorear infecciones y reacciones inmunológicas.</li>
        <li>Valorar riesgo-beneficio antes de anticuerpos monoclonales.</li>
        <li>Control periódico con RM y pruebas de laboratorio.</li>
        <li>Enfoque multidisciplinario: neurología, rehabilitación y salud mental.</li>
      </ul>

      <p className="fxh-subtitle">📚 Recomendaciones Generales</p>
      <ul className="fxh-list">
        <li>Iniciar tratamiento modificador lo antes posible.</li>
        <li>Individualizar según tipo de EM y comorbilidades.</li>
        <li>Educar sobre adherencia y efectos adversos.</li>
      </ul>

    </div>
  );
}

export default EM;
