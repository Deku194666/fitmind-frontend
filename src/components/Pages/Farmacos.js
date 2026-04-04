// src/components/pages/Farmacos.js

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarFar from './NavBarFar';
import NavBarFar2 from './NavBarFar2';
import './Farmacos.css';

function Farmacos() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail51">

      <NavBarFar />
      <NavBarFar2 />

      <p className="fxh-title">Farmacología Clínica</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los fármacos son herramientas fundamentales en la medicina moderna. Esta guía integral cubre los principales aspectos 
        de los medicamentos, incluyendo su historia, mecanismos de acción, usos terapéuticos y consideraciones especiales 
        para su prescripción segura y efectiva.
      </p>
      <p className="fxh-text">
        Comprender cómo actúan los medicamentos, sus posibles efectos adversos, las interacciones con otros tratamientos 
        o alimentos, y sus indicaciones específicas es esencial para un manejo terapéutico seguro y efectivo.
      </p>
      <p className="fxh-text">
        En esta sección encontrarás información organizada por sistemas del cuerpo humano e interconectada con otros módulos 
        de FitMind como enfermedades crónicas, alimentación y salud integral.
      </p>

      <p className="fxh-subtitle">📜 Historia de los Fármacos</p>
      <ul className="fxh-list">
        <li><strong>3000 a.C.:</strong> Primeros registros medicinales (papiro Ebers).</li>
        <li><strong>Siglo IV a.C.:</strong> Hipócrates y la farmacología racional.</li>
        <li><strong>1806:</strong> Sertürner aísla morfina.</li>
        <li><strong>1928:</strong> Descubrimiento de la penicilina.</li>
        <li><strong>1950s:</strong> Revolución psicofarmacológica.</li>
        <li><strong>1980s:</strong> Desarrollo de biotecnología.</li>
      </ul>

      <p className="fxh-subtitle">🔍 Clasificación por Sistemas</p>

      <p className="fxh-subsubtitle">📌 Sistema Cardiovascular</p>

      <p className="fxh-text"><strong>Antihipertensivos</strong></p>
      <ul className="fxh-list">
        <li><strong>IECA:</strong> <Link to="/farmacos/farmacos2/enalapril">Enalapril</Link></li>
        <li><strong>ARA II:</strong> Losartán</li>
        <li><strong>CCB:</strong> Amlodipino</li>
        <li><strong>Diuréticos:</strong> <Link to="/farmacos/farmacos2/hidroclorotiazida">Hidroclorotiazida</Link></li>
      </ul>

      <p className="fxh-text"><strong>Anticoagulantes</strong></p>
      <ul className="fxh-list">
        <li><strong>Warfarina:</strong> Requiere monitoreo INR.</li>
        <li><strong>DOACs:</strong> Apixaban, Rivaroxaban.</li>
        <li><strong>Heparina:</strong> Uso hospitalario.</li>
      </ul>

      <p className="fxh-subsubtitle">📌 Sistema Nervioso</p>

      <p className="fxh-text"><strong>Antidepresivos</strong></p>
      <ul className="fxh-list">
        <li><strong>ISRS:</strong> Fluoxetina.</li>
        <li><strong>IRSN:</strong> Venlafaxina.</li>
        <li><strong>Tricíclicos:</strong> Amitriptilina.</li>
      </ul>

      <p className="fxh-text"><strong>Analgésicos</strong></p>
      <ul className="fxh-list">
        <li>
          <strong>Escalera OMS:</strong> 
          <Link to="/farmacos/farmacos2/paracetamol"> Paracetamol </Link> 
          → AINEs → Opioides menores → Opioides mayores.
        </li>
        <li><strong>Nuevos enfoques:</strong> Gabapentinoides.</li>
      </ul>

      <p className="fxh-subsubtitle">📌 Sistema Endocrino</p>

      <p className="fxh-text"><strong>Antidiabéticos</strong></p>
      <ul className="fxh-list">
        <li><strong>Biguanidas:</strong> Metformina.</li>
        <li><strong>Sulfonilureas:</strong> Glibenclamida.</li>
        <li><strong>iSGLT2:</strong> Empagliflozina.</li>
      </ul>

      <p className="fxh-subtitle">📌 Conclusión</p>
      <p className="fxh-text">
        El conocimiento farmacológico es dinámico y requiere actualización constante. La farmacología moderna 
        avanza hacia terapias más personalizadas y seguras, pero el juicio clínico sigue siendo insustituible.
      </p>

    </div>
  );
}

export default Farmacos;
