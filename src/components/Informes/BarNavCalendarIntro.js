




// src/components/SecondaryBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const BarNavCalendarIntro = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/registrotodo/calendarpage" className='bar-button' > Todos tus Registros </Link> 

  </div>

  );
};

export default BarNavCalendarIntro;
