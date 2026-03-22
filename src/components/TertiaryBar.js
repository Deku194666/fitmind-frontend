
// src/components/TertiaryBar.js
import React from 'react';
import './TertiaryBar.css';
import { Link } from 'react-router-dom';


const TertiaryBar = () => {
  return (
    <div className="tertiary-bar">
      <Link to="/bienestarmental" className='bar-button'>Bienestar Mental</Link>
      <Link to="/examenes"  className='bar-button'  > Exámenes  </Link>
      <Link to="/farmacos" className="bar-button">Fármacos</Link>
      <Link to="/ecnt" className='bar-button'>ECNT</Link>
      <Link to="/informes" className='bar-button'>Tus Estadisticas</Link>
      <Link  to="/premium"  className='bar-button'  > Premium  </Link> 
      


    </div>
  );
};

export default TertiaryBar;





