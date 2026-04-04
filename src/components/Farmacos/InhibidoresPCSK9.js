import React, { useEffect } from 'react';
import './InhibidoresPCSK9.css';

function InhibidoresPCSK9() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail79">

      <h1 className="fxh-title">Inhibidores de PCSK9</h1>

      <h2 className="fxh-subtitle">📌 Introducción</h2>
      <p className="fxh-text">
        Los <strong>Inhibidores de la PCSK9</strong> (proproteína convertasa subtilisina/kexina tipo 9) son una nueva clase 
        de fármacos hipolipemiantes que han revolucionado el tratamiento de la hipercolesterolemia, especialmente en pacientes 
        con alto riesgo cardiovascular o hipercolesterolemia familiar. Actúan aumentando la disponibilidad de receptores LDL en el hígado, 
        lo que reduce significativamente el colesterol LDL plasmático.
      </p>

      <h2 className="fxh-subtitle">🔬 Mecanismo de Acción</h2>
      <p className="fxh-text">
        La PCSK9 degrada los receptores LDL hepáticos. Los anticuerpos monoclonales inhibidores de PCSK9 
        (como alirocumab y evolocumab) bloquean esta acción, permitiendo que más receptores LDL estén disponibles 
        para remover colesterol de la circulación. Esto disminuye drásticamente los niveles de <strong>LDL-C</strong>.
      </p>

      <h2 className="fxh-subtitle">💊 Principales Fármacos y Dosis</h2>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis Habitual</th>
              <th>Vía de Administración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alirocumab</td>
              <td>75–150 mg cada 2 semanas</td>
              <td>Subcutánea</td>
            </tr>
            <tr>
              <td>Evolocumab</td>
              <td>140 mg cada 2 semanas o 420 mg mensual</td>
              <td>Subcutánea</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxh-subtitle">💡 Indicaciones Terapéuticas</h2>
      <ul className="fxh-list">
        <li>Hipercolesterolemia familiar heterocigota o homocigota.</li>
        <li>Pacientes con enfermedad cardiovascular aterosclerótica establecida que no alcanzan objetivos de LDL-C con estatinas ± ezetimiba.</li>
        <li>Intolerancia a estatinas (como alternativa eficaz).</li>
        <li>Prevención secundaria en alto riesgo cardiovascular.</li>
      </ul>

      <h2 className="fxh-subtitle">⚠️ Efectos Adversos Comunes</h2>
      <ul className="fxh-list">
        <li>Reacciones en el sitio de inyección (eritema, dolor, prurito).</li>
        <li>Nasofaringitis, síntomas gripales.</li>
        <li>Mialgias o molestias musculares leves.</li>
        <li>Raramente: reacciones alérgicas o efectos neurocognitivos.</li>
      </ul>

      <h2 className="fxh-subtitle">🧠 Consideraciones Clínicas</h2>
      <ul className="fxh-list">
        <li>Son muy eficaces: pueden reducir el LDL-C más del 50% adicional a estatinas.</li>
        <li>Uso subcutáneo autoadministrado cada 2 o 4 semanas.</li>
        <li>Costo elevado, habitualmente reservados para casos específicos o refractarios.</li>
        <li>No afectan significativamente los niveles de HDL o triglicéridos.</li>
      </ul>

      <h2 className="fxh-subtitle">📚 Conclusión</h2>
      <p className="fxh-text">
        Los <strong>Inhibidores de la PCSK9</strong> son una herramienta poderosa en el tratamiento de dislipidemias severas o resistentes. 
        Ofrecen una reducción profunda del LDL-C con buena tolerancia, aunque su uso está limitado por su costo y disponibilidad. 
        Representan el futuro de la terapia personalizada en prevención cardiovascular.
      </p>

    </div>
  );
}

export default InhibidoresPCSK9;
