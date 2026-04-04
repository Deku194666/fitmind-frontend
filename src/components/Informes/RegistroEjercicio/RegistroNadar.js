import React, { useEffect } from 'react';
import BarNavNadar from './BarNavNadar';
import './RegistroNadar.css';

function RegistroNadar() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail205">

      <BarNavNadar />

      <p className="fxh-title">🏊 Nadar</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        En esta sección podrás revisar y analizar tus sesiones de natación.
        El módulo registra el tiempo total mediante un cronómetro y estima
        las calorías quemadas, para que sigas tu progreso de forma simple y visual.
      </p>

      <p className="fxh-subtitle">📊 Qué encontrarás en este módulo</p>
      <ul className="fxh-list">
        <li><strong>Última sesión</strong>: tiempo, calorías y fecha.</li>
        <li><strong>Historial</strong> con filtros por rango de fechas.</li>
        <li><strong>Resumen</strong> semanal y mensual de minutos y calorías.</li>
        <li>Integración con el <strong>Dashboard</strong>.</li>
        <li>Interfaz <strong>responsiva</strong> con controles accesibles.</li>
        <li>Calorías mostradas como <strong>estimación</strong>.</li>
      </ul>

      <p className="fxh-subtitle">📂 Accede a tus registros históricos</p>
      <p className="fxh-text">
        Todas tus sesiones de natación quedan almacenadas de forma segura.
        Puedes revisarlas cuando quieras para identificar tendencias,
        planificar tus entrenamientos y evaluar tu evolución en resistencia y técnica.
      </p>

      <p className="fxh-text">
        Mantén un seguimiento constante de tus entrenamientos para optimizar resultados
        y evitar lesiones. La constancia y el registro marcan la diferencia.
      </p>

    </div>
  );
}

export default RegistroNadar;
