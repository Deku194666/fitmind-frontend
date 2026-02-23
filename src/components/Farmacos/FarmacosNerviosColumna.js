import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FarmacosNerviosColumna.css';

function FarmacosNerviosColumna() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <p className="fxh-title">
        Fármacos para Nervios Periféricos y Columna Vertebral
      </p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las afecciones de los nervios periféricos y de la columna vertebral pueden causar dolor neuropático,
        inflamación radicular, parestesias y disfunción motora. El tratamiento farmacológico tiene como
        objetivo reducir el dolor, desinflamar estructuras nerviosas y mejorar la calidad de vida del paciente,
        en complemento con fisioterapia y abordaje postural.
      </p>

      <p className="fxh-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="fxh-list">
        <li>Inhibición de la transmisión nociceptiva a nivel del sistema nervioso central y periférico.</li>
        <li>Modulación de canales iónicos neuronales (sodio, calcio).</li>
        <li>Reducción de la inflamación radicular y neural.</li>
      </ul>

      <p className="fxh-subtitle">📋 Indicaciones Principales</p>
      <ul className="fxh-list">
        <li>Radiculopatías cervicales, torácicas y lumbosacras</li>
        <li>Ciática o lumbociática</li>
        <li>Neuralgia intercostal o postherpética</li>
        <li>Neuropatía periférica (por compresión o metabólica)</li>
        <li>Síndrome del túnel carpiano u otros atrapamientos nerviosos</li>
      </ul>

      <p className="fxh-subtitle">💊 Ejemplos Comunes</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gabapentina</td>
              <td>300–1200 mg/día</td>
              <td>Antineurítico</td>
            </tr>
            <tr>
              <td>Pregabalina</td>
              <td>75–300 mg/día</td>
              <td>Modulador de canales de calcio</td>
            </tr>
            <tr>
              <td>Duloxetina</td>
              <td>30–60 mg/día</td>
              <td>ISRSN (antidepresivo con acción sobre el dolor)</td>
            </tr>
            <tr>
              <td>Tramadol</td>
              <td>50–100 mg cada 6–8 h</td>
              <td>Analgésico opioide débil</td>
            </tr>
            <tr>
              <td>Corticoides orales o infiltrados</td>
              <td>Dosis variable bajo indicación médica</td>
              <td>Antiinflamatorio esteroideo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">⚠️ Efectos Adversos</p>
      <ul className="fxh-list">
        <li>Somnolencia, mareos (gabapentinoides)</li>
        <li>Náuseas, sequedad de boca, aumento de peso (duloxetina)</li>
        <li>Estreñimiento, náuseas (tramadol)</li>
        <li>Retención de líquidos, hiperglucemia (corticoides)</li>
      </ul>

      <p className="fxh-subtitle">🔄 Contraindicaciones</p>
      <ul className="fxh-list">
        <li>Insuficiencia renal (ajustar dosis de gabapentina/pregabalina)</li>
        <li>Trastornos psiquiátricos no controlados (duloxetina)</li>
        <li>Historia de abuso de opioides (tramadol)</li>
        <li>Diabetes mal controlada (corticoides)</li>
      </ul>

      <p className="fxh-subtitle">📉 Interacciones Relevantes</p>
      <ul className="fxh-list">
        <li>Gabapentina/pregabalina con depresores del SNC (riesgo de sedación)</li>
        <li>Duloxetina con otros antidepresivos (riesgo de síndrome serotoninérgico)</li>
        <li>Tramadol con benzodiacepinas (riesgo de depresión respiratoria)</li>
        <li>Corticoides con AINEs (riesgo de úlcera gástrica)</li>
      </ul>

      <p className="fxh-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="fxh-list">
        <li>Indicar fármacos de forma escalonada según intensidad del dolor y perfil del paciente</li>
        <li>Asociar con terapia física, ejercicios neurodinámicos y reeducación postural</li>
        <li>Vigilar efectos secundarios a mediano plazo</li>
        <li>Usar infiltraciones o bloqueos con guía imagenológica si hay compresión radicular severa</li>
      </ul>

    </div>
  );
}

export default FarmacosNerviosColumna;
