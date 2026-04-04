import React, { useEffect } from 'react';
import './EjercicioInforme.css';
import BarNavEjercicioInforme from './BarNavEjercicioInforme';
import BarNavEjercicioInforme2 from './BarNavEjercicioInforme2';

function EjercicioInforme() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">
      <BarNavEjercicioInforme />
      <BarNavEjercicioInforme2 />

      <p className="title-main">🏋️‍♂️ Ejercicio</p>

      <p className="text-body">
        La actividad física regular es uno de los pilares fundamentales para una vida saludable 💙.
        Realizar ejercicio de forma constante mejora el funcionamiento del cuerpo, fortalece la mente
        y previene múltiples enfermedades crónicas.
      </p>

      <p className="title-section">📌 Beneficios del ejercicio</p>

      <ul className="text-body">
        <li>❤️ Mejora la salud cardiovascular y pulmonar.</li>
        <li>💪 Aumenta la fuerza muscular y la resistencia.</li>
        <li>⚖️ Ayuda a controlar el peso y la composición corporal.</li>
        <li>🧠 Reduce el estrés, la ansiedad y mejora el estado de ánimo.</li>
        <li>🦴 Fortalece huesos y articulaciones.</li>
        <li>🔥 Incrementa la energía y el rendimiento diario.</li>
      </ul>

      <p className="title-section">🏃‍♀️ Tipos de actividad física</p>

      <ul className="text-body">
        <li>🚶‍♂️ <strong>Aeróbica:</strong> caminar, correr, nadar, ciclismo.</li>
        <li>🏋️ <strong>Fuerza:</strong> pesas, bandas elásticas, ejercicios funcionales.</li>
        <li>🧘 <strong>Flexibilidad:</strong> estiramientos, yoga, pilates.</li>
        <li>⚖️ <strong>Equilibrio y coordinación:</strong> ejercicios de estabilidad y propriocepción.</li>
      </ul>

      <p className="title-section">📊 Registro y seguimiento</p>

      <p className="text-body">
        En este módulo podrás registrar y analizar tu actividad física de forma
        diaria, semanal y mensual 📅.
        El seguimiento te permitirá conocer la duración, intensidad y frecuencia
        de tus entrenamientos, ayudándote a optimizar tus rutinas.
      </p>

      <ul className="text-body">
        <li>📈 Análisis de progreso y rendimiento.</li>
        <li>⏱️ Control del tiempo total de entrenamiento.</li>
        <li>🔥 Evaluación de intensidad del ejercicio.</li>
        <li>🎯 Seguimiento de objetivos personalizados.</li>
        <li>🚨 Alertas por sedentarismo (próximamente).</li>
      </ul>

      <p className="title-section">✅ Conclusión</p>

      <p className="text-body">
        Registrar tu actividad física te ayuda a crear hábitos saludables,
        mantener la motivación y mejorar tu bienestar integral 🫶.
        Cada movimiento cuenta, y la constancia es la clave del progreso.
      </p>
    </div>
  );
}

export default EjercicioInforme;
