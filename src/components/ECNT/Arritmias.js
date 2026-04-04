import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Arritmias.css';

function Arritmias() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail230">

      <p className="fxh-title">Arritmias Cardíacas</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        Las <strong>Arritmias</strong> son alteraciones del ritmo o la conducción eléctrica del corazón
        (más rápidas, más lentas o irregulares que lo normal). Su relevancia clínica varía desde
        cuadros benignos hasta situaciones potencialmente mortales.
      </p>

      <p className="fxh-subtitle">🧬 Fisiopatología</p>
      <ul className="fxh-list">
        <li><strong> - Automaticidad anormal:</strong> foco ectópico que dispara impulsos fuera del nodo sinusal.</li>
        <li><strong> - Reentrada:</strong> circuito eléctrico que perpetúa la arritmia (p. ej., TPSV, flutter).</li>
        <li><strong> - Trastornos de conducción:</strong> bloqueos auriculoventriculares o intraventriculares.</li>
        <li><strong> - Despolarización gatillada:</strong> pospotenciales que desencadenan taquiarritmias.</li>
      </ul>

      <p className="fxh-subtitle">Clasificación</p>
      <p className="fxh-text">Según origen y velocidad del ritmo:</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Ejemplos / Características</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Supraventriculares</td>
              <td>Fibrilación auricular, flutter auricular, TPSV, taquicardia auricular.</td>
            </tr>
            <tr>
              <td>Ventriculares</td>
              <td>Taquicardia ventricular, fibrilación ventricular — riesgo de muerte súbita.</td>
            </tr>
            <tr>
              <td>Bradiarritmias</td>
              <td>Disfunción del nodo sinusal, bloqueos AV, pausas prolongadas.</td>
            </tr>
            <tr>
              <td>Extrasístoles</td>
              <td>Auriculares o ventriculares; generalmente benignas.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Causas ⚠️</p>
      <ul className="fxh-list">
        <li> - Cardiopatía isquémica: <Link to="/ecnt/iam">Infarto Agudo al Miocardio</Link>.</li>
        <li> - <Link to="/ecnt/hipertension">Hipertensión</Link> y <Link to="/ecnt/dislipidemia">Dislipidemia</Link>.</li>
        <li> - <Link to="/ecnt/diabetes">Diabetes</Link>, <Link to="/ecnt/obesidad">Obesidad</Link>, <Link to="/ecnt/apneadelsueno"> Apnea del Sueño</Link>.</li>
        <li> - Miocardiopatías, <Link to="/ecnt/valvulopatias">Valvulopatías</Link>, miocarditis.</li>
        <li> - Estimulantes: cafeína, alcohol, cocaína, anfetaminas.</li>
        <li> - Trastornos electrolíticos y tiroideos.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas frecuentes 🔍</p>
      <ul className="fxh-list">
        <li> - Palpitaciones o latidos irregulares.</li>
        <li> - <Link to="/ecnt/sintomas/disnea">  Disnea</Link>, fatiga o intolerancia al ejercicio.</li>  
        <li> - Mareos, presíncope o <Link to="/ecnt/sintomas/sincope"> síncope</Link>.</li>
        <li> - Dolor torácico o <Link to="/bienestarmental/enfmentales/tag"> Ansiedad</Link>.</li>
      </ul>

      <p className="fxh-subtitle">Signos de emergencia</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/sintomas/sincope"> Síncope</Link> o pérdida de conciencia.</li>
        <li> - Dolor torácico intenso o disnea severa.</li>
        <li> - Palpitaciones con hipotensión o mareo.</li>
        <li> - Sospecha de TV/FV.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🧪</p>
      <ul className="fxh-list">
        <li> - <Link to="/examenes/ekg">EKG de 12 derivaciones</Link>.</li>
        <li> - Holter o monitoreo ambulatorio.</li>
        <li> - Laboratorio: electrolitos y función tiroidea.</li>
        <li> - <Link to="/examenes/ecg">Ecocardiograma</Link>.</li>
        <li> - Estudio electrofisiológico en casos seleccionados.</li>
      </ul>

      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-flex">

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Manejo agudo</p>
          <ul className="fxh-list">
            <li> - Soporte ABC y monitorización.</li>
            <li> - Cardioversión eléctrica en inestabilidad.</li>
            <li> - Maniobras vagales o <Link to="/farmacos/otrosantiarritmicos">adenosina</Link>.</li>
            <li> - Antiarrítmicos según tipo.</li>
          </ul>
        </div>

        <div className="fxh-half">
          <p className="fxh-subsubtitle">Manejo crónico</p>
          <ul className="fxh-list">
            <li> - Control de frecuencia o ritmo.</li>
            <li> - Ablación por catéter.</li>
            <li> - Marcapasos en bradiarritmias.</li>
            <li> - Desfibrilador implantable.</li>
          </ul>
        </div>

      </div>

      <p className="fxh-subtitle">Tratamiento no farmacológico</p>
      <ul className="fxh-list">
        <li> - Dieta y ejercicio cardiosaludable.</li>
        <li> - Evitar tabaco, alcohol y estimulantes.</li>
        <li> - Manejo del estrés y del sueño.</li>
      </ul>

      <p className="fxh-subtitle">Complicaciones</p>
      <ul className="fxh-list">
        <li> - <Link to="/ecnt/acv">Accidente cerebrovascular</Link>.</li>
        <li> - <Link to="/ecnt/insuficienciacardiaca">Insuficiencia cardíaca</Link>.</li>
        <li> - Muerte súbita en arritmias ventriculares.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        Las <strong>arritmias</strong> abarcan desde cuadros benignos a emergencias vitales.
        El diagnóstico oportuno con <Link to="/examenes/ecg">ECG</Link> y el tratamiento adecuado
        permiten prevenir complicaciones como <Link to="/ecnt/acv">ACV</Link> y muerte súbita.
      </p>

    </div>
  );
}

export default Arritmias;