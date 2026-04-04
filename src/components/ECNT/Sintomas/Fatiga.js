


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Fatiga.css';

function Fatiga() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail310">

      <p className="fxh-title">Fatiga</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>fatiga</strong> es un síntoma caracterizado por una sensación
        persistente de cansancio, debilidad o falta de energía. A diferencia del
        cansancio normal, la fatiga puede no mejorar completamente con el descanso
        y puede afectar la capacidad de una persona para realizar sus actividades
        diarias.
      </p>

      <p className="fxh-subtitle">¿Qué es la fatiga? 😴</p>

      <ul className="fxh-list">
        <li>Sensación constante de cansancio o agotamiento.</li>
        <li>Disminución de la energía física o mental.</li>
        <li>Puede interferir con las actividades cotidianas.</li>
        <li>Puede presentarse de forma temporal o persistente.</li>
      </ul>

      <p className="fxh-subtitle">Causas comunes ⚠️</p>

      <ul className="fxh-list">
        <li>Falta de sueño o descanso insuficiente.</li>
        <li>Estrés o sobrecarga emocional.</li>
        <li>Enfermedades crónicas.</li>
        <li>Deficiencias nutricionales.</li>
        <li>Infecciones o trastornos metabólicos.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas asociados</p>

      <ul className="fxh-list">
        <li>Debilidad general.</li>
        <li>Dificultad para concentrarse.</li>
        <li>Somnolencia durante el día.</li>
        <li>Falta de motivación.</li>
        <li>Disminución del rendimiento físico o mental.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico</p>

      <ul className="fxh-list">
        <li>Evaluación clínica por parte del médico.</li>
        <li>Revisión de hábitos de sueño y estilo de vida.</li>
        <li>Análisis de sangre.</li>
        <li>Evaluación de enfermedades subyacentes.</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento</p>

      <ul className="fxh-list">
        <li>Mejorar la calidad del sueño.</li>
        <li>Adoptar hábitos de vida saludables.</li>
        <li>Tratar enfermedades subyacentes.</li>
        <li>Realizar actividad física moderada.</li>
      </ul>

      <p className="fxh-subtitle">Cuándo consultar al médico</p>

      <ul className="fxh-list">
        <li>Si la fatiga es intensa o persistente.</li>
        <li>Si interfiere con las actividades diarias.</li>
        <li>Si se acompaña de pérdida de peso inexplicada.</li>
        <li>Si aparece junto con otros síntomas importantes.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        La <strong>fatiga</strong> es un síntoma común que puede tener múltiples
        causas, desde factores relacionados con el estilo de vida hasta
        enfermedades médicas. Identificar la causa es fundamental para
        aplicar el tratamiento adecuado y mejorar la calidad de vida.
      </p>

    </div>

  );

}

export default Fatiga;