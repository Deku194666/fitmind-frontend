import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ArtrosisTobPie.css";

function ArtrosisTobPie() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="atp-detail">

      <h1 className="atp-title">Artrosis de Tobillo y Pie</h1>

      <h2 className="atp-subtitle">📌 Introducción</h2>
      <p className="atp-text">
        La artrosis de tobillo y pie es una <strong>degeneración progresiva del cartílago articular</strong> que afecta principalmente a la articulación tibiotalar y a las articulaciones del mediopie y antepie. 
        A diferencia de la artrosis de cadera y rodilla, la de tobillo es <strong>postraumática en el 80% de los casos</strong>, con prevalencia del 3-7% en adultos mayores de 50 años.
      </p>

      <h2 className="atp-subtitle">🦴 Anatomía Clave</h2>
      <ul className="atp-list">
        <li><strong>Articulación tibiotalar</strong>: Encaje entre tibia-peroné y astrágalo (mortaja)</li>
        <li><strong>Articulaciones subtalar y Chopart</strong>: Responsables de inversión/eversión</li>
        <li><strong>Articulación Lisfranc</strong>: Unión mediopie-antepie</li>
        <li><strong>Primera metatarsofalángica (MTP1)</strong>: Localización frecuente de artrosis (hallux rigidus)</li>
      </ul>

      <h2 className="atp-subtitle">📊 Clasificación de la Artrosis de Tobillo y Pie</h2>
      <div className="atp-table-wrapper">
        <table className="atp-table">
          <thead>
            <tr>
              <th>Localización</th>
              <th>Grado</th>
              <th>Hallazgos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="3"><strong>Tobillo</strong></td>
              <td>Leve</td>
              <td>Pinzamiento mínimo, osteofitos anteriores</td>
            </tr>
            <tr>
              <td>Moderado</td>
              <td>Pinzamiento claro, esclerosis subcondral</td>
            </tr>
            <tr>
              <td>Severo</td>
              <td>Deformación astragalina, pérdida completa del espacio</td>
            </tr>
            <tr>
              <td rowSpan="2"><strong>1ª MTP</strong></td>
              <td>Leve-Moderado</td>
              <td>Osteofitos dorsales, pinzamiento parcial</td>
            </tr>
            <tr>
              <td>Severo</td>
              <td>Anquilosis fibrosa/ósea, deformidad en flexión</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="atp-subtitle">🤕 Factores de Riesgo</h2>
      <ul className="atp-list">
        <li><strong>Traumatismos previos</strong>: Fracturas de tobillo (75% de artrosis tibiotalar)</li>
        <li><strong>Inestabilidad crónica</strong>: Esguinces repetidos con lesión ligamentosa</li>
        <li><strong>Malalineaciones</strong>: Pie plano/varo, secuelas de fracturas mal consolidadas</li>
        <li><strong>Enfermedades sistémicas</strong>: Artritis reumatoide, gota, diabetes</li>
        <li><strong>Ocupacional/deportivo</strong>: Bailarines, futbolistas, trabajos en superficies irregulares</li>
      </ul>

      <h2 className="atp-subtitle">🩺 Diagnóstico</h2>
      <h3 className="atp-subsubtitle">1. Manifestaciones Clínicas</h3>
      <ul className="atp-list">
        <li><strong>Síndrome articular</strong>
          <ul className="atp-sublist">
            <li>Dolor de inicio insidioso en tobillo o antepié</li>
            <li>Rigidez matutina menor a 30 minutos</li>
            <li>Dificultad en terrenos irregulares o al calzarse</li>
          </ul>
        </li>
        <li><strong>Exploración física</strong>
          <ul className="atp-sublist">
            <li>Limitación de dorsiflexión (normal 20°)</li>
            <li>Dolor a la palpación de interlínea articular</li>
            <li>Edema periarticular en brotes inflamatorios</li>
            <li>Deformidades avanzadas (varo/valgo tobillo, hallux rigidus)</li>
          </ul>
        </li>
        <li><strong>Marcha</strong>
          <ul className="atp-sublist">
            <li>Acortamiento fase de apoyo</li>
            <li>Disminución balanceo brazo contralateral</li>
            <li>Marcha en rotación externa para compensar limitación dorsiflexión</li>
          </ul>
        </li>
      </ul>

      <h3 className="atp-subsubtitle">2. Estudios de Imagen</h3>
      <div className="atp-table-wrapper">
        <table className="atp-table">
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
              <td>Pinzamiento articular, osteofitos, deformidad</td>
              <td>Proyecciones AP/lateral tobillo, axial MTP1</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Estado cartílago residual, osteocondritis, sinovitis</td>
              <td>Evaluar lesiones prequirúrgicas</td>
            </tr>
            <tr>
              <td>TAC 3D</td>
              <td>Análisis deformidad, planificación quirúrgica</td>
              <td>Evaluar consolidación fracturas previas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="atp-subtitle">Tratamiento Conservador 🏥</h2>
      <h3 className="atp-subsubtitle">Indicado en:</h3>
      <ul className="atp-list">
        <li>Artrosis leve-moderada (grados iniciales)</li>
        <li>Pacientes con comorbilidades que contraindican cirugía</li>
        <li>Primera línea en todos los casos</li>
      </ul>

      <h3 className="atp-subsubtitle">Protocolo:</h3>
      <ul className="atp-list">
        <li><strong>Farmacoterapia</strong>
          <ul className="atp-sublist">
            <li>AINEs tópicos/orales (diclofenaco, celecoxib)</li>
            <li>Analgésicos (<Link to="/farmacos/farmacos2/paracetamol">Paracetamol</Link>)</li>
            <li>Infiltraciones locales en brotes agudos</li>
          </ul>
        </li>
        <li><strong>Terapia física</strong>
          <ul className="atp-sublist">
            <li>Ejercicios de movilidad (tobillo: alfabeto, círculos)</li>
            <li>Fortalecimiento muscular (tibial anterior, peroneos)</li>
            <li>Propiocepción para mejorar estabilidad</li>
          </ul>
        </li>
        <li><strong>Medidas generales</strong>
          <ul className="atp-sublist">
            <li>Modificación de actividades (evitar impactos, terrenos irregulares)</li>
            <li>Calzado adecuado (suela rígida para MTP1, contrafuerte estable para tobillo)</li>
            <li>Ortesis (plantillas, férulas nocturnas para hallux rigidus)</li>
          </ul>
        </li>
      </ul>

      <h2 className="atp-subtitle">Tratamiento Intervencionista 💉</h2>
      <ul className="atp-list">
        <li><strong>Infiltraciones intraarticulares</strong>
          <ul className="atp-sublist">
            <li>Corticoides guiados por ecografía/RX</li>
            <li>Ácido hialurónico (evidencia limitada)</li>
            <li>PRP (en investigación)</li>
          </ul>
        </li>
        <li><strong>Denervación por radiofrecuencia</strong>
          <ul className="atp-sublist">
            <li>Ramas articulares del nervio tibial y peroneo</li>
          </ul>
        </li>
        <li><strong>Artroscopia</strong>
          <ul className="atp-sublist">
            <li>Desbridamiento, sinovectomía, resección osteofitos</li>
          </ul>
        </li>
      </ul>

      <h2 className="atp-subtitle">Tratamiento Quirúrgico 🔪</h2>
      <ul className="atp-list">
        <li>Dolor refractario a tratamiento conservador mayor a 6 meses</li>
        <li>Artrosis avanzada con deformidad</li>
        <li>Limitación funcional grave</li>
      </ul>

      <h3 className="atp-subsubtitle">Técnicas Quirúrgicas:</h3>
      <ul className="atp-list">
        <li><strong>Artrodesis</strong>
          <ul className="atp-sublist">
            <li>Tibiotalar: fijación placas/tornillos</li>
            <li>Subtalar: para artrosis aislada</li>
            <li>MTP1: fijación tornillos/placa</li>
          </ul>
        </li>
        <li><strong>Artroplastia (prótesis)</strong>
          <ul className="atp-sublist">
            <li>Tobillo: pacientes seleccionados ( mayor a 60 años)</li>
            <li>MTP1: prótesis silicona o metal-plástico</li>
          </ul>
        </li>
        <li><strong>Osteotomías</strong>
          <ul className="atp-sublist">
            <li>Redistribución cargas, corrección malalineaciones</li>
          </ul>
        </li>
      </ul>

      <h2 className="atp-subtitle">Rehabilitación Postquirúrgica 🏋️‍♂️</h2>
      <div className="atp-table-wrapper">
        <table className="atp-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Objetivos</th>
              <th>Intervenciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aguda (0-6 sem)</td>
              <td>Protección, control edema/dolor</td>
              <td>Inmovilización, movilización pasiva suave</td>
            </tr>
            <tr>
              <td>Intermedia (6-12 sem)</td>
              <td>Recuperar movilidad progresiva</td>
              <td>Ejercicios activos, carga progresiva, hidroterapia</td>
            </tr>
            <tr>
              <td>Tardía ( mayor a 12 sem)</td>
              <td>Recuperación funcional completa</td>
              <td>Fortalecimiento, propiocepción, reeducación marcha</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="atp-subtitle">⚠️ Complicaciones</h2>
      <ul className="atp-list">
        <li><strong>Pseudoartrosis</strong>: fallo de fusión en artrodesis (5-10%)</li>
        <li><strong>Infección</strong>: mayor riesgo en diabéticos y fumadores</li>
        <li><strong>Aflojamiento protésico</strong>: principal limitación prótesis tobillo</li>
        <li><strong>Transferencia de carga</strong>: artrosis adyacentes tras artrodesis</li>
      </ul>

      <h2 className="atp-subtitle">🛡️ Prevención</h2>
      <ul className="atp-list">
        <li><strong>Tratamiento adecuado de traumatismos</strong>
          <ul className="atp-sublist">
            <li>Reducción anatómica fracturas de tobillo</li>
            <li>Rehabilitación completa post-esguinces</li>
          </ul>
        </li>
        <li><strong>Control de enfermedades sistémicas</strong>
          <ul className="atp-sublist">
            <li>Manejo óptimo de diabetes, artritis reumatoide</li>
          </ul>
        </li>
        <li><strong>Calzado adecuado</strong>
          <ul className="atp-sublist">
            <li>Soporte para tipo de pie y actividad</li>
            <li>Evitar tacones altos en artrosis MTP1</li>
          </ul>
        </li>
      </ul>

      <h2 className="atp-subtitle">Conclusión</h2>
      <p className="atp-text">
        La artrosis de tobillo y pie presenta <strong>características únicas</strong>, siendo predominantemente postraumática. 
        El tratamiento conservador es fundamental, mientras las opciones quirúrgicas se individualizan según <strong>edad, actividad y articulaciones afectadas</strong>. 
        La artrodesis sigue siendo el gold standard para artrosis severa de tobillo, con prótesis indicadas selectivamente.
      </p>

    </div>
  );
}

export default ArtrosisTobPie;
