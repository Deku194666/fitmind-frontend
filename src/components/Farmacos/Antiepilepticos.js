import React, { useEffect } from 'react';
import './Antiepilepticos.css';

function Antiepilepticos() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail89">

      <p className="fxh-title">Fármacos Antiepilépticos</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Antiepilépticos</strong>, también conocidos como anticonvulsivantes,
        se utilizan principalmente para prevenir crisis epilépticas, pero también tienen
        aplicaciones en el tratamiento del dolor neuropático, trastornos psiquiátricos
        y algunas disfunciones musculoesqueléticas relacionadas con hiperexcitabilidad nerviosa.
      </p>

      <p className="fxh-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="fxh-list">
        <li>Inhibición de canales de sodio o calcio en neuronas hiperexcitables.</li>
        <li>Aumento de la actividad GABAérgica (inhibidora) en el sistema nervioso central.</li>
        <li>Disminución de la liberación de neurotransmisores excitatorios como el glutamato.</li>
      </ul>

      <p className="fxh-subtitle">📋 Indicaciones Principales</p>
      <ul className="fxh-list">
        <li>Epilepsia generalizada o focal</li>
        <li>Neuralgia del trigémino</li>
        <li>Dolor neuropático crónico</li>
        <li>Trastorno bipolar resistente</li>
        <li>Prevención de convulsiones postraumáticas o por tumor cerebral</li>
      </ul>

      <p className="fxh-subtitle">💊 Ejemplos Comunes</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Uso común</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Carbamazepina</td>
              <td>400–1200 mg/día</td>
              <td>Epilepsia, neuralgia del trigémino</td>
            </tr>
            <tr>
              <td>Ácido valproico</td>
              <td>500–2000 mg/día</td>
              <td>Epilepsia, trastorno bipolar</td>
            </tr>
            <tr>
              <td>Lamotrigina</td>
              <td>50–400 mg/día</td>
              <td>Epilepsia, bipolaridad</td>
            </tr>
            <tr>
              <td>Levetiracetam</td>
              <td>500–3000 mg/día</td>
              <td>Epilepsia generalizada</td>
            </tr>
            <tr>
              <td>Topiramato</td>
              <td>50–400 mg/día</td>
              <td>Epilepsia, migraña</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">⚠️ Efectos Adversos</p>
      <ul className="fxh-list">
        <li>Somnolencia, vértigo, diplopía</li>
        <li>Aumento de peso (valproato), pérdida de peso (topiramato)</li>
        <li>Hepatotoxicidad (valproato)</li>
        <li>Trastornos cognitivos o del ánimo (levetiracetam, topiramato)</li>
        <li>Erupciones cutáneas graves (lamotrigina)</li>
      </ul>

      <p className="fxh-subtitle">🔄 Contraindicaciones</p>
      <ul className="fxh-list">
        <li>Embarazo (valproato, topiramato)</li>
        <li>Hepatopatía activa (valproato)</li>
        <li>Alergia previa al fármaco</li>
        <li>Trastornos psiquiátricos no controlados (levetiracetam, topiramato)</li>
      </ul>

      <p className="fxh-subtitle">📉 Interacciones Relevantes</p>
      <ul className="fxh-list">
        <li>Carbamazepina induce el metabolismo hepático de múltiples fármacos</li>
        <li>Lamotrigina + valproato: riesgo de toxicidad sin ajuste</li>
        <li>Valproato con anticoagulantes: riesgo de sangrado</li>
      </ul>

      <p className="fxh-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="fxh-list">
        <li>Monitorear niveles plasmáticos (valproato, carbamazepina)</li>
        <li>Iniciar con dosis bajas y ajustar progresivamente</li>
        <li>Evitar suspensión brusca</li>
        <li>Educar al paciente sobre signos de toxicidad</li>
      </ul>

    </div>
  );
}

export default Antiepilepticos;
