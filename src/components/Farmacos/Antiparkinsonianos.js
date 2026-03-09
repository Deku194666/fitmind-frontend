import React, { useEffect } from 'react';
import './Antiparkinsonianos.css';

function Antiparkinsonianos() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail90">

      <p className="fxh-title">Fármacos Antiparkinsonianos</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Fármacos Antiparkinsonianos</strong> se utilizan en el tratamiento del 
        <strong> Parkinson</strong> y otros síndromes parkinsonianos. 
        Su objetivo principal es restaurar el equilibrio dopaminérgico en los ganglios basales,
        mejorando síntomas motores como bradicinesia, rigidez y temblor.
      </p>

      <p className="fxh-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="fxh-list">
        <li>Aumento de dopamina en el SNC (levodopa, agonistas dopaminérgicos).</li>
        <li>Inhibición del metabolismo dopaminérgico (MAO-B y COMT).</li>
        <li>Bloqueo de receptores colinérgicos (anticolinérgicos).</li>
        <li>Modulación glutamatérgica (amantadina).</li>
      </ul>

      <p className="fxh-subtitle">📋 Indicaciones Principales</p>
      <ul className="fxh-list">
        <li>Enfermedad de Parkinson idiopática</li>
        <li>Parkinsonismo secundario (fármacos, traumatismos, etc.)</li>
        <li>Síntomas extrapiramidales inducidos por antipsicóticos</li>
      </ul>

      <p className="fxh-subtitle">💊 Ejemplos Comunes</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Grupo</th>
              <th>Uso común</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Levodopa + Carbidopa</td>
              <td>Precursor dopaminérgico + inhibidor periférico</td>
              <td>Primera línea para síntomas motores</td>
            </tr>
            <tr>
              <td>Pramipexol / Ropinirol</td>
              <td>Agonistas dopaminérgicos</td>
              <td>Alternativa o complemento a levodopa</td>
            </tr>
            <tr>
              <td>Selegilina / Rasagilina</td>
              <td>Inhibidores MAO-B</td>
              <td>Aumentan vida media de la dopamina</td>
            </tr>
            <tr>
              <td>Entacapona</td>
              <td>Inhibidor de la COMT</td>
              <td>Prolonga efecto de levodopa</td>
            </tr>
            <tr>
              <td>Trihexifenidilo</td>
              <td>Anticolinérgico</td>
              <td>Control del temblor en etapas iniciales</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">⚠️ Efectos Adversos</p>
      <ul className="fxh-list">
        <li>Discinesias por levodopa</li>
        <li>Alucinaciones y somnolencia (agonistas dopaminérgicos)</li>
        <li>Hipotensión ortostática</li>
        <li>Confusión o deterioro cognitivo (anticolinérgicos)</li>
        <li>Insomnio, náuseas, ansiedad</li>
      </ul>

      <p className="fxh-subtitle">🔄 Contraindicaciones</p>
      <ul className="fxh-list">
        <li>Psicosis activa o demencia</li>
        <li>Glaucoma de ángulo cerrado (anticolinérgicos)</li>
        <li>Enfermedad hepática grave (COMT)</li>
      </ul>

      <p className="fxh-subtitle">📉 Interacciones Relevantes</p>
      <ul className="fxh-list">
        <li>Levodopa + proteínas: disminuye absorción</li>
        <li>MAO-B + ISRS/IRSN: riesgo serotoninérgico</li>
        <li>Agonistas dopaminérgicos + sedantes: somnolencia excesiva</li>
      </ul>

      <p className="fxh-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="fxh-list">
        <li>Usar la dosis mínima eficaz</li>
        <li>Combinar fármacos para reducir fluctuaciones</li>
        <li>Monitorear discinesias y conducta</li>
        <li>Educar paciente y cuidadores sobre adherencia</li>
      </ul>

    </div>
  );
}

export default Antiparkinsonianos;
