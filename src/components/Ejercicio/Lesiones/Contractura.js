import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contractura.css'; // CSS basado en DesgarrosFxfct

function Contractura() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxfct-detail">

      <p className="fxfct-title">Contracturas Musculares</p>

      <p className="fxfct-subtitle">📌 Introducción</p>
      <p className="fxfct-text">
        Las <strong>Contracturas Musculares</strong> son contracciones involuntarias y persistentes de fibras musculares que afectan al <strong>60% de adultos</strong>, especialmente en zonas cervicales y lumbares. A diferencia de los calambres, no son dolorosas inicialmente pero generan molestias crónicas y limitación funcional progresiva. Representan la causa del 30% de consultas por dolor musculoesquelético.
      </p>

      <p className="fxfct-subtitle">📌 Tipos de Contracturas 🧠</p>
      <ul className="fxfct-list">
        <li><strong>Posturales:</strong> Por malas posiciones mantenidas (ej.: tortícolis por computadora)</li>
        <li><strong>Por sobreuso:</strong> En deportistas o trabajos repetitivos (ej.: trapecio en nadadores)</li>
        <li><strong>Reflejas:</strong> Secundarias a otras lesiones (ej.: contractura lumbar por hernia discal)</li>
        <li><strong>Idiopáticas:</strong> Sin causa aparente (asociadas a estrés emocional)</li>
      </ul>

      <p className="fxfct-subtitle">📌 Fisiopatología 🧬</p>
      <p className="fxfct-text">Mecanismo de formación en 4 etapas:</p>
      <ul className="fxfct-list">
        <li><strong>1. Hiperactividad:</strong> Aumento tono basal por estrés mecánico/emocional</li>
        <li><strong>2. Isquemia local:</strong> Compresión vascular por contracción mantenida</li>
        <li><strong>3. Acumulación metabolitos:</strong> Ácido láctico y sustancias algógenas</li>
        <li><strong>4. Ciclo dolor-espasmo:</strong> Perpetuación del cuadro</li>
      </ul>
      <p className="fxfct-text">Los músculos más afectados son trapecio (40%), paravertebrales (30%) y gemelos (15%).</p>

      <p className="fxfct-subtitle">📌 Factores de Riesgo</p>
      <ul className="fxfct-list">
        <li><Link className="fxfct-link" to="/ecnt/estres">Estrés emocional crónico</Link> (aumenta tono simpático)</li>
        <li>Posturas estáticas prolongadas (oficina, conducción)</li>
        <li>Desequilibrios musculares (acortamientos/debilidades)</li>
        <li>Sedentarismo o sobreentrenamiento</li>
        <li><Link className="fxfct-link" to="/ecnt/deshidratacion">Deshidratación</Link> y déficit de electrolitos</li>
        <li>Enfermedades reumáticas (<Link className="fxfct-link" to="/ecnt/fibromialgia">fibromialgia</Link>)</li>
      </ul>

      <p className="fxfct-subtitle">📌 Síntomas Característicos</p>
      <p className="fxfct-text">Manifestaciones clínicas progresivas:</p>
      <ul className="fxfct-list">
        <li>📌 <strong>Tempranas:</strong> Rigidez local, pesadez muscular</li>
        <li>📌 <strong>Intermedias:</strong> Dolor sordo que mejora con movimiento suave</li>
        <li>📌 <strong>Avanzadas:</strong> Nódulos palpables ("puntos gatillo"), dolor referido</li>
        <li>📌 <strong>Asociados:</strong> Cefaleas tensionales, limitación articular</li>
      </ul>

      <p className="fxfct-subtitle">🩺 Diagnóstico</p>
      <p className="fxfct-text">1) Evaluación Clínica</p>
      <p className="fxfct-text">📌 Hallazgos clave:</p>
      <ul className="fxfct-list">
        <li>🔍 <strong>Inspección:</strong> Asimetrías posturales, hipertonía visible</li>
        <li>✋ <strong>Palpación:</strong> Bandas tensas, nódulos dolorosos (puntos gatillo)</li>
        <li>🏋️ <strong>Movilidad:</strong> Limitación dolorosa al estiramiento pasivo</li>
      </ul>

      <p className="fxfct-text">2) Estudios Complementarios</p>
      <div className="fxfct-table-wrapper">
        <table className="fxfct-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Utilidad</th>
              <th>Hallazgos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Electromiografía</td>
              <td>Confirmar hiperactividad eléctrica</td>
              <td>Potenciales de unidad motora continuos</td>
            </tr>
            <tr>
              <td>Termografía</td>
              <td>Evaluar cambios térmicos locales</td>
              <td>Aumento temperatura en zona contracturada</td>
            </tr>
            <tr>
              <td>Ecografía</td>
              <td>Descartar otras patologías</td>
              <td>Aumento ecogenicidad muscular</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxfct-subtitle">📌 Diagnóstico Diferencial</p>
      <ul className="fxfct-list">
        <li><strong>Calambre muscular:</strong> Contracción dolorosa transitoria</li>
        <li><strong>Miositis:</strong> Inflamación muscular con CK elevada</li>
        <li><strong>Distonía focal:</strong> Contracción involuntaria organizada</li>
      </ul>

      <p className="fxfct-subtitle">📌 Tratamiento</p>
      <ul className="fxfct-list">
        <li>🔴 Medidas Generales: Educación postural, actividad física, termoterapia</li>
        <li>🔴 Terapias Físicas: Masaje descontracturante, estiramientos, electroterapia, kinesiotaping</li>
        <li>🔴 Tratamientos Avanzados: Punción seca, ondas de choque, acupuntura</li>
      </ul>

      <p className="fxfct-subtitle">📌 Fármacos</p>
      <ul className="fxfct-list">
        <li><strong>Relajantes musculares:</strong> Ciclobenzaprina (2-3 semanas máximo)</li>
        <li><strong>Analgésicos:</strong> Paracetamol o AINES por corto tiempo</li>
        <li><strong>Toxina botulínica:</strong> En casos refractarios seleccionados</li>
      </ul>

      <p className="fxfct-subtitle">📌 Plan de Rehabilitación</p>
      <div className="fxfct-table-wrapper">
        <table className="fxfct-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Duración</th>
              <th>Intervenciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aguda</td>
              <td>1-2 semanas</td>
              <td>Termoterapia + Masaje superficial</td>
            </tr>
            <tr>
              <td>Subaguda</td>
              <td>2-4 semanas</td>
              <td>Estiramientos + Fortalecimiento antagonista</td>
            </tr>
            <tr>
              <td>Mantenimiento</td>
              <td>Indefinido</td>
              <td>Reeducación postural + Automasajes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxfct-subtitle">📌 Prevención</p>
      <ul className="fxfct-list">
        <li><strong>Pausas activas:</strong> Cada 2h en trabajos sedentarios</li>
        <li><strong>Ejercicios de movilidad:</strong> 10-15min diarios</li>
        <li><strong>Hidratación adecuada:</strong> 35ml/kg de peso al día</li>
        <li><strong>Manejo del estrés:</strong> Técnicas de relajación/respiración</li>
        <li><strong>Condicionamiento físico:</strong> Equilibrio agonista-antagonista</li>
      </ul>

      <p className="fxfct-subtitle">📌 Conclusión</p>
      <p className="fxfct-text">
        Las <strong>Contracturas Musculares</strong>, aunque comunes, deben abordarse integralmente. El tratamiento combinado de terapia manual, ejercicios específicos y manejo de factores predisponentes ofrece los mejores resultados. La prevención mediante hábitos posturales correctos y actividad física regular es fundamental. En casos crónicos, un enfoque multidisciplinar puede ser necesario para romper el ciclo dolor-espasmo-dolor.
      </p>

    </div>
  );
}

export default Contractura;
