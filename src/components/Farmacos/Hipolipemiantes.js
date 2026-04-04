import React, { useEffect } from "react";
import NavBarHipolipemiantes from "./NavBarHipolipemiantes";
import "./Hipolipemiantes.css";

function Hipolipemiantes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail59">

      <NavBarHipolipemiantes />

      <h1 className="fxh-title">
        Fármacos Hipolipemiantes
      </h1>

      <h2 className="fxh-subtitle">📌 Introducción</h2>
      <p className="fxh-text">
        Los <strong>Fármacos Hipolipemiantes</strong> son medicamentos utilizados para reducir los niveles de lípidos en sangre,
        especialmente colesterol y triglicéridos. Su objetivo principal es prevenir enfermedades cardiovasculares ateroescleróticas.
      </p>

      <h2 className="fxh-subtitle">🔬 Clasificación de Hipolipemiantes</h2>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Clase</th>
              <th>Ejemplos</th>
              <th>Mecanismo de acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estatinas</td>
              <td>Atorvastatina, Rosuvastatina</td>
              <td>Inhiben la HMG-CoA reductasa (síntesis hepática de colesterol)</td>
            </tr>
            <tr>
              <td>Fibratos</td>
              <td>Fenofibrato, Gemfibrozilo</td>
              <td>Activan PPAR-α, reducen triglicéridos y aumentan HDL</td>
            </tr>
            <tr>
              <td>Ezetimiba</td>
              <td>Ezetimiba</td>
              <td>Inhibe la absorción intestinal de colesterol</td>
            </tr>
            <tr>
              <td>Resinas</td>
              <td>Colestiramina, Colesevelam</td>
              <td>Secuestran ácidos biliares, disminuyendo LDL</td>
            </tr>
            <tr>
              <td>Inhibidores PCSK9</td>
              <td>Alirocumab, Evolocumab</td>
              <td>Aumentan la disponibilidad del receptor LDL hepático</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxh-subtitle">💡 Indicaciones Terapéuticas</h2>
      <ul className="fxh-list">
        <li>Hipercolesterolemia primaria (familiar o adquirida).</li>
        <li>Hipertrigliceridemia.</li>
        <li>Prevención primaria y secundaria de enfermedad cardiovascular.</li>
        <li>Diabetes tipo 2 con dislipidemia mixta.</li>
      </ul>

      <h2 className="fxh-subtitle">⚠️ Efectos Adversos</h2>
      <ul className="fxh-list">
        <li><strong>Estatinas:</strong> Mialgias, elevación de transaminasas, rabdomiólisis (raro).</li>
        <li><strong>Fibratos:</strong> Dolor abdominal, litiasis biliar, aumento de CPK.</li>
        <li><strong>Ezetimiba:</strong> Molestias gastrointestinales leves.</li>
        <li><strong>Resinas:</strong> Estreñimiento, distensión abdominal.</li>
        <li><strong>PCSK9:</strong> Reacciones en sitio de inyección.</li>
      </ul>

      <h2 className="fxh-subtitle">🧠 Consideraciones Clínicas</h2>
      <ul className="fxh-list">
        <li>Las estatinas son la base del tratamiento.</li>
        <li>Fibratos para triglicéridos muy elevados.</li>
        <li>PCSK9 en pacientes de alto riesgo no controlado.</li>
        <li>Monitorear enzimas hepáticas y CPK.</li>
      </ul>

      <h2 className="fxh-subtitle">📦 Combinaciones Frecuentes</h2>
      <ul className="fxh-list">
        <li>Estatina + ezetimiba.</li>
        <li>Estatina + inhibidor PCSK9.</li>
        <li>Evitar combinación rutinaria estatina + fibrato sin monitoreo.</li>
      </ul>

      <h2 className="fxh-subtitle">📚 Conclusión</h2>
      <p className="fxh-text">
        Los <strong>Fármacos Hipolipemiantes</strong> son fundamentales en la prevención cardiovascular.
        La selección debe adaptarse al perfil lipídico y riesgo individual, siendo las estatinas el eje terapéutico.
      </p>

    </div>
  );
}

export default Hipolipemiantes;
