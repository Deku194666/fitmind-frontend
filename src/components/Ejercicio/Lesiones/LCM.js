import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LCM.css';

function LCM() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxlcm-detail">

      <p className="fxlcm-title">
        Lesión del Ligamento Colateral Medial (LCM)
      </p>

      <p className="fxlcm-subtitle">📌 Introducción</p>
      <p className="fxlcm-text">
        El <strong>Ligamento Colateral Medial (LCM)</strong> es la estructura ligamentosa más frecuentemente lesionada de la rodilla, representando el <strong>40% de todas las lesiones ligamentosas</strong> de esta articulación. 
        A diferencia de los ligamentos cruzados, tiene buena vascularización y capacidad de cicatrización, lo que permite en muchos casos un tratamiento conservador exitoso.
      </p>

      <p className="fxlcm-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxlcm-list">
        <li>
          <strong>LCM</strong>: Se extiende desde el epicóndilo femoral medial hasta la metáfisis tibial proximal. Consta de:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Capa superficial</strong>: Principal restrictor del valgo</li>
            <li><strong>Capa profunda</strong>: Unida al menisco medial (meniscofemoral y meniscotibial)</li>
          </ul>
        </li>
        <li><strong>Función principal</strong>: Resistir las fuerzas en valgo y rotación externa.</li>
        <li><strong>Relaciones anatómicas</strong>: Íntima relación con el menisco medial ("complejo medial").</li>
      </ul>

      <p className="fxlcm-subtitle">Clasificación de la Lesión 📊</p>

      <div className="fxlcm-table-wrapper">
        <table className="fxlcm-table">
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
              <td>Microdesgarros sin elongación (mayor a 5mm en valgo a 30°)</td>
              <td>Dolor medial localizado, edema mínimo</td>
            </tr>
            <tr>
              <td>II (Moderado)</td>
              <td>Rotura parcial (5-10mm en valgo a 30°)</td>
              <td>Dolor moderado, edema, limitación funcional</td>
            </tr>
            <tr>
              <td>III (Completa)</td>
              <td>Rotura completa (mayor a 10mm en valgo a 30°)</td>
              <td>Inestabilidad marcada, hematoma medial</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlcm-subtitle">Mecanismos de Lesión 🤕</p>
      <ul className="fxlcm-list">
        <li><strong>Valgo forzado</strong>: Golpe lateral en rodilla extendida</li>
        <li><strong>Rotación externa</strong>: Pie fijo con rotación del cuerpo</li>
        <li>
          <strong>Lesiones asociadas frecuentes</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>LCA (20-40% de casos)</li>
            <li>Menisco medial (30%)</li>
          </ul>
        </li>
      </ul>

      <p className="fxlcm-subtitle">Diagnóstico 🩺</p>

      <p className="fxlcm-text"><strong>1. Examen Físico</strong></p>
      <ul className="fxlcm-list">
        <li>Valgo stress test</li>
        <li>Palpación medial</li>
        <li>Prueba de Slocum</li>
      </ul>

      <p className="fxlcm-text"><strong>2. Estudios de Imagen</strong></p>

      <div className="fxlcm-table-wrapper">
        <table className="fxlcm-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/examenes/radiografia" className="fxlcm-link">
                  Radiografía
                </Link>
              </td>
              <td>Avulsión ósea (Pellegrini-Stieda)</td>
              <td>Diagnóstico de lesiones óseas asociadas</td>
            </tr>
            <tr>
              <td>
                <Link to="/examenes/rmn" className="fxlcm-link">
                  RMN
                </Link>
              </td>
              <td>Edema medial, grado de rotura ligamentaria</td>
              <td>Sensibilidad 95% para lesiones grado III</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Discontinuidad fibrilar</td>
              <td>Evaluación dinámica</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlcm-subtitle">Tratamiento Conservador 🏥</p>
      <ul className="fxlcm-list">
        <li>Lesiones grado I-II</li>
        <li>Lesiones grado III aisladas</li>
        <li>Pacientes de cualquier edad</li>
      </ul>

      <p className="fxlcm-subtitle">Tratamiento Quirúrgico 🔪</p>
      <ul className="fxlcm-list">
        <li>Lesiones grado III con inestabilidad persistente</li>
        <li>Avulsiones óseas desplazadas</li>
        <li>Lesiones multiligamentosas</li>
      </ul>

      <p className="fxlcm-subtitle">Complicaciones ⚠️</p>
      <ul className="fxlcm-list">
        <li>Rigidez articular</li>
        <li>Inestabilidad residual</li>
        <li>Artrosis medial</li>
        <li>Neuroma del nervio safeno</li>
      </ul>

      <p className="fxlcm-subtitle">Conclusión</p>
      <p className="fxlcm-text">
        La mayoría de las lesiones del <strong>LCM</strong> pueden manejarse exitosamente con tratamiento conservador.
      </p>

    </div>
  );
}

export default LCM;
