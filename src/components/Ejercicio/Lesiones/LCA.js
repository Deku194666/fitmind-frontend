import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LCA.css';

function LCA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxlca-detail">

      <p className="fxlca-title">
        Lesión del Ligamento Cruzado Anterior (LCA)
      </p>

      <p className="fxlca-subtitle">📌 Introducción</p>
      <p className="fxlca-text">
        La lesión del <strong>Ligamento Cruzado Anterior (LCA)</strong> es una de las lesiones deportivas más graves de la rodilla, representando el <strong>40% de todas las lesiones ligamentosas</strong> de esta articulación. 
        Es especialmente frecuente en deportes con cambios de dirección bruscos (fútbol, baloncesto, esquí) y tiene un alto impacto en la estabilidad rotatoria de la rodilla.
      </p>

      <p className="fxlca-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxlca-list">
        <li><strong>LCA</strong>: Se extiende desde la cara posterior del fémur hasta la tibia anterior. Está compuesto por dos fascículos (anteromedial y posterolateral).</li>
        <li><strong>Función principal</strong>: Limita el desplazamiento anterior de la tibia y la rotación excesiva.</li>
        <li><strong>Relaciones anatómicas</strong>: Interactúa con el menisco medial y el ligamento cruzado posterior (LCP).</li>
      </ul>

      <p className="fxlca-subtitle">Clasificación de la Lesión 📊</p>

      <div className="fxlca-table-wrapper">
        <table className="fxlca-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Daño Estructural</th>
              <th>Síntomas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I (Leve)</td>
              <td>Estiramiento sin rotura (elasticidad aumentada)</td>
              <td>Dolor leve, inflamación mínima, estabilidad conservada</td>
            </tr>
            <tr>
              <td>II (Moderado)</td>
              <td>Rotura parcial (25-75% fibras)</td>
              <td>Dolor moderado, derrame articular, inestabilidad leve</td>
            </tr>
            <tr>
              <td>III (Completa)</td>
              <td>Rotura total (mayor a 75% fibras)</td>
              <td>"Pop" audible, dolor intenso, hemartrosis, inestabilidad marcada</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlca-subtitle">Mecanismos de Lesión 🤕</p>
      <ul className="fxlca-list">
        <li><strong>Mecanismo típico</strong>: Rotación + valgo forzado (pie fijo + rodilla en extensión)</li>
        <li><strong>Hiperextensión</strong>: Aterrizaje brusco con rodilla hiperextendida</li>
        <li><strong>Desaceleración</strong>: Cambio de dirección repentino</li>
        <li><strong>Deportes de riesgo</strong>: Fútbol (41%), baloncesto (21%), esquí (12%)</li>
      </ul>

      <p className="fxlca-subtitle">Diagnóstico 🩺</p>

      <p className="fxlca-text"><strong>1. Examen Físico</strong></p>
      <ul className="fxlca-list">
        <li><strong>Prueba de Lachman</strong>: Gold standard (sensibilidad 85%)</li>
        <li><strong>Prueba del cajón anterior</strong>: Menos sensible pero específica</li>
        <li><strong>Pivot shift test</strong>: Evalúa inestabilidad rotatoria</li>
        <li><strong>Signo del "pop"</strong>: 70% de los pacientes refieren sonido audible</li>
      </ul>

      <p className="fxlca-text"><strong>2. Estudios de Imagen</strong></p>

      <div className="fxlca-table-wrapper">
        <table className="fxlca-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link className="fxlca-link" to="/examenes/rx">Radiografía</Link></td>
              <td>Fractura de Segond, avulsión tibial</td>
              <td>Descartar lesiones óseas asociadas</td>
            </tr>
            <tr>
              <td><Link className="fxlca-link" to="/examenes/rmn">RMN</Link></td>
              <td>Edema óseo, integridad ligamentaria</td>
              <td>Confirmación diagnóstica (sensibilidad 95%)</td>
            </tr>
            <tr>
              <td>Artroscopia</td>
              <td>Visualización directa</td>
              <td>Diagnóstico + tratamiento simultáneo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlca-subtitle">Tratamiento Conservador 🏥</p>
      <ul className="fxlca-list">
        <li>Pacientes sedentarios o de baja demanda</li>
        <li>Lesiones parciales sin inestabilidad</li>
        <li>Contraindicaciones quirúrgicas</li>
      </ul>

      <p className="fxlca-subtitle">Tratamiento Quirúrgico 🔪</p>
      <ul className="fxlca-list">
        <li>Pacientes jóvenes y activos</li>
        <li>Lesión completa con inestabilidad</li>
        <li>Lesiones asociadas</li>
      </ul>

      <p className="fxlca-subtitle">Complicaciones ⚠️</p>
      <ul className="fxlca-list">
        <li>Inestabilidad crónica</li>
        <li>Artrosis precoz</li>
        <li>Rigidez articular</li>
        <li>Fallo del injerto</li>
      </ul>

      <p className="fxlca-subtitle">Conclusión</p>
      <p className="fxlca-text">
        La lesión del <strong>LCA</strong> requiere un enfoque multidisciplinario. 
        La rehabilitación prolongada y los programas de prevención son esenciales 
        para minimizar el riesgo de re-lesión y artrosis secundaria.
      </p>

    </div>
  );
}

export default LCA;
