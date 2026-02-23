import React, { useEffect } from 'react';
import './Procineticos.css';

function Procineticos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pr-detail">
      <p className="pr-title">Procinéticos</p>

      <p className="pr-subtitle">📌 Introducción</p>
      <p className="pr-text">
        Los <strong>Procinéticos</strong> son medicamentos que estimulan la motilidad del tracto gastrointestinal sin afectar directamente la secreción gástrica. Se utilizan para tratar trastornos funcionales como el vaciamiento gástrico lento, el reflujo gastroesofágico y la distensión abdominal.
      </p>

      <p className="pr-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="pr-list">
        <li>Estimulan los receptores serotoninérgicos (5-HT4) o dopaminérgicos (bloqueo D2), facilitando la liberación de acetilcolina y promoviendo la motilidad gástrica y del intestino delgado.</li>
        <li>Aumentan el tono del esfínter esofágico inferior y mejoran el vaciamiento gástrico.</li>
      </ul>

      <p className="pr-subtitle">📋 Indicaciones Principales</p>
      <ul className="pr-list">
        <li>Dispepsia funcional</li>
        <li>Gastroparesis (diabética o idiopática)</li>
        <li>Reflujo gastroesofágico</li>
        <li>Náuseas y vómitos asociados a retraso del vaciamiento gástrico</li>
        <li>Distensión abdominal por hipomotilidad</li>
      </ul>

      <p className="pr-subtitle">💊 Ejemplos Comunes</p>
      <div className="pr-table-wrapper">
        <table className="pr-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Mecanismo</th>
              <th>Dosis habitual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Metoclopramida</td>
              <td>Antagonista D2, agonista 5-HT4</td>
              <td>10 mg cada 8 h</td>
            </tr>
            <tr>
              <td>Domperidona</td>
              <td>Antagonista D2 periférico</td>
              <td>10-20 mg cada 8 h</td>
            </tr>
            <tr>
              <td>Cisaprida</td>
              <td>Agonista 5-HT4</td>
              <td>5-10 mg cada 8 h (uso restringido)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="pr-subtitle">⚠️ Efectos Adversos</p>
      <ul className="pr-list">
        <li>Somnolencia, fatiga, diarrea</li>
        <li>Reacciones extrapiramidales (metoclopramida)</li>
        <li>Galactorrea, ginecomastia (por aumento de prolactina)</li>
        <li>Prolongación del QT y arritmias ventriculares (cisaprida)</li>
      </ul>

      <p className="pr-subtitle">🔄 Contraindicaciones</p>
      <ul className="pr-list">
        <li>Obstrucción intestinal mecánica</li>
        <li>Hemorragia gastrointestinal</li>
        <li>Parkinson (precaución con metoclopramida)</li>
        <li>Prolongación del QT o uso concomitante con fármacos que prolongan el QT</li>
      </ul>

      <p className="pr-subtitle">📉 Interacciones Relevantes</p>
      <ul className="pr-list">
        <li>Potencian efectos sedantes de otros depresores del SNC</li>
        <li>Metoclopramida puede disminuir absorción de medicamentos con liberación prolongada</li>
        <li>Riesgo de arritmias con cisaprida + macrólidos o antifúngicos</li>
      </ul>

      <p className="pr-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="pr-list">
        <li>Usar a corto plazo para evitar efectos adversos extrapiramidales</li>
        <li>Evaluar riesgo de interacciones cardíacas antes de usar cisaprida</li>
        <li>Preferir domperidona cuando se desean menores efectos a nivel central</li>
        <li>Administrar antes de las comidas</li>
      </ul>
    </div>
  );
}

export default Procineticos;
