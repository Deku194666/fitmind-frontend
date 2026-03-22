import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ArtrosisHombro.css";

function ArtrosisHombro() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="fxa-detail">

      <h1 className="fxa-title">Artrosis de Hombro (Omartrosis)</h1>

      <h2 className="fxa-subtitle">📌 Introducción</h2>
      <p className="fxa-text">
        La artrosis de hombro es una <strong>degeneración progresiva del cartílago articular glenohumeral</strong>, menos frecuente que en caderas/rodillas pero con gran impacto funcional. 
        Afecta al <strong>5-10% de mayores de 65 años</strong> y suele ser secundaria a roturas crónicas del manguito rotador o traumatismos.
      </p>

      <h2 className="fxa-subtitle">🦴 Anatomía Clave</h2>
      <ul className="fxa-list">
        <li><strong>Articulación glenohumeral</strong>: Superficie convexa humeral vs glenoides cóncava (solo 25-30% de congruencia)</li>
        <li><strong>Manguito rotador</strong>: Estabilizador dinámico (supraespinoso, infraespinoso, subescapular, redondo menor)</li>
        <li><strong>Cartílago hialino</strong>: 1.5-2mm de espesor en cabeza humeral</li>
        <li><strong>Relaciones anatómicas</strong>: Nervio axilar, arteria circunfleja humeral</li>
      </ul>

      <h2 className="fxa-subtitle">📊 Clasificación de la Artrosis de Hombro</h2>
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
              <td>Pinzamiento articular mínimo, osteofitos incipientes</td>
              <td>Dolor post-actividad, movilidad conservada</td>
            </tr>
            <tr>
              <td><strong>Moderada</strong></td>
              <td>Pinzamiento mayor a 50%, esclerosis subcondral, osteofitos marginales</td>
              <td>Dolor nocturno, limitación funcional, crepitación</td>
            </tr>
            <tr>
              <td><strong>Severa</strong></td>
              <td>Pérdida completa del espacio articular, geodas subcondrales, deformación cabeza humeral</td>
              <td>Dolor en reposo, rigidez importante, pseudoparálisis</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxa-subtitle">🤕 Factores de Riesgo</h2>
      <ul className="fxa-list">
        <li><strong>Rotura crónica de manguito</strong>: Artropatía por manguito roto (80% de casos)</li>
        <li><strong>Traumatismos</strong>: Fracturas de cabeza humeral o glenoides</li>
        <li><strong>Necrosis avascular</strong>: Uso prolongado de corticoides, alcoholismo</li>
        <li><strong>Inestabilidad</strong>: Luxaciones recidivantes</li>
        <li><strong>Enfermedades sistémicas</strong>: Artritis reumatoide, condrocalcinosis</li>
      </ul>

      <h2 className="fxa-subtitle">🩺 Diagnóstico</h2>
      <h3 className="fxa-subsubtitle">1. Manifestaciones Clínicas</h3>
      <ul className="fxa-list">
        <li><strong>Síndrome articular</strong>
          <ul className="fxa-sublist">
            <li>Dolor mecánico en cara anterolateral del hombro</li>
            <li>Rigidez progresiva (especialmente rotación externa)</li>
            <li>Crepitación palpable durante movimientos</li>
          </ul>
        </li>
        <li><strong>Exploración física</strong>
          <ul className="fxa-sublist">
            <li>Arco doloroso (60-120° de abducción)</li>
            <li>Limitación de rotación interna (signo de la mano en la espalda)</li>
            <li>Atrofia de músculos del manguito en casos avanzados</li>
          </ul>
        </li>
        <li><strong>Pruebas especiales</strong>
          <ul className="fxa-sublist">
            <li>Test de Neer/Hawkins (dolor en conflicto subacromial)</li>
            <li>Signo del clarín (dolor al llevar la mano a la boca)</li>
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
              <td>Pinzamiento articular, osteofitos, migración superior de cabeza humeral</td>
              <td>Proyecciones específicas (AP, axilar, outlet)</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Estado del manguito rotador, cartílago residual, edema óseo</td>
              <td>Evaluar tejidos blandos</td>
            </tr>
            <tr>
              <td>TAC</td>
              <td>Defectos óseos glenoides, versión glenoidea</td>
              <td>Planificación protésica</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Estado del manguito rotador, derrame articular</td>
              <td>Evaluación dinámica</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxa-subtitle">🏥 Tratamiento Conservador</h2>
      <ul className="fxa-list">
        <li>Artrosis grado leve-moderado</li>
        <li>Pacientes no candidatos a cirugía</li>
        <li>Primera línea en todos los casos</li>
      </ul>

      <h2 className="fxa-subtitle">💉 Tratamiento Intervencionista</h2>
      <ul className="fxa-list">
        <li><strong>Viscosuplementación</strong>: Ácido hialurónico intraarticular (3-5 aplicaciones)</li>
        <li><strong>PRP (Plasma Rico en Plaquetas)</strong>: Para artrosis temprana con cartílago residual</li>
        <li><strong>Radiofrecuencia</strong>: Denervación de nervios articulares (suprascapular, axilar)</li>
      </ul>

      <h2 className="fxa-subtitle">🔪 Tratamiento Quirúrgico</h2>
      <ul className="fxa-list">
        <li>Dolor incapacitante refractario a tratamiento conservador</li>
        <li>Pérdida funcional grave</li>
        <li>Artrosis severa con destrucción articular en imagen</li>
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
              <td>Aguda (0-4 sem)</td>
              <td>Protección de reparación, control del dolor</td>
              <td>Inmovilización con cabestrillo, ejercicios pasivos</td>
            </tr>
            <tr>
              <td>Recuperación (4-12 sem)</td>
              <td>Recuperar ROM progresivo</td>
              <td>Ejercicios activo-asistidos, estiramientos</td>
            </tr>
            <tr>
              <td>Fortalecimiento (mayor a 12 sem)</td>
              <td>Recuperar fuerza y función</td>
              <td>Ejercicios contra resistencia, reentrenamiento funcional</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxa-subtitle">⚠️ Complicaciones</h2>
      <ul className="fxa-list">
        <li><strong>Rigidez postquirúrgica</strong>: Capsulitis adhesiva</li>
        <li><strong>Infección de prótesis</strong>: 0.5-3% de casos</li>
        <li><strong>Fallo de implante</strong>: Aflojamiento aséptico</li>
        <li><strong>Lesión nerviosa</strong>: Nervio axilar o musculocutáneo</li>
      </ul>

      <h2 className="fxa-subtitle">🛡️ Prevención</h2>
      <ul className="fxa-list">
        <li><strong>Manejo precoz de roturas de manguito</strong>: Reparación quirúrgica cuando indicado</li>
        <li><strong>Ejercicios de estabilización escapular</strong>: Fortalecimiento de serrato anterior/trapecio inferior</li>
        <li><strong>Evitar microtraumatismos repetidos</strong>: Modificación de gestos laborales o deportivos</li>
      </ul>

      <h2 className="fxa-subtitle">Conclusión</h2>
      <p className="fxa-text">
        La artrosis de hombro es una condición <strong>discapacitante que requiere enfoque multidisciplinario</strong>. 
        El tratamiento conservador es fundamental en estadios iniciales, mientras que la artroplastia ofrece excelentes resultados en casos avanzados. 
        La rehabilitación especializada y el manejo de factores predisponentes son clave para preservar la función articular.
      </p>

    </div>
  );
}

export default ArtrosisHombro;
