

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nefropatia.css';

function Nefropatia() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail305">

      <p className="fxh-title">Nefropatía</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>nefropatía</strong> es un término médico que se utiliza para
        describir diferentes enfermedades que afectan a los riñones. Estas
        afecciones pueden alterar la capacidad de los riñones para filtrar
        adecuadamente los desechos y el exceso de líquidos de la sangre,
        lo que puede provocar diversos problemas de salud si no se trata
        de forma adecuada.
      </p>

      <p className="fxh-subtitle">¿Qué es la nefropatía? 🩺</p>

      <ul className="fxh-list">
        <li>Enfermedad que afecta la función de los riñones.</li>
        <li>Puede alterar la filtración de la sangre.</li>
        <li>Puede desarrollarse de forma progresiva.</li>
        <li>En casos avanzados puede provocar insuficiencia renal.</li>
      </ul>

      <p className="fxh-subtitle">Tipos de nefropatía</p>

      <div className="fxh-flex">

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Nefropatía diabética</p>

          <ul className="fxh-list">
            <li>Complicación de la diabetes.</li>
            <li>Daño progresivo en los filtros renales.</li>
            <li>Puede causar insuficiencia renal con el tiempo.</li>
          </ul>

        </div>

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Nefropatía hipertensiva</p>

          <ul className="fxh-list">
            <li>Relacionada con la presión arterial alta.</li>
            <li>Produce daño en los vasos sanguíneos renales.</li>
            <li>Puede deteriorar gradualmente la función renal.</li>
          </ul>

        </div>

      </div>

      <p className="fxh-subtitle">Causas comunes ⚠️</p>

      <ul className="fxh-list">
        <li>Diabetes mellitus.</li>
        <li>Hipertensión arterial.</li>
        <li>Enfermedades autoinmunes.</li>
        <li>Infecciones renales.</li>
        <li>Uso prolongado de ciertos medicamentos.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas asociados</p>

      <ul className="fxh-list">
        <li>Hinchazón en piernas o tobillos.</li>
        <li>Fatiga o debilidad.</li>
        <li>Cambios en la cantidad de orina.</li>
        <li>Presión arterial elevada.</li>
        <li>Náuseas o pérdida de apetito.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico</p>

      <ul className="fxh-list">
        <li>Análisis de sangre.</li>
        <li>Exámenes de orina.</li>
        <li>Ecografía renal.</li>
        <li>Pruebas de función renal.</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento</p>

      <ul className="fxh-list">
        <li>Control de la enfermedad subyacente.</li>
        <li>Medicamentos para controlar la presión arterial.</li>
        <li>Cambios en la dieta.</li>
        <li>Seguimiento médico regular.</li>
      </ul>

      <p className="fxh-subtitle">Prevención</p>

      <ul className="fxh-list">
        <li>Mantener controlada la presión arterial.</li>
        <li>Controlar los niveles de glucosa en sangre.</li>
        <li>Adoptar hábitos de vida saludables.</li>
        <li>Realizar chequeos médicos periódicos.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        La <strong>nefropatía</strong> comprende un grupo de enfermedades que
        afectan la función de los riñones. El diagnóstico temprano y el
        control adecuado de los factores de riesgo son fundamentales para
        prevenir complicaciones y preservar la salud renal.
      </p>

    </div>

  );

}

export default Nefropatia;