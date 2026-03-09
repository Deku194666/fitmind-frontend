import React, { useEffect } from 'react';
import NavBarMen from './NavBarMen';
import './EnfMentalComun.css';

function EnfMentalComun() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail8">
      
      <NavBarMen />

      <p className='fxh-title'>Trastornos Mentales Comunes</p>

      <p className='fxh-subtitle'>📌 Introducción</p>
      <p className='fxh-text'>
        El mundo de los trastornos del estado de ánimo es tan complejo como fascinante. 
        No son simples cambios de humor pasajeros, sino condiciones que alteran profundamente 
        la percepción de la realidad y la capacidad de funcionamiento diario. 
        Desde las explicaciones clásicas de los humores de Hipócrates hasta el entendimiento 
        moderno de los desequilibrios neuroquímicos, nuestra comprensión ha evolucionado significativamente.
      </p>

      <p className='fxh-subtitle'>📌 ¿Qué encontrarás aquí?</p>
      <ul className='fxh-list'>
        <li>Guías claras sobre condiciones mentales (síntomas, causas, tratamientos validados).</li>
        <li>Técnicas paso a paso para manejar crisis, pensamientos intrusivos o ataques de pánico.</li>
        <li>Contenido multimedia: podcasts, videos de ejercicios y audios de relajación.</li>
        <li>Comunidad segura: espacios moderados para compartir experiencias sin juicios.</li>
      </ul>

      <p className='fxh-subtitle'>📌 Introducción Integral a los Trastornos Mentales</p>
      <p className='fxh-text'>
        La salud mental es un ecosistema complejo donde distintas condiciones afectan cómo pensamos, 
        sentimos y nos relacionamos. Este módulo ofrece un mapa estructurado para comprender y 
        gestionar los principales trastornos psicológicos, con herramientas basadas en evidencia científica.
      </p>

      <p className='fxh-subtitle'>📌 Un Viaje por la Mente Humana</p>
      <p className='fxh-text'>
        Exploraremos seis grandes categorías que impactan el bienestar emocional y cognitivo:
      </p>

      <p className='fxh-subsubtitle'>🧠 Trastornos del Estado de Ánimo</p>
      <p className='fxh-text'>
        Desde la depresión mayor hasta el trastorno bipolar, aprenderás a identificar sus 
        características y estrategias para recuperar el equilibrio.
      </p>

      <p className='fxh-subsubtitle'>🧠 Trastornos de Ansiedad</p>
      <p className='fxh-text'>
        Manejo de ansiedad generalizada, ataques de pánico y fobias específicas, incluyendo 
        herramientas modernas como terapias basadas en exposición gradual.
      </p>

      <p className='fxh-subsubtitle'>🧠 Trastornos Psicóticos</p>
      <p className='fxh-text'>
        Comprensión de la esquizofrenia y otros trastornos psicóticos, abordando mitos, 
        estigmas y estrategias terapéuticas actuales.
      </p>

      <p className='fxh-subsubtitle'>🥗 Trastornos Alimentarios</p>
      <p className='fxh-text'>
        Anorexia, bulimia y trastorno por atracón, desde una perspectiva integral mente-cuerpo.
      </p>

      <p className='fxh-subsubtitle'>🧬 Neurodesarrollo</p>
      <p className='fxh-text'>
        Condiciones del desarrollo que impactan el aprendizaje, conducta y regulación emocional.
      </p>

      <p className='fxh-subsubtitle'>🔍 Otras Condiciones Relevantes</p>
      <p className='fxh-text'>
        Desde TEPT hasta insomnio crónico, abordando problemas que requieren atención especializada.
      </p>

      <p className='fxh-text'>
        "Conocer es el primer paso para transformar. Aquí encontrarás tanto el mapa como 
        las herramientas para tu viaje hacia el bienestar mental."
      </p>

      <p className='fxh-text'>
        Nota: Este módulo no reemplaza la atención profesional. Siempre consulta a un 
        especialista para diagnósticos formales.
      </p>

    </div>
  );
}

export default EnfMentalComun;
