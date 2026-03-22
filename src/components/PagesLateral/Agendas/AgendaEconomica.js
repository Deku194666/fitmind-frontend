

import React, { useEffect } from "react";
import './AgendaEconomica.css';
import BarNavAgendaEconomica from "./BarNavAgendaEconomica";

export default function AgendaEconomica() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="containerr">
        <BarNavAgendaEconomica />      

      {/* Hero / Encabezado */}
      <div className="row center mb-6">
        <div className="col col-8 text-center">
          <h1 className="title">Agenda Económica 💰</h1>
          <p className="text mt-2">
            Bienvenido a tu Agenda Económica. Aquí podrás registrar tus ingresos y gastos diarios,
            llevar un control detallado de tus movimientos financieros y analizar cuánto gastas
            por día, semana y mes. Con esta información podrás mejorar tu organización y fortalecer
            tu economía personal.
          </p>
        </div>
      </div>

      {/* Tarjeta de información */}
      <div className="row center">
        <div className="col col-6 card">
          <h2 className="subtitle">📊 Qué podrás hacer</h2>
          <ol className="list mt-2">
            <li>Registrar ingresos diarios</li>
            <li>Anotar gastos y categorías</li>
            <li>Calcular totales diarios, semanales y mensuales</li>
            <li>Visualizar en qué estás gastando tu dinero</li>
            <li>Mejorar tu planificación financiera personal</li>
          </ol>
        </div>
      </div>

    </div>
  );
}