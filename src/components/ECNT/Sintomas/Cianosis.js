

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cianosis.css';

function Cianosis() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail300">

      <p className="fxh-title">Cianosis</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>cianosis</strong> es una coloración azulada o violácea de la piel
        y las mucosas causada por una disminución en la cantidad de oxígeno en la
        sangre. Este signo clínico puede observarse con mayor frecuencia en los
        labios, las uñas, las manos y los pies. Puede estar asociado a problemas
        respiratorios, cardiovasculares o trastornos de la circulación.
      </p>

      <p className="fxh-subtitle">¿Qué es la cianosis? 🫁</p>

      <ul className="fxh-list">
        <li> - Cambio de coloración de la piel hacia tonos azulados.</li>
        <li> - Indica niveles bajos de oxígeno en la sangre.</li>
        <li> - Puede aparecer de forma súbita o progresiva.</li>
        <li> - Es un signo clínico que requiere evaluación médica.</li>
      </ul>

      <p className="fxh-subtitle">Tipos de cianosis</p>

      <div className="fxh-flex">

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Cianosis central</p>

          <ul className="fxh-list">
            <li> - Afecta labios, lengua y mucosas.</li>
            <li> - Relacionada con problemas respiratorios o cardíacos.</li>
            <li> - Indica disminución del oxígeno en la sangre arterial.</li>
          </ul>

        </div>

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Cianosis periférica</p>

          <ul className="fxh-list">
            <li> - Afecta manos, pies y uñas.</li>
            <li> - Relacionada con mala circulación sanguínea.</li>
            <li> - Puede aparecer con exposición al frío.</li>
          </ul>

        </div>

      </div>

      <p className="fxh-subtitle">Causas comunes ⚠️</p>

      <ul className="fxh-list">
        <li> - Enfermedades respiratorias.</li>
        <li> - Problemas cardíacos.</li>
        <li> - Obstrucción de las vías respiratorias.</li>
        <li> - Exposición a temperaturas muy bajas.</li>
        <li> - Alteraciones en la circulación sanguínea.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas asociados</p>

      <ul className="fxh-list">
        <li> - Coloración azulada en labios o uñas.</li>
        <li> - Dificultad para respirar.</li>
        <li> - Fatiga o debilidad.</li>
        <li> - Mareo o confusión en casos graves.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico</p>

      <ul className="fxh-list">
        <li> -  Evaluación clínica del paciente.</li>
        <li> - Medición de saturación de oxígeno.</li>
        <li> - Análisis de gases en sangre.</li>
        <li> - Radiografía de tórax o estudios cardiológicos.</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento</p>

      <ul className="fxh-list">
        <li> - Tratamiento de la causa subyacente.</li>
        <li> - Administración de oxígeno en casos necesarios.</li>
        <li> - Medicamentos según la condición médica.</li>
        <li> - Control médico especializado.</li>
      </ul>

      <p className="fxh-subtitle">Cuándo buscar atención médica</p>

      <ul className="fxh-list">
        <li> - Si la coloración azulada aparece de forma repentina.</li>
        <li> - Si se acompaña de dificultad respiratoria.</li>
        <li> - Si existe dolor en el pecho.</li>
        <li> - Si los síntomas empeoran rápidamente.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        La <strong>cianosis</strong> es un signo clínico importante que indica
        una posible falta de oxígeno en la sangre. Aunque puede tener causas
        leves en algunos casos, también puede estar relacionada con enfermedades
        graves del sistema respiratorio o cardiovascular, por lo que siempre
        debe ser evaluada por un profesional de salud.
      </p>

    </div>

  );

}

export default Cianosis;