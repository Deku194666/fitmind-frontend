import React, { useEffect } from 'react';
import './Expectorantes.css'; 

function Expectorantes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ex-detail">
      <p className="ex-title">Expectorantes</p>

      <p className="ex-subtitle">📌 Introducción</p>
      <p className="ex-text">
        Los <strong>Expectorantes</strong> son fármacos que aumentan el volumen y la fluidez del moco en las vías respiratorias, facilitando su expulsión mediante la tos. Se emplean en enfermedades respiratorias con producción de secreciones abundantes y viscosas, ayudando a limpiar las vías aéreas.
      </p>

      <p className="ex-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="ex-list">
        <li>Estimulan las glándulas secretoras de las vías respiratorias para aumentar la producción de moco más fluido.</li>
        <li>Incrementan el volumen de secreciones, facilitando la expulsión por tos.</li>
        <li>Mejoran la eliminación del moco y disminuyen la obstrucción bronquial.</li>
      </ul>

      <p className="ex-subtitle">📋 Indicaciones Principales</p>
      <ul className="ex-list">
        <li>Tos productiva con moco espeso y difícil de expulsar</li>
        <li>Bronquitis aguda y crónica</li>
        <li>Bronquiectasias</li>
        <li>Neumonías con producción excesiva de secreciones</li>
      </ul>

      <p className="ex-subtitle">💊 Ejemplos Comunes</p>
      <div className="ex-table-wrapper">
        <table className="ex-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Comentarios</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Guaifenesina</td>
              <td>200-400 mg cada 4-6 horas</td>
              <td>Estimula secreción bronquial</td>
            </tr>
            <tr>
              <td>Ammonium chloride (Cloruro de amonio)</td>
              <td>500 mg cada 8 horas</td>
              <td>Uso menos frecuente, acción irritante</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="ex-subtitle">⚠️ Efectos Adversos</p>
      <ul className="ex-list">
        <li>Molestias gastrointestinales: náuseas, vómitos</li>
        <li>Reacciones alérgicas poco frecuentes</li>
        <li>Riesgo de irritación gástrica en pacientes sensibles</li>
      </ul>

      <p className="ex-subtitle">🔄 Contraindicaciones</p>
      <ul className="ex-list">
        <li>Hipersensibilidad al fármaco</li>
        <li>Úlcera gástrica activa</li>
        <li>Niños menores de 2 años (según fármaco)</li>
      </ul>

      <p className="ex-subtitle">📉 Interacciones Relevantes</p>
      <ul className="ex-list">
        <li>Precaución con otros fármacos irritantes gástricos</li>
      </ul>

      <p className="ex-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="ex-list">
        <li>Utilizar junto con hidratación adecuada para mejorar la fluidez del moco</li>
        <li>Evitar combinación con antitusígenos en tos productiva</li>
        <li>Consultar con médico en caso de tos persistente o con sangre</li>
      </ul>
    </div>
  );
}

export default Expectorantes;
