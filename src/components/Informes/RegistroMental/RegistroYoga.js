// RegistroYoga.jsx
import React, { useEffect } from 'react';
import BarNavYoga from './BarNavYoga';
import './RegistroYoga.css';

function RegistroYoga() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail210">

      <BarNavYoga />

      <p className="fxh-title">🧘 Yoga</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        En esta sección podrás revisar y analizar tus sesiones de yoga. El módulo registra el tiempo total de práctica
        mediante un cronómetro y estima las calorías quemadas, para que lleves un seguimiento simple y visual de tu
        progreso en flexibilidad, equilibrio y concentración.
      </p>

      <p className="fxh-subtitle">📊 Qué encontrarás en este módulo</p>
      <ul className="fxh-list">
        <li>Vista de la <strong>última práctica</strong> (tiempo, calorías y fecha).</li>
        <li><strong>Historial</strong> con filtros por rango de fechas y orden cronológico.</li>
        <li><strong>Resumen</strong> semanal/mensual de minutos y calorías.</li>
        <li>Integración con el <strong>Dashboard</strong> (última sesión y totales del día).</li>
        <li>Interfaz <strong>responsiva</strong> y controles accesibles (iniciar/pausar/finalizar).</li>
        <li>Calorías mostradas como <strong>estimación</strong> (ajustable en el futuro).</li>
      </ul>

      <p className="fxh-subtitle">📂 Accede a tus registros históricos</p>
      <p className="fxh-text">
        Todas tus sesiones de yoga quedan almacenadas de forma segura. Revíselas cuando quieras para identificar
        tendencias, planificar tus rutinas y evaluar tu evolución en movilidad, respiración y bienestar general.
      </p>

      <p className="fxh-text" style={{ marginTop: '2rem' }}>
        Mantén un seguimiento constante de tu práctica para optimizar resultados y prevenir molestias.
        La constancia y el registro marcan la diferencia.
      </p>

    </div>
  );
}

export default RegistroYoga;