




import { Link } from 'react-router-dom';
 
const NavBarConfig = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/configuracion/settingshydration" className='bar-button' > Hidratación </Link>            
      <Link to="/configuracion/settingscalories"  className='bar-button'> Calorias  </Link>
      <Link to="/configuracion/settingsmacros" className="bar-button"> Macronutrientes </Link>


  
    </div>

    );

};

export default NavBarConfig;