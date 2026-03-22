









import React from 'react';
import { Link } from 'react-router-dom';

const BarNavEstadisticasMacros = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/registroalimentos/registroproteinas" className='bar-button' > Tus Proteinas 🥩   </Link> 
    <Link to="/registroalimentos/registrocarbohidratos" className='bar-button' > Tus Carbohidratos 🍚  </Link>
    <Link to="/registroalimentos/registrograsas" className='bar-button' > Tus Grasas 🥑  </Link>
    <Link to="/registroalimentos/registrofibra" className='bar-button' > Tu Fibra 🥦  </Link>            
           
   
  </div>

  );
};

export default BarNavEstadisticasMacros;
