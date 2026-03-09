import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LuxacionRodilla.css';

function LuxacionRodilla() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lux-detail">

      <p className="lux-title">Luxación de Rodilla e Inestabilidad Patelofemoral</p>

      <p className="lux-subtitle">📌 Introducción</p>
      <p className="lux-text">
        Las luxaciones de rodilla son emergencias ortopédicas con alto riesgo
        de lesión vascular (arteria poplítea 40%).  
        La inestabilidad patelofemoral es frecuente en mujeres jóvenes y atletas.
      </p>

      <p className="lux-subtitle">📊 Clasificación</p>

      <p className="lux-subsubtitle">Luxación Tibiofemoral (Schenck)</p>
      <div className="lux-table-wrapper-small">
        <table className="lux-table small-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Lesiones</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>KD-I</td><td>Ligamento colateral</td></tr>
            <tr><td>KD-II</td><td>Ambos colaterales</td></tr>
            <tr><td>KD-III</td><td>Colaterales + cruzado</td></tr>
            <tr><td>KD-IV</td><td>4 ligamentos</td></tr>
            <tr><td>KD-V</td><td>Fractura-luxación</td></tr>
          </tbody>
        </table>
      </div>

      <p className="lux-subsubtitle">Inestabilidad Patelofemoral (Fulkerson)</p>
      <div className="lux-table-wrapper-small">
        <table className="lux-table small-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>I</td><td>Sin displasia</td></tr>
            <tr><td>II</td><td>Displasia troclear</td></tr>
            <tr><td>III</td><td>Patella alta</td></tr>
            <tr><td>IV</td><td>Displasia severa</td></tr>
          </tbody>
        </table>
      </div>

      <p className="lux-subtitle">🩺 Estudios de Imagen</p>
      <div className="lux-table-wrapper">
        <table className="lux-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Tibiofemoral</th>
              <th>Patelar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/examenes/rx">Radiografías</Link></td>
              <td>AP/Lateral</td>
              <td>Merchant</td>
            </tr>
            <tr>
              <td><Link to="/examenes/tc">TC</Link></td>
              <td>Fracturas</td>
              <td>TT-TG &gt;20mm</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Ligamentos</td>
              <td>MPFL y cartílago</td>
            </tr>
            <tr>
              <td>Angiografía</td>
              <td>Sospecha vascular</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="lux-subtitle">🔄 Rehabilitación</p>
      <div className="lux-table-wrapper">
        <table className="lux-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Tibiofemoral</th>
              <th>Patelar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0-4 sem</td>
              <td>Inmovilización</td>
              <td>Férula + VMO</td>
            </tr>
            <tr>
              <td>4-8 sem</td>
              <td>ROM progresivo</td>
              <td>Cadena cerrada</td>
            </tr>
            <tr>
              <td>8-12 sem</td>
              <td>Fortalecimiento</td>
              <td>Excéntrico cuadriceps</td>
            </tr>
            <tr>
              <td>3-6 mes</td>
              <td>Retorno deportivo</td>
              <td>Neuromuscular</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default LuxacionRodilla;
