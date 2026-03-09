import { Link } from 'react-router-dom';
import './NavBarEx2.css';

const NavBarEx2 = () => {
  return (
    <div className="navbar-wrapper">
      <div className="secondary-bar">
        <Link to="/ejercicio/lesart" className="bar-button">
          Lesiones Articulares
        </Link>

        <Link to="/ejercicio/lesoseas" className="bar-button">
          Lesiones Óseas
        </Link>

        <Link to="/ejercicio/lesnervios" className="bar-button">
          Lesiones Nerviosas
        </Link>

        <Link to="/ejercicio/lestendinosas" className="bar-button">
          Lesiones Tendinosas
        </Link>
      </div>
    </div>
  );
};

export default NavBarEx2;
