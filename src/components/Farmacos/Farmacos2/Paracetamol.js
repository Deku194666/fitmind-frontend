import React, { useEffect } from 'react';
import './Paracetamol.css';

function Paracetamol() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail257">

      <p className="fxh-title">💊 Paracetamol</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>paracetamol</strong>, también conocido como
        <strong> acetaminofén</strong>, es un medicamento ampliamente utilizado
        para aliviar el <strong>dolor leve a moderado</strong> y reducir la
        <strong> fiebre</strong>. Es uno de los analgésicos más comunes y
        generalmente se considera seguro cuando se utiliza en las dosis
        recomendadas.
      </p>

      <p className="fxh-text">
        A diferencia de otros analgésicos como los antiinflamatorios no
        esteroideos (AINE), el paracetamol tiene un efecto antiinflamatorio
        limitado y suele causar menos irritación gastrointestinal.
      </p>


      <p className="fxh-subtitle">🧪 Usos médicos</p>

      <ul className="fxh-list">

        <li>Dolor de cabeza</li>
        <li>Dolor dental</li>
        <li>Dolor muscular</li>
        <li>Dolor menstrual</li>
        <li>Fiebre</li>
        <li>Dolor leve asociado a resfriados o gripe</li>

      </ul>


      <p className="fxh-subtitle">⚙️ Mecanismo de acción</p>

      <p className="fxh-text">
        El paracetamol actúa principalmente en el <strong>sistema nervioso
        central</strong>, inhibiendo la producción de sustancias químicas
        relacionadas con el dolor y la fiebre. De esta manera ayuda a
        reducir la temperatura corporal y aliviar la sensación de dolor.
      </p>


      <p className="fxh-subtitle">📋 Dosis comunes</p>

      <ul className="fxh-list">

        <li>Adultos: 500 mg a 1000 mg cada 6 a 8 horas</li>
        <li>Dosis máxima diaria: 4000 mg bajo supervisión médica</li>
        <li>Niños: dosis ajustada según peso corporal</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos secundarios</p>

      <ul className="fxh-list">

        <li>Náuseas</li>
        <li>Erupciones cutáneas</li>
        <li>Reacciones alérgicas en casos raros</li>
        <li>Daño hepático en caso de sobredosis</li>

      </ul>


      <p className="fxh-subtitle">💊 Presentaciones</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Forma</th>
              <th>Dosis común</th>
              <th>Uso</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Tabletas</td>
              <td>500 mg / 650 mg</td>
              <td>Dolor y fiebre</td>
            </tr>

            <tr>
              <td>Cápsulas</td>
              <td>500 mg</td>
              <td>Dolor moderado</td>
            </tr>

            <tr>
              <td>Jarabe o suspensión</td>
              <td>120 mg/5 ml</td>
              <td>Uso pediátrico</td>
            </tr>

            <tr>
              <td>Supositorios</td>
              <td>Dosis variable</td>
              <td>Fiebre en niños</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Precauciones</p>

      <ul className="fxh-list">

        <li>No exceder la dosis máxima recomendada</li>
        <li>Evitar combinar con alcohol</li>
        <li>Usar con precaución en enfermedades hepáticas</li>
        <li>Consultar al médico en embarazo o lactancia</li>
        <li>Revisar otros medicamentos que contengan paracetamol</li>

      </ul>

    </div>

  );

}

export default Paracetamol;