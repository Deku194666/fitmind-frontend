import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./LesionLigEscafolunar.css";

function LesionLigEscafolunar() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxlesc-detail">

      <p className="fxlesc-title">
        Lesión del Ligamento Escafolunar de la Muñeca
      </p>

      <p className="fxlesc-subtitle">📌 Introducción</p>
      <p className="fxlesc-text">
        La lesión del <strong>Ligamento Escafolunar (LE)</strong> es la
        inestabilidad carpiana más frecuente, representando el 60% de las
        lesiones ligamentosas de la muñeca. Puede evolucionar hacia
        inestabilidad carpiana progresiva (DISI) y artrosis degenerativa
        (SLAC wrist).
      </p>

      <p className="fxlesc-subtitle">🦴 Anatomía Clave</p>
      <ul className="fxlesc-list">
        <li>
          <strong>Ligamento Escafolunar</strong>
          <ul>
            <li>Porción dorsal (principal estabilizador)</li>
            <li>Porción volar</li>
            <li>Porción proximal (membranosa)</li>
          </ul>
        </li>
        <li>
          <strong>Función:</strong> Mantener la estabilidad entre escafoides y semilunar
        </li>
      </ul>

      <p className="fxlesc-subtitle">📊 Clasificación</p>

      <div className="fxlesc-table-wrapper">
        <table className="fxlesc-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Daño</th>
              <th>Hallazgos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>Esguince</td>
              <td>Normal o edema en RMN</td>
            </tr>
            <tr>
              <td>II</td>
              <td>Rotura parcial</td>
              <td>Espacio escafolunar &lt; 3mm</td>
            </tr>
            <tr>
              <td>III</td>
              <td>Rotura completa</td>
              <td>Espacio escafolunar &gt; 3mm</td>
            </tr>
            <tr>
              <td>IV</td>
              <td>SLAC</td>
              <td>Artrosis establecida</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlesc-subtitle">🩺 Diagnóstico</p>

      <p className="fxlesc-subtitle" style={{ fontSize: "2.4rem" }}>
        Estudios de Imagen
      </p>

      <div className="fxlesc-table-wrapper">
        <table className="fxlesc-table">
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
                <Link className="fxlesc-link" to="/examenes/rx">
                  Radiografía
                </Link>
              </td>
              <td>Espacio &gt; 3mm</td>
              <td>Primera línea</td>
            </tr>
            <tr>
              <td>
                <Link className="fxlesc-link" to="/examenes/rmn">
                  RMN
                </Link>
              </td>
              <td>Integridad ligamentosa</td>
              <td>Gold standard</td>
            </tr>
            <tr>
              <td>Artroscopia</td>
              <td>Visualización directa</td>
              <td>Diagnóstico + tratamiento</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxlesc-subtitle">🏥 Tratamiento</p>
      <ul className="fxlesc-list">
        <li>Inmovilización 6-8 semanas en lesiones parciales</li>
        <li>Rehabilitación progresiva</li>
        <li>Cirugía en lesiones completas o inestabilidad</li>
      </ul>

      <p className="fxlesc-subtitle">Conclusión</p>
      <p className="fxlesc-text">
        El diagnóstico precoz es fundamental para prevenir inestabilidad
        carpiana y artrosis secundaria. Las lesiones parciales suelen
        tratarse conservadoramente, mientras que las completas requieren
        reparación quirúrgica en pacientes activos.
      </p>

    </div>
  );
}

export default LesionLigEscafolunar;
