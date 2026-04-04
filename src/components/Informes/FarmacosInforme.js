import React, { useEffect } from 'react';
import './FarmacosInforme.css';
import BarNavFarmacosPresentacion from './RegistroFarmacos/BarNavFarmacosPresentacion';

function FarmacosInforme() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">

          < BarNavFarmacosPresentacion    />
      <p className="title-main">💊 Fármacos y Medicamentos</p>

      <p className="text-body">
        El uso correcto de los medicamentos es una parte fundamental del cuidado de la salud 🩺.
        Llevar un registro claro y actualizado de tus fármacos te permite seguir tu tratamiento
        de forma segura, evitar errores y mejorar la adherencia terapéutica.
      </p>

      <p className="title-section">📌 ¿Qué encontrarás en este módulo?</p>

      <ul className="text-body">
        <li>📋 Registro detallado de medicamentos activos.</li>
        <li>⏰ Control de dosis, horarios y frecuencia.</li>
        <li>📆 Seguimiento de la duración del tratamiento.</li>
        <li>🧠 Historial completo de medicación.</li>
        <li>🚨 Alertas de seguridad (próximamente).</li>
      </ul>

      <p className="title-section">💊 Tipos de fármacos</p>

      <ul className="text-body">
        <li>❤️ <strong>Antihipertensivos:</strong> control de la presión arterial.</li>
        <li>🍬 <strong>Antidiabéticos:</strong> regulación de la glucosa en sangre.</li>
        <li>🤕 <strong>Analgésicos y antiinflamatorios:</strong> manejo del dolor.</li>
        <li>🧃 <strong>Suplementos y vitaminas:</strong> apoyo nutricional.</li>
        <li>🧬 <strong>Medicamentos específicos:</strong> según patologías particulares.</li>
      </ul>

      <p className="title-section">📊 Beneficios de registrar tus medicamentos</p>

      <ul className="text-body">
        <li>✅ Mayor seguridad en el tratamiento.</li>
        <li>🔄 Evitar duplicaciones o interacciones.</li>
        <li>🗣️ Mejor comunicación con profesionales de la salud.</li>
        <li>📈 Control de adherencia terapéutica.</li>
        <li>📂 Acceso rápido al historial farmacológico.</li>
      </ul>

      <p className="title-section">🗂️ Registro y seguimiento</p>

      <p className="text-body">
        Desde esta sección podrás agregar, modificar y consultar tus medicamentos de forma sencilla.
        Un registro completo permite detectar errores, mejorar resultados clínicos y optimizar tu
        tratamiento a largo plazo 🫶.
      </p>

      <p className="title-section">✅ Conclusión</p>

      <p className="text-body">
        Mantener un control adecuado de tus medicamentos es clave para una atención segura y efectiva.
        La organización, la constancia y la información clara marcan la diferencia en tu bienestar 💙.
      </p>
    </div>
  );
}

export default FarmacosInforme;
