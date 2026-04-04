import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarAntihipertensivos from './NavBarAntihipertensivos';
import './Antihipertensivos.css';

function Antihipertensivos() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail55">

      <NavBarAntihipertensivos />

      <p className="fxh-title">Fármacos Antihipertensivos</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Fármacos Antihipertensivos</strong> son medicamentos diseñados para reducir la presión arterial en pacientes con
        <Link to="/ecnt/hipertension"> Hipertensión Arterial</Link>. 
        Su uso adecuado disminuye significativamente el riesgo de complicaciones cardiovasculares como 
        <Link to="/ecnt/iam"> Infarto Agudo al Miocardio</Link>,
        <Link to="/ecnt/acv"> Accidente Cerebro Vascular</Link>, y 
        <Link to="/ecnt/erc"> Enfermedad Renal Crónica</Link>.
      </p>

      <p className="fxh-subtitle">🔬 Clasificación de Antihipertensivos</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Ejemplos</th>
              <th>Mecanismo de acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IECA</td>
              <td>Enalapril, Ramipril</td>
              <td>Inhiben la enzima convertidora de angiotensina</td>
            </tr>
            <tr>
              <td>ARA II</td>
              <td>Losartán, Valsartán</td>
              <td>Bloquean receptores AT1 de angiotensina II</td>
            </tr>
            <tr>
              <td>Calcioantagonistas</td>
              <td>Amlodipino, Nifedipino</td>
              <td>Inhiben entrada de calcio en músculo liso vascular</td>
            </tr>
            <tr>
              <td>Betabloqueadores</td>
              <td>Atenolol, Metoprolol</td>
              <td>Bloquean receptores β1 cardíacos</td>
            </tr>
            <tr>
              <td>Diuréticos tiazídicos</td>
              <td>Hidroclorotiazida, Indapamida</td>
              <td>Disminuyen el volumen intravascular</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="fxh-list">
        <li><Link to="/ecnt/hipertension"> Hipertensión Arterial</Link> esencial (primaria).</li>
        <li>Hipertensión secundaria en combinación con manejo etiológico.</li>
        <li>Prevención secundaria en pacientes con riesgo cardiovascular.</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="fxh-list">
        <li><strong><Link to="/farmacos/iecas"> IECAs</Link></strong>: Tos seca, hiperpotasemia, angioedema.</li>
        <li><strong><Link to="/farmacos/araii"> ARA II</Link></strong>: Hiperpotasemia, menor incidencia de tos.</li>
        <li><strong><Link to="/farmacos/bloqueadorescanalesca"> Calcioantagonistas</Link></strong>: Edema maleolar, cefalea.</li>
        <li><strong><Link to="/farmacos/betabloqueadores"> Betabloqueadores</Link></strong>: Bradicardia, fatiga, disfunción sexual.</li>
        <li><strong><Link to="/farmacos/diureticos"> Diuréticos</Link></strong>: Hipokalemia, Hiponatremia, Hiperuricemia.</li>
      </ul>

      <p className="fxh-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="fxh-list">
        <li>En pacientes jóvenes: preferir IECA/ARA-II o betabloqueadores.</li>
        <li>En adultos mayores: considerar calcioantagonistas o tiazidas.</li>
        <li>En pacientes con diabetes o proteinuria: IECA o ARA-II de elección.</li>
        <li>Evitar combinaciones IECA + ARA-II por riesgo de insuficiencia renal.</li>
      </ul>

      <p className="fxh-subtitle">📦 Combinaciones Frecuentes</p>
      <ul className="fxh-list">
        <li>IECA + diurético tiazídico (ej: enalapril + hidroclorotiazida).</li>
        <li>ARA II + calcioantagonista (ej: valsartán + amlodipino).</li>
        <li>IECA o ARA II + betabloqueador: útil en hipertensión con insuficiencia cardíaca.</li>
      </ul>

      <p className="fxh-subtitle">📚 Conclusión</p>
      <p className="fxh-text">
        Los <strong>Fármacos Antihipertensivos</strong> son pilares fundamentales en el manejo de la hipertensión arterial. 
        Su elección debe individualizarse según edad, comorbilidades y tolerancia, priorizando siempre la prevención de 
        complicaciones cardiovasculares a largo plazo.
      </p>

    </div>
  );
}

export default Antihipertensivos;
