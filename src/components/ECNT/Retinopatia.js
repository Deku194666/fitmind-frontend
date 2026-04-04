


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Retinopatia.css';

function Retinopatia() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail304">

      <p className="fxh-title">Retinopatía</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>retinopatía</strong> es una afección que afecta la retina,
        la capa sensible a la luz ubicada en la parte posterior del ojo.
        Esta condición puede dañar los vasos sanguíneos de la retina y
        provocar alteraciones en la visión. En algunos casos, si no se
        detecta y trata a tiempo, puede causar pérdida de la visión.
      </p>

      <p className="fxh-subtitle">¿Qué es la retinopatía? 👁️</p>

      <ul className="fxh-list">
        <li>Enfermedad que afecta la retina del ojo.</li>
        <li>Puede provocar daño en los vasos sanguíneos oculares.</li>
        <li>Puede desarrollarse de forma progresiva.</li>
        <li>En casos graves puede causar pérdida visual.</li>
      </ul>

      <p className="fxh-subtitle">Tipos de retinopatía</p>

      <div className="fxh-flex">

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Retinopatía diabética</p>

          <ul className="fxh-list">
            <li>Complicación de la diabetes.</li>
            <li>Daño en los vasos sanguíneos de la retina.</li>
            <li>Puede provocar visión borrosa o pérdida visual.</li>
          </ul>

        </div>

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Retinopatía hipertensiva</p>

          <ul className="fxh-list">
            <li>Relacionada con la hipertensión arterial.</li>
            <li>Produce cambios en los vasos sanguíneos del ojo.</li>
            <li>Puede afectar la visión si progresa.</li>
          </ul>

        </div>

      </div>

      <p className="fxh-subtitle">Causas comunes ⚠️</p>

      <ul className="fxh-list">
        <li>Diabetes mellitus.</li>
        <li>Hipertensión arterial.</li>
        <li>Trastornos vasculares.</li>
        <li>Envejecimiento.</li>
        <li>Enfermedades oculares.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas asociados</p>

      <ul className="fxh-list">
        <li>Visión borrosa.</li>
        <li>Manchas o puntos flotantes en la visión.</li>
        <li>Dificultad para ver en la oscuridad.</li>
        <li>Pérdida parcial de la visión.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico</p>

      <ul className="fxh-list">
        <li>Examen oftalmológico completo.</li>
        <li>Evaluación del fondo de ojo.</li>
        <li>Tomografía de coherencia óptica.</li>
        <li>Angiografía retiniana.</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento</p>

      <ul className="fxh-list">
        <li>Control de la enfermedad subyacente.</li>
        <li>Terapia con láser en algunos casos.</li>
        <li>Medicamentos o inyecciones intraoculares.</li>
        <li>Seguimiento oftalmológico regular.</li>
      </ul>

      <p className="fxh-subtitle">Prevención</p>

      <ul className="fxh-list">
        <li>Control adecuado de la diabetes.</li>
        <li>Mantener la presión arterial controlada.</li>
        <li>Realizar revisiones oftalmológicas periódicas.</li>
        <li>Adoptar un estilo de vida saludable.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        La <strong>retinopatía</strong> es una enfermedad que puede afectar
        gravemente la visión si no se detecta a tiempo. Un diagnóstico
        temprano y el control adecuado de las enfermedades asociadas
        permiten prevenir complicaciones y preservar la salud visual.
      </p>

    </div>

  );

}

export default Retinopatia;