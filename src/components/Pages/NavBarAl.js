import { Link } from 'react-router-dom';
import './NavBarAl.css';

const NavBarAl = () => {
  return (
    <nav className="navbar-al">
      <Link to="/alimentos/alimentos" className="navbar-al-link">
        Alimentos
      </Link>
      <Link to="/informes" className="navbar-al-link">
        Comidas
      </Link>
      <Link to="/comidas" className="navbar-al-link">
        Recetas Saladas
      </Link>
      <Link to="/comidas2" className="navbar-al-link">
        Recetas Dulces
      </Link>
    </nav>
  );
};

export default NavBarAl;
