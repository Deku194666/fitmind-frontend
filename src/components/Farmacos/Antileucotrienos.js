import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Antileucotrienos.css';

function Antileucotrienos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="al-detail">
      <p className="al-title">Antileucotrienos</p>

      <p className="al-subtitle">📌 Introducción</p>
      <p className="al-text">
        Los <strong>Antileucotrienos</strong> son fármacos que inhiben la acción o síntesis de los leucotrienos, mediadores inflamatorios implicados en enfermedades respiratorias como el <Link to="/ecnt/asma">Asma</Link>. Se utilizan como tratamiento complementario en pacientes con asma persistente leve a moderada, especialmente cuando no toleran o responden mal a otros tratamientos inhalados.
      </p>

      <p className="al-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="al-list">
        <li>Bloquean los receptores de leucotrienos (antagonistas del receptor CysLT1).</li>
        <li>Inhiben la broncoconstricción inducida por alérgenos o ejercicio.</li>
        <li>Reducen la inflamación, el edema y la secreción mucosa en vías respiratorias.</li>
      </ul>

      <p className="al-subtitle">📋 Indicaciones Principales</p>
      <ul className="al-list">
        <li>Asma persistente leve a moderada</li>
        <li>Asma inducida por ejercicio</li>
        <li>Rinitis alérgica</li>
        <li>Intolerancia a AINEs con síntomas respiratorios</li>
      </ul>

      <p className="al-subtitle">💊 Ejemplos Comunes</p>
      <div className="al-table-wrapper">
        <table className="al-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Vía de administración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Montelukast</td>
              <td>10 mg una vez al día</td>
              <td>Oral</td>
            </tr>
            <tr>
              <td>Zafirlukast</td>
              <td>20 mg cada 12 h</td>
              <td>Oral</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="al-subtitle">⚠️ Efectos Adversos</p>
      <ul className="al-list">
        <li>Cefalea</li>
        <li>Dolor abdominal o dispepsia</li>
        <li>Trastornos del sueño (insomnio, sueños vívidos)</li>
        <li>Alteraciones del comportamiento en niños (agitación, agresividad, depresión)</li>
        <li>Hepatotoxicidad (más frecuente con zafirlukast)</li>
        <li>Síndrome de Churg-Strauss (raro, asociado a retirada de corticosteroides)</li>
      </ul>

      <p className="al-subtitle">🔄 Contraindicaciones</p>
      <ul className="al-list">
        <li>Hipersensibilidad al fármaco</li>
        <li>Enfermedad hepática activa (especialmente con zafirlukast)</li>
      </ul>

      <p className="al-subtitle">📉 Interacciones Relevantes</p>
      <ul className="al-list">
        <li>Zafirlukast inhibe el CYP2C9: puede aumentar niveles de warfarina</li>
        <li>Fenobarbital y rifampicina disminuyen niveles de montelukast</li>
      </ul>

      <p className="al-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="al-list">
        <li>Indicado como alternativa o complemento a corticoides inhalados en asma leve</li>
        <li>Buena opción en pacientes con rinitis alérgica y asma concomitantes</li>
        <li>Administrar por la noche para mejor control nocturno del asma</li>
        <li>Supervisar signos de alteraciones del ánimo, especialmente en población pediátrica</li>
      </ul>
    </div>
  );
}

export default Antileucotrienos;
