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
      <Link to="/alimentos/historialalimentos" className="navbar-al-link">
        Historial Registro de Alimentos  
      </Link>
      <Link to="/fasting" className="navbar-al-link">
        Ayuno intermitente 
      </Link>
      <Link to="/alimentos/caloriesintro" className="navbar-al-link">
        Calorias 
      </Link>
      <Link to="/alimentos/macrosintro" className="navbar-al-link">
        Macronutrientes 
      </Link>
    </nav>
  );
};

export default NavBarAl;
