

import React, { useEffect } from 'react';
import BarNavElongacion from './BarNavElongacion';

function RegistroElongacion() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">

      < BarNavElongacion  />

      <p className="p13">🧘‍♂️ Elongación</p>

      <p className="p14">Introducción📌</p>
      <p className="p150">
        En esta sección podrás revisar y analizar tus sesiones de elongación y movilidad.
        El módulo registra el tiempo total dedicado a estiramientos mediante un cronómetro y
        estima el gasto calórico asociado, ayudándote a mejorar la flexibilidad, recuperación
        muscular y bienestar general.
      </p>

      <p className="p14">Qué encontrarás en este módulo📊</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Vista de la <strong>última sesión de elongación</strong> (tiempo, calorías y fecha).</li>
        <li><strong>Historial</strong> de sesiones con orden cronológico.</li>
        <li><strong>Resumen</strong> semanal/mensual del tiempo dedicado a elongar.</li>
        <li>Integración con el <strong>Dashboard</strong> (última sesión y totales del día).</li>
        <li>Interfaz <strong>simple y responsiva</strong> para iniciar, pausar y finalizar sesiones.</li>
        <li>Calorías mostradas como <strong>estimación orientativa</strong>.</li>
      </ul>

      <p className="p14">Accede a tus sesiones registradas📂</p>
      <p className="p150">
        Todas tus sesiones de elongación quedan almacenadas de forma segura.
        Revisar tu historial te permitirá identificar hábitos, mejorar la constancia y
        prevenir sobrecargas o lesiones mediante una recuperación adecuada.
      </p>

      <p className="p150" style={{ marginTop: '2rem' }}>
        La elongación regular es clave para el rendimiento y la salud muscular.
        Registrar tus sesiones te ayudará a mantener un equilibrio físico sostenible.
      </p>
    </div>
  );
}

export default RegistroElongacion;
