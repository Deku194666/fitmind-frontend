import { Link } from 'react-router-dom';
import './NavBarLesLigRod.css'; // O podemos renombrar a NavBarLesLig.css

const NavBarLesLigRod = () => {
  return (
    <div className="secondary-bar">
      <Link to="/ejercicio/lesiones/lca" className="bar-button">
        Ligamento Cruzado Anterior
      </Link>

      <Link to="/ejercicio/lesiones/lcp" className="bar-button">
        Ligamento Cruzado Posterior
      </Link>

      <Link to="/ejercicio/lesiones/lcm" className="bar-button">
        Ligamento Colateral Medial
      </Link>

      <Link to="/ejercicio/lesiones/lcl" className="bar-button">
        Ligamento Colateral Lateral
      </Link>

      <Link to="/ejercicio/lesiones/dpf" className="bar-button">
        Disfunción Patelo-Femoral
      </Link>
    </div>
  );
};

export default NavBarLesLigRod;
