import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MisHabitos.css';
import { useEffect } from "react";

const habitosBase = [
  { name: "Lavar Dientes", frequency: 3 },
  { name: "Ejercicio diario", frequency: 1 },
  { name: "Elongar", frequency: 1 },
  { name: "Ejercicio de perineo", frequency: 1 },
  { name: "Leer libro", frequency: 1 },
  { name: "Movimiento grasa abdominal", frequency: 1 },
  { name: "Estudiar mis escritos", frequency: 1 },
  { name: "Estudiar mis finanzas", frequency: 1 },
  { name: "Tratamientos cara", frequency: 1 },
  { name: "Tratamientos kinésicos generales", frequency: 1 },
];

function MisHabitos() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [progress, setProgress] = useState({});
  const [habitos, setHabitos] = useState(habitosBase);
  
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
  const fetchHabitos = async () => {
    try {
      const response = await fetch(`${API_URL}/api/habits`);
      const data = await response.json();

      console.log("Respuesta backend hábitos:", data);

      // Si tu backend devuelve array directo:
      if (Array.isArray(data) && data.length > 0) {
        const adaptados = data.map(h => ({
          _id: h._id,
          name: h.name,
          frequency: h.frequencyPerDay
        }));
        setHabitos(adaptados);
      }

      // Si devuelve { ok: true, data: [...] }
      if (data.ok && data.data) {
        const adaptados = data.data.map(h => ({
          _id: h._id,
          name: h.name,
          frequency: h.frequencyPerDay
        }));
        setHabitos(adaptados);
      }

    } catch (error) {
      console.error("Error cargando hábitos:", error);
    }
  };

  fetchHabitos();
}, []);

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const handleDayClick = (value) => {
    console.log("CLICK DIA:", value);
    setSelectedDate(value);
  };

  const handleIncrement = async (habitId, frequency) => {
  if (!selectedDate) return;

  const dateKey = formatDate(selectedDate);

  setProgress((prev) => {
    const dayData = prev[dateKey] || {};
    const currentCount = dayData[habitId] || 0;

    if (currentCount >= frequency) return prev;

    const newCount = currentCount + 1;

    // 🔥 Guardar en backend
    fetch(`${API_URL}/api/habits/log`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        habitId,
        date: dateKey,
        completedCount: newCount,
      }),
    }).catch((err) => console.error("Error guardando log:", err));

    return {
      ...prev,
      [dateKey]: {
        ...dayData,
        [habitId]: newCount,
      },
    };
  });
};

  useEffect(() => {
  if (!selectedDate) return;

  const fetchLogs = async () => {
    const formattedDate = formatDate(selectedDate);

    try {
      const response = await fetch(
        `${API_URL}/api/habits/log/${formattedDate}`
      );

      const data = await response.json();

      console.log("Logs del día:", data);

      // Convertimos array de logs a objeto compatible con progress
      const dayProgress = {};

      data.forEach((log) => {
        dayProgress[log.habitId] = log.completedCount;
      });

      setProgress((prev) => ({
        ...prev,
        [formattedDate]: dayProgress,
      }));

    } catch (error) {
      console.error("Error cargando logs:", error);
    }
  };

  fetchLogs();

}, [selectedDate]);

  const handleDecrement = (habitId) => {
    const dateKey = formatDate(selectedDate);

    setProgress((prev) => {
      const dayData = prev[dateKey] || {};
      const currentCount = dayData[habitId] || 0;

      if (currentCount <= 0) return prev;

      return {
        ...prev,
        [dateKey]: {
          ...dayData,
          [habitId]: currentCount - 1,
        },
      };
    });
  };

  const calculateProgress = () => {
    if (!selectedDate) return 0;

    const dateKey = formatDate(selectedDate);
    const dayData = progress[dateKey] || {};

    const totalRequired = habitos.reduce(
      (sum, habito) => sum + habito.frequency,
      0
    );

    const totalCompleted = habitos.reduce(
      (sum, habito) => sum + (dayData[habito._id] || 0),
      0
    );

    return Math.round((totalCompleted / totalRequired) * 100);
  };

  const porcentaje = calculateProgress();


  console.log("PROGRESS STATE:", progress);

  return (
    <div className="mis-habitos-container">

      <p   className='mis-habitos-title'   >Mis Hábitos</p>

      <Calendar
        onChange={setDate}
        value={date}
        onClickDay={handleDayClick}
      />

      {selectedDate && (
        <div className="panel-dia">

          <h2>
            Hábitos del {selectedDate.toLocaleDateString()}
          </h2>

          {/* Barra de progreso */}
          <div className="progreso-container">
            <div className="progreso-info">
              <span>Progreso del día</span>
              <span>{porcentaje}%</span>
            </div>

            <div className="barra-externa">
              <div
                className="barra-interna"
                style={{ width: `${porcentaje}%` }}
              />
            </div>
          </div>

          {/* Lista de hábitos */}
          {habitos.map((habito, index) => {
            const dateKey = formatDate(selectedDate);
            const currentCount =
              progress[dateKey]?.[habito._id] || 0;

            const completo = currentCount >= habito.frequency;

            return (
              <div
                key={index}
                className={`habito-item ${completo ? "completo" : ""}`}
              >
                <div className="habito-nombre">
                  {habito.name}
                </div>

                <div className="habito-controles">

                  <button
                    className="boton boton-menos"
                    onClick={() =>
                      handleDecrement(habito._id)
                    }
                    disabled={currentCount === 0}
                  >
                    -
                  </button>

                  <span className="habito-contador">
                    {currentCount} / {habito.frequency}
                  </span>

                  <button
                    className="boton boton-mas"
                    onClick={() =>
                      handleIncrement(habito._id, habito.frequency)
                    }
                    disabled={completo}
                  >
                    +
                  </button>

                </div>
              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}

export default MisHabitos;