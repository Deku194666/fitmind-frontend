import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarAntiHistaminicos from './NavBarAntiHistaminicos';
import './Antihistaminicos.css';

function Antihistaminicos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="antihist-detail">
      <NavBarAntiHistaminicos />

      <p className="antihist-title">Antihistamínicos</p>

      <p className="antihist-subtitle">📌 Introducción</p>
      <p className="antihist-text">
        Los <strong>Antihistamínicos</strong> son medicamentos que bloquean los efectos de la histamina, una sustancia química involucrada en las reacciones alérgicas. Son ampliamente utilizados en el manejo de afecciones respiratorias alérgicas como la rinitis alérgica y el asma con componente atópico.
      </p>

      <p className="antihist-subtitle">🔬 Clasificación de Antihistamínicos</p>
      <div className="antihist-table-wrapper">
        <table className="antihist-table">
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Ejemplos</th>
              <th>Mecanismo de acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Antihistamínicos H1 (1ra generación)</td>
              <td>Clorfenamina, Difenhidramina</td>
              <td>Bloquean los receptores H1 de histamina en SNC y periferia</td>
            </tr>
            <tr>
              <td>Antihistamínicos H1 (2da generación)</td>
              <td>Loratadina, Cetirizina, Fexofenadina</td>
              <td>Bloquean los receptores H1 con menor penetración en el SNC</td>
            </tr>
            <tr>
              <td>Antihistamínicos H2</td>
              <td>Ranitidina (uso gástrico, actualmente limitado)</td>
              <td>Bloquean receptores H2 en mucosa gástrica (no respiratorio)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="antihist-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="antihist-list">
        <li>Rinitis alérgica estacional y perenne.</li>
        <li>Conjuntivitis alérgica.</li>
        <li>Urticaria y prurito asociado a alergias.</li>
        <li>Asma con componente alérgico (como terapia adyuvante).</li>
      </ul>

      <p className="antihist-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="antihist-list">
        <li><strong>1ra generación:</strong> Somnolencia, sequedad de boca, visión borrosa.</li>
        <li><strong>2da generación:</strong> Generalmente bien tolerados, ocasionalmente cefalea o fatiga.</li>
        <li>Interacciones con alcohol u otros depresores del SNC (1ra generación).</li>
      </ul>

      <p className="antihist-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="antihist-list">
        <li>Preferir antihistamínicos de 2da generación para uso prolongado por su menor sedación.</li>
        <li>En pacientes pediátricos o adultos mayores, utilizar con precaución los de 1ra generación.</li>
        <li>La administración nocturna puede reducir molestias diurnas si hay somnolencia.</li>
      </ul>

      <p className="antihist-subtitle">📦 Combinaciones Frecuentes</p>
      <ul className="antihist-list">
        <li>Antihistamínicos + corticoides intranasales en rinitis alérgica persistente.</li>
        <li>Antihistamínicos + broncodilatadores en asma alérgica leve.</li>
        <li>Antihistamínicos + antileucotrienos como terapia adyuvante.</li>
      </ul>

      <p className="antihist-subtitle">📚 Conclusión</p>
      <p className="antihist-text">
        Los <strong>Antihistamínicos</strong> son herramientas fundamentales en el manejo de alergias respiratorias. Su selección debe basarse en el perfil del paciente y la duración del tratamiento, buscando siempre minimizar efectos adversos sin comprometer su eficacia.
      </p>
    </div>
  );
}

export default Antihistaminicos;
