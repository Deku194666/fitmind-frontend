


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SoploCardiaco.css';

function SoploCardiaco() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail314">

      <p className="fxh-title">Soplo Cardíaco</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        El <strong>soplo cardíaco</strong> es un sonido anormal que se escucha durante el latido
        del corazón debido a turbulencias en el flujo sanguíneo. Puede ser inocente o indicar
        una enfermedad cardíaca subyacente.
      </p>

      <p className="fxh-subtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li> - Flujo sanguíneo turbulento dentro del corazón o vasos.</li>
        <li> - Alteraciones en válvulas cardíacas.</li>
        <li> - Cambios en la viscosidad o velocidad del flujo.</li>
        <li> - Defectos estructurales cardíacos.</li>
      </ul>

      <p className="fxh-subtitle">Clasificación</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inocente</td>
              <td>No asociado a enfermedad cardíaca, frecuente en niños.</td>
            </tr>
            <tr>
              <td>Patológico</td>
              <td>Relacionado con enfermedades como <Link to="/ecnt/valvulopatias">valvulopatías</Link>.</td>
            </tr>
            <tr>
              <td>Sistólico</td>
              <td>Ocurre durante la contracción del corazón.</td>
            </tr>
            <tr>
              <td>Diastólico</td>
              <td>Ocurre durante la relajación del corazón.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Causas ⚠️</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/valvulopatias">Valvulopatías</Link>.</li>
        <li> - Defectos congénitos.</li>
        <li> - <Link to="/ecnt/anemia">Anemia</Link>.</li>
        <li> - <Link to="/ecnt/sintomas/fiebre">Fiebre</Link> o estados hiperdinámicos.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas 🔍</p>
      <ul className="fxh-list">
        <li> - Frecuentemente asintomático.</li>
        <li> - <Link to="/ecnt/sintomas/fatiga">  Fatiga</Link>.</li>
        <li> - <Link to="/ecnt/sintomas/disnea">  Disnea</Link>.</li>  
        <li> - <Link to="/ecnt/sintomas/palpitaciones"> Palpitaciones</Link>.</li>
      </ul>

      <p className="fxh-subtitle">🚨 Signos de alarma</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/sintomas/sincope">Síncope</Link>.</li>
        <li> - Dolor torácico.</li>
        <li> - Dificultad respiratoria severa.</li>
        <li> - <Link to="/ecnt/sintomas/cianosis"> Cianosis</Link>.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🧪</p>
      <ul className="fxh-list">
        <li> - Auscultación cardíaca.</li>
        <li> - <Link to="/examenes/ekg">Electrocardiograma</Link>.</li>
        <li> - <Link to="/examenes/ecg">Ecocardiograma</Link>.</li>
        <li> - <Link to="/examenes/radiografia">Radiografía</Link> de tórax.</li>
      </ul>

      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-flex">

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Soplo inocente</p>
          <ul className="fxh-list">
            <li> - No requiere tratamiento.</li>
            <li> - Seguimiento clínico.</li>
          </ul>
        </div>

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Soplo patológico</p>
          <ul className="fxh-list">
            <li> - Tratamiento de la causa.</li>
            <li> - Cirugía valvular si es necesario.</li>
            <li> - Medicación específica.</li>
          </ul>
        </div>

      </div>

      <p className="fxh-subtitle">Complicaciones</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/ic">Insuficiencia cardíaca</Link>.</li>
        <li> - <Link to="/ecnt/arritmias">Arritmias</Link>.</li>
        <li> - <Link to="/ecnt/endocarditis">Endocarditis</Link>  infecciosa.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        El soplo cardíaco puede ser un hallazgo benigno o un signo de enfermedad importante.
        Su evaluación adecuada permite diferenciar entre ambos y guiar el manejo correcto.
      </p>

    </div>
  );
}

export default SoploCardiaco;