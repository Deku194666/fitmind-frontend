import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FarmacosNeuromusculares.css';

function FarmacosNeuromusculares() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail94">

      <p className="fxh-title">
        Fármacos para Enfermedades Neuromusculares
      </p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las <strong>Enfermedades Neuromusculares</strong> comprenden un grupo de trastornos que afectan al nervio periférico,
        la unión neuromuscular o el músculo. Incluyen afecciones como miastenia gravis,
        distrofias musculares, esclerosis lateral amiotrófica (ELA),
        polineuropatías y miopatías inflamatorias.
      </p>

      <p className="fxh-subtitle">🎯 Objetivos del Tratamiento</p>
      <ul className="fxh-list">
        <li>Mejorar la fuerza y la función muscular.</li>
        <li>Reducir la progresión de la enfermedad.</li>
        <li>Minimizar las crisis o exacerbaciones.</li>
        <li>Optimizar la calidad de vida.</li>
      </ul>

      <p className="fxh-subtitle">💊 Fármacos por Patología</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Patología</th>
              <th>Tratamiento Farmacológico</th>
              <th>Mecanismo / Observaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Miastenia gravis</td>
              <td>Piridostigmina, Corticoides, Azatioprina, Rituximab</td>
              <td>Inhibidores de acetilcolinesterasa y moduladores inmunológicos</td>
            </tr>
            <tr>
              <td>Esclerosis Lateral Amiotrófica (ELA)</td>
              <td>Riluzol, Edaravona</td>
              <td>Ralentizan la progresión; neuroprotectores</td>
            </tr>
            <tr>
              <td>Distrofias musculares</td>
              <td>Prednisona, Deflazacort</td>
              <td>Mejoran fuerza en distrofia muscular de Duchenne</td>
            </tr>
            <tr>
              <td>Polineuropatías inflamatorias</td>
              <td>Inmunoglobulina IV, Corticoides, Ciclofosfamida</td>
              <td>Inmunomodulación en Guillain-Barré, CIDP, etc.</td>
            </tr>
            <tr>
              <td>Miopatías inflamatorias</td>
              <td>Corticoides, Metotrexato, Azatioprina</td>
              <td>Supresión inmunológica en dermatomiositis/polimiositis</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">⚠️ Consideraciones Terapéuticas</p>
      <ul className="fxh-list">
        <li>Requieren enfoque multidisciplinario (neuro, rehabilitación, nutrición).</li>
        <li>Evaluar riesgo de inmunosupresión y efectos adversos a largo plazo.</li>
        <li>Monitoreo clínico y funcional periódico es clave.</li>
        <li>Apoyo psicológico y familiar en enfermedades progresivas.</li>
      </ul>

      <p className="fxh-subtitle">📚 Recomendaciones Generales</p>
      <ul className="fxh-list">
        <li>Individualizar el tratamiento según la enfermedad y estado funcional.</li>
        <li>Reforzar adherencia y educación del paciente y cuidadores.</li>
        <li>Complementar con fisioterapia, ortesis o ayudas técnicas cuando sea necesario.</li>
      </ul>

    </div>
  );
}

export default FarmacosNeuromusculares;
