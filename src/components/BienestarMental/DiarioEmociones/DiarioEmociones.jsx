// src/components/BienestarMental/DiarioEmociones/DiarioEmociones.jsx
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DiarioEmociones.css";
import { Plus } from "lucide-react";
import API from "../../../api"; // Ajusta según tu estructura de carpetas

export default function DiarioEmociones() {
  const [date, setDate] = useState(new Date());
  const [mostrarForm, setMostrarForm] = useState(false);
  const [emociones, setEmociones] = useState([]);
  const [formData, setFormData] = useState({
    sentimiento: "",
    emocion: "",
    descripcion: ""
  });

  const fechaSeleccionada = date.toISOString().split("T")[0];

  const emocionesDisponibles = [
    { emoji: "😀", nombre: "alegria" },
    { emoji: "😌", nombre: "calma" },
    { emoji: "😐", nombre: "neutral" },
    { emoji: "😢", nombre: "tristeza" },
    { emoji: "😡", nombre: "enojo" },
    { emoji: "😰", nombre: "ansiedad" }
  ];

  const emojiMap = {
    alegria: "😀",
    calma: "😌",
    neutral: "😐",
    tristeza: "😢",
    enojo: "😡",
    ansiedad: "😰"
  };

  // ==============================
  // Cargar todas las emociones al iniciar
  // ==============================
  useEffect(() => {
    const cargarTodasEmociones = async () => {
      try {
        const { data } = await API.get("/api/emociones"); // Trae todas
        setEmociones(data);
      } catch (err) {
        console.error("Error cargando emociones:", err.response?.data || err.message);
      }
    };
    cargarTodasEmociones();
  }, []);

  // ==============================
  // Filtrado local: emociones del día
  // ==============================
  const emocionesDelDia = emociones.filter((e) => e.fecha === fechaSeleccionada);

  // ==============================
  // Manejo de formulario
  // ==============================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const seleccionarEmocion = (emocion) => {
    setFormData({
      ...formData,
      emocion
    });
  };

  const guardarEmocion = async () => {
    try {
      const { data } = await API.post("/api/emociones", {
        sentimiento: formData.sentimiento,
        emocion: formData.emocion,
        descripcion: formData.descripcion,
        fecha: fechaSeleccionada
      });

      // Agregar la nueva emoción al estado sin borrar las anteriores
      setEmociones([...emociones, data]);
      setFormData({ sentimiento: "", emocion: "", descripcion: "" });
      setMostrarForm(false);
    } catch (err) {
      console.error("Error guardando emoción:", err.response?.data || err.message);
      alert("Error al guardar la emoción");
    }
  };

  // ==============================
  // Función para marcar días con registro
  // ==============================
  const tieneRegistro = (date) => {
    const d = date.toISOString().split("T")[0];
    return emociones.some((e) => e.fecha === d); // Usa todas las emociones
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // No sobrescribimos emociones, solo cambiamos la fecha seleccionada
  };

  // ==============================
  // Render
  // ==============================
  return (
    <div className="fxh-wrapper diario-emociones">
      <div className="fxh-container">
        <h1 className="fxh-title">Diario de emociones</h1>

        {/* Calendario */}
        <div className="calendario-container">
          <Calendar
            onChange={handleDateChange}
            value={date}
            tileContent={({ date }) =>
              tieneRegistro(date) ? <span className="dot"></span> : null
            }
          />
        </div>

        {/* Registros del día */}
        <div className="emociones-dia">
          <p className="title2">Registros del día</p>
          {emocionesDelDia.length === 0 && <p>No hay registros este día.</p>}
          {emocionesDelDia.map((e) => (
            <div key={e._id} className="emocion-card">
              <h3 className="emocion-titulo">
                {emojiMap[e.emocion]} {e.emocion}
              </h3>
              <p className="sentimiento">{e.sentimiento}</p>
              <p>{e.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Botón flotante */}
      <button className="boton12" onClick={() => setMostrarForm(true)}>
        <Plus size={20} />
      </button>

      {/* Modal */}
      {mostrarForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Registrar emoción</h2>
            <input
              name="sentimiento"
              placeholder="Hoy me siento..."
              value={formData.sentimiento}
              onChange={handleChange}
            />

            {/* Selector de emociones */}
            <div className="emocion-selector">
              {emocionesDisponibles.map((e) => (
                <button
                  key={e.nombre}
                  className={`emocion-btn ${
                    formData.emocion === e.nombre ? "activa" : ""
                  }`}
                  onClick={() => seleccionarEmocion(e.nombre)}
                >
                  {e.emoji}
                </button>
              ))}
            </div>

            <textarea
              name="descripcion"
              placeholder="Descripción"
              value={formData.descripcion}
              onChange={handleChange}
            />

            <div className="modal-buttons">
              <button className="fxh-btn fxh-btn-primary" onClick={guardarEmocion}>
                Guardar
              </button>
              <button
                className="fxh-btn fxh-btn-outline"
                onClick={() => setMostrarForm(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}