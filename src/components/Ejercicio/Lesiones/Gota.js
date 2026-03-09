import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Gota.css";

function Gota() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gota-detail">

      <p className="gota-title">Enfermedad por Gota (Artritis por Cristales)</p>

      <p className="gota-subtitle">📌 Introducción</p>
      <p className="gota-text">
        La gota es una enfermedad metabólica caracterizada por 
        <strong> depósitos de cristales de urato monosódico</strong> en articulaciones y tejidos, 
        afectando al <strong>1-2% de la población adulta</strong>. 
        Es la artritis inflamatoria más común en hombres mayores de 40 años.
      </p>

      <p className="gota-subtitle">Fisiopatología Clave 🦠</p>
      <ul className="gota-list">
        <li><strong>Hiperuricemia:</strong> mayor a 6.8 mg/dL</li>
        <li><strong>Formación de cristales:</strong> precipitación de urato monosódico</li>
        <li><strong>Inflamación:</strong> activación del inflamasoma NLRP3</li>
        <li><strong>Tofos:</strong> depósitos macroscópicos crónicos</li>
      </ul>

      <p className="gota-subtitle">Clasificación Clínica 📊</p>
      <div className="gota-table-wrapper">
        <table className="gota-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Características</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hiperuricemia asintomática</td>
              <td>Ácido úrico elevado sin síntomas</td>
              <td>Años</td>
            </tr>
            <tr>
              <td>Crisis aguda</td>
              <td>Artritis monoarticular dolorosa</td>
              <td>7-10 días</td>
            </tr>
            <tr>
              <td>Intercrítica</td>
              <td>Períodos sin síntomas</td>
              <td>Meses-años</td>
            </tr>
            <tr>
              <td>Tofácea crónica</td>
              <td>Tofos y daño articular</td>
              <td>mayor a 10 años</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="gota-subtitle">Diagnóstico 🩺</p>
      <p className="gota-subsubtitle">Estudios Clave</p>
      <div className="gota-table-wrapper">
        <table className="gota-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/examenes/lab">Ácido úrico sérico</Link></td>
              <td>mayor a 6.8 mg/dL</td>
              <td>Seguimiento</td>
            </tr>
            <tr>
              <td>Artrocentesis</td>
              <td>Cristales birrefringentes negativos</td>
              <td>Gold standard</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rx">RX</Link></td>
              <td>Erosiones en sacabocados</td>
              <td>Daño crónico</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Signo doble contorno</td>
              <td>Dx precoz</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="gota-subtitle">Tratamiento 💊</p>
      <ul className="gota-list">
        <li><strong>AINEs</strong></li>
        <li><strong>Colchicina</strong></li>
        <li><strong>Corticoides</strong></li>
        <li><strong>Alopurinol / Febuxostat</strong></li>
      </ul>

      <p className="gota-subtitle">Conclusión</p>
      <p className="gota-text">
        La gota es una enfermedad crónica pero altamente tratable. 
        El control del ácido úrico menor a 6 mg/dL permite prevenir crisis 
        y complicaciones a largo plazo.
      </p>

    </div>
  );
}

export default Gota;
