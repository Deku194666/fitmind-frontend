

// TerminosServicio.jsx
import React from "react";
import './TerminosServicio.css';

export default function TerminosServicio() {
  return (
    <div className="fxh-page terms-page">
      <h1 className="fxh-title fxh-mb-5">Términos de Servicio</h1>

      <section className="fxh-section fxh-mb-4">
        <h2 className="fxh-subtitle fxh-mb-2">1. Aceptación de términos</h2>
        <p>
          Al usar FitMind, aceptas cumplir con estos términos de servicio. Si no estás de acuerdo, por favor no uses la aplicación.
        </p>
      </section>

      <section className="fxh-section fxh-mb-4">
        <h2 className="fxh-subtitle fxh-mb-2">2. Registro de usuario</h2>
        <p>
          Para acceder a ciertas funciones, debes registrarte con información veraz y completa. Eres responsable de mantener la confidencialidad de tu cuenta.
        </p>
      </section>

      <section className="fxh-section fxh-mb-4">
        <h2 className="fxh-subtitle fxh-mb-2">3. Uso permitido</h2>
        <ul className="fxh-list">
          <li>No usar la app para actividades ilegales o fraudulentas.</li>
          <li>No interferir con el funcionamiento de FitMind.</li>
          <li>No recolectar datos de otros usuarios sin permiso.</li>
        </ul>
      </section>

      <section className="fxh-section fxh-mb-4">
        <h2 className="fxh-subtitle fxh-mb-2">4. Contenido del usuario</h2>
        <p>
          Todo contenido que generes (notas, registros, comentarios) sigue siendo tuyo, pero FitMind puede usarlo de manera anónima para mejorar servicios.
        </p>
      </section>

      <section className="fxh-section fxh-mb-4">
        <h2 className="fxh-subtitle fxh-mb-2">5. Modificaciones</h2>
        <p>
          FitMind puede actualizar estos términos en cualquier momento. Los cambios se notifican en la app o vía correo electrónico.
        </p>
      </section>

      <section className="fxh-section fxh-mb-4">
        <h2 className="fxh-subtitle fxh-mb-2">6. Limitación de responsabilidad</h2>
        <p>
          FitMind no se hace responsable por daños derivados del uso de la app, pérdida de datos o recomendaciones inexactas.
        </p>
      </section>

      <footer className="fxh-footer fxh-mt-6">
        <p>&copy; 2026 FitMind. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}