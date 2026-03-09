

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RadiculopatiaLumbar.css';

function RadiculopatiaLumbar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail39">
      <p className="fxh-title">Radiculopatía Lumbar</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        La radiculopatía lumbar afecta aproximadamente al <strong>3-5% de la población</strong>, siendo una de las causas más comunes de dolor lumbar irradiado. 
        El 90% de los casos ocurren en los niveles <strong>L4-L5 y L5-S1</strong>. 
        Es más frecuente entre los 30-50 años y tiene un impacto significativo en la capacidad laboral.
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Raíces lumbares</strong>: Desde L1 hasta S1, formando el plexo lumbosacro</li>
        <li><strong>Puntos críticos</strong>: Receso lateral y foramen intervertebral</li>
        <li><strong>Relaciones anatómicas</strong>: Nervio ciático (L4-S3) y cauda equina</li>
      </ul>

      <p className="fxh-subtitle">Etiología y Factores de Riesgo 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Causa</th>
              <th>Frecuencia</th>
              <th>Mecanismo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Hernia discal</strong></td>
              <td>75% casos agudos</td>
              <td>Compresión por núcleo pulposo</td>
            </tr>
            <tr>
              <td><strong>Estenosis foraminal</strong></td>
              <td>60% casos crónicos</td>
              <td>Hipertrofia facetaria / osteofitos</td>
            </tr>
            <tr>
              <td><strong>Síndrome facetario</strong></td>
              <td>15-30%</td>
              <td>Inflamación articular</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Niveles Afectados y Manifestaciones Clínicas 🩺</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Nivel</th>
              <th>Déficit Motor</th>
              <th>Déficit Sensitivo</th>
              <th>Reflejo Afectado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>L3-L4</strong></td>
              <td>Cuádriceps</td>
              <td>Cara anterior muslo</td>
              <td>Patelar</td>
            </tr>
            <tr>
              <td><strong>L4-L5</strong></td>
              <td>Extensor dedo gordo</td>
              <td>Cara lateral pierna</td>
              <td>No específico</td>
            </tr>
            <tr>
              <td><strong>L5-S1</strong></td>
              <td>Gastrocnemio</td>
              <td>Cara posterior pierna</td>
              <td>Aquiliano</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Diagnóstico 🔍</p>
      <p className="fxh-subsubtitle">1. Examen Físico</p>
      <ul className="fxh-list">
        <li><strong>Lasègue</strong>: Sensibilidad 91% para hernia discal</li>
        <li><strong>Bragard</strong>: Aumenta especificidad</li>
        <li><strong>Examen neurológico focal</strong></li>
        <li><strong>Signo de Waddell</strong></li>
      </ul>

      <p className="fxh-subsubtitle">2. Estudios de Imagen</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/examenes/rx">Radiografía</Link></td>
              <td>Alteraciones estructurales</td>
              <td>Primera línea</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Hernias discales, compresión nerviosa</td>
              <td>Gold standard</td>
            </tr>
            <tr>
              <td>EMG/NCV</td>
              <td>Compresión radicular</td>
              <td>Confirmación nivel afectado</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>
      <ul className="fxh-list">
        <li>AINEs y reposo relativo breve</li>
        <li>Terapia física (McKenzie)</li>
        <li>Fortalecimiento de core</li>
        <li>Infiltraciones epidurales en casos seleccionados</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>
      <ul className="fxh-list">
        <li>Síndrome de cauda equina (urgencia)</li>
        <li>Déficit neurológico progresivo</li>
        <li>Falla tratamiento conservador</li>
        <li><strong>Discectomía lumbar</strong> (éxito 85-90%)</li>
        <li>Laminectomía / foraminotomía</li>
        <li>Fusión lumbar en inestabilidad</li>
      </ul>

      <p className="fxh-subtitle">Rehabilitación y Pronóstico 🏋️‍♂️</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Aspecto</th>
              <th>Expectativa</th>
              <th>Tiempo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alivio dolor</td>
              <td>80% casos conservadores</td>
              <td>4-8 semanas</td>
            </tr>
            <tr>
              <td>Recuperación motora</td>
              <td>Buena si precoz</td>
              <td>3-12 meses</td>
            </tr>
            <tr>
              <td>Reincorporación laboral</td>
              <td>85%</td>
              <td>2-6 semanas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Prevención 🛡️</p>
      <ul className="fxh-list">
        <li>Mecánica corporal adecuada</li>
        <li>Fortalecimiento core</li>
        <li>Control de peso</li>
        <li>Ejercicio regular</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        La radiculopatía lumbar tiene excelente pronóstico con manejo conservador en la mayoría de casos. 
        La cirugía está indicada en déficits progresivos o síndrome de cauda equina. 
        La prevención mediante fortalecimiento y buena mecánica corporal reduce recurrencias.
      </p>
    </div>
  );
}

export default RadiculopatiaLumbar;
