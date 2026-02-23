import React, { useEffect } from 'react';
import './TrasOtrasCondiciones.css';
import NavBarTrasOtrasCond from './NavBarTrasOtrasCond';

function TrasOtrasCondiciones() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <NavBarTrasOtrasCond />

      <p className="fxh-title">Otras Condiciones Clínicas Relevantes</p>

      <p className="fxh-subsubtitle">📌 Introducción</p>
      <p className="fxh-text">
        Existen diversas condiciones psicológicas que requieren abordajes específicos y basados en evidencia.
        Estas afectan significativamente la calidad de vida y el funcionamiento diario,
        pero con las herramientas adecuadas pueden manejarse efectivamente.
      </p>

      {/* ================= TEPT ================= */}

      <p className="fxh-subtitle">📌 Trastorno de Estrés Postraumático (TEPT)</p>
      <p className="fxh-text">
        Afecta aproximadamente al <strong>3.5% de la población adulta</strong>.
        Se caracteriza por síntomas intrusivos, evitación y alteraciones en la reactividad
        tras experimentar un evento traumático.
      </p>

      <p className="fxh-text"><strong>EMDR Básico:</strong></p>
      <ul className="fxh-list">
        <li>
          <strong>Protocolo simplificado:</strong>
          <ul className="fxh-list-nested">
            <li>Identificar recuerdo traumático específico</li>
            <li>Movimientos oculares laterales (2-3 series de 30 segundos)</li>
            <li>Reevaluación de angustia (0-10)</li>
          </ul>
        </li>
        <li>
          <strong>Ejercicio práctico:</strong>
          <ul className="fxh-list-nested">
            <li>Seguir un punto con la mirada</li>
            <li>20 movimientos por serie</li>
            <li>3 series con pausas</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-text"><strong>Narrativa Terapéutica:</strong></p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Técnica</th>
              <th>Objetivo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estabilización</td>
              <td>Línea de vida</td>
              <td>Contextualizar el trauma</td>
            </tr>
            <tr>
              <td>Elaboración</td>
              <td>Reescritura alternativa</td>
              <td>Empoderamiento</td>
            </tr>
            <tr>
              <td>Integración</td>
              <td>Carta al yo pasado</td>
              <td>Cierre simbólico</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================= TLP ================= */}

      <p className="fxh-subtitle">📌 Trastorno Límite de Personalidad (TLP)</p>
      <p className="fxh-text">
        Afecta aproximadamente al <strong>1.6% de la población</strong>.
        Se caracteriza por inestabilidad emocional,
        relaciones intensas y conductas impulsivas.
      </p>

      <p className="fxh-text"><strong>Regulación Emocional (DBT):</strong></p>
      <ul className="fxh-list">
        <li>
          <strong>Técnica STOP:</strong>
          <ul className="fxh-list-nested">
            <li>S – Stop</li>
            <li>T – Take a step back</li>
            <li>O – Observe</li>
            <li>P – Proceed mindfully</li>
          </ul>
        </li>
        <li>
          <strong>Tolerancia al malestar:</strong>
          <ul className="fxh-list-nested">
            <li>Agua fría</li>
            <li>Respiración 4-7-8</li>
            <li>Distracción sensorial intensa</li>
          </ul>
        </li>
      </ul>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Módulo</th>
              <th>Habilidad</th>
              <th>Aplicación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mindfulness</td>
              <td>Observar sin juzgar</td>
              <td>Escaneo corporal diario</td>
            </tr>
            <tr>
              <td>Efectividad interpersonal</td>
              <td>DEAR MAN</td>
              <td>Comunicación estructurada</td>
            </tr>
            <tr>
              <td>Regulación emocional</td>
              <td>Opuestos a la emoción</td>
              <td>Actuar contrario al impulso</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================= INSOMNIO ================= */}

      <p className="fxh-subtitle">📌 Insomnio Crónico</p>
      <p className="fxh-text">
        Afecta al <strong>10-15% de adultos</strong>.
        Se define como dificultad para iniciar o mantener el sueño
        al menos 3 noches por semana durante 3 meses.
      </p>

      <p className="fxh-text"><strong>Higiene del sueño:</strong></p>
      <ul className="fxh-list">
        <li>
          <strong>Rutina pre-sueño:</strong>
          <ul className="fxh-list-nested">
            <li>Horario fijo</li>
            <li>Actividad relajante</li>
            <li>Evitar pantallas</li>
          </ul>
        </li>
        <li>
          <strong>Ambiente óptimo:</strong>
          <ul className="fxh-list-nested">
            <li>18-21°C</li>
            <li>Oscuridad total</li>
            <li>Ruido blanco</li>
          </ul>
        </li>
      </ul>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Frecuencia</th>
              <th>Efecto</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1-4 Hz (Delta)</td>
              <td>Sueño profundo</td>
              <td>30 min antes</td>
            </tr>
            <tr>
              <td>4-8 Hz (Theta)</td>
              <td>Relajación profunda</td>
              <td>20-45 min</td>
            </tr>
            <tr>
              <td>8-13 Hz (Alpha)</td>
              <td>Transición vigilia-sueño</td>
              <td>15-30 min</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subsubtitle">📌 Conclusión</p>
      <p className="fxh-text">
        Estas condiciones requieren abordajes específicos y personalizados.
        La combinación de técnicas y constancia en la práctica
        suele ofrecer mejores resultados.
      </p>

    </div>
  );
}

export default TrasOtrasCondiciones;
