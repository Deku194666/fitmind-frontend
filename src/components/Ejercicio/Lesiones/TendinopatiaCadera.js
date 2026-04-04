import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TendinopatiaCadera.css';

function TendinopatiaCadera() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail45">
      <p className="fxh-title">Tendinopatías de Cadera y Roturas Tendinosas</p>

      <p className="fxh-subtitle">📌 Introducción</p>
      <p className="fxh-text">
        Las <strong>tendinopatías de cadera</strong> afectan con mayor frecuencia a los tendones glúteos,
        particularmente el <strong>glúteo medio</strong> y el <strong>glúteo menor</strong>.
        Son una causa común de dolor lateral de cadera, especialmente en mujeres de mediana edad.
        Las <strong>roturas tendinosas</strong> pueden ocurrir por traumatismos, sobrecarga crónica o degeneración relacionada con la edad.
      </p>

      <p className="fxh-subtitle">Anatomía Clave 🦴</p>
      <ul className="fxh-list">
        <li><strong>Glúteo medio y menor</strong>: Inserción en trocánter mayor, estabilizan pelvis en la marcha.</li>
        <li><strong>Psoas ilíaco</strong>: Tendón anterior potente, implicado en tendinopatías anteriores.</li>
        <li><strong>Relacionados</strong>: Tensor fascia lata, piriforme y rotadores externos.</li>
      </ul>

      <p className="fxh-subtitle">Clasificación Clínica 📊</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Lesión</th>
              <th>Síntomas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>I (Leve)</strong></td>
              <td>Tendinitis reactiva</td>
              <td>Dolor leve al apoyo, sin pérdida de fuerza</td>
            </tr>
            <tr>
              <td><strong>II (Moderado)</strong></td>
              <td>Degeneración (tendinosis)</td>
              <td>Dolor persistente, debilidad, claudicación</td>
            </tr>
            <tr>
              <td><strong>III (Severa)</strong></td>
              <td>Rotura parcial o completa</td>
              <td>Dolor agudo, incapacidad, signo de Trendelenburg</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Diagnóstico 🩺</p>

      <p className="fxh-subsubtitle">1. Evaluación Clínica</p>
      <ul className="fxh-list">
        <li><strong>Dolor lateral</strong>: Palpación sobre trocánter mayor</li>
        <li><strong>Prueba Trendelenburg</strong>: Positiva en rotura glútea</li>
        <li><strong>Resistencia a abducción</strong>: Dolor y debilidad</li>
      </ul>

      <p className="fxh-subsubtitle">2. Estudios de Imagen</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Prueba</th>
              <th>Hallazgos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ecografía</td>
              <td>Tendón engrosado o roto</td>
              <td>Diagnóstico inicial y guía infiltraciones</td>
            </tr>
            <tr>
              <td><Link to="/examenes/rmn">RMN</Link></td>
              <td>Rotura, edema, atrofia muscular</td>
              <td>Gold standard diagnóstico</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Tratamiento Conservador 🏥</p>
      <ul className="fxh-list">
        <li>Reposo relativo y corrección biomecánica</li>
        <li>Ejercicios excéntricos y estabilización pélvica</li>
        <li>Infiltraciones (corticoides o PRP)</li>
        <li>Ondas de choque en tendinosis crónica</li>
      </ul>

      <p className="fxh-subtitle">Tratamiento Quirúrgico 🔪</p>
      <ul className="fxh-list">
        <li><strong>Reparación abierta/artroscópica</strong>: Sutura al trocánter mayor</li>
        <li><strong>Transferencias musculares</strong>: Casos severos</li>
        <li><strong>Descompresión trocantérica</strong>: En bursitis asociada</li>
      </ul>

      <p className="fxh-subsubtitle">Postoperatorio</p>
      <ul className="fxh-list">
        <li>Descarga parcial 4-6 semanas</li>
        <li>Fisioterapia progresiva desde semana 2</li>
        <li>Retorno deportivo 4-6 meses</li>
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
              <td>0-2 sem</td>
              <td>Control dolor, evitar sobrecarga</td>
              <td>2 semanas</td>
            </tr>
            <tr>
              <td>2-6 sem</td>
              <td>Activación neuromuscular</td>
              <td>4 semanas</td>
            </tr>
            <tr>
              <td>6-12 sem</td>
              <td>Fortalecimiento glúteo medio/menor</td>
              <td>6 semanas</td>
            </tr>
            <tr>
              <td>3-6 meses</td>
              <td>Ejercicios funcionales</td>
              <td>3 meses</td>
            </tr>
            <tr>
              <td>6+ meses</td>
              <td>Retorno deportivo</td>
              <td>Según evolución</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fxh-subtitle">Prevención 🛡️</p>
      <ul className="fxh-list">
        <li>Fortalecimiento glúteo medio y core</li>
        <li>Corrección patrón de marcha</li>
        <li>Evitar sobreuso en corredores</li>
        <li>Estiramientos controlados</li>
      </ul>

      <p className="fxh-subtitle">Conclusión</p>
      <p className="fxh-text">
        Las tendinopatías y roturas tendinosas de cadera son causa frecuente de dolor y disfunción.
        El tratamiento debe ser integral, combinando terapia conservadora y, en casos severos,
        reparación quirúrgica. La rehabilitación adecuada es clave para prevenir recaídas.
      </p>
    </div>
  );
}

export default TendinopatiaCadera;
