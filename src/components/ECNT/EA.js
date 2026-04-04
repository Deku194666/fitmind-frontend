import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EA.css';

function EA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">

      <p className="title-main">Enfermedad de Alzheimer (EA)</p>

      <p className="title-section">📌 Introducción</p>
      <p className="text-body">
        La <strong>Enfermedad de Alzheimer</strong> es un trastorno neurodegenerativo progresivo y la causa
        más frecuente de demencia en adultos mayores. Se caracteriza por el deterioro de la memoria,
        el pensamiento, el lenguaje y la capacidad funcional. Su inicio es insidioso y su progresión
        lenta, asociándose a la acumulación de placas β-amiloide y ovillos neurofibrilares de proteína tau.
      </p>

      <p className="title-section">🧬 Fisiopatología</p>
      <ul className="text-body">
        <li>Depósitos extracelulares de β-amiloide que alteran la comunicación neuronal.</li>
        <li>Acumulación intracelular de proteína tau hiperfosforilada.</li>
        <li>Degeneración neuronal progresiva (hipocampo y corteza cerebral).</li>
        <li>Disminución de neurotransmisores, especialmente acetilcolina.</li>
        <li>Inflamación crónica y estrés oxidativo.</li>
      </ul>

      <p className="title-section">🔍 Clasificación</p>

      <p className="text-body"><strong>Según edad de inicio:</strong></p>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Edad de inicio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Esporádico (tardío)</td>
            <td>&gt; 65 años (más frecuente)</td>
          </tr>
          <tr>
            <td>Familiar / genético</td>
            <td>&lt; 65 años (raro)</td>
          </tr>
        </tbody>
      </table>

      <p className="text-body"><strong>Según etapas clínicas:</strong></p>
      <ul className="text-body">
        <li>Leve: fallos de memoria reciente, desorientación leve.</li>
        <li>Moderado: confusión, alteración del juicio, dificultad para reconocer personas.</li>
        <li>Grave: dependencia total, pérdida de habilidades básicas.</li>
      </ul>

      <p className="title-section">⚠️ Factores de Riesgo</p>
      <ul className="text-body">
        <li>Edad avanzada.</li>
        <li>Historia familiar y genética (APOE-ε4, APP, PSEN1, PSEN2).</li>
        <li>
          Enfermedades cardiovasculares:
          <Link to="/ecnt/hipertension"> hipertensión</Link>,
          <Link to="/ecnt/dislipidemia"> dislipidemia</Link>,
          <Link to="/ecnt/diabetes"> diabetes</Link>.
        </li>
        <li>Traumatismo craneoencefálico.</li>
        <li>Bajo nivel de estimulación cognitiva.</li>
        <li>Estilo de vida no saludable.</li>
        <li>Tabaquismo y alcohol.</li>
      </ul>

      <p className="title-section">🧪 Diagnóstico</p>
      <ul className="text-body">
        <li>Evaluación clínica y pruebas neuropsicológicas (MMSE, MoCA).</li>
        <li>
          <Link to="/examenes/rnm"> Resonancia Magnética</Link>: atrofia cortical e hipocampal.
        </li>
        <li>PET-FDG: hipoactividad cerebral.</li>
        <li>Biomarcadores en LCR (β-amiloide y proteína tau).</li>
        <li>Entrevistas con familiares y cuidadores.</li>
      </ul>

      <p className="title-section">💊 Tratamiento Médico</p>
      <p className="text-body">
        El tratamiento busca ralentizar el deterioro cognitivo y mejorar la calidad de vida.
      </p>

      <ul className="text-body">
        <li>Inhibidores de la colinesterasa: donepezilo, rivastigmina, galantamina.</li>
        <li>Antagonista NMDA: memantina.</li>
        <li>Terapias con anticuerpos monoclonales (uso selectivo).</li>
        <li>Manejo de síntomas conductuales y afectivos.</li>
      </ul>

      <p className="title-section">🧘 Tratamiento No Farmacológico</p>
      <ul className="text-body">
        <li>Estimulación cognitiva y ejercicios de memoria.</li>
        <li>Rutinas estructuradas.</li>
        <li>Actividad física regular.</li>
        <li>Dieta saludable (mediterránea).</li>
        <li>Apoyo psicológico a paciente y cuidadores.</li>
        <li>Adaptación del hogar.</li>
      </ul>

      <p className="title-section">🧨 Complicaciones</p>
      <ul className="text-body">
        <li>Pérdida progresiva de la autonomía.</li>
        <li>Deterioro funcional completo.</li>
        <li>
          <Link to="/bienestarmental/enfmentales/depresion"> Depresión</Link> y
          <Link to="/bienestarmental/enfmentales/tag"> ansiedad</Link>.
        </li>
        <li>Desnutrición y deshidratación.</li>
        <li>Caídas, fracturas e infecciones.</li>
        <li>Sobrecarga del cuidador.</li>
      </ul>

      <p className="title-section">📌 Conclusión</p>
      <p className="text-body">
        La <strong>Enfermedad de Alzheimer</strong> es una patología crónica, progresiva e incurable,
        pero el diagnóstico temprano y un manejo integral permiten retrasar su evolución y preservar
        la funcionalidad por más tiempo. El abordaje multidisciplinario y el apoyo social son pilares
        fundamentales del tratamiento.
      </p>

    </div>
  );
}

export default EA;
