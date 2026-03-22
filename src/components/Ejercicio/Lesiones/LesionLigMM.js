import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarLesLigMM from './NavBarLesLigMM';
import './LesionLigMM.css';

function LesionLigMM() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxligmm-detail">

      <NavBarLesLigMM />

      <p className="fxligmm-title">
        Lesiones Ligamentosas e Inestabilidades de Muñeca, Mano y Dedos
      </p>

      <p className="fxligmm-subtitle">📌 Introducción</p>
      <p className="fxligmm-text">
        Las lesiones ligamentosas en mano y muñeca representan el 20-30% 
        de todas las lesiones de la extremidad superior. Son frecuentes 
        en deportes, trabajo manual y caídas.
      </p>

      <p className="fxligmm-subtitle">📌 Estructuras Clave</p>
      <ul className="fxligmm-list">
        <li><strong>Muñeca</strong>
          <ul>
            <li>Ligamento escafolunar</li>
            <li>Ligamento lunotriquetral</li>
            <li>TFCC</li>
          </ul>
        </li>
        <li><strong>Mano</strong>
          <ul>
            <li>Ligamentos colaterales MCF</li>
            <li>Placa volar</li>
          </ul>
        </li>
        <li><strong>Dedos</strong>
          <ul>
            <li>Ligamentos colaterales IFP / IFD</li>
            <li>Placa volar</li>
          </ul>
        </li>
      </ul>

      <p className="fxligmm-subtitle">📌 Clasificación</p>
      <div className="fxligmm-table-wrapper">
        <table className="fxligmm-table">
          <thead>
            <tr>
              <th>Localización</th>
              <th>Lesión Típica</th>
              <th>Mecanismo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Muñeca</td>
              <td>Lesión escafolunar</td>
              <td>Caída en hiperextensión</td>
            </tr>
            <tr>
              <td>CMC Pulgar</td>
              <td>Lesión de Stener</td>
              <td>Abducción forzada</td>
            </tr>
            <tr>
              <td>MCF Dedos</td>
              <td>Lesión colateral</td>
              <td>Desviación lateral</td>
            </tr>
            <tr>
              <td>IFP</td>
              <td>Dedo en martillo</td>
              <td>Hiperflexión brusca</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxligmm-subtitle">📌 Diagnóstico Clínico</p>
      <div className="fxligmm-table-wrapper">
        <table className="fxligmm-table">
          <thead>
            <tr>
              <th>Lesión</th>
              <th>Prueba</th>
              <th>Hallazgo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Escafolunar</td>
              <td>Test de Watson</td>
              <td>Chasquido doloroso</td>
            </tr>
            <tr>
              <td>CMC Pulgar</td>
              <td>Estrés en valgo</td>
              <td>Laxitud &gt; 35°</td>
            </tr>
            <tr>
              <td>Colateral IFP</td>
              <td>Estrés lateral</td>
              <td>Apertura &gt; 20°</td>
            </tr>
            <tr>
              <td>TFCC</td>
              <td>Compresión ulnar</td>
              <td>Dolor y crepitación</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxligmm-subtitle">📌 Estudios de Imagen</p>
      <div className="fxligmm-table-wrapper">
        <table className="fxligmm-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link className="fxligmm-link" to="/examenes/radiografia">
                  Radiografía
                </Link>
              </td>
              <td>Avulsiones</td>
              <td>Primera línea</td>
            </tr>
            <tr>
              <td>
                <Link className="fxligmm-link" to="/examenes/rmn">
                  RMN
                </Link>
              </td>
              <td>Integridad ligamentosa</td>
              <td>Lesiones intrínsecas</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Laxitud</td>
              <td>Evaluación funcional</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxligmm-subtitle">📌 Tratamiento</p>
      <ul className="fxligmm-list">
        <li>Inmovilización funcional</li>
        <li>Control inflamatorio</li>
        <li>Fortalecimiento progresivo</li>
        <li>Reparación quirúrgica en lesiones completas</li>
      </ul>

      <p className="fxligmm-subtitle">📌 Complicaciones</p>
      <ul className="fxligmm-list">
        <li>Rigidez articular</li>
        <li>Inestabilidad crónica</li>
        <li>Artrosis postraumática</li>
        <li>Disfunción del grip</li>
      </ul>

    </div>
  );
}

export default LesionLigMM;
