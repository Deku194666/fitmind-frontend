import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./SkincareDashboard.css";
import axios from "axios";

export default function SkincareDashboard() {

  const getDateKey = (date) =>
    new Date(date).toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  /* =====================================================
     🔥 CARGAR DATOS DESDE BACKEND
  ===================================================== */

  const fetchLogs = async () => {

    const usuario_id = localStorage.getItem("usuario_id");
    if (!usuario_id) return;

    try {

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/skincare/${usuario_id}`,
        {
          headers: { "user-id": usuario_id }
        }
      );

      if (!res.data) return;

      const parsed = res.data.map(log => ({
        ...log,
        date: new Date(log.date),
        dateKey: getDateKey(new Date(log.date))
      }));

      setLogs(parsed);
      setLoading(false);

    } catch (err) {
      console.error("Error cargando skincare:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  useEffect(() => {
    localStorage.setItem("skincare_logs", JSON.stringify(logs));
  }, [logs]);

  const getLogByDate = (date) => {
    const key = getDateKey(date);
    return logs.find(log => getDateKey(log.date) === key);
  };

  /* =====================================================
     🔥 GUARDAR
  ===================================================== */

  const saveLog = async (newLog) => {

    const usuario_id = localStorage.getItem("usuario_id");
    if (!usuario_id) {
      alert("Usuario no autenticado");
      return;
    }

    const key = getDateKey(newLog.date);

    const logWithKey = {
      ...newLog,
      usuario_id,
      dateKey: key
    };

    try {

      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/skincare`,
        logWithKey,
        {
          headers: { "user-id": usuario_id }
        }
      );

      await fetchLogs();

    } catch (error) {
      console.error("Error guardando:", error);
    }
  };

  /* =====================================================
     🔥 RENDER PRINCIPAL
  ===================================================== */

  return (
    <div className="fxh-wrapper skincare-dashboard">
      <div className="fxh-container skincare-container">

        <h1 className="fxh-title">
          SkinCare Diario
        </h1>

        <div className="fxh-card skincare-calendar-card">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={({ date }) => {
              const log = getLogByDate(date);
              return log ? "day-with-log" : null;
            }}
          />
        </div>

        <DayPanel
          selectedDate={selectedDate}
          getLogByDate={getLogByDate}
          saveLog={saveLog}
          loading={loading}
        />

      </div>
    </div>
  );
}

/* =====================================================
   🔥 PANEL DEL DIA
===================================================== */

function DayPanel({
  selectedDate,
  getLogByDate,
  saveLog,
  loading
}) {

  const existingLog = getLogByDate(selectedDate);

  return (
    <div className="fxh-card skincare-panel-card">

      <h2>
        {selectedDate.toLocaleDateString("es-ES", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        })}
      </h2>

      <TodayRegistration
        selectedDate={selectedDate}
        existingLog={existingLog}
        saveLog={saveLog}
        loading={loading}
      />

    </div>
  );
}

/* =====================================================
   🔥 FORMULARIO COMPLETO (TU FORMULARIO ORIGINAL)
===================================================== */

function TodayRegistration({
  selectedDate,
  existingLog,
  saveLog,
  loading
}) {

  const defaultMorning = {
    cleanser: false,
    moisturizer: false,
    sunscreen: false,
    treatment: false
  };

  const defaultNight = {
    cleanser: false,
    moisturizer: false,
    treatment: false
  };

  const defaultSkin = {
    hydration: 5,
    irritation: 5,
    acne: 5
  };

  const [morning, setMorning] = useState(defaultMorning);
  const [night, setNight] = useState(defaultNight);
  const [skinState, setSkinState] = useState(defaultSkin);
  const [notes, setNotes] = useState("");


  /* =========================
   🔥 TRADUCCIONES
========================= */

const labelsMorning = {
  cleanser: "Limpieza",
  moisturizer: "Hidratante",
  sunscreen: "Protector Solar",
  treatment: "Tratamiento"
};

const labelsNight = {
  cleanser: "Limpieza",
  moisturizer: "Hidratante",
  treatment: "Tratamiento"
};

const labelsSkin = {
  hydration: "Hidratación",
  irritation: "Irritación",
  acne: "Brotes"
};

  /* =========================
     CARGAR DATOS EXISTENTES
  ========================= */

  useEffect(() => {

    if (existingLog) {
      setMorning(existingLog.morning || defaultMorning);
      setNight(existingLog.night || defaultNight);
      setSkinState(existingLog.skinState || defaultSkin);
      setNotes(existingLog.notes || "");
    } else {
      setMorning(defaultMorning);
      setNight(defaultNight);
      setSkinState(defaultSkin);
      setNotes("");
    }

  }, [existingLog]);

  const handleSubmit = () => {

    const log = {
      date: selectedDate,
      morning,
      night,
      skinState,
      notes
    };

    saveLog(log);
  };

  if (loading) {
    return <div className="fxh-loading">Cargando datos...</div>;
  }

  /* =========================
     🔥 TU FORMULARIO COMPLETO
  ========================= */

  return (
    <div className="skincare-form">

      <div className="skincare-routines">
        <div className="skincare-column">
          <h3>Rutina Mañana ☀️</h3>

          {Object.keys(morning).map((key) => (
            <label key={labelsMorning[key]}>
              <input
                type="checkbox"
                checked={morning[key]}
                onChange={() =>
                  setMorning({
                    ...morning,
                    [key]: !morning[key]
                  })
                }
              />
              {labelsMorning[key]}
            </label>
          ))}

        </div>

        <div className="skincare-column">
          <h3>Rutina Noche 🌙</h3>

          {Object.keys(night).map((key) => (
            <label key={labelsNight[key]}>
              <input
                type="checkbox"
                checked={night[key]}
                onChange={() =>
                  setNight({
                    ...night,
                    [key]: !night[key]
                  })
                }
              />
              {labelsNight[key]}
            </label>
          ))}

        </div>
      </div>

      <div className="skincare-sliders">
        <h3>Estado de la piel</h3>

        {Object.keys(skinState).map((key) => (
          <label key={key}>
            {labelsSkin[key]}: {skinState[key]}
            <input
              type="range"
              min="1"
              max="10"
              value={skinState[key]}
              onChange={(e) =>
                setSkinState({
                  ...skinState,
                  [key]: Number(e.target.value)
                })
              }
            />
          </label>
        ))}

      </div>

      <div className="skincare-notes">
        <h3>Notas</h3>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Observaciones del día..."
        />
      </div>

      <button
        className="fxh-btn fxh-btn-primary"
        onClick={handleSubmit}
      >
        Guardar Registro
      </button>

    </div>
  );
}