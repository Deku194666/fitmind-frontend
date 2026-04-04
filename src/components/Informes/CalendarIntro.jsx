import React, { useEffect } from 'react';
import './CalendarIntro.css';
import BarNavCalendarIntro from './BarNavCalendarIntro';


function CalendarIntro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">
      <BarNavCalendarIntro />



      <p className="title-main">📅 Registro Diario de Salud</p>

      <p className="text-body">
        La sección de <strong>Calendario</strong> de <strong>FitMind</strong> te permite visualizar
        cada uno de tus días como un registro completo de tu salud 🧠.
        Aquí se integran todos tus datos diarios en una sola vista para facilitar
        el seguimiento de tu bienestar físico y mental.
      </p>

      <p className="title-section">🧩 ¿Qué incluye cada día?</p>

      <p className="text-body">
        Al seleccionar un día en el calendario, podrás acceder a un resumen completo
        de toda la información registrada durante esa jornada 📊.
      </p>

      <ul className="text-body">
        <li>🥗 <strong>Alimentación:</strong> calorías, macronutrientes y comidas registradas.</li>
        <li>🏃‍♂️ <strong>Ejercicio:</strong> tipo de actividad, duración y gasto energético.</li>
        <li>💧 <strong>Hidratación:</strong> consumo total de agua diario.</li>
        <li>🧴 <strong>Cuidado personal:</strong> rutinas como higiene o skincare.</li>
        <li>🧠 <strong>Bienestar mental:</strong> estado de ánimo y notas personales.</li>
        <li>❤️ <strong>Signos vitales:</strong> frecuencia cardíaca, presión y otros datos.</li>
      </ul>

      <p className="title-section">📆 Vista general del calendario</p>

      <p className="text-body">
        El calendario permite observar todos tus días de forma organizada,
        ayudándote a identificar patrones en tus hábitos 👀.
      </p>

      <ul className="text-body">
        <li>📌 Visualización rápida de días completos o incompletos.</li>
        <li>📌 Seguimiento continuo de tus hábitos diarios.</li>
        <li>📌 Navegación sencilla entre fechas.</li>
      </ul>

      <p className="title-section">🧠 Base para inteligencia artificial</p>

      <p className="text-body">
        Este módulo será clave para futuras funciones inteligentes 🤖.
        Al centralizar toda tu información diaria, FitMind podrá analizar tus datos
        y ofrecer recomendaciones personalizadas.
      </p>

      <ul className="text-body">
        <li>📈 Detección de patrones de comportamiento.</li>
        <li>⚠️ Alertas ante hábitos poco saludables.</li>
        <li>🎯 Recomendaciones adaptadas a tu progreso.</li>
      </ul>

      <p className="title-section">📂 Historial completo y seguro</p>

      <p className="text-body">
        Todos tus datos se almacenan de forma segura 🔐, permitiéndote acceder
        a tu historial completo cuando lo necesites.
      </p>

      <ul className="text-body">
        <li>🧠 Evaluación de tu evolución a largo plazo.</li>
        <li>🩺 Apoyo para profesionales de la salud.</li>
        <li>🎯 Ajuste de objetivos según tu progreso.</li>
      </ul>

      <p className="title-section">✨ Próximamente en Calendario</p>

      <ul className="text-body">
        <li>📊 Visualización detallada por día.</li>
        <li>📈 Comparación entre días.</li>
        <li>🤖 Análisis inteligente con IA.</li>
        <li>📄 Exportación de registros.</li>
      </ul>

      <p className="title-section">✅ Conclusión</p>

      <p className="text-body">
        El <strong>Calendario</strong> es el centro de control diario de FitMind ❤️.
        Te permite comprender tu día a día, mejorar tus hábitos y construir una base
        sólida para una vida más saludable.
      </p>
    </div>
  );
}

export default CalendarIntro;