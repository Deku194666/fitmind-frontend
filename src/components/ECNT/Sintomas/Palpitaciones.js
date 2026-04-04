


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Palpitaciones.css';

function Palpitaciones() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail315">

      <p className="fxh-title">Palpitaciones</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        Las <strong>palpitaciones</strong> son la percepción anormal de los latidos del corazón,
        que pueden sentirse como rápidos, fuertes, irregulares o “saltados”.
        Pueden ser benignas o indicar un problema cardíaco.
      </p>

      <p className="fxh-subtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li> - Alteraciones en el ritmo cardíaco.</li>
        <li> - Aumento de la actividad del sistema nervioso simpático.</li>
        <li> - Cambios en la conducción eléctrica del corazón.</li>
        <li> - Percepción aumentada del latido.</li>
      </ul>

      <p className="fxh-subtitle">Causas ⚠️</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/arritmias">Arritmias</Link>.</li>
        <li> - Estrés o <Link to="/bienestarmental/enfmentales/tag">ansiedad</Link>.</li>
        <li> - Consumo de cafeína o estimulantes.</li>
        <li> - <Link to="/ecnt/anemia">Anemia</Link>.</li>
        <li> - Trastornos tiroideos.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas 🔍</p>
      <ul className="fxh-list">
        <li> - Sensación de latidos rápidos.</li>
        <li> - Latidos irregulares.</li>
        <li> - Golpes en el pecho.</li>
        <li> - Mareos o debilidad.</li>
      </ul>

      <p className="fxh-subtitle">🚨 Signos de alarma</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/sintomas/sincope">Síncope</Link>.</li>
        <li> - Dolor torácico.</li>
        <li> - Disnea.</li>
        <li> - Palpitaciones persistentes o muy intensas.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🧪</p>
      <ul className="fxh-list">
        <li> - Historia clínica.</li>
        <li> - <Link to="/examenes/ekg">Electrocardiograma</Link>.</li>
        <li> - Holter o monitoreo continuo.</li>
        <li> - Exámenes de sangre.</li>
      </ul>

      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-flex">

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Medidas generales</p>
          <ul className="fxh-list">
            <li> - Reducir cafeína.</li>
            <li> - Manejo del estrés.</li>
            <li> - Dormir adecuadamente.</li>
          </ul>
        </div>

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Tratamiento médico</p>
          <ul className="fxh-list">
            <li> - Manejo de la causa.</li>
            <li> - Medicación antiarrítmica.</li>
            <li> - Evaluación cardiológica.</li>
          </ul>
        </div>

      </div>

      <p className="fxh-subtitle">Complicaciones</p>
      <ul className="fxh-list">
        <li> - Ansiedad crónica.</li>
        <li> - Arritmias graves.</li>
        <li> - Deterioro de la calidad de vida.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        Las palpitaciones son un síntoma frecuente que puede tener causas benignas o
        más serias. Su evaluación adecuada permite descartar patologías importantes
        y brindar tranquilidad al paciente.
      </p>

    </div>
  );
}

export default Palpitaciones;