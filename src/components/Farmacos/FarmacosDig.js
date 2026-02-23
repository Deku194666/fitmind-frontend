import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarFarmacosDigestivos from './NavBarFarmacosDigestivos';
import './FarmacosDig.css'; 

function FarmacosDig() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fd-detail">
      <NavBarFarmacosDigestivos />

      <p className="fd-title">Fármacos Digestivos</p>

      <p className="fd-subtitle">Introducción 📌</p>
      <p className="fd-text">
        Los <strong>Fármacos Digestivos</strong> son medicamentos diseñados para tratar trastornos del sistema gastrointestinal, 
        desde acidez estomacal hasta enfermedades inflamatorias intestinales. Su uso adecuado mejora la digestión, alivia síntomas y previene complicaciones.
      </p>

      <p className="fd-subtitle">📜 Historia de los Fármacos Digestivos</p>
      <ul className="fd-list">
        <li><strong>Antigüedad:</strong> Uso de hierbas (jengibre, menta) para problemas digestivos.</li>
        <li><strong>Siglo XIX:</strong> Descubrimiento del bicarbonato de sodio para la acidez.</li>
        <li><strong>1970s:</strong> Desarrollo de los antiácidos y bloqueadores H2.</li>
        <li><strong>1980s:</strong> Lanzamiento de los inhibidores de la bomba de protones (IBP).</li>
        <li><strong>2000s:</strong> Avances en probióticos y tratamientos para el síndrome de intestino irritable (SII).</li>
      </ul>

      <p className="fd-subtitle">🔍 Clasificación de los Fármacos Digestivos</p>

      <p className="fd-subtitle">📌 1. Antiácidos y Protectores Gástricos</p>
      <div className="fd-table-wrapper">
        <table className="fd-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Ejemplo</th>
              <th>Mecanismo</th>
              <th>Uso Principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Antiácidos</td>
              <td>Hidróxido de aluminio/magnesio</td>
              <td>Neutralizan ácido gástrico</td>
              <td>Alivio rápido de acidez</td>
            </tr>
            <tr>
              <td>Bloqueadores H2</td>
              <td>Ranitidina, Famotidina</td>
              <td>Reducen producción de ácido</td>
              <td>Gastritis, úlceras</td>
            </tr>
            <tr>
              <td>IBP</td>
              <td><Link to="/farmacos/farmacos2/omeprazol">Omeprazol</Link>, Esomeprazol</td>
              <td>Bloquean la secreción ácida</td>
              <td>Reflujo, úlceras gástricas</td>
            </tr>
            <tr>
              <td>Protectores gástricos</td>
              <td>Sucralfato</td>
              <td>Forman barrera sobre la mucosa</td>
              <td>Úlceras, gastritis</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fd-subtitle">📌 2. Procinéticos y Antieméticos</p>
      <div className="fd-table-wrapper">
        <table className="fd-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Ejemplo</th>
              <th>Mecanismo</th>
              <th>Uso Principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Procinéticos</td>
              <td>Metoclopramida, Domperidona</td>
              <td>Aceleran vaciamiento gástrico</td>
              <td>Náuseas, reflujo</td>
            </tr>
            <tr>
              <td>Antieméticos</td>
              <td>Ondansetrón</td>
              <td>Bloquean receptores de serotonina</td>
              <td>Náuseas por quimioterapia</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fd-subtitle">📌 3. Laxantes y Antidiarreicos</p>
      <div className="fd-table-wrapper">
        <table className="fd-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Ejemplo</th>
              <th>Mecanismo</th>
              <th>Uso Principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Laxantes osmóticos</td>
              <td>Lactulosa, Polietilenglicol</td>
              <td>Retienen agua en heces</td>
              <td>Estreñimiento</td>
            </tr>
            <tr>
              <td>Laxantes estimulantes</td>
              <td>Senósidos</td>
              <td>Aumentan motilidad intestinal</td>
              <td>Estreñimiento ocasional</td>
            </tr>
            <tr>
              <td>Antidiarreicos</td>
              <td>Loperamida</td>
              <td>Reducen motilidad intestinal</td>
              <td>Diarrea aguda</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fd-subtitle">📌 4. Tratamiento para Enfermedades Inflamatorias Intestinales (EII)</p>
      <div className="fd-table-wrapper">
        <table className="fd-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Ejemplo</th>
              <th>Mecanismo</th>
              <th>Uso Principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aminosalicilatos</td>
              <td>Mesalazina</td>
              <td>Reducen inflamación local</td>
              <td>Colitis ulcerosa</td>
            </tr>
            <tr>
              <td>Inmunomoduladores</td>
              <td>Azatioprina</td>
              <td>Suprimen respuesta inmune</td>
              <td>Enfermedad de Crohn</td>
            </tr>
            <tr>
              <td>Biológicos</td>
              <td>Infliximab</td>
              <td>Bloquean TNF-α</td>
              <td>EII grave</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fd-subtitle">📌 5. Enzimas Digestivas y Probióticos</p>
      <ul className="fd-list">
        <li>Ejemplos: Pancreatina, Lactasa, Probióticos</li>
        <li>Uso: Mejorar digestión, restaurar flora intestinal</li>
      </ul>

      <p className="fd-subtitle">⚠️ Efectos Secundarios Comunes</p>
      <ul className="fd-list">
        <li>IBP (<Link to="/farmacos/farmacos2/omeprazol">Omeprazol</Link>): mayor riesgo de infecciones y déficit de vitamina B12 (uso prolongado).</li>
        <li>Laxantes estimulantes: dependencia si se usan en exceso.</li>
        <li>Metoclopramida: somnolencia, movimientos involuntarios (en altas dosis).</li>
      </ul>

      <p className="fd-subtitle">✅ Conclusión</p>
      <p className="fd-text">
        Los <strong>Fármacos Digestivos</strong> son esenciales para tratar desde molestias comunes hasta enfermedades crónicas. 
        Su uso debe ser guiado por un médico para evitar efectos adversos y garantizar su eficacia. Una dieta balanceada y hábitos saludables son la mejor prevención para problemas digestivos. 🍏💊
      </p>
    </div>
  );
}

export default FarmacosDig;
