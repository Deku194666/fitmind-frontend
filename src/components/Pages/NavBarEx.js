import { Link } from 'react-router-dom';
import './NavBarEx.css';


const NavBarEx = () => {
  return (
    <div className="navbar-wrapper">
      <div className="secondary-bar1">
        <Link to="/ejercicio/musculacion" className="bar-button">
          Ejercicios Musculares
        </Link>

        <Link to="/ejercicio/cv" className="bar-button">
          Ejercicios Cardiovasculares
        </Link>

        <Link to="/ejercicio/elongacion" className="bar-button">
          Elongación
        </Link>

        <Link to="/ejercicio/lesmusc" className="bar-button">
          Lesiones Musculares
        </Link>

        <Link to="/ejercicio/leslig" className="bar-button">
          Lesiones Ligamentos
        </Link>
      </div>
    </div>
  );
};

export default NavBarEx;
