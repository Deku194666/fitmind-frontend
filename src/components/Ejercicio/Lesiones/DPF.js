import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DPF.css';

function DPF() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxdpf-detail">

      <p className="fxdpf-title">
        Disfunción Patelofemoral (DPF)
      </p>

      <p className="fxdpf-subtitle">📌 Introducción</p>
      <p className="fxdpf-text">
        La <strong>Disfunción Patelofemoral (DPF)</strong> es una de las causas más frecuentes de dolor anterior de rodilla, representando el <strong>25-40% de todas las consultas</strong> por dolor en esta articulación.
        Es un síndrome multifactorial caracterizado por dolor retropatelar o peripatelar que se exacerba con actividades que cargan la articulación en flexión.
      </p>

      <p className="fxdpf-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxdpf-list">
        <li>
          <strong>Articulación patelofemoral</strong>: Formada por la rótula y la tróclea femoral.
        </li>
        <li>
          <strong>Estabilizadores</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Vasto medial oblicuo (VMO)</li>
            <li>Retináculo lateral</li>
            <li>Ligamento patelofemoral medial (LPFM)</li>
          </ul>
        </li>
        <li><strong>Ángulo Q</strong>: Normal 10-15°.</li>
      </ul>

      <p className="fxdpf-subtitle">Clasificación 📊</p>
      <div className="fxdpf-table-wrapper">
        <table className="fxdpf-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Características</th>
              <th>Hallazgos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DPF Mecánica</td>
              <td>Malalineamiento patelar</td>
              <td>Inestabilidad</td>
            </tr>
            <tr>
              <td>DPF por Sobrecarga</td>
              <td>Uso excesivo</td>
              <td>Dolor difuso</td>
            </tr>
            <tr>
              <td>DPF Secundaria</td>
              <td>Post-traumática</td>
              <td>Fibrosis</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxdpf-subtitle">Diagnóstico 🩺</p>
      <ul className="fxdpf-list">
        <li>Compresión patelar</li>
        <li>Prueba de aprensión</li>
        <li>Evaluación de tracking patelar</li>
        <li>
          Estudios de imagen:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>
              <Link to="/examenes/radiografia" className="fxdpf-link">
                Radiografía
              </Link>
            </li>
            <li>
              <Link to="/examenes/rnm" className="fxdpf-link">
                RNM
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      <p className="fxdpf-subtitle">Tratamiento</p>
      <ul className="fxdpf-list">
        <li>Modificación de actividades</li>
        <li>Fortalecimiento selectivo (VMO)</li>
        <li>Estiramientos</li>
        <li>Propiocepción</li>
        <li>Cirugía solo si falla manejo conservador &gt; 6 meses</li>
      </ul>

      <p className="fxdpf-subtitle">Conclusión</p>
      <p className="fxdpf-text">
        La <strong>DPF</strong> requiere un enfoque multifactorial combinando fortalecimiento, corrección biomecánica y control de carga.
        El tratamiento conservador es exitoso en la mayoría de los casos.
      </p>

    </div>
  );
}

export default DPF;
