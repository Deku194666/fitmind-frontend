import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./LesionFCT.css";

function LesionFCT() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxfct-detail">

      <p className="fxfct-title">
        Lesión del Fibrocartílago Triangular (TFCC) de la Muñeca
      </p>

      <p className="fxfct-subtitle">📌 Introducción</p>
      <p className="fxfct-text">
        El <strong>Fibrocartílago Triangular (TFCC)</strong> es clave para la
        estabilidad de la articulación radiocubital distal. Representa el
        40% de las lesiones de muñeca en adultos jóvenes activos y actúa
        como amortiguador y estabilizador primario de carga axial cubital.
      </p>

      <p className="fxfct-subtitle">🦴 Anatomía Clave</p>
      <ul className="fxfct-list">
        <li>
          <strong>Componentes:</strong>
          <ul>
            <li>Disco articular (central avascular)</li>
            <li>Ligamentos radiocubital palmar y dorsal</li>
            <li>Menisco homólogo</li>
            <li>Sheath del ECU</li>
          </ul>
        </li>
        <li>
          <strong>Función:</strong> Transmite 20% de carga axial y estabiliza la ARCD
        </li>
      </ul>

      <p className="fxfct-subtitle">📊 Clasificación de Palmer</p>

      <div className="fxfct-table-wrapper">
        <table className="fxfct-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descripción</th>
              <th>Mecanismo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1A</td>
              <td>Desgarro central</td>
              <td>Compresión axial + rotación</td>
            </tr>
            <tr>
              <td>1B</td>
              <td>Avulsión cubital</td>
              <td>Tracción cubital</td>
            </tr>
            <tr>
              <td>1C</td>
              <td>Desinserción distal</td>
              <td>Hiperextensión</td>
            </tr>
            <tr>
              <td>1D</td>
              <td>Avulsión radial</td>
              <td>Traumatismo directo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxfct-subtitle">🩺 Diagnóstico</p>

      <p className="fxfct-subtitle" style={{ fontSize: "2.4rem" }}>
        Estudios de Imagen
      </p>

      <div className="fxfct-table-wrapper">
        <table className="fxfct-table">
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
                <Link className="fxfct-link" to="/examenes/rx">
                  Radiografía
                </Link>
              </td>
              <td>Variación cubital</td>
              <td>Evaluación inicial</td>
            </tr>
            <tr>
              <td>
                <Link className="fxfct-link" to="/examenes/rmn">
                  RMN
                </Link>
              </td>
              <td>Integridad TFCC</td>
              <td>Alta sensibilidad</td>
            </tr>
            <tr>
              <td>Artro-RMN</td>
              <td>Comunicación articular</td>
              <td>Lesiones periféricas</td>
            </tr>
            <tr>
              <td>Artroscopia</td>
              <td>Visualización directa</td>
              <td>Gold standard</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxfct-subtitle">🏥 Tratamiento</p>
      <ul className="fxfct-list">
        <li>Inmovilización 4-6 semanas</li>
        <li>Modificación de actividades</li>
        <li>Rehabilitación progresiva</li>
        <li>Cirugía en lesiones periféricas con inestabilidad</li>
      </ul>

      <p className="fxfct-subtitle">🏋️ Rehabilitación</p>

      <div className="fxfct-table-wrapper">
        <table className="fxfct-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Objetivos</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Protección</td>
              <td>0-6 semanas</td>
            </tr>
            <tr>
              <td>2</td>
              <td>ROM progresivo</td>
              <td>6-10 semanas</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Fortalecimiento</td>
              <td>10-16 semanas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxfct-subtitle">Conclusión</p>
      <p className="fxfct-text">
        Las lesiones del TFCC requieren manejo individualizado según la
        localización y estabilidad asociada. Las lesiones centrales suelen
        tratarse conservadoramente, mientras que las periféricas con
        inestabilidad requieren reparación quirúrgica.
      </p>

    </div>
  );
}

export default LesionFCT;
