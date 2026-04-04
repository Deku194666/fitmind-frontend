

import React, { useEffect } from 'react';
import './Disnea.css';
import { Link } from 'react-router-dom';


function Disnea() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail273">

      <p className="fxh-title">🫁 Disnea</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>disnea</strong> es la sensación de <strong>dificultad
        para respirar</strong> o falta de aire. Es un síntoma frecuente
        en diversas enfermedades respiratorias, cardíacas y metabólicas.
      </p>

      <p className="fxh-text">
        Puede aparecer durante el <strong>ejercicio</strong>, en reposo
        o incluso durante el sueño, dependiendo de la causa que la
        provoque.
      </p>


      <p className="fxh-subtitle">📋 Síntomas asociados</p>

      <ul className="fxh-list">

        <li> 1) Sensación de falta de aire</li>
        <li> 2) Respiración rápida</li>
        <li> 3) Opresión en el pecho</li>
        <li> 4) Fatiga</li>
        <li> 5) Ansiedad o sensación de ahogo</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Posibles causas</p>

      <ul className="fxh-list">

        <li><Link to="/ecnt/asma"> Asma </Link>  </li>  
        <li><Link to="/ecnt/epoc"> EPOC </Link>  </li>  
        <li> <Link to="/ecnt/neumonia"> Neumonía  </Link> </li>  
        <li> <Link to="/ecnt/insuficienciacardiaca"> Insuficiencia Cardiaca </Link></li> 
        <li> <Link to="/ecnt/anemia"> Anemia </Link>   </li> 
        <li>  <Link to="/bienestarmental/trasansiedad"> Ansiedad </Link>  o   <Link to="/bienestarmental/enfmentales/ataquespanico"> ataques de pánico </Link>   </li>    

      </ul>


      <p className="fxh-subtitle">🧪 Diagnóstico</p>

      <ul className="fxh-list">

        <li>Evaluación clínica</li>
        <li><Link to="/examenes/radiografia"> Radiografia</Link> de tórax</li>  
        <li> <Link to="/examenes/espirometria"> Espirometría </Link>  </li>
        <li>Análisis de sangre</li>
        <li><Link to="/examenes/ekg"> Electrocardiograma </Link> </li>

      </ul>


      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Causa</th>
              <th>Tratamiento</th>
              <th>Objetivo</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td> <Link to="/ecnt/asma"> Asma</Link></td>
              <td>Broncodilatadores y corticoides</td>
              <td>Mejorar respiración</td>
            </tr>

            <tr>
              <td>Infecciones respiratorias</td>
              <td>Antibióticos o antivirales</td>
              <td>Eliminar infección</td>
            </tr>

            <tr>
              <td><Link to="/ecnt/insuficienciacardiaca"> Insuficiencia Cardiaca</Link></td>
              <td>Diuréticos y medicamentos cardíacos</td>
              <td>Mejorar función cardíaca</td>
            </tr>

            <tr>
              <td>Anemia</td>
              <td>Suplementos de hierro</td>
              <td>Mejorar oxigenación</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Cuándo consultar al médico</p>

      <ul className="fxh-list">

        <li>Dificultad respiratoria repentina</li>
        <li>Dolor intenso en el pecho</li>
        <li>Coloración azulada en labios o uñas</li>
        <li>Disnea que empeora con el tiempo</li>
        <li>Dificultad para hablar o caminar por falta de aire</li>

      </ul>

    </div>

  );

}

export default Disnea;
