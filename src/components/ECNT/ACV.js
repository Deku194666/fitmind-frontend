import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ACV.css';

function ACV() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="acv-container">

      <p className="title-main">Accidente Cerebrovascular (ACV)</p>

      <p className="title-section">📌 Introducción</p>
      <p className="text-body">
        El <strong>Accidente Cerebrovascular (ACV)</strong>, también llamado ictus o derrame cerebral,
        es una urgencia médica causada por la interrupción del flujo sanguíneo cerebral,
        lo que produce daño neurológico agudo y potencialmente permanente.
      </p>

      <p className="title-section">🧠 Tipos de ACV</p>
      <ul className="text-body">
        <li>Isquémico: obstrucción arterial (≈85%).</li>
        <li>Hemorrágico: ruptura vascular.</li>
        <li>AIT: ataque isquémico transitorio (señal de alerta).</li>
      </ul>

      <p className="title-section">🧬 Fisiopatología</p>
      <p className="text-body">
        La interrupción del flujo sanguíneo provoca isquemia y necrosis del tejido cerebral,
        generando déficits neurológicos focales.
      </p>

      <p className="title-section">⚠️ Factores de riesgo</p>
      <ul className="text-body">
        <li><Link to="/ecnt/hipertension">Hipertensión arterial</Link></li>
        <li>Fibrilación auricular</li>
        <li><Link to="/ecnt/diabetes">Diabetes Mellitus</Link></li>
        <li><Link to="/ecnt/dislipidemia">Dislipidemia</Link></li>
        <li>Tabaquismo</li>
        <li><Link to="/ecnt/obesidad">Obesidad</Link> y sedentarismo</li>
      </ul>

      <p className="title-section">🔍 Síntomas</p>
      <ul className="text-body">
        <li>Debilidad facial o de extremidades</li>
        <li>Dificultad para hablar</li>
        <li>Pérdida súbita de visión</li>
        <li>Mareo o pérdida del equilibrio</li>
      </ul>

      <p className="title-section">🩺 Diagnóstico</p>
      <p className="text-body"><strong>Regla FAST:</strong> Face, Arms, Speech, Time.</p>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Prueba</th>
            <th>Detecta</th>
            <th>Ventaja</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Link to="/examenes/tc">TC cerebral</Link></td>
            <td>Sangrado / isquemia temprana</td>
            <td>Rápida y accesible</td>
          </tr>
          <tr>
            <td><Link to="/examenes/rnm">RMN cerebral</Link></td>
            <td>Infartos pequeños</td>
            <td>Alta precisión</td>
          </tr>
          <tr>
            <td>Angiografía</td>
            <td>Arterias obstruidas</td>
            <td>Guía tratamiento</td>
          </tr>
        </tbody>
      </table>

      <p className="title-section">💊 Tratamiento</p>
      <ul className="text-body">
        <li>Fibrinólisis y trombectomía (ACV isquémico)</li>
        <li>Control de presión intracraneal (hemorrágico)</li>
        <li>Antiagregantes y anticoagulación</li>
      </ul>

      <p className="title-section">🧘 Rehabilitación</p>
      <p className="text-body">
        Rehabilitación neurológica temprana, apoyo psicológico y cambios en el estilo de vida.
      </p>

      <p className="title-section">📌 Conclusión</p>
      <p className="text-body">
        El ACV es una emergencia médica tiempo-dependiente. La prevención, el reconocimiento
        temprano y la rehabilitación integral son clave para reducir mortalidad y discapacidad.
      </p>

    </div>
  );
}

export default ACV;
