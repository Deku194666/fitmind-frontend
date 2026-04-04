import React, { useEffect } from 'react';
import './EjerciciosRelajacion.css';

function EjerciciosRelajacion() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail6">

      <p className='fxh-title'>Guía Integral de Ejercicios de Relajación</p>

      <p className='fxh-subtitle'>📌 Introducción</p>
      <p className='fxh-text'>
        Los <strong>Ejercicios de Relajación</strong> tienen como objetivo reducir la tensión muscular,
        el estrés mental y promover un estado de bienestar general. Son recomendados tanto en contextos clínicos
        como en la vida diaria, y pueden complementar programas de ejercicio físico, fisioterapia,
        manejo de dolor crónico o enfermedades crónicas.
      </p>

      <p className='fxh-subtitle'>🌿 Beneficios Clave</p>
      <ul className='fxh-list'>
        <li>Disminución del estrés y la ansiedad.</li>
        <li>Reducción de la frecuencia cardíaca y presión arterial.</li>
        <li>Mejoría en la calidad del sueño.</li>
        <li>Incremento en la conciencia corporal y control respiratorio.</li>
        <li>Prevención de contracturas musculares por tensión crónica.</li>
      </ul>

      <p className='fxh-subtitle'>🧘 Tipos de Técnicas de Relajación</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Técnica</th>
              <th>Descripción</th>
              <th>Duración Recomendada</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Respiración Diafragmática</strong></td>
              <td>Inhalar profundamente usando el diafragma para controlar el ritmo respiratorio.</td>
              <td>5-10 minutos</td>
            </tr>
            <tr>
              <td><strong>Relajación Muscular Progresiva</strong></td>
              <td>Tensar y relajar sistemáticamente grupos musculares.</td>
              <td>10-20 minutos</td>
            </tr>
            <tr>
              <td><strong>Visualización Guiada</strong></td>
              <td>Imaginar paisajes o situaciones tranquilas para inducir calma.</td>
              <td>10-15 minutos</td>
            </tr>
            <tr>
              <td><strong>Mindfulness</strong></td>
              <td>Atención plena al presente sin juicio, centrado en respiración o cuerpo.</td>
              <td>10-20 minutos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subtitle'>🔄 Protocolo de Relajación Diario</p>
      <ul className='fxh-list'>
        <li><strong>Fase inicial (1-2 semanas):</strong> Respiración diafragmática + estiramientos suaves.</li>
        <li><strong>Fase media (2-4 semanas):</strong> Agregar relajación muscular progresiva.</li>
        <li><strong>Fase avanzada (desde 1 mes):</strong> Integrar visualización o mindfulness guiado.</li>
        <li><strong>Frecuencia recomendada:</strong> 1-2 veces al día.</li>
      </ul>

      <p className='fxh-subtitle'>🧘 Ejercicios Prácticos</p>

      <p className='fxh-subsubtitle'>1. Respiración Diafragmática</p>
      <ul className='fxh-list'>
        <li>Coloca una mano sobre el abdomen y otra en el pecho.</li>
        <li>Inhala 4 segundos por la nariz.</li>
        <li>Retén 2 segundos y exhala en 6 segundos.</li>
        <li>Repite durante 5-10 minutos.</li>
      </ul>

      <p className='fxh-subsubtitle'>2. Relajación Muscular Progresiva</p>
      <ul className='fxh-list'>
        <li>Tensa músculos durante 5 segundos.</li>
        <li>Libera lentamente mientras exhalas.</li>
        <li>Repite por grupos musculares ascendentes.</li>
      </ul>

      <p className='fxh-subsubtitle'>3. Visualización Guiada</p>
      <ul className='fxh-list'>
        <li>Cierra los ojos y visualiza un lugar seguro.</li>
        <li>Imagina sonidos, olores y sensaciones.</li>
        <li>Mantente 10-15 minutos respirando profundamente.</li>
      </ul>

      <p className='fxh-subtitle'>🎯 Indicaciones y Recomendaciones</p>
      <ul className='fxh-list'>
        <li>Practicar en ambiente tranquilo.</li>
        <li>Evitar justo después de comer.</li>
        <li>Usar música relajante si ayuda.</li>
        <li>Adaptar técnicas a cada usuario.</li>
      </ul>

      <p className='fxh-subtitle'>📌 Contraindicaciones Relativas</p>
      <ul className='fxh-list'>
        <li>Trastornos psiquiátricos agudos no controlados.</li>
        <li>Hiperventilación inducida por ansiedad grave.</li>
      </ul>

      <p className='fxh-subtitle'>🔁 Seguimiento y Evaluación</p>
      <ul className='fxh-list'>
        <li>Usar escalas de ansiedad o estrés percibido.</li>
        <li>Registrar frecuencia en el dashboard FitMind.</li>
        <li>Permitir feedback del usuario.</li>
      </ul>

      <p className='fxh-title' style={{ marginTop: '3rem' }}>
        ✨ Finaliza tu rutina con gratitud y respiración lenta.
      </p>

    </div>
  );
}

export default EjerciciosRelajacion;
