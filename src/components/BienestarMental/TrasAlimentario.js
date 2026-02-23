import React, { useEffect } from 'react';
import NavBarTrasAlimen from './NavBarTrasAlimen';
import './TrasAlimentario.css';

function TrasAlimentario() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <NavBarTrasAlimen />

      <p className="fxh-title">Trastornos de la Conducta Alimentaria</p>

      <p className="fxh-subsubtitle">📌Introducción</p>
      <p className="fxh-text">
        Los <strong>Trastornos de la Conducta Alimentaria (TCA)</strong> son condiciones graves caracterizadas por alteraciones persistentes
        en la alimentación y comportamientos asociados que afectan la salud física y mental. Van mucho más allá de "querer estar delgado":
        son trastornos biopsicosociales con la <strong>mayor mortalidad de todas las enfermedades psiquiátricas</strong> (5-10% a 10 años en anorexia).
        Suelen comenzar en la adolescencia y requieren un abordaje multidisciplinar (nutricional, psicológico y médico).
      </p>

      <p className="fxh-subsubtitle">📌 Anorexia Nerviosa</p>
      <p className="fxh-text">
        La anorexia nerviosa se caracteriza por <strong>restricción alimentaria extrema</strong>, miedo intenso a ganar peso y alteración en la percepción corporal.
        Afecta al <strong>1-2% de mujeres jóvenes</strong> (9:1 ratio mujeres/hombres) y tiene una tasa de recaída del 30-50%.
      </p>

      <p className="fxh-text"><strong>Plan nutricional progresivo:</strong></p>
      <ul className="fxh-list">
        <li><strong>Fase 1 (estabilización):</strong> 1,200-1,500 kcal/día con supervisión médica.</li>
        <li><strong>Fase 2 (restauración):</strong> Aumento gradual hasta 2,000-3,000 kcal/día.</li>
        <li><strong>Fase 3 (mantenimiento):</strong> Educación nutricional para prevenir recaídas.</li>
        <li><strong>Suplementos:</strong> Zinc, fósforo y vitamina D para corregir deficiencias.</li>
      </ul>

      <p className="fxh-text"><strong>Ejercicios de imagen corporal:</strong></p>
      <ul className="fxh-list">
        <li><strong>Espejo terapéutico:</strong> Observación guiada sin juicios.</li>
        <li><strong>Dibujo de silueta:</strong> Comparar percepción vs realidad.</li>
        <li><strong>Exposición gradual:</strong> Uso de ropa ajustada o espejos completos.</li>
      </ul>

      <p className="fxh-subsubtitle">📌 Bulimia Nerviosa</p>
      <p className="fxh-text">
        La bulimia se define por <strong>episodios recurrentes de atracones</strong> seguidos de conductas compensatorias inapropiadas (vómitos, laxantes).
        Afecta al <strong>1-3% de la población</strong> y es más frecuente en mujeres (10:1). El 70% tiene peso normal, lo que dificulta su detección.
      </p>

      <p className="fxh-text"><strong>Ciclo de atracones-purga:</strong></p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Características</th>
              <th>Intervención</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Restricción</td>
              <td>Dietas extremas o ayuno</td>
              <td>Plan de 3 comidas + 2 snacks</td>
            </tr>
            <tr>
              <td>2. Atracón</td>
              <td>Ingesta de ≥2,000 kcal en mayor a 2h</td>
              <td>Técnicas de demora (ej.: esperar 15 min)</td>
            </tr>
            <tr>
              <td>3. Purga</td>
              <td>Vómitos/laxantes/exceso ejercicio</td>
              <td>Exposición con prevención de respuesta</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-text"><strong>Alternativas saludables:</strong></p>
      <ul className="fxh-list">
        <li><strong>Alimentos "puente":</strong> Palitos de zanahoria/apio para manejar urgencias.</li>
        <li><strong>Kit de emergencia:</strong> Lista de actividades distractoras (llamar a un amigo, pintar).</li>
        <li><strong>Diario emocional:</strong> Identificar detonantes (aburrimiento, estrés).</li>
      </ul>

      <p className="fxh-subsubtitle">📌 Trastorno por Atracón</p>
      <p className="fxh-text">
        Similar a la bulimia pero <strong>sin conductas compensatorias</strong>. Afecta al <strong>2-3.5% de adultos</strong> (ratio hombres/mujeres más equilibrado: 2:1).
        Asociado a obesidad en el 60% de casos.
      </p>

      <p className="fxh-text"><strong>Detonantes emocionales:</strong></p>
      <ul className="fxh-list">
        <li><strong>Emociones negativas:</strong> Ansiedad (45% de casos), aburrimiento (30%).</li>
        <li><strong>Dietas restrictivas:</strong> 68% de pacientes reportan antecedentes.</li>
        <li><strong>Estímulos ambientales:</strong> Ver comida o publicidad alimentaria.</li>
      </ul>

      <p className="fxh-text"><strong>Mindful eating:</strong></p>
      <ul className="fxh-list">
        <li><strong>Técnica del plato consciente:</strong> 20 minutos mínimo por comida.</li>
        <li><strong>Escala de hambre/saciedad:</strong> Comer solo entre 3-7 (escala del 1-10).</li>
        <li><strong>Ejercicio de la pasa:</strong> Observar textura, olor y sabor lentamente.</li>
      </ul>

      <p className="fxh-subsubtitle">📌 Tratamientos Clave</p>
      <ul className="fxh-list">
        <li><strong>Anorexia:</strong> Terapia familiar (Maudsley) + realimentación supervisada.</li>
        <li><strong>Bulimia:</strong> TCC específica para TCA + ISRS.</li>
        <li><strong>Atracón:</strong> Terapia dialéctico-conductual (DBT) + lisdexanfetamina.</li>
      </ul>

      <p className="fxh-subsubtitle">🌱 Prevención</p>
      <ul className="fxh-list">
        <li><strong>Educación mediática:</strong> Alfabetización sobre retoques digitales.</li>
        <li><strong>Detección temprana:</strong> Test SCOFF en consultas de adolescentes.</li>
        <li><strong>Promoción de autoestima:</strong> Basada en logros no corporales.</li>
      </ul>
    </div>
  );
}

export default TrasAlimentario;
