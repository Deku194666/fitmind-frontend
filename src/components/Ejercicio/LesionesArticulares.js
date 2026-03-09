import React, { useEffect } from 'react';
import NavBarLesArt from './NavBarLesArt';
import './LesionesArticulares.css';

function LesionesArticulares() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="fxa-detail">

      <NavBarLesArt />

      <h1 className="fxa-title">Lesiones Articulares Comunes</h1>

      <h2 className="fxa-subtitle">📌 Introducción</h2>
      <p className="fxa-text">
        Las lesiones articulares afectan al <strong>20–30%</strong> de la población adulta y son una causa mayor de discapacidad.
        Involucran cartílago, membrana sinovial y cápsula articular. El diagnóstico precoz previene daño irreversible.
      </p>

      <h3 className="fxa-subsubtitle">📌 Artrosis (Osteoartrosis)</h3>
      <p className="fxa-text">
        Afecta al <strong>40%</strong> de mayores de 70 años. Se caracteriza por pérdida progresiva de cartílago con formación
        de osteofitos. Rodilla y cadera son las más comprometidas.
      </p>
      <ul className="fxa-list">
        <li><strong>Grado I:</strong> Cambios dudosos</li>
        <li><strong>Grado II:</strong> Osteofitos definidos</li>
        <li><strong>Grado III:</strong> Estrechamiento moderado</li>
        <li><strong>Grado IV:</strong> Deformidad articular</li>
      </ul>

      <h3 className="fxa-subsubtitle">📌 Artritis Reumatoidea</h3>
      <p className="fxa-text">
        Enfermedad autoinmune que afecta al <strong>1%</strong> de la población, con predominio femenino.
        Produce sinovitis crónica y destrucción articular.
      </p>
      <ul className="fxa-list">
        <li>Artritis clínica en ≥1 articulación</li>
        <li>FR y anti-CCP positivos</li>
        <li>Reactantes de fase aguda elevados</li>
        <li>Síntomas &gt; 6 semanas</li>
      </ul>

      <h3 className="fxa-subsubtitle">📌 Gota</h3>
      <p className="fxa-text">
        Provocada por depósito de cristales de urato. Afecta principalmente a la primera metatarsofalángica.
      </p>
      <ul className="fxa-list">
        <li>Artrocentesis diagnóstica</li>
        <li>Dolor máximo en 24 h</li>
        <li>Eritema y calor local</li>
      </ul>

      <h2 className="fxa-subtitle">📊 Diagnóstico por Imagen</h2>
      <div className="fxa-table-wrapper">
        <table className="fxa-table">
          <thead>
            <tr>
              <th>Modalidad</th>
              <th>Aplicación</th>
              <th>Hallazgos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Radiografía</td>
              <td>Evaluación inicial</td>
              <td>Osteofitos, estrechamiento</td>
            </tr>
            <tr>
              <td>RMN</td>
              <td>Tejidos blandos</td>
              <td>Edema óseo, cartílago</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Evaluación dinámica</td>
              <td>Sinovitis, derrame</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxa-subtitle">📊 Manejo por Tipo de Lesión</h2>
      <div className="fxa-table-wrapper">
        <table className="fxa-table">
          <thead>
            <tr>
              <th>Condición</th>
              <th>Tratamiento</th>
              <th>Eficacia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Artrosis temprana</td>
              <td>Ejercicio + control de peso</td>
              <td>60% mejoría</td>
            </tr>
            <tr>
              <td>Artritis reumatoide</td>
              <td>FAME + biológicos</td>
              <td>70–80% respuesta</td>
            </tr>
            <tr>
              <td>Gota aguda</td>
              <td>AINEs / colchicina</td>
              <td>90% resolución</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxa-subtitle">🌱 Prevención</h2>
      <ul className="fxa-list">
        <li>Control de peso</li>
        <li>Ejercicio de bajo impacto</li>
        <li>Diagnóstico precoz</li>
        <li>Hidratación adecuada</li>
      </ul>

      <h2 className="fxa-subtitle">📌 Conclusión</h2>
      <p className="fxa-text">
        El abordaje integral de las lesiones articulares combina tratamiento farmacológico,
        ejercicio terapéutico y cambios de estilo de vida. La intervención temprana mejora
        significativamente el pronóstico funcional.
      </p>

    </div>
  );
}

export default LesionesArticulares;
