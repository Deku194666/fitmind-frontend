// src/components/FastingCalendar.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Button } from "@mui/material";
import "./FastingCalendar.css"; // Crear CSS aparte o reutilizar estilos

export default function FastingCalendar() {
  const [fecha, setFecha] = useState("");
  const [registros, setRegistros] = useState([]);
  const [mensaje, setMensaje] = useState("");

  // 🔥 SCROLL AL INICIO
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // =========================
  // 🔍 BUSCAR REGISTROS POR DÍA
  // =========================
  const buscarRegistro = async () => {
    if (!fecha) return;

    const usuario_id = localStorage.getItem("usuario_id");
    if (!usuario_id) {
      setMensaje("Usuario no autenticado");
      return;
    }

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/historialFasting/dia/${usuario_id}`,
        {
          params: { fecha },
          headers: { "user-id": usuario_id },
        }
      );

      if (!res.data || res.data.length === 0) {
        setRegistros([]);
        setMensaje("No hay registros de ayuno este día");
      } else {
        setRegistros(res.data);
        setMensaje("");
      }
    } catch (error) {
      console.error("Error cargando ayunos:", error);
      setMensaje("Error al cargar los registros");
    }
  };

  // =========================
  // 🔢 FORMATO HORAS
  // =========================
  const msAHoras = (ms) => (ms / (1000 * 60 * 60)).toFixed(2);

  // =========================
  // 🔹 RENDER
  // =========================
  return (
    <Box className="fasting-calendar-container">
      <Typography variant="h3" sx={{ marginBottom: 3 }}>
        📅 Historial de Ayuno
      </Typography>

      {/* SELECTOR DE FECHA */}
      <Box className="calendar-selector">
        <Typography>Selecciona un día:</Typography>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <Button variant="contained" onClick={buscarRegistro} sx={{ ml: 2 }}>
          Ver registros
        </Button>
      </Box>

      {mensaje && (
        <Typography sx={{ marginTop: 2, color: "red" }}>{mensaje}</Typography>
      )}

      {/* LISTA DE AYUNOS */}
      {registros.length > 0 && (
        <Box className="registros-list" sx={{ marginTop: 3 }}>
          {registros.map((r) => (
            <Box
              key={r._id}
              sx={{
                padding: 2,
                marginBottom: 2,
                backgroundColor: "#f5f7fa",
                borderRadius: 2,
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              }}
            >
              <Typography>
                ⏰ Inicio:{" "}
                {new Date(r.startTime).toLocaleTimeString("es-CL", {
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "America/Santiago"
                })}
              </Typography>
              <Typography>
                ⏰ Fin:{" "}
                {new Date(r.endTime).toLocaleTimeString("es-CL", {
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "America/Santiago"
                })}
              </Typography>
              <Typography>
                📏 Duración: {msAHoras(r.duration)} horas
              </Typography>
              <Typography>
                📅 Fecha:{" "}
                {new Date(r.startTime).toLocaleDateString("es-ES")}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}