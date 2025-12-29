
import { Link } from 'react-router-dom';
import './NavBarEx.css';

const NavBarEx = () => {

    return ( 
    
    <div className="NavBarEx1">
      <Link to="/ejercicio/musculacion" className='bar-button1'>Ejercicios Musculares</Link>
      <Link to="/ejercicio/cv" className='bar-button2'> Ejercicios CardioVasculares</Link>
      <Link to="/ejercicio/elongacion" className='bar-button3' > Elongación  </Link>            
      <Link  to="/ejercicio/lesmusc"  className='bar-button4'> Lesiones Musculares  </Link>
      <Link to="/ejercicio/leslig" className='bar-button5'> Lesiones Ligamentosas </Link>
  
    </div>

    );

};

export default NavBarEx;



