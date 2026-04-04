


import { Link } from 'react-router-dom';
 
const NavBarComidaPersonalizada = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/alimentos/comidas/crearcomida" className='bar-button'> Crea tus Comidas   </Link>
  
    </div>

    );
};

export default NavBarComidaPersonalizada;
