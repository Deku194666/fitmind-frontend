

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Fiebre.css';

function Fiebre() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail313">

      <p className="fxh-title">Fiebre</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        La <strong>fiebre</strong> es un aumento de la temperatura corporal por encima de lo normal,
        generalmente como respuesta del organismo a infecciones u otros procesos inflamatorios.
      </p>

      <p className="fxh-subtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li> - Liberación de pirógenos (citocinas).</li>
        <li> - Activación del hipotálamo.</li>
        <li> - Aumento del punto de regulación térmica.</li>
        <li> - Producción de calor (escalofríos).</li>
      </ul>

      <p className="fxh-subtitle">Clasificación</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Temperatura</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Febrícula</td>
              <td>37.5°C - 38°C</td>
            </tr>
            <tr>
              <td>Fiebre moderada</td>
              <td>38°C - 39°C</td>
            </tr>
            <tr>
              <td>Fiebre alta</td>
              <td>&gt; 39°C</td>
            </tr>
            <tr>
              <td>Hiperpirexia</td>
              <td>&gt; 41°C</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Causas ⚠️</p>
      <ul className="fxh-list">
        <li> - Infecciones (virus, bacterias).</li>
        <li> - Enfermedades inflamatorias.</li>
        <li> - Reacciones a medicamentos.</li>
        <li> - <Link to="/ecnt/cancer">Cáncer</Link>.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas 🔍</p>
      <ul className="fxh-list">
        <li> - Aumento de temperatura corporal.</li>
        <li> - Escalofríos.</li>
        <li> - Sudoración.</li>
        <li> - <Link to="/bienestarmental/enfmentales/tag">Malestar general</Link>.</li>
      </ul>

      <p className="fxh-subtitle">🚨 Signos de alarma</p>
      <ul className="fxh-list">
        <li> - Temperatura mayor a 40°C.</li>
        <li> - Convulsiones.</li>
        <li> - Confusión.</li>
        <li> - Dificultad respiratoria.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🧪</p>
      <ul className="fxh-list">
        <li> - Evaluación clínica.</li>
        <li> - Exámenes de laboratorio.</li>
        <li> - Cultivos según sospecha.</li>
      </ul>

      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-flex">

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Medidas generales</p>
          <ul className="fxh-list">
            <li> - Hidratación adecuada.</li>
            <li> - Reposo.</li>
            <li> - Ropa ligera.</li>
          </ul>
        </div>

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Tratamiento médico</p>
          <ul className="fxh-list">
            <li> - Antipiréticos (paracetamol).</li>
            <li> - Tratamiento de la causa.</li>
            <li> - Antibióticos si corresponde.</li>
          </ul>
        </div>

      </div>

      <p className="fxh-subtitle">Complicaciones</p>
      <ul className="fxh-list">
        <li> - Deshidratación.</li>
        <li> - Convulsiones febriles.</li>
        <li> - Deterioro del estado general.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        La fiebre es un mecanismo de defensa del organismo. Sin embargo, debe vigilarse
        especialmente en niños, adultos mayores o cuando alcanza valores elevados.
      </p>

    </div>
  );
}

export default Fiebre;