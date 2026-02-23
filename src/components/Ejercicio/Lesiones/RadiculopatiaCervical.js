import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RadiculopatiaCervical.css';


function RadiculopatiaCervical() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Radiculopatía Cervical</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        La radiculopatía cervical afecta aproximadamente al <strong>3.5% de la población general</strong>, con mayor incidencia entre los 40-50 años. 
        Representa una compresión de las raíces nerviosas cervicales, causando dolor radicular y déficit neurológico. 
        Es la segunda causa más común de radiculopatía después de la lumbar.
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Raíces cervicales</strong>: Emergen entre C1-C7 (8 raíces cervicales; C8 sale entre C7-T1)</li>
        <li><strong>Zonas vulnerables</strong>: Foramen intervertebral (osteofitos) y disco intervertebral (hernias)</li>
        <li><strong>Relaciones anatómicas</strong>: Arteria vertebral cercana a raíces superiores (C1-C4)</li>
      </ul>

      <p className="fxh-subtitle">Etiología y Factores de Riesgo 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Causa</th>
              <th>Frecuencia</th>
              <th>Mecanismo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Hernia discal</strong></td>
              <td>70% casos agudos</td>
              <td>Compresión directa raíz nerviosa</td>
            </tr>
            <tr>
              <td><strong>Espondilosis</strong></td>
              <td>80% casos crónicos</td>
              <td>Estrechamiento foraminal por osteofitos</td>
            </tr>
            <tr>
              <td><strong>Trauma</strong></td>
              <td>5-10%</td>
              <td>Fractura o subluxación vertebral</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Niveles Afectados y Manifestaciones Clínicas 🩺</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Nivel</th>
              <th>Déficit Motor</th>
              <th>Déficit Sensitivo</th>
              <th>Reflejo Afectado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>C5</strong></td>
              <td>Deltoides</td>
              <td>Hombro lateral</td>
              <td>Bicipital</td>
            </tr>
            <tr>
              <td><strong>C6</strong></td>
              <td>Bíceps</td>
              <td>Pulgar y antebrazo lateral</td>
              <td>Bicipital / braquiorradial</td>
            </tr>
            <tr>
              <td><strong>C7</strong></td>
              <td>Tríceps</td>
              <td>Dedo medio</td>
              <td>Tricipital</td>
            </tr>
            <tr>
              <td><strong>C8</strong></td>
              <td>Intrínsecos de la mano</td>
              <td>4°-5° dedos</td>
              <td>No específico</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Diagnóstico 🔍</p>
      <p className="fxh-subsubtitle">1. Examen Físico</p>
      <ul className="fxh-list">
        <li><strong>Prueba de Spurling</strong>: Sensibilidad 60%, especificidad 90%</li>
        <li><strong>Distracción cervical</strong>: Alivio del dolor con tracción</li>
        <li><strong>Examen neurológico</strong>: Fuerza, sensibilidad y reflejos por dermatoma</li>
      </ul>

      <p className="fxh-subsubtitle">2. Estudios de Imagen</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/examenes/rx">Radiografía</Link></td>
              <td>Espondilosis, alineación</td>
              <td>Primera línea</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Hernias discales, compresión neural</td>
              <td>Gold standard</td>
            </tr>
            <tr>
              <td>EMG/NCV</td>
              <td>Compresión radicular</td>
              <td>Confirmación nivel afectado</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>
      <ul className="fxh-list">
        <li>AINEs y manejo del dolor</li>
        <li>Terapia física y tracción cervical</li>
        <li>Ejercicios posturales</li>
        <li>Infiltraciones epidurales en casos refractarios</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>
      <ul className="fxh-list">
        <li><strong>ACDF</strong>: Éxito 85-90%</li>
        <li><strong>Foraminotomía posterior</strong></li>
        <li><strong>Artroplastia discal</strong></li>
      </ul>

      <p className="fxh-subtitle">Rehabilitación y Pronóstico 🏋️‍♂️</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Aspecto</th>
              <th>Expectativa</th>
              <th>Tiempo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alivio dolor</td>
              <td>75-90%</td>
              <td>4-6 semanas</td>
            </tr>
            <tr>
              <td>Recuperación motora</td>
              <td>Buena si precoz</td>
              <td>3-6 meses</td>
            </tr>
            <tr>
              <td>Reincorporación laboral</td>
              <td>90%</td>
              <td>2-4 semanas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Prevención 🛡️</p>
      <ul className="fxh-list">
        <li>Ergonomía postural</li>
        <li>Ejercicios cervicales</li>
        <li>Control tabaquismo y obesidad</li>
        <li>Prevención de traumas</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        La radiculopatía cervical tiene un manejo principalmente conservador con excelentes resultados. 
        La cirugía se reserva para casos progresivos o refractarios. 
        La identificación temprana del nivel afectado es clave para una estrategia terapéutica óptima.
      </p>
    </div>
  );
}

export default RadiculopatiaCervical;
