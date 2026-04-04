import { useState, useEffect } from "react";
import "./GestionPendientes2.css";

export default function GestionPendientes() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());

  console.log("usuario_id:", localStorage.getItem("usuario_id"));

 useEffect(() => {
  const usuario_id = localStorage.getItem("usuario_id");
  if (!usuario_id) return;

  fetch(`${process.env.REACT_APP_API_URL}/api/tasks/${usuario_id}`)
    .then(res => res.json())
    .then(data => setTasks(data))
    .catch(err => console.error("Error cargando tareas:", err));
}, []);

  // 🔹 AGREGAR TAREA (POST)
  
  const handleAdd = async () => {
  if (!newTask.trim()) return;

  try {
    const usuario_id = localStorage.getItem("usuario_id");
    if (!usuario_id) return;

    console.log("usuario_id POST:", usuario_id);

    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: newTask,
        status: "pending",
        usuario_id // 🔥 clave
      })
    });

    const data = await res.json();

    setTasks(prev => [data, ...prev]);
    setNewTask("");

  } catch (error) {
    console.error("Error agregando tarea:", error);
  }
};

  // 🔹 MARCAR COMO DONE (PUT)
  const handleDone = async (id) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          status: "done"
        })
      });

      const updatedTask = await res.json();

      setTasks(tasks.map(task =>
        task._id === id ? updatedTask : task
      ));

    } catch (error) {
      console.error("Error actualizando tarea:", error);
    }
  };

  const pending = tasks.filter(t => t.status === "pending");
  const done = tasks.filter(t => t.status === "done");

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  return (
    <div className="fxh-container">
      <h2 className="fxh-title">Gestión de Pendientes</h2>

      <div className="fxh-input-group">
        <input
  type="text"
  value={newTask}
  onChange={(e) => setNewTask(e.target.value)}
  placeholder="Escribe un pendiente..."
  className="fxh-input"
  style={{ 
    border: "2px solid red",
    position: "relative",
    zIndex: 9999
  }}
/>
        <button
          type="button"
          onClick={handleAdd}
          className="fxh-button"
        >
          Agregar
        </button>
      </div>

      <div className="fxh-section">
        <h3>Pendientes</h3>

        {pending.length === 0 && (
          <p className="fxh-empty">No hay pendientes activos 🎉</p>
        )}

        {pending.map(task => (
          <div key={task._id} className="fxh-item">
            <span>{task.title}</span>
            <button
              onClick={() => handleDone(task._id)}
              className="fxh-check"
            >
              ✔
            </button>
          </div>
        ))}
      </div>

      <div className="fxh-section">
        <h3>Listos / OK</h3>

        <div className="fxh-calendar">
          <div className="fxh-calendar-header">
            <button onClick={() => changeMonth(-1)}>←</button>
            <h3>
              {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric"
              })}
            </h3>
            <button onClick={() => changeMonth(1)}>→</button>
          </div>
        </div>

        {done.map(task => (
          <div key={task._id} className="fxh-item done">
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}