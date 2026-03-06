

// src/components/SecondaryBar.js
import React from 'react';
import './NavBarSkincarePresentacion.css';
import { Link } from 'react-router-dom';

const NavBarSkincarePresentacion = () => {

  return ( 
  
  <div className="secondary-bar">
    <Link to="/skincarepresentacion/skincaredashboard" className='bar-button'> Tu Skincare  </Link>


  </div>

  );
};

export default NavBarSkincarePresentacion;


