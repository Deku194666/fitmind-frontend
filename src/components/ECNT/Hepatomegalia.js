


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hepatomegalia.css';

function Hepatomegalia() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail302">

      <p className="fxh-title">Hepatomegalia</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>hepatomegalia</strong> es el aumento del tamaño del hígado
        por encima de lo normal. Este signo clínico puede aparecer debido a
        diversas enfermedades que afectan al hígado o a otros órganos del
        cuerpo. La hepatomegalia no es una enfermedad en sí misma, sino una
        manifestación de diferentes trastornos médicos que requieren evaluación
        y diagnóstico adecuado.
      </p>

      <p className="fxh-subtitle">¿Qué es la hepatomegalia? 🩺</p>

      <ul className="fxh-list">
        <li>Aumento del tamaño del hígado.</li>
        <li>Puede detectarse mediante examen físico o estudios de imagen.</li>
        <li>Puede ser leve o severa.</li>
        <li>Generalmente indica una enfermedad subyacente.</li>
      </ul>

      <p className="fxh-subtitle">Causas comunes ⚠️</p>

      <ul className="fxh-list">
        <li>Enfermedades hepáticas como hepatitis.</li>
        <li>Consumo excesivo de alcohol.</li>
        <li>Hígado graso.</li>
        <li>Insuficiencia cardíaca.</li>
        <li>Infecciones o trastornos metabólicos.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas asociados</p>

      <ul className="fxh-list">
        <li>Dolor o molestia en la parte superior derecha del abdomen.</li>
        <li>Sensación de presión abdominal.</li>
        <li>Fatiga o debilidad.</li>
        <li>Náuseas o pérdida de apetito.</li>
        <li>Ictericia en algunos casos.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico</p>

      <ul className="fxh-list">
        <li>Examen físico realizado por el médico.</li>
        <li>Ecografía abdominal.</li>
        <li>Análisis de sangre para evaluar función hepática.</li>
        <li>Tomografía o resonancia en algunos casos.</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento</p>

      <ul className="fxh-list">
        <li>Tratamiento dirigido a la causa subyacente.</li>
        <li>Cambios en la alimentación y estilo de vida.</li>
        <li>Evitar consumo de alcohol.</li>
        <li>Medicamentos según la enfermedad diagnosticada.</li>
      </ul>

      <p className="fxh-subtitle">Cuándo consultar al médico</p>

      <ul className="fxh-list">
        <li>Si existe dolor persistente en el abdomen.</li>
        <li>Si se presenta coloración amarillenta en piel u ojos.</li>
        <li>Si hay pérdida de peso inexplicada.</li>
        <li>Si se presentan síntomas digestivos persistentes.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        La <strong>hepatomegalia</strong> es un signo clínico que indica un
        aumento del tamaño del hígado y puede estar asociado a diversas
        enfermedades. Su detección temprana y el diagnóstico adecuado permiten
        tratar la causa subyacente y prevenir complicaciones.
      </p>

    </div>

  );

}

export default Hepatomegalia;