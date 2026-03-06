import React, { useEffect } from 'react';
import './HabitosPresentacion.css';
import BarNavHabitos from './BarNavHabitos';

function HabitosPresentacion() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detaill">
        < BarNavHabitos  />

      <p className='fxh-title'>Hábitos</p>

      <p className='fxh-subtitle'>📌 Introducción</p>
      <p className='fxh-text'>
        La sección <strong>Hábitos</strong> de FitMind está diseñada para ayudarte a construir,
        mantener y mejorar tus hábitos diarios de forma organizada y visual.
        A través de un sistema inteligente de seguimiento, podrás registrar tus actividades
        diarias y analizar tu progreso en el tiempo.
      </p>

      <p className='fxh-subtitle'>🧠 ¿Qué es un hábito?</p>
      <p className='fxh-text'>
        Un hábito es una acción que se repite regularmente y que forma parte de tu rutina.
        Puede estar relacionado con tu salud física, mental o productividad.
        Pequeñas acciones constantes generan grandes resultados.
      </p>

      <p className='fxh-subtitle'>⚙️ ¿Cómo funciona?</p>

      <div className="fxh-flex">
        <div className="fxh-half">
          <p className='fxh-subsubtitle'>1️⃣ Creación</p>
          <ul className='fxh-list'>
            <li>Define el hábito</li>
            <li>Establece frecuencia diaria</li>
            <li>Activa o desactiva cuando lo necesites</li>
          </ul>
        </div>

        <div className="fxh-half">
          <p className='fxh-subsubtitle'>2️⃣ Seguimiento</p>
          <ul className='fxh-list'>
            <li>Marca cada vez que lo completes</li>
            <li>Visualiza tu progreso diario</li>
            <li>Analiza tu constancia mensual</li>
          </ul>
        </div>
      </div>

      <p className='fxh-subtitle'>📊 Beneficios</p>

      <div className="fxh-flex">
        <div className="fxh-third">
          <p className='fxh-subsubtitle'>Disciplina</p>
          <ul className='fxh-list'>
            <li>Construcción diaria</li>
            <li>Rutina estructurada</li>
          </ul>
        </div>

        <div className="fxh-third">
          <p className='fxh-subsubtitle'>Motivación</p>
          <ul className='fxh-list'>
            <li>Seguimiento visual</li>
            <li>Progreso medible</li>
          </ul>
        </div>

        <div className="fxh-third">
          <p className='fxh-subsubtitle'>Control</p>
          <ul className='fxh-list'>
            <li>Gestión centralizada</li>
            <li>Mejora continua</li>
          </ul>
        </div>
      </div>

      <p className='fxh-subtitle'>🎯 Objetivo</p>
      <p className='fxh-text'>
        Convertir pequeñas acciones diarias en resultados sostenibles
        dentro del ecosistema integral de FitMind.
      </p>

    </div>
  );
}

export default HabitosPresentacion;