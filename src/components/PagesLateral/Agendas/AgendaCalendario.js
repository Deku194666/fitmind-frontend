import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AgendaCalendario.css";
import API from "../../../api";

export default function AgendaCalendario() {
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState({});
  const [input, setInput] = useState("");

  const formattedDate = date.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

useEffect(() => {
  const fetchNotes = async () => {
    try {
      const usuario_id = localStorage.getItem("usuario_id");
      if (!usuario_id) return;

      const response = await API.get(
        `/api/agendacalendario/${usuario_id}/${encodeURIComponent(formattedDate)}`
      );

      const notesArray = response.data.map((n) => n.text);

      setNotes((prev) => ({
        ...prev,
        [formattedDate]: notesArray,
      }));

    } catch (error) {
      console.error("Error cargando notas:", error);
    }
  };

  fetchNotes();
}, [formattedDate]);



  // 🔥 Guardar nueva nota
const handleAddNote = async () => {
  if (!input.trim()) return;

  try {
    const usuario_id = localStorage.getItem("usuario_id");
    if (!usuario_id) return;

    const response = await API.post("/api/agendacalendario", {
      usuario_id, // 🔥 CLAVE
      date: formattedDate,
      text: input,
    });

    const newNote = response.data;

    setNotes((prev) => ({
      ...prev,
      [formattedDate]: [
        ...(prev[formattedDate] || []),
        newNote.text,
      ],
    }));

    setInput("");

  } catch (error) {
    console.error("Error guardando nota:", error);
  }
};

  return (
    <div className="calendar-container">
      <h1 className="calendar-title">Agenda Diaria 📅</h1>

      <Calendar onChange={setDate} value={date} />

      <div className="notes-section">
        <h2 className="selected-date">
          Día seleccionado: {formattedDate}
        </h2>

        <div className="note-input">
          <input
            type="text"
            placeholder="Escribe tu nota..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAddNote}>
            Guardar
          </button>
        </div>

        <ul className="notes-list">
          {(notes[formattedDate] || []).map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}