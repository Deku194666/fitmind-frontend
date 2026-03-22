import React, { useEffect } from 'react';
import './SignosVitalesInforme.css';
import BarNavSVInforme from './BarNavSVInforme';

function SignosVitalesInforme() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">
      <BarNavSVInforme />

      <p className="title-main">🩺 Signos Vitales</p>

      <p className="text-body">
        El módulo de <strong>Signos Vitales</strong> te permite registrar, visualizar y analizar
        los parámetros más importantes de tu estado de salud 🧠.
        Estos indicadores son clave para detectar cambios tempranos, prevenir complicaciones
        y evaluar tu bienestar general a lo largo del tiempo.
      </p>

      <p className="title-section">📌 ¿Qué son los signos vitales?</p>

      <p className="text-body">
        Los signos vitales reflejan el funcionamiento básico de tu organismo ❤️‍🔥.
        Su seguimiento regular es fundamental tanto en personas sanas como en aquellas
        con enfermedades crónicas.
      </p>

      <ul className="text-body">
        <li>❤️ <strong>Frecuencia cardíaca:</strong> latidos por minuto.</li>
        <li>🩸 <strong>Presión arterial:</strong> fuerza de la sangre contra las arterias.</li>
        <li>🌡️ <strong>Temperatura corporal:</strong> indicador de infecciones o inflamación.</li>
        <li>🫁 <strong>Saturación de oxígeno:</strong> eficiencia del intercambio gaseoso.</li>
        <li>🌬️ <strong>Frecuencia respiratoria:</strong> respiraciones por minuto.</li>
      </ul>

      <p className="title-section">📊 ¿Qué encontrarás en este módulo?</p>

      <ul className="text-body">
        <li>📅 Registros diarios, semanales y mensuales.</li>
        <li>📈 Visualización de tendencias a lo largo del tiempo.</li>
        <li>🕒 Acceso rápido a tu último registro ingresado.</li>
        <li>🚨 Alertas automáticas ante valores fuera de rango (próximamente).</li>
      </ul>

      <p className="title-section">📂 Historial clínico personal</p>

      <p className="text-body">
        Todos tus registros quedan almacenados de forma segura 🔐,
        permitiéndote revisar tu historial completo cuando lo necesites.
        Esto facilita el seguimiento médico y la toma de decisiones informadas.
      </p>

      <ul className="text-body">
        <li>🧠 Identificar patrones de riesgo.</li>
        <li>🩺 Compartir información con profesionales de la salud.</li>
        <li>🎯 Ajustar hábitos y objetivos según tus métricas reales.</li>
      </ul>

      <p className="title-section">✅ Recomendación final</p>

      <p className="text-body">
        Registrar tus signos vitales de forma constante es una de las mejores herramientas
        para cuidar tu salud 🫶.
        La prevención comienza con la información, y este módulo te da el control
        para anticiparte y mejorar tu calidad de vida.
      </p>
    </div>
  );
}

export default SignosVitalesInforme;
