import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LigDeltoideo.css';

function LigDeltoideo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxld-detail">

      <p className="fxld-title">
        Esguince del Ligamento Deltoideo
      </p>

      <p className="fxld-subtitle">📌 Introducción</p>
      <p className="fxld-text">
        El <strong>Ligamento Deltoideo</strong> es el principal estabilizador medial del tobillo, resistiendo la eversión y rotación externa. 
        Representa solo el 5-10% de las lesiones del tobillo, pero suele ser más grave por su impacto en la estabilidad.
      </p>

      <p className="fxld-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxld-list">
        <li><strong>Fascículo tibioastragalino anterior</strong> (más lesionado)</li>
        <li><strong>Fascículo tibioastragalino posterior</strong></li>
        <li><strong>Fascículo tibiocalcáneo</strong></li>
        <li><strong>Fascículo tibionavicular</strong></li>
      </ul>

      <p className="fxld-subtitle">Clasificación por Grado 📊</p>
      <div className="fxld-table-wrapper">
        <table className="fxld-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Daño Estructural</th>
              <th>Hallazgos Clínicos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>Estiramiento sin rotura</td>
              <td>Dolor localizado, estabilidad conservada</td>
            </tr>
            <tr>
              <td>II</td>
              <td>Rotura parcial</td>
              <td>Edema, dolor a la palpación</td>
            </tr>
            <tr>
              <td>III</td>
              <td>Rotura completa + sindesmosis</td>
              <td>Inestabilidad marcada</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxld-subtitle">Diagnóstico 🩺</p>
      <ul className="fxld-list">
        <li>Palpación medial</li>
        <li>Prueba de estrés en eversión</li>
        <li>Prueba de compresión tibiofibular</li>
      </ul>

      <p className="fxld-text"><strong>Estudios de Imagen</strong></p>
      <div className="fxld-table-wrapper">
        <table className="fxld-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/examenes/rx">Radiografías</Link></td>
              <td>Descartar fracturas</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Evaluar integridad ligamentaria</td>
            </tr>
            <tr>
              <td><Link to="/examenes/ecografia">Ecografía</Link></td>
              <td>Visualizar roturas parciales</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxld-subtitle">Tratamiento 🏥</p>
      <ul className="fxld-list">
        <li>Inmovilización 2-4 semanas</li>
        <li>Protección de carga</li>
        <li>Rehabilitación progresiva</li>
        <li>Cirugía en casos grado III</li>
      </ul>

      <p className="fxld-subtitle">Complicaciones ⚠️</p>
      <ul className="fxld-list">
        <li>Inestabilidad medial crónica</li>
        <li>Artrosis tibiotalar</li>
        <li>Rigidez articular</li>
      </ul>

      <p className="fxld-subtitle">Conclusión</p>
      <p className="fxld-text">
        Aunque menos frecuente, el esguince del ligamento deltoideo tiene alto impacto funcional 
        y debe evaluarse cuidadosamente para evitar inestabilidad crónica.
      </p>

    </div>
  );
}

export default LigDeltoideo;
