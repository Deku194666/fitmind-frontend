import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Osteoporosis.css';

function Osteoporosis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="osteoporosis-container">

      <p className="title-main">Osteoporosis</p>

      <p className="title-section">📌 Introducción</p>
      <p className="text-body">
        La <strong>Osteoporosis</strong> es una enfermedad esquelética sistémica caracterizada por la
        disminución de la densidad mineral ósea y el deterioro de la microarquitectura del hueso,
        lo que incrementa el riesgo de fracturas. Es frecuente en mujeres posmenopáusicas y adultos
        mayores, y suele ser una <strong>enfermedad silenciosa</strong> hasta la aparición de una fractura.
      </p>

      <p className="title-section">🧬 Fisiopatología</p>
      <ul className="text-body">
        <li>Desequilibrio del remodelado óseo: aumenta la resorción y disminuye la formación.</li>
        <li>Déficit de estrógenos y testosterona.</li>
        <li>Aumento de la actividad de osteoclastos.</li>
        <li>Reducción de la masa ósea y debilitamiento estructural.</li>
        <li>Microfracturas acumulativas.</li>
      </ul>

      <p className="title-section">📌 Clasificación</p>

      <p className="text-body"><strong>Según la causa:</strong></p>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Características</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primaria tipo I</td>
            <td>Posmenopáusica (déficit estrogénico).</td>
          </tr>
          <tr>
            <td>Primaria tipo II</td>
            <td>Senil (mayores de 70 años).</td>
          </tr>
          <tr>
            <td>Secundaria</td>
            <td>Asociada a enfermedades o medicamentos (corticoides).</td>
          </tr>
        </tbody>
      </table>

      <p className="text-body"><strong>Según T-score (DEXA):</strong></p>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Clasificación</th>
            <th>T-score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Normal</td>
            <td>≥ -1</td>
          </tr>
          <tr>
            <td>Osteopenia</td>
            <td>-1 a -2.5</td>
          </tr>
          <tr>
            <td>Osteoporosis</td>
            <td>≤ -2.5</td>
          </tr>
          <tr>
            <td>Osteoporosis severa</td>
            <td>≤ -2.5 + fractura</td>
          </tr>
        </tbody>
      </table>

      <p className="title-section">⚠️ Causas</p>
      <ul className="text-body">
        <li>Envejecimiento.</li>
        <li>Deficiencia hormonal.</li>
        <li>Menopausia precoz.</li>
        <li>Dieta pobre en calcio y vitamina D.</li>
        <li>Sedentarismo.</li>
        <li>Alcohol y tabaco.</li>
        <li>Uso prolongado de corticoides.</li>
        <li>
          Enfermedades crónicas como
          <Link to="/ecnt/erc"> enfermedad renal crónica</Link>.
        </li>
      </ul>

      <p className="title-section">🔍 Síntomas</p>
      <ul className="text-body">
        <li>Fracturas con traumatismos mínimos.</li>
        <li>Dolor lumbar crónico.</li>
        <li>Pérdida de estatura.</li>
        <li>Postura encorvada (cifosis).</li>
      </ul>

      <p className="title-section">🧪 Diagnóstico</p>
      <ul className="text-body">
        <li>Densitometría ósea (DEXA).</li>
        <li>Marcadores óseos.</li>
        <li>Historia clínica y factores de riesgo.</li>
        <li>
          <Link to="/examenes/radiografia"> Radiografía</Link> para fracturas vertebrales ocultas.
        </li>
      </ul>

      <p className="title-section">💊 Tratamiento Médico</p>
      <p className="text-body">
        El objetivo es prevenir fracturas y preservar la masa ósea.
      </p>
      <ul className="text-body">
        <li>Calcio 1000–1200 mg/día.</li>
        <li>Vitamina D 800–1000 UI/día.</li>
        <li>Bifosfonatos (alendronato, risedronato).</li>
        <li>Denosumab.</li>
        <li>Raloxifeno.</li>
        <li>Teriparatida.</li>
      </ul>

      <p className="title-section">🧘 Tratamiento No Farmacológico</p>
      <ul className="text-body">
        <li>Dieta rica en calcio y vitamina D.</li>
        <li>Ejercicio de resistencia.</li>
        <li>Prevención de caídas.</li>
        <li>Abandono del tabaco.</li>
        <li>Exposición solar moderada.</li>
      </ul>

      <p className="title-section">🧨 Complicaciones</p>
      <ul className="text-body">
        <li>Fractura de cadera, columna y muñeca.</li>
        <li>Pérdida de movilidad.</li>
        <li>Disminución de calidad de vida.</li>
        <li>
          <Link to="/bienestarmental/enfmentales/depresion"> Depresión</Link>.
        </li>
      </ul>

      <p className="title-section">📌 Conclusión</p>
      <p className="text-body">
        La <strong>Osteoporosis</strong> es una enfermedad silenciosa pero prevenible.
        El diagnóstico precoz y un abordaje integral reducen significativamente el
        riesgo de fracturas y discapacidad.
      </p>

    </div>
  );
}

export default Osteoporosis;
