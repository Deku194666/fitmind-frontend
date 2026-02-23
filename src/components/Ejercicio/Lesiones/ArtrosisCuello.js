import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ArtrosisCuello.css";

function ArtrosisCuello() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="fxa-detail">

      <h1 className="fxa-title">Artrosis Cervical (Espondiloartrosis Cervical)</h1>

      <h2 className="fxa-subtitle">📌 Introducción</h2>
      <p className="fxa-text">
        La artrosis cervical es una <strong>degeneración progresiva de las articulaciones facetarias y discos intervertebrales</strong> de la columna cervical, afectando al <strong>60-80% de mayores de 50 años</strong>. 
        Es la causa más común de dolor cervical crónico en adultos y puede producir compresión radicular o mielopatía en casos avanzados.
      </p>

      <h2 className="fxa-subtitle">🦴 Anatomía Clave</h2>
      <ul className="fxa-list">
        <li><strong>Segmentos afectados</strong>: C5-C6 (40%) y C6-C7 (30%) son los más frecuentes</li>
        <li><strong>Articulaciones facetarias</strong>: Sinoviales, susceptibles a cambios artrósicos</li>
        <li><strong>Uncus vertebral</strong>: Forma articulaciones uncovertebrales (de Luschka)</li>
        <li><strong>Relaciones anatómicas</strong>: Raíces nerviosas C5 a C8, arteria vertebral</li>
      </ul>

      <h2 className="fxa-subtitle">📊 Clasificación de la Artrosis Cervical</h2>
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
              <td>Dolor cervical intermitente, rigidez matutina</td>
            </tr>
            <tr>
              <td><strong>Moderada</strong></td>
              <td>Osteofitos definidos, esclerosis subcondral, pinzamiento discal moderado</td>
              <td>Dolor crónico, limitación de movimiento, radiculalgia ocasional</td>
            </tr>
            <tr>
              <td><strong>Severa</strong></td>
              <td>Osteofitos grandes, estrechamiento foraminal, posible mielopatía</td>
              <td>Radiculopatía persistente, déficit neurológico, mielopatía cervical</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxa-subtitle">🤕 Factores de Riesgo</h2>
      <ul className="fxa-list">
        <li><strong>Edad</strong>: Prevalencia aumenta al 90% en mayores de 65 años</li>
        <li><strong>Ocupacional</strong>: Trabajos con vibración o movimientos repetitivos del cuello</li>
        <li><strong>Traumatismos</strong>: Accidentes de tránsito (latigazo cervical)</li>
        <li><strong>Genética</strong>: Historia familiar de artrosis</li>
        <li><strong>Postura</strong>: "Tech neck" por uso prolongado de dispositivos</li>
      </ul>

      <h2 className="fxa-subtitle">🩺 Diagnóstico</h2>
      <h3 className="fxa-subsubtitle">1. Manifestaciones Clínicas</h3>
      <ul className="fxa-list">
        <li><strong>Síndrome cervical</strong>
          <ul className="fxa-sublist">
            <li>Dolor localizado en nuca (mecánico, mejora con reposo)</li>
            <li>Rigidez matutina mayor a 30 minutos</li>
            <li>Crepitación con movimientos cervicales</li>
          </ul>
        </li>
        <li><strong>Radiculopatía cervical</strong>
          <ul className="fxa-sublist">
            <li>Dolor irradiado en dermatoma específico</li>
            <li>Parestesias, hipoestesia, debilidad muscular</li>
            <li>Reflejos osteotendinosos disminuidos</li>
          </ul>
        </li>
        <li><strong>Mielopatía cervical</strong>
          <ul className="fxa-sublist">
            <li>Marcha espástica, clonus, signo de Babinski</li>
            <li>Pérdida de destreza manual (signo del "botón")</li>
            <li>Disfunción esfinteriana en casos avanzados</li>
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
              <td>Osteofitos, pinzamiento discal, esclerosis</td>
              <td>Evaluación inicial</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Compresión medular/radicular, cambios degenerativos discales</td>
              <td>Evaluación de tejidos blandos</td>
            </tr>
            <tr>
              <td>TAC</td>
              <td>Detalle óseo, osteofitos foraminales</td>
              <td>Planificación quirúrgica</td>
            </tr>
            <tr>
              <td>EMG</td>
              <td>Denervación aguda/crónica en miotomas</td>
              <td>Confirmación radiculopatía</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxa-subtitle">🏥 Tratamiento Conservador</h2>
      <ul className="fxa-list">
        <li>Artrosis cervical sin déficit neurológico</li>
        <li>Radiculopatía leve-moderada</li>
        <li>Primera línea en todos los casos</li>
      </ul>

      <h2 className="fxa-subtitle">💊 Protocolo Conservador</h2>
      <ul className="fxa-list">
        <li><strong>Farmacoterapia</strong>
          <ul className="fxa-sublist">
            <li>AINEs (ibuprofeno, naproxeno) por periodos cortos</li>
            <li>Relajantes musculares (ciclibenzaprina, tizanidina)</li>
            <li>Analgésicos (paracetamol, tramadol)</li>
            <li>Gabapentinoides para dolor neuropático</li>
          </ul>
        </li>
        <li><strong>Terapia física</strong>
          <ul className="fxa-sublist">
            <li>Ejercicios de fortalecimiento cervical</li>
            <li>Movilizaciones pasivas y tracción cervical</li>
            <li>Termoterapia/electroterapia</li>
          </ul>
        </li>
        <li><strong>Ortesis</strong>
          <ul className="fxa-sublist">
            <li>Collarín blando (uso limitado a 1-2 semanas)</li>
          </ul>
        </li>
      </ul>

      <h2 className="fxa-subtitle">💉 Tratamiento Intervencionista</h2>
      <ul className="fxa-list">
        <li><strong>Infiltraciones facetarias</strong>
          <ul className="fxa-sublist">
            <li>Corticoides + anestésico local bajo guía fluoroscópica</li>
            <li>Eficacia en 60-70% de casos seleccionados</li>
          </ul>
        </li>
        <li><strong>Bloqueos foraminales</strong>
          <ul className="fxa-sublist">
            <li>Para radiculopatías refractarias</li>
          </ul>
        </li>
        <li><strong>Rizólisis por radiofrecuencia</strong>
          <ul className="fxa-sublist">
            <li>Denervación de articulaciones facetarias dolorosas</li>
            <li>Alivio por 6-12 meses</li>
          </ul>
        </li>
      </ul>

      <h2 className="fxa-subtitle">🔪 Tratamiento Quirúrgico</h2>
      <ul className="fxa-list">
        <li>Mielopatía cervical progresiva</li>
        <li>Radiculopatía con déficit motor severo/persistente</li>
        <li>Fallo de tratamiento conservador mayor a 3 meses</li>
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
              <td>Modificación actividades, termoterapia</td>
            </tr>
            <tr>
              <td>Subaguda (2-6 sem)</td>
              <td>Recuperar ROM, inicio fortalecimiento</td>
              <td>Ejercicios isométricos, movilizaciones</td>
            </tr>
            <tr>
              <td>Avanzada (6-12 sem)</td>
              <td>Fortalecimiento profundo, reeducación postural</td>
              <td>Ejercicios contra resistencia, ergonomía</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxa-subtitle">⚠️ Complicaciones</h2>
      <ul className="fxa-list">
        <li><strong>Radiculopatía irreversible</strong>: Por compresión prolongada</li>
        <li><strong>Mielopatía cervical</strong>: Daño medular permanente</li>
        <li><strong>Síndrome de la arteria vertebral</strong>: Por osteofitos grandes</li>
        <li><strong>Disfagia</strong>: En artrosis cervical anterior severa</li>
      </ul>

      <h2 className="fxa-subtitle">🛡️ Prevención</h2>
      <ul className="fxa-list">
        <li><strong>Ergonomía postural</strong>
          <ul className="fxa-sublist">
            <li>Ajuste de estaciones de trabajo</li>
            <li>Posición neutra de cabeza al usar dispositivos</li>
          </ul>
        </li>
        <li><strong>Ejercicios cervicales</strong>
          <ul className="fxa-sublist">
            <li>Fortalecimiento de músculos profundos</li>
            <li>Movilizaciones suaves diarias</li>
          </ul>
        </li>
        <li><strong>Control de factores metabólicos</strong>: Diabetes, obesidad</li>
      </ul>

      <h2 className="fxa-subtitle">Conclusión</h2>
      <p className="fxa-text">
        La artrosis cervical es una condición <strong>frecuente y potencialmente discapacitante</strong> que requiere enfoque escalonado. 
        Mientras la mayoría de pacientes responden al manejo conservador, los casos con compromiso neurológico pueden requerir intervención quirúrgica. 
        La educación postural y el ejercicio terapéutico son pilares fundamentales para prevenir la progresión y mantener la funcionalidad cervical.
      </p>

    </div>
  );
}

export default ArtrosisCuello;
