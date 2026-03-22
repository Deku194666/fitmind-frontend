





import React from 'react';
import { Link } from 'react-router-dom';

const BarNavEstadisticasRegistroAlimentos = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/registroalimentos/registrocalorias" className='bar-button' > Tus Calorias  </Link> 
    <Link to="/registroalimentos/registromacrospresentacion" className='bar-button' > Tus Macronutrientes  </Link>  
    <Link to="/registroalimentos/registromacroscombinado" className='bar-button' > Tus Analisis  </Link>            
          
           
   
  </div>

  );
};

export default BarNavEstadisticasRegistroAlimentos;
