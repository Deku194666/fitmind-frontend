import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarBroncodilatadores from './NavBarBroncodilatadores';
import './Broncodilatadores.css';

function Broncodilatadores() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bd-detail">
      <NavBarBroncodilatadores />

      <p className="bd-title">Broncodilatadores</p>

      <p className="bd-subtitle">📌 Introducción</p>
      <p className="bd-text">
        Los <strong>Broncodilatadores</strong> son medicamentos que relajan el músculo liso de las vías respiratorias, facilitando el paso del aire y mejorando los síntomas en enfermedades respiratorias como asma y EPOC.
      </p>

      <p className="bd-subtitle">🔬 Clasificación de Broncodilatadores</p>
      <div className="bd-table-wrapper">
        <table className="bd-table">
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Ejemplos</th>
              <th>Mecanismo de acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/farmacos/saba">Agonistas β2 de acción corta (SABA)</Link></td>
              <td><Link to="/farmacos/farmacos2/salbutamol">Salbutamol</Link>, Terbutalina</td>
              <td>Relajan músculo liso bronquial rápidamente al activar receptores β2.</td>
            </tr>
            <tr>
              <td>Agonistas β2 de acción prolongada (LABA)</td>
              <td>Salmeterol, Formoterol</td>
              <td>Prolongan la broncodilatación por más de 12 horas al estimular β2.</td>
            </tr>
            <tr>
              <td>Anticolinérgicos (de acción corta y prolongada)</td>
              <td>Ipratropio (SAMA), Tiotropio (LAMA)</td>
              <td>Bloquean receptores muscarínicos M3 reduciendo broncoconstricción.</td>
            </tr>
            <tr>
              <td>Metilxantinas</td>
              <td>Teofilina, Aminofilina</td>
              <td>Inhiben fosfodiesterasa, aumentando AMP cíclico y relajación bronquial.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="bd-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="bd-list">
        <li>Asma bronquial (leve a grave)</li>
        <li>Enfermedad pulmonar obstructiva crónica (EPOC)</li>
        <li>Crisis asmática aguda (uso de SABA)</li>
        <li>Mantenimiento a largo plazo (uso de LABA y LAMA)</li>
      </ul>

      <p className="bd-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="bd-list">
        <li><strong><Link to="/farmacos/saba">SABA</Link>/LABA:</strong> Taquicardia, temblor, nerviosismo</li>
        <li><strong>Anticolinérgicos:</strong> Boca seca, retención urinaria</li>
        <li><strong>Metilxantinas:</strong> Náuseas, insomnio, arritmias (riesgo tóxico)</li>
      </ul>

      <p className="bd-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="bd-list">
        <li>Los <Link to="/farmacos/saba">SABA</Link> son fármacos de rescate, no deben usarse como monoterapia crónica</li>
        <li>LABA siempre deben combinarse con corticoides inhalados en asma</li>
        <li>Evitar metilxantinas en pacientes con riesgo de arritmias</li>
        <li>En <Link to="/ecnt/epoc">EPOC</Link>, los anticolinérgicos de acción prolongada son de primera línea</li>
      </ul>

      <p className="bd-subtitle">📦 Combinaciones Frecuentes</p>
      <ul className="bd-list">
        <li>LABA + corticoide inhalado (ej: formoterol + budesonida)</li>
        <li>LAMA + LABA (ej: tiotropio + olodaterol)</li>
        <li><Link to="/farmacos/saba">SABA</Link> + SAMA (ej: <Link to="/farmacos/farmacos2/salbutamol">Salbutamol</Link> + ipratropio en crisis)</li>
      </ul>

      <p className="bd-subtitle">📚 Conclusión</p>
      <p className="bd-text">
        Los <strong>Broncodilatadores</strong> son fundamentales en el manejo de enfermedades obstructivas respiratorias. Su elección debe basarse en el tipo de enfermedad, severidad y necesidad de control sintomático o mantenimiento.
      </p>
    </div>
  );
}

export default Broncodilatadores;
