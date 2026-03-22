import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AntihistH1SegundaGen.css';

function AntihistaminicosH1SegundaGen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h1gen2-detail">
      <p className="h1gen2-title">Antihistamínicos H1 (2ª Generación)</p>

      <p className="h1gen2-subtitle">📌 Introducción</p>
      <p className="h1gen2-text">
        Los <strong>Antihistamínicos H1 de Segunda Generación</strong> son medicamentos selectivos que bloquean los receptores H1 de histamina, sin atravesar la barrera hematoencefálica de forma significativa, lo que disminuye notablemente su efecto sedante. Son ampliamente utilizados para tratar enfermedades alérgicas crónicas.
      </p>

      <p className="h1gen2-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="h1gen2-list">
        <li>Antagonismo selectivo de receptores H1 periféricos.</li>
        <li>Reducción de la respuesta alérgica sin efectos sedantes significativos.</li>
        <li>Larga duración de acción que permite administración diaria.</li>
      </ul>

      <p className="h1gen2-subtitle">📋 Indicaciones Principales</p>
      <ul className="h1gen2-list">
        <li>Rinitis alérgica estacional y perenne</li>
        <li>Urticaria crónica idiopática</li>
        <li>Conjuntivitis alérgica</li>
        <li>Tratamiento prolongado de síntomas alérgicos sin somnolencia</li>
      </ul>

      <p className="h1gen2-subtitle">💊 Ejemplos Comunes</p>
      <div className="h1gen2-table-wrapper">
        <table className="h1gen2-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Sedación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> <Link to="/farmacos/farmacos2/loratadina"> Loratadina  </Link>  </td>  
              <td>10 mg cada 24 h</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>Cetirizina</td>
              <td>10 mg cada 24 h</td>
              <td>Leve (en algunos pacientes)</td>
            </tr>
            <tr>
              <td>Fexofenadina</td>
              <td>120–180 mg cada 24 h</td>
              <td>Nula</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="h1gen2-subtitle">⚠️ Efectos Adversos</p>
      <ul className="h1gen2-list">
        <li>Dolor de cabeza</li>
        <li>Boca seca</li>
        <li>Somnolencia leve (especialmente con cetirizina)</li>
        <li>Mareos ocasionales</li>
        <li>Náuseas</li>
      </ul>

      <p className="h1gen2-subtitle">🔄 Contraindicaciones</p>
      <ul className="h1gen2-list">
        <li> 1) Hipersensibilidad al principio activo</li>
        <li> 2) Precaución en insuficiencia hepática o renal grave</li>
        <li> 3) Uso en embarazo solo si es estrictamente necesario</li>
      </ul>

      <p className="h1gen2-subtitle">📉 Interacciones Relevantes</p>
      <ul className="h1gen2-list">
        <li> 1) Con alcohol o depresores del SNC: puede potenciar somnolencia en algunos casos</li>
        <li> 2) Con inhibidores del CYP3A4 (p. ej. ketoconazol): puede aumentar niveles plasmáticos</li>
      </ul>

      <p className="h1gen2-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="h1gen2-list">
        <li>Preferidos sobre los de primera generación para uso prolongado</li>
        <li>Evitar en lactancia (algunos se excretan en leche materna)</li>
        <li>En pacientes sensibles a sedación, optar por fexofenadina</li>
        <li>Evaluar eficacia y tolerancia en tratamientos crónicos</li>
      </ul>
    </div>
  );
}

export default AntihistaminicosH1SegundaGen;
