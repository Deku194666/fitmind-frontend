


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cefalea.css';

function Cefalea() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail297">

      <p className="fxh-title">Cefalea</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>cefalea</strong> es el término médico utilizado para describir
        el dolor de cabeza. Es uno de los síntomas más frecuentes en la población
        general y puede variar desde molestias leves hasta dolores intensos que
        afectan la calidad de vida. Puede estar asociada a múltiples causas,
        incluyendo estrés, deshidratación, infecciones o trastornos neurológicos
        como la migraña.
      </p>

      <p className="fxh-subtitle">¿Qué es la cefalea? 🧠</p>

      <ul className="fxh-list">
        <li> - Dolor localizado en cualquier parte de la cabeza.</li>
        <li> - Puede ser ocasional o recurrente.</li>
        <li> - Puede estar relacionado con factores físicos, emocionales o médicos.</li>
        <li> - Es uno de los motivos más comunes de consulta médica.</li>
      </ul>

      <p className="fxh-subtitle">Tipos de cefalea</p>

      <div className="fxh-flex">

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Cefalea primaria</p>

          <ul className="fxh-list">
            <li><Link to="/enfermedades/migrana">Migraña</Link>.</li>
            <li>Cefalea tensional.</li>
            <li>Cefalea en racimos.</li>
          </ul>

        </div>

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Cefalea secundaria</p>

          <ul className="fxh-list">
            <li>Infecciones.</li>
            <li>Traumatismos craneales.</li>
            <li>Problemas vasculares.</li>
            <li>Efectos secundarios de medicamentos.</li>
          </ul>

        </div>

      </div>

      <p className="fxh-subtitle">Causas comunes ⚠️</p>

      <ul className="fxh-list">
        <li> - Estrés o tensión emocional.</li>
        <li> - Falta de sueño.</li>
        <li> - Deshidratación.</li>
        <li> - Fatiga visual.</li>
        <li> - Consumo excesivo de alcohol o cafeína.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas</p>

      <ul className="fxh-list">
        <li> - Dolor pulsátil o constante en la cabeza.</li>
        <li> - Sensibilidad a la luz o al sonido.</li>
        <li> - Náuseas o vómitos.</li>
        <li> - Sensación de presión en la cabeza.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico</p>

      <ul className="fxh-list">
        <li> - Evaluación clínica del paciente.</li>
        <li> - Análisis de los síntomas y su duración.</li>
        <li> - Examen neurológico.</li>
        <li> - En algunos casos estudios de imagen.</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento</p>

      <ul className="fxh-list">
        <li> - Reposo en un ambiente tranquilo.</li>
        <li> - Hidratación adecuada.</li>
        <li> - Medicamentos analgésicos bajo indicación médica.</li>
        <li> - Técnicas de relajación y manejo del estrés.</li>
      </ul>

      <p className="fxh-subtitle">Prevención</p>

      <ul className="fxh-list">
        <li> - Mantener horarios de sueño regulares.</li>
        <li> - Reducir el estrés.</li>
        <li> - Evitar el consumo excesivo de alcohol o cafeína.</li>
        <li> - Realizar actividad física regularmente.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        La <strong>cefalea</strong> es un síntoma frecuente que puede tener múltiples
        causas. Aunque la mayoría de los casos no representa un problema grave,
        es importante identificar los factores desencadenantes y adoptar hábitos
        saludables para reducir su aparición y mejorar la calidad de vida.
      </p>

    </div>

  );

}

export default Cefalea;