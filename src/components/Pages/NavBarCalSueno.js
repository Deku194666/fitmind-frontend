


import { Link } from 'react-router-dom';


const NavBarCalSueno = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/higienesueno" className='bar-button'> Higiene del Sueño   </Link>
      <Link to="/sueno" className='bar-button'> Sueño  </Link>
  
  
    </div>

    );

};

export default NavBarCalSueno;