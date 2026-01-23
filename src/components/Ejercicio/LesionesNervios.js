import React, { useEffect } from 'react';
import NavBarLesNervios from './NavBarLesNervios';
import './LesionesNervios.css';
import { Link } from 'react-router-dom';


function LesionesNervios() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lesiones-container">
      <NavBarLesNervios />

      <p className="title-main">Lesiones de Nervios Periféricos y Radiculopatías</p>

      <p className="title-section1">📌 Introducción</p>
      <p className="text-body">
        Las neuropatías periféricas afectan al <strong>5–10%</strong> de la población general,
        aumentando hasta un <strong>50%</strong> en pacientes diabéticos. Las radiculopatías
        cervicales y lumbares son causas frecuentes de dolor y discapacidad funcional.
      </p>

      <p className="title-subsection1">📌 Neuropatías Periféricas</p>
      <p className="text-body">
        Se producen por daño de nervios periféricos, siendo la diabetes la causa más frecuente.
        Pueden manifestarse como mononeuropatías o polineuropatías simétricas distales.
      </p>

      <p className="title-subsection1">📌 <Link to="/ejercicio/lesiones/radiculopatiacervical" > Radiculopatía Cervical </Link> </p>
      <p className="text-body">
        Ocurre por compresión de raíces nerviosas cervicales, generalmente por hernias discales
        o cambios degenerativos, provocando dolor irradiado a hombro y extremidad superior.
      </p>

      <p className="title-subsection1">📌 <Link to="/ejercicio/lesiones/radiculopatialumbar"> Radiculopatía Lumbar </Link>
   </p>
      <p className="text-body">
        Afecta principalmente los niveles L4–L5 y L5–S1. Produce dolor lumbar irradiado a
        extremidades inferiores, asociado a déficit sensitivo o motor.
      </p>

      <p className="title-section1">📌 Técnicas Diagnósticas</p>
      <table className="styled-table1">
        <thead>
          <tr>
            <th>Estudio</th>
            <th>Aplicación</th>
            <th>Hallazgos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EMG / NCV</td>
            <td>Función nerviosa</td>
            <td>Velocidad y amplitud</td>
          </tr>
          <tr>
            <td>RMN</td>
            <td>Evaluación estructural</td>
            <td>Compresión radicular</td>
          </tr>
          <tr>
            <td>Ecografía</td>
            <td>Nervios superficiales</td>
            <td>Engrosamiento nervioso</td>
          </tr>
        </tbody>
      </table>

      <p className="title-section1">🌱 Prevención</p>
      <ul className="text-body">
        <li><strong>Control metabólico</strong> adecuado en diabéticos</li>
        <li><strong>Ergonomía postural</strong> en trabajo y estudio</li>
        <li><strong>Ejercicio regular</strong> de fortalecimiento y movilidad</li>
      </ul>

      <p className="title-section1">📌 Conclusión</p>
      <p className="text-body">
        El diagnóstico precoz y el manejo conservador adecuado permiten una evolución favorable
        en la mayoría de las lesiones nerviosas periféricas y radiculopatías, evitando secuelas
        neurológicas permanentes.
      </p>
    </div>
  );
}

export default LesionesNervios;
