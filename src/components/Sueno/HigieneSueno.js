

import React, { useEffect } from 'react';

function HigieneSueno() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Higiene del Sueño: Guía Completa</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La <strong>Higiene del sueño</strong> se refiere a los hábitos y prácticas que favorecen un sueño reparador y continuo. 
        El 30-40% de los adultos experimentan insomnio ocasional, y en el 10% se vuelve crónico. Una buena higiene del sueño puede 
        mejorar la calidad de vida, rendimiento cognitivo y salud metabólica.
      </p>

      <p className='p14'>Fisiología del Sueño 🧠</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Ciclos circadianos</strong>: Regulados por el núcleo supraquiasmático y la melatonina
        </li>
        <li>
          <strong>Arquitectura del sueño</strong>: 4-6 ciclos de sueño NREM (etapas 1-3) y REM por noche
        </li>
        <li>
          <strong>Función</strong>: Consolidación de memoria, reparación tisular, regulación hormonal
        </li>
      </ul>

      <p className='p14'>Recomendaciones Clave 🌟</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Área</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Recomendación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Impacto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Horario</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Acostarse/levantarse misma hora (±30 min)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sincroniza reloj biológico</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Ambiente</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oscuridad total, 18-22°C, silencio</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Facilita inicio y mantenimiento del sueño</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Pantallas</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evitar 1-2h antes de dormir</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reduce supresión de melatonina</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Hábitos Perjudiciales ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Estimulantes</strong>: Cafeína (hasta 8h antes), nicotina, alcohol</li>
        <li><strong>Siestas largas</strong>: mayor a 30 min o después de las 15h</li>
        <li><strong>Comidas pesadas</strong>: Cenar menor a 2h antes de dormir</li>
        <li><strong>Ejercicio intenso</strong>: menor a 3h antes de acostarse</li>
      </ul>

      <p className='p14'>Técnicas de Relajación 🧘‍♂️</p>
      <p className='p16'>1. Respiración 4-7-8</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Inhalar 4 segundos</li>
        <li>Mantener 7 segundos</li>
        <li>Exhalar 8 segundos</li>
        <li>Repetir 4-5 veces</li>
      </ul>

      <p className='p16'>2. Relajación muscular progresiva</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Paso</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Duración</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grupo muscular</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5 segundos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tensar pies/piernas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>30 segundos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Relajar completamente</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Repetir ascendiendo</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Trastornos Comunes del Sueño 🩺</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Insomnio</strong>: Dificultad para iniciar/mantener el sueño</li>
        <li><strong>Apnea del sueño</strong>: Interrupciones respiratorias</li>
        <li><strong>Síndrome piernas inquietas</strong>: Necesidad de mover piernas</li>
        <li><strong>Narcolepsia</strong>: Somnolencia diurna excesiva</li>
      </ul>

      <p className='p14'>Suplementos y Fármacos 💊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sustancia</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Evidencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Melatonina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>0.5-5mg 1h antes</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓ Jet lag/alteraciones circadianas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Magnesio</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>200-400mg</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓ Déficit confirmado</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Valeriana</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>300-600mg</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Resultados contradictorios</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tecnología y Sueño 📱</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Dispositivos wearables</strong>: Anillos Oura, relojes Garmin/Apple Watch</li>
        <li><strong>Luz roja/nocturna</strong>: Menor impacto en melatonina</li>
        <li><strong>Filtros blue light</strong>: Efectividad moderada</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La <strong> Higiene del sueño </strong> es fundamental para la salud general. Pequeños cambios en rutinas y ambiente pueden mejorar 
        significativamente la calidad del sueño. En casos persistentes, se recomienda consultar con un especialista en 
        medicina del sueño para descartar trastornos subyacentes.
      </p>
    </div>
  );
}

export default HigieneSueno;