

// src/components/TertiaryBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BarNavInforme.css';


const BarNavInforme = () => {
  return (
    <div className="BarNavInforme">
      
      <Link className='bar-button'   to="/hidratacioninforme">Hidratación</Link>
      <Link to="/registroalimentosinforme" className="bar-button">Registro de Alimentos</Link>
      <Link to="/bienestarmentalinforme" className='bar-button'>Bienestar Mental</Link>
      <Link to="/examenesinforme"  className='bar-button'  > Exámenes  </Link>
      
    </div>
  );
};

export default BarNavInforme;
