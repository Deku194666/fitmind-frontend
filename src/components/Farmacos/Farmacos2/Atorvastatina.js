import React, { useEffect } from 'react';
import './Atorvastatina.css';

function Atorvastatina() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail246">

      <p className="fxh-title">💊 Atorvastatina</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>Atorvastatina</strong> es un fármaco hipolipemiante perteneciente
        al grupo de las estatinas. Se utiliza para disminuir los niveles de colesterol
        y triglicéridos en sangre, reduciendo el riesgo cardiovascular en pacientes
        con hipercolesterolemia, dislipidemia mixta o enfermedad cardiovascular.
      </p>


      <p className="fxh-subtitle">🧪 Mecanismo de acción</p>

      <p className="fxh-text">
        Inhibe competitivamente la enzima <strong>HMG-CoA reductasa</strong>, que es
        clave en la síntesis hepática de colesterol. Esto reduce la producción de
        colesterol y aumenta los receptores de LDL en el hígado, favoreciendo la
        eliminación del colesterol LDL circulante.
      </p>


      <p className="fxh-subtitle">📋 Indicaciones clínicas</p>

      <ul className="fxh-list">

        <li>Hipercolesterolemia primaria</li>

        <li>Dislipidemia mixta</li>

        <li>Prevención primaria de enfermedad cardiovascular</li>

        <li>Prevención secundaria en enfermedad cardiovascular</li>

        <li>Hiperlipidemia familiar</li>

      </ul>


      <p className="fxh-subtitle">💊 Dosis habitual</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Indicación</th>
              <th>Dosis inicial</th>
              <th>Rango habitual</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Hipercolesterolemia / dislipidemia</td>
              <td>10 mg al día</td>
              <td>10–80 mg al día</td>
            </tr>

            <tr>
              <td>Prevención cardiovascular</td>
              <td>10–20 mg al día</td>
              <td>Hasta 80 mg según riesgo</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📈 Farmacocinética</p>

      <ul className="fxh-list">

        <li><strong>Absorción:</strong> rápida</li>

        <li><strong>Pico plasmático:</strong> 1–2 horas</li>

        <li><strong>Metabolismo:</strong> hepático (CYP3A4)</li>

        <li><strong>Vida media:</strong> aproximadamente 14 horas</li>

        <li><strong>Eliminación:</strong> principalmente biliar</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Efectos adversos frecuentes</p>

      <ul className="fxh-list">

        <li>Mialgias o dolor muscular</li>

        <li>Elevación de enzimas hepáticas</li>

        <li>Diarrea o molestias gastrointestinales</li>

        <li>Cefalea</li>

        <li>Insomnio</li>

      </ul>


      <p className="fxh-subtitle">🚫 Contraindicaciones</p>

      <ul className="fxh-list">

        <li>Enfermedad hepática activa</li>

        <li>Embarazo y lactancia</li>

        <li>Hipersensibilidad al fármaco</li>

      </ul>


      <p className="fxh-subtitle">🔄 Interacciones relevantes</p>

      <ul className="fxh-list">

        <li>Inhibidores potentes de CYP3A4</li>

        <li>Alcohol o fármacos hepatotóxicos</li>

        <li>Fibratos como gemfibrozilo</li>

        <li>Jugo de pomelo</li>

      </ul>


      <p className="fxh-subtitle">📌 Observaciones prácticas</p>

      <ul className="fxh-list">

        <li>Controlar transaminasas antes y durante el tratamiento</li>

        <li>Advertir síntomas de miopatía o debilidad muscular</li>

        <li>Administrar preferentemente por la noche</li>

        <li>Ajustar dosis si aparecen efectos adversos</li>

      </ul>

    </div>

  );

}

export default Atorvastatina;