import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Artrosis.css';
import NavBarArtrosis from '../Ejercicio/Lesiones/NavBarArtrosis';
import NavBarArtrosis2 from '../Ejercicio/Lesiones/NavBarArtrosis2';

function Artrosis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">

      <NavBarArtrosis />
      <NavBarArtrosis2 />

      <p className="title-main">Artrosis (Osteoartritis)</p>

      <p className="title-section">Introducción 📌</p>
      <p className="text-body">
        La <strong>Artrosis</strong> es una enfermedad articular degenerativa y crónica que afecta el cartílago articular,
        el hueso subcondral y los tejidos circundantes. Se caracteriza por el desgaste progresivo del cartílago,
        provocando dolor, rigidez y pérdida de movilidad. Es la forma más común de artritis y una causa importante
        de discapacidad en adultos mayores.
      </p>

      <p className="title-section">Fisiopatología 🔎</p>
      <p className="text-body">
        El cartílago articular actúa como un amortiguador que permite el movimiento suave entre los huesos.
        En la <strong>artrosis</strong>, se produce una degeneración del cartílago, lo que genera fricción ósea,
        inflamación leve y formación de osteofitos. También se afectan el hueso subyacente, la sinovia y los ligamentos,
        pudiendo aparecer deformidades articulares y limitación funcional.
      </p>

      <p className="title-section">Factores de riesgo 🧪</p>
      <ul className="text-body">
        <li>Edad avanzada.</li>
        <li>Antecedentes genéticos.</li>
        <li><Link to="/ecnt/obesidad">Obesidad</Link>.</li>
        <li>Actividades físicas repetitivas o de alto impacto.</li>
        <li>Desequilibrios biomecánicos.</li>
      </ul>

      <p className="title-section">Localización más frecuente 📍</p>
      <ul className="text-body">
        <li>Rodillas (gonartrosis).</li>
        <li>Caderas (coxartrosis).</li>
        <li>Manos.</li>
        <li>Columna cervical y lumbar.</li>
        <li>Pies.</li>
      </ul>

      <p className="title-section">Síntomas 🔍</p>
      <ul className="text-body">
        <li>Dolor articular que empeora con la actividad.</li>
        <li>Rigidez matutina.</li>
        <li>Crujidos articulares.</li>
        <li>Disminución del rango de movimiento.</li>
        <li>Inflamación leve.</li>
        <li>Deformidades en etapas avanzadas.</li>
      </ul>

      <p className="title-section">Diagnóstico 🧪</p>
      <ul className="text-body">
        <li>Evaluación clínica.</li>
        <li><Link to="/examenes/radiografia">Radiografía</Link>.</li>
        <li><Link to="/examenes/rnm">Resonancia Nuclear Magnética</Link> o ecografía.</li>
        <li>Análisis de líquido sinovial para descartar otras artritis.</li>
      </ul>

      <p className="title-section">Tratamiento médico 💊</p>
      <p className="text-body">
        No existe cura, pero sí tratamientos para aliviar los síntomas y mejorar la calidad de vida.
      </p>
      <ul className="text-body">
        <li>Analgésicos: <Link to="/farmacos/farmacos2/paracetamol">Paracetamol</Link>.</li>
        <li>AINEs: ibuprofeno, naproxeno, diclofenaco.</li>
        <li>Condroprotectores (uso controvertido).</li>
        <li>Infiltraciones intraarticulares.</li>
        <li>Cirugía ortopédica en fases avanzadas.</li>
      </ul>

      <p className="title-section">Tratamiento complementario 🧘</p>
      <ul className="text-body">
        <li>Ejercicio físico moderado.</li>
        <li>Pérdida de peso.</li>
        <li>Aplicación de frío o calor.</li>
        <li>Fisioterapia y terapia ocupacional.</li>
        <li>Uso de órtesis o bastones.</li>
      </ul>

      <p className="title-section">Complicaciones 🚨</p>
      <ul className="text-body">
        <li>Incapacidad funcional progresiva.</li>
        <li>Dolor crónico.</li>
        <li>Deformidades articulares.</li>
        <li>Dependencia para actividades diarias.</li>
        <li>Mayor riesgo de caídas.</li>
      </ul>

      <p className="title-section">Conclusión ✅</p>
      <p className="text-body">
        La <strong>artrosis</strong> es una enfermedad crónica y frecuente. Aunque no es curable,
        su evolución puede modificarse con intervenciones tempranas, ejercicio, control del peso
        y un abordaje integral que mejore la funcionalidad y la calidad de vida del paciente.
      </p>

    </div>
  );
}

export default Artrosis;
