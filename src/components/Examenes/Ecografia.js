import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Ecografia.css';

function Ecografia() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail242">

      <p className="fxh-title">Ecografía (Ultrasonido)</p>

      <div className="fxh-image-wrapper">
        <img
          src="https://www.drgdiaz.com/eco/ecografia/ecografo.jpg"
          alt="Ecografía"
          className="fxh-image"
        />
      </div>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>Ecografía</strong> (también llamada ultrasonografía o sonografía) es una técnica de diagnóstico
        por imagen no invasiva que utiliza ondas sonoras de alta frecuencia para visualizar estructuras internas
        del cuerpo en tiempo real. Es ampliamente utilizada en obstetricia, cardiología, abdomen y emergencias,
        destacando por su ausencia de radiación ionizante.
      </p>

      <p className="fxh-subsubtitle">📜 Historia de la Ecografía</p>

      <ul className="fxh-list">
        <li><strong>1794:</strong> Lazzaro Spallanzani estudia la ecolocalización en murciélagos.</li>
        <li><strong>1940-1950:</strong> Desarrollo de aplicaciones médicas.</li>
        <li><strong>1958:</strong> Primer ecógrafo comercial.</li>
        <li><strong>1960-1970:</strong> Desarrollo del modo B (imágenes 2D).</li>
        <li><strong>1980-presente:</strong> Doppler, ecografía 3D y 4D.</li>
      </ul>

      <p className="fxh-subtitle">🔍 ¿Cómo Funciona?</p>

      <p className="fxh-text"><strong>1) Emisión de ultrasonidos:</strong> un transductor emite ondas sonoras de alta frecuencia.</p>

      <p className="fxh-text"><strong>2) Reflexión:</strong> los ecos rebotan según la densidad del tejido.</p>

      <p className="fxh-text"><strong>3) Procesamiento:</strong> el equipo convierte los ecos en imágenes.</p>

      <p className="fxh-text"><strong>4) Modos principales:</strong></p>

      <ul className="fxh-list">
        <li><strong>Modo B:</strong> imágenes anatómicas en 2D.</li>
        <li><strong>Doppler:</strong> análisis del flujo sanguíneo.</li>
      </ul>

      <p className="fxh-subtitle">🏥 Usos y Aplicaciones</p>

      <p className="fxh-text"><strong>1. Obstetricia y Ginecología</strong></p>
      <ul className="fxh-list">
        <li>Control prenatal</li>
        <li>Embarazo ectópico</li>
        <li>Evaluación de ovarios y útero</li>
      </ul>

      <p className="fxh-text"><strong>2. Abdomen</strong></p>
      <ul className="fxh-list">
        <li>Hígado y vesícula biliar</li>
        <li>Riñones</li>
        <li>Páncreas y bazo</li>
      </ul>

      <p className="fxh-text">
        <strong>3. Cardiología</strong>
        <Link to="/examenes/ecg"> (Ecocardiograma)</Link>
      </p>

      <ul className="fxh-list">
        <li>Evaluación de función cardíaca</li>
        <li><Link to="/ecnt/valvulopatias">Valvulopatías</Link>  </li>  
        <li>Derrame pericárdico</li>
      </ul>

      <p className="fxh-text"><strong>4. Partes blandas</strong></p>

      <ul className="fxh-list">
        <li>Tiroides</li>
        <li>Mamas</li>
        <li>Músculos y tendones</li>
      </ul>

      <p className="fxh-text"><strong>5. Procedimientos guiados</strong></p>

      <ul className="fxh-list">
        <li>Biopsias</li>
        <li>Drenaje de abscesos</li>
        <li>Bloqueos nerviosos</li>
      </ul>

      <p className="fxh-subtitle">✅ Ventajas</p>

      <ul className="fxh-list">
        <li><strong>Segura:</strong> sin radiación</li>
        <li><strong>Tiempo real:</strong> permite ver movimiento</li>
        <li><strong>Portátil:</strong> equipos móviles</li>
        <li>Económica</li>
      </ul>

      <p className="fxh-subtitle">❌ Desventajas</p>

      <ul className="fxh-list">
        <li>
          Resolución menor que
          <Link to="/examenes/tc"> Tomografía Computarizada </Link>
          o
          <Link to="/examenes/rnm"> Resonancia Magnética </Link>
        </li>

        <li>Artefactos por gas intestinal o calcificaciones</li>
      </ul>

      <p className="fxh-subtitle">📌 Conclusión</p>

      <p className="fxh-text">
        La <strong>ecografía</strong> es una herramienta diagnóstica fundamental en medicina moderna por su
        seguridad, accesibilidad y capacidad de visualizar estructuras en tiempo real. Sus aplicaciones en
        obstetricia, emergencias y procedimientos guiados la convierten en una de las técnicas de imagen
        más utilizadas en el mundo.
      </p>

    </div>
  );
}

export default Ecografia;