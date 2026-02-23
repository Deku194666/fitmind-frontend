import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Metilxantinas.css';

function Metilxantinas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="metil-detail">

      <p className="metil-title">Metilxantinas</p>

      <p className="metil-subtitle">📌 Introducción</p>
      <p className="metil-text">
        Las <strong>metilxantinas</strong> son broncodilatadores utilizados en enfermedades respiratorias como 
        <Link to="/ecnt/asma"> Asma</Link> y <Link to="/ecnt/enfermedadpulmonarobstructivacronica">EPOC</Link>. Aunque su uso 
        ha disminuido por su estrecho margen terapéutico y efectos adversos, pueden ser útiles en casos seleccionados o donde 
        no se dispone de otras opciones.
      </p>

      <p className="metil-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="metil-list">
        <li>Inhiben la fosfodiesterasa (PDE), aumentando los niveles de AMPc.</li>
        <li>Relajan el músculo liso bronquial → broncodilatación.</li>
        <li>Estimulantes del sistema nervioso central y centro respiratorio.</li>
        <li>Poseen leve efecto antiinflamatorio e inmunomodulador.</li>
      </ul>

      <p className="metil-subtitle">📋 Indicaciones Principales</p>
      <ul className="metil-list">
        <li>Asma persistente moderada o severa (en combinación con otros fármacos)</li>
        <li>EPOC moderado o severo, especialmente en zonas sin acceso a inhaladores</li>
        <li>Apnea neonatal (en forma de cafeína)</li>
      </ul>

      <p className="metil-subtitle">💊 Ejemplos Comunes</p>
      <div className="metil-table-wrapper">
        <table className="metil-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Comentarios</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Teofilina</td>
              <td>300–600 mg/día (oral o EV)</td>
              <td>Monitoreo plasmático necesario (niveles 5-15 mcg/mL)</td>
            </tr>
            <tr>
              <td>Aminofilina</td>
              <td>5-7 mg/kg en bolo EV, luego infusión continua</td>
              <td>Más usada en urgencias o UCI</td>
            </tr>
            <tr>
              <td>Cafeína</td>
              <td>5-10 mg/kg/día (oral o EV)</td>
              <td>Uso en neonatología</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="metil-subtitle">⚠️ Efectos Adversos</p>
      <ul className="metil-list">
        <li><strong>Náuseas, vómitos</strong></li>
        <li><strong>Taquicardia, arritmias</strong></li>
        <li><strong>Temblor, insomnio, ansiedad</strong></li>
        <li><strong>Convulsiones</strong> (en intoxicación)</li>
        <li><strong>Gastritis o reflujo</strong> (por estimulación gástrica)</li>
      </ul>

      <p className="metil-subtitle">🔄 Contraindicaciones</p>
      <ul className="metil-list">
        <li>Epilepsia no controlada</li>
        <li>Enfermedades cardíacas graves (riesgo de arritmias)</li>
        <li>Úlcera péptica activa</li>
        <li>Hipersensibilidad al compuesto</li>
      </ul>

      <p className="metil-subtitle">📉 Interacciones Relevantes</p>
      <ul className="metil-list">
        <li>Con macrólidos o quinolonas: aumenta niveles de teofilina</li>
        <li>Con anticonvulsivantes (fenitoína, carbamazepina): disminuyen sus niveles</li>
        <li>Con tabaco: induce su metabolismo → menor efecto</li>
        <li>Con cafeína u otros estimulantes: efecto aditivo en SNC</li>
      </ul>

      <p className="metil-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="metil-list">
        <li>Monitorear niveles plasmáticos para evitar toxicidad</li>
        <li>Usar como alternativa si no se dispone de inhaladores o en combinación</li>
        <li>Ajustar dosis en insuficiencia hepática o en ancianos</li>
        <li>Educar al paciente sobre signos de toxicidad</li>
      </ul>

    </div>
  );
}

export default Metilxantinas;
