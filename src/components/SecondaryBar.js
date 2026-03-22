
// src/components/SecondaryBar.js
import React from 'react';
import './SecondaryBar.css';
import { Link } from 'react-router-dom';

const SecondaryBar = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/registroalimentos" className="bar-button">Registro de Alimentos</Link>
    <Link   className='bar-button'  to="/ejercicio"  >  Ejercicio </Link>
    <Link to="/signosvitales" className='bar-button' > Tus Signos Vitales  </Link> 
    <Link className='bar-button'   to="/hidratacion">Hidratación</Link>           
    <Link to="/calidadsueno" className="bar-button">Calidad del Sueño</Link>
    <Link  to="/skincarepresentacion"  className='bar-button'  > Cuidados de la Piel  </Link>

  </div>

  );
};

export default SecondaryBar;


