



import { Link } from 'react-router-dom';
import './NavBarExamen.css';

const NavBarExamen = () => {


    return (
    
  <div className="NavBarExamen">
    <Link to="/lab" className='bar-button17'> Examenes de Laboratorio </Link>
    <Link to="/imagen" className='bar-button18'> Examenes de Imagenología </Link>


  </div>
  );


}

export default NavBarExamen;
