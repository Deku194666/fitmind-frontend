// src/components/Login.js
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from "../config";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("🟡 LOGIN SUBMIT DISPARADO");
    console.log("🌍 Hostname:", window.location.hostname);

    const endpoint = `${API_URL}/api/usuarios/login`;
    console.log("🎯 Endpoint:", endpoint);

    try {
      const res = await axios.post(
        endpoint,
        {
          email: formData.loginEmail,
          password: formData.loginPassword
        },
        {
          timeout: 10000,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log("🟢 RESPUESTA LOGIN:", res.data);

      // 🔐 Guardar datos básicos
      localStorage.setItem('usuario_id', res.data.usuarioId);
      localStorage.setItem('usuario_email', res.data.email);
      localStorage.setItem('usuario_nombre', res.data.nombre);

      // 🚀 Redirigir
      navigate('/dashboard');

    } catch (err) {
      console.error("🔴 ERROR LOGIN:", err);

      if (err.response) {
        alert(`Error ${err.response.status}: ${err.response.data?.mensaje || 'Error en login'}`);
      } else {
        alert("El servidor no responde");
      }
    }
  };

  return (
    <Box
      sx={{
        width: '375px',
        padding: '3rem 2rem',
        margin: '9.5rem auto 12rem auto',
        border: '2px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 0 15px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}
    >
      <Typography
        gutterBottom
        sx={{
          fontWeight: 700,
          color: '#2980b9',
          fontSize: '3.3rem'
        }}
      >
        Login
      </Typography>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="loginEmail"
          value={formData.loginEmail}
          onChange={handleChange}
          placeholder="Email"
          required
          style={{
            width: '90%',
            marginBottom: '1.5rem',
            height: '40px'
          }}
        />

        <input
          type="password"
          name="loginPassword"
          value={formData.loginPassword}
          onChange={handleChange}
          placeholder="Contraseña"
          required
          style={{
            width: '90%',
            marginBottom: '1.5rem',
            height: '40px'
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            marginTop: '2rem',
            backgroundColor: '#2980b9',
            fontWeight: '700',
            width: '100%'
          }}
        >
          Iniciar Sesión
        </Button>
      </form>
    </Box>
  );
};

export default Login;
