import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarAntiinflamatoriosRespi from './NavBarAntiinflamatoriosRespi';
import './AntiinflamatoriosRespiratorio.css';

function AntiinflamatoriosRespiratorio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="antiinflam-detail">
      <NavBarAntiinflamatoriosRespi/>

      <p className="antiinflam-title">Antiinflamatorios Respiratorios</p>

      <p className="antiinflam-subtitle">📌 Introducción</p>
      <p className="antiinflam-text">
        Los <strong>Antiinflamatorios Respiratorios</strong> son medicamentos que reducen la inflamación de las vías respiratorias, 
        fundamentales en el tratamiento de enfermedades como el asma y la EPOC. Ayudan a prevenir exacerbaciones y mejoran el control 
        de los síntomas a largo plazo.
      </p>

      <p className="antiinflam-subtitle">🔬 Clasificación de Antiinflamatorios Respiratorios</p>
      <div className="antiinflam-table-wrapper">
        <table className="antiinflam-table">
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Ejemplos</th>
              <th>Mecanismo de acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Corticoides inhalados (ICS)</td>
              <td>Budesonida, Fluticasona</td>
              <td>Inhiben la producción de mediadores inflamatorios en vías aéreas.</td>
            </tr>
            <tr>
              <td>Corticoides sistémicos</td>
              <td>Prednisona, Metilprednisolona</td>
              <td>Efecto antiinflamatorio generalizado; usados en crisis o exacerbaciones.</td>
            </tr>
            <tr>
              <td>Antileucotrienos</td>
              <td>Montelukast</td>
              <td>Bloquean receptores de leucotrienos, reduciendo inflamación y broncoconstricción.</td>
            </tr>
            <tr>
              <td>Biológicos</td>
              <td>Omalizumab, Mepolizumab</td>
              <td>Anticuerpos monoclonales que inhiben mediadores específicos de la inflamación (IgE, IL-5).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="antiinflam-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="antiinflam-list">
        <li>Asma persistente (leve, moderada o grave).</li>
        <li>EPOC con exacerbaciones frecuentes.</li>
        <li>Control a largo plazo del asma y prevención de crisis.</li>
        <li>Tratamiento de exacerbaciones agudas (uso sistémico).</li>
      </ul>

      <p className="antiinflam-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="antiinflam-list">
        <li><strong>ICS:</strong> Disfonía, candidiasis oral, tos.</li>
        <li><strong>Sistémicos:</strong> Hiperglucemia, hipertensión, osteoporosis (uso prolongado).</li>
        <li><strong>Montelukast:</strong> Cefalea, trastornos del sueño, raramente cambios de comportamiento.</li>
        <li><strong>Biológicos:</strong> Reacciones en el sitio de inyección, riesgo de infecciones.</li>
      </ul>

      <p className="antiinflam-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="antiinflam-list">
        <li>Los ICS son la base del tratamiento del asma persistente.</li>
        <li>Se deben usar a la dosis mínima efectiva para evitar efectos adversos.</li>
        <li>Los corticoides sistémicos están reservados para crisis o asma grave no controlada.</li>
        <li>Los biológicos están indicados en asma grave eosinofílica o alérgica no controlada.</li>
      </ul>

      <p className="antiinflam-subtitle">📦 Combinaciones Frecuentes</p>
      <ul className="antiinflam-list">
        <li>ICS + LABA (ej: budesonida + formoterol).</li>
        <li>Montelukast + ICS en pacientes con rinitis alérgica y asma.</li>
        <li>Biológicos + ICS/LABA en asma grave.</li>
      </ul>

      <p className="antiinflam-subtitle">📚 Conclusión</p>
      <p className="antiinflam-text">
        Los <strong>Antiinflamatorios Respiratorios</strong>  son esenciales para el control de enfermedades respiratorias crónicas. Su uso adecuado mejora la calidad de vida, previene exacerbaciones y reduce la necesidad de hospitalización.
      </p>
    </div>
  );
}

export default AntiinflamatoriosRespiratorio;
