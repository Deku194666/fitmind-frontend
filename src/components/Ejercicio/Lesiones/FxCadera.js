import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FxCadera.css';

function FxCadera() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Fracturas de Cadera</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las fracturas de cadera representan una de las lesiones más graves en adultos mayores, con una incidencia anual de <strong>mayor a 300,000 casos</strong> en EE.UU. y una mortalidad al año del <strong>15-30%</strong>.  
        Son consideradas fracturas por fragilidad y requieren manejo quirúrgico urgente (menor a 24-48h) para reducir complicaciones.
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Cuello femoral</strong>: Intraarticular, vascularización precaria (riesgo de necrosis avascular)</li>
        <li><strong>Región intertrocantérea</strong>: Entre trocánter mayor y menor, rica vascularización</li>
        <li><strong>Subtrocantérea</strong>: 5 cm distal a trocánter menor, zona de alto estrés mecánico</li>
        <li><strong>Vascularización</strong>: Arteria circunfleja medial (principal aporte a cabeza femoral)</li>
      </ul>

      <p className="fxh-subtitle">Clasificación de Fracturas 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Localización</th>
              <th>Clasificación</th>
              <th>Riesgo AVN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Intracapsulares</td>
              <td>Cuello femoral</td>
              <td>Garden I-IV</td>
              <td>15-30%</td>
            </tr>
            <tr>
              <td>Extracapsulares</td>
              <td>Intertrocantérea</td>
              <td>AO/OTA 31-A</td>
              <td>Menor a 5%</td>
            </tr>
            <tr>
              <td>Subtrocantéreas</td>
              <td>5 cm distal a trocánter menor</td>
              <td>Seinsheimer</td>
              <td>Variable</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subsubtitle">Clasificación de Garden (Cuello Femoral)</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Descripción</th>
              <th>Estabilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>Impactación incompleta (trabéculas alineadas)</td>
              <td>Estable</td>
            </tr>
            <tr>
              <td>II</td>
              <td>Fractura completa sin desplazamiento</td>
              <td>Inestable</td>
            </tr>
            <tr>
              <td>III</td>
              <td>Desplazamiento parcial (trabéculas desalineadas)</td>
              <td>Inestable</td>
            </tr>
            <tr>
              <td>IV</td>
              <td>Desplazamiento completo</td>
              <td>Altamente inestable</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Mecanismos de Lesión 🤕</p>
      <ul className="fxh-list">
        <li><strong>Caída de baja energía</strong>: 90% de casos (ancianos con osteoporosis)</li>
        <li><strong>Trauma de alta energía</strong>: Accidentes vehiculares, caídas de altura (adultos jóvenes)</li>
        <li><strong>Factores de riesgo</strong>: Edad mayor a 65 años, osteoporosis, déficit vitamina D, antecedentes de caídas</li>
      </ul>

      <p className="fxh-subtitle">Diagnóstico 🩺</p>
      <p className="fxh-subsubtitle">1. Presentación Clínica</p>
      <ul className="fxh-list">
        <li><strong>Dolor inguinal/coxofemoral</strong>: Intenso al movimiento</li>
        <li><strong>Acortamiento y rotación externa</strong>: Signo clásico en fracturas desplazadas</li>
        <li><strong>Imposibilidad para deambular</strong>: 95% de los casos</li>
        <li><strong>"Hip fracture position"</strong>: Pierna acortada + rotada externamente</li>
      </ul>

      <p className="fxh-subsubtitle">2. Estudios de Imagen</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Indicación</th>
              <th>Hallazgos Clave</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/examenes/rx">Radiografía</Link></td>
              <td>Primera línea</td>
              <td>AP pelvis + axial cadera, línea de fractura</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>RX negativa con alta sospecha</td>
              <td>Edema óseo, fractura oculta (sensibilidad 99%)</td>
            </tr>
            <tr>
              <td><Link to="/examenes/tac">TAC</Link></td>
              <td>Planificación quirúrgica compleja</td>
              <td>Reconstrucción 3D, compromiso articular</td>
            </tr>
            <tr>
              <td>Gammagrafía</td>
              <td>Casos seleccionados</td>
              <td>Aumento captación tardía (48-72h post-trauma)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>
      <ul className="fxh-list">
        <li>Pacientes no ambulatorios previamente con dolor controlado</li>
        <li>Fracturas impactadas Garden I en pacientes muy ancianos</li>
        <li>Contraindicación absoluta para cirugía</li>
      </ul>
      <p className="fxh-subsubtitle">Protocolo:</p>
      <ul className="fxh-list">
        <li><strong>Reposo en cama</strong>: Con cambios posturales frecuentes</li>
        <li><strong>Analgesia multimodal</strong>: Opioides + acetaminofén</li>
        <li><strong>Profilaxis TEV</strong>: Heparina de bajo peso molecular</li>
        <li><strong>Movilización pasiva</strong>: Prevenir contracturas</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>
      <p className="fxh-subsubtitle">Principios:</p>
      <ul className="fxh-list">
        <li><strong>Urgencia</strong>: Ideal menor a 24-48h (reduce mortalidad)</li>
        <li><strong>Estabilización</strong>: Permite movilización precoz</li>
        <li><strong>Reducción anatómica</strong>: Especialmente en pacientes jóvenes</li>
      </ul>
      <p className="fxh-subsubtitle">Técnicas por Tipo de Fractura:</p>
      <ul className="fxh-list">
        <li><strong>Intracapsulares (Cuello femoral)</strong>:
          <ul className="fxh-sublist">
            <li>Osteosíntesis: Tornillos canulados (Garden I-II)</li>
            <li>Artroplastia: Hemiartroplastia (Garden III-IV en ancianos)</li>
            <li>Artroplastia total: En artrosis preexistente</li>
          </ul>
        </li>
        <li><strong>Extracapsulares (Intertrocantéricas)</strong>:
          <ul className="fxh-sublist">
            <li>Clavo cephalomedular: Gold standard (Gamma nail, PFNA)</li>
            <li>Placa deslizante: DHS (para fracturas estables 31-A1/A2)</li>
          </ul>
        </li>
        <li><strong>Subtrocantéricas</strong>:
          <ul className="fxh-sublist">
            <li>Clavo largo: Recon o PFN-Long</li>
            <li>Placa de compresión: LCP 95°</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-subtitle">Rehabilitación 🏋️‍♂️</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Objetivos</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aguda (0-72h)</td>
              <td>Movilización precoz, analgesia, prevención complicaciones</td>
              <td>Hasta alta hospitalaria</td>
            </tr>
            <tr>
              <td>Subaguda (1-6 sem)</td>
              <td>Deambulación progresiva, fortalecimiento</td>
              <td>Hasta soporte de peso completo</td>
            </tr>
            <tr>
              <td>Recuperación (6-12 sem)</td>
              <td>Recuperar marcha independiente, equilibrio</td>
              <td>Hasta retorno a actividades básicas</td>
            </tr>
            <tr>
              <td>Mantenimiento (mayor a 3 mes)</td>
              <td>Prevención de nuevas caídas, tratamiento osteoporosis</td>
              <td>Continuo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Complicaciones ⚠️</p>
      <ul className="fxh-list">
        <li><strong>Médicas</strong>:
          <ul className="fxh-sublist">
            <li>Infección urinaria/neumonía (30%)</li>
            <li>Tromboembolismo pulmonar (1-3%)</li>
            <li>Delirium postoperatorio (15-20%)</li>
          </ul>
        </li>
        <li><strong>Quirúrgicas</strong>:
          <ul className="fxh-sublist">
            <li>Infección profunda (1-5%)</li>
            <li>Fallo de osteosíntesis (5-10%)</li>
            <li>Necrosis avascular (Garden III-IV: 15-30%)</li>
          </ul>
        </li>
        <li><strong>Funcionales</strong>:
          <ul className="fxh-sublist">
            <li>Pérdida de autonomía (40% no recuperan marcha previa)</li>
            <li>Artrosis postraumática</li>
          </ul>
        </li>
      </ul>

      <p className="fxh-subtitle">Prevención 🛡️</p>
      <ul className="fxh-list">
        <li>Tratamiento osteoporosis: Bifosfonatos, denosumab</li>
        <li>Suplementación: Calcio + vitamina D</li>
        <li>Programas de equilibrio: Tai Chi, ejercicios de fortalecimiento</li>
        <li>Modificación domiciliaria: Barras de apoyo, iluminación adecuada</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        Las fracturas de cadera constituyen una urgencia geriátrica que requiere manejo quirúrgico temprano (menor a 48h) y abordaje multidisciplinario.  
        Mientras las fracturas intracapsulares en ancianos suelen requerir artroplastia, las extracapsulares se tratan con osteosíntesis.  
        La rehabilitación precoz y el tratamiento de la osteoporosis subyacente son esenciales para reducir la alta mortalidad asociada (30% al año).
      </p>
    </div>
  );
}

export default FxCadera;
