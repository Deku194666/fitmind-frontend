import React from "react";
import "./SkincarePresentacion.css";
import { motion } from "framer-motion";
import { Sparkles, Droplets, Calendar, LineChart } from "lucide-react";
import NavBarSkincarePresentacion from "./NavBarSkincarePresentacion";

export default function SkincarePresentacion() {
  return (
    <>

    <NavBarSkincarePresentacion   />
    <div className="fxh-wrapper skincare-presentacion">
      <div className="fxh-container skincare-container">
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fxh-section skincare-hero"
        >
          <div className="skincare-icon">
            <Sparkles size={40} />
          </div>

          <h1 className="fxh-title">SkinCare Module</h1>
          <p className="fxh-subtitle">
            Controla tu rutina facial, construye hábitos saludables y mejora tu
            piel como parte de tu bienestar integral en FitMind.
          </p>

          <div className="skincare-actions">
            <button className="fxh-btn fxh-btn-primary">
              Comenzar seguimiento
            </button>
            <button className="fxh-btn fxh-btn-outline">
              Ver cómo funciona
            </button>
          </div>
        </motion.section>

        {/* FEATURES */}
        <section className="fxh-section skincare-features">
          <div className="fxh-grid skincare-grid">
            <div className="fxh-card skincare-card">
              <Droplets size={28} />
              <h3>Rutina diaria</h3>
              <p>
                Registra limpieza, hidratación, protector solar y tratamientos
                mañana y noche.
              </p>
            </div>

            <div className="fxh-card skincare-card">
              <Calendar size={28} />
              <h3>Calendario inteligente</h3>
              <p>
                Visualiza tu constancia y detecta patrones en el cuidado de tu
                piel.
              </p>
            </div>

            <div className="fxh-card skincare-card">
              <LineChart size={28} />
              <h3>Seguimiento del estado</h3>
              <p>
                Evalúa hidratación, irritación y brotes para medir tu progreso.
              </p>
            </div>

            <div className="fxh-card skincare-card">
              <Sparkles size={28} />
              <h3>Salud integral</h3>
              <p>
                Conecta tu piel con sueño, hidratación y bienestar general.
              </p>
            </div>
          </div>
        </section>

        {/* VISION */}
        <section className="fxh-section skincare-vision">
          <div className="fxh-card skincare-vision-card">
            <h2>Tu piel también es salud mental y física</h2>
            <p>
              El cuidado de la piel no es solo estética. Es constancia,
              disciplina y equilibrio interno. Este módulo está diseñado para
              ayudarte a crear hábitos sólidos y detectar patrones que impactan
              directamente en tu bienestar.
            </p>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
