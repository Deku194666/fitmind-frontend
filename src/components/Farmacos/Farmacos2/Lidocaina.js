

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Lidocaina.css';

function Lidocaina() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (

    <div className="fxh-detail290">

      <p className="fxh-title">Lidocaína</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>Lidocaína</strong> es un fármaco perteneciente a la clase de los
        <strong> antiarrítmicos clase IB</strong> y también se utiliza ampliamente
        como <strong>anestésico local</strong>. Actúa bloqueando los canales de
        sodio dependientes de voltaje, lo que reduce la conducción eléctrica
        en el tejido cardíaco y bloquea la transmisión del dolor en nervios periféricos.
      </p>

      <p className="fxh-subtitle">🧬 Mecanismo de acción</p>

      <ul className="fxh-list">
        <li>Bloqueo de los <strong>canales de sodio</strong> dependientes de voltaje.</li>
        <li>Disminuye la velocidad de despolarización en fibras cardíacas.</li>
        <li>Reduce la automaticidad ventricular.</li>
        <li>Estabiliza la membrana neuronal bloqueando la conducción del dolor.</li>
      </ul>

      <p className="fxh-subtitle">Clasificación farmacológica</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Clasificación</th>
              <th>Descripción</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Clase farmacológica</td>
              <td>Antiarrítmico clase IB</td>
            </tr>

            <tr>
              <td>Uso adicional</td>
              <td>Anestésico local tipo amida</td>
            </tr>

            <tr>
              <td>Vías de administración</td>
              <td>Intravenosa, tópica, infiltración local</td>
            </tr>

            <tr>
              <td>Inicio de acción</td>
              <td>Rápido (especialmente IV)</td>
            </tr>
          </tbody>

        </table>
      </div>

      <p className="fxh-subtitle">Indicaciones clínicas ⚠️</p>

      <ul className="fxh-list">
        <li>Tratamiento de <Link to="/ecnt/arritmias">arritmias ventriculares</Link>.</li>
        <li>Taquicardia ventricular.</li>
        <li>Arritmias asociadas a <Link to="/ecnt/iam">infarto agudo al miocardio</Link>.</li>
        <li>Anestesia local en procedimientos menores.</li>
        <li>Bloqueos nerviosos regionales.</li>
      </ul>

      <p className="fxh-subtitle">Efectos adversos 🔍</p>

      <ul className="fxh-list">
        <li>Mareo y somnolencia.</li>
        <li>Parestesias.</li>
        <li>Confusión o convulsiones en toxicidad.</li>
        <li>Hipotensión.</li>
        <li>Bradicardia o arritmias.</li>
      </ul>

      <p className="fxh-subtitle">Signos de toxicidad</p>

      <ul className="fxh-list">
        <li>Convulsiones.</li>
        <li>Pérdida de conciencia.</li>
        <li>Depresión respiratoria.</li>
        <li>Arritmias graves.</li>
      </ul>

      <p className="fxh-subtitle">💊 Dosis y administración</p>

      <div className="fxh-flex">

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Uso antiarrítmico</p>

          <ul className="fxh-list">
            <li>Bolo IV inicial.</li>
            <li>Infusión continua en casos seleccionados.</li>
            <li>Uso en unidades monitorizadas.</li>
          </ul>

        </div>

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Uso anestésico</p>

          <ul className="fxh-list">
            <li>Infiltración local.</li>
            <li>Bloqueos nerviosos periféricos.</li>
            <li>Preparaciones tópicas.</li>
          </ul>

        </div>

      </div>

      <p className="fxh-subtitle">Contraindicaciones</p>

      <ul className="fxh-list">
        <li>Hipersensibilidad a anestésicos tipo amida.</li>
        <li>Bloqueo cardíaco severo sin marcapasos.</li>
        <li>Shock cardiogénico.</li>
      </ul>

      <p className="fxh-subtitle">Interacciones farmacológicas</p>

      <ul className="fxh-list">
        <li>Otros antiarrítmicos.</li>
        <li>Betabloqueadores.</li>
        <li>Fármacos que afectan el metabolismo hepático.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        La <strong>lidocaína</strong> es un fármaco ampliamente utilizado tanto
        en el manejo de <Link to="/ecnt/arritmias">arritmias ventriculares</Link>
        como en procedimientos de <strong>anestesia local</strong>. Su rápida
        acción y eficacia la convierten en una herramienta importante en
        medicina de emergencia, cardiología y anestesiología.
      </p>

    </div>

  );

}

export default Lidocaina;