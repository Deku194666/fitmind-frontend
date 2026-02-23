import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SABA.css';

function SABA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="saba-detail">

      <p className="saba-title">Agonistas β2 de Acción Corta (SABA)</p>

      <p className="saba-subtitle">📌 Introducción</p>
      <p className="saba-text">
        Los <strong>SABA</strong> son broncodilatadores de acción rápida utilizados principalmente para el alivio inmediato de los 
        síntomas en enfermedades respiratorias como el <Link to="/ecnt/asma">Asma</Link> y la 
        <Link to="/ecnt/enfermedadpulmonarobstructivacronica"> EPOC</Link>. Actúan sobre los receptores β2 del músculo liso bronquial,
         generando una rápida broncodilatación.
      </p>

      <p className="saba-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="saba-list">
        <li>Estimulan los receptores adrenérgicos β2 en el músculo liso bronquial.</li>
        <li>Provocan relajación rápida del músculo liso y broncodilatación.</li>
        <li>Inhiben la liberación de mediadores inflamatorios por los mastocitos.</li>
      </ul>

      <p className="saba-subtitle">📋 Indicaciones Principales</p>
      <ul className="saba-list">
        <li>Crisis aguda de asma</li>
        <li>Disnea en <Link to="/ecnt/enfermedadpulmonarobstructivacronica">EPOC</Link></li>
        <li>Prevención del broncoespasmo inducido por ejercicio</li>
        <li>Alivio sintomático en otras patologías con obstrucción reversible</li>
      </ul>

      <p className="saba-subtitle">💊 Ejemplos Comunes</p>
      <div className="saba-table-wrapper">
        <table className="saba-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Vía y dosis habitual</th>
              <th>Inicio / Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/farmacos/farmacos2/salbutamol">Salbutamol</Link> (albuterol)</td>
              <td>Inhalado: 100-200 mcg cada 4-6 h</td>
              <td>Inicio: 5 min / Duración: 4-6 h</td>
            </tr>
            <tr>
              <td>Terbutalina</td>
              <td>Inhalado: 250-500 mcg cada 4-6 h</td>
              <td>Inicio: 5-10 min / Duración: 4-6 h</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="saba-subtitle">⚠️ Efectos Adversos</p>
      <ul className="saba-list">
        <li><strong>Taquicardia</strong></li>
        <li><strong>Temblor fino distal</strong></li>
        <li><strong>Hipokalemia</strong></li>
        <li><strong>Nerviosismo o ansiedad</strong></li>
        <li><strong>Cefalea</strong></li>
        <li><strong>Palpitaciones</strong></li>
      </ul>

      <p className="saba-subtitle">🔄 Contraindicaciones</p>
      <ul className="saba-list">
        <li>Hipersensibilidad al fármaco</li>
        <li>Precaución en pacientes con cardiopatía isquémica, arritmias o hipertiroidismo</li>
      </ul>

      <p className="saba-subtitle">📉 Interacciones Relevantes</p>
      <ul className="saba-list">
        <li>Con beta bloqueadores no selectivos: antagonismo del efecto broncodilatador</li>
        <li>Con diuréticos: aumento del riesgo de hipokalemia</li>
        <li>Con simpaticomiméticos: potenciación de efectos cardiovasculares</li>
      </ul>

      <p className="saba-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="saba-list">
        <li>No usar como monoterapia en asma persistente</li>
        <li>No exceder la dosis máxima recomendada (riesgo de efectos adversos)</li>
        <li>Utilizar con cámara espaciadora para mejorar la eficacia</li>
        <li>Evaluar necesidad de tratamiento controlador si se requiere uso frecuente</li>
      </ul>

    </div>
  );
}

export default SABA;
