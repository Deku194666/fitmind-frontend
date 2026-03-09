import React, { useEffect } from 'react';
import NavBarFarmacosOST from './NavBarFarmacosOST';
import './FarmacosOST.css';

function FarmacosOST() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail53">

      <NavBarFarmacosOST />

      <p className="fxh-title">Fármacos Traumatológicos</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Fármacos Traumatológicos</strong> son esenciales para tratar trastornos que afectan huesos, músculos, tendones, ligamentos,
        fascia y nervios periféricos. Incluyen desde analgésicos hasta regeneradores tisulares, siendo fundamentales en traumatología,
        reumatología y neurología.
      </p>

      <p className="fxh-subtitle">📜 Historia de los Fármacos Traumatológicos</p>
      <ul className="fxh-list">
        <li><strong>Antigüedad:</strong> Uso de corteza de sauce y opio para el dolor.</li>
        <li><strong>Siglo XIX:</strong> Aislamiento de morfina (1806) y aspirina (1897).</li>
        <li><strong>Siglo XX:</strong> Desarrollo de AINEs, corticoides inyectables y relajantes musculares.</li>
        <li><strong>Siglo XXI:</strong> Biológicos (anti-TNFα), PRP, células madre e inhibidores selectivos COX-2.</li>
      </ul>

      <p className="fxh-subtitle">🔍 Clasificación</p>

      {/* HUESOS */}
      <p className="fxh-subsubtitle">📌 1. Para Huesos</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Ejemplo</th>
              <th>Mecanismo</th>
              <th>Indicaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bisfosfonatos</td>
              <td>Alendronato, Zoledronato</td>
              <td>Inhiben osteoclastos</td>
              <td>Osteoporosis</td>
            </tr>
            <tr>
              <td>Terapia hormonal</td>
              <td>Raloxifeno</td>
              <td>Modulador receptor estrogénico</td>
              <td>Osteoporosis postmenopáusica</td>
            </tr>
            <tr>
              <td>Anticuerpos monoclonales</td>
              <td>Denosumab</td>
              <td>Inhibe RANKL</td>
              <td>Osteoporosis severa</td>
            </tr>
            <tr>
              <td>Suplementos</td>
              <td>Calcio + Vit D</td>
              <td>Soporte estructural</td>
              <td>Deficiencia ósea</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* MUSCULOS */}
      <p className="fxh-subsubtitle">📌 2. Para Músculos</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Ejemplo</th>
              <th>Mecanismo</th>
              <th>Indicaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Relajantes musculares</td>
              <td>Ciclobenzaprina, Tizanidina</td>
              <td>Bloquean reflejos polisinápticos</td>
              <td>Espasmos</td>
            </tr>
            <tr>
              <td>Toxina botulínica</td>
              <td>OnabotulinumtoxinaA</td>
              <td>Bloqueo neuromuscular</td>
              <td>Distonías</td>
            </tr>
            <tr>
              <td>Aminoácidos ramificados</td>
              <td>Leucina, Valina</td>
              <td>Síntesis proteica</td>
              <td>Atrofia por inmovilización</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* TENDONES */}
      <p className="fxh-subsubtitle">📌 3. Para Tendones/Ligamentos</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Ejemplo</th>
              <th>Mecanismo</th>
              <th>Indicaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Antiinflamatorios</td>
              <td>Celecoxib</td>
              <td>Reducen prostaglandinas</td>
              <td>Tendinitis</td>
            </tr>
            <tr>
              <td>Colágeno hidrolizado</td>
              <td>Péptidos tipo I</td>
              <td>Estimula síntesis</td>
              <td>Tendinopatías</td>
            </tr>
            <tr>
              <td>Factores crecimiento</td>
              <td>PRP</td>
              <td>Regeneración tisular</td>
              <td>Roturas tendinosas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">⚠️ Efectos Secundarios Comunes</p>
      <ul className="fxh-list">
        <li><strong>Bisfosfonatos:</strong> Osteonecrosis mandibular.</li>
        <li><strong>AINEs:</strong> Úlceras GI, nefrotoxicidad.</li>
        <li><strong>Gabapentina:</strong> Mareos, edema.</li>
        <li><strong>Corticoides:</strong> Hiperglucemia, osteoporosis.</li>
      </ul>

      <p className="fxh-subtitle">✅ Conclusión</p>
      <p className="fxh-text">
        Los <strong>Fármacos Traumatológicos</strong> han evolucionado desde remedios naturales hasta terapias avanzadas
        como biológicos y regeneradores tisulares. Combinados con cirugía y rehabilitación permiten tratamientos
        más efectivos y personalizados. Su uso debe ser guiado por profesionales para maximizar beneficios y minimizar riesgos.
      </p>

    </div>
  );
}

export default FarmacosOST;
