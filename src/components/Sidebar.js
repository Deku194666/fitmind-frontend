
// src/components/Sidebar.js
import React from 'react';
import { List, ListItem, } from '@mui/material';
import { Link } from 'react-router-dom';

import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar"  >
      <List>
        <ListItem button className="sidebar-list-item" >
          <Link  className='sidebar-option' to="/perfil">Perfil</Link>
        </ListItem>
        <ListItem button className="sidebar-list-item">
          <Link className='sidebar-option1' to="/agendas">Agendas</Link>
        </ListItem>
        <ListItem button className="sidebar-list-item">
          <span className='sidebar-option2'  >  Hábitos  </span>
        </ListItem>
        <ListItem button className="sidebar-list-item">
          <span className='sidebar-option3'  >  Comunidad  </span>
          <Link className='sidebar-option2'   to="/habitospresentacion"  >  Hábitos  </Link>
        </ListItem>
        <ListItem button className="sidebar-list-item">
          <Link className='sidebar-option3' to="/comunidad"  >  Comunidad  </Link>
        </ListItem>
        <ListItem button className="sidebar-list-item">
          <Link className='sidebar-option3'  to="/configuracion"  >  Configuración  </Link>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;



