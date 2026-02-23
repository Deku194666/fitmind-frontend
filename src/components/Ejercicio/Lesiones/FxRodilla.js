import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FxRodilla.css';

function FxRodilla() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Fracturas de Rodilla</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las fracturas de rodilla representan <strong>1-2% de todas las fracturas</strong>, siendo relevantes por su impacto en la función articular. 
        Las fracturas rotulianas constituyen <strong>50-60% de las fracturas de rodilla</strong>. 
        Su manejo requiere preservar la integridad del aparato extensor y la congruencia articular.
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Rótula</strong>: Hueso sesamoideo más grande del cuerpo, parte del mecanismo extensor</li>
        <li><strong>Superficies articulares</strong>: Faceta medial (25%), lateral (75%), odd facet (10% población)</li>
        <li><strong>Vascularización</strong>: Red anastomótica de arterias geniculares (riesgo de necrosis en fracturas conminutas)</li>
        <li><strong>Mecanismo extensor</strong>: Tendón cuadricipital → rótula → tendón rotuliano</li>
      </ul>

      <p className="fxh-subtitle">Clasificación de Fracturas de Rótula 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Patrón</th>
              <th>Características</th>
              <th>Estabilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Transversa (50%)</strong></td>
              <td>Línea horizontal</td>
              <td>Por contracción brusca del cuádriceps</td>
              <td>Inestable si diástasis mayor 3mm</td>
            </tr>
            <tr>
              <td><strong>Conminuta (30-35%)</strong></td>
              <td>Múltiples fragmentos</td>
              <td>Trauma directo (accidentes vehiculares)</td>
              <td>Altamente inestable</td>
            </tr>
            <tr>
              <td><strong>Polar (10-15%)</strong></td>
              <td>Superior o inferior</td>
              <td>Avulsión del tendón cuadricipital o rotuliano</td>
              <td>Variable según desplazamiento</td>
            </tr>
            <tr>
              <td><strong>Vertical (5%)</strong></td>
              <td>Línea longitudinal</td>
              <td>Mecanismo combinado de compresión-flexión</td>
              <td>Generalmente estable</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Clasificación de Fracturas de Meseta Tibial (AO/OTA 41) 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descripción</th>
              <th>Compromiso Articular</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>41-A</strong></td>
              <td>Extraarticular</td>
              <td>0%</td>
            </tr>
            <tr>
              <td><strong>41-B</strong></td>
              <td>Parcialmente articular</td>
              <td> menora 50%</td>
            </tr>
            <tr>
              <td><strong>41-C</strong></td>
              <td>Completamente articular</td>
              <td> mayor a 50%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Mecanismos de Lesión 🤕</p>
      <ul className="fxh-list">
        <li><strong>Fracturas rotulianas</strong>:
          <ul className="fxh-sublist">
            <li><strong>Indirecto</strong>: Caída con rodilla semiflexionada (contracción excéntrica del cuádriceps)</li>
            <li><strong>Directo</strong>: Impacto contra tablero en accidentes vehiculares</li>
          </ul>
        </li>
        <li><strong>Fracturas de meseta tibial</strong>:
          <ul className="fxh-sublist">
            <li><strong>Valgo + carga axial</strong>: Fractura lateral (55-70%)</li>
            <li><strong>Varo + carga axial</strong>: Fracturas mediales (10-15%)</li>
          </ul>
        </li>
        <li><strong>Factores de riesgo</strong>: Osteoporosis, deportes de contacto, accidentes de alta energía</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🩺</p>
      <p className="fxh-subsubtitle">1. Presentación Clínica</p>
      <ul className="fxh-list">
        <li><strong>Triada clásica</strong>: Dolor + hemartrosis + imposibilidad para extender activamente la rodilla</li>
        <li><strong>Signo del hachazo</strong>: Depresión palpable en fracturas rotulianas desplazadas</li>
        <li><strong>Prueba de extensión activa</strong>: Evalúa integridad del mecanismo extensor</li>
        <li><strong>Evaluación neurovascular</strong>: Nervio peroneo y arteria poplítea (meseta tibial)</li>
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
              <td>Primera línea</td>
              <td>AP/lateral/rótula axial (vista de Merchant)</td>
            </tr>
            <tr>
              <td><Link to="/examenes/tac">TAC</Link></td>
              <td>Planificación prequirúrgica</td>
              <td>Reconstrucción 3D, depresión articular mayor a 2mm</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Lesiones ligamentosas asociadas</td>
              <td>LCA/LCP/meniscos, contusión ósea oculta</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Evaluación tendones</td>
              <td>Integridad cuadricipital/rotuliano</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>
      <ul className="fxh-list">
        <li>Fracturas rotulianas no desplazadas ( menor a 2mm) con mecanismo extensor intacto</li>
        <li>Fracturas de meseta tibial no desplazadas (depresión menor a 5mm)</li>
        <li>Pacientes de muy alto riesgo quirúrgico</li>
      </ul>

      <p className="fxh-subsubtitle">Protocolo:</p>
      <ul className="fxh-list">
        <li><strong>Inmovilización</strong>: Rodillera articulada bloqueada en extensión (4-6 semanas)</li>
        <li><strong>Control de hemartrosis</strong>: Aspiración si tensa</li>
        <li><strong>Progresión de carga</strong>: 
          <ul className="fxh-sublist">
            <li>Rótula: Carga parcial 3-4 semanas</li>
            <li>Meseta tibial: Carga tardía 8-12 semanas</li>
          </ul>
        </li>
        <li><strong>Rehabilitación</strong>: Movilización pasiva precoz</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>
      <ul className="fxh-list">
        <li>Diástasis rotuliana mayor a 3mm o escalón articular mayor a 2mm</li>
        <li>Incapacidad para extender activamente</li>
        <li>Depresión meseta tibial mayor a 5mm o inestabilidad valgo/varo mayor a 10°</li>
        <li>Fracturas abiertas o con compromiso neurovascular</li>
      </ul>

      <p className="fxh-subsubtitle">Técnicas Quirúrgicas:</p>
      <ul className="fxh-list">
        <li><strong>Fracturas rotulianas</strong>:
          <ul className="fxh-sublist">
            <li>Osteosíntesis tensión: Cerclaje + tornillos (Modified Tension Band)</li>
            <li>Cerclaje circunferencial: Fracturas conminutas</li>
            <li>Patelectomía parcial: Fracturas polares no reconstructibles</li>
          </ul>
        </li>
        <li><strong>Fracturas de meseta tibial</strong>:
          <ul className="fxh-sublist">
            <li>Osteosíntesis mínimamente invasiva: Placa LCP vía posteromedial/lateral</li>
            <li>Fijación externa: Fracturas abiertas</li>
            <li>Artroscopia asistida: Reducción fragmentos articulares</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-subtitle">Rehabilitación 🏋️‍♂️</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Rótula</th>
              <th>Meseta Tibial</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aguda (0-2 sem)</td>
              <td>Inmovilización extensión, movilización pasiva limitada</td>
              <td>Movilización pasiva continua (CPM)</td>
            </tr>
            <tr>
              <td>Subaguda (2-6 sem)</td>
              <td>Flexión progresiva 0-90°, fortalecimiento isométrico</td>
              <td>Carga parcial 20-30% peso corporal</td>
            </tr>
            <tr>
              <td>Recuperación (6-12 sem)</td>
              <td>Fortalecimiento concéntrico, propiocepción</td>
              <td>Carga completa, ejercicios cadena cinética cerrada</td>
            </tr>
            <tr>
              <td>Funcional ( mayor a 3 mes)</td>
              <td>Retorno deportivo progresivo</td>
              <td>Ejercicios pliométricos según consolidación</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Complicaciones ⚠️</p>
      <ul className="fxh-list">
        <li><strong>Precoces</strong>:
          <ul className="fxh-sublist">
            <li>Infección (1-5%)</li>
            <li>Trombosis venosa profunda (3-10%)</li>
            <li>Falla de osteosíntesis (5-15%)</li>
          </ul>
        </li>
        <li><strong>Tardías</strong>:
          <ul className="fxh-sublist">
            <li>Artrosis postraumática (20-40%)</li>
            <li>Rigidez articular (10-25%)</li>
            <li>Síndrome doloroso rotuliano</li>
            <li>Pseudoartrosis (3-5%)</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        Las fracturas de rodilla requieren manejo individualizado según patrón de fractura, integridad del mecanismo extensor y congruencia articular. 
        Las no desplazadas pueden manejarse conservadoramente; las desplazadas requieren reducción anatómica y fijación estable. 
        La rehabilitación temprana previene rigidez y mejora resultados funcionales.
      </p>
    </div>
  );
}

export default FxRodilla;
