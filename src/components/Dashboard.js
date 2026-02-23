
// src/components/Dashboard.js
import React, {useEffect, useState, useMemo } from 'react';    // Necesario para usar JSX en componentes funcionales
import Sidebar from './Sidebar';    // Importa la pagina donde codifico la barra de navegacion lateral 
import Topbar from './Topbar';     // Importa la pagina donde esta la barra de navegacion superior
import SecondaryBar from './SecondaryBar';   // Importa la pagina donde esta la batrra de navegacion secunadaria hecha dashboard
import TertiaryBar from './TertiaryBar'; // Importa la pagina donde codifico la tercera barra de navegacion 
import Footer from './Footer';     // Importa la pagina donde codifico el pie de pagina
import { Box, LinearProgress, Typography, Paper, Grid, Menu, MenuItem, ButtonBase  } from '@mui/material';
import './Dashboard.css';    // Importo el css para el diseño del dashboard
import axios from 'axios'; 
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from 'react-router-dom';
import CalendarioFarmacos from './Farmacos/RegistroFarmacos/CalendarioFarmacos';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Dialog, DialogTitle, DialogContent, IconButton,
  List, ListItem, ListItemText, Alert, CircularProgress
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";




const Dashboard = () => {
const [totalHidratacion, setTotalHidratacion] = useState(0);
const objetivoDiario = 2000;

useEffect(() => {
  const fetchHidratacion = async () => {
    // Intenta obtener el ID de usuario de múltiples posibles claves en localStorage
    const usuario_id = localStorage.getItem('usuarioId') || 
                       localStorage.getItem('usuario_id') || 
                       localStorage.getItem('userId');
    
    console.log('Dashboard - UserID obtenido:', usuario_id); // Para depuración
    
    if (!usuario_id) {
      console.warn('No se encontró ID de usuario en localStorage');
      return;
    }

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/hidratacion/resumen/${usuario_id}`,
        {
          headers: {
            'user-id': usuario_id,
          },
        }
      );
      
      console.log('Dashboard - Respuesta del backend:', res.data); // Para depuración
      
      // Extraer total_ml de diferentes posibles estructuras de respuesta
      let totalMl = 0;
      if (res.data) {
        totalMl = res.data.total_ml || 
                 res.data.total || 
                 res.data.data?.total_ml || 
                 0;
      }
      
      setTotalHidratacion(totalMl);
    } catch (error) {
      console.error('Error al cargar hidratación en dashboard:', error.response?.data || error.message);
    }
  };

  fetchHidratacion();
}, []);

const porcentaje = Math.min((totalHidratacion / objetivoDiario) * 100, 100).toFixed(1);

  
  
const [signosVitales, setSignosVitales] = useState(null);
const [anchorElSignosVitales, setAnchorElSignosVitales] = useState(null);

const abrirMenuSignosVitales = (event) => {
  setAnchorElSignosVitales(event.currentTarget);
};


useEffect(() => {
  let cancel = false;

  const fetchSignosVitales = async () => {
    try {
      const usuario_id = localStorage.getItem('usuario_id');
      if (!usuario_id) return;

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/signos-vitales/usuario/${usuario_id}`,
        { headers: { 'user-id': usuario_id } }
      );

      const registros = Array.isArray(res.data) ? res.data : [];
      // 🔒 A prueba de orden: calcula timestamp y toma el más reciente
      const ultimo = registros
        .map(r => {
          // intenta con 'fecha' (string o Date), luego 'createdAt', y por último _id como fallback
          const ts =
            (r.fecha ? new Date(r.fecha).getTime() : 0) ||
            (r.createdAt ? new Date(r.createdAt).getTime() : 0) ||
            (r._id ? parseInt(r._id.toString().substring(0, 8), 16) * 1000 : 0); // ObjectId→epoch
          return { ...r, _ts: ts };
        })
        .sort((a, b) => a._ts - b._ts)
        .at(-1) || null;

      if (!cancel) setSignosVitales(ultimo);
    } catch (err) {
      if (!cancel) {
        if (err.response?.status === 404) setSignosVitales(null);
        else console.error("Error al obtener signos vitales:", err.response?.data || err.message);
      }
    }
  };

  fetchSignosVitales();

  // 🔁 auto-refresco cuando se crea un nuevo registro
  const onNuevo = () => fetchSignosVitales();
  window.addEventListener('sv:creado', onNuevo);

  // (opcional) refrescar al volver a la pestaña
  const onVisible = () => {
    if (document.visibilityState === 'visible') fetchSignosVitales();
  };
  document.addEventListener('visibilitychange', onVisible);

  return () => {
    cancel = true;
    window.removeEventListener('sv:creado', onNuevo);
    document.removeEventListener('visibilitychange', onVisible);
  };
}, []);






const [elongacion, setElongacion] = useState(null);

const [anchorElEjercicio, setAnchorElEjercicio] = useState(null);

const abrirMenuEjercicio = (event) => {
  setAnchorElEjercicio(event.currentTarget);
};

useEffect(() => {
  let cancel = false;

  const fetchElongacion = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/elongacion/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ middleware
      );
      if (cancel) return;
      const payload = Array.isArray(res.data) ? res.data[0] : res.data; // por si viniera lista
      setElongacion(payload ?? null);
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) setElongacion(null); // ✅ sin datos
        else console.error('Error al cargar elongación:', error.response?.data || error.message);
      }
    }
  };

  fetchElongacion();

  // 🔁 Auto-refresco si el módulo emite el evento tras guardar
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'elongacion') fetchElongacion();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);





const [yoga, setYoga] = useState(null);

useEffect(() => {
  let cancel = false;

  const fetchYoga = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/yoga/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ header requerido
      );
      if (!cancel) setYoga(res.data ?? null);
    } catch (error) {
      // ✅ 404 = no hay sesiones (no lo trates como error fatal)
      if (error.response?.status === 404) {
        if (!cancel) setYoga(null);
      } else {
        console.error('Error al cargar yoga:', error.response?.data || error.message);
      }
    }
  };

  fetchYoga();

  // 🔁 Auto-refresco si el módulo Yoga registra una nueva sesión
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'yoga') fetchYoga();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);




const [musculacion, setMusculacion] = useState(null);

useEffect(() => {
  let cancel = false;

  const fetchMusculacion = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return; // sin sesión
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/musculacion/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ requerido por el middleware
      );
      if (!cancel) {
        const payload = Array.isArray(res.data) ? res.data[0] : res.data;
        setMusculacion(payload ?? null);
      }
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) {
          // ✅ no hay registros aún
          setMusculacion(null);
        } else {
          console.error('Error al cargar musculación:', error.response?.data || error.message);
        }
      }
    }
  };

  fetchMusculacion();

  // 🔁 Auto-refresco al registrar desde el módulo Musculación
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'musculacion') fetchMusculacion();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);





const [sueno, setUltimoSueno] = useState(null);
const [anchorElSueno, setAnchorElSueno] = useState(null);
const abrirMenuSueno = (event) => {
  setAnchorElSueno(event.currentTarget);
};

useEffect(() => {
  const fetchSueno = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/sueno`);
      if (res.data.length > 0) {
        setUltimoSueno(res.data[0]); // el más reciente
      }
    } catch (error) {
      console.error('Error obteniendo datos de sueño:', error);
    }
  };

  fetchSueno();
}, []);





const [correr, setUltimoCorrer] = useState(null);

useEffect(() => {
  let cancel = false;

  const fetchCorrer = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/correr/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ requerido por middleware
      );
      if (cancel) return;
      const payload = Array.isArray(res.data) ? res.data[0] : res.data; // por si el backend devuelve lista
      setUltimoCorrer(payload ?? null);
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) {
          setUltimoCorrer(null); // ✅ sin registros
        } else {
          console.error('Error obteniendo datos de correr:', error.response?.data || error.message);
        }
      }
    }
  };

  fetchCorrer();

  // 🔁 Auto-refresco cuando el módulo Correr guarda una sesión
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'correr') fetchCorrer();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);





const [trote, setTrote] = useState(null);

useEffect(() => {
  let cancel = false;

  const fetchTrote = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/trote/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ middleware
      );
      if (cancel) return;
      const payload = Array.isArray(res.data) ? res.data[0] : res.data;
      setTrote(payload ?? null);
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) {
          setTrote(null); // ✅ sin registros
        } else {
          console.error('Error al cargar trote:', error.response?.data || error.message);
        }
      }
    }
  };

  fetchTrote();

  // 🔁 Auto-refresco cuando el módulo Trote guarda una sesión
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'trote') fetchTrote();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);




const [sprint, setSprint] = useState(null);

useEffect(() => {
  let cancel = false;

  const fetchSprint = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/sprint/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ requerido por el middleware
      );
      if (cancel) return;
      const payload = Array.isArray(res.data) ? res.data[0] : res.data;
      setSprint(payload ?? null);
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) setSprint(null); // ✅ sin datos
        else console.error('Error al cargar sprint:', error.response?.data || error.message);
      }
    }
  };

  fetchSprint();

  // 🔁 Auto-refresco cuando el módulo Sprint guarda una sesión
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'sprint') fetchSprint();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);




const [bicicleta, setBicicleta] = useState(null);

useEffect(() => {
  let cancel = false;

  const fetchBicicleta = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/bicicleta/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ middleware
      );
      if (cancel) return;
      const payload = Array.isArray(res.data) ? res.data[0] : res.data;
      setBicicleta(payload ?? null);
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) setBicicleta(null); // ✅ sin datos
        else console.error('Error al cargar bicicleta:', error.response?.data || error.message);
      }
    }
  };

  fetchBicicleta();

  // 🔁 Auto-refresco cuando el módulo Bicicleta guarda una sesión
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'bicicleta') fetchBicicleta();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);





const [caminar, setCaminar] = useState(null);

useEffect(() => {
  let cancel = false;

  const fetchCaminar = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/caminar/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ requerido por el middleware
      );
      if (cancel) return;
      const payload = Array.isArray(res.data) ? res.data[0] : res.data;
      setCaminar(payload ?? null);
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) setCaminar(null); // ✅ sin registros
        else console.error('Error al cargar caminar:', error.response?.data || error.message);
      }
    }
  };

  fetchCaminar();

  // 🔁 Auto-refresco cuando el módulo Caminar guarda una sesión
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'caminar') fetchCaminar();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);



const [nadar, setNadar] = useState(null);

useEffect(() => {
  let cancel = false;

  const fetchNadar = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/nadar/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ middleware
      );
      if (cancel) return;
      const payload = Array.isArray(res.data) ? res.data[0] : res.data;
      setNadar(payload ?? null);
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) setNadar(null); // ✅ sin datos
        else console.error('Error al cargar nadar:', error.response?.data || error.message);
      }
    }
  };

  fetchNadar();

  // 🔁 Auto-refresco cuando el módulo Nadar guarda una sesión
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'nadar') fetchNadar();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);




const [boxeosaco, setBoxeoSaco] = useState(null);

useEffect(() => {
  let cancel = false;

  const fetchBoxeoSaco = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/boxeosaco/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ requerido por el middleware
      );
      if (cancel) return;
      const payload = Array.isArray(res.data) ? res.data[0] : res.data;
      setBoxeoSaco(payload ?? null);
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) setBoxeoSaco(null); // ✅ sin registros
        else console.error('Error al cargar boxeosaco:', error.response?.data || error.message);
      }
    }
  };

  fetchBoxeoSaco();

  // 🔁 Auto-refresco cuando el módulo BoxeoSaco guarda una sesión
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'boxeosaco') fetchBoxeoSaco();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);




const [totalCalorias, setTotalCalorias] = useState(0);
const [anchorElCalorias, setAnchorElCalorias] = useState(null);

const abrirMenuCalorias = (event) => {
  setAnchorElCalorias(event.currentTarget);
};
const objetivoCalorias = 2200; // meta diaria

useEffect(() => {
  let cancel = false;

  const fetchCalorias = async () => {
    try {
      const usuario_id = localStorage.getItem("usuario_id");
      if (!usuario_id) return;

      const fecha = new Date().toLocaleDateString("en-CA");

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/registroalimentos/dia/${usuario_id}`,
        {
          params: { fecha },
        }
      );

      console.log("📦 RESPUESTA REGISTRO ALIMENTOS:", res.data);

      const registros = Array.isArray(res.data) ? res.data : [];

      // ➕ SUMA REAL DE CALORÍAS (SIN FILTROS EXTRA)
      const total = registros.reduce((sumComidas, comida) => {
        const alimentos = Array.isArray(comida.alimentos) ? comida.alimentos : [];

        const sumaComida = alimentos.reduce((sum, al) => {
          const cals = Number(al.calorias) || 0;
          const qty = Number(al.cantidad) || 1;
          return sum + cals * qty;
        }, 0);

        return sumComidas + sumaComida;
      }, 0);
      
      
      console.log("🔥 TOTAL CALCULADO:", total);


      if (!cancel) setTotalCalorias(total);
    } catch (err) {
      console.error(
        "Error al obtener calorías:",
        err?.response?.data || err.message
      );
    }
  };

  fetchCalorias();

  const onUpdate = () => fetchCalorias();
  window.addEventListener("alimentos:actualizado", onUpdate);

  const onVisible = () => {
    if (document.visibilityState === "visible") fetchCalorias();
  };
  document.addEventListener("visibilitychange", onVisible);

  return () => {
    cancel = true;
    window.removeEventListener("alimentos:actualizado", onUpdate);
    document.removeEventListener("visibilitychange", onVisible);
  };
}, []);

const porcentajeCalorias = Math.min(
  100,
  ((Number(totalCalorias) || 0) / objetivoCalorias) * 100
).toFixed(1);


const porcentajeBase = Math.min(
  ((Number(totalCalorias) || 0) / objetivoCalorias) * 100,
  100
);

const excesoCalorias = Math.max(
  (Number(totalCalorias) || 0) - objetivoCalorias,
  0
);

// Progreso visual del exceso (máx 100% para no romper la UI)
const porcentajeExceso = Math.min(
  (excesoCalorias / objetivoCalorias) * 100,
  100
);





const [totalesMacros, setTotalesMacros] = useState({
  proteinas: 0,
  grasas: 0,
  carbohidratos: 0,
  fibra: 0,
});

const [anchorElMacros, setAnchorElMacros] = useState(null);

const abrirMenuMacros = (event) => {
  setAnchorElMacros(event.currentTarget);
};


useEffect(() => {
  let cancel = false;

  const fetchTotales = async () => {
    try {
      const usuario_id = localStorage.getItem("usuario_id");
      if (!usuario_id) return;

      // 🔑 fecha LOCAL segura
      const fecha = new Date().toLocaleDateString("en-CA");

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/registroalimentos/dia/${usuario_id}`,
        {
          params: { fecha },
          headers: { "user-id": usuario_id },
        }
      );

      const registros = Array.isArray(res.data) ? res.data : [];

      const totales = registros.reduce(
        (acc, comida) => {
          const alimentos = Array.isArray(comida.alimentos) ? comida.alimentos : [];

          alimentos.forEach((al) => {
            const qty = Number(al.cantidad) || 1;
            acc.proteinas     += (Number(al.proteinas)     || 0) * qty;
            acc.grasas        += (Number(al.grasas)        || 0) * qty;
            acc.carbohidratos += (Number(al.carbohidratos) || 0) * qty;
            acc.fibra         += (Number(al.fibra)         || 0) * qty;
          });

          return acc;
        },
        { proteinas: 0, grasas: 0, carbohidratos: 0, fibra: 0 }
      );

      if (!cancel) setTotalesMacros(totales);
    } catch (err) {
      console.error("Error obteniendo macronutrientes:", err?.response?.data || err.message);
      if (!cancel) {
        setTotalesMacros({ proteinas: 0, grasas: 0, carbohidratos: 0, fibra: 0 });
      }
    }
  };

  fetchTotales();

  // 🔁 Auto-refresh cuando agregas alimentos
  const onUpdate = () => fetchTotales();
  window.addEventListener("alimentos:actualizado", onUpdate);

  // 🔁 Al volver a la pestaña
  const onVisible = () => {
    if (document.visibilityState === "visible") fetchTotales();
  };
  document.addEventListener("visibilitychange", onVisible);

  return () => {
    cancel = true;
    window.removeEventListener("alimentos:actualizado", onUpdate);
    document.removeEventListener("visibilitychange", onVisible);
  };
}, []);





const [farmacos, setFarmacos] = useState(null);

useEffect(() => {
  let cancel = false;

  const fetchFarmacos = async () => {
    const usuario_id = localStorage.getItem("usuario_id");
    if (!usuario_id) return; // sin sesión

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/farmacos/${usuario_id}`,
        { headers: { "user-id": usuario_id } } // ✅ si tu middleware lo exige
      );

      if (!cancel) {
        // Soporta ambas formas: array o objeto
        const payload = Array.isArray(res.data) ? res.data : (res.data ?? null);
        setFarmacos(payload);
      }
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) {
          // ✅ no hay registros aún
          setFarmacos(null);
        } else {
          console.error("Error al cargar fármacos:", error.response?.data || error.message);
        }
      }
    }
  };

  fetchFarmacos();

  // 🔁 Auto-refresco al registrar desde el módulo de Fármacos
  const onNuevo = (e) => {
    // dispara un CustomEvent('farmaco:registrado', { detail: { tipo: 'farmacos' } })
    if (e.detail?.tipo === "farmacos") fetchFarmacos();
  };
  window.addEventListener("farmaco:registrado", onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener("farmaco:registrado", onNuevo);
  };
}, []);


const [menuAnchorHidratacion, setMenuAnchorHidratacion] = useState(null);

const abrirMenuHidratacion = (event) => {
  setMenuAnchorHidratacion(event.currentTarget);
};

const cerrarMenuHidratacion = () => {
  setMenuAnchorHidratacion(null);
};



// ✅ Derivados seguros para mostrar/ocultar
const tieneFarmacos = useMemo(() => {
  if (!farmacos) return false;
  return Array.isArray(farmacos) ? farmacos.length > 0 : true;
}, [farmacos]);

// Si quieres además conocer el último registro (opcional)
const ultimoFarmaco = useMemo(() => {
  if (Array.isArray(farmacos) && farmacos.length) {
    return farmacos.reduce((acc, cur) => {
      const fa = new Date(acc?.fecha ?? 0);
      const fc = new Date(cur?.fecha ?? 0);
      return fc > fa ? cur : acc;
    });
  }
  return farmacos; // si vino como objeto único
}, [farmacos]);





// Trata arrays como "sin datos" si están vacíos y toma el último item si vienen listas
const pickLastOrNull = (data) => {
  if (Array.isArray(data)) return data.length ? data[data.length - 1] : null;
  return data || null;
};

 

// Mide si hay al menos un ejercicio con datos reales
const hasData = (v) => {
  if (!v) return false;
  if (Array.isArray(v)) return v.length > 0;
  if (typeof v === 'object') return Object.keys(v).length > 0;
  return true;
};

const mostrarEjercicio = [
  elongacion,
  musculacion,
  correr,
  trote,
  sprint,
  bicicleta,
  caminar,
  nadar,
  boxeosaco,
].some(hasData);

// Helpers
function formatLocalDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
function asArray(x) {
  if (!x) return [];
  if (Array.isArray(x)) return x;
  if (typeof x === "string" && x.trim())
    return x.split(",").map((s) => s.trim()).filter(Boolean);
  return [];
}

// Estado para el visor del calendario en Dashboard
const [selectedDateDash, setSelectedDateDash] = useState(new Date());
const [listaDiaDash, setListaDiaDash] = useState([]);
const [loadingDiaDash, setLoadingDiaDash] = useState(false);
const [agendaOpenDash, setAgendaOpenDash] = useState(false);
const fechaStrDash = useMemo(() => formatLocalDate(selectedDateDash), [selectedDateDash]);

// GET: fármacos del día (mismo endpoint/headers que el formulario)
const cargarFarmacosDiaDash = async (date) => {
  const API = process.env.REACT_APP_API_URL;
  const usuario_id = localStorage.getItem("usuario_id");
  const token = localStorage.getItem("token"); // si usas JWT

  if (!API || !usuario_id) { setListaDiaDash([]); return []; }
  const fecha = formatLocalDate(date);

  try {
    setLoadingDiaDash(true);
    const resp = await axios.get(
      `${API}/api/farmacos/agenda/${usuario_id}`,
      {
        params: { fecha, _: Date.now() }, // evita 304 por caché
        headers: {
          "user-id": usuario_id,
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        // withCredentials: true, // si autenticas por cookie
      }
    );
    const arr = Array.isArray(resp.data) ? resp.data : [];
    setListaDiaDash(arr);
    return arr;
  } catch (err) {
    console.error("Dashboard agenda error:", err?.response?.status, err?.response?.data || err.message);
    setListaDiaDash([]);
    return [];
  } finally {
    setLoadingDiaDash(false);
  }
};

// Click en día del calendario del Dashboard
const handleClickDayDash = async (date) => {
  setSelectedDateDash(date);
  await cargarFarmacosDiaDash(date);
  setAgendaOpenDash(true);
};

  

return (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <SecondaryBar />
    <TertiaryBar />

    <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: { xs: 'column', md: 'row' } }}>
      <Box sx={{ flex: 1, padding: '2rem' }}>
        {/* Texto de bienvenida arriba */}
        <Typography className="titulo3" sx={{ fontSize: '3rem', fontWeight: 700, marginBottom: 4, marginTop: 4 }}>
          Bienvenido a tu panel de FitMind 🏃🥗🧑‍⚕️
        </Typography>

        <Typography
          paragraph
          className="parrafo1"
          sx={{
            fontSize: '2rem',
            marginLeft: { xs: 0, md: '5rem' },
            width: { xs: '100%', md: '79rem' },
            marginBottom: '5rem'
          }}>

          Bienvenido a FitMind, tu compañero integral para un estilo de vida saludable.
          Aquí podrás seguir tu nutrición, hidratación, controlar tus calorías, tus signos vitales, mejorar tu bienestar mental, y mas,
          todo en un solo lugar. ¡Comienza hoy a cuidar de ti!
        </Typography>

        {/* Recuadros organizados en fila */}
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: 1,
          }}
        >
          {/* Ejercicio */}
{mostrarEjercicio && (
  <Paper
    elevation={3}
    sx={{
      padding: 3,
      borderRadius: 3,
      marginBottom: 3,
      textAlign: 'center',
      height: 'auto',
      width: { xs: '100%', sm: '40rem', md: '35rem' },
      maxWidth: '100%',
      position: "relative"

    }}
  >

    {/* Botón 3 puntos */}
<IconButton
  disableRipple
  disableFocusRipple
  onMouseDown={(e) => e.preventDefault()}
  onClick={(e) => {
    e.stopPropagation();
    abrirMenuEjercicio(e);
  }}
  sx={{
    position: "absolute",
    top: 7,
    right: -150,

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



    <Typography className="parrafo2" sx={{ fontSize: '2.4rem', fontWeight: 650, textAlign: 'center' }}>
      🏃 <Link   to="/ejercicio"  >  Ejercicio </Link>
    </Typography>


    {/* Elongación */}
{elongacion?.tiempo && elongacion?.fecha && (
  <Box sx={{ marginTop: 2 }}>
    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#2980b9' }}>
      🧘 Última sesión de Elongación
    </Typography>
    <Typography sx={{ fontSize: '1.3rem' }}>
     <strong> ⏱️ Tiempo realizado: </strong> {Math.floor(elongacion.tiempo / 60)} min {elongacion.tiempo % 60} seg
    </Typography>
    <Typography sx={{ fontSize: '1.3rem' }}>
      <strong> 🔥 Calorías quemadas: </strong> {elongacion.calorias} kcal
    </Typography>
    <Typography sx={{ fontSize: '1.3rem' }}>
      <strong> 📅 Fecha: </strong>  {new Date(elongacion.fecha).toLocaleString()}
    </Typography>
  </Box>
)}



    {/* Musculación */}
    {musculacion && (
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3, fontSize: '1.5rem', color: '#2980b9'  }}>
          🏋️ Última sesión de Musculación
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong> ⏱️ Tiempo realizado: </strong> {Math.floor(musculacion.tiempo / 60)} min {musculacion.tiempo % 60} seg
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
         <strong> 🔥 Calorías quemadas: </strong> {musculacion.calorias} kcal
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong> 📅 Fecha: </strong> {new Date(musculacion.fecha).toLocaleString()}
        </Typography>
      </Box>
    )}

    {/* Correr */}
    {correr && (
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#2980b9' }}>
          🏃 Última sesión de Correr
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong> ⏱️ Tiempo realizado: </strong> {Math.floor(correr.tiempo / 60)} min {correr.tiempo % 60} seg
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong> 🔥 Calorías quemadas: </strong> {correr.calorias} kcal
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
        <strong> 📅 Fecha: </strong> {new Date(correr.fecha).toLocaleString()}
        </Typography>
      </Box>
    )}

    {/* Trote */}
    {trote && (
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3, fontSize: '1.5rem', color: '#2980b9' }}>
          🏃 Última sesión de Trote
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
         <strong> ⏱️ Tiempo realizado: </strong> {Math.floor(trote.tiempo / 60)} min {trote.tiempo % 60} seg
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
         <strong> 🔥 Calorías quemadas: </strong>  {trote.calorias} kcal
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong> 📅 Fecha: </strong>  {new Date(trote.fecha).toLocaleString()}
        </Typography>
      </Box>
    )}

    {/* Sprint */}
    {sprint && (
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3, fontSize: '1.5rem', color: '#2980b9' }}>
          🏃 Última sesión de Sprint
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong>⏱️ Tiempo realizado: </strong> {Math.floor(sprint.tiempo / 60)} min {sprint.tiempo % 60} seg
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong> 🔥 Calorías quemadas: </strong> {sprint.calorias} kcal
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong> 📅 Fecha: </strong> {new Date(sprint.fecha).toLocaleString()}
        </Typography>
      </Box>
    )}

    {/* Bicicleta */}
    {bicicleta && (
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3, fontSize: '1.5rem', color: '#2980b9' }}>
          🚴 Última sesión de Bicicleta
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong> ⏱️ Tiempo realizado: </strong> {Math.floor(bicicleta.tiempo / 60)} min {bicicleta.tiempo % 60} seg
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong> 🔥 Calorías quemadas: </strong> {bicicleta.calorias} kcal
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong> 📅 Fecha: </strong> {new Date(bicicleta.fecha).toLocaleString()}
        </Typography>
      </Box>
    )}

    {/* Caminata */}
    {caminar && (
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3, fontSize: '1.5rem', color: '#2980b9' }}>
          🚶 Última sesión de Caminata
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong> ⏱️ Tiempo realizado: </strong> {Math.floor(caminar.tiempo / 60)} min {caminar.tiempo % 60} seg
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong> 🔥 Calorías quemadas: </strong> {caminar.calorias} kcal
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong> 📅 Fecha: </strong> {new Date(caminar.fecha).toLocaleString()}
        </Typography>
      </Box>
    )}

    {/* Natación */}
    {nadar && (
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3, fontSize: '1.5rem', color: '#2980b9' }}>
          🏊‍♂️ Última sesión de Natación
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong> ⏱️ Tiempo realizado: </strong> {Math.floor(nadar.tiempo / 60)} min {nadar.tiempo % 60} seg
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong> 🔥 Calorías quemadas: </strong> {nadar.calorias} kcal
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong> 📅 Fecha: </strong> {new Date(nadar.fecha).toLocaleString()}
        </Typography>
      </Box>
    )}

    {/* Boxeo de Saco */}
    {boxeosaco && (
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3, fontSize: '1.5rem', color: '#2980b9' }}>
          🥊 Última sesión de Boxeo de Saco
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong>⏱️ Tiempo realizado: </strong> {Math.floor(boxeosaco.tiempo / 60)} min {boxeosaco.tiempo % 60} seg
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong>🔥 Calorías quemadas: </strong> {boxeosaco.calorias} kcal
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          <strong>📅 Fecha: </strong> {new Date(boxeosaco.fecha).toLocaleString()}
        </Typography>
      </Box>
    )}
  </Paper>
)}

          {/* Hidratación y Sueño en columna */}
          <Box display="flex" flexDirection="column" gap={3} alignItems="center">

           {/* 🔥 Hidratación + Calorías en la misma fila */}
<Box
  display="flex"
  flexDirection={{ xs: "column", md: "row" }} // 📱 columna en móvil, 🖥️ fila en escritorio
  gap={3}
  justifyContent="center"
  alignItems="stretch"
>
  {/* Hidratación */}
  <Paper
    elevation={3}
    sx={{
      padding: 6.5,
      borderRadius: 3,
      height: "20rem",
      flex: 1,
      minWidth: { xs: "100%", md: "28rem" },
      textAlign: "center",
      marginBottom: "2rem",
      position: "relative"

    }}
  >

  {/* Botón 3 puntos */}
  <IconButton
  disableRipple
  disableFocusRipple
  onMouseDown={(e) => e.preventDefault()} // 👈 CLAVE FINAL
  onClick={(e) => {
    e.stopPropagation();
    abrirMenuHidratacion(e);
  }}
  sx={{
    position: "absolute",
    top: 12,
    right: -145,

    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",

    "&::before": {
      content: '""',
      position: "absolute",
      width: "30px",
      height: "49px",
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
  <MoreVertIcon sx={{ fontSize: "2.6rem" }} />
</IconButton>




    <Typography
      component={Link}
      to="/hidratacion"
      className="parrafo222"
      sx={{ fontSize: "2.6rem",  marginTop: '-4rem',   fontWeight: 650,  }}
    >
      💧 Hidratación
    </Typography>
    <Typography className="parrafo3" sx={{ fontSize: "1.6rem" }}>
      <strong>{totalHidratacion} ml</strong> ingeridos
    </Typography>
    <LinearProgress
      variant="determinate"
      value={porcentaje}
      sx={{ height: 19, borderRadius: 6, marginTop: 1, marginBottom: '2rem' }}
    />
    <Typography
      variant="body2"
      sx={{ marginTop: 1, fontSize: "1.7rem", marginBottom: "-1rem" }} >
      {porcentaje}% del objetivo diario
    </Typography>
  </Paper>



  {/* Calorías */}
{(
  <Paper
  elevation={3}
  sx={{
    padding: 3,
    borderRadius: 3,

    minHeight: { xs: "auto", md: "20rem" }, // 👈 CLAVE
    height: "auto",

    flex: 1,
    minWidth: { xs: "100%", md: "34rem" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "-2rem",
    position: "relative",
  }}
>


  {/* Botón 3 puntos */}
<IconButton
  disableRipple
  disableFocusRipple
  onMouseDown={(e) => e.preventDefault()}
  onClick={(e) => {
    e.stopPropagation();
    abrirMenuCalorias(e);
  }}
  sx={{
    position: "absolute",
    top: 8,
    right: -150,

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


    <Typography
      sx={{
        fontSize: "2.4rem",
        fontWeight: 650,
        textAlign: "center",
        color: "#2980b9",
      }}
    >
      🍽️ Calorías
    </Typography>

    <Typography
      sx={{
        fontSize: "1.7rem",
        textAlign: "center",
        marginTop: "0.5rem",
        fontWeight: 600,
      }}
    >
      <span style={{ fontWeight: "700" }}>Calorías Totales Hoy:</span>{" "}
      <span style={{ fontWeight: "normal" }}>{totalCalorias} kcal</span>
    </Typography>
    

    <Box
  sx={{
    position: "relative",
    width: "90%",
    marginTop: 2,
    marginBottom: "1.7rem",
    height: "30px",
    backgroundColor: "#eee",
    borderRadius: 6,
    overflow: "hidden",
  }}
>
  {/* Barra azul (objetivo) */}
  <Box
    sx={{
      height: "100%",
      width: `${porcentajeBase}%`,
      backgroundColor: "#2980b9",
      transition: "width 0.4s ease",
    }}
  />

  {/* Barra roja (exceso, encima) */}
  {excesoCalorias > 0 && (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: `${porcentajeExceso}%`,
        backgroundColor: "#e74c3c",
        opacity: 0.85,
        transition: "width 0.4s ease",
      }}
    />
  )}
</Box>



    <Typography
      variant="body2"
      sx={{ marginTop: 1, fontSize: "1.4rem", textAlign: "center" }}
    >
      {porcentajeCalorias}% del objetivo diario ({objetivoCalorias} kcal)
    </Typography>
  </Paper>
)}
</Box>




{/* 🔥 Sueño y Macronutrientes en la misma fila */}
<Box 
  display="flex" 
  flexDirection={{ xs: "column", md: "row" }} 
  gap={3} 
  justifyContent="center" 
  alignItems="stretch"
  marginTop={3}
>
  

{/* Macronutrientes */}
{totalesMacros.proteinas > 0 && (
  <Paper
    elevation={3}
    sx={{
      padding: 3,
      borderRadius: 3,
      width: { xs: '100%', sm: '25rem' },
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start', // que queden alineados a la izquierda
      position: "relative",
    }}
  >

    {/* Botón 3 puntos */}
<IconButton
  disableRipple
  disableFocusRipple
  onMouseDown={(e) => e.preventDefault()}
  onClick={(e) => {
    e.stopPropagation();
    abrirMenuMacros(e);
  }}
  sx={{
    position: "absolute",
    top: 4,
    right: -154,

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



    <Typography
      className="parrafo2"
      sx={{ fontSize: '2.2rem', fontWeight: 650, marginBottom: '1.4rem', textAlign: 'center', width: '100%' }}
    >
      🥗 Macronutrientes
    </Typography>

    <Typography className="parrafo3" sx={{ fontSize: '2rem', width: '100%' }}>
      <Typography component="span" sx={{ fontWeight: 700, textAlign: 'center',  fontSize: '1.6rem', display: 'block', marginBottom: 1 }}>
        Macronutrientes Totales Hoy:
      </Typography>

      {/* Cada macro en su propia línea */}
      <Typography component="div" sx={{ marginBottom: 0.5, textAlign: 'center', fontSize: '1.6rem',  }}>
        <strong> 🥩Proteinas: </strong> {totalesMacros.proteinas.toFixed(1)}g 
      </Typography>
      <Typography component="div" sx={{ marginBottom: 0.5, textAlign: 'center', fontSize: '1.6rem', }}>
        <strong> 🥑Grasas: </strong> {totalesMacros.grasas.toFixed(1)}g 
      </Typography>
      <Typography component="div" sx={{ marginBottom: 0.5, textAlign: 'center', fontSize: '1.6rem', }}>
         <strong> 🍚Carbohidratos: </strong> {totalesMacros.carbohidratos.toFixed(1)}g
      </Typography>
      <Typography component="div" sx={{ marginBottom: 0.5, textAlign: 'center', fontSize: '1.6rem', }}>
        <strong> 🥦Fibra: </strong> {totalesMacros.fibra.toFixed(1)}g
      </Typography>
    </Typography>
  </Paper>
)}

</Box>

</Box>
 



{signosVitales && ( // 🔥 Solo se muestra si hay datos
  <Paper elevation={3} sx={{ padding: 4, borderRadius: 3, height: 'auto',  width: { xs: '100%', sm: '28rem', md: '32rem' }, position: "relative", }}>
    
    {/* Botón 3 puntos */}
<IconButton
  disableRipple
  disableFocusRipple
  onMouseDown={(e) => e.preventDefault()}
  onClick={(e) => {
    e.stopPropagation();
    abrirMenuSignosVitales(e);
  }}
  sx={{
    position: "absolute",
    top: 8,
    right: -148,

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


    <Typography className="parrafo2" sx={{ fontSize: '2.2rem', fontWeight: 550, marginBottom: 2 }}>
      🩺 <Link to="/signosvitales" > Signos Vitales  </Link>            
    </Typography>
    <>
      <Typography className="parrafo31">
        <strong>🫀Frecuencia cardíaca:</strong> {signosVitales.frecuencia_cardiaca} lpm
      </Typography>
      <Typography className="parrafo31">
        <strong>🩸Presión arterial:</strong> {signosVitales.presion_arterial} mmhg
      </Typography>
      <Typography className="parrafo31">
        <strong>🌡️Temperatura:</strong> {signosVitales.temperatura} °C
      </Typography>
      <Typography className="parrafo31">
        <strong>🫁Saturación O₂:</strong> {signosVitales.saturacion_oxigeno}%
      </Typography>
      <Typography className="parrafo31">
        <strong>💨Frecuencia respiratoria:</strong> {signosVitales.frecuencia_respiratoria} rpm
      </Typography>
    </>
  </Paper>
)}





          {yoga && (   // 🔥 Solo si hay un registro de yoga aparece el módulo completo
  <Paper elevation={3} sx={{ padding: 3, borderRadius: 3, width: { xs: '100%', sm: '30rem' }, height: 'auto' }}>
    <Typography className="parrafo2" sx={{ fontSize: '2.4rem', fontWeight: 650 }}>
      🧠 Bienestar Mental
    </Typography>
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3, fontSize: '1.5rem', textAlign: 'center' }}>
        🧘‍♂️ Última sesión de Yoga
      </Typography>
      <Typography sx={{ fontSize: '1.3rem', textAlign: 'center' }}>
        ⏱️ Tiempo realizado: {Math.floor(yoga.tiempo / 60)} min {yoga.tiempo % 60} seg
      </Typography>
      <Typography sx={{ fontSize: '1.3rem', textAlign:'center' }}>
        🔥 Calorías quemadas: {yoga.calorias} kcal
      </Typography>
      <Typography sx={{ fontSize: '1.3rem', textAlign:'center' }}>
        📅 Fecha: {new Date(yoga.fecha).toLocaleString()}
      </Typography>
    </Box>
  </Paper>
)}




{/* Sueño */}
  <Paper elevation={3} sx={{ padding: 3, borderRadius: 3, flex: 1, minWidth: { xs: "100%", md: "20rem" }, textAlign: "center", width: { md: "10rem"  },  position: "relative"  }}>

    {/* Botón 3 puntos */}
  <IconButton
    disableRipple
    disableFocusRipple
    onMouseDown={(e) => e.preventDefault()}
    onClick={(e) => {
      e.stopPropagation();
      abrirMenuSueno(e); // 👈 función nueva (igual a hidratación)
    }}
    sx={{
      position: "absolute",
      top: 8,
      right: -147,

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

    <Typography className="parrafo21" sx={{ fontSize: "2.4rem", fontWeight: 650 }}>
      🛌 <Link to="/sueno" > Sueño  </Link>
    </Typography>
    {sueno ? (
      <>
        <Typography className="parrafo3" sx={{ fontSize: "1.7rem", marginTop: 2 }}>
          <strong>Fecha:</strong> {new Date(sueno.fecha).toLocaleDateString()}
        </Typography>
        <Typography className="parrafo3" sx={{ fontSize: "1.7rem" }}>
          <strong>Horas Dormidas:</strong> {sueno.horasDormidas} hrs
        </Typography>
        <Typography className="parrafo3" sx={{ fontSize: "1.7rem" }}>
          <strong>Calidad del Sueño:</strong> {sueno.calidad}
        </Typography>
        <Typography className="parrafo3" sx={{ fontSize: "1.7rem" }}>
          <strong>Comentarios:</strong> {sueno.comentarios || "Ninguno"}
        </Typography>
      </>
    ) : (
      <Typography className="parrafo3" sx={{ fontSize: "1.6rem", marginTop: 2 }}>
        Aún no hay registros de sueño.
      </Typography>
    )}
  </Paper>




{tieneFarmacos && (
  <Paper elevation={3} sx={{ padding: 5, borderRadius: 3, width: { xs: '100%', sm: '40rem' }, height: 'auto' }}>
    <Typography className="parrafo2" sx={{ fontSize: '2.4rem', fontWeight: 650, mb: '3rem' }}>
      📅 Registro Medicamentos
    </Typography>

    <section className="calendariofarmacos">
      <Calendar
        onClickDay={handleClickDayDash}
        onChange={setSelectedDateDash}
        value={selectedDateDash}
      />
    </section>
  </Paper>
)}


 <Dialog
      open={agendaOpenDash}
      onClose={() => setAgendaOpenDash(false)}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        Fármacos para el {fechaStrDash}
        <IconButton onClick={() => setAgendaOpenDash(false)} aria-label="cerrar">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        {loadingDiaDash ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
            <CircularProgress />
          </div>
        ) : listaDiaDash.length === 0 ? (
          <Alert severity="info">No hay fármacos para esta fecha.</Alert>
        ) : (
          <List>
            {listaDiaDash.map((f, i) => {
              const horas = asArray(f.horas);
              return (
                <ListItem key={i} alignItems="flex-start" sx={{ py: 1 }}>
                  <ListItemText
                    primary={<strong>{f.farmaco}</strong>}
                    secondary={
                      <>
                        {f.dosis ? `${f.dosis} — ` : ''}{f.frecuencia || 'Frecuencia no especificada'}<br/>
                        Horas: {horas.join(', ')}
                        {f.notas ? (<><br/><em>{f.notas}</em></>) : null}
                      </>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        )}
      </DialogContent>
    </Dialog>

        </Box>
      </Box>

      <Box>
        <Sidebar />
      </Box>
    </Box>
  </Box>
);

};

export default Dashboard;


