import React, { useEffect } from 'react';
import './Fluoroquinolonas.css'; 

function Fluoroquinolonas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fq-detail">
      <p className="fq-title">Fluoroquinolonas Respiratorias</p>

      <p className="fq-subtitle">📌 Introducción</p>
      <p className="fq-text">
        Las <strong>Fluoroquinolonas Respiratorias</strong> son un subgrupo de antibióticos quinolónicos con amplio espectro de acción, 
        especialmente efectivas contra bacterias gram negativas y algunos gram positivos, incluyendo agentes comunes de infecciones
        respiratorias como Streptococcus pneumoniae y Haemophilus influenzae.
      </p>

      <p className="fq-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="fq-list">
        <li>Inhiben la ADN girasa y la topoisomerasa IV, enzimas esenciales para la replicación y reparación del ADN bacteriano.</li>
        <li>Provocan la ruptura del ADN bacteriano, lo que lleva a la muerte celular (bactericidas).</li>
      </ul>

      <p className="fq-subtitle">📋 Indicaciones Principales</p>
      <ul className="fq-list">
        <li>Neumonía adquirida en la comunidad</li>
        <li>Bronquitis bacteriana aguda exacerbada</li>
        <li>Sinusitis bacteriana</li>
        <li>Infecciones complicadas del tracto respiratorio inferior</li>
      </ul>

      <p className="fq-subtitle">💊 Ejemplos Comunes</p>
      <div className="fq-table-wrapper">
        <table className="fq-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Vida media</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Levofloxacino</td>
              <td>500-750 mg cada 24 h</td>
              <td>6-8 horas</td>
            </tr>
            <tr>
              <td>Moxifloxacino</td>
              <td>400 mg cada 24 h</td>
              <td>12 horas</td>
            </tr>
            <tr>
              <td>Gatifloxacino</td>
              <td>400 mg cada 24 h</td>
              <td>8-12 horas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fq-subtitle">⚠️ Efectos Adversos</p>
      <ul className="fq-list">
        <li>Tendinitis y ruptura de tendones (especialmente en mayores de 60 años y en uso concomitante con corticosteroides)</li>
        <li>Alteraciones gastrointestinales: náuseas, diarrea</li>
        <li>Alteraciones del sistema nervioso central: mareos, cefalea, insomnio</li>
        <li>Prolongación del intervalo QT (riesgo de arritmias)</li>
        <li>Fotosensibilidad</li>
      </ul>

      <p className="fq-subtitle">🔄 Contraindicaciones</p>
      <ul className="fq-list">
        <li>Niños y adolescentes en crecimiento (por riesgo en cartílago)</li>
        <li>Pacientes con antecedentes de prolongación del QT</li>
        <li>Embarazo y lactancia</li>
      </ul>

      <p className="fq-subtitle">📉 Interacciones Relevantes</p>
      <ul className="fq-list">
        <li>Antiácidos, sucralfato y suplementos de hierro y calcio: disminuyen absorción</li>
        <li>Medicamentos que prolongan el QT (antiarrítmicos, antidepresivos)</li>
        <li>Warfarina: puede aumentar su efecto anticoagulante</li>
      </ul>

      <p className="fq-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="fq-list">
        <li>Evitar uso en población pediátrica salvo indicación estricta</li>
        <li>Monitorear signos de tendinopatías durante el tratamiento</li>
        <li>Evaluar función renal antes y durante el tratamiento (ajustar dosis)</li>
        <li>Usar con precaución en pacientes con riesgo de arritmias</li>
      </ul>
    </div>
  );
}

export default Fluoroquinolonas;
