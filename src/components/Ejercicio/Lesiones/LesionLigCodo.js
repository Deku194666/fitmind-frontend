import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarLesLigCodo from './NavBarLesLigCodo';
import './LesionLigCodo.css';

function LesionLigCodo() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxligcodo-detail">

      <NavBarLesLigCodo />

      <p className="fxligcodo-title">
        Lesiones Ligamentosas de Codo
      </p>

      <p className="fxligcodo-subtitle">📌 Introducción</p>
      <p className="fxligcodo-text">
        Las lesiones ligamentosas del codo representan aproximadamente <strong>15% de todas las lesiones</strong> 
        de esta articulación. Son frecuentes en deportes de lanzamiento y traumatismos por caídas.
        La estabilidad depende de la interacción entre ligamentos colaterales y estructuras óseas.
      </p>

      <p className="fxligcodo-subtitle">📌 Estructuras Clave</p>
      <ul className="fxligcodo-list">
        <li><strong>Ligamento colateral medial (LCM)</strong>
          <ul>
            <li>Haz anterior: Principal estabilizador a valgo (30°-120°)</li>
            <li>Haz posterior: Resiste valgo en flexión &gt; 60°</li>
            <li>Haz transversal: Función mecánica limitada</li>
          </ul>
        </li>
        <li><strong>Ligamento colateral lateral (LCL)</strong>
          <ul>
            <li>Complejo de 4 fascículos</li>
            <li>Principal estabilizador a varo y rotación</li>
          </ul>
        </li>
        <li><strong>Cápsula articular</strong>: Estabilidad adicional en extensión</li>
      </ul>

      <p className="fxligcodo-subtitle">📌 Clasificación de Lesiones</p>
      <div className="fxligcodo-table-wrapper">
        <table className="fxligcodo-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Estructura Afectada</th>
              <th>Mecanismo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>LCM</strong></td>
              <td>Haz anterior</td>
              <td>Valgo forzado (lanzadores)</td>
            </tr>
            <tr>
              <td><strong>LCL</strong></td>
              <td>Complejo lateral</td>
              <td>Trauma directo o caída en extensión</td>
            </tr>
            <tr>
              <td><strong>Inestabilidad posterolateral</strong></td>
              <td>LCL + cápsula posterior</td>
              <td>Varo + supinación</td>
            </tr>
            <tr>
              <td><strong>Desinserción</strong></td>
              <td>Inserción humeral o cubital</td>
              <td>Trauma violento (luxación)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxligcodo-subtitle">📌 Diagnóstico Clínico</p>
      <div className="fxligcodo-table-wrapper">
        <table className="fxligcodo-table">
          <thead>
            <tr>
              <th>Lesión</th>
              <th>Prueba</th>
              <th>Hallazgo Positivo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LCM</td>
              <td>Valgo a 30°</td>
              <td>Dolor / apertura medial &gt; 3mm</td>
            </tr>
            <tr>
              <td>LCL</td>
              <td>Varo + supinación</td>
              <td>Inestabilidad posterolateral</td>
            </tr>
            <tr>
              <td>Crónica</td>
              <td>Prueba de mesa</td>
              <td>Subluxación radial</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxligcodo-subtitle">📌 Estudios de Imagen</p>
      <div className="fxligcodo-table-wrapper">
        <table className="fxligcodo-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/examenes/radiografia" className="fxligcodo-link">Radiografía</Link></td>
              <td>Avulsiones, calcificaciones</td>
              <td>Evaluación inicial</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn" className="fxligcodo-link">RMN</Link></td>
              <td>Integridad ligamentosa</td>
              <td>Tejidos blandos</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Laxitud dinámica</td>
              <td>Evaluación funcional</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxligcodo-subtitle">📌 Rehabilitación Postquirúrgica</p>
      <div className="fxligcodo-table-wrapper">
        <table className="fxligcodo-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Objetivo</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Protección</td>
              <td>ROM limitado</td>
              <td>0-6 semanas</td>
            </tr>
            <tr>
              <td>Intermedia</td>
              <td>Fortalecimiento progresivo</td>
              <td>6-12 semanas</td>
            </tr>
            <tr>
              <td>Avanzada</td>
              <td>Gestos específicos</td>
              <td>3-6 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default LesionLigCodo;
