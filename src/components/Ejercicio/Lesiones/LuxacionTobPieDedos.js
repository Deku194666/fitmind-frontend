import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LuxacionTobPieDedos.css';

function LuxacionTobPieDedos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lux-detail">

      <p className="lux-title">Luxaciones de Tobillo, Pie y Dedos</p>

      <p className="lux-subtitle">📌 Introducción</p>
      <p className="lux-text">
        Las luxaciones en el complejo del tobillo y pie representan <strong>5-7% de todas las luxaciones</strong>, siendo las más frecuentes las subtalares (40%) y mediotarsianas (35%). Requieren atención inmediata por su <strong>alto riesgo de complicaciones vasculares y cutáneas</strong>. Las luxaciones de dedos son comunes en deportes y accidentes laborales, con el primer dedo siendo el más afectado (60% de casos).
      </p>

      <p className="lux-subtitle">🦴 Anatomía Clave</p>
      <div className="cards-container">
        <div className="info-card">
          <h4>Tobillo</h4>
          <ul>
            <li><strong>Ligamento deltoideo</strong>: Estabilidad medial</li>
            <li><strong>Ligamento lateral</strong> (3 fascículos): Estabilidad lateral</li>
            <li><strong>Sindesmosis</strong>: Estabilidad tibiofibular distal</li>
          </ul>
        </div>
        <div className="info-card">
          <h4>Pie</h4>
          <ul>
            <li><strong>Subtalar</strong>: Articulación talocalcánea</li>
            <li><strong>Chopart</strong>: Articulación talonavicular y calcaneocuboidea</li>
            <li><strong>Lisfranc</strong>: Articulación tarsometatarsiana</li>
          </ul>
        </div>
        <div className="info-card">
          <h4>Dedos</h4>
          <ul>
            <li><strong>Placa plantar</strong>: Estabilizador principal</li>
            <li><strong>Ligamentos colaterales</strong>: Estabilidad lateral</li>
            <li><strong>Mecanismo flexor</strong>: Tendones flexores y extensores</li>
          </ul>
        </div>
      </div>

      <p className="lux-subtitle">📊 Clasificación</p>
      <div className="tables-container">
        <div className="table-card">
          <h4>Luxación de Tobillo (Broos-Bisschop)</h4>
          <div className="lux-table-wrapper">
            <table className="lux-table">
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Dirección</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>I</td><td>Lateral (60%)</td></tr>
                <tr><td>II</td><td>Medial (25%)</td></tr>
                <tr><td>III</td><td>Posterior (10%)</td></tr>
                <tr><td>IV</td><td>Anterior (5%)</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="table-card">
          <h4>Luxación Lisfranc (Myerson)</h4>
          <div className="lux-table-wrapper">
            <table className="lux-table">
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Características</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>A</td><td>Desplazamiento homogéneo (mayor a 50%)</td></tr>
                <tr><td>B</td><td>Desplazamiento parcial</td></tr>
                <tr><td>C</td><td>Inestabilidad divergente</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <p className="lux-subtitle">🤕 Mecanismos de Lesión</p>
      <ul className="lux-list">
        <li><strong>Tobillo</strong>: Trauma en rotación forzada o hiperflexión plantar/dorsal extrema</li>
        <li><strong>Lisfranc</strong>: Compresión axial en pie flexionado, hiperflexión dorsal forzada</li>
        <li><strong>Dedos</strong>: Trauma directo o hiperextensión forzada</li>
      </ul>

      <p className="lux-subtitle">🩺 Diagnóstico</p>
      <p className="lux-subsubtitle">1. Examen Físico</p>
      <ul className="lux-list">
        <li><strong>Tobillo</strong>: deformidad, equimosis, pulsos pedio/tibial posterior, prueba de estrés</li>
        <li><strong>Pie</strong>: dolor mediopie, signo pie plano traumático, prueba de estrés</li>
        <li><strong>Dedos</strong>: deformidad digital, edema, evaluación neurovascular</li>
      </ul>

      <p className="lux-subsubtitle">2. Estudios de Imagen</p>
      <div className="lux-table-wrapper">
        <table className="lux-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Tobillo</th>
              <th>Pie</th>
              <th>Dedos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/examenes/rx">Radiografías</Link></td>
              <td>AP/lateral/mortise</td>
              <td>AP/lateral/oblícua pie</td>
              <td>AP/lateral dedo</td>
            </tr>
            <tr>
              <td><Link to="/examenes/tc">TC</Link></td>
              <td>Fracturas osteocondrales</td>
              <td>Evaluación desplazamiento</td>
              <td>-</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Lesiones ligamentarias</td>
              <td>Lesiones Lisfranc</td>
              <td>Lesiones placa plantar</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="lux-subtitle">🏥 Manejo Inicial</p>
      <div className="cards-container">
        <div className="info-card">
          <h4>Tobillo</h4>
          <ul>
            <li><strong>Reducción cerrada urgente</strong>: Tracto axial + corrección deformidad, sedación/analgesia</li>
            <li><strong>Inmovilización post-reducción</strong>: Férula posterior o yeso, posición neutra</li>
          </ul>
        </div>
        <div className="info-card">
          <h4>Pie (Lisfranc/Chopart)</h4>
          <ul>
            <li><strong>Reducción cerrada</strong>: Tracto axial + manipulación, requiere anestesia</li>
            <li><strong>Inmovilización</strong>: Yeso o férula, posición funcional</li>
          </ul>
        </div>
        <div className="info-card">
          <h4>Dedos</h4>
          <ul>
            <li><strong>Reducción digital</strong>: Tracto axial + flexión, bloqueo digital con anestesia</li>
            <li><strong>Inmovilización</strong>: Férula o buddy taping, 3-4 semanas</li>
          </ul>
        </div>
      </div>

      <p className="lux-subtitle">🔪 Tratamiento Quirúrgico</p>
      <div className="cards-container">
        <div className="info-card">
          <h4>Tobillo</h4>
          <ul>
            <li><strong>Indicaciones</strong>: Inestabilidad post-reducción, fractura desplazada, lesión cutánea grave</li>
            <li><strong>Técnicas</strong>: Osteosíntesis fracturas, reparación ligamentosa, fijación temporaria sindesmosis</li>
          </ul>
        </div>
        <div className="info-card">
          <h4>Pie</h4>
          <ul>
            <li><strong>Indicaciones</strong>: Desplazamiento mayor a 2mm, inestabilidad subtalar, fractura-luxación</li>
            <li><strong>Técnicas</strong>: Reducción abierta + fijación interna, artrodesis selectiva</li>
          </ul>
        </div>
        <div className="info-card">
          <h4>Dedos</h4>
          <ul>
            <li><strong>Indicaciones</strong>: Luxación irreductible, fractura intraarticular, inestabilidad crónica</li>
            <li><strong>Técnicas</strong>: Reparación placa plantar, fijación con agujas K-wire</li>
          </ul>
        </div>
      </div>

      <p className="lux-subtitle">🔄 Rehabilitación</p>
      <div className="lux-table-wrapper">
        <table className="lux-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Tobillo</th>
              <th>Pie</th>
              <th>Dedos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aguda (0-3 sem)</td>
              <td>Inmovilización, descarga</td>
              <td>Yeso, no apoyo</td>
              <td>Buddy taping</td>
            </tr>
            <tr>
              <td>Subaguda (3-6 sem)</td>
              <td>Movilización progresiva</td>
              <td>Apoyo parcial</td>
              <td>Ejercicios activos</td>
            </tr>
            <tr>
              <td>Fortalecimiento (6-12 sem)</td>
              <td>Propiocepción, resistencia</td>
              <td>Fortalecimiento intrínseco</td>
              <td>Uso normal</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="lux-subtitle">⚠️ Complicaciones</p>
      <div className="cards-container">
        <div className="info-card">
          <h4>Tobillo</h4>
          <ul>
            <li>Inestabilidad crónica (15-20%)</li>
            <li>Artrosis postraumática (20-30%)</li>
            <li>Rigidez articular (10-15%)</li>
          </ul>
        </div>
        <div className="info-card">
          <h4>Pie</h4>
          <ul>
            <li>Artrosis tarsometatarsiana (40-50%)</li>
            <li>Deformidad en plano/pie cavo</li>
            <li>Síndrome compartimental</li>
          </ul>
        </div>
        <div className="info-card">
          <h4>Dedos</h4>
          <ul>
            <li>Rigidez (25-30%)</li>
            <li>Deformidad residual</li>
            <li>Artrosis interfalángica</li>
          </ul>
        </div>
      </div>

      <p className="lux-subtitle">📈 Pronóstico</p>
      <ul className="lux-list">
        <li><strong>Tobillo</strong>: 80-90% buenos resultados, peor pronóstico en lesiones sindesmales</li>
        <li><strong>Pie</strong>: 60-70% buenos resultados en reducción anatómica, subtalar alto riesgo de artrosis postraumática</li>
        <li><strong>Dedos</strong>: 85-90% recuperación completa en 6-8 semanas, primer dedo requiere más tiempo</li>
      </ul>

      <p className="lux-subtitle">Conclusión</p>
      <p className="lux-text">
        Las luxaciones de tobillo requieren reducción inmediata y evaluación de estabilidad, con reconstrucción ligamentosa en casos inestables. Las lesiones de Lisfranc necesitan reducción anatómica precisa (quirúrgica si mayor a 2mm desplazamiento). Las luxaciones digitales suelen manejarse conservadoramente, excepto en primer dedo con inestabilidad. La rehabilitación progresiva es clave, con seguimiento para detectar complicaciones tardías.
      </p>

    </div>
  );
}

export default LuxacionTobPieDedos;
