import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FxPierna.css';

function FxPierna() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Fracturas de Pierna (Tibia y Peroné)</p>
      
      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las fracturas de tibia y peroné representan <strong>10-15% de todas las fracturas</strong> en adultos, siendo la diáfisis tibial la localización más común. 
        Presentan desafíos únicos debido a la <strong>escasa cobertura muscular</strong> en el tercio distal (riesgo de pseudoartrosis) y alta tasa de fracturas abiertas (30-40% en trauma de alta energía).
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Tibia</strong>: Soporta el 85% del peso corporal, con vascularización precaria en tercio distal</li>
        <li><strong>Peroné</strong>: Función principalmente muscular (inserción de peroneos) y estabilización lateral</li>
        <li><strong>Compartimentos</strong>: 4 en pierna (anterior, lateral, posterior superficial y profundo)</li>
        <li><strong>Puntos críticos</strong>: Unión tercio medio-distal tibial (zona de peor vascularización)</li>
      </ul>

      <p className="fxh-subtitle">Clasificación AO/OTA (42) 📊</p>
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
              <td rowSpan="3"><strong>42-A</strong><br/>(Simples)</td>
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
              <td>Transversa (menor a 30°)</td>
              <td>Inestable</td>
            </tr>
            <tr>
              <td rowSpan="3"><strong>42-B</strong><br/>(Con cuña)</td>
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
              <td rowSpan="3"><strong>42-C</strong><br/>(Complejas)</td>
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

      <p className="fxh-subtitle">Clasificación de Gustilo-Anderson (Fracturas Abiertas)</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descripción</th>
              <th>Tasa de Infección</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>Herida menor a 1cm, contaminación mínima</td>
              <td>0-2%</td>
            </tr>
            <tr>
              <td>II</td>
              <td>Herida 1-10cm, contaminación moderada</td>
              <td>2-10%</td>
            </tr>
            <tr>
              <td>III-A</td>
              <td>Herida mayor a 10cm, alta energía, cobertura adecuada</td>
              <td>10-20%</td>
            </tr>
            <tr>
              <td>III-B</td>
              <td>Pérdida de cobertura, requiere injerto/flap</td>
              <td>20-50%</td>
            </tr>
            <tr>
              <td>III-C</td>
              <td>Lesión vascular que requiere reparación</td>
              <td>&gt;50%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Mecanismos de Lesión 🤕</p>
      <ul className="fxh-list">
        <li><strong>Trauma de alta energía</strong> (adultos jóvenes):
          <ul className="fxh-sublist">
            <li>Accidentes vehiculares (60%)</li>
            <li>Heridas por arma de fuego (15%)</li>
            <li>Caídas de altura (10%)</li>
          </ul>
        </li>
        <li><strong>Trauma de baja energía</strong> (ancianos/osteoporosis):
          <ul className="fxh-sublist">
            <li>Caídas desde bipedestación</li>
            <li>Torsiones (fracturas espirales)</li>
          </ul>
        </li>
        <li><strong>Fracturas por estrés</strong>: Atletas, reclutas militares (tercio proximal tibia)</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🩺</p>
      <p className="fxh-subsubtitle">1. Evaluación Inicial</p>
      <ul className="fxh-list">
        <li><strong>Triada clásica</strong>: Dolor + deformidad + impotencia funcional</li>
        <li><strong>Evaluación neurovascular</strong>: Pulso pedio, capilar, nervio peroneo</li>
        <li><strong>Signos de alarma</strong>:
          <ul className="fxh-sublist">
            <li>Tensión muscular (sospecha de síndrome compartimental)</li>
            <li>Piel tenting (riesgo de conversión a abierta)</li>
          </ul>
        </li>
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
              <td>AP/lateral de toda la tibia + tobillo</td>
            </tr>
            <tr>
              <td><Link to="/examenes/tac">TAC</Link></td>
              <td>Fracturas intraarticulares</td>
              <td>Reconstrucción 3D, fragmentos</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Fracturas ocultas/estrés</td>
              <td>Edema óseo, línea de fractura</td>
            </tr>
            <tr>
              <td>Ecografía Doppler</td>
              <td>Compromiso vascular</td>
              <td>Flujo arterial/venoso</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>
      <p className="fxh-subsubtitle">Indicado en:</p>
      <ul className="fxh-list">
        <li>Fracturas no desplazadas o mínimamente desplazadas (menor a 5° angulación, menor a 1cm acortamiento)</li>
        <li>Fracturas estables en niños (yeso pelvipédico)</li>
        <li>Pacientes no ambulatorios o alto riesgo quirúrgico</li>
      </ul>

      <p className="fxh-subsubtitle">Protocolo:</p>
      <ul className="fxh-list">
        <li><strong>Inmovilización</strong>: Yeso largo o férula (4-6 semanas) seguido de yeso funcional</li>
        <li><strong>Progresión de carga</strong>:
          <ul className="fxh-sublist">
            <li>Fracturas estables: Carga parcial a las 2-4 semanas</li>
            <li>Fracturas inestables: Carga tardía (6-8 semanas)</li>
          </ul>
        </li>
        <li><strong>Control radiográfico</strong>: Semanal las primeras 3 semanas</li>
        <li><strong>Complicaciones</strong>: Alto riesgo de desplazamiento secundario (30%)</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>
      <p className="fxh-subsubtitle">Indicaciones Absolutas:</p>
      <ul className="fxh-list">
        <li>Fracturas abiertas (todas las Gustilo I-III)</li>
        <li>Fracturas inestables (42-B/C)</li>
        <li>Compromiso neurovascular</li>
        <li>Síndrome compartimental establecido</li>
      </ul>

      <p className="fxh-subsubtitle">Técnicas Quirúrgicas:</p>
      <ul className="fxh-list">
        <li><strong>Clavado intramedular bloqueado</strong> (Gold standard):
          <ul className="fxh-sublist">
            <li>Técnica: Reamed vs unreamed</li>
            <li>Ventajas: Preserva tejidos blandos, permite carga precoz</li>
            <li>Indicación: Fracturas diafisarias 42-A/B</li>
          </ul>
        </li>
        <li><strong>Osteosíntesis con placa</strong>:
          <ul className="fxh-sublist">
            <li>Técnica: MIPO (minimally invasive plate osteosynthesis)</li>
            <li>Ventajas: Reducción anatómica en fracturas articulares</li>
            <li>Indicación: Fracturas metafisarias proximales/distales</li>
          </ul>
        </li>
        <li><strong>Fijación externa</strong>:
          <ul className="fxh-sublist">
            <li>Técnica: Monolateral o circular (Ilizarov)</li>
            <li>Ventajas: Control de daño en politraumatizados</li>
            <li>Indicación: Fracturas abiertas grado III, infección</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-subtitle">Manejo de Fracturas Abiertas</p>
      <ul className="fxh-list">
        <li><strong>Urgencia</strong>: Desbridamiento quirúrgico menor a 6-8h</li>
        <li><strong>Antibióticos</strong>:
          <ul className="fxh-sublist">
            <li>Gustilo I: Cefazolina 24h</li>
            <li>Gustilo II/III: Cefazolina + aminoglucósido (72h)</li>
            <li>Gustilo III agrícola: + Penicilina</li>
          </ul>
        </li>
        <li><strong>Estabilización</strong>: Fijación externa temporal → conversión a interna (5-7 días)</li>
        <li><strong>Cobertura</strong>: Colgajo local/microquirúrgico en 7-10 días</li>
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
              <td><strong>Aguda (0-2 sem)</strong></td>
              <td>Control edema, movilización pasiva, prevención TEV</td>
              <td>Hasta cicatrización</td>
            </tr>
            <tr>
              <td><strong>Subaguda (2-6 sem)</strong></td>
              <td>Carga parcial progresiva (20-50% peso)</td>
              <td>Hasta evidencia de callo óseo</td>
            </tr>
            <tr>
              <td><strong>Recuperación (6-12 sem)</strong></td>
              <td>Carga completa, recuperación arco de movimiento</td>
              <td>Hasta marcha independiente</td>
            </tr>
            <tr>
              <td><strong>Funcional (mayor a 3 mes)</strong></td>
              <td>Retorno a actividades, fortalecimiento</td>
              <td>6-12 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Complicaciones ⚠️</p>
      <ul className="fxh-list">
        <li><strong>Precoces</strong>:
          <ul className="fxh-sublist">
            <li>Síndrome compartimental (5-10%)</li>
            <li>Infección (1-5% cerradas, 10-50% abiertas)</li>
            <li>Tromboembolismo pulmonar (2-5%)</li>
          </ul>
        </li>
        <li><strong>Tardías</strong>:
          <ul className="fxh-sublist">
            <li>Pseudoartrosis (5-15%, mayor en tercio distal)</li>
            <li>Malunión (rotacional/angular)</li>
            <li>Retardo de consolidación (20-30% en fracturas abiertas)</li>
          </ul>
        </li>
        <li><strong>Específicas</strong>:
          <ul className="fxh-sublist">
            <li>Dolor anterior de rodilla (post-clavado)</li>
            <li>Artrosis postraumática (fracturas intraarticulares)</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        Las fracturas de tibia y peroné requieren un enfoque individualizado basado en el patrón de fractura, integridad de tejidos blandos y estado del paciente. 
        Mientras las fracturas estables pueden manejarse conservadoramente, las inestables o abiertas requieren osteosíntesis urgente. 
        El clavado intramedular sigue siendo el gold standard para fracturas diafisarias, con tasas de consolidación mayor a 95% en casos no complicados. 
        La vigilancia del síndrome compartimental y el manejo agresivo de fracturas abiertas son cruciales para prevenir complicaciones devastadoras.
      </p>
    </div>
  );
}

export default FxPierna;
