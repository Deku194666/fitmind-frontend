import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FarmacosTendonesLigamentos.css';

function FarmacosTendonesLigamentos() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail86">

      <p className="fxh-title">Fármacos para Tendones y Ligamentos</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        El manejo farmacológico de lesiones tendinosas y ligamentosas se enfoca principalmente
        en controlar el dolor y la inflamación. Aunque el tratamiento de base es fisioterapéutico,
        los fármacos cumplen un rol coadyuvante durante fases agudas o subagudas de la recuperación.
      </p>

      <p className="fxh-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="fxh-list">
        <li>Inhibición de la ciclooxigenasa (COX-1 y COX-2) para reducir prostaglandinas inflamatorias.</li>
        <li>Modulación de vías del dolor mediante acción central y periférica.</li>
        <li>Reducción del edema local y alivio de la hiperalgesia.</li>
      </ul>

      <p className="fxh-subtitle">📋 Indicaciones Principales</p>
      <ul className="fxh-list">
        <li>Tendinopatías agudas o crónicas</li>
        <li>Esguinces y distensiones ligamentosas</li>
        <li>Dolor inflamatorio musculotendinoso</li>
        <li>Fase postoperatoria de cirugía ligamentaria</li>
        <li>Inflamación peritendinosa o entesitis</li>
      </ul>

      <p className="fxh-subtitle">💊 Ejemplos Comunes</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Clasificación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/farmacos/farmacos2/ibuprofeno" className="fxh-link">
                  Ibuprofeno
                </Link>
              </td>
              <td>400–600 mg cada 8 h</td>
              <td>AINE no selectivo</td>
            </tr>
            <tr>
              <td>Diclofenaco</td>
              <td>50 mg cada 8–12 h</td>
              <td>AINE tópico u oral</td>
            </tr>
            <tr>
              <td>Paracetamol</td>
              <td>500–1000 mg cada 6–8 h</td>
              <td>Analgésico central</td>
            </tr>
            <tr>
              <td>Colágeno tipo I/III + vitamina C</td>
              <td>Suplemento diario</td>
              <td>Coadyuvante regenerativo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">⚠️ Efectos Adversos</p>
      <ul className="fxh-list">
        <li>Gastritis o dispepsia (AINEs)</li>
        <li>Riesgo cardiovascular (uso prolongado de AINEs)</li>
        <li>Toxicidad hepática (paracetamol en dosis altas)</li>
        <li>Reacciones alérgicas o intolerancia digestiva (suplementos)</li>
      </ul>

      <p className="fxh-subtitle">🔄 Contraindicaciones</p>
      <ul className="fxh-list">
        <li>Úlcera péptica activa</li>
        <li>Insuficiencia renal o hepática severa</li>
        <li>Antecedentes de alergia a AINEs</li>
        <li>Pacientes con alto riesgo cardiovascular</li>
      </ul>

      <p className="fxh-subtitle">📉 Interacciones Relevantes</p>
      <ul className="fxh-list">
        <li>Con anticoagulantes: mayor riesgo de sangrado</li>
        <li>Con corticoides: aumento del riesgo de úlceras</li>
        <li>Con IECA o ARA II: posible deterioro de función renal</li>
      </ul>

      <p className="fxh-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="fxh-list">
        <li>Usar AINEs por el menor tiempo posible</li>
        <li>Evaluar siempre la causa biomecánica de la lesión</li>
        <li>Asociar con fisioterapia activa desde fases iniciales</li>
        <li>Evitar reposo prolongado sin justificación</li>
      </ul>

    </div>
  );
}

export default FarmacosTendonesLigamentos;
