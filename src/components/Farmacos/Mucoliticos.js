import React, { useEffect } from 'react';
import './Mucoliticos.css';

function Mucoliticos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mu-detail">
      <p className="mu-title">Mucolíticos</p>

      <p className="mu-subtitle">📌 Introducción</p>
      <p className="mu-text">
        Los <strong>Mucolíticos</strong> son fármacos utilizados para disminuir la viscosidad del moco en las vías respiratorias,
        facilitando su eliminación y mejorando la expectoración. Son empleados principalmente en enfermedades respiratorias con 
        producción excesiva de secreciones, como bronquitis crónica y fibrosis quística.
      </p>

      <p className="mu-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="mu-list">
        <li>Rompen los enlaces disulfuro en las mucoproteínas del moco, reduciendo su viscosidad.</li>
        <li>Favorecen la fluidificación del moco y facilitan su expulsión.</li>
        <li>Algunos tienen acción antioxidante y antiinflamatoria.</li>
      </ul>

      <p className="mu-subtitle">📋 Indicaciones Principales</p>
      <ul className="mu-list">
        <li>Bronquitis aguda y crónica con expectoración densa</li>
        <li>Fibrosis quística</li>
        <li>Bronquiectasias</li>
        <li>Neumonías con secreciones espesas</li>
        <li>Tos productiva con moco viscoso</li>
      </ul>

      <div className="mu-table-wrapper">
  <table className="mu-table">
    <thead>
      <tr>
        <th>Fármaco</th>
        <th>Dosis habitual</th>
        <th>Comentarios</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Acetilcisteína</td>
        <td>600 mg/día (oral)</td>
        <td>Antioxidante y mucolítico</td>
      </tr>
      <tr>
        <td>Carbocisteína</td>
        <td>750-1500 mg/día (oral)</td>
        <td>Modula la secreción mucosa</td>
      </tr>
      <tr>
        <td>Bromhexina</td>
        <td>8-16 mg cada 8 h (oral)</td>
        <td>Estimula la producción de moco menos viscoso</td>
      </tr>
    </tbody>
  </table>
</div>


      <p className="mu-subtitle">⚠️ Efectos Adversos</p>
      <ul className="mu-list">
        <li>Reacciones alérgicas (rash, prurito)</li>
        <li>Gastrointestinales: náuseas, vómitos, diarrea</li>
        <li>Broncoespasmo en asmáticos sensibles</li>
        <li>Mal sabor y olor en algunos preparados</li>
      </ul>

      <p className="mu-subtitle">🔄 Contraindicaciones</p>
      <ul className="mu-list">
        <li>Hipersensibilidad al fármaco</li>
        <li>Asma bronquial activa con broncoespasmo</li>
        <li>Úlcera gástrica activa (precaución con algunos mucolíticos)</li>
      </ul>

      <p className="mu-subtitle">📉 Interacciones Relevantes</p>
      <ul className="mu-list">
        <li>Puede potenciar el efecto de algunos antibióticos por mejorar su penetración</li>
        <li>No debe mezclarse con antitusígenos (supresores de la tos) en tos productiva</li>
      </ul>

      <p className="mu-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="mu-list">
        <li>Uso indicado para facilitar la expectoración en secreciones densas</li>
        <li>Evitar uso concomitante con antitusígenos</li>
        <li>Monitorizar efectos secundarios en pacientes asmáticos</li>
      </ul>
    </div>
  );
}

export default Mucoliticos;
