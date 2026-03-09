import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ArtrosisMunMano.css";

function ArtrosisMuñMano() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="fxa-detail">

      <h1 className="fxa-title">Artrosis de Muñeca y Mano (Rizartrosis, Osteoartritis Interfalángica)</h1>

      <h2 className="fxa-subtitle">📌 Introducción</h2>
      <p className="fxa-text">
        La artrosis de muñeca y mano es una <strong>degeneración articular focal</strong> que afecta principalmente a articulaciones trapeciometacarpiana (rizartrosis) e interfalángicas (nódulos de Heberden/Bouchard). 
        Afecta al <strong>15-25% de mayores de 55 años</strong>, con predominio femenino (3:1) y gran impacto en la función de pinza y prensión.
      </p>

      <h2 className="fxa-subtitle">🦴 Anatomía Clave</h2>
      <ul className="fxa-list">
        <li><strong>Articulación trapeciometacarpiana (TMC)</strong>: Superficie en silla de montar (mayor movilidad pero vulnerable)</li>
        <li><strong>Articulaciones interfalángicas</strong>: Distales (DIP) y proximales (PIP)</li>
        <li><strong>Ligamentos clave</strong>: Ligamento anterior oblicuo (volar) en TMC</li>
        <li><strong>Relaciones anatómicas</strong>: Nervio radial (rama sensitiva), tendones extensores/flexores</li>
      </ul>

      <h2 className="fxa-subtitle">📊 Clasificación de la Artrosis de Mano</h2>
      <div className="fxa-table-wrapper">
        <table className="fxa-table">
          <thead>
            <tr>
              <th>Localización</th>
              <th>Hallazgos Radiológicos</th>
              <th>Manifestaciones Clínicas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Rizartrosis (TMC)</strong></td>
              <td>Pinzamiento articular, osteofitos, subluxación dorsal</td>
              <td>Dolor en base del pulgar, pérdida de pinza</td>
            </tr>
            <tr>
              <td><strong>Interfalángicas Distales (DIP)</strong></td>
              <td>Nódulos de Heberden, deformación en "cuello de cisne"</td>
              <td>Deformidad estética, dolor ocasional</td>
            </tr>
            <tr>
              <td><strong>Interfalángicas Proximales (PIP)</strong></td>
              <td>Nódulos de Bouchard, osteofitos volares</td>
              <td>Limitación de flexión, dolor en prensión</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxa-subtitle">🤕 Factores de Riesgo</h2>
      <ul className="fxa-list">
        <li><strong>Género</strong>: Mujeres postmenopáusicas</li>
        <li><strong>Ocupacional</strong>: Trabajos manuales repetitivos</li>
        <li><strong>Hipermovilidad</strong>: Ligamentos laxos</li>
        <li><strong>Traumatismos</strong>: Fracturas de escafoides o radio mal consolidadas</li>
        <li><strong>Enfermedades</strong>: Artritis reumatoide, condrocalcinosis</li>
      </ul>

      <h2 className="fxa-subtitle">🩺 Diagnóstico</h2>
      <h3 className="fxa-subsubtitle">1. Manifestaciones Clínicas</h3>
      <ul className="fxa-list">
        <li><strong>Rizartrosis</strong>
          <ul className="fxa-sublist">
            <li>Dolor en base del pulgar al abrir frascos o girar llaves</li>
            <li>Signo de la "mesa" positivo</li>
            <li>Crepitación en movimientos de circumducción</li>
          </ul>
        </li>
        <li><strong>Interfalángicas</strong>
          <ul className="fxa-sublist">
            <li>Nódulos firmes (Heberden/Bouchard)</li>
            <li>Desviación radial/ulnar de falanges</li>
            <li>Dolor en actividades de pinza fina</li>
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
              <td>Pinzamiento articular, osteofitos, subluxación (Eaton-Littler)</td>
              <td>Proyección de Robert, lateral en hiperpronación</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Estado ligamentos, edema óseo temprano</td>
              <td>Evaluar inestabilidad</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Sinovitis asociada, derrame articular</td>
              <td>Guiar infiltraciones</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxa-subtitle">🏥 Tratamiento Conservador</h2>
      <h3 className="fxa-subsubtitle">Indicado en:</h3>
      <ul className="fxa-list">
        <li>Artrosis grado I-II (Eaton-Littler)</li>
        <li>Pacientes con contraindicación quirúrgica</li>
        <li>Primera línea en todos los casos</li>
      </ul>

      <h3 className="fxa-subsubtitle">Protocolo:</h3>
      <ul className="fxa-list">
        <li><strong>Farmacoterapia</strong>
          <ul className="fxa-sublist">
            <li>AINEs tópicos (gel de diclofenaco)</li>
            <li>Analgésicos (paracetamol)</li>
            <li>Infiltraciones intraarticulares (TMC: corticoides + anestésico)</li>
          </ul>
        </li>
        <li><strong>Órtesis</strong>
          <ul className="fxa-sublist">
            <li>Férula de reposo para TMC</li>
            <li>Anillos de plata para DIP</li>
          </ul>
        </li>
        <li><strong>Terapia ocupacional</strong>
          <ul className="fxa-sublist">
            <li>Adaptación de utensilios</li>
            <li>Ejercicios de fortalecimiento intrínseco</li>
          </ul>
        </li>
      </ul>

    </div>
  );
}

export default ArtrosisMuñMano;
