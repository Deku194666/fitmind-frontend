import React, { useEffect } from 'react';
import BarNavEstadisticasRegistroAlimentos from './BarNavEstadisticasRegistroAlimentos';


function RegistroAlimentosInforme() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">

      <BarNavEstadisticasRegistroAlimentos  />
      <p className="title-main">🥗 Registro de Alimentos</p>

      <p className="text-body">
        La alimentación equilibrada es uno de los pilares fundamentales de la salud física y mental 🧠💪.
        Registrar los alimentos que consumes te permite conocer tu ingesta calórica, la calidad nutricional
        de tu dieta y detectar hábitos que pueden mejorarse con el tiempo.
      </p>

      <p className="title-section">📌 Importancia de la alimentación</p>

      <p className="text-body">
        Una dieta balanceada aporta los nutrientes esenciales para producir energía, mantener un peso saludable
        y favorecer la reparación celular 🧬. Además, una buena alimentación reduce el riesgo de enfermedades
        crónicas como diabetes, hipertensión, obesidad y enfermedades cardiovasculares ❤️.
      </p>

      <p className="title-section">🍏 Buenas prácticas alimenticias</p>

      <ul className="text-body">
        <li>🥦 Incluir variedad de frutas y verduras en cada comida.</li>
        <li>🍗 Consumir proteínas de calidad: carnes magras, pescado, huevos y legumbres.</li>
        <li>🌾 Preferir granos integrales sobre harinas refinadas.</li>
        <li>🚫 Limitar azúcares añadidos, grasas saturadas y alimentos ultraprocesados.</li>
        <li>⏰ Mantener horarios regulares de alimentación y controlar el tamaño de las porciones.</li>
        <li>💧 Acompañar las comidas con una adecuada hidratación.</li>
      </ul>

      <p className="title-section">📊 Registro y seguimiento</p>

      <p className="text-body">
        En esta sección podrás visualizar tus registros diarios, semanales y mensuales de alimentación,
        analizar patrones nutricionales y evaluar la calidad de tu dieta 🧾.
        Este seguimiento te permitirá realizar ajustes conscientes y alineados con tus objetivos de salud.
      </p>

      <p className="title-section">✅ Conclusión</p>

      <p className="text-body">
        Registrar tu alimentación te da control y conciencia sobre lo que comes.
        Pequeños cambios sostenidos en el tiempo pueden generar grandes beneficios para tu bienestar integral 🌱.
      </p>
    </div>
  );
}

export default RegistroAlimentosInforme;
