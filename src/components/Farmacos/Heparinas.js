import React, { useEffect } from 'react';
import './Heparinas.css';

function Heparinas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail70">

      <p className="fxh-title">Heparinas</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las <strong>Heparinas</strong> son anticoagulantes parenterales ampliamente utilizados en la prevención y tratamiento de enfermedades tromboembólicas.
        Existen dos tipos principales: <strong>Heparina No Fraccionada (HNF)</strong> y <strong>Heparinas de Bajo Peso Molecular (HBPM)</strong>.
      </p>

      <p className="fxh-subtitle">🔬 Mecanismo de Acción</p>
      <p className="fxh-text">
        Ambas formas potencian la acción de la <strong>antitrombina III</strong>, inhibiendo especialmente el <strong>factor Xa</strong> y la <strong>trombina (IIa)</strong>.
        <br /><br />
        - La <strong>HNF</strong> inhibe por igual Xa y IIa. <br />
        - Las <strong>HBPM</strong> inhiben preferentemente al factor Xa.
      </p>

      <p className="fxh-subtitle">📋 Tipos y Características</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Ejemplos</th>
              <th>Características principales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Heparina no fraccionada (HNF)</td>
              <td>Heparina sódica</td>
              <td>
                Vida media corta, efecto inmediato, requiere monitoreo (aPTT), mayor riesgo de TIH, administración EV o SC.
              </td>
            </tr>
            <tr>
              <td>Heparinas de bajo peso molecular (HBPM)</td>
              <td>Enoxaparina, Dalteparina, Nadroparina</td>
              <td>
                Vida media prolongada, administración SC, no requiere control rutinario, menor riesgo de TIH.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="fxh-list">
        <li>Profilaxis de TVP en hospitalizados o postoperatorios.</li>
        <li>Tratamiento de TVP y TEP.</li>
        <li>Síndrome coronario agudo.</li>
        <li>Puente en suspensión de anticoagulación oral.</li>
        <li>Uso en diálisis o circulación extracorpórea.</li>
      </ul>

      <p className="fxh-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="fxh-list">
        <li>Hemorragias.</li>
        <li><strong>Trombocitopenia inducida por heparina (TIH).</strong></li>
        <li>Osteoporosis (uso prolongado).</li>
        <li>Reacciones locales en sitio de inyección.</li>
      </ul>

      <p className="fxh-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="fxh-list">
        <li>La <strong>HNF</strong> requiere monitoreo con <strong>aPTT</strong>.</li>
        <li>Las <strong>HBPM</strong> tienen mejor biodisponibilidad y menor variabilidad.</li>
        <li>No atraviesan la placenta (seguras en embarazo).</li>
        <li>Antídoto: <strong>protamina</strong> (reversión completa en HNF, parcial en HBPM).</li>
        <li>Precaución en insuficiencia renal con HBPM.</li>
      </ul>

      <p className="fxh-subtitle">📦 Combinaciones Frecuentes</p>
      <ul className="fxh-list">
        <li>Puente hacia warfarina hasta INR terapéutico.</li>
        <li>Uso temporal con antiagregantes en SCA.</li>
        <li>Evitar combinación con AINEs.</li>
      </ul>

      <p className="fxh-subtitle">📚 Conclusión</p>
      <p className="fxh-text">
        Las <strong>Heparinas</strong> son pilares en el manejo de trastornos tromboembólicos.
        Las HBPM son preferidas en la mayoría de los escenarios por su perfil de seguridad y facilidad de uso.
      </p>

    </div>
  );
}

export default Heparinas;
