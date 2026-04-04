import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarFarmacosCV from './NavBarFarmacosCV';
import './FarmacosCV.css';

function FarmacosCV() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail52">

      <NavBarFarmacosCV />

      <p className="fxh-title">Fármacos Cardiovasculares</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Fármacos Cardiovasculares</strong> constituyen el pilar del tratamiento de las enfermedades del corazón 
        y vasos sanguíneos, representando aproximadamente el 40% de las prescripciones médicas en adultos.
      </p>

      <p className="fxh-subtitle">📜 Evolución Histórica</p>
      <ul className="fxh-list">
        <li><strong>1785:</strong> Digital para <Link to="/ecnt/insuficienciacardiaca">Insuficiencia Cardíaca</Link>.</li>
        <li><strong>1949:</strong> Primer diurético clínico.</li>
        <li><strong>1960s:</strong> Desarrollo de betabloqueadores.</li>
        <li><strong>1970s:</strong> Introducción de <Link to="/farmacos/iecas">IECAs</Link>.</li>
        <li><strong>1980s:</strong> Estatinas.</li>
        <li><strong>2000s:</strong> DOACs.</li>
      </ul>

      <p className="fxh-subtitle">🔍 Clasificación Terapéutica</p>

      <p className="fxh-subsubtitle">📌 1. Antihipertensivos</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Clase</th>
              <th>Mecanismo</th>
              <th>Ejemplos</th>
              <th>Consideraciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/farmacos/iecas">IECA</Link></td>
              <td>Inhiben ECA</td>
              <td>Enalapril</td>
              <td>Tos seca, evitar embarazo</td>
            </tr>
            <tr>
              <td>ARA II</td>
              <td>Bloqueo AT1</td>
              <td>Losartán</td>
              <td>Alternativa a IECA</td>
            </tr>
            <tr>
              <td>BCC</td>
              <td>Bloqueo Ca+</td>
              <td>Amlodipino</td>
              <td>Edema maleolar</td>
            </tr>
            <tr>
              <td>Diuréticos</td>
              <td>Reducen volumen</td>
              <td>Furosemida</td>
              <td>Vigilar electrolitos</td>
            </tr>
            <tr>
              <td>Betabloqueadores</td>
              <td>↓ gasto cardíaco</td>
              <td>Metoprolol</td>
              <td>Evitar en asma</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subsubtitle">📌 2. Antiarrítmicos</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Clase</th>
              <th>Mecanismo</th>
              <th>Ejemplo</th>
              <th>Indicaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>Bloqueo Na+</td>
              <td>Lidocaína</td>
              <td>Arritmias ventriculares</td>
            </tr>
            <tr>
              <td>II</td>
              <td>Betabloqueo</td>
              <td>Propranolol</td>
              <td>Taquiarritmias</td>
            </tr>
            <tr>
              <td>III</td>
              <td>Prolongan AP</td>
              <td>Amiodarona</td>
              <td>FA, TV</td>
            </tr>
            <tr>
              <td>IV</td>
              <td>Bloqueo Ca+</td>
              <td>Verapamilo</td>
              <td>TSV</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subsubtitle">📌 3. Anticoagulantes</p>
      <ul className="fxh-list">
        <li><strong>Warfarina:</strong> Monitorización INR.</li>
        <li><strong>Heparinas:</strong> Uso hospitalario.</li>
        <li><strong>DOACs:</strong> Apixaban.</li>
      </ul>

      <p className="fxh-subsubtitle">📌 4. Hipolipemiantes</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Clase</th>
              <th>Ejemplo</th>
              <th>Reducción LDL</th>
              <th>Efectos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estatinas</td>
              <td>Atorvastatina</td>
              <td>30-60%</td>
              <td>Miopatía</td>
            </tr>
            <tr>
              <td>Ezetimiba</td>
              <td>—</td>
              <td>15-20%</td>
              <td>Pocos efectos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">⚠️ Interacciones Relevantes</p>
      <ul className="fxh-list">
        <li>Amiodarona + Warfarina → ↑ INR</li>
        <li>Verapamilo + Betabloqueador → Bloqueo AV</li>
        <li>Estatinas + Macrólidos → Miopatía</li>
      </ul>

      <p className="fxh-subtitle">✅ Conclusión</p>
      <p className="fxh-text">
        Los <strong>Fármacos Cardiovasculares</strong> son esenciales para tratar 
        <Link to="/ecnt/hipertension"> Hipertensión </Link>, 
        <Link to="/ecnt/arritmias"> Arritmias </Link> y dislipidemia. 
        Deben utilizarse bajo supervisión médica para garantizar eficacia y seguridad.
      </p>

    </div>
  );
}

export default FarmacosCV;
