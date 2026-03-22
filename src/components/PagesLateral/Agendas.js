import React, { useEffect } from "react";
import './Agendas.css';
import NavBarAgendas from "./BarNavAgendas";

export default function Agendas() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll al top
  }, []);

  return (
    <div className="containe">
        <NavBarAgendas/>

        {/* Hero / Encabezado */}
        <div className="hero">
            <h1 className="title">Módulo de Agendas 📅</h1>
            <p className="description">
                Organiza tu día a día, tus finanzas y tus pendientes de manera sencilla y eficiente. 
                Aquí encontrarás tres tipos de agendas para cubrir todas tus necesidades.
            </p>
        </div>

        {/* Sección de tarjetas */}
        <div className="cards">
            <div className="card">
                <h2 className="card-title">Agenda Común</h2>
                <p className="card-text">
                    Registra tus citas, reuniones y pendientes diarios. Mantente al día con tu agenda personal.
                </p>
            </div>

            <div className="card">
                <h2 className="card-title economic-title">Agenda Económica</h2>
                <p className="card-text">
                    Controla tus ingresos, gastos y finanzas personales. Gestiona tu economía de manera práctica.
                </p>
            </div>

            <div className="card">
                <h2 className="card-title pending-title">Gestión de Pendientes</h2>
                <p className="card-text">
                    Organiza tus tareas y proyectos. Prioriza lo importante y cumple tus objetivos.
                </p>
            </div>
        </div>
    </div>
  );
}