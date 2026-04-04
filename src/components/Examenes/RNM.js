import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RNM.css';

function RNM() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail244">

      <p className="fxh-title">Resonancia Nuclear Magnética (RNM)</p>

      <div className="fxh-image-wrapper">
        <img
          src="https://privaclinic.com/wp-content/uploads/2022/03/privaclinic-resonancia-magnetica-en-hospitalet.jpg"
          alt="Resonancia Magnética"
          className="fxh-image"
        />
      </div>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>Resonancia Nuclear Magnética (RNM)</strong>, también llamada Imagen
        por Resonancia Magnética (IRM), es una técnica de diagnóstico por imágenes
        que utiliza campos magnéticos y ondas de radio para generar imágenes
        detalladas de órganos y tejidos del cuerpo.
      </p>

      <p className="fxh-text">
        Es especialmente útil para estudiar el cerebro, la columna vertebral,
        las articulaciones y los tejidos blandos. A diferencia de técnicas como la
        <Link to="/examenes/tc"> Tomografía Computarizada </Link>
        o la
        <Link to="/examenes/radiografia"> Radiografía </Link>,
        la RNM no utiliza radiación ionizante.
      </p>

      <p className="fxh-subsubtitle">📜 Historia de la Resonancia Magnética</p>

      <ul className="fxh-list">
        <li><strong>1938:</strong> Isidor Rabi describe la resonancia magnética nuclear.</li>
        <li><strong>1946:</strong> Bloch y Purcell demuestran el fenómeno experimentalmente.</li>
        <li><strong>1980:</strong> Primeros escáneres clínicos de RNM.</li>
        <li><strong>Actualidad:</strong> Equipos de alto campo y resonancia funcional (fMRI).</li>
      </ul>

      <p className="fxh-subtitle">🔍 ¿Cómo Funciona la RNM?</p>

      <p className="fxh-text">
        La RNM se basa en las propiedades magnéticas de los átomos de hidrógeno
        presentes en el agua y las grasas del cuerpo.
      </p>

      <ul className="fxh-list">
        <li><strong>Campo magnético:</strong> alinea los protones de hidrógeno.</li>
        <li><strong>Ondas de radio:</strong> alteran la alineación de los protones.</li>
        <li><strong>Señales:</strong> los protones emiten energía al volver a su estado inicial.</li>
        <li><strong>Reconstrucción:</strong> el computador genera imágenes 2D o 3D.</li>
      </ul>

      <p className="fxh-subtitle">🏥 Usos y Aplicaciones</p>

      <p className="fxh-text"><strong>1. Neurología</strong></p>

      <ul className="fxh-list">
        <li><Link to="/ecnt/acv">Accidente Cerebrovascular (ACV)</Link></li>
        <li>Tumores cerebrales</li>
        <li>Esclerosis múltiple</li>
        <li>Hernias discales</li>
      </ul>

      <p className="fxh-text"><strong>2. Cardiología</strong></p>

      <ul className="fxh-list">
        <li>Malformaciones cardíacas</li>
        <li><Link to="/ecnt/iam">Infarto Agudo de Miocardio (IAM)</Link></li>
        <li>Evaluación de función cardíaca</li>
      </ul>

      <p className="fxh-text"><strong>3. Oncología</strong></p>

      <ul className="fxh-list">
        <li>Detección de tumores</li>
        <li>Seguimiento de tratamientos</li>
      </ul>

      <p className="fxh-text"><strong>4. Traumatología</strong></p>

      <ul className="fxh-list">
        <li>Lesiones de ligamentos</li>
        <li>Artritis y daño articular</li>
      </ul>

      <p className="fxh-text"><strong>5. Abdomen y Pelvis</strong></p>

      <ul className="fxh-list">
        <li>Tumores hepáticos</li>
        <li>Enfermedades intestinales inflamatorias</li>
      </ul>

      <p className="fxh-subtitle">✅ Ventajas</p>

      <ul className="fxh-list">
        <li>No utiliza radiación ionizante</li>
        <li>Excelente resolución en tejidos blandos</li>
        <li>Permite estudios funcionales del cerebro</li>
      </ul>

      <p className="fxh-subtitle">❌ Desventajas</p>

      <ul className="fxh-list">
        <li>
          Mayor costo que
          <Link to="/examenes/tc"> TC </Link>
          o
          <Link to="/examenes/radiografia"> radiografía </Link>
        </li>

        <li>Duración prolongada del examen</li>

        <li>Puede causar incomodidad en espacios cerrados</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Contraindicaciones</p>

      <ul className="fxh-list">
        <li>Marcapasos o implantes metálicos</li>
        <li>Claustrofobia severa</li>
        <li>Primer trimestre del embarazo</li>
      </ul>

      <p className="fxh-subtitle">📌 Conclusión</p>

      <p className="fxh-text">
        La <strong>Resonancia Nuclear Magnética</strong> es una de las técnicas
        más avanzadas de diagnóstico médico. Su capacidad para generar imágenes
        detalladas sin utilizar radiación la convierte en una herramienta
        fundamental en neurología, oncología y traumatología.
      </p>

    </div>
  );
}

export default RNM;