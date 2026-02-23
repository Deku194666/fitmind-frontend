

import { Link } from 'react-router-dom';

const NavBarAgendas = () => {
  return (
    <div className="secondary-bar">
      <Link to="/agendacomun" className="bar-button">
        Agenda Común
      </Link>

      <Link to="/agendaeconomica" className="bar-button">
        Agenda Economica
      </Link>

      <Link to="/gestionpendientes" className="bar-button">
        Gestión de Pendientes 
      </Link>

     
    </div>
  );
};

export default NavBarAgendas;
