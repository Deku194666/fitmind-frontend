import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FarmacosFascia.css';

function FarmacosFascia() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail87">

      <p className="fxh-title">
        Fármacos para Lesiones de la Fascia
      </p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las lesiones de la fascia, como la fasciopatía plantar, son afecciones dolorosas
        frecuentes que afectan la biomecánica del aparato locomotor. Aunque el tratamiento
        principal es físico y biomecánico, existen opciones farmacológicas coadyuvantes
        para aliviar el dolor e inflamación, especialmente en fases agudas.
      </p>

      <p className="fxh-subtitle">🧪 Mecanismo de Acción</p>
      <ul className="fxh-list">
        <li>Inhibición de mediadores inflamatorios (prostaglandinas, citocinas).</li>
        <li>Modulación central y periférica del dolor.</li>
        <li>Estimulación de procesos regenerativos (suplementos coadyuvantes).</li>
      </ul>

      <p className="fxh-subtitle">📋 Indicaciones Principales</p>
      <ul className="fxh-list">
        <li>Fasciopatía plantar (fascitis plantar crónica o aguda)</li>
        <li>Dolor miofascial</li>
        <li>Fasciosis con degeneración del tejido fascial</li>
        <li>Inflamación secundaria por sobrecarga biomecánica</li>
      </ul>

      <p className="fxh-subtitle">💊 Ejemplos Comunes</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis habitual</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/farmacos/farmacos2/ibuprofeno" className="fxh-link">
                  Ibuprofeno
                </Link>
              </td>
              <td>400–600 mg cada 8 h</td>
              <td>AINE</td>
            </tr>
            <tr>
              <td>Paracetamol</td>
              <td>500–1000 mg cada 6–8 h</td>
              <td>Analgésico</td>
            </tr>
            <tr>
              <td>Corticoide (infiltración local)</td>
              <td>Dosis única o repetida bajo criterio</td>
              <td>Antiinflamatorio potente</td>
            </tr>
            <tr>
              <td>Suplementos con colágeno + vitamina C</td>
              <td>Dosis diaria oral</td>
              <td>Coadyuvante regenerativo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">⚠️ Efectos Adversos</p>
      <ul className="fxh-list">
        <li>Irritación gástrica (por AINEs)</li>
        <li>Toxicidad hepática con paracetamol en dosis altas</li>
        <li>Atrofia tisular o ruptura fascial con corticoides infiltrados repetidamente</li>
        <li>Intolerancia digestiva o alergias a suplementos</li>
      </ul>

      <p className="fxh-subtitle">🔄 Contraindicaciones</p>
      <ul className="fxh-list">
        <li>Úlcera péptica activa (AINEs)</li>
        <li>Insuficiencia hepática (paracetamol)</li>
        <li>Infección local activa (contraindicada infiltración)</li>
        <li>Hipersensibilidad a alguno de los componentes</li>
      </ul>

      <p className="fxh-subtitle">📉 Interacciones Relevantes</p>
      <ul className="fxh-list">
        <li>Con anticoagulantes (riesgo de sangrado con AINEs)</li>
        <li>Con otros hepatotóxicos (potencial toxicidad con paracetamol)</li>
        <li>Con corticosteroides orales (sumatoria de efectos inmunosupresores)</li>
      </ul>

      <p className="fxh-subtitle">📚 Recomendaciones Clínicas</p>
      <ul className="fxh-list">
        <li>Utilizar farmacoterapia como complemento a fisioterapia</li>
        <li>Reservar infiltraciones para casos rebeldes al tratamiento conservador</li>
        <li>Revisar siempre la causa biomecánica y modificar calzado o soporte plantar si es necesario</li>
        <li>Valorar uso de ortesis nocturnas y ejercicios de elongación</li>
      </ul>

    </div>
  );
}

export default FarmacosFascia;
