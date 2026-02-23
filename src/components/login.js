import React, { useState } from 'react';
import { Box, Button, Typography, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import API from "../api";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false); // <-- Estado para mostrar/ocultar

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await API.post("/api/usuarios/login", {
        email: formData.loginEmail,
        password: formData.loginPassword
      });

      localStorage.setItem('usuario_id', res.data.usuarioId);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('usuario_nombre', res.data.nombre);

      navigate('/Dashboard');
    } catch (err) {
      alert('Error al iniciar sesión');
    }
  };

  return (
    <Box className="login-container" sx={{ marginBottom: { xs: '15rem' } }}>
      <Typography sx={{
        fontSize: { xs: '4.5rem', sm: '6rem', md: '3.5rem' },
        fontWeight: 700,
        color: '#2980b9',
        marginBottom: '2rem',
      }}>
        Login
      </Typography>

      <form className="login-form" onSubmit={handleSubmit}>
        {/* Email */}
        <Box sx={{ mb: '2rem', width: { xs: '22rem', md: '24rem' } }}>
          <TextField
            fullWidth
            type="email"
            name="loginEmail"
            value={formData.loginEmail}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </Box>

        {/* Contraseña con ojo */}
        <Box sx={{ mb: '2rem', width: { xs: '22rem', md: '24rem' } }}>
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"} // <-- alterna entre texto y contraseña
            name="loginPassword"
            value={formData.loginPassword}
            onChange={handleChange}
            placeholder="Contraseña"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          className="login-button"
        >
          Iniciar Sesión
        </Button>
      </form>
    </Box>
  );
};

export default Login;
