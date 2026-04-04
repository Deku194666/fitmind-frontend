import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FxMMdedos.css';

function FxMMdedos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail29">
      <p className="fxh-title">Fracturas de Muñeca, Mano y Dedos</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las fracturas de la extremidad distal del miembro superior representan <strong>el 25% de todas las fracturas</strong> en adultos, 
        siendo particularmente frecuentes en población activa y anciana. Su correcto manejo es esencial para preservar 
        la función de prensión y la destreza manual.
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Muñeca</strong>: 8 huesos del carpo, articulación radiocarpiana</li>
        <li><strong>Mano</strong>: 5 metacarpianos (1° móvil, 2° y 3° fijos, 4° y 5° semimóviles)</li>
        <li><strong>Dedos</strong>: Falanges proximales, medias (excepto pulgar) y distales</li>
        <li><strong>Arcos de la mano</strong>: Longitudinal, transversal y oblicuo</li>
      </ul>

      <p className="fxh-subtitle">Clasificación de Fracturas 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Localización</th>
              <th>Fractura Común</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Muñeca</strong></td>
              <td>Colles</td>
              <td>Desplazamiento dorsal + acortamiento radial</td>
            </tr>
            <tr>
              <td><strong>Muñeca</strong></td>
              <td>Smith</td>
              <td>"Fractura reversa de Colles" (desplazamiento volar)</td>
            </tr>
            <tr>
              <td><strong>Carpo</strong></td>
              <td>Escafoides</td>
              <td>Riesgo de necrosis avascular (polo proximal)</td>
            </tr>
            <tr>
              <td><strong>Metacarpianos</strong></td>
              <td>Boxer's fracture</td>
              <td>5° metacarpiano (cuello), angulación aceptable hasta 40°</td>
            </tr>
            <tr>
              <td><strong>Falanges</strong></td>
              <td>Tuft</td>
              <td>Fractura distal del pulgar por aplastamiento</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Mecanismos de Lesión 🤕</p>
      <ul className="fxh-list">
        <li><strong>Caída sobre mano extendida (FOOSH)</strong>: 75% de fracturas de muñeca</li>
        <li><strong>Trauma directo</strong>: Golpes, aplastamientos, accidentes laborales</li>
        <li><strong>Trauma torsional</strong>: Fracturas espirales en dedos</li>
        <li><strong>Deportes de contacto</strong>: Boxeo, artes marciales, baloncesto</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🩺</p>
      <p className="fxh-subsubtitle">1. Examen Físico</p>
      <ul className="fxh-list">
        <li><strong>Inspección</strong>: Deformidad, edema, heridas abiertas</li>
        <li><strong>Palpación</strong>: Dolor focal en tabaquera anatómica (escafoides)</li>
        <li><strong>Movilidad</strong>: Limitación dolorosa de flexoextensión</li>
        <li><strong>Pruebas especiales</strong>: Compresión axial en dedos</li>
      </ul>

      <p className="fxh-subsubtitle">2. Estudios de Imagen</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Indicación</th>
              <th>Hallazgos Clave</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/examenes/rx">Radiografía</Link></td>
              <td>Estudio inicial</td>
              <td>AP, lateral y oblicuas; línea de fractura</td>
            </tr>
            <tr>
              <td><Link to="/examenes/tac">TAC</Link></td>
              <td>Fracturas complejas</td>
              <td>Reconstrucción 3D, escalón articular</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Sospecha escafoides</td>
              <td>Edema óseo, fractura oculta</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Puntos dolorosos focales</td>
              <td>Cortical interrumpida, hematoma</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>
      <ul className="fxh-list">
        <li>Fracturas no desplazadas o mínimamente desplazadas</li>
        <li>Fracturas estables de falanges y metacarpianos</li>
        <li>Pacientes de bajo riesgo funcional</li>
      </ul>

      <p className="fxh-subsubtitle">Protocolos por Localización:</p>
      <ul className="fxh-list">
        <li><strong>Muñeca (Colles/Smith)</strong>
          <ul className="fxh-sublist">
            <li>Reducción cerrada bajo anestesia si desplazada</li>
            <li>Yeso braquiopalmar por 4-6 semanas</li>
            <li>Control radiográfico semanal inicial</li>
          </ul>
        </li>
        <li><strong>Escafoides</strong>
          <ul className="fxh-sublist">
            <li>Inmovilización con yeso braquiopulgar</li>
            <li>12-16 semanas de inmovilización</li>
            <li>RMN de control a las 6 semanas</li>
          </ul>
        </li>
        <li><strong>Metacarpianos</strong>
          <ul className="fxh-sublist">
            <li>Férula ulnar para 4°-5° metacarpiano</li>
            <li>Angulación aceptable según dedo (5° hasta 40°)</li>
            <li>Movilización precoz de interfalángicas</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>
      <ul className="fxh-list">
        <li>Fracturas abiertas</li>
        <li>Compromiso neurovascular</li>
        <li>Inestabilidad articular (mayor a 2mm escalón)</li>
        <li>Fracturas-luxaciones carpianas</li>
      </ul>

      <ul className="fxh-list">
        <li><strong>Osteosíntesis con placa</strong>: Fracturas desplazadas de radio distal</li>
        <li><strong>Clavos percutáneos (K-wires)</strong>: Fracturas metacarpianas inestables</li>
        <li><strong>Tornillos canulados</strong>: Fracturas de escafoides</li>
        <li><strong>Fijación externa</strong>: Fracturas conminutas severas</li>
        <li><strong>Artroscopia asistida</strong>: Fracturas articulares complejas</li>
      </ul>

      <p className="fxh-subtitle">Rehabilitación 🏋️‍♂️</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Muñeca</th>
              <th>Mano/Dedos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aguda (0-2 sem)</td>
              <td>Inmovilización estricta</td>
              <td>Movilización pasiva/activa de dedos no afectados</td>
            </tr>
            <tr>
              <td>Subaguda (2-6 sem)</td>
              <td>Movilización progresiva</td>
              <td>Ejercicios de bloqueo articular</td>
            </tr>
            <tr>
              <td>Recuperación (6-12 sem)</td>
              <td>Fortalecimiento progresivo</td>
              <td>Ejercicios de pinza y prensión</td>
            </tr>
            <tr>
              <td>Funcional (mayor a 3 mes)</td>
              <td>Retorno actividades</td>
              <td>Reentrenamiento actividades específicas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Complicaciones ⚠️</p>
      <ul className="fxh-list">
        <li><strong>Rigidez articular</strong>: Principal complicación (especialmente en dedos)</li>
        <li><strong>Necrosis avascular</strong>: Polo proximal del escafoides</li>
        <li><strong>Síndrome de dolor regional complejo</strong>: Manejo multidisciplinario</li>
        <li><strong>Artrosis postraumática</strong>: Secuela tardía en fracturas articulares</li>
        <li><strong>Deformidad residual</strong>: "Dinner fork" en Colles mal reducidas</li>
      </ul>

      <p className="fxh-subtitle">Consideraciones Especiales</p>
      <ul className="fxh-list">
        <li>Fracturas pediátricas: Gran potencial de remodelación (hasta 2 años)</li>
        <li>Pacientes ancianos: Osteoporosis subyacente, mayor riesgo de complicaciones</li>
        <li>Trabajadores manuales: Requieren rehabilitación más intensiva</li>
        <li>Músicos/artistas: Necesidad de recuperación fina de destreza</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        El manejo de las fracturas de muñeca, mano y dedos requiere un enfoque individualizado según la localización, 
        desplazamiento y requerimientos funcionales del paciente. Mientras muchas fracturas pueden tratarse conservadoramente, 
        las fracturas articulares o inestables requieren reducción anatómica y fijación quirúrgica. La rehabilitación temprana 
        y especializada es clave para optimizar los resultados funcionales, especialmente en pacientes con altas demandas de destreza manual.
      </p>
    </div>
  );
}

export default FxMMdedos;
