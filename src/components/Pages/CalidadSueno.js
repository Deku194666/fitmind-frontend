import React from 'react';
import NavBarCalSueno from './NavBarCalSueno';
import { FaRegSmile, FaShieldAlt, FaBrain, FaBalanceScale } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CalidadSueno.css';

const CalidadSueno = () => {
  return (
    <div className="calidad-container">
      <NavBarCalSueno />

      <p className="p1">Calidad del Sueño</p>

      <p className="p2">
        Dormir bien es fundamental para tu salud física, mental y emocional.
        En esta sección encontrarás consejos prácticos y recursos para mejorar
        tu descanso y despertar con más energía.
      </p>

      <p className="titulo-sec">✨ Beneficios de un buen descanso:</p>

      <ul className="calidad-list">
        <li>
          <FaRegSmile className="icon blue" />
          Mejora tu estado de ánimo y reduce el estrés
        </li>
        <li>
          <FaShieldAlt className="icon green" />
          Refuerza tu sistema inmunológico
        </li>
        <li>
          <FaBrain className="icon purple" />
          Favorece la memoria y la concentración
        </li>
        <li>
          <FaBalanceScale className="icon orange" />
          Ayuda al control hormonal y del peso corporal
        </li>
      </ul>

      <p className="titulo-sec">💡 Consejos para mejorar tu sueño:</p>

      <ul className="calidad-list">
        <li> 1) Mantén horarios regulares para dormir y despertar</li>
        <li> 2) Evita el uso de pantallas al menos 1 hora antes de dormir</li>
        <li> 3) Limita la cafeína y alcohol por la noche</li>
        <li> 4) Usa la cama solo para dormir (no para trabajar o ver TV)</li>
        <li> 5) Practica ejercicios de relajación o respiración antes de acostarte</li>
      </ul>
    </div>
  );
};

export default CalidadSueno;
