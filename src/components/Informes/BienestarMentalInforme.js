import React, { useEffect } from 'react';
import './BienestarMentalInforme.css';
import BarNavMental from './RegistroMental/BarNavMental';

function BienestarMentalInforme() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">
      <BarNavMental />

      <p className="title-main">🧠 Bienestar Mental</p>

      <p className="text-body">
        El bienestar mental es un componente esencial de la salud integral 🧩.
        No solo influye en cómo pensamos y sentimos, sino también en cómo actuamos,
        tomamos decisiones y enfrentamos los desafíos diarios.
        Registrar tu estado emocional te permite identificar patrones y fortalecer tu equilibrio psicológico.
      </p>

      <p className="title-section">📌 Beneficios del bienestar mental</p>

      <ul className="text-body">
        <li>🧠 Mejora la concentración, la memoria y la claridad mental.</li>
        <li>😌 Reduce los niveles de estrés, ansiedad y tensión emocional.</li>
        <li>💪 Fortalece la resiliencia emocional frente a situaciones adversas.</li>
        <li>💤 Favorece un sueño más profundo y reparador.</li>
        <li>🌱 Promueve hábitos saludables y autocuidado consciente.</li>
      </ul>

      <p className="title-section">💡 Herramientas y actividades</p>

      <ul className="text-body">
        <li>🧘‍♂️ Meditación guiada y prácticas de mindfulness.</li>
        <li>🌬️ Ejercicios de respiración y relajación progresiva.</li>
        <li>📓 Registro diario de emociones y estado de ánimo.</li>
        <li>🎨 Actividades recreativas para reducir el estrés.</li>
        <li>🙏 Prácticas de gratitud y autoevaluación emocional.</li>
      </ul>

      <p className="title-section">📊 Registro y seguimiento</p>

      <p className="text-body">
        En este módulo podrás visualizar tus registros diarios, semanales y mensuales
        de bienestar mental 📅. Esto te ayudará a detectar cambios en tu estado emocional,
        monitorear niveles de estrés y recibir recomendaciones personalizadas
        para mantener un equilibrio emocional saludable.
      </p>

      <p className="title-section">✅ Conclusión</p>

      <p className="text-body">
        Cuidar tu bienestar mental es tan importante como cuidar tu cuerpo.
        Un seguimiento constante te permitirá mejorar tu calidad de vida,
        fortalecer tu salud integral y desarrollar una relación más consciente contigo mismo 💙.
      </p>
    </div>
  );
}

export default BienestarMentalInforme;
