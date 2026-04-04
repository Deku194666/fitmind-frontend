import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EKG.css';

function Electrocardiograma() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="fxh-detail246">

      <p className="fxh-title">Electrocardiograma (ECG / EKG)</p>

      <p className="fxh-subtitle">Introducción 📌</p>

      <p className="fxh-text">
        El <strong>Electrocardiograma (ECG/EKG)</strong> es una prueba no invasiva que registra la
        actividad eléctrica del corazón mediante electrodos colocados en la piel.
        Permite evaluar el <strong>ritmo cardíaco, la conducción eléctrica y posibles signos de isquemia</strong>.
      </p>

      <p className="fxh-subtitle">¿Para qué sirve?</p>

      <ul className="fxh-list">

        <li>
          Detección de <Link to="/ecnt/arritmias">arritmias</Link>.
        </li>

        <li>
          Sospecha de infarto agudo de miocardio
          (<Link to="/ecnt/iam">IAM</Link>).
        </li>

        <li>
          Trastornos de conducción cardíaca.
        </li>

        <li>
          Evaluación de efectos de medicamentos o alteraciones electrolíticas.
        </li>

        <li>
          Control médico en chequeos o antes de procedimientos.
        </li>

      </ul>


      <p className="fxh-subtitle">Cómo se realiza 🧰</p>

      <ul className="fxh-list">

        <li>Se colocan 10 electrodos en pecho, brazos y piernas.</li>

        <li>Se registra un electrocardiograma de 12 derivaciones.</li>

        <li>Duración aproximada de 5 a 10 minutos.</li>

        <li>No requiere ayuno.</li>

      </ul>


      <p className="fxh-subtitle">Componentes del ECG 📈</p>

      <ul className="fxh-list">

        <li><strong>Onda P:</strong> despolarización auricular.</li>

        <li><strong>Complejo QRS:</strong> despolarización ventricular.</li>

        <li><strong>Onda T:</strong> repolarización ventricular.</li>

        <li><strong>Segmento ST:</strong> evaluación de posibles signos de isquemia.</li>

      </ul>


      <p className="fxh-subtitle">Valores orientativos</p>

      <div className="fxh-table-wrapper">

        <table className="fxh-table">

          <thead>
            <tr>
              <th>Parámetro</th>
              <th>Rango orientativo</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Frecuencia cardíaca</td>
              <td>60–100 lpm</td>
            </tr>

            <tr>
              <td>Intervalo PR</td>
              <td>120–200 ms</td>
            </tr>

            <tr>
              <td>Complejo QRS</td>
              <td>&lt;120 ms</td>
            </tr>

            <tr>
              <td>QT corregido (QTc)</td>
              <td>&lt;440–460 ms</td>
            </tr>

            <tr>
              <td>Eje eléctrico</td>
              <td>-30° a +90°</td>
            </tr>

          </tbody>

        </table>

      </div>


      <p className="fxh-subtitle">Hallazgos frecuentes</p>

      <ul className="fxh-list">

        <li>Fibrilación auricular (ritmo irregular sin ondas P).</li>

        <li>
          Elevación del ST en infarto agudo
          (<Link to="/ecnt/iam">IAM</Link>).
        </li>

        <li>Depresión del ST o inversión de onda T.</li>

        <li>Bloqueos de rama o bloqueos AV.</li>

        <li>Hipertrofia ventricular.</li>

      </ul>


      <p className="fxh-subtitle">Cuándo consultar de urgencia 🚑</p>

      <ul className="fxh-list">

        <li>
          Dolor torácico intenso o presión en el pecho
          (<Link to="/ecnt/iam">IAM</Link>).
        </li>

        <li>
          Palpitaciones con mareo o desmayo.
        </li>

        <li>
          Síntomas neurológicos súbitos
          (<Link to="/ecnt/acv">ACV</Link>).
        </li>

      </ul>


      <p className="fxh-subtitle">Limitaciones</p>

      <ul className="fxh-list">

        <li>Un ECG normal no descarta enfermedad cardíaca.</li>

        <li>Arritmias intermitentes pueden requerir monitoreo Holter.</li>

        <li>El mal posicionamiento de electrodos puede alterar la lectura.</li>

      </ul>


      <p className="fxh-subtitle">Riesgos</p>

      <p className="fxh-text">
        El electrocardiograma es una prueba muy segura.
        Los riesgos son mínimos y pueden incluir irritación leve en la piel por los electrodos.
      </p>


      <p className="fxh-subtitle">Conclusión</p>

      <p className="fxh-text">
        El <strong>Electrocardiograma</strong> es una herramienta fundamental para evaluar el ritmo
        y la actividad eléctrica del corazón. Permite detectar de forma rápida alteraciones como
        <Link to="/ecnt/arritmias"> arritmias</Link>,
        <Link to="/ecnt/iam"> infarto agudo de miocardio</Link> y
        <Link to="/ecnt/insuficienciacardiaca"> insuficiencia cardíaca</Link>.
      </p>

    </div>

  );

}

export default Electrocardiograma;