// src/components/Perfil.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Perfil.css';
import NavBarPerfil from './Perfil/NavBarPerfil';



import {
  Box, Paper, Typography, Divider, List, ListItemButton, ListItemText,
  IconButton, Fab, useTheme, useMediaQuery, Chip, Stack, Drawer,
  TextField, FormControlLabel, Switch, Button, Alert, CircularProgress
} from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import LockResetIcon from '@mui/icons-material/LockReset';
import SettingsIcon from '@mui/icons-material/Settings';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Link } from 'react-router-dom';

const SIDEBAR_WIDTH = 350;  // el ancho de la barra derecha

const Perfil = () => {
  const API = process.env.REACT_APP_API_URL || 'http://localhost:4000';
  const usuario_id =
    localStorage.getItem('usuario_id') || localStorage.getItem('usuarioId') || '';
  const token = localStorage.getItem('token') || '';

  const [perfil, setPerfil] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(Boolean(usuario_id));

  // ----- Información médica (incluye todas las preguntas) -----
  const [medica, setMedica] = useState({
    // Antropometría
    peso: '',          // kg
    talla: '',         // cm
    imc: '',           // calculado

    // Condiciones
    diabetes: false,
    hipertension: false,

    // Medicación
    medicamentos: [],  // chips
    medRegular: '',    // texto libre

    // Salud general (preguntas del HTML)
    estadoSalud: '',
    enfermedadDiagnosticada: '',
    enfermedadCronica: '',
    fuma: '',
    alcohol: '',
    alimentacion: '',
    ejercicio: '',
    sueno: '',
    emocional: '',
    sintomas: '',
    examenes: '',

    // Otros
    otros: '',
  });
  const [medicamentoInput, setMedicamentoInput] = useState('');
  const [saveLoading, setSaveLoading] = useState(false);
  const [saveOk, setSaveOk] = useState(false);
  const [saveError, setSaveError] = useState('');

  // Layout responsivo
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [openRight, setOpenRight] = useState(false);

  // Cargar perfil
  useEffect(() => {
    if (!usuario_id) return;
    const fetchPerfil = async () => {
      try {
        setLoading(true);
        setError('');
        const resp = await axios.get(`${API}/api/datosusuario/${usuario_id}`, {
          headers: {
            'user-id': usuario_id,
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });
        setPerfil(resp.data || null);
      } catch (err) {
        console.error('Error al cargar el perfil:', err?.response?.data || err.message);
        setError(
          err?.response?.status === 401
            ? 'No autorizado. Revisa el header user-id o el token.'
            : 'No fue posible cargar el perfil.'
        );
        setPerfil(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPerfil();
  }, [API, usuario_id, token]);


  // Calcular IMC automáticamente
  useEffect(() => {
    const peso = parseFloat(medica.peso);
    const tallaCm = parseFloat(medica.talla);
    if (!isNaN(peso) && !isNaN(tallaCm) && tallaCm > 0) {
      const tallaM = tallaCm / 100;
      const imcVal = peso / (tallaM * tallaM);
      setMedica(prev => ({ ...prev, imc: imcVal ? imcVal.toFixed(1) : '' }));
    } else {
      setMedica(prev => ({ ...prev, imc: '' }));
    }
  }, [medica.peso, medica.talla]);

  if (!usuario_id) return <p>No estás logueado</p>;

  const nombre = perfil?.nombre?.trim() || localStorage.getItem('usuario_nombre') || 'Sin nombre';
  const email = perfil?.usuario?.email || localStorage.getItem('usuario_email') || 'Sin email';
  const edad = perfil?.edad ?? 'No especificada';
  const genero = perfil?.genero?.trim() || 'No especificado';
  const pais = perfil?.pais?.trim() || 'No especificado';
  const ciudad = perfil?.ciudad?.trim() || 'No especificada';

  // ----- Helpers UI: preguntas en vertical con título arriba -----
  const QField = ({ question, value, onChange, multiline=false, minRows=1, type='text', placeholder='', readOnly=false }) => (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
        {question}
      </Typography>
      <TextField
        value={value}
        onChange={onChange}
        fullWidth
        multiline={multiline}
        minRows={multiline ? minRows : undefined}
        type={type}
        placeholder={placeholder}
        InputProps={{ readOnly }}
      />
    </Box>
  );

  const QSwitch = ({ question, checked, onChange }) => (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
        {question}
      </Typography>
      <FormControlLabel control={<Switch checked={checked} onChange={onChange} />} label="Sí" />
    </Box>
  );

  // Handlers info médica
  const handleMedicaChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setMedica(prev => ({ ...prev, [field]: value }));
  };

  const addMedicamento = () => {
    const val = medicamentoInput.trim();
    if (!val) return;
    if (medica.medicamentos.includes(val)) { setMedicamentoInput(''); return; }
    setMedica(prev => ({ ...prev, medicamentos: [...prev.medicamentos, val] }));
    setMedicamentoInput('');
  };

  const removeMedicamento = (name) => {
    setMedica(prev => ({
      ...prev,
      medicamentos: prev.medicamentos.filter(m => m !== name),
    }));
  };

  const handleMedicamentoKey = (e) => {
    if (e.key === 'Enter') { e.preventDefault(); addMedicamento(); }
  };


 const handleSaveMedica = async () => {
  setSaveOk(false);
  setSaveError('');
  setSaveLoading(true);

  try {
    await axios.put(`${API}/api/infomedica/${usuario_id}`, medica, {
      headers: {
        'Content-Type': 'application/json',
        'user-id': usuario_id,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    // 🔥 Guardar en localStorage si quieres mantener sincronización
    localStorage.setItem(
      `fitmind_medica_${usuario_id}`,
      JSON.stringify(medica)
    );

    // 🔥 LIMPIAR FORMULARIO DESPUÉS DE GUARDAR
    setMedica({
      peso: '',
      talla: '',
      imc: '',
      diabetes: false,
      hipertension: false,
      medicamentos: [],
      medRegular: '',
      estadoSalud: '',
      enfermedadDiagnosticada: '',
      enfermedadCronica: '',
      fuma: '',
      alcohol: '',
      alimentacion: '',
      ejercicio: '',
      sueno: '',
      emocional: '',
      sintomas: '',
      examenes: '',
      otros: '',
    });

    setSaveOk(true);

  } catch (e) {
    setSaveError(
      e?.response?.data?.message ||
      'No se pudo guardar la información médica en el servidor.'
    );

  } finally {
    setSaveLoading(false);
  }
};


  // Contenido del panel derecho (reutilizado en desktop/móvil)
  const SidebarContent = (
    <Box sx={{ width: SIDEBAR_WIDTH, p: 2 }}>
      {/* Header (solo móvil) */}
      {!isMdUp && (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>Opciones</Typography>
          <IconButton onClick={() => setOpenRight(false)} aria-label="Cerrar panel">
            <CloseIcon />
          </IconButton>
        </Box>
      )}

      <Typography variant="overline" sx={{ color: 'text.secondary', marginRight: '3rem' }}>
        Accesos rápidos
      </Typography>
      <List dense sx={{ mt: 1 }}>
        <ListItemButton component={Link} to="/perfil/editar">
          <EditIcon fontSize="small" style={{ marginRight: 8 }} />
          <ListItemText primary="Editar perfil" secondary="Nombre, edad, ubicación" />
        </ListItemButton>
        <ListItemButton component={Link} to="/configuracion/seguridad">
          <LockResetIcon fontSize="small" style={{ marginRight: 8 }} />
          <ListItemText primary="Cambiar contraseña" secondary="Seguridad de tu cuenta" />
        </ListItemButton>
        <ListItemButton component={Link} to="/configuracion">
          <SettingsIcon fontSize="small" style={{ marginRight: 8 }} />
          <ListItemText primary="Preferencias" secondary="Notificaciones, tema, idioma" />
        </ListItemButton>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        Hoy
      </Typography>
      <Stack spacing={1.25} sx={{ mt: 1 }}>
        <Box sx={{ p: 1.25, borderRadius: 2, bgcolor: 'action.hover' }}>
        <Typography component="div" sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>            <EventNoteIcon fontSize="small" />
            Resumen rápido
            <Chip size="small" label="Perfil" sx={{ ml: 'auto' }} />
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
            Completa tu perfil para personalizar recomendaciones.
          </Typography>
        </Box>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        Navegación
      </Typography>
      <List dense>
        <ListItemButton component={Link} to="/dashboard"><ListItemText primary="Dashboard" /></ListItemButton>
        <ListItemButton component={Link} to="/farmacos"><ListItemText primary="Fármacos" /></ListItemButton>
        <ListItemButton component={Link} to="/examenes"><ListItemText primary="Exámenes" /></ListItemButton>
      </List>
    </Box>
  );

  

  return (
    <>
    <NavBarPerfil />
    
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', mt: 8 }}>
      
      {/* MAIN */}
      <Box component="main" sx={{ flex: 1, minWidth: 0 }}>
        <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          color: '#2980b9',
          mt: 4,
          mb: 2,
          textAlign: { xs: 'center', md: 'left' }
        }}>   Perfil de Usuario    </Typography>

        {loading && <p>Cargando perfil...</p>}
        {error && <p className="Parraf3" style={{ color: 'crimson' }}>{error}</p>}
        {!loading && !error && (
          <>
            {/* Información básica */}
            <Paper
  elevation={3}
  sx={{
    p: 4,
    borderRadius: 4,
    width: '90%',
    maxWidth: 900,
    mx: 'auto',
    mt: 3
  }}
>
  <Typography
    variant="h5"
    sx={{ fontWeight: 700, mb: 3, color: '#2980b9' }}
  >
    Información básica
  </Typography>

  <Divider sx={{ mb: 3 }} />

  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
      gap: 3
    }}
  >
    <Box>
      <Typography variant="subtitle2" color="text.secondary">Nombre</Typography>
      <Typography variant="h6">{nombre}</Typography>
    </Box>

    <Box>
      <Typography variant="subtitle2" color="text.secondary">Email</Typography>
      <Typography variant="h6">{email}</Typography>
    </Box>

    <Box>
      <Typography variant="subtitle2" color="text.secondary">Edad</Typography>
      <Typography variant="h6">{edad}</Typography>
    </Box>

    <Box>
      <Typography variant="subtitle2" color="text.secondary">Género</Typography>
      <Typography variant="h6">{genero}</Typography>
    </Box>

    <Box>
      <Typography variant="subtitle2" color="text.secondary">País</Typography>
      <Typography variant="h6">{pais}</Typography>
    </Box>

    <Box>
      <Typography variant="subtitle2" color="text.secondary">Ciudad</Typography>
      <Typography variant="h6">{ciudad}</Typography>
    </Box>
  </Box>
</Paper>

            {/* Información médica (100% vertical, preguntas completas) */}
            <Paper
  elevation={3}
  sx={{
    p: 4,
    borderRadius: 4,
    width: '90%',
    maxWidth: 900,
    mx: 'auto',
    mt: 4
  }}
>
  <Typography
    variant="h5"
    sx={{ fontWeight: 700, mb: 3, color: '#2980b9' }}
  >
    Información médica
  </Typography>

  <Divider sx={{ mb: 4 }} />

  {/* --------- ANTROPOMETRÍA --------- */}
  <Box sx={{ mb: 5 }}>
    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
      Antropometría
    </Typography>

    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
        gap: 3
      }}
    >
      <TextField
        label="Peso (kg)"
        type="number"
        value={medica.peso}
        onChange={handleMedicaChange('peso')}
        fullWidth
      />

      <TextField
        label="Talla (cm)"
        type="number"
        value={medica.talla}
        onChange={handleMedicaChange('talla')}
        fullWidth
      />

      <TextField
        label="IMC"
        value={medica.imc}
        InputProps={{ readOnly: true }}
        fullWidth
      />
    </Box>
  </Box>

  <Divider sx={{ mb: 4 }} />

  {/* --------- CONDICIONES --------- */}
  <Box sx={{ mb: 5 }}>
    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
      Enfermedades y condiciones
    </Typography>

    <Stack spacing={2}>
      <FormControlLabel
        control={<Switch checked={medica.diabetes} onChange={handleMedicaChange('diabetes')} />}
        label="Diabetes"
      />
      <FormControlLabel
        control={<Switch checked={medica.hipertension} onChange={handleMedicaChange('hipertension')} />}
        label="Hipertensión"
      />

      <TextField
        label="Enfermedad diagnosticada"
        value={medica.enfermedadDiagnosticada}
        onChange={handleMedicaChange('enfermedadDiagnosticada')}
        fullWidth
      />

      <TextField
        label="Enfermedad crónica"
        value={medica.enfermedadCronica}
        onChange={handleMedicaChange('enfermedadCronica')}
        fullWidth
      />
    </Stack>
  </Box>

  <Divider sx={{ mb: 4 }} />

  {/* --------- MEDICACIÓN --------- */}
  <Box sx={{ mb: 5 }}>
    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
      Medicación
    </Typography>

    <TextField
      label="Medicamentos regulares"
      value={medica.medRegular}
      onChange={handleMedicaChange('medRegular')}
      multiline
      minRows={2}
      fullWidth
      sx={{ mb: 2 }}
    />

    <TextField
      label="Agregar medicamento"
      value={medicamentoInput}
      onChange={(e) => setMedicamentoInput(e.target.value)}
      onKeyDown={handleMedicamentoKey}
      fullWidth
    />

    <Button
      variant="contained"
      onClick={addMedicamento}
      sx={{ mt: 2 }}
    >
      Agregar
    </Button>

    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
      {medica.medicamentos.map((m) => (
        <Chip key={m} label={m} onDelete={() => removeMedicamento(m)} />
      ))}
    </Stack>
  </Box>

  <Divider sx={{ mb: 4 }} />

  {/* --------- ESTILO DE VIDA --------- */}
  <Box sx={{ mb: 5 }}>
    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
      Estilo de vida
    </Typography>

    <Stack spacing={2}>
      <TextField label="Alimentación" value={medica.alimentacion} onChange={handleMedicaChange('alimentacion')} fullWidth />
      <TextField label="Ejercicio" value={medica.ejercicio} onChange={handleMedicaChange('ejercicio')} fullWidth />
      <TextField label="Sueño" value={medica.sueno} onChange={handleMedicaChange('sueno')} fullWidth />
      <TextField label="Consumo de alcohol" value={medica.alcohol} onChange={handleMedicaChange('alcohol')} fullWidth />
      <TextField label="Tabaquismo" value={medica.fuma} onChange={handleMedicaChange('fuma')} fullWidth />
    </Stack>
  </Box>

  <Divider sx={{ mb: 4 }} />

  {/* --------- ANTECEDENTES Y OTROS --------- */}
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
      Antecedentes y otros
    </Typography>

    <TextField
      label="Síntomas recientes"
      value={medica.sintomas}
      onChange={handleMedicaChange('sintomas')}
      multiline
      minRows={2}
      fullWidth
      sx={{ mb: 2 }}
    />

    <TextField
      label="Exámenes realizados"
      value={medica.examenes}
      onChange={handleMedicaChange('examenes')}
      multiline
      minRows={2}
      fullWidth
      sx={{ mb: 2 }}
    />

    <TextField
      label="Otros datos médicos"
      value={medica.otros}
      onChange={handleMedicaChange('otros')}
      multiline
      minRows={3}
      fullWidth
    />
  </Box>

  <Divider sx={{ my: 3 }} />

  <Button
    variant="contained"
    fullWidth
    onClick={handleSaveMedica}
    disabled={saveLoading}
  >
    {saveLoading ? 'Guardando...' : 'Guardar información médica'}
  </Button>
</Paper>
          </>
        )}
      </Box>

      {/* ASIDE DESKTOP */}
      {isMdUp && (
        <Box component="aside" sx={{ width: '24rem', flexShrink: 0, marginRight: '3rem', marginTop: '2rem' }}>
          <Paper
            elevation={3}
            sx={{ borderRadius: 3, position: 'sticky', top: 16 }}
          >
            {SidebarContent}
          </Paper>
        </Box>
      )}

      {/* MÓVIL: Drawer + FAB */}
      {!isMdUp && (
        <>
          <Fab
            color="primary"
            size="medium"
            onClick={() => setOpenRight(true)}
            aria-label="Abrir panel derecho"
            sx={{ position: 'fixed', right: 16, bottom: 16, zIndex: 1300 }}
          >
            <MenuOpenIcon />
          </Fab>
          <Drawer
            anchor="right"
            open={openRight}
            onClose={() => setOpenRight(false)}
            ModalProps={{ keepMounted: true }}
            PaperProps={{ sx: { width: SIDEBAR_WIDTH } }}
          >
            {SidebarContent}
          </Drawer>
        </>
      )}
    </Box>
    </>
  );
};

export default Perfil;
