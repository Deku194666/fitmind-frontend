import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import "./Fasting.css";
import axios from "axios";
import NavBarFasting from "./NavBarFasting";

const Fasting = () => {

  const [isFasting, setIsFasting] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [ultimoAyuno, setUltimoAyuno] = useState(null);

  /* ===============================
     🔁 RESTAURAR AYUNO
  =============================== */

  useEffect(() => {
    const savedStart = localStorage.getItem("fastingStart");

    if (savedStart) {
      const parsedStart = Number(savedStart);
      setStartTime(parsedStart);
      setIsFasting(true);
      setElapsedTime(Date.now() - parsedStart);
    }
  }, []);



  /* ===================================
   🔥 OBTENER ÚLTIMO AYUNO
=================================== */



  useEffect(() => {

  const cargarUltimoAyuno = async () => {

    const usuario_id = localStorage.getItem("usuario_id");
    if (!usuario_id) return;

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/fasting/ultimo/${usuario_id}`,
        {
          headers: { "user-id": usuario_id }
        }
      );

      setUltimoAyuno(response.data);

    } catch (error) {
      console.error("Error cargando último ayuno:", error.message);
    }
  };

  cargarUltimoAyuno();

}, []);

  /* ===============================
     ⏱ CRONÓMETRO
  =============================== */

  useEffect(() => {
    let interval;

    if (isFasting && startTime) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isFasting, startTime]);

  /* ===============================
     ▶ INICIAR
  =============================== */

  const startFasting = () => {
    const now = Date.now();
    localStorage.setItem("fastingStart", now);
    setStartTime(now);
    setElapsedTime(0);
    setIsFasting(true);
  };

  /* ===============================
     ⛔ FINALIZAR + GUARDAR BD
  =============================== */

  const stopFasting = async () => {

    if (!startTime) return;

    const usuario_id = localStorage.getItem("usuario_id");

    if (!usuario_id) {
      alert("Usuario no autenticado");
      return;
    }

    const endTime = Date.now();
    const durationMs = endTime - startTime;
    const durationHours = durationMs / (1000 * 60 * 60);

    try {

  // ✅ Guardar en fasting (el original)
  await axios.post(
    `${process.env.REACT_APP_API_URL}/api/fasting/guardar`,
    {
      usuarioId: usuario_id,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      duration: durationHours
    },
    {
      headers: { "user-id": usuario_id }
    }
  );

  // 🔥 NUEVO → guardar también en historial
  await axios.post(
    `${process.env.REACT_APP_API_URL}/api/historialFasting/guardar`,
    {
      usuarioId: usuario_id,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      duration: durationHours
    },
    {
      headers: { "user-id": usuario_id }
    }
  );

  alert("✅ Ayuno registrado con éxito");

} catch (error) {
  console.error("❌ Error al guardar ayuno:", error.response?.data || error.message);
  alert("Error al guardar en la base de datos");
  return;
}
    localStorage.removeItem("fastingStart");
    setIsFasting(false);
    setStartTime(null);
    setElapsedTime(0);
  };

  /* ===============================
     ⏰ FORMATO TIEMPO
  =============================== */

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  /* ===============================
     🎨 UI
  =============================== */

 return (

  <>

  <NavBarFasting />

  <Box className="fasting-container">

    {/* 🔵 TITULO */}
    <Typography className="fasting-title">
      Ayuno Intermitente
    </Typography>

    {/* 🔘 TOGGLE INFO */}
    <div style={{ width: "100%", marginBottom: "2rem" }}>
      <button
        onClick={() => setMostrarInfo(!mostrarInfo)}
        style={{
          backgroundColor: "#2980b9",
          color: "#fff",
          padding: "0.6rem 1.5rem",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1.2rem"
        }}
      >
        {mostrarInfo ? "Ocultar información" : "ℹ️ ¿Qué es el ayuno?"}
      </button>

      {mostrarInfo && (
        <div style={{
          marginTop: "1.5rem",
          padding: "1.5rem",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          textAlign: "justify"
        }}>
          <h3 style={{ color: "#2980b9", textAlign: "center" }}>
            🧠 ¿Qué es este módulo?
          </h3>

          <p style={{ fontSize: "1.3rem", lineHeight: "1.6" }}>
            Este módulo permite registrar el tiempo que permaneces en ayuno.
            Mientras el cronómetro está activo puedes monitorear tu progreso
            y al finalizar se guarda automáticamente en tu historial.
          </p>

          <p style={{ marginTop: "1rem", fontSize: "1.3rem" }}>
            💡 Consejo: Mantente hidratado y evita ayunos extremos sin supervisión médica.
          </p>
        </div>
      )}
    </div>

    {/* 🔴 WARNING (TU ADVERTENCIA ORIGINAL — RESTAURADA) */}
    <Box className="fasting-warning">
      <Typography className="warning-text">
        ⚠️ No recomendado para menores de edad, personas embarazadas,
        con trastornos alimenticios o condiciones médicas sin supervisión profesional.
      </Typography>
    </Box>

    {/* 🔵 ESTADO */}
    <Typography className="fasting-status">
      {isFasting ? "Ayuno en progreso" : "No hay ayuno activo"}
    </Typography>

    {/* ⏱ CRONÓMETRO */}
    {isFasting && (
      <>
        <Typography className="fasting-timer">
          {formatTime(elapsedTime)}
        </Typography>

        {startTime && (
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "#777",
              marginBottom: "1.5rem"
            }}
          >
            Iniciado el{" "}
            {new Date(startTime).toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })}{" "}
            a las{" "}
            {new Date(startTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit"
            })}
          </Typography>
        )}
      </>
    )}

    {/* 🔘 BOTONES */}
    {!isFasting ? (
      <Button variant="contained" onClick={startFasting}>
        Iniciar Ayuno
      </Button>
    ) : (
      <Button variant="contained" color="error" onClick={stopFasting}>
        Finalizar Ayuno
      </Button>
    )}


    {ultimoAyuno && (
  <Box
    sx={{
      marginTop: "2rem",
      padding: "1.5rem",
      backgroundColor: "#f5f7fa",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
    }}
  >
    <Typography sx={{ fontWeight: "600", marginBottom: "0.5rem" }}>
      📊 Último ayuno registrado
    </Typography>

    <Typography sx={{ fontSize: "0.9rem", color: "#555" }}>
      Duración: {ultimoAyuno.duration.toFixed(2)} horas
    </Typography>

    <Typography sx={{ fontSize: "0.9rem", color: "#555" }}>
      Finalizado el{" "}
      {new Date(ultimoAyuno.endTime).toLocaleDateString("es-ES")}
    </Typography>
  </Box>
)}

    {/* 🟢 RECOMENDACIONES */}
    <Box className="fasting-tips">
      <Typography className="tips-title">
        Recomendaciones:
      </Typography>

      <ul className="listaextra">
        <li>Mantente hidratado 💧</li>
        <li>Evita ayunos prolongados</li>
        <li>Escucha tu cuerpo</li>
        <li>Rompe el ayuno con alimentos nutritivos</li>
      </ul>
    </Box>

  </Box>
  </>
 );
};

export default Fasting;