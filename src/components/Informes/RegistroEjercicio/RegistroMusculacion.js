import React, { useEffect } from 'react';
import BarNavMusculacionInforme from './BarNavMusculacion';
import './RegistroMusculacion.css';

function RegistroMusculacion() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <BarNavMusculacionInforme />

      <p className="fxh-title">🏋️‍♂️ Musculación</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        En esta sección podrás revisar y analizar tus sesiones de entrenamiento de fuerza 
        (pesas y máquinas). El módulo registra el tiempo total de entrenamiento mediante 
        un cronómetro y estima las calorías quemadas, permitiéndote hacer seguimiento 
        de tu progreso de forma simple y visual.
      </p>

      <p className="fxh-subtitle">📊 Qué encontrarás en este módulo</p>
      <ul className="fxh-list">
        <li><strong>Último entrenamiento</strong>: tiempo, calorías y fecha.</li>
        <li><strong>Historial</strong> con filtros por rango de fechas.</li>
        <li><strong>Resumen</strong> semanal y mensual de minutos y calorías.</li>
        <li>Integración con el <strong>Dashboard</strong>.</li>
        <li>Interfaz <strong>responsiva</strong> con controles accesibles.</li>
        <li>Indicador de calorías como <strong>estimación</strong>.</li>
      </ul>

      <p className="fxh-subtitle">📂 Accede a tus registros históricos</p>
      <p className="fxh-text">
        Todos tus entrenamientos quedan almacenados de forma segura. 
        Puedes revisarlos en cualquier momento para identificar tendencias, 
        planificar tus rutinas y evaluar tu evolución en fuerza y resistencia.
      </p>

      <p className="fxh-text">
        Mantén un seguimiento constante de tu musculación para optimizar resultados 
        y prevenir lesiones. Un progreso consistente comienza con un registro ordenado.
      </p>

    </div>
  );
}

export default RegistroMusculacion;
