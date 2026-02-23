import React, { useEffect } from 'react';
import './EPOC.css';
import { Link } from 'react-router-dom';

function EPOC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">
      <p className="title-main">Enfermedad Pulmonar Obstructiva Crónica (EPOC)</p>

      <p className="title-section">Introducción 📌</p>
      <p className="text-body">
        La <strong>EPOC (Enfermedad Pulmonar Obstructiva Crónica)</strong> es una enfermedad respiratoria progresiva y crónica caracterizada por una obstrucción persistente del flujo aéreo,
        lo que dificulta la respiración. Es causada principalmente por la exposición prolongada a irritantes pulmonares, siendo el tabaquismo el factor más común.
        También incluye dos condiciones principales: bronquitis crónica y enfisema pulmonar.
      </p>

      <p className="title-section">Fisiología y Fisiopatología 🫁</p>
      <p className="text-body">
        En la <strong>EPOC</strong> se combinan varios procesos que afectan a las vías respiratorias y al tejido pulmonar:
      </p>
      <ul className="text-body">
        <li>Bronquitis crónica: inflamación persistente con producción excesiva de moco.</li>
        <li>Enfisema: destrucción progresiva de los alvéolos.</li>
        <li>Obstrucción del flujo aéreo irreversible o parcialmente reversible.</li>
        <li>Trampa de aire y aumento del volumen residual.</li>
      </ul>

      <p className="title-section">Causas y Factores de Riesgo 🔎</p>
      <ul className="text-body">
        <li>Tabaquismo activo o pasivo.</li>
        <li>Exposición ocupacional a polvo o químicos.</li>
        <li>Contaminación del aire interior.</li>
        <li>Deficiencia de alfa-1 antitripsina.</li>
        <li>Edad avanzada.</li>
        <li>Infecciones respiratorias en la infancia.</li>
      </ul>

      <p className="title-section">Clasificación por severidad (GOLD) 📋</p>
      <ul className="text-body">
        <li>GOLD 1 (Leve): VEF1 ≥ 80%.</li>
        <li>GOLD 2 (Moderado): VEF1 50–79%.</li>
        <li>GOLD 3 (Grave): VEF1 30–49%.</li>
        <li>GOLD 4 (Muy grave): VEF1 &lt; 30%.</li>
      </ul>

      <p className="title-section">Diagnóstico 🧪</p>
      <ul className="text-body">
        <li>Espirometría (VEF1/CVF &lt; 0.70).</li>
        <li>
          <Link to="/examenes/radiografia">Radiografía</Link> /
          <Link to="/examenes/tc"> TC pulmonar</Link>.
        </li>
        <li>Oximetría y gases arteriales.</li>
        <li>Evaluación clínica de síntomas.</li>
      </ul>

      <p className="title-section">Tratamiento Médico 💊</p>
      <p className="text-body">
        No tiene cura, pero el tratamiento mejora la calidad de vida y reduce exacerbaciones.
      </p>
      <ul className="text-body">
        <li>Broncodilatadores inhalados.</li>
        <li>Corticoides inhalados.</li>
        <li>Terapias combinadas.</li>
        <li>Oxigenoterapia domiciliaria.</li>
        <li>Antibióticos en exacerbaciones.</li>
        <li>Vacunación antigripal y antineumocócica.</li>
      </ul>

      <p className="title-section">Estilo de Vida y Tratamientos Complementarios 🧘</p>
      <ul className="text-body">
        <li>Dejar de fumar.</li>
        <li>Rehabilitación pulmonar.</li>
        <li>Nutrición adecuada.</li>
        <li>Educación del paciente.</li>
        <li>Evitar contaminantes.</li>
      </ul>

      <p className="title-section">Complicaciones 🚨</p>
      <ul className="text-body">
        <li>Exacerbaciones graves.</li>
        <li>Infecciones respiratorias.</li>
        <li>Hipoxemia crónica.</li>
        <li>Cor pulmonale.</li>
        <li>
          Ansiedad y
          <Link to="/bienestarmental/enfmentales/depresion"> depresión</Link>.
        </li>
      </ul>

      <p className="title-section">Conclusión</p>
      <p className="text-body">
        La <strong>EPOC</strong> es una enfermedad prevenible y tratable. El abandono del tabaco es la intervención más importante.
        Un enfoque integral mejora la calidad de vida y reduce complicaciones.
      </p>
    </div>
  );
}

export default EPOC;
