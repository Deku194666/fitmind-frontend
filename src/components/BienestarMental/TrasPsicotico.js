import React, { useEffect } from 'react';
import NavBarTrasPsico from './NavBarTrasPsico';
import './TrasPsicotico.css';

function TrasPsicotico() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail10">
      <NavBarTrasPsico />

      <p className="fxh-title">Trastornos Psicóticos</p>

      <p className="fxh-subsubtitle">📌Introducción</p>
      <p className="fxh-text">
        Los trastornos psicóticos son condiciones graves que afectan la capacidad de pensar con claridad, gestionar emociones y percibir la realidad. Se caracterizan por la presencia de <strong>psicosis</strong>: síntomas como delirios, alucinaciones y pensamiento desorganizado. A diferencia de lo que se cree popularmente, no implican "doble personalidad", sino una ruptura con la realidad que requiere intervención multidisciplinaria.
      </p>

      <p className="fxh-subsubtitle">📌 Esquizofrenia</p>
      <p className="fxh-text">
        La esquizofrenia es el trastorno psicótico más conocido, con una prevalencia del <strong>0.3-0.7%</strong> mundial. Afecta la cognición, las emociones y la conducta, generalmente apareciendo entre los <strong>16 y 30 años</strong>.
      </p>

      <p className="fxh-text"><strong>Primeros signos de alerta:</strong></p>
      <ul className="fxh-list">
        <li>Aislamiento social progresivo.</li>
        <li>Deterioro en la higiene personal.</li>
        <li>Habla desorganizada o incoherente.</li>
        <li>Creencias extrañas no compartidas por su cultura (ej.: "mis pensamientos se transmiten por radio").</li>
        <li>Percepción alterada (escuchar voces o ver sombras inexistentes).</li>
      </ul>

      <p className="fxh-text"><strong>Entrenamiento cognitivo:</strong></p>
      <ul className="fxh-list">
        <li><strong>Terapia Cognitivo-Conductual para Psicosis (TCCP):</strong> Reestructuración de creencias delirantes mediante pruebas de realidad.</li>
        <li><strong>Remediación cognitiva:</strong> Ejercicios para mejorar memoria, atención y función ejecutiva.</li>
        <li><strong>Psicoeducación grupal:</strong> Enseñar a identificar pródromos (señales tempranas de recaída).</li>
      </ul>

      <p className="fxh-subsubtitle">📌 Trastorno Delirante</p>
      <p className="fxh-text">
        El trastorno delirante se caracteriza por <strong>delirios no extraños</strong> (situaciones plausibles pero falsas) que persisten ≥1 mes, sin alucinaciones prominentes. Afecta al <strong>0.2%</strong> de la población, con igual frecuencia en hombres y mujeres.
      </p>

      <p className="fxh-text"><strong>Tipos de delirios:</strong></p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Característica</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Persecutorio</td>
              <td>Creencia de ser espiado/atacado</td>
              <td>"Mis vecinos envenenan mi comida"</td>
            </tr>
            <tr>
              <td>Grandiosidad</td>
              <td>Autoimagen exagerada</td>
              <td>"Tengo poderes telepáticos"</td>
            </tr>
            <tr>
              <td>Celotípico</td>
              <td>Infidelidad sin pruebas</td>
              <td>"Mi pareja usa códigos secretos con el cartero"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-text"><strong>Estrategias familiares:</strong></p>
      <ul className="fxh-list">
        <li><strong>Comunicación no confrontativa:</strong> Evitar discusiones directas sobre el delirio ("¿Qué te hace pensar eso?" vs. "¡Eso es falso!").</li>
        <li><strong>Manejo de crisis:</strong> Contactar con psiquiatría si hay agitación o riesgo de auto/heteroagresión.</li>
        <li><strong>Reducción de estrés:</strong> Mantener rutinas predecibles y ambientes calmados.</li>
        <li><strong>Grupos de apoyo:</strong> Organizaciones como FEAFES (España) o NAMI (EE.UU.).</li>
      </ul>

      <p className="fxh-subtitle">📌 Tratamientos Clave</p>
      <ul className="fxh-list">
        <li><strong>Antipsicóticos:</strong> Risperidona, Olanzapina (controlan síntomas positivos como alucinaciones).</li>
        <li><strong>Terapia psicosocial:</strong> Entrenamiento en habilidades sociales y laborales.</li>
        <li><strong>Intervenciones familiares:</strong> Mejoran la adherencia al tratamiento y reducen recaídas.</li>
      </ul>
    </div>
  );
}

export default TrasPsicotico;
