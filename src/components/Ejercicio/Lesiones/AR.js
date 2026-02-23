import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AR.css";

function AR() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ar-detail">

      <p className="ar-title">Artritis Reumatoide (AR)</p>

      <p className="ar-subtitle">📌 Introducción</p>
      <p className="ar-text">
        La <strong>Artritis Reumatoide</strong> es una enfermedad autoinmune sistémica 
        que afecta articulaciones sinoviales, con prevalencia del 
        <strong> 0.5-1% de la población adulta</strong>. 
        Sin tratamiento adecuado produce daño articular irreversible.
      </p>

      <p className="ar-subtitle">Patogenia Clave 🦠</p>
      <ul className="ar-list">
        <li><strong>Autoinmunidad</strong>: respuesta contra antígenos citrulinados</li>
        <li><strong>Sinovitis proliferativa</strong>: formación de pannus</li>
        <li><strong>Citocinas</strong>: TNF-α, IL-6, IL-1</li>
      </ul>

      <p className="ar-subtitle">Criterios ACR/EULAR 2010 📊</p>
      <div className="ar-table-wrapper">
        <table className="ar-table">
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Puntos</th>
              <th>Criterios</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Articulaciones</td>
              <td>1-3</td>
              <td>Grandes o pequeñas</td>
            </tr>
            <tr>
              <td>Serología</td>
              <td>3</td>
              <td>FR o Anti-CCP positivos</td>
            </tr>
            <tr>
              <td>Reactantes</td>
              <td>1</td>
              <td>PCR o VSG elevadas</td>
            </tr>
            <tr>
              <td>Duración</td>
              <td>1</td>
              <td>≥6 semanas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="ar-subtitle">Diagnóstico 🩺</p>
      <p className="ar-subsubtitle">Estudios de Imagen</p>
      <div className="ar-table-wrapper">
        <table className="ar-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/examenes/rx">Radiografía</Link></td>
              <td>Erosiones y estrechamiento</td>
              <td>Daño estructural</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Sinovitis y edema óseo</td>
              <td>Diagnóstico precoz</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Sinovitis Doppler+</td>
              <td>Monitoreo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="ar-subtitle">Tratamiento 💊</p>
      <ul className="ar-list">
        <li><strong>Metotrexato</strong> (droga ancla)</li>
        <li>FAME combinados</li>
        <li>Biológicos (Anti-TNF)</li>
        <li>JAK inhibitors</li>
      </ul>

      <p className="ar-subtitle">Seguimiento 📈</p>
      <div className="ar-table-wrapper">
        <table className="ar-table">
          <thead>
            <tr>
              <th>Parámetro</th>
              <th>Frecuencia</th>
              <th>Objetivo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DAS28</td>
              <td>1-3 meses</td>
              <td>Remisión &lt;2.6</td>
            </tr>
            <tr>
              <td>HAQ</td>
              <td>Semestral</td>
              <td>≤0.5</td>
            </tr>
            <tr>
              <td>Imagen</td>
              <td>Anual</td>
              <td>Sin progresión</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="ar-subtitle">Conclusión</p>
      <p className="ar-text">
        La AR requiere diagnóstico precoz y tratamiento temprano agresivo 
        para prevenir daño irreversible y preservar la función articular.
      </p>

    </div>
  );
}

export default AR;
