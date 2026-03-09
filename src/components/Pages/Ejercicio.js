import React, { useEffect, useState } from 'react';
import './Ejercicio.css';
import NavBarEx from './NavBarEx';
import NavBarEx2 from './NavBarEx2';
import { Box, Typography, Paper } from '@mui/material';
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

  const usuario_id = localStorage.getItem('usuario_id');

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

  const renderCard = (titulo, data, emoji) => (
    <div className="ejercicio-card-wrapper">
      <Paper elevation={3} className="ejercicio-card">
        <Typography variant="h6">{emoji} {titulo}</Typography>
        {data ? (
          <>
            <Typography>
              <strong>⏱️ Tiempo realizado:</strong> {formatearTiempo(data.tiempo)}
            </Typography>
            <Typography>
              <strong>🔥 Calorías quemadas:</strong> {data.calorias} kcal
            </Typography>
            <Typography>
              <strong>📅 Fecha:</strong> {new Date(data.fecha).toLocaleString()}
            </Typography>
          </>
        ) : (
          <Typography>No hay sesiones registradas aún.</Typography>
        )}
      </Paper>
    </div>
  );

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }} />
      <div className="navbar-wrapper">
        <NavBarEx />
      </div>
      <NavBarEx2 />

      <div className="ejercicio-container">
        <p className="parraf1">Beneficios del Ejercicio</p>
        <p className="parraf2">
          Realizar actividad física regularmente ayuda a mejorar la salud cardiovascular,
          fortalecer músculos y huesos, reducir el estrés y mejorar el sueño.
        </p>

        <div className="cards-container">
          {renderCard('Última sesión de Elongación', elongacion, '🧘')}
          {renderCard('Última sesión de Musculación', musculacion, '🏋️')}
          {renderCard('Última sesión de Correr', correr, '🏃')}
          {renderCard('Última sesión de Trote', trote, '🏃')}
          {renderCard('Última sesión de Sprint', sprint, '⚡')}
          {renderCard('Última sesión de Bicicleta', bicicleta, '🚴')}
          {renderCard('Última sesión de Caminata', caminar, '🚶')}
          {renderCard('Última sesión de Natación', nadar, '🏊')}
          {renderCard('Última sesión de Boxeo de Saco', boxeosaco, '🥊')}
        </div>
      </div>
    </>
  );
};

export default Ejercicio;
