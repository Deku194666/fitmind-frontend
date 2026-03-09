import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FxAntebrazo.css';

function FxAntebrazo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail28">
      <p className="fxh-title">Fracturas de Antebrazo</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las fracturas de antebrazo representan aproximadamente <strong>el 5-10% de todas las fracturas en adultos </strong> 
         y son aún más frecuentes en niños (20-30% de las fracturas pediátricas). 
        Involucran típicamente el radio, el cúbito o ambos huesos, y su manejo depende de la localización, desplazamiento y edad del paciente.
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Radio y cúbito</strong>: Forman una unidad funcional conectada por la membrana interósea</li>
        <li><strong>Articulaciones clave</strong>: Radiocubital proximal (codo), radiocubital distal (muñeca)</li>
        <li><strong>Importancia biomecánica</strong>: Permiten pronosupinación además de flexoextensión</li>
      </ul>

      <p className="fxh-subtitle">Clasificación de las Fracturas 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Características</th>
              <th>Mecanismo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Monteggia</strong></td>
              <td>Fractura cúbito proximal + luxación radial</td>
              <td>Caída con brazo en hiperpronación</td>
            </tr>
            <tr>
              <td><strong>Galeazzi</strong></td>
              <td>Fractura radial distal + luxación cubital</td>
              <td>Caída sobre mano extendida</td>
            </tr>
            <tr>
              <td><strong>Ambos huesos</strong></td>
              <td>Fracturas diafisarias de radio y cúbito</td>
              <td>Trauma directo o torsión</td>
            </tr>
            <tr>
              <td><strong>Colles</strong></td>
              <td>Fractura radial distal con desplazamiento dorsal</td>
              <td>Caída sobre palma extendida</td>
            </tr>
            <tr>
              <td><strong>Smith</strong></td>
              <td>Fractura radial distal con desplazamiento volar</td>
              <td>Caída sobre dorso de la mano</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Mecanismos de Lesión 🤕</p>
      <ul className="fxh-list">
        <li><strong>Caída sobre mano extendida (FOOSH)</strong>: Mecanismo más común</li>
        <li><strong>Trauma directo</strong>: Golpes, accidentes vehiculares</li>
        <li><strong>Trauma por torsión</strong>: Especialmente en fracturas diafisarias</li>
        <li><strong>Deportes de riesgo</strong>: Skateboarding, fútbol americano, rugby</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🩺</p>
      <p className="fxh-subsubtitle">Examen Físico:</p>
      <ul className="fxh-list">
        <li>Dolor localizado: Punto álgido en zona fracturada</li>
        <li>Deformidad visible: En fracturas desplazadas</li>
        <li>Limitación funcional: Dificultad para pronosupinación</li>
        <li>Evaluación neurovascular: Compromiso de nervio mediano/interóseo posterior</li>
      </ul>

      <p className="fxh-subsubtitle">Estudios de Imagen:</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
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
              <td>Línea de fractura, desplazamiento, angulación</td>
              <td>Estudio inicial (AP + lateral + oblicuas)</td>
            </tr>
            <tr>
              <td><Link to="/examenes/tac">TAC</Link></td>
              <td>Fracturas intraarticulares complejas</td>
              <td>Planificación quirúrgica</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Fracturas pediátricas no desplazadas</td>
              <td>Alternativa en niños para evitar radiación</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>
      <ul className="fxh-list">
        <li>Fracturas no desplazadas o mínimamente desplazadas</li>
        <li>Pacientes pediátricos (gran potencial de remodelación)</li>
        <li>Pacientes de alto riesgo quirúrgico</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>
      <ul className="fxh-list">
        <li>Fracturas desplazadas (angulación mayor a 10°, acortamiento mayor a 5mm)</li>
        <li>Fracturas inestables (ambos huesos, Monteggia/Galeazzi)</li>
        <li>Fracturas intraarticulares con escalón mayor a 2mm</li>
        <li>Fracaso del tratamiento conservador</li>
      </ul>

      <p className="fxh-subtitle">Rehabilitación 🏋️‍♂️</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Objetivos</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 (0-2 sem)</td>
              <td>Control edema, movilidad dedos/hombro</td>
              <td>Hasta retiro de suturas</td>
            </tr>
            <tr>
              <td>2 (2-6 sem)</td>
              <td>Recuperar flexoextensión muñeca</td>
              <td>4 semanas</td>
            </tr>
            <tr>
              <td>3 (6-12 sem)</td>
              <td>Recuperar pronosupinación completa</td>
              <td>6 semanas</td>
            </tr>
            <tr>
              <td>4 (mayor a 12 sem)</td>
              <td>Fortalecimiento, retorno actividades</td>
              <td>Hasta 6 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Complicaciones ⚠️</p>
      <ul className="fxh-list">
        <li>Pseudoartrosis: 2-5% de los casos</li>
        <li>Síndrome compartimental: Urgencia quirúrgica</li>
        <li>Rigidez articular: Pérdida de pronosupinación</li>
        <li>Síndrome de dolor regional complejo: Manejo multidisciplinario</li>
        <li>Lesiones nerviosas: Nervio interóseo posterior en fracturas proximales</li>
      </ul>

      <p className="fxh-subtitle">Consideraciones Pediátricas 👶</p>
      <ul className="fxh-list">
        <li>Remodelación ósea: Hasta 1-2cm en fracturas cercanas a fisis</li>
        <li>Fracturas en "tallo verde": Tratamiento conservador en mayoría</li>
        <li>Reducción cerrada: Tolerancia mayor a deformidad residual</li>
        <li>Fracturas de Monteggia: Requieren reducción de la luxación radial</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        Las fracturas de antebrazo requieren un enfoque individualizado según edad, tipo de fractura y nivel de actividad. 
        Mientras las fracturas no desplazadas pueden manejarse conservadoramente, las fracturas desplazadas o inestables 
        generalmente requieren reducción anatómica y fijación interna. La rehabilitación temprana es clave para recuperar 
        la función completa del miembro superior, especialmente la pronosupinación.
      </p>
    </div>
  );
}

export default FxAntebrazo;
 