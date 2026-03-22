


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Acufeno.css';

function Acufeno() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail298">

      <p className="fxh-title">Acúfeno</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        El <strong>acúfeno</strong>, también conocido como <strong>tinnitus</strong>,
        es la percepción de un sonido en los oídos o en la cabeza sin que exista
        una fuente externa que lo produzca. Las personas que lo presentan pueden
        describirlo como zumbidos, silbidos, pitidos o pulsaciones. Puede ser
        temporal o persistente y en algunos casos afectar la calidad de vida.
      </p>

      <p className="fxh-subtitle">¿Qué es el acúfeno? 👂</p>

      <ul className="fxh-list">
        <li>Percepción de sonidos sin estímulo externo.</li>
        <li>Puede presentarse en uno o ambos oídos.</li>
        <li>Puede ser constante o intermitente.</li>
        <li>Frecuentemente está relacionado con alteraciones auditivas.</li>
      </ul>

      <p className="fxh-subtitle">Tipos de acúfeno</p>

      <div className="fxh-flex">

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Acúfeno subjetivo</p>

          <ul className="fxh-list">
            <li>Solo lo percibe la persona afectada.</li>
            <li>Es el tipo más común.</li>
            <li>Puede estar asociado a pérdida auditiva.</li>
          </ul>

        </div>

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Acúfeno objetivo</p>

          <ul className="fxh-list">
            <li>Puede ser detectado por el médico.</li>
            <li>Relacionados con alteraciones vasculares o musculares.</li>
            <li>Es menos frecuente.</li>
          </ul>

        </div>

      </div>

      <p className="fxh-subtitle">Causas comunes ⚠️</p>

      <ul className="fxh-list">
        <li>Exposición a ruidos intensos.</li>
        <li>Pérdida auditiva relacionada con la edad.</li>
        <li>Infecciones del oído.</li>
        <li>Acumulación de cerumen.</li>
        <li>Efectos secundarios de algunos medicamentos.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas asociados</p>

      <ul className="fxh-list">
        <li>Zumbido o pitido constante en el oído.</li>
        <li>Sensación de presión en los oídos.</li>
        <li>Dificultad para concentrarse.</li>
        <li>Alteraciones del sueño.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico</p>

      <ul className="fxh-list">
        <li>Evaluación clínica del paciente.</li>
        <li>Examen otorrinolaringológico.</li>
        <li>Pruebas auditivas (audiometría).</li>
        <li>En algunos casos estudios de imagen.</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento</p>

      <ul className="fxh-list">
        <li>Tratamiento de la causa subyacente.</li>
        <li>Terapias de sonido.</li>
        <li>Uso de audífonos en caso de pérdida auditiva.</li>
        <li>Técnicas de relajación y manejo del estrés.</li>
      </ul>

      <p className="fxh-subtitle">Prevención</p>

      <ul className="fxh-list">
        <li>Evitar exposición prolongada a ruidos fuertes.</li>
        <li>Utilizar protección auditiva en ambientes ruidosos.</li>
        <li>Evitar el uso excesivo de auriculares a alto volumen.</li>
        <li>Realizar controles auditivos periódicos.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        El <strong>acúfeno</strong> es un síntoma relativamente frecuente que puede
        estar asociado a diversas condiciones del oído o del sistema nervioso.
        Aunque muchas veces no representa un problema grave, su persistencia
        puede afectar el bienestar del paciente, por lo que es importante
        consultar a un profesional de salud para evaluar su causa.
      </p>

    </div>

  );

}

export default Acufeno;