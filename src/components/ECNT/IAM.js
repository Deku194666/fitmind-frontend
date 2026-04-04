import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './IAM.css';

function IAM() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="iam-container">

      <p className="title-main">Infarto Agudo al Miocardio (IAM)</p>

      <p className="title-section">📌 Introducción</p>
      <p className="text-body">
        El <strong>Infarto Agudo al Miocardio (IAM)</strong> es una urgencia médica causada por la obstrucción súbita
        del flujo sanguíneo en una arteria coronaria, provocando isquemia y necrosis del tejido cardíaco.
        Es una de las principales causas de muerte a nivel mundial.
      </p>

      <p className="title-section">🧬 Fisiopatología</p>
      <ul className="text-body">
        <li> - 🩸 <Link to="/ecnt/ateroesclerosis">Aterosclerosis</Link></li>
        <li> - 🧱 Rotura de placa aterosclerótica</li>
        <li> - 🧪 Formación de trombo</li>
        <li> - 🧬 Isquemia y necrosis miocárdica</li>
        <li> - ⚡ <Link to="/ecnt/arritmias">Arritmias</Link> potencialmente letales</li>
      </ul>

      <p className="title-section">📌 Clasificación</p>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Tipo de IAM</th>
            <th>Características</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>STEMI</td>
            <td>Obstrucción total de una arteria coronaria</td>
          </tr>
          <tr>
            <td>NSTEMI</td>
            <td>Obstrucción parcial</td>
          </tr>
          <tr>
            <td>Angina inestable</td>
            <td>Pre-infarto sin necrosis</td>
          </tr>
        </tbody>
      </table>

      <p className="title-section">⚠️ Causas</p>
      <ul className="text-body">
        <li> - Aterosclerosis coronaria</li>
        <li> - <Link to="/ecnt/hipertension">Hipertensión arterial</Link></li>
        <li> - <Link to="/ecnt/dislipidemia">Dislipidemia</Link></li>
        <li> - Tabaquismo</li>
        <li> - <Link to="/ecnt/diabetes">Diabetes Mellitus</Link></li>
      </ul>

      <p className="title-section">🔍 Síntomas clásicos</p>
      <ul className="text-body">
        <li> - Dolor torácico intenso</li>
        <li> - <Link to="/ecnt/sintomas/disnea">Disnea</Link></li>
        <li> - Sudoración fría</li>
        <li> - Náuseas</li>
        <li> - Mareo o síncope</li>
      </ul>
      


            <p className="title-section"> 🧪 Diagnóstico </p>
      <ul className="text-body">
        <li> - <Link to="/examenes/ekg">Electrocardiograma</Link>.</li>
        <li> - Marcadores cardíacos.</li>
        <li> - <Link to="/examenes/ecg">Ecocardiograma</Link>.</li>
        <li> - Angiografía coronaria.</li>
      </ul>


      <p className="title-section">💊 Tratamiento</p>
      <p className="text-body">
        Reperfusión urgente mediante angioplastia primaria o trombólisis, asociada a tratamiento farmacológico
        (antiagregantes, anticoagulantes, betabloqueadores y estatinas).
      </p>

      <p className="title-section">🧨 Complicaciones</p>
      <ul className="text-body">
        <li> - <Link to="/ecnt/arritmias">Arritmias</Link></li>
        <li> - <Link to="/ecnt/insuficienciacardiaca">Insuficiencia cardíaca</Link></li>
        <li> - Shock cardiogénico</li>
        <li> - Reinfarto</li>
        <li> - <Link to="/ecnt/acv">ACV</Link></li>
      </ul>

      <p className="title-section">📌 Conclusión</p>
      <p className="text-body">
        El IAM requiere diagnóstico y tratamiento inmediato. La prevención y la rehabilitación cardiovascular
        son esenciales para reducir la mortalidad y mejorar la calidad de vida.
      </p>

    </div>
  );
}

export default IAM;
