


import React, { useEffect } from 'react';
import './Espirometria.css';
import { Link } from 'react-router-dom';


function Espirometria() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail256">

      <p className="fxh-title">🫁 Espirometría</p>

      <p className="fxh-subtitle">📌 Introducción</p>

      <p className="fxh-text">
        La <strong>espirometría</strong> es una prueba de función pulmonar que
        mide la cantidad de aire que una persona puede inhalar y exhalar,
        así como la velocidad con la que se expulsa el aire de los pulmones.
        Es uno de los exámenes más utilizados para evaluar la salud
        respiratoria.
      </p>

      <p className="fxh-text">
        Este examen ayuda a diagnosticar y controlar diversas enfermedades
        respiratorias, como <strong><Link to="/ecnt/asma"> Asma</Link>, bronquitis crónica, enfisema
        pulmonar y enfermedad pulmonar obstructiva crónica (EPOC)</strong>.
        La prueba es sencilla, rápida y no invasiva.
      </p>


      <p className="fxh-subtitle">🧪 ¿Para qué se realiza?</p>

      <ul className="fxh-list">

        <li>Evaluar la función pulmonar</li>
        <li>Diagnosticar enfermedades respiratorias</li>
        <li>Monitorear enfermedades pulmonares crónicas</li>
        <li>Evaluar la eficacia de tratamientos respiratorios</li>
        <li>Detectar obstrucción en las vías respiratorias</li>

      </ul>


      <p className="fxh-subtitle">📋 ¿Cómo se realiza el examen?</p>

      <ul className="fxh-list">

        <li>El paciente respira profundamente</li>
        <li>Luego sopla con fuerza dentro de un dispositivo llamado espirómetro</li>
        <li>El aparato registra el volumen y la velocidad del aire</li>
        <li>La prueba puede repetirse varias veces para obtener resultados precisos</li>

      </ul>


      <p className="fxh-subtitle">⚠️ Preparación para el examen</p>

      <ul className="fxh-list">

        <li>Evitar fumar antes del examen</li>
        <li>No consumir comidas pesadas previamente</li>
        <li>Usar ropa cómoda</li>
        <li>Seguir las indicaciones médicas sobre medicamentos</li>

      </ul>


      <p className="fxh-subtitle">📊 Parámetros evaluados</p>

      <ul className="fxh-list">

        <li>Capacidad vital forzada (CVF)</li>
        <li>Volumen espiratorio forzado en el primer segundo (VEF1)</li>
        <li>Relación VEF1/CVF</li>
        <li>Flujo espiratorio máximo</li>

      </ul>


      <p className="fxh-subtitle">📈 Interpretación de resultados</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Resultado</th>
              <th>Significado</th>
              <th>Posible condición</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Normal</td>
              <td>Función pulmonar adecuada</td>
              <td>Pulmones sanos</td>
            </tr>

            <tr>
              <td>Obstructivo</td>
              <td>Dificultad para expulsar aire</td>
              <td>Asma o EPOC</td>
            </tr>

            <tr>
              <td>Restrictivo</td>
              <td>Disminución del volumen pulmonar</td>
              <td>Fibrosis pulmonar u otras enfermedades</td>
            </tr>

            <tr>
              <td>Mixto</td>
              <td>Combinación de obstrucción y restricción</td>
              <td>Trastornos pulmonares complejos</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">📌 Importancia del examen</p>

      <ul className="fxh-list">

        <li>Permite detectar enfermedades respiratorias tempranamente</li>
        <li>Ayuda a evaluar la gravedad de problemas pulmonares</li>
        <li>Permite monitorear la evolución de enfermedades respiratorias</li>
        <li>Guía el tratamiento médico adecuado</li>

      </ul>

    </div>

  );

}

export default Espirometria;