import React, { useEffect } from 'react';
import NavBarLesMusc from './NavBarLesMusc';
import './LesionesMusculares.css';
import { Link } from 'react-router-dom';


function LesMusc() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lesiones-container">
      <NavBarLesMusc />

      <p className="title-main">Lesiones Musculares Comunes</p>

      <p className="title-section1">📌 Introducción</p>
      <p className="text-body">
        Las lesiones musculares representan entre el <strong>30–50%</strong> de todas las lesiones deportivas y también son frecuentes
        en actividades cotidianas. Su correcta identificación y manejo son cruciales para una recuperación óptima.
      </p>

      <p className="title-subsection1">📌 <Link to="/ejercicio/lesiones/desgarros" > Desgarros  Musculares </Link> </p>
      <p className="text-body">
        Ocurren cuando las fibras musculares se estiran más allá de su capacidad, rompiéndose parcial o totalmente. Los músculos más
        afectados son isquiotibiales, gemelos y cuádriceps.
      </p>

      <p className="title-subsection1">📌 <Link to="/ejercicio/lesiones/contusion" > Contusiones Musculares </Link></p>
      <p className="text-body">
        Se producen por impacto directo, causando daño vascular y hematomas. En casos graves pueden evolucionar a miositis osificante.
      </p>

      <p className="title-subsection1">📌 Distensiones y Sobrecargas</p>
      <p className="text-body">
        Microlesiones por elongación excesiva sin rotura completa. Son frecuentes por sobreuso o mala preparación física.
      </p>

      <p className="title-section1">📌 Técnicas de Recuperación</p>
      <table className="styled-table1">
        <thead>
          <tr>
            <th>Técnica</th>
            <th>Aplicación</th>
            <th>Beneficio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vendaje neuromuscular</td>
            <td>Soporte específico</td>
            <td>Drenaje y estabilidad</td>
          </tr>
          <tr>
            <td>Punción seca</td>
            <td>Puntos gatillo</td>
            <td>Liberación de tensión</td>
          </tr>
          <tr>
            <td>EPI</td>
            <td>Lesiones crónicas</td>
            <td>Regeneración tisular</td>
          </tr>
        </tbody>
      </table>

      <p className="title-section1">🌱 Prevención</p>
      <ul className="text-body">
        <li><strong>Calentamiento adecuado</strong> antes del ejercicio</li>
        <li><strong>Hidratación y nutrición</strong> correctas</li>
        <li><strong>Ejercicio progresivo</strong> y descanso</li>
      </ul>

      <p className="title-section1">📌 Conclusión</p>
      <p className="text-body">
        El manejo adecuado de las lesiones musculares reduce complicaciones y recidivas. La rehabilitación progresiva y personalizada
        es clave para una recuperación segura.
      </p>
    </div>
  );
}

export default LesMusc;
