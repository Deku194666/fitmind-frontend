import React, { useEffect } from 'react';
import './AntagonistasVitaminaK.css';

function AntagonistasVitaminaK() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail69">

      <p className="fxh-title">Antagonistas de la Vitamina K</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Antagonistas de la Vitamina K</strong> (AVK) son anticoagulantes orales que actúan inhibiendo la síntesis hepática de factores de coagulación dependientes de vitamina K
        (factores II, VII, IX y X, así como proteínas C y S). El principal representante de este grupo es la <strong>warfarina</strong>.
      </p>

      <p className="fxh-subtitle">🔬 Mecanismo de Acción</p>
      <p className="fxh-text">
        Inhiben la enzima <strong>epóxido reductasa</strong>, encargada de regenerar la forma activa de la vitamina K, lo cual disminuye la activación de los factores de coagulación dependientes
        de dicha vitamina. Esto reduce progresivamente la capacidad de coagulación de la sangre.
      </p>

      <p className="fxh-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="fxh-list">
        <li>Prevención y tratamiento de trombosis venosa profunda (TVP) y embolia pulmonar (TEP).</li>
        <li>Prevención de eventos tromboembólicos en fibrilación auricular no valvular o valvular.</li>
        <li>En pacientes con válvulas cardíacas mecánicas (tratamiento de elección).</li>
        <li>Profilaxis secundaria en síndrome antifosfolípido.</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="fxh-list">
        <li>Hemorragias (riesgo mayor en INR elevado).</li>
        <li>Necrosis cutánea (raro, por deficiencia transitoria de proteína C).</li>
        <li>Interacciones farmacológicas frecuentes (antibióticos, AINEs, alimentos con vitamina K).</li>
        <li>Teratogenicidad (contraindicada en embarazo).</li>
      </ul>

      <p className="fxh-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="fxh-list">
        <li>Requiere <strong>monitoreo frecuente del INR</strong> (habitualmente entre 2.0 y 3.0).</li>
        <li>Inicio de acción lento: puede necesitar puente con heparina.</li>
        <li>Mantener dieta estable en vitamina K.</li>
        <li>Múltiples interacciones: ajustar dosis con cautela.</li>
        <li>En sobredosis, se revierte con vitamina K o complejo protrombínico.</li>
      </ul>

      <p className="fxh-subtitle">📦 Combinaciones Frecuentes</p>
      <ul className="fxh-list">
        <li>Puente terapéutico con heparinas al inicio o perioperatorio.</li>
        <li>No combinar con AINEs por riesgo de hemorragia.</li>
        <li>Ajustar dosis si se administran antibióticos.</li>
      </ul>

      <p className="fxh-subtitle">📚 Conclusión</p>
      <p className="fxh-text">
        Los <strong>Antagonistas de la Vitamina K</strong>, como la warfarina, siguen siendo fundamentales en ciertos contextos clínicos,
        especialmente en pacientes con válvulas cardíacas mecánicas. Requieren manejo cuidadoso y control regular del INR para garantizar eficacia y seguridad.
      </p>

    </div>
  );
}

export default AntagonistasVitaminaK;
