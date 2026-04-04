


import React from "react";
import "./DiarioEmocionesPresentacion.css";
import { motion } from "framer-motion";
import { Smile, Calendar, BookHeart, Brain } from "lucide-react";
import NavBarDiarioEmociones from "./NavBarDiarioEmociones";

export default function DiarioEmocionesPresentacion() {
  return (
    <>

    <NavBarDiarioEmociones/>
   

      <div className="fxh-wrapper emociones-presentacion">
        <div className="fxh-container emociones-container">

          {/* HERO */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fxh-section emociones-hero"
          >
            <div className="emociones-icon">
              <BookHeart size={40} />
            </div>

            <h1 className="fxh-title">Diario de Emociones</h1>

            <p className="fxh-subtitle">
              Un espacio para registrar cómo te sientes cada día.
              Observa tus emociones, comprende tus patrones
              y fortalece tu bienestar mental dentro de FitMind.
            </p>

            <div className="emociones-actions">
              <button className="fxh-btn fxh-btn-primary">
                Comenzar diario
              </button>

              <button className="fxh-btn fxh-btn-outline">
                Cómo funciona
              </button>
            </div>
          </motion.section>

          {/* FEATURES */}

          <section className="fxh-section emociones-features">
            <div className="fxh-grid emociones-grid">

              <div className="fxh-card emociones-card">
                <Smile size={28} />
                <h3>Registro emocional</h3>
                <p>
                  Anota cómo te sientes cada día y expresa tus emociones
                  en un espacio personal y seguro.
                </p>
              </div>

              <div className="fxh-card emociones-card">
                <Calendar size={28} />
                <h3>Calendario emocional</h3>
                <p>
                  Visualiza los días en los que registraste emociones
                  y revisa fácilmente tu historial.
                </p>
              </div>

              <div className="fxh-card emociones-card">
                <Brain size={28} />
                <h3>Autoconocimiento</h3>
                <p>
                  Comprender tus emociones te ayuda a identificar
                  patrones y mejorar tu bienestar mental.
                </p>
              </div>

              <div className="fxh-card emociones-card">
                <BookHeart size={28} />
                <h3>Reflexión personal</h3>
                <p>
                  Describe lo que sentiste en cada momento
                  y crea tu propio diario emocional.
                </p>
              </div>

            </div>
          </section>

          {/* VISION */}

          <section className="fxh-section emociones-vision">

            <div className="fxh-card emociones-vision-card">

              <h2>Tus emociones también son parte de tu salud</h2>

              <p>
                Comprender cómo te sientes es fundamental para tu bienestar.
                Este diario emocional te permitirá observar tus estados
                de ánimo a lo largo del tiempo, reflexionar sobre lo que
                vives y desarrollar una mayor conciencia emocional.
              </p>

            </div>

          </section>

        </div>
      </div>
    </>
  );
}