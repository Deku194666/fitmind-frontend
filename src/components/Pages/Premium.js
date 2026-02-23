import React, { useEffect } from 'react';
import './Premium.css';

const Premium = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">
      <p className="title-main">⭐ FitMind Premium ⭐</p>

      <p className="text-body">
        La sección <strong>Premium</strong> de <strong>FitMind</strong> está diseñada para usuarios que
        quieren llevar su salud física, mental y nutricional al siguiente nivel 🚀.
        Aquí tendrás acceso a herramientas avanzadas, contenido exclusivo y planes personalizados
        basados en tus datos y objetivos.
      </p>

      <p className="title-section">🎁 ¿Qué incluye FitMind Premium?</p>

      <p className="text-body">
        Al suscribirte desbloqueas múltiples beneficios pensados para un enfoque integral del bienestar:
      </p>

      <ul className="text-body">
        <li>🥗 <strong>Planes de nutrición personalizados</strong>: adaptados a tu edad, peso, objetivos y patologías.</li>
        <li>🏋️‍♂️ <strong>Rutinas de ejercicio exclusivas</strong>: fuerza, cardio, movilidad y rehabilitación.</li>
        <li>🧠 <strong>Bienestar mental avanzado</strong>: ejercicios guiados, manejo del estrés y ansiedad.</li>
        <li>📊 <strong>Reportes detallados de progreso</strong>: peso, hábitos, síntomas y evolución clínica.</li>
        <li>⏰ <strong>Recordatorios inteligentes</strong>: medicación, actividad física, hidratación y sueño.</li>
        <li>👥 <strong>Acceso a comunidades Premium</strong>: apoyo, motivación y seguimiento compartido.</li>
      </ul>

      <p className="title-section">🧬 ¿Por qué elegir Premium?</p>

      <p className="text-body">
        FitMind Premium no es solo contenido extra: es una experiencia personalizada 🧩.
        Utiliza tus registros diarios, síntomas y hábitos para ofrecerte recomendaciones
        más precisas y útiles en el tiempo.
      </p>

      <ul className="text-body">
        <li>✅ Mejor control de enfermedades crónicas.</li>
        <li>✅ Mayor adherencia a tratamientos y hábitos saludables.</li>
        <li>✅ Prevención de complicaciones a largo plazo.</li>
        <li>✅ Acompañamiento continuo y motivacional.</li>
      </ul>

      <p className="title-section">🚀 Da el siguiente paso</p>

      <p className="text-body">
        Suscribirte a <strong>FitMind Premium</strong> es invertir en tu salud 💙.
        Empieza hoy a tomar decisiones informadas, mejorar tu calidad de vida
        y alcanzar tus objetivos con apoyo real y herramientas avanzadas.
      </p>
    </div>
  );
};

export default Premium;
