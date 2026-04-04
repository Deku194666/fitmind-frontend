import React, { useEffect } from 'react';
import './ExamenesInforme.css';

function ExamenesInforme() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">
      <p className="title-main">🧪 Exámenes Médicos</p>

      <p className="text-body">
        Registrar y consultar tus exámenes médicos es clave para monitorear tu estado de salud
        y detectar posibles alteraciones de forma temprana 🔍.
        Este módulo te permite centralizar toda tu información clínica en un solo lugar,
        facilitando el seguimiento y la toma de decisiones informadas.
      </p>

      <p className="title-section">📌 Tipos de exámenes</p>

      <ul className="text-body">
        <li>🩸 <strong>Análisis de sangre:</strong> glucosa, colesterol, hemograma, hormonas, marcadores inflamatorios.</li>
        <li>🚽 <strong>Exámenes de orina y heces:</strong> evaluación renal, digestiva y metabólica.</li>
        <li>🩻 <strong>Imagenología:</strong> radiografías, ecografías, resonancias magnéticas, tomografías.</li>
        <li>❤️ <strong>Pruebas funcionales:</strong> electrocardiogramas, pruebas de esfuerzo, espirometrías.</li>
        <li>🧬 <strong>Exámenes especializados:</strong> según antecedentes personales y familiares.</li>
      </ul>

      <p className="title-section">📊 Beneficios de registrar tus exámenes</p>

      <ul className="text-body">
        <li>📈 Seguimiento del estado de salud a lo largo del tiempo.</li>
        <li>⏱️ Detección temprana de alteraciones o enfermedades.</li>
        <li>🧑‍⚕️ Facilita la comunicación con médicos y especialistas.</li>
        <li>📂 Comparación entre resultados actuales e históricos.</li>
        <li>🧠 Apoyo en la toma de decisiones sobre tratamiento y estilo de vida.</li>
      </ul>

      <p className="title-section">🗂️ Registro y seguimiento</p>

      <p className="text-body">
        Desde esta sección podrás acceder a todos tus exámenes médicos registrados,
        filtrarlos por tipo, fecha o relevancia y visualizar tendencias mediante resúmenes
        semanales, mensuales o anuales 📅.
        Esto te permitirá tener una visión clara y ordenada de tu historial clínico.
      </p>

      <p className="title-section">✅ Conclusión</p>

      <p className="text-body">
        Mantener un historial completo y actualizado de tus exámenes médicos te ayuda
        a tomar el control de tu salud, anticiparte a posibles problemas
        y trabajar de forma preventiva para mejorar tu calidad de vida 💙.
      </p>
    </div>
  );
}

export default ExamenesInforme;
