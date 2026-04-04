
// src/components/SecondaryBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const BavNavInforme2 = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/calendarintro" className='bar-button' > Todos tus Registros </Link> 
    <Link to="/signosvitalesinforme" className='bar-button' > Signos Vitales  </Link>            
    <Link to="/suenoinforme" className="bar-button"> Sueño</Link>
    <Link   className='bar-button'  to="/ejercicioinforme"  >  Ejercicio </Link>
    <Link to="/farmacosinforme" className="bar-button">Fármacos</Link>

  </div>

  );
};

export default BavNavInforme2;
