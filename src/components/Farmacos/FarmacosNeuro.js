import React, { useEffect } from 'react';
import NavBarFarmacosNeuro from './NavBarFarmacosNeuro';
import './FarmacosNeuro.css';

function FarmacosNeuro() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <NavBarFarmacosNeuro />

      <p className="fxh-title">Fármacos Neurológicos</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Fármacos Neurológicos</strong> son esenciales para tratar trastornos del Sistema Nervioso Central (SNC)
        y periférico, como epilepsia, enfermedad de Parkinson, migraña, esclerosis múltiple y dolor neuropático.
        Su desarrollo ha transformado el pronóstico de enfermedades antes discapacitantes.
      </p>

      <p className="fxh-subtitle">📜 Historia de los Fármacos Neurológicos</p>
      <ul className="fxh-list">
        <li><strong>Antigüedad:</strong> Uso de belladona (anticolinérgico natural) para temblores.</li>
        <li><strong>1857:</strong> Bromuros (primeros antiepilépticos).</li>
        <li><strong>1900s:</strong> Morfina para dolor neuropático.</li>
        <li><strong>1912:</strong> Fenobarbital (epilepsia).</li>
        <li><strong>1960:</strong> Levodopa (Parkinson).</li>
        <li><strong>1963:</strong> Benzodiacepinas (diazepam).</li>
        <li><strong>Siglo XXI:</strong> Natalizumab (Esclerosis múltiple).</li>
      </ul>

      <p className="fxh-subtitle">🔍 Clasificación por Enfermedades</p>

      <p className="fxh-subtitle" style={{ fontSize: "2.6rem" }}>📌 1. Antiepilépticos</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Generación</th>
              <th>Ejemplos</th>
              <th>Mecanismo</th>
              <th>Efectos Adversos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1ª</td>
              <td>Fenitoína, Carbamazepina</td>
              <td>Bloqueo canales Na+</td>
              <td>Hepatotoxicidad, rash</td>
            </tr>
            <tr>
              <td>2ª</td>
              <td>Lamotrigina, Levetiracetam</td>
              <td>Modulación glutamato/GABA</td>
              <td>Mareos, somnolencia</td>
            </tr>
            <tr>
              <td>3ª</td>
              <td>Lacosamida</td>
              <td>Bloqueo canales Na+ selectivo</td>
              <td>Menos interacciones</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle" style={{ fontSize: "2.6rem" }}>📌 2. Antiparkinsonianos</p>
      <ul className="fxh-list">
        <li><strong>Levodopa/Carbidopa:</strong> Precursor de dopamina (riesgo de discinesias).</li>
        <li><strong>Agonistas dopaminérgicos:</strong> Pramipexol (mejor perfil a largo plazo).</li>
        <li><strong>Inhibidores MAO-B:</strong> Selegilina (neuroprotección teórica).</li>
      </ul>

      <p className="fxh-subtitle" style={{ fontSize: "2.6rem" }}>📌 3. Para Esclerosis Múltiple (EM)</p>
      <ul className="fxh-list">
        <li><strong>Inmunomoduladores:</strong> Interferón beta (reduce brotes).</li>
        <li><strong>Anticuerpos monoclonales:</strong> Ocrelizumab (para EM progresiva).</li>
      </ul>

      <p className="fxh-subtitle" style={{ fontSize: "2.6rem" }}>📌 4. Para Migraña</p>
      <ul className="fxh-list">
        <li><strong>Agudos:</strong> Triptanes (sumatriptán), antagonistas CGRP (erenumab).</li>
        <li><strong>Preventivos:</strong> Topiramato, toxina botulínica (crónica).</li>
      </ul>

      <p className="fxh-subtitle" style={{ fontSize: "2.6rem" }}>📌 5. Para Dolor Neuropático</p>
      <ul className="fxh-list">
        <li><strong>Gabapentinoides:</strong> Gabapentina (efectivo en neuralgias).</li>
        <li><strong>Antidepresivos:</strong> Amitriptilina (dosis bajas).</li>
      </ul>

      <p className="fxh-subtitle" style={{ fontSize: "2.6rem" }}>📌 6. Para Enfermedades Neuromusculares</p>
      <ul className="fxh-list">
        <li><strong>Anticolinesterásicos:</strong> Piridostigmina (miastenia gravis).</li>
        <li><strong>Terapias génicas:</strong> En investigación para atrofia muscular espinal.</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Efectos Adversos Claves</p>
      <ul className="fxh-list">
        <li><strong>Antiepilépticos:</strong> Rash, hepatotoxicidad (monitorear LFTs).</li>
        <li><strong>Levodopa:</strong> Discinesias, fluctuaciones ("on-off").</li>
        <li><strong>Benzodiacepinas:</strong> Dependencia, sedación.</li>
        <li><strong>Inmunosupresores:</strong> Riesgo de infecciones oportunistas.</li>
      </ul>

      <p className="fxh-subtitle">✅ Conclusión</p>
      <p className="fxh-text">
        Los <strong>Fármacos Neurológicos</strong> representan un pilar fundamental en el tratamiento de
        enfermedades que afectan al sistema nervioso. Su evolución ha mejorado la calidad de vida de millones
        de pacientes. Sin embargo, su uso debe ser personalizado, considerando mecanismos de acción,
        efectos adversos y características del paciente. El futuro promete terapias aún más específicas,
        como la modulación génica y la nanomedicina.
      </p>

    </div>
  );
}

export default FarmacosNeuro;
