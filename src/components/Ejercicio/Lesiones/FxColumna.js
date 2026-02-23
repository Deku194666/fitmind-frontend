import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FxColumna.css';

function FxColumna() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Fracturas de Columna y Costillas</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las fracturas de columna representan <strong>5-6% de todas las fracturas óseas</strong>, mientras que las fracturas costales son las más frecuentes 
        en trauma torácico (35-40%). Su importancia radica en el potencial de compromiso neurológico y complicaciones respiratorias, 
        requiriendo un enfoque multidisciplinario.
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Columna vertebral</strong>: 33 vértebras (7 cervicales, 12 torácicas, 5 lumbares, 5 sacras, 4 coccígeas)</li>
        <li><strong>Unidades funcionales</strong>: Cuerpo vertebral, pedículos, láminas, procesos articulares</li>
        <li><strong>Costillas</strong>: 12 pares (7 verdaderas, 3 falsas, 2 flotantes), articulaciones costovertebrales</li>
        <li><strong>Estructuras críticas</strong>: Médula espinal, raíces nerviosas, pleura, paquete vasculonervioso intercostal</li>
      </ul>

      <p className="fxh-subtitle">Clasificación de Fracturas Vertebrales 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Mecanismo</th>
              <th>Características</th>
              <th>Estabilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Compresión</td>
              <td>Axial + flexión</td>
              <td>Colapso cuerpo vertebral anterior</td>
              <td>Estable si &lt;50% altura</td>
            </tr>
            <tr>
              <td>Burst</td>
              <td>Carga axial pura</td>
              <td>Fractura todo el cuerpo vertebral</td>
              <td>Inestable si compromete canal</td>
            </tr>
            <tr>
              <td>Chance</td>
              <td>Flexión-distracción</td>
              <td>Fractura horizontal través elementos posteriores</td>
              <td>Inestable (lesión de 3 columnas)</td>
            </tr>
            <tr>
              <td>Fractura-luxación</td>
              <td>Fuerzas combinadas</td>
              <td>Disrupción de las 3 columnas + desplazamiento</td>
              <td>Altamente inestable</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Clasificación de Fracturas Costales 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Localización</th>
              <th>Riesgo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Simples</td>
              <td>Unilateral, 1-3 costillas</td>
              <td>Bajo (5% complicaciones)</td>
            </tr>
            <tr>
              <td>Múltiples</td>
              <td>≥3 costillas consecutivas</td>
              <td>Tórax inestable si &gt;3 segmentos</td>
            </tr>
            <tr>
              <td>Bilaterales</td>
              <td>Arco costal completo</td>
              <td>Fallo respiratorio (40%)</td>
            </tr>
            <tr>
              <td>Flail chest</td>
              <td>≥3 fracturas por costilla</td>
              <td>Paradoja respiratoria</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Mecanismos de Lesión 🤕</p>
      <ul className="fxh-list">
        <li><strong>Alta energía</strong>: Accidentes vehiculares (45%), caídas de altura (20%)</li>
        <li><strong>Trauma directo</strong>: Impactos deportivos, agresiones</li>
        <li><strong>Osteoporosis</strong>: Fracturas por fragilidad (especialmente T12-L2)</li>
        <li><strong>Trauma penetrante</strong>: Heridas por arma blanca o de fuego</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🩺</p>
      <p className="fxh-subsubtitle">1. Evaluación Inicial (ATLS)</p>
      <ul className="fxh-list">
        <li><strong>ABCDE</strong>: Priorizar vía aérea y ventilación</li>
        <li><strong>Examen neurológico</strong>: Nivel sensoriomotor, reflejos</li>
        <li><strong>Puntos dolorosos</strong>: Apófisis espinosas, líneas paravertebrales</li>
        <li><strong>Signos de alarma</strong>: Priapismo, shock neurogénico</li>
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
              <td>Screening inicial</td>
              <td>Fracturas evidentes, alineación</td>
            </tr>
            <tr>
              <td><Link to="/examenes/tac">TAC</Link></td>
              <td>Gold standard</td>
              <td>Compromiso canal, fragmentos</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Compromiso medular</td>
              <td>Edema medular, hematoma</td>
            </tr>
            <tr>
              <td>Ecografía FAST</td>
              <td>Trauma múltiple</td>
              <td>Hemotórax, hemoperitoneo</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* --- TRATAMIENTO EN COLUMNAS --- */}
      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>
      <div className="fxh-flex">
        <div className="fxh-half">
          <p className="fxh-subsubtitle">Columna</p>
          <ul className="fxh-list">
            <li>Fracturas vertebrales estables sin déficit neurológico</li>
            <li>Ortesis rígida (TLSO para toracolumbares)</li>
            <li>Analgesia multimodal</li>
            <li>Movilización temprana con protección</li>
            <li>Control imagenológico a las 6 semanas</li>
          </ul>
        </div>
        <div className="fxh-half">
          <p className="fxh-subsubtitle">Costillas</p>
          <ul className="fxh-list">
            <li>Fracturas costales simples (&lt;3 costillas, no desplazadas)</li>
            <li>Analgesia y bloqueos intercostales si necesario</li>
            <li>Ejercicios respiratorios (espirometría incentiva)</li>
            <li>Evitar vendajes compresivos</li>
            <li>Fisioterapia respiratoria precoz</li>
          </ul>
        </div>
      </div>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>
      <div className="fxh-flex">
        <div className="fxh-half">
          <p className="fxh-subsubtitle">Columna</p>
          <ul className="fxh-list">
            <li>Déficit neurológico progresivo</li>
            <li>Compresión medular aguda</li>
            <li>Inestabilidad biomecánica severa</li>
            <li>Descompresión + fusión posterior (pedicle screws)</li>
            <li>Corpectomía + cage anterior (burst fractures)</li>
            <li>Osteosíntesis percutánea (seleccionadas)</li>
            <li>Cifoplastia/vertebroplastia (osteoporóticas)</li>
          </ul>
        </div>
        <div className="fxh-half">
          <p className="fxh-subsubtitle">Costillas</p>
          <ul className="fxh-list">
            <li>Flail chest con insuficiencia respiratoria</li>
            <li>Fracturas abiertas con contaminación</li>
            <li>Fijación interna con placas (flail chest sintomático)</li>
            <li>Toracotomía por hemotórax masivo</li>
            <li>Drenaje pleural por neumotórax a tensión</li>
          </ul>
        </div>
      </div>

      <p className="fxh-subtitle">Rehabilitación 🏋️‍♂️</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Columna</th>
              <th>Costillas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aguda (0-6 sem)</td>
              <td>Inmovilización, analgesia, evitar flexión</td>
              <td>Ejercicios respiratorios, control dolor</td>
            </tr>
            <tr>
              <td>Subaguda (6-12 sem)</td>
              <td>Fortalecimiento core, movilización progresiva</td>
              <td>Estiramientos, recuperación amplitud</td>
            </tr>
            <tr>
              <td>Recuperación (3-6 mes)</td>
              <td>Reeducación postural, ejercicios funcionales</td>
              <td>Fortalecimiento intercostales, reintegración</td>
            </tr>
            <tr>
              <td>Mantenimiento (mayor a 6 mes)</td>
              <td>Prevención osteoporosis, ejercicio regular</td>
              <td>Actividades aeróbicas, fortalecimiento</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Complicaciones ⚠️</p>
      <ul className="fxh-list">
        <li><strong>Neurológicas</strong>: Déficit motor/sensorial, síndrome de cauda equina</li>
        <li><strong>Respiratorias</strong>: Neumonía, atelectasias, SDRA (fracturas múltiples costales)</li>
        <li><strong>Vasculares</strong>: Hematoma epidural, lesión arteria Adamkiewicz</li>
        <li><strong>Mecánicas</strong>: Cifosis progresiva, pseudoartrosis</li>
        <li><strong>Sistémicas</strong>: Tromboembolismo pulmonar, úlceras por presión</li>
      </ul>

      <p className="fxh-subtitle">Consideraciones Especiales</p>
      <ul className="fxh-list">
        <li>Pacientes ancianos: Mayor riesgo de complicaciones respiratorias y tromboembólicas</li>
        <li>Politraumatizados: Evaluar lesiones asociadas (aorta, vísceras)</li>
        <li>Osteoporosis: Iniciar tratamiento antirresortivo post-fractura</li>
        <li>Pacientes pediátricos: Mayor elasticidad costal, menor incidencia de fracturas</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        El manejo de las fracturas de columna y costillas requiere una evaluación integral del estado neurológico, 
        estabilidad biomecánica y función respiratoria. Mientras las fracturas estables pueden tratarse conservadoramente, 
        las lesiones inestables o con compromiso neurológico requieren intervención quirúrgica temprana. La rehabilitación 
        multidisciplinaria es esencial para optimizar la recuperación funcional y prevenir complicaciones a largo plazo, 
        especialmente en pacientes con trauma de alta energía o fracturas múltiples.
      </p>
    </div>
  );
}

export default FxColumna;
