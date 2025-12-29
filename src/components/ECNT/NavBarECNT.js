
import { Link } from 'react-router-dom';
import './NavBarECNT.css';


const NavBarECNT = () => {

    return ( 
    
    <div className="secondary-bar">
      <Link to="/ecnt/cardiovascularesecnt" className='bar-button1'> Enfermedades CardioVasculares </Link>
      <Link to="/ecnt/respiecnt " className='bar-button2'> Enfermedades Pulmonares </Link>
      <Link to="/ecnt/metabolicasecnt" className='bar-button3'> Enfermedades Metabolicas  </Link>
      <Link to="/ecnt/neurodegenerativasecnt" className='bar-button4' > Enfermedades Cerebrales </Link>
 
    </div>

    );
};

export default NavBarECNT;