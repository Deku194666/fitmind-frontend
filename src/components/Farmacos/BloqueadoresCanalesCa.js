import React, { useEffect } from "react";
import "./BloqueadoresCanalesCa.css";

function BloqueadoresCanalesCa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail65">

      <h1 className="fxh-title">
        Bloqueadores de los Canales de Calcio (Calcioantagonistas)
      </h1>

      <h2 className="fxh-subtitle">📌 Introducción</h2>
      <p className="fxh-text">
        Los <strong>Bloqueadores de los canales de calcio</strong> inhiben la entrada de calcio
        a través de los canales tipo L en músculo liso vascular y corazón.
        Producen <strong>vasodilatación arterial</strong> y, en algunos casos,
        disminución de la contractilidad y frecuencia cardíaca.
        Son ampliamente utilizados en <strong>hipertensión arterial</strong>,
        <strong> angina de pecho</strong> y <strong>arritmias cardíacas</strong>.
      </p>

      <h2 className="fxh-subtitle">🔬 Clasificación</h2>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Ejemplos</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dihidropiridinas</td>
              <td>Amlodipino, Nifedipino, Felodipino</td>
              <td>Potente vasodilatación; menor efecto cardíaco</td>
            </tr>
            <tr>
              <td>No dihidropiridinas</td>
              <td>Verapamilo, Diltiazem</td>
              <td>Efecto vasodilatador y acción sobre nodo SA y AV</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxh-subtitle">💡 Indicaciones Terapéuticas</h2>
      <ul className="fxh-list">
        <li>Hipertensión arterial.</li>
        <li>Angina estable y vasoespástica.</li>
        <li>Taquiarritmias supraventriculares.</li>
        <li>Fenómeno de Raynaud.</li>
        <li>Hipertensión en el embarazo (nifedipino LP).</li>
      </ul>

      <h2 className="fxh-subtitle">⚠️ Efectos Adversos</h2>
      <ul className="fxh-list">
        <li><strong>Dihidropiridinas:</strong> Edema periférico, cefalea, rubor.</li>
        <li><strong>No dihidropiridinas:</strong> Bradicardia, bloqueo AV, estreñimiento.</li>
        <li>Hipotensión en pacientes sensibles.</li>
      </ul>

      <h2 className="fxh-subtitle">🧠 Consideraciones Clínicas</h2>
      <ul className="fxh-list">
        <li>No combinar verapamilo/diltiazem con betabloqueadores.</li>
        <li>Preferidos en hipertensión sistólica aislada.</li>
        <li>Alternativa cuando hay intolerancia a IECA/ARA II.</li>
        <li>El edema periférico no responde a diuréticos.</li>
      </ul>

      <h2 className="fxh-subtitle">📦 Combinaciones Frecuentes</h2>
      <ul className="fxh-list">
        <li>Calcioantagonista + ARA II.</li>
        <li>Calcioantagonista + IECA.</li>
        <li>Calcioantagonista + diurético tiazídico.</li>
      </ul>

      <h2 className="fxh-subtitle">📚 Conclusión</h2>
      <p className="fxh-text">
        Los <strong>Calcioantagonistas</strong> son una herramienta terapéutica
        segura y efectiva en el manejo de hipertensión y enfermedades cardiovasculares.
        Su elección depende del perfil clínico y tolerabilidad del paciente.
      </p>

    </div>
  );
}

export default BloqueadoresCanalesCa;
