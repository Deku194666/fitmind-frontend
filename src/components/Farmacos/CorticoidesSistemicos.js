import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CorticoidesSistemicos.css';

function CorticoidesSistemicos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cs-detail">
      <p className="cs-title">Corticoides Sistémicos</p>

      <p className="cs-subtitle">📌 Introducción</p>
      <p className="cs-text">
        Los <strong>Corticoides Sistémicos</strong> son fármacos antiinflamatorios potentes que se administran por vía oral o parenteral. 
        Se utilizan en enfermedades respiratorias como el <Link to="/ecnt/asma">Asma</Link> grave o la 
        <Link to="/ecnt/enfermedadpulmonarobstructivacronica"> EPOC</Link> exacerbada, así como en otras condiciones inflamatorias o 
        autoinmunes. Su uso debe ser controlado debido al riesgo de efectos adversos sistémicos.
      </p>

      <p className="cs-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="cs-list">
        <li>Suprimen la respuesta inflamatoria mediante la inhibición de citocinas y mediadores proinflamatorios.</li>
        <li>Estabilizan membranas lisosomales y reducen la permeabilidad vascular.</li>
        <li>Modulan la expresión génica vía receptores glucocorticoides.</li>
      </ul>

      <p className="cs-subtitle">📋 Indicaciones Principales</p>
      <ul className="cs-list">
        <li>Exacerbaciones de asma o EPOC</li>
        <li>Asma grave no controlada con inhaladores</li>
        <li>Neumonitis, sarcoidosis, fibrosis pulmonar</li>
        <li>Shock anafiláctico y reacciones alérgicas severas</li>
        <li>Enfermedades autoinmunes sistémicas</li>
      </ul>

      <p className="cs-subtitle">💊 Ejemplos Comunes</p>
      <div className="cs-table-wrapper">
        <table className="cs-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Vía de administración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Prednisona</td>
              <td>20-60 mg/día</td>
              <td>Oral</td>
            </tr>
            <tr>
              <td>Metilprednisolona</td>
              <td>40-125 mg cada 6-12 h</td>
              <td>IV o IM</td>
            </tr>
            <tr>
              <td>Dexametasona</td>
              <td>4-16 mg/día</td>
              <td>Oral o IV</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="cs-subtitle">⚠️ Efectos Adversos</p>
      <ul className="cs-list">
        <li><strong>Hiperglicemia</strong> e intolerancia a la glucosa</li>
        <li><strong>Hipertensión arterial</strong></li>
        <li><strong>Osteoporosis</strong> con uso prolongado</li>
        <li><strong>Miopatía proximal</strong></li>
        <li><strong>Trastornos psiquiátricos</strong> (insomnio, euforia, depresión)</li>
        <li><strong>Inmunosupresión</strong> con mayor riesgo de infecciones</li>
        <li><strong>Supresión del eje HHA</strong> y síndrome de Cushing iatrogénico</li>
      </ul>

      <p className="cs-subtitle">🔄 Contraindicaciones</p>
      <ul className="cs-list">
        <li>Infección sistémica no controlada</li>
        <li>Úlcera péptica activa</li>
        <li>Psicosis no tratada</li>
        <li>Diabetes descompensada (relativa)</li>
      </ul>

      <p className="cs-subtitle">📉 Interacciones Relevantes</p>
      <ul className="cs-list">
        <li>Inductores del CYP3A4 (rifampicina, fenitoína): reducen su eficacia</li>
        <li>Inhibidores del CYP3A4 (ketoconazol): aumentan sus efectos</li>
        <li>Diuréticos: riesgo de hipopotasemia</li>
        <li>AINES: mayor riesgo de úlcera gástrica</li>
      </ul>

      <p className="cs-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="cs-list">
        <li>Utilizar la menor dosis posible durante el menor tiempo necesario</li>
        <li>Monitorear glicemia, presión arterial, y densidad ósea en tratamientos prolongados</li>
        <li>Si se usan más de 2 semanas, retirar progresivamente para evitar supresión del eje HHA</li>
        <li>Asociar con protector gástrico si hay riesgo de sangrado digestivo</li>
      </ul>
    </div>
  );
}

export default CorticoidesSistemicos;
