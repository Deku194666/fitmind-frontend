import { Link } from 'react-router-dom';
 
const NavBarCaloriesIntro = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/alimentos/caloriescalendar" className='bar-button'> Tu conteo de Calorias   </Link>
  
    </div>

    );
};

export default NavBarCaloriesIntro;
