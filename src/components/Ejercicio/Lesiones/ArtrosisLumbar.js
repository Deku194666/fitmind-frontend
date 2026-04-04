import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ArtrosisLumbar.css";

function ArtrosisLumbar() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="fxa-detail">

      <h1 className="fxa-title">Artrosis Lumbar (Espondiloartrosis Lumbar)</h1>

      <h2 className="fxa-subtitle">📌 Introducción</h2>
      <p className="fxa-text">
        La artrosis lumbar es una <strong>degeneración progresiva de las articulaciones facetarias y discos intervertebrales</strong> de la columna lumbar, afectando al <strong>70% de mayores de 40 años</strong>. 
        Es la causa más común de lumbalgia crónica en adultos y puede producir compresión radicular o estenosis lumbar en casos avanzados.
      </p>

      <h2 className="fxa-subtitle">🦴 Anatomía Clave</h2>
      <ul className="fxa-list">
        <li><strong>Segmentos afectados</strong>: L4-L5 (45%) y L5-S1 (40%) son los más frecuentes</li>
        <li><strong>Articulaciones facetarias</strong>: Sinoviales, con orientación sagital que limita la rotación</li>
        <li><strong>Disco intervertebral</strong>: Núcleo pulposo y anillo fibroso sujeto a deshidratación</li>
        <li><strong>Relaciones anatómicas</strong>: Raíces nerviosas L4 a S1, cauda equina</li>
      </ul>

      <h2 className="fxa-subtitle">📊 Clasificación de la Artrosis Lumbar</h2>
      <div className="fxa-table-wrapper">
        <table className="fxa-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Hallazgos Radiológicos</th>
              <th>Manifestaciones Clínicas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Leve</strong></td>
              <td>Osteofitos incipientes, leve disminución del espacio discal</td>
              <td>Lumbalgia mecánica intermitente, rigidez matutina</td>
            </tr>
            <tr>
              <td><strong>Moderada</strong></td>
              <td>Osteofitos definidos, esclerosis subcondral, pinzamiento discal moderado</td>
              <td>Dolor crónico, limitación de movimiento, ciatalgia ocasional</td>
            </tr>
            <tr>
              <td><strong>Severa</strong></td>
              <td>Osteofitos grandes, estrechamiento foraminal, espondilolistesis</td>
              <td>Radiculopatía persistente, claudicación neurogénica, déficit neurológico</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxa-subtitle">🤕 Factores de Riesgo</h2>
      <ul className="fxa-list">
        <li><strong>Edad</strong>: Prevalencia mayor a 80% en mayores de 55 años</li>
        <li><strong>Ocupacional</strong>: Trabajos con levantamiento de pesos o vibración</li>
        <li><strong>Obesidad</strong>: Aumenta carga sobre articulaciones facetarias</li>
        <li><strong>Sedentarismo</strong>: Debilidad de musculatura paravertebral</li>
        <li><strong>Traumatismos</strong>: Fracturas vertebrales previas</li>
      </ul>

      <h2 className="fxa-subtitle">🩺 Diagnóstico</h2>
      <h3 className="fxa-subsubtitle">1. Manifestaciones Clínicas</h3>
      <ul className="fxa-list">
        <li><strong>Síndrome lumbar</strong>
          <ul className="fxa-sublist">
            <li>Dolor localizado en región lumbar (mecánico, mejora en decúbito)</li>
            <li>Rigidez matutina menor a 30 minutos</li>
            <li>Crepitación con movimientos</li>
          </ul>
        </li>
        <li><strong>Radiculopatía lumbar</strong>
          <ul className="fxa-sublist">
            <li>Ciatalgia (dolor irradiado a glúteo/pierna en dermatoma específico)</li>
            <li>Signo de Lasègue positivo</li>
            <li>Debilidad muscular segmentaria</li>
          </ul>
        </li>
        <li><strong>Estenosis lumbar</strong>
          <ul className="fxa-sublist">
            <li>Claudicación neurogénica (dolor al caminar que mejora al sentarse)</li>
            <li>Parestesias en ambas piernas</li>
            <li>Disfunción vesical en casos avanzados</li>
          </ul>
        </li>
      </ul>

      <h3 className="fxa-subsubtitle">2. Estudios de Imagen</h3>
      <div className="fxa-table-wrapper">
        <table className="fxa-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/examenes/rx">Radiografía</Link></td>
              <td>Osteofitos, pinzamiento discal, esclerosis facetaria</td>
              <td>Evaluación inicial</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Compresión radicular, degeneración discal, estenosis canal</td>
              <td>Estudio gold standard</td>
            </tr>
            <tr>
              <td>TAC</td>
              <td>Detalle óseo, osteofitos foraminales</td>
              <td>Planificación quirúrgica</td>
            </tr>
            <tr>
              <td>EMG</td>
              <td>Denervación en miotomas afectados</td>
              <td>Diferenciar radiculopatía de neuropatía</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxa-subtitle">🏥 Tratamiento Conservador</h2>
      <ul className="fxa-list">
        <li>Artrosis lumbar sin déficit neurológico</li>
        <li>Radiculopatía leve-moderada</li>
        <li>Primera línea en todos los casos</li>
      </ul>

      <h2 className="fxa-subtitle">💉 Tratamiento Intervencionista</h2>
      <ul className="fxa-list">
        <li><strong>Infiltraciones facetarias</strong>: Corticoides intraarticulares bajo guía fluoroscópica (50-60% de eficacia)</li>
        <li><strong>Bloqueos epidurales</strong>: Para radiculopatías refractarias</li>
        <li><strong>Rizólisis por radiofrecuencia</strong>: Denervación de ramas mediales para dolor facetario</li>
      </ul>

      <h2 className="fxa-subtitle">🔪 Tratamiento Quirúrgico</h2>
      <ul className="fxa-list">
        <li>Síndrome de cauda equina (urgencia)</li>
        <li>Radiculopatía con déficit motor progresivo</li>
        <li>Estenosis lumbar con claudicación incapacitante</li>
        <li>Fallo de tratamiento conservador mayor a 6 meses</li>
      </ul>

      <h2 className="fxa-subtitle">🏋️‍♂️ Rehabilitación</h2>
      <div className="fxa-table-wrapper">
        <table className="fxa-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Objetivos</th>
              <th>Intervenciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aguda (0-2 sem)</td>
              <td>Control del dolor, protección</td>
              <td>Reposo relativo, educación postural</td>
            </tr>
            <tr>
              <td>Subaguda (2-6 sem)</td>
              <td>Recuperar movilidad</td>
              <td>Ejercicios de flexibilización, hidroterapia</td>
            </tr>
            <tr>
              <td>Avanzada (mayor a 6 sem)</td>
              <td>Fortalecimiento profundo</td>
              <td>Ejercicios de core stability, reentrenamiento funcional</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxa-subtitle">⚠️ Complicaciones</h2>
      <ul className="fxa-list">
        <li><strong>Radiculopatía crónica</strong>: Por compresión prolongada</li>
        <li><strong>Síndrome de cauda equina</strong>: Urgencia quirúrgica</li>
        <li><strong>Estenosis lumbar severa</strong>: Claudicación neurogénica incapacitante</li>
        <li><strong>Inestabilidad vertebral</strong>: Espondilolistesis degenerativa</li>
      </ul>

      <h2 className="fxa-subtitle">🛡️ Prevención</h2>
      <ul className="fxa-list">
        <li><strong>Higiene postural</strong>: Técnicas adecuadas para levantar pesos, adaptación ergonómica de puestos de trabajo</li>
        <li><strong>Ejercicio regular</strong>: Fortalecimiento de musculatura abdominal y lumbar, actividades de bajo impacto</li>
        <li><strong>Control de peso</strong>: Reducción de IMC mayor a 25</li>
      </ul>

      <h2 className="fxa-subtitle">Conclusión</h2>
      <p className="fxa-text">
        La artrosis lumbar es una condición <strong>prevalente y multifactorial</strong> cuyo manejo requiere enfoque multidisciplinario. 
        El tratamiento conservador es efectivo en la mayoría de casos, reservando la cirugía para situaciones con compromiso neurológico. 
        La prevención mediante ejercicio terapéutico y corrección postural es clave para reducir la progresión y mantener la funcionalidad.
      </p>

    </div>
  );
}

export default ArtrosisLumbar;
