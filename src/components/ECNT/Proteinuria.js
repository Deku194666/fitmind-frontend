


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Proteinuria.css';

function Proteinuria() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail315">

      <p className="fxh-title">Proteinuria</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>proteinuria</strong> es la presencia anormal de proteínas en la orina,
        lo que puede indicar daño renal o alteraciones en el filtrado glomerular.
      </p>

      <p className="fxh-subtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li> - Alteración en la membrana de filtración glomerular.</li>
        <li> - Pérdida de proteínas plasmáticas en la orina.</li>
        <li> - Disminución de la reabsorción tubular.</li>
        <li> - Daño progresivo renal.</li>
      </ul>

      <p className="fxh-subtitle">Clasificación</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Leve</td>
              <td>&lt; 1 g/día</td>
            </tr>
            <tr>
              <td>Moderada</td>
              <td>1 - 3.5 g/día</td>
            </tr>
            <tr>
              <td>Severa</td>
              <td>&gt; 3.5 g/día (síndrome nefrótico)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Causas ⚠️</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/diabetes">Diabetes</Link>.</li>
        <li> - <Link to="/ecnt/hipertension">Hipertensión</Link>.</li>
        <li> - Enfermedades glomerulares.</li>
        <li> - Infecciones.</li>
        <li> - Ejercicio intenso (transitoria).</li>
      </ul>

      <p className="fxh-subtitle">Síntomas 🔍</p>
      <ul className="fxh-list">
        <li> - Puede ser asintomática.</li>
        <li> - Orina espumosa.</li>
        <li> - Edema en piernas o rostro.</li>
        <li> - Fatiga.</li>
      </ul>

      <p className="fxh-subtitle">🚨 Signos de alarma</p>
      <ul className="fxh-list">
        <li> - Edema generalizado.</li>
        <li> - Disminución de la orina.</li>
        <li> - Hipertensión asociada.</li>
        <li> - Deterioro renal progresivo.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🧪</p>
      <ul className="fxh-list">
        <li> - Examen de orina.</li>
        <li> - Proteinuria en 24 horas.</li>
        <li> - Relación proteína/creatinina.</li>
        <li> - Función renal (creatinina).</li>
      </ul>

      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-flex">

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Medidas generales</p>
          <ul className="fxh-list">
            <li> - Dieta baja en sal.</li>
            <li> - Control de presión arterial.</li>
            <li> - Control glicémico.</li>
          </ul>
        </div>

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Tratamiento médico</p>
          <ul className="fxh-list">
            <li> - IECAs o ARA II.</li>
            <li> - Diuréticos.</li>
            <li> - Tratamiento de la causa base.</li>
          </ul>
        </div>

      </div>

      <p className="fxh-subtitle">Complicaciones</p>
      <ul className="fxh-list">
        <li> - Insuficiencia renal crónica.</li>
        <li> - Síndrome nefrótico.</li>
        <li> - Enfermedad cardiovascular.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        La proteinuria es un marcador importante de enfermedad renal. Su detección
        temprana permite intervenir oportunamente y prevenir daño renal progresivo.
      </p>

    </div>
  );
}

export default Proteinuria;