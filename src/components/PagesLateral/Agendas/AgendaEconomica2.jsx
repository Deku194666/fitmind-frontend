import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AgendaEconomica2.css";

const AgendaEconomica2 = () => {
  console.log("API URL:", process.env.REACT_APP_API_URL);
  const [selectedDate, setSelectedDate] = useState(null);
  const [transactions, setTransactions] = useState({}); // Para guardar ingresos/gastos por día
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState(null);
  const [formData, setFormData] = useState({
    monto: "",
    categoria: "",
    descripcion: ""
  });


  const fetchMovimientos = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/movimientos`
    );

    const data = await response.json();

    if (data.ok) {
      const agrupados = {};

      data.data.forEach((mov) => {
        const dateKey = new Date(mov.fecha)
        .toLocaleDateString("sv-SE");

        if (!agrupados[dateKey]) {
          agrupados[dateKey] = [];
        }

        agrupados[dateKey].push({
          type: mov.tipo,
          amount: mov.monto,
          categoria: mov.categoria,
          descripcion: mov.descripcion,
          _id: mov._id
        });
      });

      setTransactions(agrupados);
    }

  } catch (error) {
    console.error("Error cargando movimientos:", error);
  }
};


// 🔥 2️⃣ DESPUÉS el useEffect
  useEffect(() => {
    fetchMovimientos();
  }, []);


  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const openForm = (type) => {
  setFormType(type);
  setShowForm(true);
};

const closeForm = () => {
  setShowForm(false);
  setFormData({
    monto: "",
    categoria: "",
    descripcion: ""
  });
};

const handleDelete = (index) => {
  const dateKey = selectedDate.toLocaleDateString("sv-SE");

  setTransactions((prev) => {
    const updated = [...prev[dateKey]];
    updated.splice(index, 1);

    return {
      ...prev,
      [dateKey]: updated
    };
  });
};


const handleSaveTransaction = async () => {
  if (!formData.monto || !selectedDate) return;

  const movimiento = {
    tipo: formType,
    categoria: formData.categoria,
    monto: Number(formData.monto),
    descripcion: formData.descripcion,
    fecha: selectedDate.toISOString()
  };

  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/movimientos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(movimiento)
      }
    );

    const data = await response.json();

    if (data.ok) {
      console.log("✅ Guardado en Mongo:", data);

      // 🔥 ACTUALIZAMOS EL STATE LOCAL PARA QUE SE VEA INMEDIATAMENTE
      const dateKey = selectedDate.toLocaleDateString("sv-SE");

      setTransactions((prev) => {
        const dayTrans = prev[dateKey] || [];

        return {
          ...prev,
          [dateKey]: [
            ...dayTrans,
            {
              type: formType,
              amount: Number(formData.monto),
              categoria: formData.categoria,
              descripcion: formData.descripcion
            }
          ]
        };
      });

    } else {
      console.error("❌ Error backend:", data.message);
    }

  } catch (error) {
    console.error("🔥 Error de conexión:", error);
  }

  closeForm();
};


   const dateKey = selectedDate
  ? selectedDate.toLocaleDateString("sv-SE")
  : null;
  const dayTransactions = transactions[dateKey] || [];
  const totalIncome = dayTransactions
    .filter((t) => t.type === "Ingreso")
    .reduce((acc, t) => acc + t.amount, 0);
  const totalExpense = dayTransactions
    .filter((t) => t.type === "Gasto")
    .reduce((acc, t) => acc + t.amount, 0);
  const balance = totalIncome - totalExpense;

  return (
    <div className="fxh-agenda">
      {/* CALENDARIO */}
      <div className="fxh-agenda__calendar">
        <Calendar
          onClickDay={handleDateClick}
          className="fxh-calendar-real"
          locale="es-ES"
        />
      </div>

      {/* PANEL DE DÍA */}
      {selectedDate && (
        <div className="fxh-agenda__panel">
          <div className="fxh-panel__header">
            <h2>
              {selectedDate.toLocaleDateString("es-ES", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h2>
            <button
              className="fxh-close"
              onClick={() => setSelectedDate(null)}
            >
              ✕
            </button>
          </div>

          <div className="fxh-panel__content">

            <button
              className="fxh-btn fxh-btn--income"
              onClick={() => openForm("Ingreso")}> 

              + Agregar Ingreso

            </button>

            <button
              className="fxh-btn fxh-btn--expense"
              onClick={() => openForm("Gasto")}>

              + Agregar Gasto
              
            </button>


            {showForm && (
  <div className="fxh-form">
    <h3>{formType}</h3>

    <input
      type="number"
      placeholder="Monto"
      value={formData.monto}
      onChange={(e) =>
        setFormData({ ...formData, monto: e.target.value })
      }
    />

    <input
      type="text"
      placeholder="Categoría"
      value={formData.categoria}
      onChange={(e) =>
        setFormData({ ...formData, categoria: e.target.value })
      }
    />

    <textarea
      placeholder="Descripción"
      value={formData.descripcion}
      onChange={(e) =>
        setFormData({ ...formData, descripcion: e.target.value })
      }
    />

    <div className="fxh-form-buttons">
      <button onClick={handleSaveTransaction}>
        Guardar
      </button>
      <button onClick={closeForm}>
        Cancelar
      </button>
    </div>
  </div>
)}

            <div className="fxh-transactions">
              {dayTransactions.length === 0 ? (
                <p>No hay movimientos aún.</p>
              ) : (
                <>
                  {dayTransactions.map((t, i) => (
  <div
    key={i}
    className={`fxh-card ${
      t.type === "Ingreso"
        ? "fxh-card--income"
        : "fxh-card--expense"
    }`}
  >
    <div className="fxh-card__top">
      <span className="fxh-card__type">{t.type}</span>
      <span className="fxh-card__amount">
        ${t.amount.toLocaleString()}
      </span>
    </div>

    {t.categoria && (
      <div className="fxh-card__category">
        🏷 {t.categoria}
      </div>
    )}

    {t.descripcion && (
      <div className="fxh-card__description">
        📝 {t.descripcion}
      </div>
    )}

    <button
      className="fxh-card__delete"
      onClick={() => handleDelete(i)}
    >
      🗑
    </button>
  </div>
))}
                  <hr />
                  <p>Total Ingreso: {totalIncome}</p>
                  <p>Total Gasto: {totalExpense}</p>
                  <p>Balance: {balance}</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgendaEconomica2;