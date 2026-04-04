

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ResistenciaInsulina.css';

function ResistenciaInsulina() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail311">

      <p className="fxh-title">Resistencia a la Insulina</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>resistencia a la insulina</strong> es una condición en la que las células del cuerpo
        responden de forma ineficaz a la insulina, lo que obliga al páncreas a producir más
        para mantener niveles normales de glucosa.
      </p>

      <p className="fxh-subtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li> - Disminución de la captación de glucosa en músculo y tejido adiposo.</li>
        <li> - Aumento de producción hepática de glucosa.</li>
        <li> - Hiperinsulinemia compensatoria.</li>
        <li> - Inflamación crónica de bajo grado.</li>
      </ul>

      <p className="fxh-subtitle">Factores de riesgo ⚠️</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/obesidad">Obesidad</Link>, especialmente abdominal.</li>
        <li> - Sedentarismo.</li>
        <li> - Dieta alta en azúcares y ultraprocesados.</li>
        <li> - <Link to="/ecnt/diabetes">Diabetes tipo 2</Link> en la familia.</li>
        <li> - Síndrome metabólico.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas 🔍</p>
      <ul className="fxh-list">
        <li> - Generalmente asintomática al inicio.</li>
        <li> - Fatiga.</li>
        <li> - Aumento de peso.</li>
        <li> - Dificultad para bajar de peso.</li>
        <li> - Oscurecimiento de la piel (acantosis nigricans).</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🧪</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Glucosa en ayunas</td>
              <td>Elevada o normal-alta</td>
            </tr>
            <tr>
              <td>Insulina basal</td>
              <td>Elevada</td>
            </tr>
            <tr>
              <td>HOMA-IR</td>
              <td>Índice elevado</td>
            </tr>
            <tr>
              <td>Curva de tolerancia</td>
              <td>Alterada</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-flex">

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Cambios en estilo de vida</p>
          <ul className="fxh-list">
            <li> - Alimentación balanceada.</li>
            <li> - Reducción de azúcares simples.</li>
            <li> - Ejercicio físico regular.</li>
            <li> - Pérdida de peso.</li>
          </ul>
        </div>

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Tratamiento médico</p>
          <ul className="fxh-list">
            <li> - Metformina en casos seleccionados.</li>
            <li> - Manejo de comorbilidades.</li>
            <li> - Seguimiento metabólico.</li>
          </ul>
        </div>

      </div>

      <p className="fxh-subtitle">Complicaciones</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/diabetes">Diabetes tipo 2</Link>.</li>
        <li> - <Link to="/ecnt/hipertension">Hipertensión</Link>.</li>
        <li> - Enfermedad cardiovascular.</li>
        <li> - Hígado graso.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        La resistencia a la insulina es una condición clave en el desarrollo de enfermedades
        metabólicas. Su detección precoz y cambios en el estilo de vida pueden revertirla
        y prevenir complicaciones a largo plazo.
      </p>

    </div>
  );
}

export default ResistenciaInsulina;