import React, { useEffect } from 'react';
import './SuenoInforme.css';
import BarNavSuenoPresentacion from './RegistroSueno/BarNavSuenoPresentacion';

function SuenoInforme() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">

      < BarNavSuenoPresentacion   />

      <p className="title-main">😴 Sueño</p>

      <p className="text-body">
        El sueño es un proceso fisiológico fundamental para el correcto funcionamiento del cuerpo y la mente 🧠.
        Dormir bien no solo permite descansar, sino que también regula funciones esenciales como la memoria,
        el metabolismo, el estado de ánimo y el sistema inmunológico.
      </p>

      <p className="title-section">📌 Importancia del sueño</p>

      <p className="text-body">
        Un descanso adecuado impacta directamente en tu rendimiento diario ⚡.
        La falta de sueño puede afectar la concentración, aumentar el estrés y elevar el riesgo de
        enfermedades crónicas a largo plazo.
      </p>

      <ul className="text-body">
        <li>🧠 Mejora la memoria y el aprendizaje.</li>
        <li>❤️ Reduce el riesgo cardiovascular.</li>
        <li>⚖️ Ayuda a regular el peso y el metabolismo.</li>
        <li>🛡️ Fortalece el sistema inmunológico.</li>
        <li>😊 Mejora el estado de ánimo y la salud mental.</li>
      </ul>

      <p className="title-section">💤 Recomendaciones para dormir mejor</p>

      <ul className="text-body">
        <li>⏰ Mantener horarios regulares para dormir y despertar.</li>
        <li>📵 Evitar pantallas al menos 1 hora antes de dormir.</li>
        <li>🌙 Crear un ambiente oscuro, silencioso y fresco.</li>
        <li>☕ Evitar cafeína y comidas pesadas por la noche.</li>
        <li>🏃‍♂️ Realizar actividad física regularmente (no justo antes de dormir).</li>
      </ul>

      <p className="title-section">📊 Registro y seguimiento</p>

      <p className="text-body">
        En este módulo podrás registrar y visualizar tus horas de sueño de forma
        diaria, semanal y mensual 📅.
        El seguimiento constante te permitirá identificar patrones,
        evaluar la calidad de tu descanso y realizar ajustes para mejorar tu bienestar.
      </p>

      <ul className="text-body">
        <li>📈 Análisis de tendencias de sueño.</li>
        <li>🕒 Visualización del tiempo total de descanso.</li>
        <li>😴 Evaluación de calidad del sueño.</li>
        <li>🚨 Alertas por descanso insuficiente (próximamente).</li>
      </ul>

      <p className="title-section">✅ Conclusión</p>

      <p className="text-body">
        Dormir bien es una inversión directa en tu salud 🫶.
        Registrar y analizar tu sueño te ayudará a mejorar tu energía,
        tu rendimiento diario y tu calidad de vida a largo plazo.
      </p>
    </div>
  );
}

export default SuenoInforme;
