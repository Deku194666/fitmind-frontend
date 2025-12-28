import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import imagen3 from '../images/imagen3.png';
import './Topbar.css';

const Topbar = () => {
  const navigate = useNavigate();
  const [nombreUsuario, setNombreUsuario] = useState('');
  const esMobile = window.innerWidth <= 768;


  useEffect(() => {
    const nombreGuardado = localStorage.getItem('usuario_nombre');
    setNombreUsuario(nombreGuardado || 'Usuario');
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const formatearNombre = (nombreCompleto, esMobile) => {
  if (!nombreCompleto) return 'Usuario';
  if (!esMobile) return nombreCompleto;

  const partes = nombreCompleto.trim().split(/\s+/);

  // Si tiene menos de 3 partes, no acortamos
  if (partes.length < 3) return nombreCompleto;

  const primerNombre = partes[0];
  const primerApellido = partes[partes.length - 2];
  const segundoApellido = partes[partes.length - 1];

  return `${primerNombre} ${primerApellido} ${segundoApellido}`;
};


  return (
    <AppBar position="static" sx={{ backgroundColor: '#2980b9', width: '100%' }}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', // izquierda ↔ derecha
          gap: 1,
          px: { xs: 1, sm: 3 },
          minHeight: 56,
          flexWrap: 'nowrap',
        }}
      >
        {/* IZQUIERDA: imagen + texto usando tu clase */}
        <Link
          to="/dashboard"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            gap: '0.8rem',
          }}>
            
            <span className="topbar-logo">FitMind</span>

          <img
            src={imagen3}
            alt="FitMind"
            style={{
              height: '4.5rem',
              width: '5.5rem',
              display: 'block',
              marginLeft: '-1.4rem'

            }}
          />
          
        </Link>

        {/* DERECHA: usuario + logout */}
        <Typography
          sx={{
            fontSize: { xs: '0.9rem', sm: '1.2rem' },
            fontWeight: 'bold',
            color: '#fff',
            whiteSpace: 'nowrap',
          }}
        >
          Hola, {formatearNombre(nombreUsuario, esMobile)} |{' '}
          <span
            onClick={handleLogout}
            style={{ cursor: 'pointer', textDecoration: 'none', fontSize: 'inherit' }}
          >
            CERRAR SESIÓN
          </span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
