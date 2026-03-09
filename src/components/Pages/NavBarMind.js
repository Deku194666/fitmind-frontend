

import { Link } from 'react-router-dom';
import './NavBarAl.css';

const NavBarFar = () => {


    return (
    
  <div className="secondary-bar">
    <Link to="/bienestarmental/mindfullness" className='bar-button'> MindFullNess </Link>
    <Link to="/bienestarmental/enfmentalcomun" className='bar-button'> Trastornos Mentales Comunes  </Link>
    <Link to="/bienestarmental/ejerciciosrelajacion" className='bar-button' > Ejercicios de Relajación  </Link>            
    <Link  to="/bienestarmental/yoga"  className='bar-button'  > Yoga </Link>
    <Link  to="/bienestarmental/yoga"  className='bar-button'  > Diario de Emociones </Link>


  </div>
  );


}

export default NavBarFar;
