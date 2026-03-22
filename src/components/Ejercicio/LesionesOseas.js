import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarLesOseas from './NavBarLesOseas';
import NavBarLesOseas2 from './NavBarLesOseas2';
import './LesionesOseas.css';

function LesionesOseas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lesiones-container5">
      <NavBarLesOseas />
      <NavBarLesOseas2 />

      <p className="title-main">Lesiones Óseas: Fracturas</p>

      <p className="title-section4">📌 Introducción</p>
      <p className="text-body">
        Las fracturas óseas afectan a <strong>1 de cada 2 personas</strong> a lo largo de su vida y representan
        una causa importante de discapacidad temporal. Un manejo adecuado previene pseudoartrosis y deformidades.
      </p>

      <p className="title-subsection4">📌 Fracturas Comunes</p>
      <ul className="text-body">
        <li><strong>Radio distal:</strong> 18% de todas las fracturas</li>
        <li><strong>Clavícula:</strong> Común en niños y deportistas</li>
        <li><strong>Cadera:</strong> Alta incidencia en mayores de 65 años</li>
        <li><strong>Tibia:</strong> Frecuente en traumatismos de alta energía</li>
        <li><strong>Húmero proximal:</strong> Asociada a osteoporosis</li>
      </ul>

      <p className="title-subsection4">📌 Clasificación de Fracturas</p>

      <p className="text-body"><strong>Por integridad de la piel:</strong></p>
      <ul className="text-body">
        <li>Cerradas</li>
        <li>Abiertas (Gustilo-Anderson)</li>
      </ul>

      <p className="text-body"><strong>Por patrón:</strong></p>
      <ul className="text-body">
        <li>Transversas</li>
        <li>Oblicuas</li>
        <li>Espiroideas</li>
        <li>Conminutas</li>
        <li>En tallo verde</li>
      </ul>

      <p className="text-body"><strong>Por desplazamiento:</strong></p>
      <ul className="text-body">
        <li>No desplazadas</li>
        <li>Desplazadas</li>
        <li>Impactadas</li>
      </ul>

      <p className="title-section4">📌 Diagnóstico por Imagen</p>
      <table className="styled-table4">
        <thead>
          <tr>
            <th>Modalidad</th>
            <th>Aplicación</th>
            <th>Hallazgos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Link to="/examenes/radiografia">Radiografía</Link></td>
            <td>Diagnóstico inicial</td>
            <td>Línea de fractura</td>
          </tr>
          <tr>
            <td><Link to="/examenes/tc">Tomografía</Link></td>
            <td>Fracturas complejas</td>
            <td>Evaluación 3D</td>
          </tr>
          <tr>
            <td><Link to="/examenes/rnm">Resonancia</Link></td>
            <td>Fracturas ocultas</td>
            <td>Edema óseo</td>
          </tr>
        </tbody>
      </table>

      <p className="title-section4">📌 Manejo por Tipo de Fractura</p>
      <table className="styled-table4">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Tratamiento</th>
            <th>Consolidación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>No desplazadas</td>
            <td>Inmovilización</td>
            <td>4–8 semanas</td>
          </tr>
          <tr>
            <td>Desplazadas</td>
            <td>Reducción + fijación</td>
            <td>8–12 semanas</td>
          </tr>
          <tr>
            <td>Abiertas</td>
            <td>Cirugía + antibióticos</td>
            <td>12–16 semanas</td>
          </tr>
        </tbody>
      </table>

      <p className="title-section4">⚠️ Complicaciones</p>

      <ul className="text-body">
        <li>Síndrome compartimental</li>
        <li>Lesiones vasculares</li>
        <li>Pseudoartrosis</li>
        <li>Malunión</li>
        <li>Artrosis postraumática</li>
      </ul>

      <p className="title-section4">🛡️ Prevención</p>
      <ul className="text-body">
        <li>Aporte adecuado de calcio y vitamina D</li>
        <li>Prevención de caídas</li>
        <li>Ejercicio con carga</li>
        <li>Protección deportiva</li>
      </ul>

      <p className="title-section4">📌 Conclusión</p>
      <p className="text-body">
        El manejo de fracturas debe ser individualizado. La prevención, especialmente en osteoporosis,
        es clave para reducir fracturas por fragilidad.
      </p>
    </div>
  );
}

export default LesionesOseas;
