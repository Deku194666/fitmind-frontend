import React, { useEffect } from 'react';
import './FxCodo.css';

function FxCodo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail27">
      <p className='fxh-title'>Fracturas de Codo</p>

      <p className='fxh-subtitle'>📌 Introducción</p>
      <p className='fxh-text'>
        Las fracturas de codo representan aproximadamente el <strong>5-7% de todas las fracturas</strong> en adultos y son particularmente comunes en niños (10% de todas las fracturas pediátricas). 
        La articulación del codo es compleja, compuesta por tres articulaciones (humeroulnar, humeroradial y radioulnar proximal) que funcionan como una unidad coordinada. 
        Las fracturas en esta región pueden comprometer significativamente la función del miembro superior.
      </p>

      <p className='fxh-subtitle'>Anatomía Clave 🦴</p>
      <ul className='fxh-list'>
        <li><strong>Húmero distal:</strong> Tróclea, cóndilo, epicóndilos y fosas coronoides/olecraneana</li>
        <li><strong>Cúbito proximal:</strong> Olécranon y apófisis coronoides</li>
        <li><strong>Radio proximal:</strong> Cabeza y cuello radial</li>
        <li><strong>Estabilidad:</strong> Depende de estructuras óseas (60%) y ligamentosas (40%)</li>
      </ul>

      <p className='fxh-subtitle'>📌 Tipos de Fracturas de Codo</p>

      <p className='fxh-subsubtitle'>Fracturas de Húmero Distal:</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo (AO)</th>
              <th>Descripción</th>
              <th>Incidencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>Extraarticulares (supracondíleas)</td>
              <td>30% (70% en niños)</td>
            </tr>
            <tr>
              <td>B</td>
              <td>Parcialmente articulares (unicondíleas)</td>
              <td>20%</td>
            </tr>
            <tr>
              <td>C</td>
              <td>Completamente articulares (bicondíleas)</td>
              <td>50%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subsubtitle'>Fracturas de Olécranon:</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo (Mayo)</th>
              <th>Descripción</th>
              <th>Manejo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>No desplazada</td>
              <td>Conservador</td>
            </tr>
            <tr>
              <td>II</td>
              <td>Desplazada, estable</td>
              <td>Quirúrgico (tensión)</td>
            </tr>
            <tr>
              <td>III</td>
              <td>Desplazada, inestable</td>
              <td>Quirúrgico (placa)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subsubtitle'>Fracturas de Cabeza Radial (Mason):</p>
      <ul className='fxh-list'>
        <li><strong>Tipo I:</strong> No desplazada (menor a 2mm) - Tratamiento conservador</li>
        <li><strong>Tipo II:</strong> Desplazada (mayor a 2mm, menor a 30% cabeza) - Reducción o resección</li>
        <li><strong>Tipo III:</strong> Conminuta - Artroplastia o prótesis</li>
        <li><strong>Tipo IV:</strong> Con luxación - Reducción urgente</li>
      </ul>

      <p className='fxh-subtitle'>📌 Diagnóstico</p>
      <p className='fxh-subsubtitle'>Examen Físico:</p>
      <ul className='fxh-list'>
        <li><strong>Triada dolor-edema-deformidad</strong></li>
        <li><strong>Evaluación neurovascular:</strong> Nervio cubital (50% de lesiones en fracturas supracondíleas)</li>
        <li><strong>Pruebas de estabilidad:</strong> Prueba de estrés en varo/valgo</li>
        <li><strong>Signo del "codo flotante":</strong> Fracturas ipsilaterales de húmero distal y antebrazo</li>
      </ul>

      <p className='fxh-subsubtitle'>Estudios de Imagen:</p>
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
              <td>Radiografía</td>
              <td>Todos los casos</td>
              <td>Proyecciones AP, lateral y oblicuas</td>
            </tr>
            <tr>
              <td>TAC</td>
              <td>Fracturas complejas</td>
              <td>Reconstrucción 3D, fragmentos</td>
            </tr>
            <tr>
              <td>RMN</td>
              <td>Lesiones ligamentosas asociadas</td>
              <td>Integridad del LCL/MCL</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subtitle'>📌 Tratamiento</p>
      <div className="fxh-flex">
        <div className="fxh-half">
          <p className='fxh-subsubtitle'>Conservador 🏥</p>
          <ul className='fxh-list'>
            <li><strong>Indicaciones:</strong>
              <ul className='fxh-sublist'>
                <li>Fracturas no desplazadas</li>
                <li>Pacientes de baja demanda</li>
                <li>Contraindicaciones quirúrgicas</li>
              </ul>
            </li>
            <li><strong>Protocolo:</strong>
              <ul className='fxh-sublist'>
                <li>Inmovilización con yeso posterior 3-4 semanas</li>
                <li>Control radiográfico semanal inicial</li>
                <li>Movilización progresiva supervisada</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="fxh-half">
          <p className='fxh-subsubtitle'>Quirúrgico 🔪</p>
          <ul className='fxh-list'>
            <li><strong>Indicaciones:</strong>
              <ul className='fxh-sublist'>
                <li>Desplazamiento mayor a 2mm en superficies articulares</li>
                <li>Inestabilidad articular</li>
                <li>Fracturas abiertas</li>
                <li>Compromiso neurovascular</li>
              </ul>
            </li>
            <li><strong>Técnicas:</strong>
              <ul className='fxh-sublist'>
                <li>Osteosíntesis con placa bloqueada</li>
                <li>Clavos percutáneos (niños)</li>
                <li>Artroplastia radial (Mason III-IV)</li>
                <li>Fijación externa (lesiones complejas)</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <p className='fxh-subtitle'>📌 Rehabilitación</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Tiempo</th>
              <th>Objetivos</th>
              <th>Intervenciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Protección</td>
              <td>0-3 semanas</td>
              <td>Control dolor/edema</td>
              <td>Inmovilización, ejercicios digitales</td>
            </tr>
            <tr>
              <td>Movilización</td>
              <td>3-6 semanas</td>
              <td>Recuperar ROM</td>
              <td>Movilización activa-asistida</td>
            </tr>
            <tr>
              <td>Fortalecimiento</td>
              <td>6-12 semanas</td>
              <td>Recuperar fuerza</td>
              <td>Ejercicios isométricos/progresivos</td>
            </tr>
            <tr>
              <td>Funcional</td>
              <td>mayor a 12 semanas</td>
              <td>Retorno actividades</td>
              <td>Ejercicios específicos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subtitle'>⚠️ Complicaciones</p>
      <div className="fxh-flex">
        <div className="fxh-third">
          <p className='fxh-subsubtitle'>Tempranas:</p>
          <ul className='fxh-list'>
            <li>Síndrome compartimental</li>
            <li>Lesión neurovascular</li>
            <li>Infección (quirúrgicas)</li>
          </ul>
        </div>
        <div className="fxh-third">
          <p className='fxh-subsubtitle'>Tardías:</p>
          <ul className='fxh-list'>
            <li>Rigidez articular (40%)</li>
            <li>Pseudoartrosis (5-10%)</li>
            <li>Artrosis postraumática</li>
          </ul>
        </div>
        <div className="fxh-third">
          <p className='fxh-subsubtitle'>Específicas:</p>
          <ul className='fxh-list'>
            <li>Sínostosis radiocubital</li>
            <li>Inestabilidad crónica</li>
            <li>Heterotópica osificación</li>
          </ul>
        </div>
      </div>

      <p className='fxh-subtitle'>🛡️ Prevención</p>
      <ul className='fxh-list'>
        <li><strong>Protección en deportes:</strong> Equipo adecuado para actividades de riesgo</li>
        <li><strong>Prevención de caídas:</strong> Especialmente en ancianos</li>
        <li><strong>Rehabilitación precoz:</strong> Evitar rigideces postinmovilización</li>
        <li><strong>Manejo osteoporosis:</strong> En pacientes de riesgo</li>
      </ul>

      <p className='fxh-subtitle'>📌 Conclusión</p>
      <p className='fxh-text'>
        Las fracturas de codo representan un desafío terapéutico debido a la complejidad anatómica y la importancia funcional de esta articulación. 
        El tratamiento debe individualizarse según el tipo de fractura, desplazamiento y características del paciente. 
        Mientras las fracturas no desplazadas pueden manejarse conservadoramente, las desplazadas requieren reducción anatómica y fijación estable. 
        La rehabilitación temprana y supervisada es clave para optimizar los resultados funcionales y minimizar complicaciones como la rigidez articular.
      </p>
    </div>
  );
}

export default FxCodo;
