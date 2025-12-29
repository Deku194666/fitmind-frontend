


import { Link } from 'react-router-dom';
import './NavBarAl.css';

const NavBarAl = () => {


    return (
    
  <div className="NavbarAl">
    <Link to="/alimentos/alimentos" className='bar-button5'> Alimentos </Link>
    <Link to="/informes" className='bar-button6'> Comidas </Link>
    <Link to="/comidas" className='bar-button7' > Recetas Saladas Saludables  </Link>            
    <Link  to="/comidas2"  className='bar-button8'  > Recetas Dulces Saludables </Link>

  </div>
  );


}

export default NavBarAl;



