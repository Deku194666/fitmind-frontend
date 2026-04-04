

import React, { useEffect } from 'react';
import './Tramadol.css';

function Tramadol() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail261">

      <p className="fxh-title">💊 Tramadol</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        El <strong>tramadol</strong> es un medicamento utilizado para
        tratar el <strong>dolor moderado a intenso</strong>. Pertenece
        al grupo de los <strong>analgésicos opioides</strong>, los cuales
        actúan sobre el sistema nervioso central para disminuir la
        percepción del dolor.
      </p>

      <p className="fxh-text">
        Este medicamento se prescribe comúnmente cuando otros analgésicos
        más suaves no son suficientes. Puede utilizarse en situaciones
        como <strong>dolor postoperatorio, lesiones, dolor crónico
        o enfermedades que generan dolor intenso</strong>.
      </p>


      <p className="fxh-subtitle">🧪 Usos médicos</p>

      <ul className="fxh-list">

        <li>Dolor moderado a severo</li>
        <li>Dolor postoperatorio</li>
        <li>Dolor musculoesquelético</li>
        <li>Dolor crónico</li>
        <li>Dolor asociado a lesiones o traumatismos</li>

      </ul>


      <p className="fxh-subtitle">⚙️ Mecanismo de acción</p>

      <p className="fxh-text">
        El tramadol actúa uniéndose a los <strong>receptores opioides</strong>
        del sistema nervioso central. Además, influye en la recaptación
        de neurotransmisores como <strong>serotonina y noradrenalina</strong>,
        lo que contribuye a reducir la sensación de dolor en el organismo.
      </p>


      <p className="fxh-subtitle">📋 Dosis comunes</p>

      <ul className="fxh-list">

        <li>Dosis inicial habitual: 50 mg</li>
        <li>Dosis cada 4 a 6 horas según necesidad</li>
        <li>Dosis máxima diaria generalmente: 400 mg</li>
        <li>La dosis debe ser indicada por un profesional de salud</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos secundarios</p>

      <ul className="fxh-list">

        <li>Náuseas</li>
        <li>Mareos</li>
        <li>Somnolencia</li>
        <li>Estreñimiento</li>
        <li>Sudoración</li>

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
              <td>50 mg</td>
              <td>Dolor moderado</td>
            </tr>

            <tr>
              <td>Cápsulas</td>
              <td>100 mg</td>
              <td>Dolor moderado a intenso</td>
            </tr>

            <tr>
              <td>Tabletas de liberación prolongada</td>
              <td>100 mg / 200 mg</td>
              <td>Dolor crónico</td>
            </tr>

            <tr>
              <td>Inyección</td>
              <td>Dosis médica</td>
              <td>Dolor intenso hospitalario</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Precauciones</p>

      <ul className="fxh-list">

        <li>Puede causar dependencia si se usa por tiempo prolongado</li>
        <li>No combinar con alcohol</li>
        <li>Puede provocar somnolencia o mareos</li>
        <li>Usar con precaución en personas con problemas respiratorios</li>
        <li>Seguir siempre las indicaciones médicas</li>

      </ul>

    </div>

  );

}

export default Tramadol;