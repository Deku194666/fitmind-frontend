import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Desgarros.css'; // Nuevo CSS basado en LesionFCT

function Desgarros() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxfct-detail">

      <p className="fxfct-title">Desgarros Musculares</p>

      <p className="fxfct-subtitle">📌 Introducción</p>
      <p className="fxfct-text">
        El <strong>Desgarro Muscular</strong> es una lesión frecuente en deportistas y personas activas que ocurre cuando las fibras musculares se estiran o rompen más allá de su capacidad elástica💪. Representa el <strong>30% de las lesiones deportivas</strong> y puede variar desde pequeñas microrroturas hasta rupturas completas del músculo. La gravedad determina el tiempo de recuperación, que puede ir desde días hasta varios meses.
      </p>

      <p className="fxfct-subtitle">📌 Tipos de Desgarros 🧠</p>
      <ul className="fxfct-list">
        <li><strong>Grado I (Leve):</strong> Microrrotura de menos del 5% de fibras. Dolor moderado sin pérdida significativa de fuerza.</li>
        <li><strong>Grado II (Moderado):</strong> Rotura parcial (5-50% de fibras). Dolor agudo, hematoma visible y limitación funcional.</li>
        <li><strong>Grado III (Grave):</strong> Rotura completa del músculo o tendón. Deformidad visible, impotencia funcional total.</li>
      </ul>

      <p className="fxfct-subtitle">📌 Fisiología y Fisiopatología 🧬</p>
      <p className="fxfct-text">Los desgarros ocurren cuando la fuerza aplicada al músculo excede su capacidad de resistencia:</p>
      <ul className="fxfct-list">
        <li><strong>Fase excéntrica:</strong> 70% de desgarros ocurren al frenar un movimiento (ej.: al cambiar de dirección).</li>
        <li><strong>Unión miotendinosa:</strong> Zona más vulnerable por menor vascularización.</li>
        <li><strong>Mecanismo lesional:</strong> Contracción brusca contra resistencia o estiramiento excesivo.</li>
      </ul>
      <p className="fxfct-text">La reparación sigue 3 fases: inflamación (0-72h), reparación (3d-6s) y remodelación (3s-6m).</p>

      <p className="fxfct-subtitle">📌 Factores de Riesgo</p>
      <ul className="fxfct-list">
        <li><Link className="fxfct-link" to="/ecnt/edad">Edad avanzada</Link> (pérdida elasticidad muscular)</li>
        <li>Fatiga muscular o sobreentrenamiento</li>
        <li>Calentamiento insuficiente pre-ejercicio</li>
        <li><Link className="fxfct-link" to="/ecnt/deshidratacion">Deshidratación</Link> y desequilibrios electrolíticos</li>
        <li>Antecedentes de lesiones previas en la zona</li>
        <li>Mala técnica deportiva o equipamiento inadecuado</li>
        <li>Enfermedades metabólicas (<Link className="fxfct-link" to="/ecnt/diabetes">Diabetes Miellitus</Link>)</li>
      </ul>

      <p className="fxfct-subtitle">📌 Síntomas del Desgarro</p>
      <p className="fxfct-text">Los signos aparecen <strong>bruscamente</strong> durante la actividad física:</p>
      <ul className="fxfct-list">
        <li>📌 Dolor agudo ("pedrada") en zona específica</li>
        <li>📌 Hematoma visible (aparece en 24-48h)</li>
        <li>📌 Inflamación local y calor</li>
        <li>📌 Dificultad para contraer o estirar el músculo</li>
        <li>📌 Posible hendidura palpable en desgarros graves</li>
      </ul>

      <p className="fxfct-subtitle">🩺 Diagnóstico</p>
      <p className="fxfct-text">1) Evaluación Inicial (Primeras Horas)</p>
      <p className="fxfct-text">📌 Protocolo POLICE (reemplazo de RICE):</p>
      <ul className="fxfct-list">
        <li>🩹 <strong>P</strong>rotection: Inmovilización relativa 24-48h</li>
        <li>🩹 <strong>O</strong>ptimal Loading: Carga progresiva temprana</li>
        <li>🩹 <strong>I</strong>ce: Crioterapia 15-20min cada 2-3h</li>
        <li>🩹 <strong>C</strong>ompression: Vendaje elástico</li>
        <li>🩹 <strong>E</strong>levation: Elevar la extremidad</li>
      </ul>

      <p className="fxfct-subtitle">📌 Estudios de Imagen</p>
      <div className="fxfct-table-wrapper">
        <table className="fxfct-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Detecta</th>
              <th>Ventaja</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link className="fxfct-link" to="/examenes/ecografia">Ecografía Muscular</Link></td>
              <td>- Extensión de la rotura<br/>- Hematoma intramuscular<br/>- Estado vascular</td>
              <td>Accesible, dinámica, sin radiación</td>
            </tr>
            <tr>
              <td><Link className="fxfct-link" to="/examenes/rnm">Resonancia Magnética</Link></td>
              <td>- Edema muscular<br/>- Roturas completas<br/>- Lesiones asociadas</td>
              <td>Mayor detalle anatómico</td>
            </tr>
            <tr>
              <td>RX (solo en casos especiales)</td>
              <td>- Avulsiones óseas<br/>- Calcificaciones</td>
              <td>Descarta fracturas asociadas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxfct-subtitle">📌 Tratamiento Médico</p>
      <p className="fxfct-text">🔴 Fase Aguda (0-72h):</p>
      <ul className="fxfct-list">
        <li>Protocolo POLICE</li>
        <li>Analgésicos (paracetamol) y AINES cortos (3 días)</li>
        <li>Reposo relativo con movilización temprana controlada</li>
      </ul>

      <p className="fxfct-text">🔴 Fase Subaguda (3d-3s):</p>
      <ul className="fxfct-list">
        <li>Fisioterapia con ultrasonido, electroterapia</li>
        <li>Ejercicios isométricos progresivos</li>
        <li>Vendaje neuromuscular (kinesiotape)</li>
      </ul>

      <p className="fxfct-text">🔴 Fase Crónica (mayor a 3s):</p>
      <ul className="fxfct-list">
        <li>Ejercicios excéntricos controlados</li>
        <li>Pliometría progresiva</li>
        <li>Readaptación deportiva específica</li>
      </ul>

      <p className="fxfct-subtitle">📌 Tratamiento Quirúrgico</p>
      <ul className="fxfct-list">
        <li>Roturas completas (mayor a 50% de fibras)</li>
        <li>Desgarros en músculos biarticulares (gemelo, recto femoral)</li>
        <li>Hematomas intramusculares grandes (mayor a 5cm)</li>
        <li>Fallas en tratamiento conservador (6-8 semanas)</li>
      </ul>

      <p className="fxfct-subtitle">📌 Rehabilitación y Prevención</p>
      <ul className="fxfct-list">
        <li>1️⃣ <strong>Fase inflamatoria:</strong> Movilización pasiva suave</li>
        <li>2️⃣ <strong>Fase proliferativa:</strong> Ejercicios concéntricos/isométricos</li>
        <li>3️⃣ <strong>Fase remodelación:</strong> Ejercicios excéntricos</li>
        <li>4️⃣ <strong>Fase funcional:</strong> Entrenamiento específico deportivo</li>
      </ul>

      <p className="fxfct-subtitle">📌 Conclusión</p>
      <p className="fxfct-text">
        El <strong>desgarro muscular</strong> es una lesión prevenible que requiere manejo adecuado según su gravedad. El diagnóstico temprano y el tratamiento por fases optimizan la recuperación. La rehabilitación supervisada y el respeto de los tiempos biológicos de curación son clave para evitar recaídas.
      </p>

    </div>
  );
}

export default Desgarros;
