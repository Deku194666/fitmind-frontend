import React, { useEffect } from 'react';
import './TrasBipolar.css';

function TrasBipolar() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">

      <p className='fxh-title'>Trastorno Bipolar</p>

      <p className='fxh-subtitle'>📌 Introducción</p>
      <p className='fxh-text'>
        El <strong>Trastorno Bipolar</strong> es una condición mental compleja que afecta a aproximadamente el 2.4% de la población mundial. 
        Se caracteriza por fluctuaciones extremas en el estado de ánimo, alternando episodios de manía/hipomanía y depresión severa, 
        con cambios neurobiológicos demostrables que afectan la calidad de vida y las relaciones.
      </p>

      <p className='fxh-subtitle'>🧠 Tipos de Trastorno Bipolar</p>

      <p className='fxh-subsubtitle'>📌 Tipo I</p>
      <ul className='fxh-list'>
        <li>Episodios maníacos completos (≥1 semana).</li>
        <li>Puede requerir hospitalización.</li>
        <li>Fases depresivas frecuentes.</li>
      </ul>

      <p className='fxh-subsubtitle'>📌 Tipo II</p>
      <ul className='fxh-list'>
        <li>Hipomanía (≥4 días) + depresión mayor.</li>
        <li>Nunca presenta manía completa.</li>
        <li>Mayor riesgo de diagnóstico erróneo.</li>
      </ul>

      <p className='fxh-subsubtitle'>📌 Ciclotímia</p>
      <ul className='fxh-list'>
        <li>Síntomas más leves pero crónicos (≥2 años).</li>
        <li>Alternancia rápida entre hipomanía y depresión leve.</li>
      </ul>

      <p className='fxh-subtitle'>🧬 Fisiopatología</p>
      <ul className='fxh-list'>
        <li><strong>Desequilibrio neuroquímico:</strong> Dopamina ↑ (manía), Serotonina ↓ (depresión).</li>
        <li><strong>Cambios estructurales:</strong> Amígdala hiperactiva, Corteza prefrontal menos conectada.</li>
      </ul>

      <p className='fxh-subtitle'>📌 Factores de Riesgo</p>

      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Biológicos</th>
              <th>Psicológicos</th>
              <th>Ambientales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Historia familiar</td>
              <td>Búsqueda de sensaciones</td>
              <td>Estrés agudo</td>
            </tr>
            <tr>
              <td>Alteraciones en canales iónicos</td>
              <td>Creatividad elevada</td>
              <td>Alteraciones del sueño</td>
            </tr>
            <tr>
              <td>Comorbilidad con migraña o epilepsia</td>
              <td>Pensamiento acelerado</td>
              <td>Abuso de sustancias</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subtitle'>🚨 Síntomas Clave (DSM-5)</p>

      <p className='fxh-subsubtitle'>Episodio Maníaco (Tipo I)</p>
      <ul className='fxh-list'>
        <li>Euforia o irritabilidad extrema.</li>
        <li>Energía aumentada con poco sueño.</li>
        <li>Habla rápida y pensamiento acelerado.</li>
        <li>Conductas riesgosas.</li>
        <li>Delirios de grandeza (casos graves).</li>
      </ul>

      <p className='fxh-subsubtitle'>Episodio Hipomaníaco (Tipo II)</p>
      <ul className='fxh-list'>
        <li>Síntomas similares pero menos intensos.</li>
        <li>Sin deterioro laboral/social grave.</li>
        <li>Duración ≥4 días.</li>
      </ul>

      <p className='fxh-subsubtitle'>Episodio Depresivo</p>
      <ul className='fxh-list'>
        <li>Igual sintomatología que depresión mayor.</li>
        <li>Suele ser más prolongado que las fases de manía.</li>
      </ul>

      <p className='fxh-subtitle'>🩺 Diagnóstico</p>

      <p className='fxh-subsubtitle'>Evaluación Clínica</p>
      <ul className='fxh-list'>
        <li>Entrevista psiquiátrica detallada.</li>
        <li>Historial familiar y de síntomas.</li>
        <li>Escalas como YMRS.</li>
      </ul>

      <p className='fxh-subsubtitle'>Diagnóstico Diferencial</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Condición</th>
              <th>Diferencias</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TDAH</td>
              <td>Síntomas constantes (no episódicos)</td>
            </tr>
            <tr>
              <td>Esquizofrenia</td>
              <td>Psicosis persistente</td>
            </tr>
            <tr>
              <td>Trastorno límite</td>
              <td>Cambios rápidos de humor (horas/días)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subsubtitle'>Exámenes Complementarios</p>
      <ul className='fxh-list'>
        <li>Analítica: función tiroidea, toxicología.</li>
        <li>Neuroimagen en casos atípicos.</li>
      </ul>

      <p className='fxh-subtitle'>💊 Tratamiento Médico</p>

      <p className='fxh-subsubtitle'>Farmacológico</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Medicamentos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Manía</td>
              <td>Litio, antipsicóticos (quetiapina)</td>
            </tr>
            <tr>
              <td>Depresión</td>
              <td>Quetiapina, lurasidona (evitar ISRS solos)</td>
            </tr>
            <tr>
              <td>Mantenimiento</td>
              <td>Litio, valproato, lamotrigina</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subsubtitle'>No Farmacológico</p>
      <ul className='fxh-list'>
        <li>Psicoeducación: entender desencadenantes.</li>
        <li>TERAPIA IPSRT: regular ritmos sociales.</li>
        <li>Grupos de apoyo: compartir experiencias.</li>
      </ul>

      <p className='fxh-subtitle'>🌱 Prevención y Manejo</p>

      <p className='fxh-subsubtitle'>Monitoreo Continuo</p>
      <ul className='fxh-list'>
        <li>Apps como eMoods para registrar síntomas.</li>
        <li>Identificar señales de alerta temprana.</li>
      </ul>

      <p className='fxh-subsubtitle'>Rutinas Estables</p>
      <ul className='fxh-list'>
        <li>Horarios regulares de sueño.</li>
        <li>Evitar estimulantes.</li>
      </ul>

      <p className='fxh-subsubtitle'>Plan de Crisis</p>
      <ul className='fxh-list'>
        <li>Contactos de emergencia.</li>
        <li>Manejo financiero (evitar gastos impulsivos).</li>
      </ul>

      <p className='fxh-subtitle'>📌 Conclusión</p>
      <p className='fxh-text'>
        El <strong>Trastorno Bipolar</strong> representa un desafío único, con altibajos emocionales marcados. 
        Con tratamiento integral y seguimiento, se puede gestionar efectivamente, 
        permitiendo llevar una vida plena y productiva.
      </p>

    </div>
  );
}

export default TrasBipolar;
