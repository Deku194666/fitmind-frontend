import React, { useEffect } from 'react';
import './ARNI.css';

function ARNI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="arni-detail">

      <p className="arni-title">
        ARNI (Inhibidores del Receptor de Angiotensina y de la Neprilisina)
      </p>

      <p className="arni-subtitle">📌 Introducción</p>
      <p className="arni-text">
        Los <strong>ARNI</strong> combinan un <strong>Antagonista del Receptor de Angiotensina II (ARA II)</strong> 
        con un <strong>inhibidor de la neprilisina</strong>, una enzima que degrada péptidos natriuréticos.
        Esta combinación potencia los efectos vasodilatadores, natriuréticos y antifibróticos, ofreciendo 
        una opción superior a los IECA o ARA II solos en insuficiencia cardíaca con fracción de eyección reducida.
      </p>

      <p className="arni-subtitle">🔬 Mecanismo de Acción</p>
      <p className="arni-text">
        El ARNI <strong>sacubitrilo/valsartán</strong> actúa de forma dual:
      </p>

      <ul className="arni-list">
        <li><strong>Sacubitrilo:</strong> Inhibe la neprilisina, aumentando los niveles de péptidos natriuréticos.</li>
        <li><strong>Valsartán:</strong> Bloquea los receptores AT1 de la angiotensina II, reduciendo la vasoconstricción y la retención de sodio.</li>
      </ul>

      <p className="arni-subtitle">💊 Fármaco Disponible</p>

      <div className="arni-table-wrapper">
        <table className="arni-table">
          <thead>
            <tr>
              <th>Nombre Comercial</th>
              <th>Componentes</th>
              <th>Dosis Típica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Entresto®</td>
              <td>Sacubitrilo + Valsartán</td>
              <td>24/26 mg, 49/51 mg o 97/103 mg 2 veces/día</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="arni-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="arni-list">
        <li>Insuficiencia cardíaca con fracción de eyección reducida (ICFER).</li>
        <li>Pacientes sintomáticos a pesar de tratamiento con IECA/ARA II y betabloqueadores.</li>
        <li>Reemplazo de IECA/ARA II en pacientes seleccionados con buena tolerancia y función renal adecuada.</li>
      </ul>

      <p className="arni-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="arni-list">
        <li>Hipotensión sintomática.</li>
        <li>Hiperpotasemia.</li>
        <li>Alteración de la función renal.</li>
        <li>Angioedema (menos frecuente que con IECA, pero posible).</li>
      </ul>

      <p className="arni-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="arni-list">
        <li>No debe iniciarse simultáneamente con IECA (requiere wash-out de al menos 36 horas).</li>
        <li>Monitorear potasio y función renal antes y durante el tratamiento.</li>
        <li>No recomendado en pacientes con antecedentes de angioedema con IECA o ARA II.</li>
        <li>Ajustar la dosis progresivamente según tolerancia.</li>
      </ul>

      <p className="arni-subtitle">📚 Conclusión</p>
      <p className="arni-text">
        Los <strong>ARNI</strong> representan una de las principales innovaciones en el tratamiento 
        de la insuficiencia cardíaca. Al combinar los beneficios de los ARA II con el incremento de 
        péptidos natriuréticos, mejoran la calidad de vida y reducen hospitalizaciones y mortalidad. 
        Su implementación debe ser gradual y cuidadosamente monitoreada.
      </p>

    </div>
  );
}

export default ARNI;
