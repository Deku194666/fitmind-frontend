import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MisHabitos.css';

function MisHabitos() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date()); // 🔥 FIX CLAVE
  const [progress, setProgress] = useState({});
  const [habitos, setHabitos] = useState([]);
  const [newHabitName, setNewHabitName] = useState("");
  const [newHabitFrequency, setNewHabitFrequency] = useState(1);

  const API_URL = process.env.REACT_APP_API_URL;
  const usuario_id = localStorage.getItem("usuario_id");

  const formatDate = (date) => date.toISOString().split("T")[0];

  const handleDayClick = (value) => {
    setSelectedDate(value);
  };

  // 🔹 Cargar hábitos
  useEffect(() => {
    if (!usuario_id) return;

    const fetchHabits = async () => {
      try {
        const response = await fetch(`${API_URL}/api/habits?usuario_id=${usuario_id}`);
        const data = await response.json();

        const normalized = data.map(h => ({
          _id: h._id,
          name: h.name || h.nombre || h.habitName || "Sin nombre",
          frequency: h.frequencyPerDay || 1
        }));

        setHabitos(normalized);
      } catch (error) {
        console.error("Error cargando hábitos:", error);
      }
    };

    fetchHabits();
  }, [usuario_id]);

  // 🔹 Agregar hábito
  const handleAddHabit = async () => {
    if (!newHabitName.trim() || newHabitFrequency < 1 || !usuario_id) return;

    try {
      const res = await fetch(`${API_URL}/api/habits`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
        name: newHabitName,
        frequencyPerDay: newHabitFrequency,
        usuario_id: usuario_id
      }),
  });

      const data = await res.json();
      const raw = data.habit || data;

      const habit = {
        _id: raw._id,
        name: raw.name || raw.nombre || newHabitName,
        frequency: raw.frequencyPerDay || newHabitFrequency
      };

      setHabitos(prev => [...prev, habit]);
      setNewHabitName("");
      setNewHabitFrequency(1);
    } catch (error) {
      console.error("Error creando hábito:", error);
    }
  };

  // 🔹 Incrementar
  const handleIncrement = async (habitId, frequency) => {
  if (!selectedDate || !usuario_id) return;

  const dateKey = formatDate(selectedDate);

  setProgress(prev => {
    const dayData = prev[dateKey] || {};
    const current = dayData[habitId] || 0;

    if (current >= frequency) return prev;

    const newValue = current + 1;

    // 🔥 GUARDAR EN BACKEND
    fetch(`${API_URL}/api/habits/log`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        habitId,
        completed: newValue,
        usuario_id
      }),
    });

    return {
      ...prev,
      [dateKey]: {
        ...dayData,
        [habitId]: newValue
      }
    };
  });
};




  // 🔹 Decrementar
  const handleDecrement = async (habitId) => {
  if (!selectedDate || !usuario_id) return;

  const dateKey = formatDate(selectedDate);

  setProgress(prev => {
    const dayData = prev[dateKey] || {};
    const current = dayData[habitId] || 0;

    if (current <= 0) return prev;

    const newValue = current - 1;

    // 🔥 GUARDAR EN BACKEND
    fetch(`${API_URL}/api/habits/log`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        habitId,
        completed: newValue,
        usuario_id
      }),
    });

    return {
      ...prev,
      [dateKey]: {
        ...dayData,
        [habitId]: newValue
      }
    };
  });
};


useEffect(() => {
  if (!usuario_id || !selectedDate) return;

  const fetchLogs = async () => {
    const dateKey = formatDate(selectedDate);

    try {
      const res = await fetch(
        `${API_URL}/api/habits/log/${dateKey}?usuario_id=${usuario_id}`
      );
      const data = await res.json();

      const newProgress = {};

      data.forEach(log => {
        newProgress[log.habitId] = log.completed;
      });

      setProgress(prev => ({
        ...prev,
        [dateKey]: newProgress
      }));

    } catch (error) {
      console.error("Error cargando logs:", error);
    }
  };

  fetchLogs();
}, [selectedDate, usuario_id]);
  




  const calculateCount = (habit) => {
    const dateKey = formatDate(selectedDate);
    const dayData = progress[dateKey] || {};
    return Math.min(dayData[habit._id] || 0, habit.frequency);
  };

  const totalProgress = () => {
    const dateKey = formatDate(selectedDate);
    const dayData = progress[dateKey] || {};

    const totalRequired = habitos.reduce((sum, h) => sum + h.frequency, 0);
    const totalDone = habitos.reduce(
      (sum, h) => sum + Math.min(dayData[h._id] || 0, h.frequency),
      0
    );

    return totalRequired ? Math.round((totalDone / totalRequired) * 100) : 0;
  };

  return (
    <div className="mis-habitos-container">

      <h2 className="mis-habitos-title">Mis Hábitos</h2>


      {/* 🔥 CALENDARIO CONTROLADO */}
      <div className="calendar-wrapper">
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={handleDayClick}
        />
      </div>

      {/* 🔥 FORMULARIO */}
      <div className="nuevo-habito">
        <input
          type="text"
          placeholder="Nombre del hábito"
          value={newHabitName}
          onChange={e => setNewHabitName(e.target.value)}
        />

        <input
          type="number"
          min={1}
          value={newHabitFrequency}
          onChange={e => setNewHabitFrequency(Number(e.target.value))}
        />

        

        <button onClick={handleAddHabit}>
          Agregar
        </button>
      </div>

      

      {/* 🔥 PROGRESO */}
      <div className="progreso-total">
        <span>Progreso del día: {totalProgress()}%</span>
        <div className="barra-externa">
          <div
            className="barra-interna"
            style={{ width: `${totalProgress()}%` }}
          />
        </div>
      </div>

      {/* 🔥 LISTA */}
      <div className="habitos-lista">
        {habitos.map(habit => {
          const count = calculateCount(habit);
          const completo = count >= habit.frequency;

          return (
            <div key={habit._id} className={`habito-item ${completo ? "completo" : ""}`}>
              <div className="habito-nombre">{habit.name}</div>

              <div className="habito-controles">
                <button
                  className="boton boton-menos"
                  onClick={() => handleDecrement(habit._id)}
                >-</button>

                <span className="habito-contador">
                  {count} / {habit.frequency}
                </span>

                <button
                  className="boton boton-mas"
                  onClick={() => handleIncrement(habit._id, habit.frequency)}
                >+</button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default MisHabitos;