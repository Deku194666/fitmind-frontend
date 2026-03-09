import React, { useEffect } from 'react';
import NavBarAntiarrtimicos from './NavBarAntiarritmicos';
import { Link } from 'react-router-dom';
import './Antiarritmicos.css';

function Antiarritmicos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail56">
      <NavBarAntiarrtimicos />

      <p className="fxh-title">Fármacos Antiarritmicos</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Fármacos Antiarrítmicos</strong> son medicamentos utilizados para tratar y prevenir diferentes tipos de 
        <Link to="/ecnt/arritmias"> Arritmias </Link> cardíacas, restaurando el ritmo normal del corazón y mejorando la función cardíaca.
        Se clasifican en función de su mecanismo de acción según la clasificación de Vaughan-Williams.
      </p>

      <p className="fxh-subtitle">🔬 Clasificación de Antiarritmicos (Vaughan-Williams)</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Clase</th>
              <th>Ejemplos</th>
              <th>Mecanismo de acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Clase I (bloqueadores de canales de sodio)</td>
              <td>Flecainida, Procainamida</td>
              <td>Reducen la velocidad de conducción en las fibras miocárdicas</td>
            </tr>
            <tr>
              <td>Clase II (betabloqueadores)</td>
              <td>Metoprolol, Esmolol</td>
              <td>Disminuyen la actividad simpática sobre el corazón</td>
            </tr>
            <tr>
              <td>Clase III (bloqueadores de canales de potasio)</td>
              <td>Amiodarona, Sotalol</td>
              <td>Prolongan la repolarización y el potencial de acción</td>
            </tr>
            <tr>
              <td>Clase IV (bloqueadores de canales de calcio)</td>
              <td>Verapamilo, Diltiazem</td>
              <td>Disminuyen la conducción en el nodo AV</td>
            </tr>
            <tr>
              <td>Otros</td>
              <td>Adenosina, Digoxina</td>
              <td>Acción específica en el nodo AV o aumento del tono vagal</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="fxh-list">
        <li>Fibrilación auricular y aleteo auricular.</li>
        <li>Taquicardias supraventriculares.</li>
        <li>Taquicardias ventriculares.</li>
        <li>Prevención de arritmias post-infarto.</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="fxh-list">
        <li><strong>Amiodarona:</strong> Fibrosis pulmonar, alteraciones tiroideas, fotosensibilidad.</li>
        <li><strong>Betabloqueadores:</strong> Bradicardia, hipotensión, fatiga.</li>
        <li><strong>Digoxina:</strong> Intoxicación con náuseas, visión borrosa, arritmias.</li>
        <li><strong>Verapamilo/Diltiazem:</strong> Bloqueo AV, estreñimiento.</li>
      </ul>

      <p className="fxh-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="fxh-list">
        <li>Monitorear función tiroidea y pulmonar con amiodarona.</li>
        <li>Evitar digoxina en insuficiencia renal sin ajuste de dosis.</li>
        <li>Evaluar ECG antes de iniciar tratamiento antiarrítmico.</li>
        <li>Evitar combinaciones que prolonguen el QT.</li>
      </ul>

      <p className="fxh-subtitle">📦 Combinaciones Frecuentes</p>
      <ul className="fxh-list">
        <li>Betabloqueador + amiodarona (en arritmias refractarias).</li>
        <li>Digoxina + betabloqueador (en fibrilación auricular crónica).</li>
        <li>Verapamilo + digoxina con monitoreo cercano.</li>
      </ul>

      <p className="fxh-subtitle">📚 Conclusión</p>
      <p className="fxh-text">
        Los <strong>Antiarrítmicos</strong> son herramientas esenciales en el tratamiento de arritmias cardíacas.
        Su elección debe basarse en el tipo de arritmia, la función cardíaca del paciente y la presencia de comorbilidades,
        evaluando siempre la seguridad y el monitoreo necesario.
      </p>

    </div>
  );
}

export default Antiarritmicos;
