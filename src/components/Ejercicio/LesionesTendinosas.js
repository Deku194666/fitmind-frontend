import React, { useEffect } from 'react';
import NavBarLesTendones from './NavBarLesTendones';
import NavBarTendones from './NavBarTendones';
import './LesionesTendinosas.css';

function LesionesTendinosas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lesiones-container0">

      <NavBarLesTendones />
      <NavBarTendones />

      <p className="title-main">Lesiones Tendinosas Comunes</p>

      <p className="title-section4">📌 Introducción</p>
      <p className="text-body">
        Las lesiones tendinosas afectan al <strong>11–30%</strong> de los adultos activos y son una causa frecuente
        de dolor musculoesquelético. Pueden presentarse como procesos agudos (tendinitis) o crónicos (tendinosis),
        siendo clave un diagnóstico oportuno para evitar roturas completas.
      </p>

      <p className="title-subsection4">📌 Tendinitis (Inflamación Aguda)</p>
      <p className="text-body">
        Frecuente en deportistas y personas con movimientos repetitivos. Afecta principalmente al tendón de Aquiles
        y al tendón rotuliano, cursando con dolor localizado, inflamación y edema.
      </p>

      <ul className="text-body">
        <li><strong>Grado 1:</strong> Dolor solo después de la actividad</li>
        <li><strong>Grado 2:</strong> Dolor durante y después</li>
        <li><strong>Grado 3:</strong> Dolor que limita la actividad</li>
        <li><strong>Grado 4:</strong> Dolor incluso en reposo</li>
      </ul>

      <p className="title-subsection4">📌 Tendinosis (Degeneración Crónica)</p>
      <p className="text-body">
        Proceso degenerativo no inflamatorio, frecuente en mayores de 40 años. Se caracteriza por desorganización
        del colágeno, neovascularización patológica y disminución de la resistencia del tendón.
      </p>

      <ul className="text-body">
        <li>Desorganización de fibras de colágeno</li>
        <li>Aumento de sustancia fundamental</li>
        <li>Neovascularización patológica</li>
        <li>Ausencia de inflamación</li>
      </ul>

      <p className="title-subsection4">📌 Roturas Tendinosas</p>
      <p className="text-body">
        Pueden ser parciales o completas, con mayor incidencia en el tendón de Aquiles.
        Factores de riesgo incluyen edad, uso de corticoides y enfermedades sistémicas.
      </p>

      <p className="title-section4">📌 Técnicas de Diagnóstico</p>
      <table className="styled-table4">
        <thead>
          <tr>
            <th>Modalidad</th>
            <th>Aplicación</th>
            <th>Hallazgos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ecografía</td>
            <td>Evaluación inicial</td>
            <td>Engrosamiento y roturas</td>
          </tr>
          <tr>
            <td>RMN</td>
            <td>Evaluación avanzada</td>
            <td>Degeneración y edema</td>
          </tr>
          <tr>
            <td>Radiografía</td>
            <td>Evaluación ósea</td>
            <td>Calcificaciones</td>
          </tr>
        </tbody>
      </table>

      <p className="title-section4">🌱 Prevención</p>
      <ul className="text-body">
        <li><strong>Calentamiento adecuado</strong></li>
        <li><strong>Carga progresiva</strong></li>
        <li><strong>Ejercicios excéntricos</strong></li>
        <li><strong>Nutrición adecuada</strong></li>
      </ul>

      <p className="title-section4">📌 Conclusión</p>
      <p className="text-body">
        El tratamiento de las lesiones tendinosas depende de su fase y gravedad. Mientras la tendinitis responde bien
        al reposo relativo, la tendinosis requiere carga progresiva. La prevención es clave para evitar roturas.
      </p>

    </div>
  );
}

export default LesionesTendinosas;
