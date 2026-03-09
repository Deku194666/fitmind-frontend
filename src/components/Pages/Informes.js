import React, { useEffect } from 'react';
import './Informes.css';
import BarNavInforme from '../Informes/BarNavInforme';
import BarNavInforme2 from '../Informes/BarNavInforme2';

function Informes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">
      <BarNavInforme2 />
      <BarNavInforme />

      <p className="title-main">📊 Tus Estadisticas de Salud</p>

      <p className="text-body">
        La sección de <strong>Tus Estadisticas </strong> de <strong>FitMind</strong> te permite visualizar y analizar
        toda tu información de salud de forma clara, ordenada y útil 🧠.
        Aquí se integran tus registros diarios, semanales y mensuales para ofrecerte
        una visión completa de tu bienestar físico y mental.
      </p>

      <p className="title-section">🧩 Módulos disponibles</p>

      <p className="text-body">
        Cada módulo recopila datos específicos y los transforma en resúmenes fáciles de entender,
        ayudándote a identificar patrones, avances y oportunidades de mejora 📈.
      </p>

      <ul className="text-body">
        <li>🏃‍♂️ <strong>Ejercicio:</strong> minutos semanales, tipo de actividad, frecuencia y rendimiento.</li>
        <li>💧 <strong>Hidratación:</strong> consumo diario de agua, promedios y adherencia a objetivos.</li>
        <li>🩺 <strong>Signos vitales:</strong> presión arterial, frecuencia cardíaca y tendencias.</li>
        <li>💤 <strong>Sueño:</strong> horas dormidas, calidad del descanso y regularidad.</li>
        <li>🥗 <strong>Alimentación:</strong> calidad nutricional, hábitos y registro histórico.</li>
      </ul>

      <p className="title-section">📅 Resúmenes semanales y mensuales</p>

      <p className="text-body">
        Los resúmenes te permiten comparar distintos periodos de tiempo para evaluar tu progreso 📊.
        Esto facilita la detección temprana de retrocesos, mejoras sostenidas y cambios en tus hábitos.
      </p>

      <ul className="text-body">
        <li>📌 Comparación entre semanas y meses.</li>
        <li>📌 Identificación de patrones positivos o negativos.</li>
        <li>📌 Seguimiento de objetivos de salud personalizados.</li>
      </ul>

      <p className="title-section">📂 Historial completo y seguro</p>

      <p className="text-body">
        Todos tus datos quedan almacenados de forma segura 🔐, permitiéndote acceder a tu historial
        completo cuando lo necesites. Esto es clave para:
      </p>

      <ul className="text-body">
        <li>🧠 Evaluar tu evolución a largo plazo.</li>
        <li>🩺 Compartir información relevante con profesionales de la salud.</li>
        <li>🎯 Ajustar metas según tu progreso real.</li>
      </ul>

      <p className="title-section">✨ Próximamente en Informes</p>

      <ul className="text-body">
        <li>📈 Gráficos interactivos por módulo.</li>
        <li>🚨 Alertas automáticas ante valores fuera de rango.</li>
        <li>📄 Exportación de informes en PDF.</li>
        <li>🤖 Análisis inteligente con recomendaciones personalizadas.</li>
      </ul>

      <p className="title-section">✅ Conclusión</p>

      <p className="text-body">
        La sección de <strong>Informes</strong> es el corazón analítico de FitMind ❤️.
        Te ayuda a comprender tu estado de salud, mantener la motivación y tomar decisiones
        informadas basadas en datos reales.
        El seguimiento constante es la clave para lograr cambios sostenibles y mejorar tu calidad de vida.
      </p>
    </div>
  );
}

export default Informes;
