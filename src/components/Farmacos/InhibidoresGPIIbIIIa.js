import React, { useEffect } from "react";
import "./InhibidoresGPIIbIIIa.css";

function InhibidoresGPIIbIIIa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail74">

      <h1 className="fxh-title">
        Inhibidores de la Glicoproteína IIb/IIIa
      </h1>

      <h2 className="fxh-subtitle">📌 Introducción</h2>
      <p className="fxh-text">
        Los <strong>Inhibidores de la Glicoproteína IIb/IIIa</strong> son potentes agentes antiagregantes plaquetarios utilizados en situaciones clínicas
        de alto riesgo trombótico, especialmente en el contexto de <strong>síndrome coronario agudo</strong> e <strong>intervenciones coronarias percutáneas (ICP)</strong>.
        Actúan bloqueando el receptor final común de la agregación plaquetaria.
      </p>

      <h2 className="fxh-subtitle">🔬 Mecanismo de Acción</h2>
      <p className="fxh-text">
        La glicoproteína IIb/IIIa es el receptor que permite la unión cruzada de fibrinógeno entre plaquetas activadas.
        Su bloqueo impide la <strong>fase final de la agregación plaquetaria</strong>, proporcionando una potente inhibición de la trombosis arterial.
      </p>

      <h2 className="fxh-subtitle">💊 Fármacos Representativos</h2>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Tipo</th>
              <th>Observaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abciximab</td>
              <td>Anticuerpo monoclonal</td>
              <td>Bloqueo irreversible. Vida media prolongada. Puede generar trombocitopenia.</td>
            </tr>
            <tr>
              <td>Eptifibatide</td>
              <td>Péptido sintético</td>
              <td>Acción reversible. Vida media corta. Requiere infusión continua.</td>
            </tr>
            <tr>
              <td>Tirofiban</td>
              <td>Molécula no peptídica</td>
              <td>Acción reversible. Inicio rápido. Eliminación renal.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="fxh-subtitle">💡 Indicaciones Terapéuticas</h2>
      <ul className="fxh-list">
        <li>Intervención coronaria percutánea (ICP) de alto riesgo.</li>
        <li>Síndrome coronario agudo sin elevación del ST (NSTE-ACS).</li>
        <li>Trombosis intraprocedimiento durante ICP.</li>
      </ul>

      <h2 className="fxh-subtitle">⚠️ Efectos Adversos</h2>
      <ul className="fxh-list">
        <li>Hemorragias.</li>
        <li>Trombocitopenia.</li>
        <li>Reacciones alérgicas.</li>
        <li>Dolor en sitio de punción.</li>
      </ul>

      <h2 className="fxh-subtitle">🧠 Consideraciones Clínicas</h2>
      <ul className="fxh-list">
        <li>Administración exclusivamente intravenosa.</li>
        <li>Requieren monitoreo de plaquetas y función renal.</li>
        <li>Combinación frecuente con aspirina y heparina.</li>
        <li>Contraindicados en hemorragia activa.</li>
      </ul>

      <h2 className="fxh-subtitle">📚 Conclusión</h2>
      <p className="fxh-text">
        Son herramientas eficaces en el manejo de eventos trombóticos agudos,
        especialmente en contextos intervencionistas donde se requiere inhibición plaquetaria potente e inmediata.
      </p>

    </div>
  );
}

export default InhibidoresGPIIbIIIa;
