import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ArtrosisRodilla.css";

function ArtrosisRodilla() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="fxa-detail">

      <h1 className="fxa-title">Artrosis de Rodilla (Gonartrosis)</h1>

      <h2 className="fxa-subtitle">📌 Introducción</h2>
      <p className="fxa-text">
        La artrosis de rodilla es una <strong>degeneración progresiva del cartílago articular de la articulación femorotibial y femoropatelar</strong>, 
        afectando al <strong>10-15% de adultos mayores de 40 años</strong>. Es la localización más frecuente de artrosis y principal causa de dolor 
        articular crónico y limitación funcional en extremidades inferiores.
      </p>

      <h2 className="fxa-subtitle">🦴 Anatomía Clave</h2>
      <ul className="fxa-list">
        <li><strong>Articulación femorotibial</strong>: Compartimento medial (más afectado), lateral y patelofemoral</li>
        <li><strong>Cartílago articular</strong>: 2-4mm de espesor en cóndilos femorales</li>
        <li><strong>Menisco</strong>: Amortiguador (50% de carga en extensión)</li>
        <li><strong>Ligamentos</strong>: Cruzados (estabilidad anteroposterior) y colaterales (estabilidad lateral)</li>
      </ul>

      <h2 className="fxa-subtitle">📊 Clasificación de la Gonartrosis (Kellgren-Lawrence)</h2>
      <div className="fxa-table-wrapper">
        <table className="fxa-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Hallazgos Radiológicos</th>
              <th>Manifestaciones Clínicas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Grado 1</strong></td>
              <td>Dudoso pinzamiento, posible osteofito incipiente</td>
              <td>Dolor ocasional tras actividad intensa</td>
            </tr>
            <tr>
              <td><strong>Grado 2</strong></td>
              <td>Osteofitos definidos, pinzamiento leve</td>
              <td>Dolor al subir/bajar escaleras, rigidez matutina</td>
            </tr>
            <tr>
              <td><strong>Grado 3</strong></td>
              <td>Pinzamiento moderado, esclerosis ósea, osteofitos múltiples</td>
              <td>Dolor al caminar, limitación de flexión, posible derrame</td>
            </tr>
            <tr>
              <td><strong>Grado 4</strong></td>
              <td>Pinzamiento severo, deformación ósea, quistes subcondrales</td>
              <td>Dolor en reposo, deformidad articular, limitación severa</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxa-subtitle">🤕 Factores de Riesgo</h2>
      <ul className="fxa-list">
        <li><strong>Edad</strong>: Prevalencia mayor a 40% en mayores de 70 años</li>
        <li><strong>Obesidad</strong>: IMC mayor a 30 (aumenta riesgo 4-5 veces)</li>
        <li><strong>Traumatismos</strong>: Fracturas, lesiones meniscales o ligamentosas</li>
        <li><strong>Malalineación</strong>: Genu varo/valgo, displasias</li>
        <li><strong>Ocupacional</strong>: Trabajos con carga repetitiva</li>
      </ul>

      <h2 className="fxa-subtitle">🩺 Diagnóstico</h2>
      <h3 className="fxa-subsubtitle">1. Manifestaciones Clínicas</h3>
      <ul className="fxa-list">
        <li><strong>Síndrome articular</strong>
          <ul className="fxa-sublist">
            <li>Dolor insidioso en cara anterior/medial de rodilla</li>
            <li>Rigidez matutina menor a 30 min</li>
            <li>Crepitación articular (80% casos)</li>
            <li>"Gelling phenomenon" tras inactividad</li>
          </ul>
        </li>
        <li><strong>Exploración física</strong>
          <ul className="fxa-sublist">
            <li>Dolor a la palpación de interlínea articular</li>
            <li>Limitación de movilidad (flexión normal 135°-140°)</li>
            <li>Derrame articular (30-50% casos)</li>
            <li>Deformidades en varo/valgo en estadios avanzados</li>
          </ul>
        </li>
        <li><strong>Marcha</strong>
          <ul className="fxa-sublist">
            <li>Marcha antiálgica</li>
            <li>Inestabilidad si hay afectación ligamentosa</li>
          </ul>
        </li>
      </ul>

      <h3 className="fxa-subsubtitle">2. Estudios de Imagen</h3>
      <div className="fxa-table-wrapper">
        <table className="fxa-table">
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
              <td>Pinzamiento articular, osteofitos, esclerosis subcondral</td>
              <td>Proyecciones AP, lateral y axial de rótula</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Estado de meniscos, cartílago residual, edema óseo</td>
              <td>Evaluar lesiones asociadas</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Derrame articular, sinovitis, quistes de Baker</td>
              <td>Guiar infiltraciones</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default ArtrosisRodilla;
