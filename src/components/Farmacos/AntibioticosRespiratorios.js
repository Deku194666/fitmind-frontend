import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarAntibioticosRespiratorios from './NavBarAntibioticosRespiratorios';
import './AntibioticosRespiratorios.css'; 

function AntibioticosRespiratorios() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ar-detail">
      <NavBarAntibioticosRespiratorios />

      <p className="ar-title">Antibióticos en Patologías Respiratorias</p>

      <p className="ar-subtitle">📌 Introducción</p>
      <p className="ar-text">
        En las infecciones del tracto respiratorio, los <strong>Antibióticos Respiratorios</strong> se utilizan cuando existe una etiología bacteriana confirmada o altamente sospechosa. La elección depende del sitio de infección, comorbilidades, resistencia local y características del paciente.
      </p>

      <p className="ar-subtitle">🔬 Clasificación y Ejemplos</p>
      <div className="ar-table-wrapper">
        <table className="ar-table">
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Ejemplos</th>
              <th>Indicaciones comunes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Penicilinas + inhibidor de β-lactamasas</td>
              <td><Link to="/farmacos/farmacos2/amoxicilina">Amoxicilina</Link> / ácido clavulánico</td>
              <td>Sinusitis, otitis media, bronquitis aguda, neumonía leve a moderada</td>
            </tr>
            <tr>
              <td>Macrólidos</td>
              <td>Azitromicina, Claritromicina</td>
              <td>Neumonía atípica, bronquitis en alérgicos a penicilina</td>
            </tr>
            <tr>
              <td>Cefalosporinas de 2° y 3° generación</td>
              <td>Cefuroxima, Ceftriaxona</td>
              <td>Neumonías comunitarias o nosocomiales, sinusitis severa</td>
            </tr>
            <tr>
              <td>Fluoroquinolonas respiratorias</td>
              <td>Levofloxacino, Moxifloxacino</td>
              <td>Neumonía complicada, exacerbación de EPOC, resistencia a otros fármacos</td>
            </tr>
            <tr>
              <td>Tetraciclinas</td>
              <td>Doxiciclina</td>
              <td>Neumonía atípica, bronquitis en pacientes con alergia a penicilina</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="ar-subtitle">💡 Indicaciones Terapéuticas Comunes</p>
      <ul className="ar-list">
        <li>Neumonía adquirida en la comunidad (NAC).</li>
        <li>Bronquitis aguda bacteriana o exacerbaciones de EPOC.</li>
        <li>Sinusitis bacteriana aguda.</li>
        <li>Otitis media aguda en pediatría.</li>
        <li>Infecciones nosocomiales en pacientes hospitalizados.</li>
      </ul>

      <p className="ar-subtitle">⚠️ Efectos Adversos Frecuentes</p>
      <ul className="ar-list">
        <li><strong>Amoxicilina/clavulánico:</strong> Diarrea, exantemas, náuseas.</li>
        <li><strong>Macrólidos:</strong> Prolongación QT, malestar gastrointestinal.</li>
        <li><strong>Cefalosporinas:</strong> Alergias cruzadas, alteraciones digestivas.</li>
        <li><strong>Fluoroquinolonas:</strong> Tendinopatías, prolongación QT, fototoxicidad.</li>
        <li><strong>Doxiciclina:</strong> Fotosensibilidad, molestias digestivas, esofagitis.</li>
      </ul>

      <p className="ar-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="ar-list">
        <li>Evitar el uso innecesario para prevenir resistencia antimicrobiana.</li>
        <li>Considerar comorbilidades (insuficiencia renal, hepática) en la elección.</li>
        <li>Valorar cultivo y antibiograma en infecciones recurrentes o severas.</li>
        <li>Revisar antecedentes de alergias a betalactámicos y otros grupos.</li>
      </ul>

      <p className="ar-subtitle">📦 Combinaciones Habituales</p>
      <ul className="ar-list">
        <li>Amoxicilina/clavulánico + macrólido en neumonías mixtas.</li>
        <li>Ceftriaxona + azitromicina en hospitalizados con NAC severa.</li>
        <li>Levofloxacino solo en pacientes con múltiples alergias o resistencia previa.</li>
      </ul>

      <p className="ar-subtitle">📚 Conclusión</p>
      <p className="ar-text">
        Los <strong>Antibióticos Respiratorios</strong> deben utilizarse de forma juiciosa, según evidencia clínica y microbiológica. Una prescripción racional permite un tratamiento eficaz y reduce el riesgo de resistencia antimicrobiana.
      </p>
    </div>
  );
}

export default AntibioticosRespiratorios;
