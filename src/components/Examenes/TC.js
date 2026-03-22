import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TC.css';

function TC() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail243">

      <p className="fxh-title">Tomografía Computarizada (TC)</p>

      <div className="fxh-image-wrapper">
        <img
          src="https://www.nibib.nih.gov/sites/default/files/inline-images/CT-Patient-400x276_0.jpg"
          alt="Tomografía Computarizada"
          className="fxh-image"
        />
      </div>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>Tomografía Computarizada (TC)</strong>, también conocida como escáner CT
        (Computed Tomography), es una técnica de diagnóstico por imagen que combina
        rayos X con procesamiento computarizado para generar imágenes transversales
        del cuerpo.
      </p>

      <p className="fxh-text">
        Ofrece mayor detalle que las radiografías convencionales y permite visualizar
        huesos, órganos internos, vasos sanguíneos y tejidos blandos con gran precisión.
        Es una herramienta esencial en emergencias, oncología y neurología.
      </p>

      <p className="fxh-subsubtitle">📜 Historia de la Tomografía Computarizada</p>

      <ul className="fxh-list">
        <li><strong>1967:</strong> Godfrey Hounsfield desarrolla el primer prototipo.</li>
        <li><strong>1971:</strong> Primera TC clínica en Londres.</li>
        <li><strong>1979:</strong> Hounsfield y Allan Cormack ganan el Premio Nobel.</li>
        <li><strong>1980-1990:</strong> Desarrollo de TC helicoidal.</li>
        <li><strong>2000-presente:</strong> TC multidetector y reconstrucciones 3D.</li>
      </ul>

      <p className="fxh-subtitle">🔍 ¿Cómo Funciona la TC?</p>

      <ul className="fxh-list">
        <li><strong>Rayos X rotatorios:</strong> el tubo gira alrededor del cuerpo.</li>
        <li><strong>Detectores:</strong> miden la absorción de radiación.</li>
        <li><strong>Reconstrucción computarizada:</strong> crea imágenes 2D o 3D.</li>
        <li><strong>Contraste:</strong> sustancias yodadas pueden mejorar la visualización.</li>
      </ul>

      <p className="fxh-subtitle">🏥 Usos y Aplicaciones</p>

      <p className="fxh-text"><strong>1. Neurología</strong></p>

      <ul className="fxh-list">
        <li><Link to="/ecnt/acv">Accidente Cerebrovascular</Link></li>
        <li>Tumores cerebrales</li>
        <li>Traumatismos craneoencefálicos</li>
      </ul>

      <p className="fxh-text"><strong>2. Emergencias</strong></p>

      <ul className="fxh-list">
        <li>Politraumatizados</li>
        <li>Hemorragias internas</li>
        <li>Fracturas complejas</li>
      </ul>

      <p className="fxh-text"><strong>3. Oncología</strong></p>

      <ul className="fxh-list">
        <li>Detección de cáncer</li>
        <li>Estadificación tumoral</li>
        <li>Guía para biopsias</li>
      </ul>

      <p className="fxh-text"><strong>4. Cardiología</strong></p>

      <ul className="fxh-list">
        <li>Angio-TC coronaria</li>
        <li>Calcio coronario</li>
      </ul>

      <p className="fxh-text"><strong>5. Abdomen y Pelvis</strong></p>

      <ul className="fxh-list">
        <li>Apendicitis</li>
        <li>Cálculos renales</li>
        <li>Aneurismas aórticos</li>
      </ul>

      <p className="fxh-subtitle">✅ Ventajas</p>

      <ul className="fxh-list">
        <li>Imágenes detalladas en pocos segundos</li>
        <li>Excelente para huesos y vasos sanguíneos</li>
        <li>Permite guiar procedimientos médicos</li>
      </ul>

      <p className="fxh-subtitle">❌ Desventajas</p>

      <ul className="fxh-list">
        <li>
          Mayor radiación que una
          <Link to="/examenes/radiografia"> radiografía </Link>
        </li>

        <li>Costo mayor</li>

        <li>Artefactos por implantes metálicos</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Contraindicaciones</p>

      <ul className="fxh-list">
        <li>Embarazo</li>
        <li>Alergia al contraste yodado</li>
        <li>Insuficiencia renal</li>
      </ul>

      <p className="fxh-subtitle">📌 Conclusión</p>

      <p className="fxh-text">
        La <strong>Tomografía Computarizada</strong> es una herramienta diagnóstica
        fundamental que combina velocidad y alta precisión. A pesar de la exposición
        a radiación, su valor en emergencias médicas, diagnóstico oncológico y
        planificación terapéutica la convierten en una técnica indispensable en la
        medicina moderna.
      </p>

    </div>
  );
}

export default TC;