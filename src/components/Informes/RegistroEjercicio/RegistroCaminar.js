// RegistroCaminar.jsx
import React, { useEffect } from 'react';
import BarNavCaminar from './BarNavCaminar';
import './RegistroBoxeoSaco.css'; // 👈 usamos el mismo CSS

function RegistroCaminar() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail203">

      <BarNavCaminar />

      <p className="fxh-title">🚶 Caminar</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        En esta sección podrás revisar y analizar tus sesiones de caminata.
        El módulo registra el tiempo total mediante un cronómetro y estima
        las calorías quemadas, para que sigas tu progreso de forma simple y visual.
      </p>

      <p className="fxh-subtitle">📊 Qué encontrarás en este módulo</p>
      <ul className="fxh-list">
        <li><strong>Última caminata</strong>: tiempo, calorías y fecha.</li>
        <li><strong>Historial</strong> con filtros por rango de fechas.</li>
        <li><strong>Resumen</strong> semanal y mensual de minutos y calorías.</li>
        <li>Integración con el <strong>Dashboard</strong>.</li>
        <li>Interfaz <strong>responsiva</strong> con controles accesibles.</li>
        <li>Calorías mostradas como <strong>estimación</strong>.</li>
      </ul>

      <p className="fxh-subtitle">📂 Accede a tus registros históricos</p>
      <p className="fxh-text">
        Todas tus caminatas quedan almacenadas de forma segura.
        Puedes revisarlas cuando quieras para identificar tendencias,
        planificar tus rutas y evaluar tu evolución en resistencia.
      </p>

      <p className="fxh-text">
        Mantén un seguimiento constante de tus caminatas para optimizar resultados
        y prevenir lesiones. La constancia y el registro marcan la diferencia.
      </p>

    </div>
  );
}

export default RegistroCaminar;
