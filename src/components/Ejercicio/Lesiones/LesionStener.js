import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./LesionStener.css"; // Nuevo CSS basado en LesionFCT

function LesionStener() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxfct-detail">

      <p className="fxfct-title">
        Lesión de Stener (Esguince del Ligamento Colateral Cubital del Pulgar)
      </p>

      <p className="fxfct-subtitle">📌 Introducción</p>
      <p className="fxfct-text">
        La lesión de Stener es una <strong>rotura completa del ligamento colateral cubital (LCC)</strong> 
        de la articulación metacarpofalángica (MCF) del pulgar, donde el tendón del aductor 
        se interpone entre los extremos rotos del ligamento, impidiendo su cicatrización espontánea. 
        Representa el <strong>10-15% de todas las lesiones de la mano</strong>.
      </p>

      <p className="fxfct-subtitle">🦴 Anatomía Clave</p>
      <ul className="fxfct-list">
        <li>
          <strong>Ligamento Colateral Cubital (LCC):</strong>
          <ul>
            <li>Principal estabilizador contra fuerzas en valgo</li>
            <li>Inserción proximal: Cabeza del primer metacarpiano</li>
            <li>Inserción distal: Base de la falange proximal</li>
          </ul>
        </li>
        <li>
          <strong>Relación con el tendón del aductor:</strong>
          <ul>
            <li>Discurre superficial al LCC</li>
            <li>Puede interponerse en roturas completas</li>
          </ul>
        </li>
        <li>
          <strong>Estabilizadores accesorios:</strong> Placa volar y ligamento colateral radial
        </li>
      </ul>

      <p className="fxfct-subtitle">Clasificación de la Lesión 📊</p>
      <div className="fxfct-table-wrapper">
        <table className="fxfct-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Daño Estructural</th>
              <th>Hallazgos Clínicos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>Microdesgarros sin laxitud</td>
              <td>Dolor localizado sin inestabilidad</td>
            </tr>
            <tr>
              <td>II</td>
              <td>Rotura parcial (≈50%)</td>
              <td>Laxitud &lt; 15°</td>
            </tr>
            <tr>
              <td>III</td>
              <td>Rotura total sin interposición</td>
              <td>Laxitud &gt; 15° reducible</td>
            </tr>
            <tr>
              <td>Stener</td>
              <td>Rotura total con interposición</td>
              <td>Laxitud &gt; 30° + masa palpable</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxfct-subtitle">Diagnóstico 🩺</p>
      <p className="fxfct-subtitle" style={{ fontSize: "2.4rem" }}>Examen Físico</p>
      <ul className="fxfct-list">
        <li><strong>Estrés en valgo:</strong> Laxitud &gt; 30° o diferencia &gt; 15°</li>
        <li><strong>Masa palpable:</strong> Interposición tendinosa</li>
        <li><strong>Dolor focal:</strong> Inserción del LCC</li>
        <li><strong>Equimosis:</strong> Fase aguda</li>
      </ul>

      <p className="fxfct-subtitle" style={{ fontSize: "2.4rem" }}>Estudios de Imagen</p>
      <div className="fxfct-table-wrapper">
        <table className="fxfct-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link className="fxfct-link" to="/examenes/rx">Rx</Link></td>
              <td>Avulsión ósea</td>
              <td>Evaluación inicial</td>
            </tr>
            <tr>
              <td><Link className="fxfct-link" to="/examenes/rmn">RMN</Link></td>
              <td>Interposición del aductor</td>
              <td>Confirmación diagnóstica</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Discontinuidad ligamentosa</td>
              <td>Evaluación dinámica</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxfct-subtitle">Tratamiento 🏥</p>
      <ul className="fxfct-list">
        <li>Inmovilización 4-6 semanas (lesiones parciales)</li>
        <li>Cirugía obligatoria en lesión de Stener</li>
        <li>Reparación o reconstrucción ligamentosa</li>
      </ul>

      <p className="fxfct-subtitle">Rehabilitación 🏋️</p>
      <div className="fxfct-table-wrapper">
        <table className="fxfct-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Objetivos</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Protección</td>
              <td>0-4 semanas</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Recuperar ROM</td>
              <td>4-8 semanas</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Fortalecimiento</td>
              <td>8-12 semanas</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Retorno deportivo</td>
              <td>&gt; 12 semanas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxfct-subtitle">Conclusión</p>
      <p className="fxfct-text">
        La lesión de Stener requiere diagnóstico precoz y tratamiento quirúrgico oportuno 
        para evitar inestabilidad crónica. Las lesiones parciales pueden tratarse 
        conservadoramente, pero la interposición tendinosa requiere reparación.
      </p>

    </div>
  );
}

export default LesionStener;
