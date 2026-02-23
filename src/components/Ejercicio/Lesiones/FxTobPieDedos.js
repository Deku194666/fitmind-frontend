import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FxTobPieDedos.css';

function FxTobPieDedos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Fracturas de Tobillo, Pie y Dedos</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las fracturas del complejo tobillo-pie representan <strong>10% de todas las fracturas</strong>, con una incidencia anual de 187 casos por 100,000 habitantes. 
        Su correcto manejo es esencial para preservar la función de carga y marcha, siendo las fracturas maleolares las más frecuentes (60% del total). 
        Las fracturas de dedos, aunque aparentemente simples, pueden llevar a discapacidad significativa si no se tratan adecuadamente.
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Anillo tobillero</strong>: Formado por maléolo medial, lateral y sindesmosis</li>
        <li><strong>Bóveda plantar</strong>: Arcos medial, lateral y transverso</li>
        <li><strong>Joints of Lisfranc</strong>: Articulación tarsometatarsiana (clave para estabilidad)</li>
        <li><strong>Mecanismo de Windlass</strong>: Función de la fascia plantar durante la marcha</li>
      </ul>

      <p className="fxh-subtitle">Clasificación de Fracturas de Tobillo (AO/OTA 44) 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Mecanismo</th>
              <th>Estructuras Afectadas</th>
              <th>Estabilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>44-A</strong></td>
              <td>Supinación-Adducción</td>
              <td>Maléolo lateral (transversa) ± medial (vertical)</td>
              <td>Estable si solo lateral</td>
            </tr>
            <tr>
              <td><strong>44-B</strong></td>
              <td>Supinación-Rotación externa</td>
              <td>Maléolo lateral (oblicua) + sindesmosis posterior</td>
              <td>Inestable si diástasis</td>
            </tr>
            <tr>
              <td><strong>44-C</strong></td>
              <td>Pronación-Rotación externa</td>
              <td>Maléolo medial + sindesmosis + peroné alto</td>
              <td>Altamente inestable</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Clasificación de Fracturas de Calcáneo (Sanders) 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Líneas de Fractura</th>
              <th>Compromiso Articular</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>I</td><td>No desplazada</td><td>menor a 2mm</td></tr>
            <tr><td>II</td><td>1 línea</td><td>Fragmento posterior</td></tr>
            <tr><td>III</td><td>2 líneas</td><td>Fragmento central</td></tr>
            <tr><td>IV</td><td>≥3 líneas</td><td>Severamente conminuta</td></tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Mecanismos de Lesión 🤕</p>
      <ul className="fxh-list">
        <li><strong>Tobillo</strong>
          <ul className="fxh-sublist">
            <li>Inversión (85% fracturas maleolares laterales)</li>
            <li>Eversión (fracturas mediales + sindesmosis)</li>
            <li>Rotación (fracturas bimaleolares/trimaleolares)</li>
          </ul>
        </li>
        <li><strong>Calcáneo</strong>
          <ul className="fxh-sublist">
            <li>Caída de altura (90%)</li>
            <li>Compresión axial</li>
          </ul>
        </li>
        <li><strong>Metatarsianos</strong>
          <ul className="fxh-sublist">
            <li>Trauma directo (5° metatarsiano: fractura de Jones)</li>
            <li>Fatiga (marcha prolongada, deportistas)</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🩺</p>
      <p className="fxh-subsubtitle">1. Evaluación Clínica</p>
      <ul className="fxh-list">
        <li><strong>Tobillo</strong>: Prueba de cajón anterior, test de compresión sindesmótica</li>
        <li><strong>Pie</strong>: Evaluación de arcos plantares, puntos dolorosos específicos</li>
        <li><strong>Signos de alarma</strong>
          <ul className="fxh-sublist">
            <li>Déficit vascular (pulso pedio ausente)</li>
            <li>Hematoma en "media luna" (signo de Mondor en fractura Lisfranc)</li>
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
              <td>AP/lateral/mortise tobillo; AP/lateral/oblícua pie</td>
            </tr>
            <tr>
              <td><Link to="/examenes/tac">TAC</Link></td>
              <td>Fracturas intraarticulares</td>
              <td>Reconstrucción 3D, escalón articular mayor a 2mm</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Lesiones ligamentosas/osteocondrales</td>
              <td>Edema óseo, fracturas ocultas</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Evaluación tendones/ligamentos</td>
              <td>Rotura tendón Aquiles, fascitis</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>
      <p className="fxh-subsubtitle">Indicado en:</p>
      <ul className="fxh-list">
        <li>Fracturas no desplazadas de tobillo (44-A1, sin inestabilidad)</li>
        <li>Fracturas de calcáneo extraarticulares</li>
        <li>Fracturas de metatarsianos centrales no desplazadas</li>
        <li>Fracturas de falanges con mínima angulación</li>
      </ul>

      <p className="fxh-subsubtitle">Protocolo:</p>
      <ul className="fxh-list">
        <li><strong>Inmovilización</strong>
          <ul className="fxh-sublist">
            <li>Tobillo: Bota walker (4-6 semanas)</li>
            <li>Pie: Yeso corto plantar (3-4 semanas)</li>
          </ul>
        </li>
        <li><strong>Progresión de carga</strong>
          <ul className="fxh-sublist">
            <li>Tobillo: Carga parcial a las 2-3 semanas</li>
            <li>Calcáneo: Carga tardía (8-12 semanas)</li>
          </ul>
        </li>
        <li><strong>Rehabilitación</strong>: Ejercicios de movilidad temprana</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>
      <p className="fxh-subsubtitle">Indicaciones Absolutas:</p>
      <ul className="fxh-list">
        <li>Fracturas desplazadas de tobillo (diástasis mayor a 2mm, escalón articular mayor a 1mm)</li>
        <li>Fracturas de Lisfranc con inestabilidad</li>
        <li>Fracturas intraarticulares de calcáneo con hundimiento mayor a 3mm</li>
        <li>Fracturas abiertas o con compromiso neurovascular</li>
      </ul>

      <p className="fxh-subsubtitle">Técnicas Quirúrgicas:</p>
      <ul className="fxh-list">
        <li><strong>Tobillo</strong>
          <ul className="fxh-sublist">
            <li>Osteosíntesis con placa (maléolo medial)</li>
            <li>Tornillos canulados (maléolo lateral)</li>
            <li>Tornillo sindesmótico (diástasis confirmada)</li>
          </ul>
        </li>
        <li><strong>Calcáneo</strong>
          <ul className="fxh-sublist">
            <li>Placa bloqueada vía abordaje extenso lateral</li>
            <li>Osteosíntesis mínimamente invasiva (técnica de Essex-Lopresti)</li>
          </ul>
        </li>
        <li><strong>Metatarsianos</strong>
          <ul className="fxh-sublist">
            <li>Clavos percutáneos (fracturas desplazadas)</li>
            <li>Placa dorsolateral (fracturas de Jones)</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-subtitle">Rehabilitación 🏋️‍♂️</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Tobillo</th>
              <th>Pie/Dedos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Aguda (0-2 sem)</strong></td>
              <td>Inmovilización, elevación, movilización pasiva</td>
              <td>Calzado postquirúrgico, no carga</td>
            </tr>
            <tr>
              <td><strong>Subaguda (2-6 sem)</strong></td>
              <td>Carga parcial progresiva, ejercicios ROM</td>
              <td>Inicio de carga según dolor</td>
            </tr>
            <tr>
              <td><strong>Recuperación (6-12 sem)</strong></td>
              <td>Fortalecimiento, propiocepción</td>
              <td>Ejercicios de arco plantar</td>
            </tr>
            <tr>
              <td><strong>Funcional (mayor a 3 mes)</strong></td>
              <td>Retorno deportivo progresivo</td>
              <td>Uso de calzado normal</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Complicaciones ⚠️</p>
      <ul className="fxh-list">
        <li><strong>Tobillo</strong>
          <ul className="fxh-sublist">
            <li>Artrosis postraumática (25-40%)</li>
            <li>Rigidez articular (10-20%)</li>
            <li>Infección (1-5%)</li>
          </ul>
        </li>
        <li><strong>Calcáneo</strong>
          <ul className="fxh-sublist">
            <li>Síndrome del túnel tarsiano (15%)</li>
            <li>Dolor subastragalino crónico</li>
          </ul>
        </li>
        <li><strong>Metatarsianos</strong>
          <ul className="fxh-sublist">
            <li>Pseudoartrosis (5-10%)</li>
            <li>Metatarsalgia transferencial</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        Las fracturas del complejo tobillo-pie requieren un enfoque individualizado basado en el patrón de fractura, estabilidad articular y requerimientos funcionales del paciente. 
        Mientras las fracturas estables pueden manejarse conservadoramente, las inestables requieren reducción anatómica y fijación quirúrgica. 
        La rehabilitación temprana y progresiva es clave para optimizar los resultados funcionales, especialmente en fracturas intraarticulares como las de calcáneo.
      </p>
    </div>
  );
}

export default FxTobPieDedos;
