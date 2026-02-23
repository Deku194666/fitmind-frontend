
// src/components/SecondaryBar.js
import React from 'react';
import './SecondaryBar.css';
import { Link } from 'react-router-dom';

const SecondaryBar = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/ecnt" className='bar-button'>ECNT</Link>
    <Link to="/informes" className='bar-button'>Tus Estadisticas</Link>
    <Link to="/signosvitales" className='bar-button' > Tus Signos Vitales  </Link>            
    <Link  to="/premium"  className='bar-button'  > Premium  </Link>
    <Link to="/calidadsueno" className="bar-button">Calidad del Sueño</Link>
    <Link  to="/premium"  className='bar-button'  > Cuidados de la Piel  </Link>

  </div>

  );
};

export default SecondaryBar;


