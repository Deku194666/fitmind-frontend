import React, { useEffect } from 'react';
import './Tetraciclinas.css'; 

function Tetraciclinas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tc-detail">
      <p className="tc-title">Tetraciclinas</p>

      <p className="tc-subtitle">📌 Introducción</p>
      <p className="tc-text">
        Las <strong>Tetraciclinas</strong> son un grupo de antibióticos de amplio espectro que actúan inhibiendo la síntesis proteica bacteriana. Son efectivas contra bacterias gram positivas, gram negativas, así como microorganismos atípicos, como Chlamydia, Mycoplasma y Rickettsias.
      </p>

      <p className="tc-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="tc-list">
        <li>Se unen a la subunidad 30S del ribosoma bacteriano.</li>
        <li>Inhiben la unión del aminoacil-ARNt al sitio A del ribosoma.</li>
        <li>Bloquean la síntesis proteica bacteriana, actuando de forma bacteriostática.</li>
      </ul>

      <p className="tc-subtitle">📋 Indicaciones Principales</p>
      <ul className="tc-list">
        <li>Infecciones respiratorias por microorganismos atípicos (Mycoplasma pneumoniae, Chlamydophila pneumoniae)</li>
        <li>Neumonía adquirida en la comunidad</li>
        <li>Infecciones por Rickettsias (fiebre Q, tifus)</li>
        <li>Acné y algunas infecciones cutáneas</li>
        <li>Enfermedad de Lyme</li>
      </ul>

      <p className="tc-subtitle">💊 Ejemplos Comunes</p>
      <div className="tc-table-wrapper">
        <table className="tc-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Vida media</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Doxiciclina</td>
              <td>100 mg cada 12-24 h</td>
              <td>18-22 horas</td>
            </tr>
            <tr>
              <td>Tetraciclina</td>
              <td>250-500 mg cada 6 h</td>
              <td>6-12 horas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="tc-subtitle">⚠️ Efectos Adversos</p>
      <ul className="tc-list">
        <li>Fotosensibilidad</li>
        <li>Toxicidad gastrointestinal: náuseas, vómitos, diarrea</li>
        <li>Alteración de la flora intestinal y sobreinfecciones</li>
        <li>Coloración amarilla de dientes en niños (contraindicada en menores de 8 años)</li>
        <li>Hepatotoxicidad en dosis altas o prolongadas</li>
        <li>Riesgo de hipoplasia ósea en fetos (contraindicada en embarazo)</li>
      </ul>

      <p className="tc-subtitle">🔄 Contraindicaciones</p>
      <ul className="tc-list">
        <li>Embarazo y lactancia</li>
        <li>Niños menores de 8 años</li>
        <li>Hipersensibilidad conocida</li>
      </ul>

      <p className="tc-subtitle">📉 Interacciones Relevantes</p>
      <ul className="tc-list">
        <li>Antiácidos, suplementos de calcio, hierro y magnesio: disminuyen absorción</li>
        <li>Anticoagulantes orales: pueden aumentar efecto anticoagulante</li>
        <li>Retinoides: aumento de toxicidad hepática</li>
      </ul>

      <p className="tc-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="tc-list">
        <li>Administrar con el estómago vacío para mejorar absorción</li>
        <li>Evitar exposición solar intensa durante el tratamiento</li>
        <li>Monitorear función hepática si el tratamiento es prolongado</li>
        <li>Usar con precaución en pacientes con insuficiencia renal</li>
      </ul>
    </div>
  );
}

export default Tetraciclinas;
