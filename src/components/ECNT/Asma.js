import React, { useEffect } from 'react';
import './Asma.css';
import { Link } from 'react-router-dom';

function Asma() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">
      <p className="title-main">Asma</p>

      <p className="title-section">Introducción 📌</p>
      <p className="text-body">
        El <strong>Asma</strong> es una enfermedad inflamatoria crónica de las vías respiratorias caracterizada por episodios recurrentes de disnea,
        sibilancias, opresión torácica y tos. Puede afectar a niños y adultos y ser desencadenada por alérgenos, infecciones,
        ejercicio, frío o contaminación. Según la OMS, más de 260 millones de personas viven con asma.
      </p>

      <p className="title-section">Fisiología y Fisiopatología</p>
      <p className="text-body">
        En personas con asma, las vías respiratorias presentan inflamación crónica. Ante un desencadenante ocurre:
      </p>
      <ul className="text-body">
        <li> 1)  <Link to="/ecnt/sintomas/broncocontriccion"> Broncoconstricción</Link>.</li>
        <li> 2) Hipersecreción de moco.</li>
        <li> 3) Edema de la mucosa.</li>
      </ul>
      <p className="text-body">
        Estos cambios provocan obstrucción reversible de las vías respiratorias.
      </p>

      <p className="title-section">Clasificación del Asma</p>
      <p className="text-body">Según la severidad:</p>
      <ul className="text-body">
        <li> - Asma intermitente.</li>
        <li> - Asma persistente leve.</li>
        <li> - Asma persistente moderada.</li>
        <li> - Asma persistente grave.</li>
      </ul>

      <p className="text-body">Según el desencadenante:</p>
      <ul className="text-body">
        <li> - Asma alérgica.</li>
        <li> - Asma no alérgica.</li>
        <li> - Asma ocupacional.</li>
        <li> - Asma inducida por medicamentos.</li>
      </ul>

      <p className="title-section">Síntomas 🔍</p>
      <ul className="text-body">
        <li> 1) <Link to="/ecnt/sintomas/disnea">Disnea</Link>.</li>
        <li> 2) <Link to="/ecnt/sintomas/sibilancias">Sibilancias</Link>.</li>  
        <li> 3) Tos.</li>
        <li> 4) Opresión torácica.</li>
        <li> 5) Uso de musculatura accesoria.</li>
      </ul>

      <p className="title-section">Tratamiento Médico</p>
      <p className="text-body">
        El objetivo es controlar síntomas, prevenir exacerbaciones y mejorar la función pulmonar.
      </p>
      <ul className="text-body">
        <li>
           - Broncodilatadores SABA como
          <Link to="/farmacos/farmacos2/salbutamol"> Salbutamol</Link>.
        </li>
        <li> - LABA asociados a corticoides inhalados.</li>
        <li>
          - Corticoides inhalados como
          <Link to="/farmacos/farmacos2/budesonida"> Budesonida</Link>.
        </li>
        <li> - Antagonistas de leucotrienos (Montelukast).</li>
        <li> - Anticolinérgicos.</li>
        <li> - Biológicos en asma grave.</li>
      </ul>

      <p className="title-section">Estilo de Vida y Tratamientos Complementarios</p>
      <ul className="text-body">
        <li> 1) Evitar alérgenos e irritantes.</li>
        <li> 2) Control ambiental.</li>
        <li> 3) Educación del paciente.</li>
        <li> 4) Ejercicio físico moderado.</li>
      </ul>

      <p className="title-section">Complicaciones ⚠️</p>
      <ul className="text-body">
        <li> 1) Exacerbaciones graves.</li>
        <li> 2) Infecciones respiratorias recurrentes.</li>
        <li> 3) Disminución de la función pulmonar.</li>
        <li> 4) Efectos adversos del tratamiento.</li>
      </ul>

      <p className="title-section">Conclusión 📌</p>
      <p className="text-body">
        El <strong>Asma</strong> es una enfermedad crónica que puede controlarse adecuadamente con diagnóstico oportuno,
        tratamiento integral y educación del paciente, permitiendo una vida normal y activa.
      </p>
    </div>
  );
}

export default Asma;
