import React, { useEffect } from 'react';
import './Antiemeticos.css';
import { Link } from 'react-router-dom';


function Antiemeticos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ae-detail">
      <p className="ae-title">Antieméticos</p>

      <p className="ae-subtitle">📌 Introducción</p>
      <p className="ae-text">
        Los <strong>Antieméticos</strong> son fármacos utilizados para prevenir o tratar las náuseas y los vómitos, síntomas frecuentes en múltiples condiciones como enfermedades gastrointestinales, tratamientos oncológicos, cirugía o mareos por movimiento.
      </p>

      <p className="ae-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="ae-list">
        <li>Actúan sobre diferentes receptores del sistema nervioso central y periférico involucrados en el reflejo del vómito: dopaminérgicos (D2), serotoninérgicos (5-HT3), histaminérgicos (H1), muscarínicos (M1) y neuroquinina-1 (NK1).</li>
      </ul>

      <p className="ae-subtitle">📋 Indicaciones Principales</p>
      <ul className="ae-list">
        <li>Náuseas y vómitos de origen gastrointestinal</li>
        <li>Cinetosis (mareo por movimiento)</li>
        <li>Postoperatorio</li>
        <li>Quimioterapia y radioterapia</li>
        <li>Embarazo (uso restringido a ciertos fármacos)</li>
      </ul>

      <p className="ae-subtitle">💊 Ejemplos Comunes</p>
      <div className="ae-table-wrapper">
        <table className="ae-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Grupo / Receptor</th>
              <th>Dosis habitual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>   <Link to="/farmacos/farmacos2/metoclopramida">  Metoclopramida   </Link>   </td> 
              <td>Antagonista D2</td>
              <td>10 mg cada 8 h</td>
            </tr>
            <tr>
              <td>  <Link to="/farmacos/farmacos2/ondansetron">  Ondansetrón  </Link>  </td> 
              <td>Antagonista 5-HT3</td>
              <td>4-8 mg cada 8-12 h</td>
            </tr>
            <tr>
              <td>Domperidona</td>
              <td>Antagonista D2 periférico</td>
              <td>10-20 mg cada 8 h</td>
            </tr>
            <tr>
              <td>Dimenhidrinato</td>
              <td>Antihistamínico H1</td>
              <td>50-100 mg cada 4-6 h</td>
            </tr>
            <tr>
              <td>Escopolamina</td>
              <td>Antimuscarínico M1</td>
              <td>Parche 1 cada 72 h</td>
            </tr>
            <tr>
              <td>Aprepitant</td>
              <td>Antagonista NK1</td>
              <td>125 mg día 1, 80 mg días 2-3</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="ae-subtitle">⚠️ Efectos Adversos</p>
      <ul className="ae-list">
        <li>Somnolencia, mareo (antihistamínicos, escopolamina)</li>
        <li>Distonías, parkinsonismo (metoclopramida)</li>
        <li>Prolongación del QT (ondansetrón)</li>
        <li>Sequedad bucal, visión borrosa (escopolamina)</li>
      </ul>

      <p className="ae-subtitle">🔄 Contraindicaciones</p>
      <ul className="ae-list">
        <li><Link to="/farmacos/farmacos2/metoclopramida">  Metoclopramida</Link>: enfermedad de Parkinson, epilepsia</li>
        <li><Link to="/farmacos/farmacos2/ondansetron">  Ondansetrón</Link>: prolongación del QT</li>
        <li>Escopolamina: glaucoma, obstrucción urinaria</li>
      </ul>

      <p className="ae-subtitle">📉 Interacciones Relevantes</p>
      <ul className="ae-list">
        <li><Link to="/farmacos/farmacos2/ondansetron">  Ondansetrón  </Link> + otros prolongadores del QT → riesgo de torsades de pointes</li>
        <li><Link to="/farmacos/farmacos2/metoclopramida">  Metoclopramida</Link> con antipsicóticos → aumento de efectos extrapiramidales</li>
        <li>Aprepitant puede alterar metabolismo de warfarina y anticonceptivos</li>
      </ul>

      <p className="ae-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="ae-list">
        <li> 1) Elegir el antiemético según la causa (quimioterapia, vértigo, postoperatorio, etc.)</li>
        <li> 2) Evitar uso crónico de metoclopramida por riesgo de disquinesia tardía</li>
        <li> 3) Monitorizar electrocardiograma si se usan fármacos que prolongan el QT</li>
        <li> 4) Evaluar riesgo-beneficio en embarazo y pediatría</li>
      </ul>
    </div>
  );
}

export default Antiemeticos;
