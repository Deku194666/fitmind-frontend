import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarMindEstAnimo from './NavBarMindEstAnimo';
import './TrasEstAnimo.css';

function TrasEstAnimo() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <NavBarMindEstAnimo />

      <p className='fxh-title'>Trastorno del Estado de Ánimo</p>

      <p className='fxh-subtitle'>📌 Introducción</p>
      <p className='fxh-text'>
        Los trastornos del estado de ánimo no son simples cambios pasajeros. 
        Son condiciones que alteran profundamente la percepción de la realidad 
        y la capacidad de funcionamiento diario. Desde las explicaciones clásicas 
        de los humores corporales hasta el entendimiento moderno de los 
        desequilibrios neuroquímicos, la ciencia ha transformado nuestra comprensión.
      </p>

      <p className='fxh-subsubtitle'>
        📌 <Link to="/bienestarmental/enfmentales/depresion">Depresión</Link>: Más allá de la tristeza
      </p>
      <p className='fxh-text'>
        La <Link to="/bienestarmental/enfmentales/depresion">Depresión</Link> se caracteriza por síntomas persistentes 
        durante semanas o meses. No es simplemente "sentirse triste", sino una condición 
        médica donde el cerebro funciona de manera distinta. Estudios de neuroimagen 
        muestran disminución en áreas relacionadas con motivación y placer.
      </p>
      <p className='fxh-text'>
        El test PHQ-9 es una herramienta clave para la detección. 
        La Terapia Cognitivo-Conductual estructurada ayuda a romper el ciclo 
        de pensamientos negativos mediante registro de actividades y 
        reestructuración cognitiva.
      </p>

      <p className='fxh-subsubtitle'>
        📌 <Link to="/bienestarmental/enfmentales/trasbipolar">Trastorno Bipolar</Link>
      </p>
      <p className='fxh-text'>
        El <Link to="/bienestarmental/enfmentales/trasbipolar">Trastorno Bipolar</Link> presenta una dualidad 
        entre episodios depresivos y episodios maníacos. 
        El tipo I incluye manía completa; el tipo II, hipomanía. 
        El seguimiento estructurado del estado de ánimo permite 
        detectar patrones y prevenir crisis.
      </p>

      <p className='fxh-subsubtitle'>📌 Distimia: La sombra persistente</p>
      <p className='fxh-text'>
        La distimia es una forma crónica de depresión de intensidad moderada 
        pero prolongada en el tiempo. Requiere estrategias específicas, como 
        técnicas de reestructuración cognitiva para contrarrestar 
        pensamientos negativos automáticos.
      </p>

    </div>
  );
}

export default TrasEstAnimo;
