import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LCP.css';

function LCP() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxlcp-detail">

      <p className="fxlcp-title">
        Lesión del Ligamento Cruzado Posterior (LCP)
      </p>

      <p className="fxlcp-subtitle">📌 Introducción</p>
      <p className="fxlcp-text">
        El <strong>Ligamento Cruzado Posterior (LCP)</strong> es el ligamento intraarticular más resistente de la rodilla, representando solo el <strong>3-20% de todas las lesiones ligamentosas</strong> de esta articulación. 
        A diferencia del LCA, suele lesionarse por traumatismos de alta energía y con frecuencia pasa desapercibido inicialmente ("lesión silenciosa").
      </p>

      <p className="fxlcp-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxlcp-list">
        <li><strong>LCP</strong>: Se extiende desde la cara lateral del cóndilo femoral medial hasta la parte posterior de la tibia. Presenta dos fascículos (anterolateral y posteromedial).</li>
        <li><strong>Función principal</strong>: Limita el desplazamiento posterior de la tibia y la hiperextensión.</li>
        <li><strong>Relaciones anatómicas</strong>: Forma el "techo" de la escotadura intercondílea y se relaciona íntimamente con los meniscos.</li>
      </ul>

      <p className="fxlcp-subtitle">Clasificación de la Lesión 📊</p>

      <div className="fxlcp-table-wrapper">
        <table className="fxlcp-table">
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
              <td>Estiramiento sin discontinuidad</td>
              <td>Dolor posterior leve, mínima inestabilidad</td>
            </tr>
            <tr>
              <td>II (Moderado)</td>
              <td>Rotura parcial</td>
              <td>Dolor moderado, derrame, inestabilidad funcional</td>
            </tr>
            <tr>
              <td>III (Completa)</td>
              <td>Rotura total ± avulsión ósea</td>
              <td>Inestabilidad marcada, dificultad para escaleras</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlcp-subtitle">Mecanismos de Lesión 🤕</p>
      <ul className="fxlcp-list">
        <li><strong>"Dashboard injury"</strong>: Impacto directo en tibia proximal con rodilla flexionada</li>
        <li><strong>Hiperextensión forzada</strong>: Caída con pie en flexión plantar</li>
        <li><strong>Trauma directo anterior</strong>: Golpe en la cara anterior de la tibia</li>
        <li><strong>Lesiones asociadas frecuentes</strong>: LCP + PLC en 60% de casos</li>
      </ul>

      <p className="fxlcp-subtitle">Diagnóstico 🩺</p>

      <p className="fxlcp-text"><strong>1. Examen Físico</strong></p>
      <ul className="fxlcp-list">
        <li><strong>Prueba del cajón posterior</strong>: Gold standard</li>
        <li><strong>Posterior sag sign</strong>: Caída espontánea de la tibia</li>
        <li><strong>Prueba de Godfrey</strong></li>
        <li><strong>Quadriceps active test</strong></li>
      </ul>

      <p className="fxlcp-text"><strong>2. Estudios de Imagen</strong></p>

      <div className="fxlcp-table-wrapper">
        <table className="fxlcp-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link className="fxlcp-link" to="/examenes/rx">Radiografía</Link></td>
              <td>Avulsión tibial</td>
              <td>Diagnóstico lesiones óseas</td>
            </tr>
            <tr>
              <td>RMN</td>
              <td>Edema óseo posterolateral</td>
              <td>Sensibilidad 97%</td>
            </tr>
            <tr>
              <td>Teledistensión</td>
              <td>Medición traslación tibial</td>
              <td>Objetivización inestabilidad</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlcp-subtitle">Tratamiento Conservador 🏥</p>
      <ul className="fxlcp-list">
        <li>Lesiones grado I-II</li>
        <li>Pacientes de baja demanda</li>
        <li>Lesiones aisladas</li>
      </ul>

      <p className="fxlcp-subtitle">Tratamiento Quirúrgico 🔪</p>
      <ul className="fxlcp-list">
        <li>Lesiones grado III</li>
        <li>Avulsiones desplazadas</li>
        <li>Lesiones multiligamentosas</li>
      </ul>

      <p className="fxlcp-subtitle">Complicaciones ⚠️</p>
      <ul className="fxlcp-list">
        <li>Rigidez en flexión</li>
        <li>Inestabilidad residual</li>
        <li>Artrosis medial</li>
        <li>Lesiones vasculares</li>
      </ul>

      <p className="fxlcp-subtitle">Conclusión</p>
      <p className="fxlcp-text">
        Las lesiones del <strong>LCP</strong> requieren un alto índice de sospecha clínica.
        Las lesiones completas o combinadas suelen necesitar reconstrucción quirúrgica.
      </p>

    </div>
  );
}

export default LCP;
