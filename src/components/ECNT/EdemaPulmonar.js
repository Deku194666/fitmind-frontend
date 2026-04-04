

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EdemaPulmonar.css';

function EdemaPulmonar() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail312">

      <p className="fxh-title">Edema Pulmonar</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        El <strong>edema pulmonar</strong> es la acumulación de líquido en los alvéolos,
        lo que impide un adecuado intercambio de oxígeno. Es una condición grave que puede
        poner en riesgo la vida si no se trata oportunamente.
      </p>

      <p className="fxh-subtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li> - Aumento de presión en capilares pulmonares.</li>
        <li> - Filtración de líquido hacia los alvéolos.</li>
        <li> - Disminución de oxigenación sanguínea.</li>
        <li> - Hipoxia progresiva.</li>
      </ul>

      <p className="fxh-subtitle">Clasificación</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cardiogénico</td>
              <td>Relacionado con <Link to="/ecnt/insuficienciacardiaca">insuficiencia cardíaca</Link>.</td>
            </tr>
            <tr>
              <td>No cardiogénico</td>
              <td>Asociado a daño pulmonar (infecciones, SDRA).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Causas ⚠️</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/iam">Infarto agudo al miocardio</Link>.</li>
        <li> - Crisis hipertensiva.</li>
        <li> - Sobrecarga de líquidos.</li>
        <li> - Infecciones pulmonares.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas 🔍</p>
      <ul className="fxh-list">
        <li> - Disnea intensa.</li>
        <li> - Dificultad para respirar al acostarse.</li>
        <li> - Tos con secreción espumosa.</li>
        <li> - Ansiedad.</li>
      </ul>

      <p className="fxh-subtitle">🚨 Signos de emergencia</p>
      <ul className="fxh-list">
        <li> - Falta de aire severa.</li>
        <li> - Coloración azulada de labios.</li>
        <li> - Confusión.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🧪</p>
      <ul className="fxh-list">
        <li> - Radiografía de tórax.</li>
        <li> - <Link to="/examenes/ekg">EKG</Link>.</li>
        <li> - Gases arteriales.</li>
        <li> - <Link to="/examenes/ecg">Ecocardiograma</Link>.</li>
      </ul>

      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-flex">

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Manejo agudo</p>
          <ul className="fxh-list">
            <li> - Oxígeno.</li>
            <li> - Diuréticos.</li>
            <li> - Vasodilatadores.</li>
          </ul>
        </div>

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Tratamiento base</p>
          <ul className="fxh-list">
            <li> - Control de la causa.</li>
            <li> - Manejo cardíaco.</li>
            <li> - Seguimiento médico.</li>
          </ul>
        </div>

      </div>

      <p className="fxh-subtitle">Complicaciones</p>
      <ul className="fxh-list">
        <li> - Insuficiencia respiratoria.</li>
        <li> - Shock.</li>
        <li> - Muerte.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        El edema pulmonar es una urgencia médica. Su reconocimiento temprano y tratamiento
        adecuado son fundamentales para mejorar la supervivencia.
      </p>

    </div>
  );
}

export default EdemaPulmonar;