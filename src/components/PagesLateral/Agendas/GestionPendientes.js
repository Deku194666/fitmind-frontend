import React, { useEffect } from "react";
import './GestionPendientes.css';
import BarNavAgendaGestionPendientes from "./BarNavGestionPendientes";

export default function GestionPendientes2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="containerr">
        < BarNavAgendaGestionPendientes />

      {/* Hero */}
      <div className="row">
        <div className="col col-8 hero">
          <h1 className="title">Gestión de Pendientes ✅</h1>
          <p className="text">
            Bienvenido a tu sección de Gestión de Pendientes. Aquí podrás anotar cualquier tarea
            que necesites realizar, organizar tus responsabilidades y llevar un control claro
            de lo que ya cumpliste y lo que aún está pendiente. Cumple tus objetivos paso a paso.
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="row">
        <div className="col col-6 card">
          <h2 className="subtitle">📌 Qué podrás hacer</h2>
          <ol className="list">
            <li>Anotar nuevas tareas pendientes</li>
            <li>Organizar tareas por prioridad o fecha</li>
            <li>Marcar tareas como completadas</li>
            <li>Visualizar pendientes activos y cumplidos</li>
            <li>Mantener control total de tus responsabilidades</li>
          </ol>
        </div>
      </div>

    </div>
  );
}