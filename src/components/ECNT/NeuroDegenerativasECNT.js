import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NeuroDegenerativasECNT.css';

function NeuroDegenerativasECNT() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail235">

      <p className="fxh-title">Enfermedades Cerebrales Degenerativas Crónicas</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las enfermedades neurodegenerativas crónicas se caracterizan por la pérdida progresiva e irreversible de neuronas en áreas 
        específicas del sistema nervioso central. Impactan severamente la autonomía funcional y la calidad de vida.
        Las más frecuentes son: <Link to="/ecnt/ea"> Enfermedad de Alzheimer</Link>, 
        <Link to="/ecnt/enfermedaddeparkinson"> Enfermedad de Parkinson</Link> y  <Link to="/ecnt/ela"> Esclerosis Lateral Amiotrófica (ELA) </Link>.
      </p>

      <p className="fxh-subsubtitle">🧠 <Link to="/ecnt/ea">Enfermedad de Alzheimer</Link></p>
      <p className="fxh-text">
        Tipo más común de demencia. Pérdida progresiva de memoria, desorientación, dificultad en lenguaje y deterioro funcional.
        Relacionada con acumulación de placas de beta-amiloide y ovillos de tau.
      </p>
      <p className="fxh-text"><strong>Signos clave:</strong></p>
      <ul className="fxh-list">
        <li>Pérdida de memoria reciente</li>
        <li>Desorientación temporal y espacial</li>
        <li>Lenguaje empobrecido</li>
        <li>Cambios de personalidad</li>
        <li>Dificultad para realizar actividades cotidianas</li>
      </ul>

      <p className="fxh-subsubtitle">🧠 <Link to="/ecnt/enfermedaddeparkinson">Enfermedad de Parkinson</Link></p>
      <p className="fxh-text">
        Trastorno neurodegenerativo del sistema extrapiramidal, causado por pérdida de neuronas dopaminérgicas en sustancia negra.
        Afecta movimiento y puede tener síntomas cognitivos en etapas avanzadas.
      </p>
      <p className="fxh-text"><strong>Clásica tríada motora:</strong></p>
      <ul className="fxh-list">
        <li>Temblor de reposo</li>
        <li>Bradicinesia (lentitud de movimientos)</li>
        <li>Rigidez muscular</li>
      </ul>

      <p className="fxh-subsubtitle">🧠 Esclerosis Lateral Amiotrófica (ELA)</p>
      <p className="fxh-text">
        Enfermedad que afecta neuronas motoras superiores e inferiores, provocando debilidad muscular progresiva, espasticidad,
        fasciculaciones y atrofia muscular. Preserva función cognitiva en muchos casos.
      </p>
      <p className="fxh-text"><strong>Síntomas comunes:</strong></p>
      <ul className="fxh-list">
        <li>Debilidad progresiva en extremidades</li>
        <li>Dificultad para hablar, tragar y respirar</li>
        <li>Fasciculaciones (temblores musculares finos)</li>
        <li>Pérdida de masa muscular</li>
      </ul>

      <p className="fxh-subtitle">🧪 Diagnóstico</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Enfermedad</th>
              <th>Herramientas diagnósticas</th>
              <th>Característica clave</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/ecnt/ea">Enfermedad de Alzheimer</Link></td>
              <td>Pruebas cognitivas (MMSE), imagen cerebral (RMN), PET amiloide</td>
              <td>Pérdida de memoria + alteración funcional</td>
            </tr>
            <tr>
              <td><Link to="/ecnt/enfermedaddeparkinson">Parkinson</Link></td>
              <td>Clínica + respuesta a levodopa, DaTscan (en casos dudosos)</td>
              <td>Temblor + bradicinesia + rigidez</td>
            </tr>
            <tr>
              <td>ELA</td>
              <td>EMG, RMN, criterios de El Escorial</td>
              <td>Debilidad + fasciculaciones + atrofia muscular</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💊 Tratamiento</p>
      <ul className="fxh-list">
        <li><Link to="/ecnt/ea">Enfermedad de Alzheimer</Link>: Inhibidores de colinesterasa, memantina, soporte cognitivo y psicosocial</li>
        <li><Link to="/ecnt/enfermedaddeparkinson">Parkinson</Link>: Levodopa/carbidopa, agonistas dopaminérgicos, MAO-B inhibidores, fisioterapia</li>
        <li><strong>ELA:</strong> Riluzol, Edaravona, ventilación no invasiva, kinesiterapia, terapia ocupacional</li>
      </ul>

      <p className="fxh-subtitle">🌿 Enfoque Integral</p>
      <ul className="fxh-list">
        <li>Apoyo del entorno familiar y cuidadores</li>
        <li>Rehabilitación neurológica y funcional</li>
        <li>Prevención de complicaciones (caídas, infecciones, úlceras)</li>
        <li>Cuidados paliativos en etapas avanzadas</li>
      </ul>

      <p className="fxh-subtitle">📌 Conclusión</p>
      <p className="fxh-text">
        Las <strong>Enfermedades Cerebrales Degenerativas</strong> son incurables pero tratables. Diagnóstico precoz, manejo sintomático y acompañamiento psicosocial
        son pilares fundamentales para preservar calidad de vida y dignidad del paciente.
      </p>

    </div>
  );
}

export default NeuroDegenerativasECNT;