import React, { useEffect } from 'react';
import './Antidiarreicos.css';

function Antidiarreicos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <p className="fxh-title">Antidiarreicos</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Antidiarreicos</strong> son fármacos utilizados para reducir la frecuencia, urgencia o volumen de las deposiciones en casos de diarrea, especialmente cuando esta es sintomática, no infecciosa o crónica.
      </p>

      <p className="fxh-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="fxh-list">
        <li>Disminuyen la motilidad intestinal (opioides sintéticos)</li>
        <li>Absorben toxinas y líquidos (adsorbentes)</li>
        <li>Modifican la flora intestinal (probióticos)</li>
      </ul>

      <p className="fxh-subtitle">📋 Clasificación e Indicaciones</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Clase</th>
              <th>Ejemplos</th>
              <th>Indicaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Antimotilidad (opioides sintéticos)</td>
              <td>Loperamida, Difenoxilato</td>
              <td>Diarrea no infecciosa aguda o crónica</td>
            </tr>
            <tr>
              <td>Adsorbentes</td>
              <td>Caolín, Pectina, Carbón activado</td>
              <td>Diarrea leve de origen no infeccioso</td>
            </tr>
            <tr>
              <td>Antisecretores</td>
              <td>Subsalicilato de bismuto</td>
              <td>Diarrea del viajero, infecciones leves</td>
            </tr>
            <tr>
              <td>Probióticos</td>
              <td>Lactobacillus, Saccharomyces</td>
              <td>Prevención y tratamiento de diarrea asociada a antibióticos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">⚠️ Efectos Adversos</p>
      <ul className="fxh-list">
        <li>Estreñimiento</li>
        <li>Distensión abdominal</li>
        <li>Somnolencia o depresión del SNC (opioides)</li>
        <li>Reacciones alérgicas o intolerancia a probióticos</li>
      </ul>

      <p className="fxh-subtitle">🔄 Contraindicaciones</p>
      <ul className="fxh-list">
        <li>Diarrea infecciosa bacteriana invasiva (Shigella, Salmonella, E. coli enterohemorrágica)</li>
        <li>Colitis pseudomembranosa</li>
        <li>Sangrado rectal o fiebre alta sin diagnóstico</li>
        <li>Niños menores de 2 años (riesgo de íleo paralítico con loperamida)</li>
      </ul>

      <p className="fxh-subtitle">📉 Interacciones Relevantes</p>
      <ul className="fxh-list">
        <li>Loperamida puede potenciar efectos depresores del SNC con otros sedantes</li>
        <li>Subsalicilato de bismuto puede interferir con pruebas de laboratorio (guayaco)</li>
        <li>Adsorbentes pueden reducir absorción de otros fármacos orales</li>
      </ul>

      <p className="fxh-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="fxh-list">
        <li>Evaluar causa de la diarrea antes de iniciar tratamiento farmacológico</li>
        <li>Reponer líquidos y electrolitos como medida primaria</li>
        <li>Evitar el uso de antimotilidad en infecciones bacterianas invasivas</li>
        <li>Uso racional en diarreas funcionales o por síndrome de intestino irritable</li>
      </ul>

    </div>
  );
}

export default Antidiarreicos;
