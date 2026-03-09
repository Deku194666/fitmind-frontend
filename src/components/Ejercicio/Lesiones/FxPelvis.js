import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FxPelvis.css';

function FxPelvis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail32">
      <p className="fxh-title">Fracturas de Pelvis</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las fracturas de pelvis representan <strong>3-8% de todas las fracturas en adultos</strong> y son particularmente graves en politraumatizados, con una mortalidad del <strong>10-16%</strong> en casos estables y hasta <strong>50%</strong> en fracturas inestables.  
        Su manejo requiere un enfoque multidisciplinario debido al riesgo de lesiones asociadas (hemorragia, daño urogenital y neurológico).  
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Anillo pélvico</strong>: Formado por ilion, isquion, pubis y sacro.</li>
        <li><strong>Articulaciones</strong>: Sínfisis púbica (anterior) y articulaciones sacroilíacas (posterior).</li>
        <li><strong>Estabilidad</strong>: Depende de ligamentos (sacroilíacos anteriores/posteriores, sacroespinoso, sacrotuberoso).</li>
        <li><strong>Estructuras críticas</strong>: Vasos ilíacos, plexo lumbosacro, uretra y vejiga.</li>
      </ul>

      <p className="fxh-subtitle">Clasificación de Fracturas Pélvicas 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo (Tile/OTA)</th>
              <th>Mecanismo</th>
              <th>Características</th>
              <th>Estabilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tipo A (Estable)</td>
              <td>Trauma directo de baja energía</td>
              <td>Fracturas aisladas de ramas púbicas o ala sacra</td>
              <td>Anillo intacto</td>
            </tr>
            <tr>
              <td>Tipo B (Parcialmente inestable)</td>
              <td>Fuerza lateral o anteroposterior</td>
              <td>Lesión en "libro abierto" o cizallamiento vertical incompleto</td>
              <td>Inestabilidad rotacional</td>
            </tr>
            <tr>
              <td>Tipo C (Completamente inestable)</td>
              <td>Trauma de alta energía (caídas, accidentes)</td>
              <td>Fractura + disrupción ligamentosa posterior (sacroilíaca)</td>
              <td>Inestabilidad vertical y rotacional</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Mecanismos de Lesión 🤕</p>
      <ul className="fxh-list">
        <li><strong>Compresión lateral</strong>: Choques laterales (accidentes vehiculares).</li>
        <li><strong>Compresión anteroposterior</strong>: Impacto directo sobre sínfisis ("open-book").</li>
        <li><strong>Cizallamiento vertical</strong>: Caídas de altura o trauma axial.</li>
        <li><strong>Avulsión</strong>: Tracción muscular en deportistas (ej: fractura de la espina ilíaca en corredores).</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🩺</p>
      <p className="fxh-subsubtitle">1. Evaluación Inicial (ATLS)</p>
      <ul className="fxh-list">
        <li><strong>Estabilidad hemodinámica</strong>: Shock en 30% de fracturas inestables (priorizar reanimación).</li>
        <li><strong>Examen físico</strong>: Dolor a la compresión, inestabilidad en movilización suave.</li>
        <li><strong>Signos de alarma</strong>: 
          <ul className="fxh-sublist">
            <li>Hematoma perineal o escrotal (signo de Destot).</li>
            <li>Sangrado uretral (sospecha de lesión urogenital).</li>
            <li>Déficit neurológico (plexo lumbosacro).</li>
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
              <td>Screening inicial</td>
              <td>AP, entrada/inclinada de pelvis</td>
            </tr>
            <tr>
              <td><Link to="/examenes/tac">TAC</Link></td>
              <td>Gold standard</td>
              <td>Reconstrucción 3D, fragmentos, lesiones asociadas</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Lesiones de tejidos blandos</td>
              <td>Daño ligamentoso, edema medular</td>
            </tr>
            <tr>
              <td>Angio-TAC</td>
              <td>Hemorragia activa</td>
              <td>Extravasación de contraste (embolización urgente)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>
      <ul className="fxh-list">
        <li>Fracturas estables (Tipo A).</li>
        <li>Pacientes de alto riesgo quirúrgico.</li>
        <li>Fracturas no desplazadas en ancianos con baja demanda.</li>
      </ul>
      <p className="fxh-subsubtitle">Protocolo:</p>
      <ul className="fxh-list">
        <li><strong>Reposo relativo</strong>: 4-6 semanas (evitar carga).</li>
        <li><strong>Analgesia</strong>: AINEs + opioides si necesario.</li>
        <li><strong>Movilización temprana</strong>: Con ayuda de andador o muletas.</li>
        <li><strong>Control imagenológico</strong>: RX/TAC a las 2-4 semanas.</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>
      <ul className="fxh-list">
        <li>Fracturas inestables (Tipo B/C).</li>
        <li>Discrepancia de longitud mayor a 1 cm.</li>
        <li>Lesiones asociadas (vejiga, recto, vasos).</li>
        <li>Fallo del tratamiento conservador.</li>
      </ul>
      <p className="fxh-subsubtitle">Técnicas Quirúrgicas:</p>
      <ul className="fxh-list">
        <li><strong>Fijación externa</strong>: Estabilización temporal en politraumatizados.</li>
        <li><strong>Osteosíntesis interna</strong>:
          <ul className="fxh-sublist">
            <li><strong>Placa anterior</strong>: Para sínfisis púbica.</li>
            <li><strong>Tornillos sacroilíacos</strong>: Vía percutánea.</li>
            <li><strong>Barra supraacetabular</strong>: En fracturas complejas.</li>
          </ul>
        </li>
        <li><strong>Embolización angiográfica</strong>: Si sangrado activo.</li>
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
              <td>Aguda (0-6 sem)</td>
              <td>Control dolor, movilidad en cama, prevención TEV</td>
              <td>Hasta consolidación inicial</td>
            </tr>
            <tr>
              <td>Subaguda (6-12 sem)</td>
              <td>Carga progresiva, fortalecimiento core</td>
              <td>Hasta soportar peso completo</td>
            </tr>
            <tr>
              <td>Recuperación (3-6 mes)</td>
              <td>Ejercicios funcionales, equilibrio</td>
              <td>Hasta retorno a actividades</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Complicaciones ⚠️</p>
      <ul className="fxh-list">
        <li><strong>Hemorrágicas</strong>: Shock hipovolémico (mortalidad 30-50%).</li>
        <li><strong>Infecciosas</strong>: Osteomielitis, abscesos pélvicos.</li>
        <li><strong>Neurológicas</strong>: Lesión del plexo lumbosacro (5-10%).</li>
        <li><strong>Urológicas</strong>: Disfunción sexual, incontinencia.</li>
        <li><strong>Ortopédicas</strong>: Pseudoartrosis, artrosis postraumática.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        Las fracturas pélvicas requieren un manejo rápido y especializado, especialmente en pacientes inestables.  
        Mientras las fracturas estables pueden tratarse conservadoramente, las inestables necesitan reducción anatómica y fijación quirúrgica.  
        La rehabilitación temprana y el seguimiento prolongado son clave para prevenir complicaciones funcionales.  
      </p>
    </div>
  );
}

export default FxPelvis;
