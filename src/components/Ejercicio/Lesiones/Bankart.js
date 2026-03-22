import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Bankart.css';

function Bankart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxbankart-detail">

      <p className="fxbankart-title">
        Lesión de Bankart
      </p>

      <p className="fxbankart-subtitle">📌 Introducción</p>
      <p className="fxbankart-text">
        La lesión de <strong>Bankart</strong> es una de las
        <strong> causas más comunes de inestabilidad anterior del hombro</strong>,
        representando aproximadamente el
        <strong> 85% de las luxaciones glenohumerales traumáticas</strong>.
        Ocurre cuando el labrum glenoideo y el complejo ligamentoso anterior
        se desprenden del borde anteroinferior de la glenoides.
      </p>

      <p className="fxbankart-subtitle">📌 Anatomía Clave 🦴</p>
      <ul className="fxbankart-list">
        <li><strong>Labrum glenoideo</strong>: Aumenta hasta 50% la congruencia articular.</li>
        <li><strong>Complejo ligamentoso inferior</strong>: Principal estabilizador anterior.</li>
        <li><strong>Zona de inserción</strong>: Anclaje de ligamentos glenohumerales y tendón del bíceps.</li>
      </ul>

      <p className="fxbankart-subtitle">📌 Clasificación 📊</p>
      <div className="fxbankart-table-wrapper">
        <table className="fxbankart-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Características</th>
              <th>Implicancias</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Bankart clásico</strong></td>
              <td>Desprendimiento labral</td>
              <td>Inestabilidad anterior</td>
            </tr>
            <tr>
              <td><strong>Bankart óseo</strong></td>
              <td>Fractura del borde glenoideo</td>
              <td>Mayor riesgo de recurrencia</td>
            </tr>
            <tr>
              <td><strong>ALPSA</strong></td>
              <td>Lesión desplazada medial</td>
              <td>Forma crónica</td>
            </tr>
            <tr>
              <td><strong>GLAD</strong></td>
              <td>Desgarro labral + cartílago</td>
              <td>Dolor sin gran inestabilidad</td>
            </tr>
            <tr>
              <td><strong>HAGL</strong></td>
              <td>Avulsión humeral ligamentaria</td>
              <td>Requiere reparación específica</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxbankart-subtitle">📌 Diagnóstico 🩺</p>

      <p className="fxbankart-subsection">Examen Físico</p>
      <ul className="fxbankart-list">
        <li>Prueba de aprehensión</li>
        <li>Prueba de relocación</li>
        <li>Prueba de carga y desplazamiento</li>
        <li>Signo del surco</li>
      </ul>

      <p className="fxbankart-subsection">Estudios de Imagen</p>
      <div className="fxbankart-table-wrapper">
        <table className="fxbankart-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/examenes/rx" className="fxbankart-link">
                  Radiografía
                </Link>
              </td>
              <td>Lesión de Hill-Sachs, Bankart óseo</td>
              <td>Evaluar defectos óseos</td>
            </tr>
            <tr>
              <td>
                <Link to="/examenes/rmn" className="fxbankart-link">
                  RMN
                </Link>
              </td>
              <td>Desprendimiento labral</td>
              <td>Alta sensibilidad</td>
            </tr>
            <tr>
              <td>Artro-RMN</td>
              <td>Detalle labral</td>
              <td>Mayor precisión</td>
            </tr>
            <tr>
              <td>TC 3D</td>
              <td>Pérdida ósea glenoidea</td>
              <td>Cuantificación ósea</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxbankart-subtitle">📌 Tratamiento</p>

      <p className="fxbankart-subsection">Conservador</p>
      <ul className="fxbankart-list">
        <li>Primera luxación en mayores de 40 años</li>
        <li>Pacientes sedentarios</li>
        <li>Fase aguda: 0-3 semanas</li>
        <li>Fortalecimiento progresivo hasta 12 semanas</li>
      </ul>

      <p className="fxbankart-subsection">Quirúrgico</p>
      <ul className="fxbankart-list">
        <li>Pacientes jóvenes (&lt;25 años)</li>
        <li>Luxaciones recurrentes</li>
        <li>Atletas de contacto</li>
        <li>Defecto óseo &gt;20%</li>
      </ul>

      <p className="fxbankart-subtitle">📌 Rehabilitación 🏋️‍♂️</p>
      <div className="fxbankart-table-wrapper">
        <table className="fxbankart-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Objetivo</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 (0-4 sem)</td>
              <td>Protección de la reparación</td>
              <td>4 semanas</td>
            </tr>
            <tr>
              <td>2 (4-8 sem)</td>
              <td>ROM completo</td>
              <td>4 semanas</td>
            </tr>
            <tr>
              <td>3 (8-12 sem)</td>
              <td>Fortalecimiento inicial</td>
              <td>4 semanas</td>
            </tr>
            <tr>
              <td>4 (3-6 mes)</td>
              <td>Propiocepción avanzada</td>
              <td>12 semanas</td>
            </tr>
            <tr>
              <td>5 (&gt;6 mes)</td>
              <td>Retorno deportivo</td>
              <td>Hasta 12 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxbankart-subtitle">📌 Conclusión</p>
      <p className="fxbankart-text">
        La lesión de Bankart requiere un enfoque individualizado.
        La reparación artroscópica ofrece excelentes resultados,
        pero defectos óseos significativos pueden requerir procedimientos como el Latarjet.
        La rehabilitación progresiva es clave para prevenir recurrencias.
      </p>

    </div>
  );
}

export default Bankart;
