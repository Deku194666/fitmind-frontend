import React, { useEffect } from 'react';
import './HigieneSueno.css';

function HigieneSueno() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sueno-container">

      <p className="p137"> Higiene del Sueño </p>

      <p className="p147"> 📌 Introducción</p>
      <p className="p157">
        La <strong> higiene del sueño </strong> comprende hábitos y condiciones que favorecen un sueño reparador y continuo.
        Entre el 30–40% de los adultos presenta insomnio ocasional y cerca del 10% lo padece de forma crónica.
        Dormir bien es clave para la salud mental, metabólica y cardiovascular.
      </p>

      <p className="p147"> 🧠 Fisiología del Sueño</p>
      <ul className="p157" style={{ listStyleType: 'disc' }}>
        <li><strong>Ritmo circadiano:</strong> regulado por el núcleo supraquiasmático y la melatonina</li>
        <li><strong>Arquitectura:</strong> 4–6 ciclos NREM (1–3) y REM por noche</li>
        <li><strong>Funciones:</strong> memoria, reparación tisular y regulación hormonal</li>
      </ul>

      <p className="p147"> 🌟 Recomendaciones Clave</p>
      <table>
        <thead>
          <tr>
            <th> Área </th>
            <th> Recomendación </th>
            <th> Impacto </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Horario</td>
            <td>Dormir y despertar a la misma hora</td>
            <td>Sincroniza el reloj biológico</td>
          </tr>
          <tr>
            <td>Ambiente</td>
            <td>Oscuro, silencioso, 18–22°C</td>
            <td>Facilita inicio y mantención del sueño</td>
          </tr>
          <tr>
            <td>Pantallas</td>
            <td>Evitar 1–2 h antes de dormir</td>
            <td>Reduce supresión de melatonina</td>
          </tr>
        </tbody>
      </table>

      <p className="p147"> ⚠️ Hábitos Perjudiciales</p>
      <ul className="p157" style={{ listStyleType: 'disc' }}>
        <li>Cafeína, nicotina y alcohol</li>
        <li>Siestas &gt; 30 min o después de las 15 h</li>
        <li>Comidas copiosas nocturnas</li>
        <li>Ejercicio intenso antes de dormir</li>
      </ul>

      <p className="p147"> 🧘 Técnicas de Relajación</p>
      <p className="p167">Respiración 4–7–8</p>
      <ul className="p157" style={{ listStyleType: 'disc' }}>
        <li>Inhalar 4 segundos</li>
        <li>Mantener 7 segundos</li>
        <li>Exhalar 8 segundos</li>
        <li>Repetir 4–5 veces</li>
      </ul>

      <p className="p167">Relajación muscular progresiva</p>
      <table>
        <thead>
          <tr>
            <th>Paso</th>
            <th>Duración</th>
            <th>Grupo muscular</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>5 seg</td>
            <td>Tensar pies y piernas</td>
          </tr>
          <tr>
            <td>2</td>
            <td>30 seg</td>
            <td>Relajar completamente</td>
          </tr>
          <tr>
            <td>3</td>
            <td>-</td>
            <td>Repetir ascendiendo</td>
          </tr>
        </tbody>
      </table>

      <p className="p147"> 💊 Suplementos</p>
      <table>
        <thead>
          <tr>
            <th>Sustancia</th>
            <th>Dosis</th>
            <th>Evidencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Melatonina</td>
            <td>0.5–5 mg</td>
            <td>Jet lag / ritmo circadiano</td>
          </tr>
          <tr>
            <td>Magnesio</td>
            <td>200–400 mg</td>
            <td>Útil en déficit</td>
          </tr>
          <tr>
            <td>Valeriana</td>
            <td>300–600 mg</td>
            <td>Evidencia inconsistente</td>
          </tr>
        </tbody>
      </table>

      <p className="p147"> 📌 Conclusión</p>
      <p className="p157">
        La <strong> higiene del sueño </strong> es un pilar fundamental de la salud.
        Pequeños cambios en hábitos y ambiente pueden generar grandes beneficios.
        En casos persistentes, se recomienda evaluación por medicina del sueño.
      </p>

    </div>
  );
}

export default HigieneSueno;
