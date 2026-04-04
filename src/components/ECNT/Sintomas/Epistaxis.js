

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Epistaxis.css';

function Epistaxis() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail299">

      <p className="fxh-title">Epistaxis</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>epistaxis</strong> es el término médico utilizado para describir
        el sangrado proveniente de la nariz. Es una condición relativamente común
        que puede presentarse en personas de cualquier edad. En la mayoría de los
        casos es leve y se detiene espontáneamente, aunque en algunas situaciones
        puede requerir atención médica.
      </p>

      <p className="fxh-subtitle">¿Qué es la epistaxis? 👃</p>

      <ul className="fxh-list">
        <li>Sangrado que se origina en los vasos sanguíneos de la nariz.</li>
        <li>Puede ocurrir en una o ambas fosas nasales.</li>
        <li>Puede ser leve, moderado o severo.</li>
        <li>Es más frecuente en niños y adultos mayores.</li>
      </ul>

      <p className="fxh-subtitle">Tipos de epistaxis</p>

      <div className="fxh-flex">

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Epistaxis anterior</p>

          <ul className="fxh-list">
            <li>Se origina en la parte frontal del tabique nasal.</li>
            <li>Es el tipo más común.</li>
            <li>Generalmente es fácil de controlar.</li>
          </ul>

        </div>

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Epistaxis posterior</p>

          <ul className="fxh-list">
            <li>Se origina en la parte posterior de la cavidad nasal.</li>
            <li>Es menos frecuente pero más grave.</li>
            <li>Puede requerir atención médica urgente.</li>
          </ul>

        </div>

      </div>

      <p className="fxh-subtitle">Causas comunes ⚠️</p>

      <ul className="fxh-list">
        <li>Ambiente seco o irritación nasal.</li>
        <li>Traumatismos en la nariz.</li>
        <li>Infecciones respiratorias.</li>
        <li>Alergias.</li>
        <li>Uso excesivo de aerosoles nasales.</li>
      </ul>

      <p className="fxh-subtitle">Factores de riesgo</p>

      <ul className="fxh-list">
        <li>Hipertensión arterial.</li>
        <li>Uso de anticoagulantes.</li>
        <li>Trastornos de la coagulación.</li>
        <li>Exposición prolongada a ambientes secos.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas asociados</p>

      <ul className="fxh-list">
        <li>Sangrado por una o ambas fosas nasales.</li>
        <li>Sensación de líquido en la garganta.</li>
        <li>Debilidad si el sangrado es abundante.</li>
        <li>Mareo en casos severos.</li>
      </ul>

      <p className="fxh-subtitle">Primeros auxilios</p>

      <ul className="fxh-list">
        <li>Sentarse e inclinar ligeramente la cabeza hacia adelante.</li>
        <li>Presionar suavemente la parte blanda de la nariz durante 10 minutos.</li>
        <li>Respirar por la boca.</li>
        <li>Aplicar compresas frías en la nariz.</li>
      </ul>

      <p className="fxh-subtitle">Cuándo consultar al médico</p>

      <ul className="fxh-list">
        <li>Si el sangrado dura más de 20 minutos.</li>
        <li>Si ocurre después de un golpe fuerte en la cabeza.</li>
        <li>Si se presenta con frecuencia.</li>
        <li>Si el sangrado es muy abundante.</li>
      </ul>

      <p className="fxh-subtitle">Prevención</p>

      <ul className="fxh-list">
        <li>Mantener la mucosa nasal hidratada.</li>
        <li>Evitar introducir objetos en la nariz.</li>
        <li>Utilizar humidificadores en ambientes secos.</li>
        <li>Tratar adecuadamente alergias e infecciones.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        La <strong>epistaxis</strong> es una condición frecuente que generalmente
        no representa un problema grave. Sin embargo, si los episodios son
        recurrentes o el sangrado es abundante, es importante buscar atención
        médica para identificar la causa y recibir el tratamiento adecuado.
      </p>

    </div>

  );

}

export default Epistaxis;