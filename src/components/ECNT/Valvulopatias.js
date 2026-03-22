import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Valvulopatias.css';

function Valvulopatias() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail231">

      <p className="fxh-title">Valvulopatías</p>

      <p className="fxh-subtitle">Introducción 📌</p>
      <p className="fxh-text">
        Las <strong>Valvulopatías</strong> son trastornos de las válvulas cardíacas que generan
        <strong> obstrucción (estenosis)</strong> o <strong>fuga (insuficiencia/regurgitación)</strong> del flujo sanguíneo.
        Pueden comprometer la válvula <em>aórtica, mitral, tricúspide</em> o <em>pulmonar</em>. Su impacto va desde
        cuadros asintomáticos hasta <Link to="/ecnt/insuficienciacardiaca">Insuficiencia Cardíaca</Link>,
        <Link to="/ecnt/arritmias"> Arritmias</Link> y eventos embólicos.
      </p>

      <p className="fxh-subtitle">🧬 Fisiopatología</p>

      <ul className="fxh-list">
        <li><strong> - Estenosis:</strong> engrosamiento o calcificación valvular → aumento de presión → hipertrofia.</li>
        <li><strong> - Insuficiencia:</strong> cierre incompleto → reflujo sanguíneo → dilatación de cavidades.</li>
        <li> - Remodelado cardíaco y aumento de presiones de llenado → congestión pulmonar o sistémica.</li>
      </ul>

      <p className="fxh-subtitle">Clasificación (lesión principal)</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">

          <thead>
            <tr>
              <th>Lesión</th>
              <th>Causas comunes</th>
              <th>Claves clínicas</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Estenosis aórtica</td>
              <td>Calcificación degenerativa, válvula bicúspide, reumática</td>
              <td>Síncope, angina, disnea; soplo sistólico irradiado a carótidas</td>
            </tr>

            <tr>
              <td>Insuficiencia aórtica</td>
              <td>Degenerativa, reumática, endocarditis</td>
              <td>Pulso amplio, soplo diastólico</td>
            </tr>

            <tr>
              <td>Estenosis mitral</td>
              <td>Reumática</td>
              <td>Disnea, hemoptisis, <strong>FA</strong> frecuente</td>
            </tr>

            <tr>
              <td>Insuficiencia mitral</td>
              <td>Prolapso, isquemia, dilatación anular</td>
              <td>Soplo holosistólico irradiado a axila</td>
            </tr>

            <tr>
              <td>Tricúspide</td>
              <td>Hipertensión pulmonar, IC derecha</td>
              <td>Edema, hepatomegalia, ingurgitación yugular</td>
            </tr>
          </tbody>

        </table>
      </div>

      <p className="fxh-subtitle">Causas y factores de riesgo ⚠️</p>

      <ul className="fxh-list">
        <li> - Degeneración y calcificación por edad.</li>
        <li> - Fiebre reumática y <Link to="/ecnt/endocarditis"> endocarditis </Link> infecciosa.</li>
        <li> - Cardiopatía isquémica y miocardiopatías.</li>
        <li> - <Link to="/ecnt/hipertension">Hipertensión arterial</Link>, radioterapia torácica o enfermedad renal.</li>
      </ul>

      <p className="fxh-subtitle">Síntomas frecuentes 🔍</p>

      <ul className="fxh-list">
        <li> - <Link to="/ecnt/sintomas/disnea">  Disnea</Link> de esfuerzo y ortopnea.</li>
        <li> - Fatiga o intolerancia al ejercicio.</li>
        <li> - Dolor torácico o síncope (estenosis aórtica).</li>
        <li> - Palpitaciones por <Link to="/ecnt/arritmias">arritmias</Link>.</li>
      </ul>

      <p className="fxh-subtitle">Signos de emergencia</p>

      <ul className="fxh-list">
        <li> - <Link to="/ecnt/edemapulmonar">Edema pulmonar</Link> agudo.  </li>   
        <li> - <Link to="/ecnt/sintomas/sincope"> Síncope</Link> en estenosis aórtica severa.</li>
        <li> - Insuficiencia valvular aguda.</li>
        <li> - <Link to="/ecnt/arritmias"> Arritmia</Link> con compromiso hemodinámico.</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🧪</p>

      <ul className="fxh-list">
        <li> - Auscultación cardíaca dirigida.</li>
        <li> - <Link to="/examenes/ekg">ECG</Link>.</li>
        <li> - <Link to="/examenes/radiografia">Radiografía</Link> de tórax.</li>
        <li> - <Link to="/examenes/ecg">Ecocardiograma</Link> para evaluar severidad.</li>
        <li> -  Cateterismo o pruebas de esfuerzo en casos seleccionados.</li>
      </ul>

      <p className="fxh-subtitle">💊 Tratamiento</p>

      <div className="fxh-flex">

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Manejo médico</p>

          <ul className="fxh-list">
            <li> 1) Diuréticos para congestión.</li>
            <li> 2) Control de presión arterial.</li>
            <li> 3) Anticoagulación en FA o prótesis valvulares.</li>
          </ul>

        </div>

        <div className="fxh-half">

          <p className="fxh-subsubtitle">Intervención</p>

          <ul className="fxh-list">
            <li> 1) Reemplazo valvular aórtico quirúrgico o TAVI.</li>
            <li> 2) Valvulotomía mitral percutánea.</li>
            <li> 3) Reparación o reemplazo mitral.</li>
            <li> 4) Intervenciones percutáneas valvulares.</li>
          </ul>

        </div>

      </div>

      <p className="fxh-subtitle">Complicaciones</p>

      <ul className="fxh-list">
        <li> - <Link to="/ecnt/insuficienciacardiaca">Insuficiencia cardíaca</Link>.</li>
        <li> - <Link to="/ecnt/acv"> Accidente cerebrovascular</Link>.</li> 
        <li> - <Link to="/ecnt/arritmias">   Arritmias   </Link>auriculares o ventriculares.</li>
        <li> - <Link to="/ecnt/endocarditis"> Endocarditis  </Link>  infecciosa.</li>  
      </ul>

      <p className="fxh-subtitle">Consejos y seguimiento</p>

      <ul className="fxh-list">
        <li> - Controles periódicos con <Link to="/examenes/ecg">ecocardiograma</Link>.</li>
        <li> - Actividad física adaptada a la severidad.</li>
        <li> - Reconocer síntomas de alarma.</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        Las <strong>valvulopatías</strong> requieren diagnóstico precoz mediante
        <Link to="/examenes/ecg"> ecocardiografía</Link> y manejo individualizado.
        El tratamiento puede incluir control médico, manejo de
        <Link to="/ecnt/arritmias"> arritmias</Link> y reparación o reemplazo valvular.
      </p>

    </div>
  );
}

export default Valvulopatias;