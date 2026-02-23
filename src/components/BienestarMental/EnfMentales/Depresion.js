import React, { useEffect } from 'react';
import './Depresion.css';

function Depresion() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <p className='fxh-title'>Depresión</p>

      <p className='fxh-subtitle'>📌 Introducción</p>
      <p className='fxh-text'>
        La <strong>Depresión</strong> es un trastorno del estado de ánimo incapacitante 
        que afecta a millones de personas en el mundo. No es simplemente “estar triste”, 
        sino una condición médica caracterizada por alteraciones neuroquímicas 
        y cambios estructurales cerebrales. Es una de las principales causas de discapacidad global.
      </p>

      <p className='fxh-subtitle'>🧠 Tipos de Depresión</p>

      <p className='fxh-subsubtitle'>📌 Depresión Mayor Típica</p>
      <ul className='fxh-list'>
        <li>Episodios ≥2 semanas con síntomas graves.</li>
        <li>Puede ser recurrente.</li>
      </ul>

      <p className='fxh-subsubtitle'>📌 Depresión Melancólica</p>
      <ul className='fxh-list'>
        <li>Pérdida de placer en actividades.</li>
        <li>Empeoramiento matutino.</li>
      </ul>

      <p className='fxh-subsubtitle'>📌 Depresión Atípica</p>
      <ul className='fxh-list'>
        <li>Reactividad emocional.</li>
        <li>Aumento de apetito y sueño.</li>
      </ul>

      <p className='fxh-subsubtitle'>📌 Depresión Psicótica</p>
      <ul className='fxh-list'>
        <li>Presencia de delirios o alucinaciones.</li>
      </ul>

      <p className='fxh-subtitle'>🧬 Fisiopatología</p>
      <p className='fxh-text'>El cerebro deprimido puede presentar:</p>
      <ul className='fxh-list'>
        <li><strong>Desequilibrio neuroquímico:</strong> ↓ Serotonina, ↓ Noradrenalina, ↓ Dopamina.</li>
        <li><strong>Cambios estructurales:</strong> Hipocampo reducido, menor actividad prefrontal.</li>
      </ul>

      <p className='fxh-subtitle'>📌 Factores de Riesgo</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Biológicos</th>
              <th>Psicológicos</th>
              <th>Ambientales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Historia familiar</td>
              <td>Baja autoestima</td>
              <td>Estrés crónico</td>
            </tr>
            <tr>
              <td>Alteraciones hormonales</td>
              <td>Perfeccionismo</td>
              <td>Trauma infantil</td>
            </tr>
            <tr>
              <td>Enfermedades crónicas</td>
              <td>Pensamiento rígido</td>
              <td>Aislamiento social</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subtitle'>🚨 Síntomas Clave (DSM-5)</p>
      <p className='fxh-subsubtitle'>💡 Requisito: 5+ síntomas ≥2 semanas</p>
      <ul className='fxh-list'>
        <li>Estado de ánimo depresivo.</li>
        <li>Pérdida de interés.</li>
        <li>Cambios de peso/apetito.</li>
        <li>Insomnio o hipersomnia.</li>
        <li>Fatiga constante.</li>
        <li>Culpa excesiva.</li>
        <li>Dificultad de concentración.</li>
        <li>Pensamientos de muerte.</li>
      </ul>

      <p className='fxh-subtitle'>🩺 Diagnóstico</p>

      <p className='fxh-subsubtitle'>Evaluación Clínica</p>
      <ul className='fxh-list'>
        <li>Entrevista estructurada (PHQ-9).</li>
        <li>Descartar causas médicas.</li>
      </ul>

      <p className='fxh-subsubtitle'>Escalas Validadas</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Test</th>
              <th>Qué Mide</th>
              <th>Puntaje</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PHQ-9</td>
              <td>Severidad</td>
              <td>0-27</td>
            </tr>
            <tr>
              <td>Hamilton</td>
              <td>Síntomas físicos</td>
              <td>0-52</td>
            </tr>
            <tr>
              <td>Beck</td>
              <td>Pensamientos negativos</td>
              <td>0-63</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subsubtitle'>Exámenes Complementarios</p>
      <ul className='fxh-list'>
        <li>Analítica sanguínea.</li>
        <li>Neuroimagen en casos resistentes.</li>
      </ul>

      <p className='fxh-subtitle'>💊 Tratamiento</p>

      <p className='fxh-subsubtitle'>Farmacológico</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Clase</th>
              <th>Ejemplos</th>
              <th>Mecanismo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ISRS</td>
              <td>Fluoxetina, Sertralina</td>
              <td>↑ Serotonina</td>
            </tr>
            <tr>
              <td>IRSN</td>
              <td>Venlafaxina, Duloxetina</td>
              <td>↑ Serotonina + Noradrenalina</td>
            </tr>
            <tr>
              <td>Atípicos</td>
              <td>Bupropión</td>
              <td>↑ Dopamina</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subsubtitle'>No Farmacológico</p>
      <ul className='fxh-list'>
        <li>Terapia Cognitivo-Conductual.</li>
        <li>Mindfulness.</li>
        <li>Estimulación Magnética Transcraneal (rTMS).</li>
      </ul>

      <p className='fxh-subtitle'>🌱 Prevención y Manejo</p>

      <p className='fxh-subsubtitle'>Rutinas Saludables</p>
      <ul className='fxh-list'>
        <li>Ejercicio aeróbico.</li>
        <li>Higiene del sueño.</li>
        <li>Exposición solar.</li>
      </ul>

      <p className='fxh-subsubtitle'>Técnicas de Autogestión</p>
      <ul className='fxh-list'>
        <li>Diario emocional.</li>
        <li>Lista de actividades placenteras.</li>
      </ul>

      <p className='fxh-subsubtitle'>Señales de Alerta</p>
      <ul className='fxh-list'>
        <li>Aislamiento social.</li>
        <li>Abandono de responsabilidades.</li>
      </ul>

      <p className='fxh-subtitle'>📌 Conclusión</p>
      <p className='fxh-text'>
        La depresión es una condición médica tratable que requiere un abordaje integral. 
        La combinación de tratamiento farmacológico, terapia psicológica 
        y cambios en el estilo de vida ha demostrado alta efectividad. 
        Con apoyo adecuado, es posible recuperar calidad de vida.
      </p>

    </div>
  );
}

export default Depresion;
