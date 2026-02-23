import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FxFemur.css';

function FxFemur() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Fracturas de Fémur</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las fracturas de fémur representan <strong>3-6% de todas las fracturas</strong> en adultos, con una incidencia bimodal: adultos jóvenes (trauma de alta energía) y ancianos (fragilidad ósea). 
        Son emergencias ortopédicas por riesgo de <strong>shock hemorrágico</strong> y requieren estabilización quirúrgica precoz.
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Diafisis femoral</strong>: Zona de mayor estrés mecánico (cortical gruesa)</li>
        <li><strong>Vascularización</strong>: Arteria femoral profunda y arterias nutricias</li>
        <li><strong>Compartimentos musculares</strong>: Anterior (extensores), medial (aductores), posterior (flexores)</li>
        <li><strong>Puntos débiles</strong>: Unión subtrocantérica (alto estrés cortante)</li>
      </ul>

      <p className="fxh-subtitle">Clasificación AO/OTA 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Grupo</th>
              <th>Características</th>
              <th>Estabilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="3"><strong>32-A</strong> (Simples)</td>
              <td>A1</td>
              <td>Espiral</td>
              <td>Estable tras reducción</td>
            </tr>
            <tr>
              <td>A2</td>
              <td>Oblícua (mayor a 30°)</td>
              <td>Moderadamente estable</td>
            </tr>
            <tr>
              <td>A3</td>
              <td>Transversa ( menor a 30°)</td>
              <td>Inestable</td>
            </tr>
            <tr>
              <td rowSpan="3"><strong>32-B</strong> (Con cuña)</td>
              <td>B1</td>
              <td>Cuña por impacto</td>
              <td>Estable tras reducción</td>
            </tr>
            <tr>
              <td>B2</td>
              <td>Cuña intacta</td>
              <td>Moderadamente estable</td>
            </tr>
            <tr>
              <td>B3</td>
              <td>Cuña fragmentada</td>
              <td>Inestable</td>
            </tr>
            <tr>
              <td rowSpan="3"><strong>32-C</strong> (Complejas)</td>
              <td>C1</td>
              <td>Espiral compleja</td>
              <td>Altamente inestable</td>
            </tr>
            <tr>
              <td>C2</td>
              <td>Segmentaria</td>
              <td>Inestable</td>
            </tr>
            <tr>
              <td>C3</td>
              <td>Irregular/comminuta</td>
              <td>Máxima inestabilidad</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Mecanismos de Lesión 🤕</p>
      <ul className="fxh-list">
        <li><strong>Trauma de alta energía</strong> (adultos jóvenes):
          <ul className="fxh-sublist">
            <li>Accidentes vehiculares (50%)</li>
            <li>Caídas de altura (25%)</li>
            <li>Heridas por arma de fuego (15%)</li>
          </ul>
        </li>
        <li><strong>Trauma de baja energía</strong> (ancianos):
          <ul className="fxh-sublist">
            <li>Caídas desde bipedestación</li>
            <li>Fracturas patológicas (metástasis, mieloma)</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🩺</p>
      <p className="fxh-subsubtitle">1. Presentación Clínica</p>
      <ul className="fxh-list">
        <li><strong>Triada clásica</strong>: Dolor + deformidad + impotencia funcional</li>
        <li><strong>Acortamiento</strong>: 2-5 cm por contracción muscular</li>
        <li><strong>Hematoma</strong>: Tardío (24-48h) en muslo medial</li>
        <li><strong>Shock hipovolémico</strong>: 10-15% de fracturas diafisarias</li>
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
              <td><Link to="/examenes/radiografia">Radiografía</Link></td>
              <td>Estudio inicial</td>
              <td>AP/lateral de fémur completo + articulaciones adyacentes</td>
            </tr>
            <tr>
              <td><Link to="/examenes/tc">TC</Link></td>
              <td>Fracturas complejas</td>
              <td>Reconstrucción 3D, fragmentos intraarticulares</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rnm">RNM</Link></td>
              <td>Fracturas patológicas</td>
              <td>Compromiso medular, tejidos blandos</td>
            </tr>
            <tr>
              <td>Gammagrafía</td>
              <td>Metástasis ocultas</td>
              <td>Aumento focal de captación</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>
      <ul className="fxh-list">
        <li>Pacientes no ambulatorios con condiciones médicas inestables</li>
        <li>Fracturas incompletas no desplazadas en niños</li>
        <li>Contexto paliativo en fracturas patológicas</li>
      </ul>

      <p className="fxh-subsubtitle">Protocolo:</p>
      <ul className="fxh-list">
        <li><strong>Tractación esquelética</strong>: Provisional (pin transcalcáneo o tibial)</li>
        <li><strong>Inmovilización</strong>: Yeso pelvipédico (raro en adultos)</li>
        <li><strong>Analgesia</strong>: Opioides + bloqueo femoral continuo</li>
        <li><strong>Complicaciones</strong>: Alto riesgo de trombosis y úlceras por presión</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>
      <ul className="fxh-list">
        <li><strong>Urgencia relativa</strong>: Ideal menor a 24h (excepto politraumatizados inestables)</li>
        <li><strong>Reducción anatómica</strong>: Especialmente en pacientes jóvenes</li>
        <li><strong>Estabilidad absoluta</strong>: Permite carga precoz</li>
      </ul>

      <p className="fxh-subsubtitle">Técnicas por Localización:</p>
      <ul className="fxh-list">
        <li><strong>Subtrocantéricas</strong>:
          <ul className="fxh-sublist">
            <li>Clavo cefalomedular largo (PFN, Gamma nail)</li>
            <li>Placa de compresión dinámica (DCS)</li>
          </ul>
        </li>
        <li><strong>Diafisarias</strong>:
          <ul className="fxh-sublist">
            <li>Clavado intramedular bloqueado (gold standard)</li>
            <li>Placa de compresión (LCP) para fracturas muy distales</li>
          </ul>
        </li>
        <li><strong>Supracondíleas</strong>:
          <ul className="fxh-sublist">
            <li>Placa anatómica LCP 95°</li>
            <li>Clavo retrógrado en fracturas seleccionadas</li>
          </ul>
        </li>
        <li><strong>Patológicas</strong>:
          <ul className="fxh-sublist">
            <li>Clavos recubiertos de cemento</li>
            <li>Resección + megaprótesis en metástasis grandes</li>
          </ul>
        </li>
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
              <td>Aguda (0-2 sem)</td>
              <td>Control dolor, movilización pasiva, prevención TEV</td>
              <td>Hasta cicatrización</td>
            </tr>
            <tr>
              <td>Subaguda (2-6 sem)</td>
              <td>Carga parcial progresiva, fortalecimiento cuádriceps</td>
              <td>Hasta callo óseo radiográfico</td>
            </tr>
            <tr>
              <td>Recuperación (6-12 sem)</td>
              <td>Carga completa, recuperación arco de movimiento</td>
              <td>Hasta marcha independiente</td>
            </tr>
            <tr>
              <td>Funcional ( mayor a 3 mes)</td>
              <td>Retorno actividades, entrenamiento propioceptivo</td>
              <td>6-12 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Complicaciones ⚠️</p>
      <ul className="fxh-list">
        <li><strong>Precoces</strong>:
          <ul className="fxh-sublist">
            <li>Síndrome compartimental (3-5%)</li>
            <li>Infección profunda (1-3%)</li>
            <li>Tromboembolismo pulmonar (2-4%)</li>
          </ul>
        </li>
        <li><strong>Tardías</strong>:
          <ul className="fxh-sublist">
            <li>Pseudoartrosis (1-5%)</li>
            <li>Malunión (rotacional/angular)</li>
            <li>Dismetría ( mayor a 2 cm en 10%)</li>
            <li>Rigidez articular</li>
          </ul>
        </li>
        <li><strong>Específicas</strong>:
          <ul className="fxh-sublist">
            <li>Síndrome del clavo (dolor trocantérico)</li>
            <li>Fractura alrededor del implante</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-subtitle">Consideraciones Especiales</p>
      <ul className="fxh-list">
        <li><strong>Politraumatizados</strong>: Priorizar estabilización temprana (damage control orthopedics)</li>
        <li><strong>Pacientes pediátricos</strong>:
          <ul className="fxh-sublist">
            <li>Conservador menor a 8 años (tracto-férula)</li>
            <li>Clavos elásticos (ESIN) 8-12 años</li>
          </ul>
        </li>
        <li><strong>Fracturas patológicas</strong>: Evaluar enfermedad de base, considerar radioterapia preoperatoria</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        Las fracturas de fémur requieren manejo quirúrgico urgente con osteosíntesis estable.  
        La rehabilitación precoz previene complicaciones, y el pronóstico funcional depende de reducción anatómica, estabilidad y manejo de comorbilidades.
      </p>
    </div>
  );
}

export default FxFemur;
