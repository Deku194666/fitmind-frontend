import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Radiografia.css';

function Radiografia() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail241">

      <p className="fxh-title">Radiografía (RX)</p>

      <div className="fxh-image-wrapper">
        <img 
        src="https://i.blogs.es/4e7a0c/xray/1366_2000.jpg"
        alt="Radiografía"
        className="fxh-image"
        />
      </div>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
      La <strong>Radiografía</strong> convencional es una de las técnicas de diagnóstico por imagen más antiguas
      y ampliamente utilizadas en medicina. Mediante el uso de rayos X permite visualizar estructuras internas
      del cuerpo, especialmente huesos y algunos tejidos blandos, de forma rápida y no invasiva.
      Sigue siendo fundamental en el diagnóstico inicial de fracturas, infecciones pulmonares y muchas otras
      condiciones médicas.
      </p>

      <p className="fxh-text">
      A la derecha se observa la primera <strong>radiografía</strong> tomada por Wilhelm Röntgen a la mano de su
      esposa en 1895.
      </p>

      <p className="fxh-subsubtitle">📜 Historia de la Radiografía</p>

      <ul className="fxh-list">
        <li><strong>1895:</strong> Wilhelm Conrad Röntgen descubre los rayos X.</li>
        <li><strong>1896:</strong> Primera radiografía médica.</li>
        <li><strong>Siglo XX:</strong> Expansión del uso en medicina.</li>
        <li><strong>1950-1980:</strong> Desarrollo de técnicas con contraste.</li>
        <li><strong>1990-Presente:</strong> Transición a radiografía digital.</li>
      </ul>

      <p className="fxh-subtitle">🔍 ¿Cómo Funciona?</p>

      <p className="fxh-text"><strong>1) Generación de rayos X:</strong> un tubo produce radiación ionizante.</p>

      <p className="fxh-text"><strong>2) Paso a través del cuerpo:</strong> los tejidos absorben radiación según su densidad.</p>

      <ul className="fxh-list">
        <li><strong>Hueso:</strong> alta absorción (blanco)</li>
        <li><strong>Tejidos blandos:</strong> absorción intermedia (gris)</li>
        <li><strong>Aire:</strong> baja absorción (negro)</li>
      </ul>

      <p className="fxh-text"><strong>3) Captura de la imagen:</strong></p>

      <ul className="fxh-list">
        <li><strong>Radiografía analógica:</strong> película.</li>
        <li><strong>Radiografía digital:</strong> detectores electrónicos.</li>
      </ul>

      <p className="fxh-subtitle">🏥 Usos Principales</p>

      <p className="fxh-text"><strong>1. Traumatología</strong></p>
      <ul className="fxh-list">
        <li>Fracturas</li>
        <li>Luxaciones</li>
        <li>Cuerpos extraños</li>
      </ul>

      <p className="fxh-text"><strong>2. Neumología</strong></p>
      <ul className="fxh-list">
        <li>Neumonía</li>
        <li>Tuberculosis</li>
        <li>Neumotórax</li>
      </ul>

      <p className="fxh-text"><strong>3. Odontología</strong></p>
      <ul className="fxh-list">
        <li>Caries</li>
        <li>Infecciones dentales</li>
        <li>Planificación de implantes</li>
      </ul>

      <p className="fxh-text"><strong>4. Abdomen</strong></p>
      <ul className="fxh-list">
        <li>Cálculos renales</li>
        <li>Obstrucción intestinal</li>
        <li>Perforaciones</li>
      </ul>

      <p className="fxh-subtitle">✅ Ventajas</p>

      <ul className="fxh-list">
        <li>Rápida (segundos-minutos)</li>
        <li>Disponible y económica</li>
        <li>Excelente para huesos</li>
      </ul>

      <p className="fxh-subtitle">❌ Desventajas</p>

      <ul className="fxh-list">
        <li>Radiación ionizante</li>
        <li>Limitada para tejidos blandos</li>
        <li>Imagen bidimensional</li>
      </ul>

      <p className="fxh-text">
      Para estudios más detallados se utilizan técnicas como la
      <Link to="/examenes/rnm"> Resonancia Nuclear Magnética </Link>
      o la
      <Link to="/examenes/tc"> Tomografía Computarizada </Link>.
      </p>

      <p className="fxh-subtitle">📌 Conclusión</p>

      <p className="fxh-text">
      La <strong>radiografía</strong> sigue siendo una herramienta fundamental en el diagnóstico médico,
      especialmente en urgencias y traumatología. Aunque existen técnicas más avanzadas, su rapidez,
      bajo costo y disponibilidad la mantienen como el primer estudio en muchos escenarios clínicos.
      </p>

    </div>
  );
}

export default Radiografia;