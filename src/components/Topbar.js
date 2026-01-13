import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import imagen3 from '../images/imagen3.png';
import './Topbar.css';

const Topbar = () => {
  const navigate = useNavigate();
  const [nombreUsuario, setNombreUsuario] = useState('');
  const esMobile = useMediaQuery('(max-width:600px)');


  useEffect(() => {
    const nombreGuardado = localStorage.getItem('usuario_nombre');
    setNombreUsuario(nombreGuardado || 'Usuario');
  }, []);

  const nombreAMostrar = React.useMemo(() => {
  if (!nombreUsuario) return 'Usuario';

  // Separar nombre completo por espacios
  const partes = nombreUsuario.split(' ');

  // Si es móvil y hay más de un nombre
  if (esMobile && partes.length > 3) {
    // Primer nombre + apellidos (sin segundo nombre)
    return [partes[0], ...partes.slice(2)].join(' ');
  }

  // En web mostrar todo
  return nombreUsuario;
}, [nombreUsuario, esMobile]);


  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
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
          Hola, {nombreAMostrar} |{' '}
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
