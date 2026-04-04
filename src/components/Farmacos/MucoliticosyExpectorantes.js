import React, { useEffect } from 'react';
import NavBarMucoliticosyExpectorantes from './NavBarMucoliticosyExpectorantes';
import './MucoliticosyExpectorantes.css';

function MucoliticosyExpectorantes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="me-detail">
      <NavBarMucoliticosyExpectorantes />

      <p className="me-title">Mucolíticos y Expectorantes</p>

      <p className="me-subtitle">📌 Introducción</p>
      <p className="me-text">
        Los <strong>Mucolíticos</strong> y <strong>Expectorantes</strong> son fármacos utilizados para facilitar la eliminación del moco en enfermedades respiratorias. Se emplean comúnmente en patologías como bronquitis, EPOC y otras afecciones con hipersecreción mucosa.
      </p>

      <p className="me-subtitle">💡 Indicaciones Terapéuticas</p>
      <ul className="me-list">
        <li>Bronquitis aguda o crónica.</li>
        <li>EPOC con hipersecreción bronquial.</li>
        <li>Fibrosis quística (uso de acetilcisteína).</li>
        <li>Infecciones respiratorias con moco espeso.</li>
      </ul>

      <p className="me-subtitle">⚠️ Efectos Adversos Comunes</p>
      <ul className="me-list">
        <li><strong>Acetilcisteína:</strong> Náuseas, vómitos, sabor desagradable, broncoespasmo (en inhalado).</li>
        <li><strong>Ambroxol:</strong> Molestias gastrointestinales leves, rara vez reacciones alérgicas.</li>
        <li><strong>Guaifenesina:</strong> Dolor de cabeza, somnolencia, molestias digestivas.</li>
      </ul>

      <p className="me-subtitle">🧠 Consideraciones Clínicas</p>
      <ul className="me-list">
        <li>El aumento en la hidratación oral mejora la eficacia de mucolíticos y expectorantes.</li>
        <li>La combinación con broncodilatadores puede ser útil en EPOC o bronquitis obstructiva.</li>
        <li>Se debe tener precaución en pacientes con dificultad para expectorar (riesgo de obstrucción).</li>
      </ul>

      <p className="me-subtitle">📦 Combinaciones Frecuentes</p>
      <ul className="me-list">
        <li>Mucolíticos + broncodilatadores en EPOC.</li>
        <li>Mucolíticos + antibióticos en infecciones respiratorias con secreción espesa.</li>
        <li>Expectorantes + antitusivos (con precaución, evitar suprimir el reflejo si hay secreción abundante).</li>
      </ul>

      <p className="me-subtitle">📚 Conclusión</p>
      <p className="me-text">
        Los <strong>Mucolíticos</strong> y <strong>Expectorantes</strong> son herramientas útiles para mejorar la limpieza mucociliar y aliviar los síntomas respiratorios. Su uso debe ser racional, considerando las características del paciente y de la enfermedad.
      </p>
    </div>
  );
}

export default MucoliticosyExpectorantes;
