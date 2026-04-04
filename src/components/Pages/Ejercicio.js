import React, { useEffect, useState } from 'react';
import './Ejercicio.css';
import NavBarEx from './NavBarEx';
import NavBarEx2 from './NavBarEx2';
import { Box, Typography, Paper, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';

const Ejercicio = () => {
  const [elongacion, setElongacion] = useState(null);
  const [musculacion, setMusculacion] = useState(null);
  const [correr, setCorrer] = useState(null);
  const [trote, setTrote] = useState(null);
  const [sprint, setSprint] = useState(null);
  const [bicicleta, setBicicleta] = useState(null);
  const [caminar, setCaminar] = useState(null);
  const [nadar, setNadar] = useState(null);
  const [boxeosaco, setBoxeoSaco] = useState(null);
  

  // Estados para el menú de 3 puntos
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuIndex, setMenuIndex] = useState(null); // índice de la tarjeta abierta

  const usuario_id = localStorage.getItem('usuario_id');

  const abrirMenu = (event, index) => {
    setAnchorEl(event.currentTarget);
    setMenuIndex(index);
  };

  const cerrarMenu = () => {
    setAnchorEl(null);
    setMenuIndex(null);
  };

  const formatearTiempo = (tiempo) => {
    if (tiempo === null || tiempo === undefined) return '—';
    const minutos = Math.floor(tiempo / 60);
    const segundos = tiempo % 60;
    return `${minutos} min ${segundos} seg`;
  };

  const fetchData = async (endpoint, setter) => {
    if (!usuario_id) return;
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/${endpoint}/${usuario_id}`,
        { headers: { 'user-id': usuario_id } }
      );
      const payload = Array.isArray(res.data) ? res.data[0] : res.data;
      setter(payload ?? null);
    } catch (error) {
      if (error.response?.status === 404) setter(null);
      else console.error(`Error cargando ${endpoint}:`, error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchData('elongacion', setElongacion);
    fetchData('musculacion', setMusculacion);
    fetchData('correr', setCorrer);
    fetchData('trote', setTrote);
    fetchData('sprint', setSprint);
    fetchData('bicicleta', setBicicleta);
    fetchData('caminar', setCaminar);
    fetchData('nadar', setNadar);
    fetchData('boxeosaco', setBoxeoSaco);

    const onNuevo = () => {
      fetchData('elongacion', setElongacion);
      fetchData('musculacion', setMusculacion);
      fetchData('correr', setCorrer);
      fetchData('trote', setTrote);
      fetchData('sprint', setSprint);
      fetchData('bicicleta', setBicicleta);
      fetchData('caminar', setCaminar);
      fetchData('nadar', setNadar);
      fetchData('boxeosaco', setBoxeoSaco);
    };

    window.addEventListener('ejercicio:registrado', onNuevo);
    return () => window.removeEventListener('ejercicio:registrado', onNuevo);
  }, []);

  const renderCard = (titulo, data, emoji, index) => (
    <div
      className="ejercicio-card-wrapper"
      key={index}
      style={{ position: 'relative' }}
    >
      <Paper elevation={3} className="ejercicio-card">
        {/* Botón 3 puntos */}
        <IconButton
          disableRipple
          disableFocusRipple
          onMouseDown={(e) => e.preventDefault()}
          onClick={(e) => {
            e.stopPropagation();
            abrirMenu(e, index);
          }}
          sx={{
            position: "absolute",
            top: 8,
            right: -148, // igual que Signos Vitales
            WebkitTapHighlightColor: "transparent",
            backgroundColor: "transparent",

            "&::before": {
              content: '""',
              position: "absolute",
              width: "20px",
              height: "42px",
              borderRadius: "6px",
            },

            "&:hover::before": {
              backgroundColor: "rgba(0,0,0,0.06)",
            },

            "&:active::before": {
              backgroundColor: "rgba(0,0,0,0.12)",
            },
          }}
        >
          <MoreVertIcon sx={{ fontSize: "2.4rem" }} />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl) && menuIndex === index}
          onClose={cerrarMenu}
          onClick={(e) => e.stopPropagation()}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          sx={{ "& .MuiPaper-root": { marginLeft: "10px" } }}
        >
          <MenuItem onClick={cerrarMenu}>✏️ Editar</MenuItem>
          <MenuItem onClick={cerrarMenu}>⚙️ Configuración</MenuItem>
          <MenuItem onClick={cerrarMenu}>🗑️ Borrar</MenuItem>
        </Menu>

        {/* Contenido de la tarjeta */}
        <Typography variant="h6">{emoji} {titulo}</Typography>
        {data ? (
          <>
            <Typography><strong>⏱️ Tiempo realizado:</strong> {formatearTiempo(data.tiempo)}</Typography>
            <Typography><strong>🔥 Calorías quemadas:</strong> {data.calorias} kcal</Typography>
            <Typography><strong>📅 Fecha:</strong> {new Date(data.fecha).toLocaleString()}</Typography>
          </>
        ) : (
          <Typography>No hay sesiones registradas aún.</Typography>
        )}
      </Paper>
    </div>
  );

  const ejercicios = [
    { titulo: 'Última sesión de Elongación', data: elongacion, emoji: '🧘' },
    { titulo: 'Última sesión de Musculación', data: musculacion, emoji: '🏋️' },
    { titulo: 'Última sesión de Correr', data: correr, emoji: '🏃' },
    { titulo: 'Última sesión de Trote', data: trote, emoji: '🏃' },
    { titulo: 'Última sesión de Sprint', data: sprint, emoji: '⚡' },
    { titulo: 'Última sesión de Bicicleta', data: bicicleta, emoji: '🚴' },
    { titulo: 'Última sesión de Caminata', data: caminar, emoji: '🚶' },
    { titulo: 'Última sesión de Natación', data: nadar, emoji: '🏊' },
    { titulo: 'Última sesión de Boxeo de Saco', data: boxeosaco, emoji: '🥊' },
  ];

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }} />
      <div className="navbar-wrapper"><NavBarEx /></div>
      <NavBarEx2 />

      <div className="ejercicio-container">
        <p className="parraf1">Beneficios del Ejercicio</p>
        <p className="parraf2">
          Realizar actividad física regularmente ayuda a mejorar la salud cardiovascular,
          fortalecer músculos y huesos, reducir el estrés y mejorar el sueño.
        </p>

        <div className="cards-container">
          {ejercicios.map((ex, i) => renderCard(ex.titulo, ex.data, ex.emoji, i))}
        </div>
      </div>
    </>
  );
};

export default Ejercicio;