


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Poliuria.css';

function Poliuria() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail308">

      <p className="fxh-title">Poliuria</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>poliuria</strong> es un síntoma caracterizado por la
        producción y eliminación excesiva de orina. Generalmente se
        considera poliuria cuando una persona produce más de
        aproximadamente 3 litros de orina al día en adultos.
        Este síntoma puede estar relacionado con diversas
        enfermedades metabólicas, renales o endocrinas.
      </p>

      <p className="fxh-subtitle">¿Qué es la poliuria? 🚽</p>

      <ul className="fxh-list">
        <li>Aumento anormal en la cantidad de orina.</li>
        <li>Micción frecuente durante el día y la noche.</li>
        <li>Puede provocar deshidratación si no se compensa con líquidos.</li>
        <li>Frecuentemente se asocia con otros síntomas metabólicos.</li>
      </ul>

      <p className="fxh-subtitle">Causas comunes ⚠️</p>

      <ul className="fxh-list">
        <li>Diabetes mellitus.</li>
        <li>Diabetes insípida.</li>
        <li>Consumo excesivo de líquidos.</li>
        <li>Uso de medicamentos diuréticos.</li>
        <li>Trastornos renales.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas asociados</p>

      <ul className="fxh-list">
        <li>Micción frecuente.</li>
        <li>Sed excesiva (polidipsia).</li>
        <li>Deshidratación.</li>
        <li>Fatiga o debilidad.</li>
        <li>Despertares nocturnos para orinar (nicturia).</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico</p>

      <ul className="fxh-list">
        <li>Evaluación clínica del paciente.</li>
        <li>Análisis de orina.</li>
        <li>Pruebas de glucosa en sangre.</li>
        <li>Estudios de función renal.</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento</p>

      <ul className="fxh-list">
        <li>Tratamiento de la causa subyacente.</li>
        <li>Control de enfermedades metabólicas.</li>
        <li>Ajuste de medicamentos si es necesario.</li>
        <li>Mantener una hidratación adecuada.</li>
      </ul>

      <p className="fxh-subtitle">Cuándo consultar al médico</p>

      <ul className="fxh-list">
        <li>Si la producción de orina es excesiva.</li>
        <li>Si se acompaña de sed intensa.</li>
        <li>Si hay pérdida de peso inexplicada.</li>
        <li>Si interfiere con el descanso nocturno.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        La <strong>poliuria</strong> es un síntoma que puede indicar
        alteraciones en el metabolismo, el sistema renal o el
        equilibrio de líquidos del organismo. La evaluación médica
        es fundamental para identificar la causa y establecer el
        tratamiento adecuado.
      </p>

    </div>

  );

}

export default Poliuria;