import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LCMCodo.css';

function LCMCodo() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxlcmcodo-detail">

      <p className="fxlcmcodo-title">
        Lesión del Ligamento Colateral Medial (LCM) de Codo
      </p>

      <p className="fxlcmcodo-subtitle">📌 Introducción</p>
      <p className="fxlcmcodo-text">
        La lesión del <strong>Ligamento Colateral Medial (LCM)</strong> es frecuente en deportes de lanzamiento,
        representando <strong>15-20% de las lesiones de codo</strong> en atletas.
        Es común en pitchers de béisbol, balonmano y tenis.
        El LCM es el principal estabilizador contra fuerzas de valgo.
      </p>

      <p className="fxlcmcodo-subtitle">🦴 Anatomía Clave</p>
      <ul className="fxlcmcodo-list">
        <li><strong>Estructura</strong>
          <ul>
            <li>Haz anterior: principal estabilizador (30°–120°)</li>
            <li>Haz posterior: actúa &gt; 60°</li>
            <li>Haz transversal: función limitada</li>
          </ul>
        </li>
        <li><strong>Biomecánica</strong>
          <ul>
            <li>Soporta hasta 40 Nm en valgo</li>
            <li>Resiste 70% carga a 90°</li>
            <li>Tensión máxima en fase de aceleración</li>
          </ul>
        </li>
        <li><strong>Relaciones anatómicas</strong>
          <ul>
            <li>Nervio cubital posterior</li>
            <li>Flexor común como estabilizador dinámico</li>
          </ul>
        </li>
      </ul>

      <p className="fxlcmcodo-subtitle">📊 Clasificación</p>
      <div className="fxlcmcodo-table-wrapper">
        <table className="fxlcmcodo-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Daño</th>
              <th>Clínica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>Microdesgarros</td>
              <td>Dolor sin laxitud</td>
            </tr>
            <tr>
              <td>II</td>
              <td>Desgarro parcial</td>
              <td>Laxitud leve (3-5mm)</td>
            </tr>
            <tr>
              <td>III</td>
              <td>Rotura completa</td>
              <td>Laxitud marcada &gt; 5mm</td>
            </tr>
            <tr>
              <td>Crónica</td>
              <td>Insuficiencia ligamentosa</td>
              <td>Inestabilidad recurrente</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlcmcodo-subtitle">🩺 Diagnóstico</p>
      <p className="fxlcmcodo-text">
        <strong>Examen físico:</strong> dolor medial, prueba de valgo a 30°, prueba de lechero modificada,
        evaluación del nervio cubital.
      </p>

      <p className="fxlcmcodo-subtitle">📷 Estudios de Imagen</p>
      <div className="fxlcmcodo-table-wrapper">
        <table className="fxlcmcodo-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/examenes/rx" className="fxlcmcodo-link">Radiografía</Link></td>
              <td>Calcificaciones, avulsiones</td>
              <td>Evaluación ósea</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn" className="fxlcmcodo-link">RMN</Link></td>
              <td>Integridad fibras, edema</td>
              <td>Gold standard</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Laxitud en valgo</td>
              <td>Seguimiento</td>
            </tr>
            <tr>
              <td>ArtroRMN</td>
              <td>Desgarros parciales</td>
              <td>Casos complejos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlcmcodo-subtitle">🏥 Tratamiento Conservador</p>
      <ul className="fxlcmcodo-list">
        <li>Grado I y II (mayoría casos)</li>
        <li>Reposo, crioterapia, inmovilización inicial</li>
        <li>Fortalecimiento progresivo y programa de lanzamiento</li>
      </ul>

      <p className="fxlcmcodo-subtitle">🔪 Tratamiento Quirúrgico</p>
      <ul className="fxlcmcodo-list">
        <li>Grado III en atletas</li>
        <li>Fracaso conservador (3-6 meses)</li>
        <li>Reconstrucción tipo Jobe modificada</li>
        <li>Retorno deportivo 9-12 meses</li>
      </ul>

      <p className="fxlcmcodo-subtitle">🏋️‍♂️ Rehabilitación</p>
      <div className="fxlcmcodo-table-wrapper">
        <table className="fxlcmcodo-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Objetivo</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Protección injerto</td>
              <td>0-3 semanas</td>
            </tr>
            <tr>
              <td>2</td>
              <td>ROM completo</td>
              <td>3-6 semanas</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Fuerza 60%</td>
              <td>6-12 semanas</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Fuerza 80%</td>
              <td>3-6 meses</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Retorno deportivo</td>
              <td>6-12 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlcmcodo-subtitle">⚠️ Complicaciones</p>
      <ul className="fxlcmcodo-list">
        <li>Rigidez articular</li>
        <li>Inestabilidad residual</li>
        <li>Neuropatía cubital</li>
        <li>Artrosis medial</li>
      </ul>

      <p className="fxlcmcodo-subtitle">🛡️ Prevención</p>
      <ul className="fxlcmcodo-list">
        <li>Fortalecimiento excéntrico</li>
        <li>Control de carga deportiva</li>
        <li>Optimización técnica</li>
        <li>Evaluación biomecánica</li>
      </ul>

      <p className="fxlcmcodo-subtitle">Conclusión</p>
      <p className="fxlcmcodo-text">
        Las lesiones del LCM requieren diagnóstico preciso y tratamiento individualizado.
        Las parciales responden al manejo conservador; las completas en atletas
        suelen requerir reconstrucción quirúrgica.
      </p>

    </div>
  );
}

export default LCMCodo;
