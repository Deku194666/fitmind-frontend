


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HDL.css';

function HDL() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail293">

      <p className="fxh-title">Colesterol HDL</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        El <strong>colesterol HDL</strong> (lipoproteína de alta densidad) es conocido
        como el <strong>"colesterol bueno"</strong> porque ayuda a eliminar el exceso
        de colesterol de la sangre transportándolo hacia el hígado para su eliminación.
        Niveles adecuados de HDL se asocian con menor riesgo de enfermedades
        cardiovasculares como el
        <Link to="/ecnt/iam"> infarto agudo al miocardio</Link> y el
        <Link to="/ecnt/acv"> accidente cerebrovascular</Link>.
      </p>

      <p className="fxh-subtitle">🧬 ¿Qué es el colesterol HDL?</p>

      <ul className="fxh-list">
        <li>Lipoproteína que transporta colesterol desde los tejidos hacia el hígado.</li>
        <li>Participa en la eliminación del colesterol del organismo.</li>
        <li>Reduce la acumulación de placas en las arterias.</li>
        <li>Se considera un factor protector cardiovascular.</li>
      </ul>

      <p className="fxh-subtitle">Valores de referencia</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Grupo</th>
              <th>HDL (mg/dL)</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Bajo</td>
              <td>Menos de 40</td>
            </tr>

            <tr>
              <td>Adecuado</td>
              <td>40 – 59</td>
            </tr>

            <tr>
              <td>Protector</td>
              <td>60 o más</td>
            </tr>

          </tbody>

        </table>

      </div>

      <p className="fxh-subtitle">Indicaciones clínicas ⚠️</p>

      <ul className="fxh-list">
        <li>Evaluación del riesgo cardiovascular.</li>
        <li>Diagnóstico y seguimiento de <Link to="/ecnt/dislipidemia">dislipidemia</Link>.</li>
        <li>Control en pacientes con <Link to="/ecnt/diabetes">diabetes</Link>.</li>
        <li>Seguimiento en <Link to="/ecnt/hipertension">hipertensión</Link>.</li>
        <li>Parte del perfil lipídico completo.</li>
      </ul>

      <p className="fxh-subtitle">Factores que aumentan el HDL 🔍</p>

      <ul className="fxh-list">
        <li>Actividad física regular.</li>
        <li>Dieta saludable rica en grasas insaturadas.</li>
        <li>Pérdida de peso.</li>
        <li>Dejar de fumar.</li>
      </ul>

      <p className="fxh-subtitle">Factores que disminuyen el HDL</p>

      <ul className="fxh-list">
        <li>Sedentarismo.</li>
        <li>Obesidad.</li>
        <li>Tabaquismo.</li>
        <li>Dieta rica en grasas saturadas.</li>
        <li>Algunas enfermedades metabólicas.</li>
      </ul>

      <p className="fxh-subtitle">Interpretación de resultados</p>

      <div className="fxh-flex">

        <div className="fxh-half">

          <p className="fxh-subsubtitle">HDL bajo</p>

          <ul className="fxh-list">
            <li>Mayor riesgo cardiovascular.</li>
            <li>Asociado a <Link to="/ecnt/dislipidemia">dislipidemia</Link>.</li>
            <li>Mayor probabilidad de <Link to="/ecnt/aterosclerosis">aterosclerosis</Link>.</li>
          </ul>

        </div>

        <div className="fxh-half">

          <p className="fxh-subsubtitle">HDL alto</p>

          <ul className="fxh-list">
            <li>Efecto protector cardiovascular.</li>
            <li>Menor riesgo de <Link to="/ecnt/iam">infarto</Link>.</li>
            <li>Menor riesgo de <Link to="/ecnt/acv">ACV</Link>.</li>
          </ul>

        </div>

      </div>

      <p className="fxh-subtitle">Preparación para el examen</p>

      <ul className="fxh-list">
        <li>Ayuno de 8 a 12 horas antes del examen.</li>
        <li>Evitar alcohol antes de la prueba.</li>
        <li>No realizar ejercicio intenso previo al examen.</li>
        <li>Informar medicamentos al médico.</li>
      </ul>

      <p className="fxh-subtitle">Procedimiento</p>

      <ul className="fxh-list">
        <li>Extracción de una muestra de sangre venosa.</li>
        <li>Análisis en laboratorio clínico.</li>
        <li>Generalmente se mide junto con colesterol total, LDL y triglicéridos.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        El colesterol <strong>HDL</strong> cumple un papel fundamental en la
        protección cardiovascular al ayudar a eliminar el exceso de colesterol
        de la sangre. Mantener niveles adecuados mediante ejercicio, dieta
        saludable y control médico puede disminuir significativamente el
        riesgo de enfermedades como
        <Link to="/ecnt/iam"> infarto</Link> y
        <Link to="/ecnt/acv"> accidente cerebrovascular</Link>.
      </p>

    </div>

  );

}

export default HDL;