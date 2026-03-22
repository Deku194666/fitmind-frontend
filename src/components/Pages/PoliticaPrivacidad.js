

// PoliticasPrivacidad.jsx
import React from "react";
import './PoliticasPrivacidad.css';

export default function PoliticasPrivacidad() {
  return (
    <div className="fxh-page privacy-page">
      <h1 className="fxh-title fxh-mb-5">Políticas de Privacidad</h1>

      <section className="fxh-section fxh-mb-4">
        <h2 className="fxh-subtitle fxh-mb-2">1. Información que recopilamos</h2>
        <p>
          Recopilamos datos como nombre, correo, actividad física y hábitos de salud para personalizar la experiencia.
        </p>
      </section>

      <section className="fxh-section fxh-mb-4">
        <h2 className="fxh-subtitle fxh-mb-2">2. Uso de la información</h2>
        <ul className="fxh-list">
          <li>Personalizar recomendaciones de salud.</li>
          <li>Mejorar funciones y rendimiento de la app.</li>
          <li>Enviar notificaciones sobre novedades y cambios importantes.</li>
        </ul>
      </section>

      <section className="fxh-section fxh-mb-4">
        <h2 className="fxh-subtitle fxh-mb-2">3. Compartir datos</h2>
        <p>
          No compartimos información personal con terceros sin tu consentimiento, excepto cuando lo exige la ley.
        </p>
      </section>

      <section className="fxh-section fxh-mb-4">
        <h2 className="fxh-subtitle fxh-mb-2">4. Seguridad</h2>
        <p>
          Implementamos medidas de seguridad avanzadas para proteger tu información.
        </p>
      </section>

      <section className="fxh-section fxh-mb-4">
        <h2 className="fxh-subtitle fxh-mb-2">5. Derechos del usuario</h2>
        <ul className="fxh-list">
          <li>Acceder a tus datos personales.</li>
          <li>Solicitar correcciones o eliminación de información.</li>
          <li>Retirar tu consentimiento para el uso de datos.</li>
        </ul>
      </section>

      <footer className="fxh-footer fxh-mt-6">
        <p>&copy; 2026 FitMind. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}