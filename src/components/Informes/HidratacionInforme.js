import React, { useEffect } from 'react';
import './HidratacionInforme.css';
import BarNavHidraInforme from './BarNavHidraInforme';

function HidratacionInforme() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">
      <BarNavHidraInforme />

      <p className="title-main">💧 Hidratación</p>

      <p className="text-body">
        Mantener una adecuada hidratación es esencial para el correcto funcionamiento del organismo 🧠💪.
        El agua participa en procesos vitales como la digestión, la circulación, la regulación de la temperatura
        corporal y el transporte de nutrientes.
      </p>

      <p className="title-section">📌 Importancia de la hidratación</p>

      <p className="text-body">
        Una hidratación insuficiente puede provocar fatiga, dolores de cabeza, disminución del rendimiento físico
        y cognitivo, alteraciones renales y problemas cardiovasculares 🚨.
        Mantener un consumo adecuado de agua mejora la energía, la concentración y el bienestar general.
      </p>

      <p className="title-section">🥤 Recomendaciones prácticas</p>

      <ul className="text-body">
        <li>💦 Beber agua de forma regular durante todo el día, incluso sin sensación de sed.</li>
        <li>🍉 Consumir frutas y verduras con alto contenido de agua.</li>
        <li>🚫 Limitar bebidas azucaradas o con exceso de cafeína.</li>
        <li>🏃 Ajustar la ingesta según actividad física, clima y estado de salud.</li>
        <li>⏰ Distribuir el consumo de agua en pequeñas tomas frecuentes.</li>
      </ul>

      <p className="title-section">📊 Registro y seguimiento</p>

      <p className="text-body">
        En esta sección podrás visualizar tus registros diarios, semanales y mensuales de consumo de agua,
        identificar patrones de hidratación y comprobar si estás cumpliendo tu objetivo diario 💙.
        El seguimiento constante te ayuda a crear hábitos saludables y sostenibles.
      </p>

      <p className="title-section">✅ Conclusión</p>

      <p className="text-body">
        Registrar tu hidratación te permite cuidar tu salud de forma simple pero efectiva.
        Un adecuado consumo de agua impacta positivamente en tu energía, rendimiento y calidad de vida 🌱.
      </p>
    </div>
  );
}

export default HidratacionInforme;
