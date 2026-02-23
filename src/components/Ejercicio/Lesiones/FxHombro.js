import React, { useEffect } from 'react';
import './FxHombro.css';

function FxHombro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className="fxh-title">Fracturas de Hombro, Clavícula y Escápula</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las fracturas del complejo del hombro (húmero proximal, clavícula y escápula) representan aproximadamente el <strong>10% de todas las fracturas</strong> en adultos. 
        Este grupo de fracturas tiene mecanismos, tratamientos y pronósticos diferentes. La clavícula es el hueso que se fractura con más frecuencia en la infancia, 
        mientras las fracturas de húmero proximal son más comunes en mayores de 65 años.
      </p>

      {/* Húmero Proximal */}
      <p className="fxh-subtitle">📌 Fracturas de Húmero Proximal</p>
      <p className="fxh-text">
        Representan el <strong>5% de todas las fracturas</strong> y son las más comunes del complejo del hombro en adultos mayores. 
        La clasificación de Neer es la más utilizada, basada en el desplazamiento de los cuatro segmentos principales.
      </p>

      <p className="fxh-subsubtitle">Clasificación de Neer:</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Desplazamiento</th>
              <th>Incidencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 parte</td>
              <td>Menor a 1cm o menor a 45°</td>
              <td>70-80%</td>
            </tr>
            <tr>
              <td>2 partes</td>
              <td>Mayor a 1cm o mayor a 45° en 1 segmento</td>
              <td>15-20%</td>
            </tr>
            <tr>
              <td>3 partes</td>
              <td>2 segmentos desplazados</td>
              <td>5-10%</td>
            </tr>
            <tr>
              <td>4 partes</td>
              <td>Todos segmentos desplazados</td>
              <td>Menor a 5%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Clavícula */}
      <p className="fxh-subtitle">📌 Fracturas de Clavícula</p>
      <p className="fxh-text">
        Representan el <strong>2.6-5% de todas las fracturas</strong> y hasta el <strong>44% de las fracturas del hombro</strong>. 
        Ocurren principalmente en el tercio medio (80%), siendo menos frecuentes en los tercios distal (15%) y proximal (5%).
      </p>

      <p className="fxh-subsubtitle">Clasificación de Allman modificada:</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Localización</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>Tercio medio</td>
              <td>80% de casos, consolidación rápida</td>
            </tr>
            <tr>
              <td>II</td>
              <td>Tercio distal</td>
              <td>Subtipos A, B, C según compromiso ligamentario</td>
            </tr>
            <tr>
              <td>III</td>
              <td>Tercio proximal</td>
              <td>Raras, asociadas a trauma de alta energía</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subsubtitle">Manejo de fracturas de clavícula:</p>
      <ul className="fxh-list">
        <li><strong>Conservador (mayoría casos):</strong> Cabestrillo por 3-6 semanas</li>
        <li><strong>Quirúrgico (indicaciones):</strong>
          <ul className="fxh-sublist">
            <li>Desplazamiento mayor a 2cm o acortamiento</li>
            <li>Compromiso neurovascular</li>
            <li>Fracturas abiertas</li>
            <li>Pacientes jóvenes activos</li>
          </ul>
        </li>
        <li><strong>Técnicas quirúrgicas:</strong> Placa de compresión, clavos intramedulares</li>
      </ul>

      {/* Escápula */}
      <p className="fxh-subtitle">📌 Fracturas de Escápula</p>
      <p className="fxh-text">
        Representan solo el <strong>0.5-1% de todas las fracturas</strong> y el <strong>3-5% de las fracturas del hombro</strong>. 
        Son fracturas de <strong>alta energía</strong> (90% por accidentes vehiculares) y frecuentemente asociadas a otras lesiones (pulmonares, vasculares).
      </p>

      <p className="fxh-subsubtitle">Clasificación anatómica:</p>
      <ul className="fxh-list">
        <li><strong>Cuerpo (50%):</strong> Múltiples líneas de fractura</li>
        <li><strong>Cuello (25%):</strong> Fractura "anatómica" o "quirúrgica"</li>
        <li><strong>Acromion (8%):</strong> Por impacto directo</li>
        <li><strong>Apófisis coracoides (7%):</strong> Por avulsión</li>
        <li><strong>Cavidad glenoidea (10%):</strong> Requieren evaluación cuidadosa</li>
      </ul>

      <p className="fxh-subsubtitle">Manejo de fracturas de escápula:</p>
      <ul className="fxh-list">
        <li><strong>Conservador (mayoría casos):</strong> Cabestrillo por 3-4 semanas</li>
        <li><strong>Quirúrgico (indicaciones):</strong>
          <ul className="fxh-sublist">
            <li>Desplazamiento glenoideo mayor a 5mm</li>
            <li>Inestabilidad glenohumeral</li>
            <li>Fracturas de coracoides con lesión ligamentaria</li>
            <li>Fracturas de acromion que comprometen espacio subacromial</li>
          </ul>
        </li>
      </ul>

      {/* Diagnóstico por imagen */}
      <p className="fxh-subtitle">📌 Diagnóstico por Imagen</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Húmero Proximal</th>
              <th>Clavícula</th>
              <th>Escápula</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Radiografía</td>
              <td>AP, axial, Y escapular</td>
              <td>AP y 45° cefálica</td>
              <td>AP, lateral y axilar</td>
            </tr>
            <tr>
              <td>TAC</td>
              <td>Fracturas complejas</td>
              <td>Evaluar consolidación</td>
              <td>Reconstrucción 3D esencial</td>
            </tr>
            <tr>
              <td>RMN</td>
              <td>Evaluar manguito rotador</td>
              <td>Poco utilizada</td>
              <td>Lesiones partes blandas</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Rehabilitación */}
      <p className="fxh-subtitle">📌 Rehabilitación</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Húmero Proximal</th>
              <th>Clavícula</th>
              <th>Escápula</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aguda (0-3 sem)</td>
              <td>Cabestrillo, pendulares</td>
              <td>Cabestrillo, evitar elevación</td>
              <td>Cabestrillo, movilización pasiva</td>
            </tr>
            <tr>
              <td>Subaguda (3-6 sem)</td>
              <td>ROM activo asistido</td>
              <td>Inicio movilización activa</td>
              <td>ROM progresivo</td>
            </tr>
            <tr>
              <td>Recuperación (6-12 sem)</td>
              <td>Fortalecimiento progresivo</td>
              <td>Fortalecimiento completo</td>
              <td>Fortalecimiento escapular</td>
            </tr>
          </tbody>
        </table>
      </div>

     <p className="fxh-subtitle">⚠️ Complicaciones</p>
<div className="fxh-flex-comp">
  <div>
    <p className="fxh-subsubtitle">Húmero Proximal:</p>
    <ul className="fxh-list">
      <li>Rigidez articular (10-20%)</li>
      <li>Necrosis avascular (hasta 35%)</li>
      <li>Pseudoartrosis (1-5%)</li>
    </ul>
  </div>
  <div>
    <p className="fxh-subsubtitle">Clavícula:</p>
    <ul className="fxh-list">
      <li>Pseudoartrosis (5-15%)</li>
      <li>Malunión con acortamiento</li>
      <li>Irritación por material de osteosíntesis</li>
    </ul>
  </div>
  <div>
    <p className="fxh-subsubtitle">Escápula:</p>
    <ul className="fxh-list">
      <li>Rigidez glenohumeral</li>
      <li>Artrosis postraumática</li>
      <li>Disfunción escapulotorácica</li>
    </ul>
  </div>
</div>


      {/* Conclusión */}
      <p className="fxh-subtitle">📌 Conclusión</p>
      <p className="fxh-text">
        El manejo de las fracturas del complejo del hombro requiere un enfoque individualizado. Mientras la mayoría de fracturas de clavícula y escápula pueden tratarse conservadoramente, 
        las fracturas de húmero proximal desplazadas frecuentemente requieren intervención quirúrgica. La rehabilitación temprana y supervisada es clave para recuperar la función del hombro, 
        especialmente en pacientes activos. Las fracturas de escápula, aunque raras, deben alertar sobre posibles lesiones asociadas graves.
      </p>
    </div>
  );
}

export default FxHombro;
