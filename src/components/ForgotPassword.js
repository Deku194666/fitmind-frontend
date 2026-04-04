

import React, { useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // De momento solo simulamos
    alert("Si el correo está registrado, recibirás un enlace para restablecer tu contraseña.");

    navigate('/login');
  };

  return (
    <Box className="forgot-container">
      <Typography className="forgot-title">
        Recuperar Contraseña
      </Typography>

      <form className="forgot-form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ mb: '2rem' }}
        />

        <Button
          type="submit"
          variant="contained"
          className="forgot-button"
        >
          Enviar Enlace
        </Button>

        <Typography
          className="back-login-link"
          onClick={() => navigate('/login')}
        >
          Volver al Login
        </Typography>
      </form>
    </Box>
  );
};

export default ForgotPassword;