import React, { useEffect } from "react";
import './AgendaComun.css';
import BarNavAgendaComun from "./BarNavAgendaComun";

export default function AgendaComun() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="containerr">
      <BarNavAgendaComun />

      {/* Hero / Encabezado */}
      <div className="row center mb-6">
        <div className="col col-8 text-center">
          <h1 className="title">Agenda Común 🗓️</h1>
          <p className="text mt-2">
            Bienvenido a tu Agenda Común. Aquí podrás organizar tu día a día anotando tus citas, reuniones, pendientes y todo lo que necesites recordar.  
            Mantente al día con tus tareas y lleva un control claro de tu rutina diaria.
          </p>
        </div>
      </div>

      {/* Tarjeta de información */}
      <div className="row center">
        <div className="col col-6 card">
          <h2 className="subtitle">📌 Qué podrás hacer</h2>
          <ol className="list mt-2">
            <li>Anotar citas y reuniones diarias</li>
            <li>Registrar pendientes importantes</li>
            <li>Organizar tareas por fecha</li>
            <li>Llevar un control rápido de tu agenda personal</li>
        </ol>
    </div>
</div>

</div>
  );
}