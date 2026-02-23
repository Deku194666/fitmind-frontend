import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './IECAs.css';

function IECAs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <p className="fxh-title">
        IECA - Inhibidores de la Enzima Convertidora de Angiotensina
      </p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>IECA</strong> son un grupo de fármacos ampliamente utilizados en el tratamiento de enfermedades cardiovasculares.
        Actúan inhibiendo la enzima convertidora de angiotensina I a angiotensina II, lo cual disminuye la vasoconstricción y la
        secreción de aldosterona, reduciendo la presión arterial y la sobrecarga del corazón.
      </p>

      <p className="fxh-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="fxh-list">
        <li>Inhiben la enzima convertidora de angiotensina (ECA).</li>
        <li>Disminuyen la producción de angiotensina II.</li>
        <li>Reducen la secreción de aldosterona.</li>
        <li>Provocan vasodilatación periférica.</li>
        <li>Mejoran la función endotelial y reducen la hipertrofia ventricular.</li>
      </ul>

      <p className="fxh-subtitle">📋 Indicaciones Principales</p>
      <ul className="fxh-list">
        <li><Link to="/ecnt/hipertension">Hipertensión Arterial</Link></li>
        <li>Insuficiencia cardíaca crónica</li>
        <li><Link to="/ecnt/iam">Infarto Agudo al Miocardio</Link> con disfunción ventricular</li>
        <li>Nefropatía diabética o proteinúrica</li>
        <li>Prevención secundaria cardiovascular</li>
      </ul>

      <p className="fxh-subtitle">💊 Ejemplos Comunes</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Vida media</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/farmacos/farmacos2/enalapril">Enalapril</Link>
              </td>
              <td>5-20 mg cada 12-24 h</td>
              <td>11 horas</td>
            </tr>
            <tr>
              <td>
                <Link to="/farmacos/farmacos2/captopril">Captopril</Link>
              </td>
              <td>25-50 mg cada 8 h</td>
              <td>2 horas</td>
            </tr>
            <tr>
              <td>Ramipril</td>
              <td>2.5-10 mg cada 24 h</td>
              <td>13-17 horas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">⚠️ Efectos Adversos</p>
      <ul className="fxh-list">
        <li><strong>Tos seca</strong>: por acumulación de bradicinina (10-20%)</li>
        <li><strong>Hipotensión</strong>: especialmente en la primera dosis</li>
        <li><strong>Hiperkalemia</strong>: por disminución de aldosterona</li>
        <li><strong>Insuficiencia renal aguda</strong>: en pacientes con estenosis bilateral de arterias renales</li>
        <li><strong>Angioedema</strong>: poco frecuente, pero potencialmente grave</li>
      </ul>

      <p className="fxh-subtitle">🔄 Contraindicaciones</p>
      <ul className="fxh-list">
        <li>Embarazo (riesgo teratogénico)</li>
        <li>Antecedente de angioedema por IECA</li>
        <li>Hiperkalemia severa (mayor a 5.5 mEq/L)</li>
        <li>Estenosis bilateral de arterias renales</li>
      </ul>

      <p className="fxh-subtitle">📉 Interacciones Relevantes</p>
      <ul className="fxh-list">
        <li>Con AINEs: riesgo de insuficiencia renal</li>
        <li>Con diuréticos ahorradores de potasio: riesgo de hiperkalemia</li>
        <li>Con litio: aumento de toxicidad</li>
      </ul>

      <p className="fxh-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="fxh-list">
        <li>Iniciar con dosis baja y ajustar progresivamente</li>
        <li>Controlar función renal y potasio a los 7-14 días</li>
        <li>Evitar combinación con ARA II en la mayoría de los casos</li>
        <li>Suspender ante angioedema o deterioro renal agudo</li>
      </ul>

    </div>
  );
}

export default IECAs;
