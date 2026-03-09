import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarLesLigHombro from './NavBarLesLigHombro';
import './LesionLigHombro.css';

function LesionLigHombro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxhombro-detail">

      <NavBarLesLigHombro />

      <p className="fxhombro-title">
        Lesiones Ligamentosas de Hombro
      </p>

      <p className="fxhombro-subtitle">📌 Introducción</p>
      <p className="fxhombro-text">
        Las lesiones ligamentosas del hombro representan el <strong>20% de todas las lesiones</strong> de esta articulación.
        En el hombro la inestabilidad suele ser multidireccional y los ligamentos trabajan junto al manguito rotador.
      </p>

      <p className="fxhombro-subtitle">📌 Estructuras Clave</p>
      <ul className="fxhombro-list">
        <li><strong>Labrum glenoideo</strong></li>
        <li>
          <strong>Ligamentos glenohumerales</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Superior (LGHS)</li>
            <li>Medio (LGHM)</li>
            <li>Inferior (LGHI)</li>
          </ul>
        </li>
        <li><strong>Cápsula articular</strong></li>
      </ul>

      <p className="fxhombro-subtitle">📌 Clasificación</p>
      <div className="fxhombro-table-wrapper">
        <table className="fxhombro-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Estructura</th>
              <th>Mecanismo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bankart</td>
              <td>Labrum anteroinferior</td>
              <td>Luxación anterior</td>
            </tr>
            <tr>
              <td>SLAP</td>
              <td>Labrum superior</td>
              <td>Tracción bíceps</td>
            </tr>
            <tr>
              <td>HAGL</td>
              <td>Desinserción humeral</td>
              <td>Trauma violento</td>
            </tr>
            <tr>
              <td>Laxitud multidireccional</td>
              <td>Cápsula global</td>
              <td>Hiperlaxitud</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxhombro-subtitle">📌 Diagnóstico</p>
      <ul className="fxhombro-list">
        <li>Prueba de aprensión</li>
        <li>O'Brien test</li>
        <li>Cajón anterior</li>
        <li>
          Estudios de imagen:
          <ul>
            <li>
              <Link to="/examenes/radiografia">
                Radiografía
              </Link>
            </li>
            <li>
              <Link to="/examenes/rmn" >
                RMN con contraste
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      <p className="fxhombro-subtitle">📌 Tratamiento</p>
      <ul className="fxhombro-list">
        <li>Reposo corto</li>
        <li>Fortalecimiento rotadores externos</li>
        <li>Propiocepción</li>
        <li>Cirugía en luxaciones recurrentes</li>
      </ul>

      <p className="fxhombro-subtitle">📌 Conclusión</p>
      <p className="fxhombro-text">
        Las lesiones ligamentosas del hombro requieren evaluación clínica precisa.
        El tratamiento conservador es efectivo en muchos casos, reservando cirugía para inestabilidad recurrente.
      </p>

    </div>
  );
}

export default LesionLigHombro;
