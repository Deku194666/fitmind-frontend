import React, { useEffect } from 'react';
import BarNavElongacion from './BarNavElongacion';
import './RegistroElongacion.css';

function RegistroElongacion() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail208">

      <BarNavElongacion />

      <p className="fxh-title">🧘‍♂️ Elongación</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        En esta sección podrás revisar y analizar tus sesiones de elongación y movilidad.
        El módulo registra el tiempo total dedicado a estiramientos mediante un cronómetro
        y estima el gasto calórico asociado, ayudándote a mejorar la flexibilidad,
        recuperación muscular y bienestar general.
      </p>

      <p className="fxh-subtitle">📊 Qué encontrarás en este módulo</p>
      <ul className="fxh-list">
        <li><strong>Última sesión de elongación</strong>: tiempo, calorías y fecha.</li>
        <li><strong>Historial</strong> de sesiones en orden cronológico.</li>
        <li><strong>Resumen</strong> semanal y mensual del tiempo dedicado a elongar.</li>
        <li>Integración con el <strong>Dashboard</strong>.</li>
        <li>Interfaz <strong>simple y responsiva</strong> para iniciar, pausar y finalizar sesiones.</li>
        <li>Calorías mostradas como <strong>estimación orientativa</strong>.</li>
      </ul>

      <p className="fxh-subtitle">📂 Accede a tus sesiones registradas</p>
      <p className="fxh-text">
        Todas tus sesiones de elongación quedan almacenadas de forma segura.
        Revisar tu historial te permitirá identificar hábitos, mejorar la constancia
        y prevenir sobrecargas o lesiones mediante una recuperación adecuada.
      </p>

      <p className="fxh-text">
        La elongación regular es clave para el rendimiento y la salud muscular.
        Registrar tus sesiones te ayudará a mantener un equilibrio físico sostenible.
      </p>

    </div>
  );
}

export default RegistroElongacion;
