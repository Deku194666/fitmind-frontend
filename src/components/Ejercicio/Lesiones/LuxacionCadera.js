import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LuxacionCadera.css';

function LuxacionCadera() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lux-detail">

      <p className="lux-title">Luxación de Cadera</p>

      <p className="lux-subtitle">📌 Introducción</p>
      <p className="lux-text">
        La luxación de cadera representa una <strong>urgencia ortopédica</strong>.
        La luxación posterior (85-90%) es la más frecuente. Existe riesgo de 
        <strong> necrosis avascular (10-20%)</strong> si no se reduce antes de 6 horas.
      </p>

      <p className="lux-subtitle">🦴 Anatomía Clave</p>
      <ul className="lux-list">
        <li><strong>Estabilizadores:</strong> Labrum acetabular, ligamento iliofemoral, morfología ósea.</li>
        <li><strong>Relaciones:</strong> Nervio ciático y arteria circunfleja medial.</li>
      </ul>

      <p className="lux-subtitle">📊 Clasificación Thompson-Epstein</p>
      <div className="lux-table-wrapper">
        <table className="lux-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Características</th>
              <th>Frecuencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>Luxación simple</td>
              <td>25-30%</td>
            </tr>
            <tr>
              <td>II</td>
              <td>Fractura pared posterior</td>
              <td>40-45%</td>
            </tr>
            <tr>
              <td>III</td>
              <td>Fractura reborde acetabular</td>
              <td>10-15%</td>
            </tr>
            <tr>
              <td>IV</td>
              <td>Fractura fondo acetábulo</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>V</td>
              <td>Fractura cabeza femoral</td>
              <td>5-10%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="lux-subtitle">🩺 Estudios de Imagen</p>
      <div className="lux-table-wrapper">
        <table className="lux-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/examenes/rx">Radiografía</Link></td>
              <td>Relación articular, fracturas</td>
              <td>AP pelvis + Judet</td>
            </tr>
            <tr>
              <td><Link to="/examenes/tc">TC</Link></td>
              <td>Fragmentos intraarticulares</td>
              <td>Post-reducción obligatorio</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Partes blandas</td>
              <td>Evaluar necrosis tardía</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="lux-subtitle">🏥 Manejo Inicial</p>
      <ul className="lux-list">
        <li><strong>Reducción cerrada urgente</strong> (Allis, Stimson, Bigelow)</li>
        <li>Sedación profunda</li>
        <li>Máximo 3 intentos</li>
        <li>TC post-reducción obligatorio</li>
      </ul>

      <p className="lux-subtitle">🔪 Tratamiento Quirúrgico</p>
      <ul className="lux-list">
        <li>Reducción abierta fallida</li>
        <li>Inestabilidad persistente</li>
        <li>Fracturas asociadas</li>
        <li>Luxación abierta</li>
      </ul>

      <p className="lux-subtitle">🔄 Rehabilitación</p>
      <div className="lux-table-wrapper">
        <table className="lux-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Objetivos</th>
              <th>Actividades</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0-4 sem</td>
              <td>Protección</td>
              <td>Movilización pasiva</td>
            </tr>
            <tr>
              <td>4-8 sem</td>
              <td>Recuperar ROM</td>
              <td>Ejercicios activos</td>
            </tr>
            <tr>
              <td>8-12 sem</td>
              <td>Fortalecer</td>
              <td>Resistencia progresiva</td>
            </tr>
            <tr>
              <td>3-6 mes</td>
              <td>Retorno funcional</td>
              <td>Entrenamiento específico</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="lux-subtitle">⚠️ Complicaciones</p>
      <ul className="lux-list">
        <li>Necrosis avascular</li>
        <li>Artrosis postraumática</li>
        <li>Inestabilidad recurrente</li>
        <li>Lesión nervio ciático</li>
      </ul>

      <p className="lux-subtitle">Conclusión</p>
      <p className="lux-text">
        La reducción precoz (&lt;6 horas) es clave para evitar necrosis avascular.
        El seguimiento prolongado es fundamental.
      </p>

    </div>
  );
}

export default LuxacionCadera;
