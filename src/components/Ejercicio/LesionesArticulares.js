import React, { useEffect } from 'react';
import NavBarLesArt from './NavBarLesArt';
import './LesionesArticulares.css';
import { Link } from 'react-router-dom';

function LesionesArticulares() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lesiones-container">
      <NavBarLesArt />

      <p className="title-main">Lesiones Articulares Comunes</p>

      <p className="title-section3">📌 Introducción</p>
      <p className="text-body">
        Las lesiones articulares afectan al <strong>20–30%</strong> de la población adulta y son una causa mayor de discapacidad.
        Involucran cartílago, membrana sinovial y cápsula articular. El diagnóstico precoz previene daño irreversible.
      </p>

      <p className="title-subsection3">📌 <Link to="/ecnt/artrosis " > Artrosis (Osteoartrosis)  </Link></p>
      <p className="text-body">
        Afecta al <strong>40%</strong> de mayores de 70 años. Se caracteriza por pérdida progresiva de cartílago con formación
        de osteofitos. Rodilla y cadera son las más comprometidas.
      </p>

      <ul className="text-body">
        <li><strong>Grado I:</strong> Cambios dudosos</li>
        <li><strong>Grado II:</strong> Osteofitos definidos</li>
        <li><strong>Grado III:</strong> Estrechamiento moderado</li>
        <li><strong>Grado IV:</strong> Deformidad articular</li>
      </ul>

      <p className="title-subsection3">📌     <Link to="/ejercicio/lesiones/ar" > Artritis Reumatoidea  </Link>
    </p>
      <p className="text-body">
        Enfermedad autoinmune que afecta al <strong>1%</strong> de la población, con predominio femenino.
        Produce sinovitis crónica y destrucción articular.
      </p>

      <ul className="text-body">
        <li>Artritis clínica en ≥1 articulación</li>
        <li>FR y anti-CCP positivos</li>
        <li>Reactantes de fase aguda elevados</li>
        <li>Síntomas &gt; 6 semanas</li>
      </ul>

      <p className="title-subsection3">📌 <Link to="/ejercicio/lesiones/gota" > Gota </Link>  </p>
      <p className="text-body">
        Provocada por depósito de cristales de urato. Afecta principalmente a la primera metatarsofalángica.
      </p>

      <ul className="text-body">
        <li>Artrocentesis diagnóstica</li>
        <li>Dolor máximo en 24 h</li>
        <li>Eritema y calor local</li>
      </ul>

      <p className="title-section3">📌 Diagnóstico por Imagen</p>
      <table className="styled-table3">
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

      <p className="title-section3">📌 Manejo por Tipo de Lesión</p>
      <table className="styled-table3">
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

      <p className="title-section3">🌱 Prevención</p>
      <ul className="text-body">
        <li>Control de peso</li>
        <li>Ejercicio de bajo impacto</li>
        <li>Diagnóstico precoz</li>
        <li>Hidratación adecuada</li>
      </ul>

      <p className="title-section3">📌 Conclusión</p>
      <p className="text-body">
        El abordaje integral de las lesiones articulares combina tratamiento farmacológico,
        ejercicio terapéutico y cambios de estilo de vida. La intervención temprana mejora
        significativamente el pronóstico funcional.
      </p>
    </div>
  );
}

export default LesionesArticulares;
