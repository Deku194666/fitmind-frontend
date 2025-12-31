


// src/components/SecondaryBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const BarNavRegistroAlimentosInforme = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/registroalimentos/historialregistroalimentos" className='bar-button40' > Historial de Registro de Alimentos   </Link>            
  </div>

  );
};

export default BarNavRegistroAlimentosInforme;
