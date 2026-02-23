import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DolorNeuropatico.css';

function DolorNeuropatico() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <p className="fxh-title">Fármacos para Dolor Neuropático</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        El <strong>Dolor Neuropático</strong> es aquel que se origina como consecuencia directa
        de una lesión o enfermedad que afecta el sistema somatosensorial. Es común en patologías
        como neuropatía diabética, neuralgia postherpética, radiculopatías o lesiones medulares.
      </p>

      <p className="fxh-subtitle">🎯 Objetivos del Tratamiento</p>
      <ul className="fxh-list">
        <li>Reducir la intensidad del dolor.</li>
        <li>Mejorar la funcionalidad y calidad de vida.</li>
        <li>Prevenir la cronificación del dolor.</li>
      </ul>

      <p className="fxh-subtitle">💊 Fármacos de Primera Línea</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Ejemplos</th>
              <th>Observaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Antiepilépticos</td>
              <td>Gabapentina, Pregabalina</td>
              <td>Modulan canales de calcio, reducen hiperexcitabilidad neuronal</td>
            </tr>
            <tr>
              <td>Antidepresivos tricíclicos (ATC)</td>
              <td>Amitriptilina, Nortriptilina</td>
              <td>Inhiben recaptación de serotonina y noradrenalina</td>
            </tr>
            <tr>
              <td>ISRSN</td>
              <td>Duloxetina, Venlafaxina</td>
              <td>Alternativa a ATC con mejor tolerabilidad</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💊 Fármacos de Segunda Línea</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Clase</th>
              <th>Ejemplos</th>
              <th>Consideraciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Opioides débiles</td>
              <td>Tramadol, Tapentadol</td>
              <td>Reservados para casos resistentes, riesgo de dependencia</td>
            </tr>
            <tr>
              <td>Lidocaína tópica</td>
              <td>Parche de lidocaína al 5%</td>
              <td>Útil en áreas localizadas (ej. neuralgia postherpética)</td>
            </tr>
            <tr>
              <td>Capsaicina tópica</td>
              <td>Parches de capsaicina al 8%</td>
              <td>Desensibiliza fibras nociceptivas periféricas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">⚠️ Consideraciones Terapéuticas</p>
      <ul className="fxh-list">
        <li>Evaluar comorbilidades psiquiátricas como ansiedad y depresión.</li>
        <li>Evitar monoterapia prolongada si no hay respuesta; considerar combinación racional.</li>
        <li>Monitorizar efectos adversos y adherencia al tratamiento.</li>
        <li>
          Educar al paciente sobre el carácter crónico del dolor neuropático
          y la importancia del enfoque multidisciplinario.
        </li>
      </ul>

      <p className="fxh-subtitle">📚 Recomendaciones Generales</p>
      <ul className="fxh-list">
        <li>Comenzar con dosis bajas y titular lentamente según tolerancia.</li>
        <li>Evaluar respuesta clínica a las 4–6 semanas de tratamiento.</li>
        <li>
          Complementar con terapias no farmacológicas: fisioterapia,
          terapia cognitivo-conductual, estimulación.
        </li>
      </ul>

    </div>
  );
}

export default DolorNeuropatico;
