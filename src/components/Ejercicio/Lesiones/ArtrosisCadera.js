import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ArtrosisCadera.css";

function ArtrosisCadera() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="fxa-detail">

      <h1 className="fxa-title">Artrosis de Cadera (Coxartrosis)</h1>

      <h2 className="fxa-subtitle">📌 Introducción</h2>
      <p className="fxa-text">
        La artrosis de cadera es una <strong>degeneración progresiva del cartílago articular de la articulación coxofemoral</strong>, 
        afectando al <strong>8-10% de adultos mayores de 45 años</strong>. Es una de las principales causas de dolor inguinal crónico 
        y discapacidad funcional, con importante impacto en la marcha y actividades básicas.
      </p>

      <h2 className="fxa-subtitle">🦴 Anatomía Clave</h2>
      <ul className="fxa-list">
        <li><strong>Articulación coxofemoral</strong>: Enartrosis (bola-cavidad) con amplio rango de movimiento</li>
        <li><strong>Cartílago articular</strong>: 3-4mm de espesor en zona de carga (semiesfera superior)</li>
        <li><strong>Vascularización</strong>: Arterias circunflejas femorales medial/lateral</li>
        <li><strong>Relaciones anatómicas</strong>: Nervio ciático, músculos pelvitrocantéreos</li>
      </ul>

      <h2 className="fxa-subtitle">📊 Clasificación de la Coxartrosis (Tönnis)</h2>
      <div className="fxa-table-wrapper">
        <table className="fxa-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Hallazgos Radiológicos</th>
              <th>Manifestaciones Clínicas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Grado 1</strong></td>
              <td>Leve pinzamiento, osteofitos incipientes</td>
              <td>Dolor tras actividad prolongada</td>
            </tr>
            <tr>
              <td><strong>Grado 2</strong></td>
              <td>Pinzamiento moderado, quistes subcondrales, esclerosis</td>
              <td>Dolor inguinal al caminar, limitación de rotación interna</td>
            </tr>
            <tr>
              <td><strong>Grado 3</strong></td>
              <td>Pinzamiento severo, deformación cabeza femoral, osteofitos grandes</td>
              <td>Dolor en reposo, cojera marcada, acortamiento de extremidad</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxa-subtitle">🤕 Factores de Riesgo</h2>
      <ul className="fxa-list">
        <li><strong>Edad</strong>: Prevalencia mayor a 35% en mayores de 80 años</li>
        <li><strong>Malformaciones</strong>: Displasia de cadera, enfermedad de Perthes</li>
        <li><strong>Sobrecarga mecánica</strong>: Obesidad (IMC mayor a 30), actividades de impacto</li>
        <li><strong>Traumatismos</strong>: Fracturas acetabulares o cabeza femoral</li>
        <li><strong>Ocupacional</strong>: Trabajos con carga de pesos repetitiva</li>
      </ul>

      <h2 className="fxa-subtitle">🩺 Diagnóstico</h2>
      <h3 className="fxa-subsubtitle">1. Manifestaciones Clínicas</h3>
      <ul className="fxa-list">
        <li><strong>Síndrome articular</strong>
          <ul className="fxa-sublist">
            <li>Dolor inguinal profundo que puede irradiar a rodilla</li>
            <li>Rigidez matutina menor a 30 minutos</li>
            <li>Signo del "calzado": dificultad para calzarse</li>
          </ul>
        </li>
        <li><strong>Exploración física</strong>
          <ul className="fxa-sublist">
            <li>Limitación de rotación interna (mayor a 90% casos)</li>
            <li>Disminución de rango de flexión (mayor a 120° normal)</li>
            <li>Test de Trendelenburg positivo</li>
          </ul>
        </li>
        <li><strong>Marcha</strong>
          <ul className="fxa-sublist">
            <li>Antálgica (acortamiento fase de apoyo)</li>
            <li>Marcha en Trendelenburg</li>
          </ul>
        </li>
      </ul>

      <h3 className="fxa-subsubtitle">2. Estudios de Imagen</h3>
      <div className="fxa-table-wrapper">
        <table className="fxa-table">
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
              <td>Pinzamiento articular superior, osteofitos, quistes subcondrales</td>
              <td>Proyección AP pelvis y axial de cadera</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Edema óseo, cartílago residual, necrosis avascular</td>
              <td>Diagnóstico temprano</td>
            </tr>
            <tr>
              <td>TAC 3D</td>
              <td>Análisis deformidad, planificación protésica</td>
              <td>Evaluar defectos óseos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxa-subtitle">🏥 Tratamiento Conservador</h2>
      <h3 className="fxa-subsubtitle">Indicado en:</h3>
      <ul className="fxa-list">
        <li>Coxartrosis grado I-II (Tönnis)</li>
        <li>Pacientes no candidatos a cirugía</li>
        <li>Primera línea en todos los casos</li>
      </ul>

      <h3 className="fxa-subsubtitle">Protocolo:</h3>
      <ul className="fxa-list">
        <li><strong>Farmacoterapia</strong>
          <ul className="fxa-sublist">
            <li>AINEs (naproxeno, celecoxib) periodos cortos</li>
            <li>Paracetamol primera línea</li>
            <li>SYSADOA (glucosamina/condroitín)</li>
          </ul>
        </li>
        <li><strong>Terapia física</strong>
          <ul className="fxa-sublist">
            <li>Fortalecimiento glúteo medio/mínimo</li>
            <li>Estiramientos rotadores internos</li>
            <li>Hidroterapia</li>
          </ul>
        </li>
        <li><strong>Medidas generales</strong>
          <ul className="fxa-sublist">
            <li>Reducción de peso (IMC menos de 25 ideal)</li>
            <li>Bastón contralateral (reduce carga 30-40%)</li>
          </ul>
        </li>
      </ul>

    </div>
  );
}

export default ArtrosisCadera;
