import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AnticoagulantesOrales.css'; // usamos la misma base

function AnticoagulantesOrales() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail71">

      <p className="fxh-title">
        Anticoagulantes Orales Directos (ACOD)
      </p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Los <strong>Anticoagulantes Orales Directos (ACOD)</strong>, también conocidos como DOACs,
        inhiben de forma directa factores clave de la coagulación.
        Incluyen inhibidores del <strong>factor Xa</strong> y de la <strong>trombina (IIa)</strong>.
        Representan una alternativa moderna a la warfarina, con menor necesidad de monitoreo y menos interacciones.
      </p>

      <p className="fxh-subtitle">🔬 Clasificación</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Ejemplos</th>
              <th>Mecanismo de acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inhibidores del factor Xa</td>
              <td>Rivaroxabán, Apixabán, Edoxabán</td>
              <td>Bloquean directamente el factor Xa libre y unido a protrombina.</td>
            </tr>
            <tr>
              <td>Inhibidor de la trombina (IIa)</td>
              <td>Dabigatrán</td>
              <td>Inhibe la trombina, impidiendo la conversión de fibrinógeno a fibrina.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="fxh-list">
        <li>Prevención de ictus en fibrilación auricular no valvular.</li>
        <li>Tratamiento y prevención de TVP y TEP.</li>
        <li>Profilaxis postoperatoria en cirugía ortopédica mayor.</li>
        <li>Alternativa a antagonistas de vitamina K (evita control INR frecuente).</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Efectos Adversos</p>
      <ul className="fxh-list">
        <li>Hemorragias, especialmente gastrointestinales.</li>
        <li>Dispepsia (más común con dabigatrán).</li>
        <li>Anemia y sangrado oculto.</li>
        <li>Hepatotoxicidad rara.</li>
      </ul>

      <p className="fxh-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="fxh-list">
        <li>No requieren monitoreo rutinario.</li>
        <li>No indicados en válvulas cardíacas mecánicas.</li>
        <li>Ajustar en insuficiencia renal.</li>
        <li>Interacciones con CYP3A4 y P-gp.</li>
        <li>Suspender 24–48h antes de cirugía.</li>
      </ul>

      <p className="fxh-subtitle">📚 Conclusión</p>
      <p className="fxh-text">
        Los ACOD han revolucionado el manejo de enfermedades tromboembólicas.
        Su perfil de eficacia y seguridad los convierte en alternativa atractiva a la warfarina,
        aunque su uso debe individualizarse según función renal, riesgo de sangrado e interacciones.
      </p>

    </div>
  );
}

export default AnticoagulantesOrales;
