

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Neuropatia.css';

function Neuropatia() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail306">

      <p className="fxh-title">Neuropatía</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>neuropatía</strong> es un término utilizado para describir
        diferentes trastornos que afectan los nervios del sistema nervioso
        periférico. Estos nervios son responsables de transmitir señales
        entre el cerebro, la médula espinal y el resto del cuerpo. Cuando
        se dañan, pueden producirse alteraciones en la sensibilidad, el
        movimiento y otras funciones corporales.
      </p>

      <p className="fxh-subtitle">¿Qué es la neuropatía? 🧠</p>

      <ul className="fxh-list">
        <li>Daño o alteración de los nervios periféricos.</li>
        <li>Puede afectar la sensibilidad, el movimiento o ambos.</li>
        <li>Puede desarrollarse gradualmente o de forma repentina.</li>
        <li>Puede afectar una zona específica o varias partes del cuerpo.</li>
      </ul>

      <p className="fxh-subtitle">Tipos de neuropatía</p>

      <div className="fxh-flex">

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Neuropatía periférica</p>

          <ul className="fxh-list">
            <li>Afecta los nervios de las extremidades.</li>
            <li>Puede causar entumecimiento o dolor.</li>
            <li>Es común en personas con diabetes.</li>
          </ul>

        </div>

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Neuropatía autonómica</p>

          <ul className="fxh-list">
            <li>Afecta los nervios que controlan funciones automáticas.</li>
            <li>Puede alterar la digestión o la presión arterial.</li>
            <li>Puede afectar la frecuencia cardíaca.</li>
          </ul>

        </div>

      </div>

      <p className="fxh-subtitle">Causas comunes ⚠️</p>

      <ul className="fxh-list">
        <li>Diabetes mellitus.</li>
        <li>Infecciones virales o bacterianas.</li>
        <li>Deficiencias nutricionales.</li>
        <li>Enfermedades autoinmunes.</li>
        <li>Exposición a toxinas o ciertos medicamentos.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas asociados</p>

      <ul className="fxh-list">
        <li>Hormigueo o entumecimiento.</li>
        <li>Dolor punzante o ardor.</li>
        <li>Debilidad muscular.</li>
        <li>Pérdida de sensibilidad.</li>
        <li>Dificultad para coordinar movimientos.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico</p>

      <ul className="fxh-list">
        <li>Evaluación clínica y neurológica.</li>
        <li>Estudios de conducción nerviosa.</li>
        <li>Electromiografía.</li>
        <li>Análisis de sangre.</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento</p>

      <ul className="fxh-list">
        <li>Tratamiento de la causa subyacente.</li>
        <li>Medicamentos para el dolor neuropático.</li>
        <li>Terapia física o rehabilitación.</li>
        <li>Control de enfermedades asociadas.</li>
      </ul>

      <p className="fxh-subtitle">Prevención</p>

      <ul className="fxh-list">
        <li>Control adecuado de la diabetes.</li>
        <li>Mantener una alimentación equilibrada.</li>
        <li>Evitar consumo excesivo de alcohol.</li>
        <li>Realizar actividad física regularmente.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        La <strong>neuropatía</strong> puede afectar significativamente la
        calidad de vida debido a los problemas de sensibilidad y movimiento
        que provoca. Un diagnóstico temprano y el tratamiento adecuado
        ayudan a controlar los síntomas y prevenir complicaciones.
      </p>

    </div>

  );

}

export default Neuropatia;