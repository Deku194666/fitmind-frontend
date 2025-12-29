

import { Link } from 'react-router-dom';
import './NavBarEx2.css';

const NavBarEx2 = () => {

    return ( 
    
    <div className="NavBarEx2">
      <Link to="/ejercicio/lesart" className='bar-button11'> Lesiones Articulares </Link>
      <Link to="/ejercicio/lesoseas" className='bar-button12'> Lesiones Oseas  </Link>
      <Link  to="/ejercicio/lesnervios"  className='bar-button13'> Lesiones Nerviosas  </Link>
      <Link to="/ejercicio/lestendinosas" className="bar-button14"> Lesiones Tendinosas </Link>
  
    </div>

    );
};

export default NavBarEx2;