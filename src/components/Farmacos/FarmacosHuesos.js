import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FarmacosHuesos.css';

function FarmacosHuesos() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <p className="fxh-title">Fármacos para la Salud Ósea</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los fármacos para la salud ósea se emplean en el tratamiento y prevención de enfermedades como la 
        <Link to="/ecnt/osteoporosis" className="fxh-link"> Osteoporosis</Link>, enfermedad de Paget y otras patologías que afectan la densidad mineral ósea.
        Estos medicamentos pueden actuar inhibiendo la resorción ósea o estimulando la formación de hueso.
      </p>

      <p className="fxh-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="fxh-list">
        <li>Inhibición de la actividad osteoclástica (antirresortivos).</li>
        <li>Estimulación de la formación ósea por osteoblastos (anabólicos).</li>
        <li>Regulación del metabolismo del calcio y fósforo.</li>
      </ul>

      <p className="fxh-subtitle">📋 Indicaciones Principales</p>
      <ul className="fxh-list">
        <li>
          <Link to="/ecnt/osteoporosis" className="fxh-link">
            Osteoporosis
          </Link> posmenopáusica o senil
        </li>
        <li>Prevención de fracturas osteoporóticas</li>
        <li>Enfermedad de Paget ósea</li>
        <li>Osteogénesis imperfecta (algunos casos)</li>
        <li>Hipercalcemia maligna</li>
      </ul>

      <p className="fxh-subtitle">💊 Ejemplos Comunes</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Clase</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alendronato</td>
              <td>70 mg semanal</td>
              <td>Bifosfonato</td>
            </tr>
            <tr>
              <td>Ácido zoledrónico</td>
              <td>5 mg anual IV</td>
              <td>Bifosfonato</td>
            </tr>
            <tr>
              <td>Denosumab</td>
              <td>60 mg SC cada 6 meses</td>
              <td>Anticuerpo monoclonal</td>
            </tr>
            <tr>
              <td>Teriparatida</td>
              <td>20 mcg diarios SC</td>
              <td>Anabólico óseo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">⚠️ Efectos Adversos</p>
      <ul className="fxh-list">
        <li>Irritación esofágica y úlceras (bifosfonatos orales)</li>
        <li>Dolor óseo, muscular o articular</li>
        <li>Hipocalcemia (especialmente con denosumab)</li>
        <li>Osteonecrosis mandibular (raro)</li>
        <li>Fracturas atípicas del fémur con uso prolongado</li>
      </ul>

      <p className="fxh-subtitle">🔄 Contraindicaciones</p>
      <ul className="fxh-list">
        <li>Hipocalcemia no corregida</li>
        <li>Insuficiencia renal grave (depuración &lt;30 ml/min)</li>
        <li>Trastornos esofágicos (para bifosfonatos orales)</li>
        <li>Embarazo y lactancia (según tipo de fármaco)</li>
      </ul>

      <p className="fxh-subtitle">📉 Interacciones Relevantes</p>
      <ul className="fxh-list">
        <li>Calcio y antiácidos interfieren con absorción de bifosfonatos</li>
        <li>Denosumab puede potenciar hipocalcemia con diuréticos de asa</li>
      </ul>

      <p className="fxh-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="fxh-list">
        <li>Asegurar aporte adecuado de calcio y vitamina D</li>
        <li>Supervisar adherencia y técnica de administración oral</li>
        <li>Evaluar densidad ósea periódicamente (DEXA)</li>
        <li>Considerar interrupción tras 3-5 años de bifosfonatos (vacaciones terapéuticas)</li>
      </ul>

    </div>
  );
}

export default FarmacosHuesos;
