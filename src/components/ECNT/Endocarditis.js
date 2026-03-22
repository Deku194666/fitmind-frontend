

import React, { useEffect } from 'react';
import './Endocarditis.css';
import { Link } from 'react-router-dom';


function Endocarditis() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail281">

      <p className="fxh-title">❤️ Endocarditis</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>endocarditis</strong> es una infección del
        <strong> endocardio</strong>, que es la capa interna del corazón
        que recubre las válvulas y cavidades cardíacas.
      </p>

      <p className="fxh-text">
        Esta enfermedad suele ser causada por bacterias que ingresan al
        torrente sanguíneo y se adhieren a las válvulas del corazón.
        Es una condición grave que requiere diagnóstico y tratamiento
        médico oportuno.
      </p>


      <p className="fxh-subtitle">📋 Síntomas</p>

      <ul className="fxh-list">

        <li> 1) <Link to="/ecnt/sintomas/fiebre">Fiebre</Link>.  </li> 
        <li> 2) Fatiga intensa.</li>
        <li> 3) Dolor en músculos y articulaciones.</li>
        <li> 4) <Link to="/ecnt/soplocardiaco">Soplo cardíaco</Link>.</li>  
        <li> 5) Sudoración nocturna.</li>
        <li> 6) Dificultad para respirar.</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Causas</p>

      <ul className="fxh-list">

        <li> - Infecciones bacterianas en la sangre.</li>
        <li> - Procedimientos dentales sin profilaxis antibiótica.</li>
        <li> - Uso de drogas intravenosas.</li>
        <li> - Válvulas cardíacas dañadas o artificiales.</li>
        <li> - Enfermedades cardíacas previas.</li>

      </ul>


      <p className="fxh-subtitle">🧪 Diagnóstico</p>

      <ul className="fxh-list">

        <li> - <Link to="/examenes2/hemocultivos">Hemocultivos.</Link> </li>
        <li> - <Link to="/examenes/ecg">Ecocardiograma.</Link></li>
        <li> - Análisis de sangre.</li>
        <li> - Evaluación clínica.</li>

      </ul>


      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Tratamiento</th>
              <th>Tipo</th>
              <th>Objetivo</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Antibióticos intravenosos</td>
              <td>Medicamentos</td>
              <td>Eliminar infección bacteriana</td>
            </tr>

            <tr>
              <td>Hospitalización</td>
              <td>Cuidados médicos</td>
              <td>Monitoreo del paciente</td>
            </tr>

            <tr>
              <td>Cirugía valvular</td>
              <td>Procedimiento</td>
              <td>Reparar o reemplazar válvulas dañadas</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Prevención</p>

      <ul className="fxh-list">

        <li> - Mantener buena higiene bucal</li>
        <li> - Realizar controles médicos periódicos</li>
        <li> - Uso de antibióticos preventivos en ciertos procedimientos</li>
        <li> - Evitar uso de drogas intravenosas</li>
        <li> - Tratamiento oportuno de infecciones</li>

      </ul>

    </div>

  );

}

export default Endocarditis;
