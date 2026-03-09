import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Migraña.css';

function Migrana() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail92">
      
      <p className="fxh-title">Fármacos para Migraña</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        La <strong>Migraña</strong> es un trastorno neurológico caracterizado por episodios recurrentes de cefalea,
        usualmente pulsátil, con o sin aura. El tratamiento farmacológico se divide en manejo agudo
        (para aliviar el dolor durante la crisis) y profilaxis (para reducir la frecuencia e intensidad de los episodios).
      </p>

      <p className="fxh-subtitle">🎯 Objetivos del Tratamiento</p>
      <ul className="fxh-list">
        <li>Aliviar el dolor y los síntomas asociados durante los ataques.</li>
        <li>Reducir la frecuencia, duración e intensidad de los episodios.</li>
        <li>Mejorar la calidad de vida del paciente.</li>
      </ul>

      <p className="fxh-subtitle">💊 Tratamiento Agudo (Abortivo)</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Ejemplos</th>
              <th>Observaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AINEs</td>
              <td>
                <Link to="/farmacos/farmacos2/ibuprofeno">
                  Ibuprofeno
                </Link>, Naproxeno, Ketorolaco
              </td>
              <td>Primera línea para migrañas leves-moderadas</td>
            </tr>
            <tr>
              <td>Triptanes</td>
              <td>Sumatriptán, Rizatriptán, Zolmitriptán</td>
              <td>Eficaces en migraña moderada-severa</td>
            </tr>
            <tr>
              <td>Antieméticos</td>
              <td>Metoclopramida, Domperidona</td>
              <td>Útiles en náuseas asociadas</td>
            </tr>
            <tr>
              <td>Lasmiditán</td>
              <td>Nuevo agonista serotoninérgico (5-HT<sub>1F</sub>)</td>
              <td>No vasoconstrictor, útil si hay contraindicación a triptanes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">🛡️ Tratamiento Preventivo (Profilaxis)</p>
      <p className="fxh-text">
        Se indica en pacientes con migraña frecuente, grave o discapacitante.
        El tratamiento profiláctico se mantiene durante varios meses.
      </p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Clase</th>
              <th>Fármacos</th>
              <th>Mecanismo / Observaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/farmacos/betabloqueadores">
                  Betabloqueadores
                </Link>
              </td>
              <td>Propranolol, Metoprolol</td>
              <td>Disminuyen excitabilidad cortical</td>
            </tr>
            <tr>
              <td>Antidepresivos</td>
              <td>Amitriptilina, Venlafaxina</td>
              <td>Efecto sobre vías serotoninérgicas</td>
            </tr>
            <tr>
              <td>Antiepilépticos</td>
              <td>Topiramato, Ácido valproico</td>
              <td>Estabilizan la actividad neuronal</td>
            </tr>
            <tr>
              <td>Anticuerpos monoclonales anti-CGRP</td>
              <td>Erenumab, Fremanezumab, Galcanezumab</td>
              <td>Bloquean péptido relacionado a la calcitonina</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">⚠️ Consideraciones</p>
      <ul className="fxh-list">
        <li>Evitar sobreuso de analgésicos para prevenir cefalea por rebote.</li>
        <li>Individualizar tratamiento según perfil clínico y comorbilidades.</li>
        <li>Monitorear efectos adversos y ajustar dosis según respuesta.</li>
        <li>Educar al paciente sobre factores desencadenantes (estrés, sueño, alimentos).</li>
      </ul>

      <p className="fxh-subtitle">📚 Recomendaciones Generales</p>
      <ul className="fxh-list">
        <li>Uso precoz de tratamiento abortivo para mayor eficacia.</li>
        <li>Evaluación periódica de eficacia del tratamiento profiláctico (3-6 meses).</li>
        <li>Combinar tratamiento farmacológico con estrategias no farmacológicas.</li>
      </ul>

    </div>
  );
}

export default Migrana;
