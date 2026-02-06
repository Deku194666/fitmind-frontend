import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cancer.css';

function Cancer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cancer-container">

      <p className="title-main">Cáncer</p>

      <p className="title-section">📌 Introducción</p>
      <p className="text-body">
        El <strong>Cáncer</strong> es una enfermedad crónica y multifactorial caracterizada por el crecimiento
        descontrolado de células anormales que pueden invadir tejidos y producir metástasis.
        Existen más de 100 tipos distintos, siendo una de las principales causas de mortalidad mundial.
      </p>

      <p className="title-section">🧬 Fisiopatología</p>
      <ul className="text-body">
        <li>Mutaciones genéticas (protooncogenes y genes supresores).</li>
        <li>Proliferación celular descontrolada.</li>
        <li>Angiogénesis tumoral.</li>
        <li>Metástasis por vía linfática o hematógena.</li>
        <li>Alteraciones del microambiente tumoral.</li>
      </ul>

      <p className="title-section">📌 Clasificación</p>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Tipo de cáncer</th>
            <th>Tejido de origen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Carcinoma</td>
            <td>Epitelial</td>
          </tr>
          <tr>
            <td>Sarcoma</td>
            <td>Tejido conectivo</td>
          </tr>
          <tr>
            <td>Leucemia</td>
            <td>Médula ósea / sangre</td>
          </tr>
          <tr>
            <td>Linfoma</td>
            <td>Sistema linfático</td>
          </tr>
          <tr>
            <td>Melanoma</td>
            <td>Células pigmentarias</td>
          </tr>
        </tbody>
      </table>

      <p className="text-body">
        También se clasifica por estadios (I–IV) según extensión local y metástasis.
      </p>

      <p className="title-section">⚠️ Causas</p>
      <ul className="text-body">
        <li>Factores genéticos (BRCA1/2, TP53).</li>
        <li>Exposición a carcinógenos (tabaco, alcohol, radiación).</li>
        <li>Infecciones (VPH, hepatitis B/C, VIH).</li>
        <li>Factores hormonales.</li>
        <li>Estilo de vida poco saludable.</li>
      </ul>

      <p className="title-section">🧪 Diagnóstico</p>
      <p className="text-body">
        Biopsia, estudios de imagen (<Link to="/examenes/rnm">RMN</Link>,{' '}
        <Link to="/examenes/tc">TC</Link>, PET), marcadores tumorales y evaluación clínica.
      </p>

      <p className="title-section">💊 Tratamiento médico</p>
      <ul className="text-body">
        <li>Quimioterapia.</li>
        <li>Terapias dirigidas.</li>
        <li>Inmunoterapia.</li>
        <li>Radioterapia.</li>
        <li>Cirugía oncológica.</li>
      </ul>

      <p className="title-section">🧘 Tratamiento no farmacológico</p>
      <ul className="text-body">
        <li>Dieta balanceada y antioxidante.</li>
        <li>Ejercicio físico adaptado.</li>
        <li>Apoyo psicológico.</li>
        <li>Educación sanitaria.</li>
        <li>Cuidados paliativos en fases avanzadas.</li>
      </ul>

      <p className="title-section">🧨 Complicaciones</p>
      <ul className="text-body">
        <li>Metástasis.</li>
        <li>Inmunosupresión.</li>
        <li>Anemia y alteraciones hematológicas.</li>
        <li>Dolor crónico.</li>
        <li>Trastornos psicológicos (ansiedad, depresión).</li>
      </ul>

      <p className="title-section">📌 Conclusión</p>
      <p className="text-body">
        El <strong> Cáncer |</strong> requiere un enfoque integral e interdisciplinario.
        La prevención, detección precoz y tratamientos personalizados
        son claves para mejorar el pronóstico y la calidad de vida.
      </p>

    </div>
  );
}

export default Cancer;
