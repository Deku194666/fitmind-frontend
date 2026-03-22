


import React, { useEffect } from 'react';
import './Hipertiroidismo.css';
import { Link } from 'react-router-dom';


function Hipertiroidismo() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail277">

      <p className="fxh-title">🦋 Hipertiroidismo</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>hipertiroidismo</strong> es una enfermedad en la que la
        <strong>glándula tiroides</strong> produce una cantidad excesiva
        de hormonas tiroideas. Estas hormonas regulan el metabolismo
        del cuerpo.
      </p>

      <p className="fxh-text">
        Cuando hay un exceso de estas hormonas, el metabolismo se acelera,
        lo que puede provocar diferentes síntomas que afectan a
        varios sistemas del organismo.
      </p>


      <p className="fxh-subtitle">📋 Síntomas</p>

      <ul className="fxh-list">

        <li>Pérdida de peso inexplicada</li>
        <li>Palpitaciones</li>
        <li>Nerviosismo o ansiedad</li>
        <li>Sudoración excesiva</li>
        <li>Temblor en las manos</li>
        <li>Dificultad para dormir</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Causas</p>

      <ul className="fxh-list">

        <li>Enfermedad de Graves</li>
        <li>Nódulos tiroideos hiperactivos</li>
        <li>Inflamación de la tiroides (tiroiditis)</li>
        <li>Exceso de yodo</li>
        <li>Uso excesivo de hormonas tiroideas</li>

      </ul>


      <p className="fxh-subtitle">🧪 Diagnóstico</p>

      <ul className="fxh-list">

        <li>Análisis de sangre (TSH, T3 y T4)</li>
        <li>Ecografía tiroidea</li>
        <li>Gammagrafía tiroidea</li>
        <li>Evaluación clínica</li>

      </ul>


      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Tratamiento</th>
              <th>Tipo</th>
              <th>Objetivo</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Antitiroideos</td>
              <td>Medicamentos</td>
              <td>Reducir producción hormonal</td>
            </tr>

            <tr>
              <td>Yodo radiactivo</td>
              <td>Terapia</td>
              <td>Disminuir actividad tiroidea</td>
            </tr>

            <tr>
              <td>Betabloqueadores</td>
              <td>Medicamentos</td>
              <td>Controlar síntomas</td>
            </tr>

            <tr>
              <td>Cirugía tiroidea</td>
              <td>Procedimiento</td>
              <td>Eliminar parte de la tiroides</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Prevención y control</p>

      <ul className="fxh-list">

        <li>Controles médicos periódicos</li>
        <li>Seguimiento endocrinológico</li>
        <li>Evitar exceso de yodo</li>
        <li>Controlar tratamiento médico</li>
        <li>Realizar análisis de sangre regularmente</li>

      </ul>

    </div>

  );

}

export default Hipertiroidismo;
