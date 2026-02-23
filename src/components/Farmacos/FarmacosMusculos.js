import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FarmacosMusculos.css';

function FarmacosMusculos() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <p className="fxh-title">Fármacos para Músculos</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los fármacos utilizados para el tratamiento de condiciones musculares tienen como objetivo reducir el espasmo,
        el dolor y mejorar la función motora. Estos incluyen relajantes musculares, espasmolíticos y adyuvantes como
        algunos antiepilépticos o antidepresivos empleados en casos de dolor muscular crónico.
      </p>

      <p className="fxh-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="fxh-list">
        <li>Inhibición de la excitabilidad neuronal medular o supramedular (relajantes centrales).</li>
        <li>Bloqueo directo del acoplamiento excitación-contracción (relajantes periféricos).</li>
        <li>Modulación del dolor muscular crónico mediante vías serotoninérgicas o gabaérgicas.</li>
      </ul>

      <p className="fxh-subtitle">📋 Indicaciones Principales</p>
      <ul className="fxh-list">
        <li>Espasmos musculares agudos</li>
        <li>Espasticidad por daño neurológico (esclerosis múltiple, ECV, etc.)</li>
        <li>Contracturas musculares postraumáticas o posturales</li>
        <li>Dolor miofascial</li>
        <li>Adyuvante en rehabilitación musculoesquelética</li>
      </ul>

      <p className="fxh-subtitle">💊 Ejemplos Comunes</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Clasificación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ciclobenzaprina</td>
              <td>5–10 mg cada 8 h</td>
              <td>Relajante muscular central</td>
            </tr>
            <tr>
              <td>Tizanidina</td>
              <td>2–4 mg cada 8 h</td>
              <td>Agonista alfa-2 central</td>
            </tr>
            <tr>
              <td>Baclofeno</td>
              <td>5–20 mg cada 8 h</td>
              <td>Agonista GABA-B</td>
            </tr>
            <tr>
              <td>
                <Link to="/farmacos/farmacos2/diazepam" className="fxh-link">
                  Diazepam
                </Link>
              </td>
              <td>2–10 mg cada 8 h</td>
              <td>Benzodiacepina (adyuvante)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">⚠️ Efectos Adversos</p>
      <ul className="fxh-list">
        <li>Somnolencia y sedación</li>
        <li>Hipotonía o debilidad muscular</li>
        <li>Sequedad bucal (Tizanidina)</li>
        <li>Hipotensión ortostática</li>
        <li>Riesgo de dependencia (benzodiacepinas)</li>
      </ul>

      <p className="fxh-subtitle">🔄 Contraindicaciones</p>
      <ul className="fxh-list">
        <li>Miastenia gravis</li>
        <li>Insuficiencia hepática grave</li>
        <li>Trastornos respiratorios (riesgo de depresión respiratoria)</li>
        <li>Uso conjunto con depresores del SNC</li>
      </ul>

      <p className="fxh-subtitle">📉 Interacciones Relevantes</p>
      <ul className="fxh-list">
        <li>Con alcohol u opioides: aumento de efectos sedantes</li>
        <li>Con antihipertensivos: mayor riesgo de hipotensión</li>
        <li>Con antidepresivos tricíclicos: posible potenciación de efectos anticolinérgicos</li>
      </ul>

      <p className="fxh-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="fxh-list">
        <li>Usar por períodos breves (7–14 días) cuando es posible</li>
        <li>Evitar conducción o tareas que requieran alerta</li>
        <li>Evaluar riesgo de sedación, caídas y dependencia</li>
        <li>Combinar con fisioterapia para mejores resultados funcionales</li>
      </ul>

    </div>
  );
}

export default FarmacosMusculos;
