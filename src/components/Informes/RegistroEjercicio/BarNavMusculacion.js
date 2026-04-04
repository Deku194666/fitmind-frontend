



import React from 'react';
import { Link } from 'react-router-dom';
 
const BarNavMusculacion = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/registroejercicio/registromusculacion2" className='bar-button' > Registro Musculación </Link> 
    <Link to="/registroejercicio/historialmusculacion" className='bar-button' > Registro Ejercicios </Link>            
           
   
  </div>

  );
};

export default BarNavMusculacion;