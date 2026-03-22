import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CorticoidesInhalados.css';

function CorticoidesInhalados() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ci-detail">
      <p className="ci-title">Corticoides Inhalados (CI)</p>

      <p className="ci-subtitle">📌 Introducción</p>
      <p className="ci-text">
        Los <strong>Corticoides Inhalados</strong> son medicamentos antiinflamatorios esenciales en el tratamiento del <Link to="/ecnt/asma">Asma</Link> y de la <Link to="/ecnt/enfermedadpulmonarobstructivacronica">EPOC</Link>. Reducen la inflamación de la vía aérea, mejoran los síntomas y disminuyen las exacerbaciones. Son el pilar del tratamiento controlador del asma persistente.
      </p>

      <p className="ci-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="ci-list">
        <li>Inhiben la producción de mediadores inflamatorios.</li>
        <li>Reducen la infiltración de eosinófilos, mastocitos y células T.</li>
        <li>Disminuyen la hiperreactividad bronquial.</li>
        <li>Mejoran la función pulmonar y reducen los síntomas diarios.</li>
      </ul>

      <p className="ci-subtitle">📋 Indicaciones Principales</p>
      <ul className="ci-list">
        <li>Asma persistente (leve, moderada o severa)</li>
        <li>EPOC con fenotipo inflamatorio o exacerbador frecuente</li>
        <li>Rinitis alérgica (como spray nasal)</li>
      </ul>

      <p className="ci-subtitle">💊 Ejemplos Comunes</p>
      <div className="ci-table-wrapper">
        <table className="ci-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Presentación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Beclometasona</td>
              <td>100-400 mcg cada 12 h</td>
              <td>Inhalador presurizado (pMDI)</td>
            </tr>
            <tr>
              <td><Link to="/farmacos/farmacos2/budesonida">Budesonida</Link></td>
              <td>200-800 mcg/día</td>
              <td>Turbuhaler o nebulización</td>
            </tr>
            <tr>
              <td>Fluticasona</td>
              <td>100-500 mcg cada 12 h</td>
              <td>Diskus o pMDI</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="ci-subtitle">⚠️ Efectos Adversos</p>
      <ul className="ci-list">
        <li><strong>Candidiasis orofaríngea</strong>: prevenir con enjuague bucal post-inhalación</li>
        <li><strong>Dolor de garganta o disfonía</strong></li>
        <li><strong>Tos irritativa</strong> después de la inhalación</li>
        <li>En altas dosis: supresión del eje HHA, adelgazamiento óseo, cataratas</li>
      </ul>

      <p className="ci-subtitle">🔄 Contraindicaciones</p>
      <ul className="ci-list">
        <li>Hipersensibilidad al principio activo o excipientes</li>
        <li>Infecciones fúngicas activas de la vía aérea</li>
      </ul>

      <p className="ci-subtitle">📉 Interacciones Relevantes</p>
      <ul className="ci-list">
        <li>Con inhibidores del CYP3A4 (ritonavir, ketoconazol): aumento del riesgo de efectos sistémicos</li>
        <li>Uso concomitante con otros esteroides sistémicos → potencia efectos adversos</li>
      </ul>

      <p className="ci-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="ci-list">
        <li>Se deben usar de forma regular, no solo ante síntomas</li>
        <li>Indicar enjuague bucal post-uso para prevenir micosis</li>
        <li>Ajustar dosis según control clínico y función pulmonar</li>
        <li>No suspender bruscamente si se usaron dosis altas prolongadas</li>
      </ul>
    </div>
  );
}

export default CorticoidesInhalados;
