import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AntihistH1PrimeraGen.css';

function AntihistaminicosH1PrimeraGen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h1gen-detail">
      <p className="h1gen-title">Antihistamínicos H1 (1ª Generación)</p>

      <p className="h1gen-subtitle">📌 Introducción</p>
      <p className="h1gen-text">
        Los <strong>Antihistamínicos H1 de Primera Generación</strong> son fármacos que bloquean los receptores H1 de histamina. Se utilizan en alergias, náuseas, vértigo y como sedantes. A diferencia de los de segunda generación, atraviesan la barrera hematoencefálica, provocando efectos sedantes marcados.
      </p>

      <p className="h1gen-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="h1gen-list">
        <li>Antagonismo competitivo reversible de los receptores H1 periféricos y centrales.</li>
        <li>Disminuyen la permeabilidad capilar, prurito y la respuesta alérgica.</li>
        <li>Muchos poseen efectos anticolinérgicos, sedantes y antieméticos.</li>
      </ul>

      <p className="h1gen-subtitle">📋 Indicaciones Principales</p>
      <ul className="h1gen-list">
        <li>Rinitis alérgica y conjuntivitis</li>
        <li>Urticaria</li>
        <li>Prurito</li>
        <li>Cinetosis y vértigo</li>
        <li>Insomnio ocasional</li>
        <li>Reacciones anafilácticas (como parte del tratamiento coadyuvante)</li>
      </ul>

      <p className="h1gen-subtitle">💊 Ejemplos Comunes</p>
      <div className="h1gen-table-wrapper">
        <table className="h1gen-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Efecto sedante</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Difenhidramina</td>
              <td>25-50 mg cada 6-8 h</td>
              <td>Alto</td>
            </tr>
            <tr>
              <td><Link to="/farmacos/farmacos2/clorfenamina">Clorfenamina</Link></td>
              <td>2-4 mg cada 6 h</td>
              <td>Moderado</td>
            </tr>
            <tr>
              <td>Hidroxicina</td>
              <td>25-100 mg/día</td>
              <td>Alto</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="h1gen-subtitle">⚠️ Efectos Adversos</p>
      <ul className="h1gen-list">
        <li>Somnolencia y sedación</li>
        <li>Sequedad de boca, visión borrosa</li>
        <li>Retención urinaria</li>
        <li>Confusión (especialmente en ancianos)</li>
        <li>Taquicardia o palpitaciones</li>
      </ul>

      <p className="h1gen-subtitle">🔄 Contraindicaciones</p>
      <ul className="h1gen-list">
        <li>Hipersensibilidad al principio activo</li>
        <li>Glaucoma de ángulo cerrado</li>
        <li>Retención urinaria o hiperplasia prostática</li>
        <li>Uso concomitante con depresores del SNC</li>
      </ul>

      <p className="h1gen-subtitle">📉 Interacciones Relevantes</p>
      <ul className="h1gen-list">
        <li>Con alcohol u otros sedantes: aumenta el efecto depresor del SNC</li>
        <li>Con anticolinérgicos: potenciación de efectos adversos</li>
        <li>Con inhibidores de MAO: riesgo de crisis hipertensiva</li>
      </ul>

      <p className="h1gen-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="h1gen-list">
        <li>No se recomiendan como tratamiento crónico de primera línea para alergias</li>
        <li>Evitar su uso en adultos mayores por riesgo de deterioro cognitivo</li>
        <li>Útiles en cuadros agudos con prurito o reacciones alérgicas intensas</li>
        <li>No conducir ni operar maquinaria pesada bajo su efecto</li>
      </ul>
    </div>
  );
}

export default AntihistaminicosH1PrimeraGen;
