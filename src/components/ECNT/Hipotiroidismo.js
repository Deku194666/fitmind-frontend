

import React, { useEffect } from 'react';
import './Hipotiroidismo.css';

function Hipotiroidismo() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail253">

      <p className="fxh-title">🦋 Hipotiroidismo</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>hipotiroidismo</strong> es un trastorno del sistema endocrino
        que ocurre cuando la <strong>glándula tiroides</strong> no produce
        suficientes hormonas tiroideas. Estas hormonas son esenciales para
        regular el metabolismo del cuerpo, la temperatura corporal y
        diversas funciones de órganos y tejidos.
      </p>

      <p className="fxh-text">
        Cuando los niveles hormonales son bajos, el metabolismo del organismo
        se vuelve más lento, lo que puede provocar una variedad de síntomas
        físicos y mentales. El hipotiroidismo puede afectar a personas de
        cualquier edad, pero es más común en mujeres y adultos mayores.
      </p>


      <p className="fxh-subtitle">⚠️ Causas</p>

      <ul className="fxh-list">

        <li>Enfermedad autoinmune (tiroiditis de Hashimoto)</li>
        <li>Cirugía de la glándula tiroides</li>
        <li>Tratamiento con yodo radiactivo</li>
        <li>Deficiencia de yodo en la dieta</li>
        <li>Algunos medicamentos</li>
        <li>Problemas en la glándula pituitaria</li>

      </ul>


      <p className="fxh-subtitle">📋 Síntomas</p>

      <ul className="fxh-list">

        <li>Fatiga o cansancio constante</li>
        <li>Aumento de peso</li>
        <li>Sensibilidad al frío</li>
        <li>Piel seca</li>
        <li>Caída del cabello</li>
        <li>Depresión o cambios de ánimo</li>
        <li>Estreñimiento</li>
        <li>Ritmo cardíaco lento</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Factores de riesgo</p>

      <ul className="fxh-list">

        <li>Ser mujer</li>
        <li>Edad mayor a 60 años</li>
        <li>Antecedentes familiares de enfermedad tiroidea</li>
        <li>Enfermedades autoinmunes</li>
        <li>Embarazo o posparto</li>

      </ul>


      <p className="fxh-subtitle">🧪 Diagnóstico</p>

      <ul className="fxh-list">

        <li>Evaluación clínica</li>
        <li>Análisis de sangre para medir TSH</li>
        <li>Medición de hormonas tiroideas (T3 y T4)</li>
        <li>Pruebas de anticuerpos tiroideos</li>

      </ul>


      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Tipo</th>
              <th>Tratamiento</th>
              <th>Objetivo</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Terapia hormonal</td>
              <td>Levotiroxina</td>
              <td>Reemplazar hormona tiroidea</td>
            </tr>

            <tr>
              <td>Control médico</td>
              <td>Análisis periódicos de TSH</td>
              <td>Ajustar dosis del medicamento</td>
            </tr>

            <tr>
              <td>Cambios en el estilo de vida</td>
              <td>Alimentación equilibrada</td>
              <td>Mejorar salud metabólica</td>
            </tr>

            <tr>
              <td>Seguimiento</td>
              <td>Control endocrinológico</td>
              <td>Evitar complicaciones</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Prevención</p>

      <ul className="fxh-list">

        <li>Consumir suficiente yodo en la dieta</li>
        <li>Realizar controles médicos periódicos</li>
        <li>Detectar y tratar enfermedades tiroideas tempranamente</li>
        <li>Mantener un estilo de vida saludable</li>
        <li>Seguir las indicaciones médicas en tratamientos tiroideos</li>

      </ul>

    </div>

  );

}

export default Hipotiroidismo;