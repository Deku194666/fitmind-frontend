



import { Link } from 'react-router-dom';

const BarNavAgendaComun = () => {
  return (
    <div className="secondary-bar">
      <Link to="/agendacomun/agendacalendario" className="bar-button">
        Agenda Diaria
      </Link>
     
    </div>
  );
};

export default BarNavAgendaComun;
