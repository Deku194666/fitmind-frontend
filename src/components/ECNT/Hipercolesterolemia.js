

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hipercolesterolemia.css';

function Hipercolesterolemia() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail295">

      <p className="fxh-title">Hipercolesterolemia</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>hipercolesterolemia</strong> es una condición médica caracterizada
        por niveles elevados de colesterol en la sangre. El aumento del colesterol,
        especialmente del <Link to="/examenes/ldl">LDL</Link>, puede favorecer la
        formación de placas de grasa en las arterias, lo que incrementa el riesgo
        de enfermedades cardiovasculares como el
        <Link to="/ecnt/iam"> infarto agudo al miocardio</Link> y el
        <Link to="/ecnt/acv"> accidente cerebrovascular</Link>.
      </p>

      <p className="fxh-subtitle">¿Qué es la hipercolesterolemia? 🧬</p>

      <ul className="fxh-list">
        <li>Trastorno caracterizado por niveles elevados de colesterol en sangre.</li>
        <li>Puede afectar la salud cardiovascular.</li>
        <li>Frecuentemente se detecta mediante un perfil lipídico.</li>
        <li>Puede ser causada por factores genéticos o hábitos de vida.</li>
      </ul>

      <p className="fxh-subtitle">Tipos de hipercolesterolemia</p>

      <div className="fxh-flex">

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Primaria</p>

          <ul className="fxh-list">
            <li>Origen genético.</li>
            <li>Hipercolesterolemia familiar.</li>
            <li>Puede presentarse desde edades tempranas.</li>
          </ul>

        </div>

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Secundaria</p>

          <ul className="fxh-list">
            <li>Dieta rica en grasas saturadas.</li>
            <li>Obesidad.</li>
            <li>Sedentarismo.</li>
            <li>Enfermedades metabólicas.</li>
          </ul>

        </div>

      </div>

      <p className="fxh-subtitle">Factores de riesgo ⚠️</p>

      <ul className="fxh-list">
        <li>Dieta alta en grasas saturadas.</li>
        <li>Falta de actividad física.</li>
        <li>Obesidad.</li>
        <li>Tabaquismo.</li>
        <li>Antecedentes familiares.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas</p>

      <p className="fxh-text">
        En la mayoría de los casos la hipercolesterolemia no presenta síntomas
        evidentes. Sin embargo, con el tiempo puede provocar acumulación de
        colesterol en las arterias, aumentando el riesgo de
        <Link to="/ecnt/aterosclerosis"> aterosclerosis</Link>,
        <Link to="/ecnt/iam"> infarto</Link> o
        <Link to="/ecnt/acv"> accidente cerebrovascular</Link>.
      </p>

      <p className="fxh-subtitle">Diagnóstico</p>

      <ul className="fxh-list">
        <li>Medición del <Link to="/examenes/colesterol-total">colesterol total</Link>.</li>
        <li>Análisis del <Link to="/examenes/ldl">colesterol LDL</Link>.</li>
        <li>Evaluación del <Link to="/examenes/hdl">colesterol HDL</Link>.</li>
        <li>Medición de <Link to="/examenes/trigliceridos">triglicéridos</Link>.</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento</p>

      <ul className="fxh-list">
        <li>Adopción de una dieta saludable.</li>
        <li>Actividad física regular.</li>
        <li>Pérdida de peso en caso de obesidad.</li>
        <li>Medicamentos como estatinas bajo indicación médica.</li>
      </ul>

      <p className="fxh-subtitle">Prevención</p>

      <ul className="fxh-list">
        <li>Mantener una alimentación equilibrada.</li>
        <li>Realizar ejercicio regularmente.</li>
        <li>Evitar el consumo de tabaco.</li>
        <li>Realizar controles médicos periódicos.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        La <strong>hipercolesterolemia</strong> es un factor de riesgo importante
        para enfermedades cardiovasculares. La detección temprana mediante
        exámenes de laboratorio y la adopción de hábitos saludables son
        fundamentales para reducir complicaciones y mantener una buena salud
        cardiovascular.
      </p>

    </div>

  );

}

export default Hipercolesterolemia;