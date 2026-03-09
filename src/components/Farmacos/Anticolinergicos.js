import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Anticolinergicos.css';

function Anticolinergicos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="antico-detail">

      <p className="antico-title">Anticolinérgicos (Antagonistas Muscarínicos)</p>

      <p className="antico-subtitle">📌 Introducción</p>
      <p className="antico-text">
        Los <strong>Anticolinérgicos</strong>, también conocidos como antagonistas muscarínicos, son fármacos broncodilatadores 
        utilizados principalmente en el manejo de <Link to="/ecnt/enfermedadpulmonarobstructivacronica">EPOC</Link> y, 
        en algunos casos, <Link to="/ecnt/asma">Asma</Link>. Bloquean los receptores muscarínicos del sistema parasimpático 
        en el músculo liso bronquial, reduciendo el tono vagal y favoreciendo la dilatación de las vías respiratorias.
      </p>

      <p className="antico-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="antico-list">
        <li>Bloquean los receptores muscarínicos (M1, M2, M3) en el músculo liso bronquial.</li>
        <li>Inhiben la acción de la acetilcolina endógena.</li>
        <li>Disminuyen el tono vagal broncoconstrictor.</li>
        <li>Favorecen la broncodilatación sostenida.</li>
      </ul>

      <p className="antico-subtitle">📋 Indicaciones Principales</p>
      <ul className="antico-list">
        <li><Link to="/ecnt/enfermedadpulmonarobstructivacronica">EPOC</Link> leve a severa (tratamiento de mantenimiento)</li>
        <li><Link to="/ecnt/asma">Asma </Link>persistente (en combinación con otros broncodilatadores)</li>
        <li>Exacerbaciones agudas de EPOC y asma</li>
        <li>Broncoespasmo inducido por irritantes</li>
      </ul>

      <p className="antico-subtitle">💊 Ejemplos Comunes</p>
      <div className="antico-table-wrapper">
        <table className="antico-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Duración de acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ipratropio (SAMA)</td>
              <td>20-40 mcg cada 6-8 h (inhalado)</td>
              <td>6-8 horas</td>
            </tr>
            <tr>
              <td>Tiotropio (LAMA)</td>
              <td>18 mcg cada 24 h (inhalado)</td>
              <td>≥ 24 horas</td>
            </tr>
            <tr>
              <td>Aclidinio (LAMA)</td>
              <td>400 mcg cada 12 h (inhalado)</td>
              <td>12 horas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="antico-subtitle">⚠️ Efectos Adversos</p>
      <ul className="antico-list">
        <li><strong>Sequedad bucal</strong></li>
        <li><strong>Tos o irritación faríngea</strong></li>
        <li><strong>Retención urinaria</strong> (especial precaución en varones con HBP)</li>
        <li><strong>Visión borrosa</strong> si hay contacto ocular accidental</li>
        <li><strong>Taquicardia</strong> o palpitaciones (raro)</li>
      </ul>

      <p className="antico-subtitle">🔄 Contraindicaciones</p>
      <ul className="antico-list">
        <li>Hipersensibilidad al fármaco o excipientes</li>
        <li>Glaucoma de ángulo cerrado (precaución)</li>
        <li>Hiperplasia prostática benigna no controlada</li>
      </ul>

      <p className="antico-subtitle">📉 Interacciones Relevantes</p>
      <ul className="antico-list">
        <li>Con otros anticolinérgicos: aumento de efectos adversos</li>
        <li>Con β2 agonistas: efecto broncodilatador sinérgico</li>
        <li>Con fármacos antimuscarínicos sistémicos: riesgo de retención urinaria</li>
      </ul>

      <p className="antico-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="antico-list">
        <li>Preferir LAMA en EPOC moderado-severo como tratamiento de base</li>
        <li>Combinar con LABA si los síntomas persisten</li>
        <li>Evitar contacto con los ojos (puede causar midriasis y visión borrosa)</li>
        <li>Revisar antecedentes de glaucoma o retención urinaria antes de indicar</li>
      </ul>

    </div>
  );
}

export default Anticolinergicos;
