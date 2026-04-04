

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ColesterolTotal.css';

function ColesterolTotal() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail292">

      <p className="fxh-title">Colesterol Total</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        El examen de <strong>colesterol total</strong> mide la cantidad total de colesterol
        presente en la sangre. El colesterol es una sustancia grasa esencial para la
        formación de membranas celulares, hormonas y vitamina D. Sin embargo,
        niveles elevados pueden aumentar el riesgo de enfermedades cardiovasculares
        como la <Link to="/ecnt/ateroesclerosis">aterosclerosis</Link>,
        <Link to="/ecnt/iam"> infarto agudo al miocardio</Link> y
        <Link to="/ecnt/acv"> accidente cerebrovascular</Link>.
      </p>

      <p className="fxh-subtitle">🧬 ¿Qué mide este examen?</p>

      <ul className="fxh-list">
        <li> - Cantidad total de colesterol en la sangre.</li>
        <li> - Incluye colesterol LDL, HDL y otras lipoproteínas.</li>
        <li> - Forma parte del perfil lipídico.</li>
        <li> - Ayuda a evaluar el riesgo cardiovascular.</li>
      </ul>

      <p className="fxh-subtitle">Valores de referencia</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Nivel</th>
              <th>Colesterol total</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Deseable</td>
              <td>Menos de 200 mg/dL</td>
            </tr>

            <tr>
              <td>Límite alto</td>
              <td>200 – 239 mg/dL</td>
            </tr>

            <tr>
              <td>Alto</td>
              <td>240 mg/dL o más</td>
            </tr>

          </tbody>

        </table>

      </div>

      <p className="fxh-subtitle">Indicaciones clínicas ⚠️</p>

      <ul className="fxh-list">
        <li>Evaluación del riesgo cardiovascular.</li>
        <li>Control de <Link to="/ecnt/dislipidemia">dislipidemia</Link>.</li>
        <li>Seguimiento de pacientes con <Link to="/ecnt/hipertension">hipertensión</Link>.</li>
        <li>Monitoreo en <Link to="/ecnt/diabetes">diabetes</Link>.</li>
        <li>Chequeos médicos preventivos.</li>
      </ul>

      <p className="fxh-subtitle">Factores que pueden aumentar el colesterol 🔍</p>

      <ul className="fxh-list">
        <li>Dieta rica en grasas saturadas.</li>
        <li>Sedentarismo.</li>
        <li>Obesidad.</li>
        <li>Predisposición genética.</li>
        <li>Tabaquismo.</li>
      </ul>

      <p className="fxh-subtitle">Interpretación de resultados</p>

      <div className="fxh-flex">

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Colesterol elevado</p>

          <ul className="fxh-list">
            <li><Link to="/ecnt/dislipidemia">Dislipidemia</Link>.</li>
            <li>Aumento del riesgo cardiovascular.</li>
            <li>Mayor probabilidad de <Link to="/ecnt/aterosclerosis">aterosclerosis</Link>.</li>
            <li>Riesgo de <Link to="/ecnt/iam">infarto</Link> y <Link to="/ecnt/acv">ACV</Link>.</li>
          </ul>

        </div>

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Colesterol bajo</p>

          <ul className="fxh-list">
            <li>Malnutrición.</li>
            <li>Hipertiroidismo.</li>
            <li>Enfermedades hepáticas.</li>
            <li>Algunas enfermedades crónicas.</li>
          </ul>

        </div>

      </div>

      <p className="fxh-subtitle">Preparación para el examen</p>

      <ul className="fxh-list">
        <li>Ayuno de 8 a 12 horas antes del examen.</li>
        <li>Evitar alcohol el día previo.</li>
        <li>No realizar ejercicio intenso antes de la prueba.</li>
        <li>Informar medicamentos al médico.</li>
      </ul>

      <p className="fxh-subtitle">Procedimiento</p>

      <ul className="fxh-list">
        <li>Extracción de una muestra de sangre venosa.</li>
        <li>Análisis en laboratorio clínico.</li>
        <li>Generalmente forma parte del perfil lipídico completo.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        El examen de <strong>colesterol total</strong> es una herramienta fundamental
        para evaluar el riesgo de enfermedades cardiovasculares. Su medición
        permite detectar precozmente alteraciones del metabolismo lipídico y
        prevenir complicaciones graves como
        <Link to="/ecnt/iam"> infarto</Link> o
        <Link to="/ecnt/acv"> accidente cerebrovascular</Link>
        mediante cambios en el estilo de vida o tratamiento médico.
      </p>

    </div>

  );

}

export default ColesterolTotal;