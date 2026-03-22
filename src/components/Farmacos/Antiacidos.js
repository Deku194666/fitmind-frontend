import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Antiacidos.css';

function Antiacidos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aa-detail">
      <p className="aa-title">Antiácidos</p>

      <p className="aa-subtitle">📌 Introducción</p>
      <p className="aa-text">
        Los <strong>Antiácidos</strong> son medicamentos que neutralizan el ácido clorhídrico del jugo gástrico. Se utilizan principalmente para aliviar síntomas relacionados con hiperacidez gástrica, como la dispepsia o el reflujo gastroesofágico.
      </p>

      <p className="aa-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="aa-list">
        <li>Neutralizan el ácido gástrico en la luz del estómago.</li>
        <li>Reducen la acidez, aumentando el pH gástrico.</li>
        <li>Alivian los síntomas de pirosis, ardor o acidez estomacal.</li>
      </ul>

      <p className="aa-subtitle">📋 Indicaciones Principales</p>
      <ul className="aa-list">
        <li>Dispepsia funcional</li>
        <li>Enfermedad por reflujo gastroesofágico (ERGE)</li>
        <li>Gastritis y úlceras gástricas o duodenales</li>
        <li>Alivio sintomático ocasional de acidez</li>
      </ul>

      <p className="aa-subtitle">💊 Ejemplos Comunes</p>
      <div className="aa-table-wrapper">
        <table className="aa-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Composición</th>
              <th>Dosis habitual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hidróxido de aluminio</td>
              <td>Antiácido de acción lenta</td>
              <td>5-15 ml después de las comidas</td>
            </tr>
            <tr>
              <td>Hidróxido de magnesio</td>
              <td>Antiácido con efecto laxante</td>
              <td>5-15 ml después de las comidas</td>
            </tr>
            <tr>
              <td>Combinación Al/Mg (ej. Maalox®)</td>
              <td>Neutraliza y equilibra efectos secundarios</td>
              <td>1 a 2 tabletas masticables o 10-20 ml</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="aa-subtitle">⚠️ Efectos Adversos</p>
      <ul className="aa-list">
        <li>Estreñimiento (aluminio)</li>
        <li>Diarrea (magnesio)</li>
        <li>Alteraciones del equilibrio electrolítico</li>
        <li>Interferencia con la absorción de otros medicamentos</li>
        <li>Alcalosis metabólica en uso prolongado o excesivo</li>
      </ul>

      <p className="aa-subtitle">🔄 Contraindicaciones</p>
      <ul className="aa-list">
        <li>Insuficiencia renal severa</li>
        <li>Hipofosfatemia</li>
        <li>Hipersensibilidad a alguno de los componentes</li>
      </ul>

      <p className="aa-subtitle">📉 Interacciones Relevantes</p>
      <ul className="aa-list">
        <li>Disminuyen absorción de tetraciclinas, quinolonas, hierro y digoxina</li>
        <li>Separar su administración al menos 2 horas de otros medicamentos</li>
      </ul>

      <p className="aa-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="aa-list">
        <li>Uso ocasional o a corto plazo; no es tratamiento de mantenimiento</li>
        <li>No sustituye inhibidores de bomba de protones en patologías graves</li>
        <li>Evitar uso excesivo en pacientes con insuficiencia renal</li>
        <li>Revisar interacción si el paciente toma otros fármacos crónicos</li>
      </ul>
    </div>
  );
}

export default Antiacidos;
