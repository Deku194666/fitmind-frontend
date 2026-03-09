import React, { useEffect, useState } from 'react';
import './Bienestarmental.css';
import NavBarMind from './NavBarMind';
import axios from 'axios';

const BienestarMental = () => {

  const [yoga, setYoga] = useState(null);

  useEffect(() => {
    let cancel = false;

    const fetchYoga = async () => {
      const usuario_id = localStorage.getItem('usuario_id');
      if (!usuario_id) return;

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/yoga/${usuario_id}`,
          { headers: { 'user-id': usuario_id } }
        );
        if (!cancel) setYoga(res.data ?? null);
      } catch (error) {
        if (error.response?.status === 404) {
          if (!cancel) setYoga(null);
        } else {
          console.error('Error al cargar yoga:', error.response?.data || error.message);
        }
      }
    };

    fetchYoga();

    const onNuevo = (e) => {
      if (e.detail?.tipo === 'yoga') fetchYoga();
    };

    window.addEventListener('ejercicio:registrado', onNuevo);

    return () => {
      cancel = true;
      window.removeEventListener('ejercicio:registrado', onNuevo);
    };
  }, []);

  return (
    <div className="fxh-detail4">

      <NavBarMind />

      <p className='fxh-title'>Bienestar Mental</p>
      <p className='fxh-subtitle'>
        Una Guía Integral para el Equilibrio Emocional y la Salud Psicológica 🧠🧘
      </p>

      <p className='fxh-text'>
        El <strong>Bienestar Mental</strong> es un componente esencial de nuestra salud general que afecta cómo pensamos,
        sentimos y actuamos en nuestra vida diaria. En el módulo de <strong>FitMind</strong>, nos enfocamos en proporcionarte
        herramientas prácticas y conocimientos científicos para cultivar una mente saludable, manejar el estrés
        efectivamente y desarrollar resiliencia emocional.
      </p>

      <p className='fxh-subtitle'>📌 Comprendiendo el Bienestar Mental</p>

      <p className='fxh-text'>
        El bienestar mental va más allá de la simple ausencia de trastornos psicológicos. Se trata de:
      </p>

      <ul className='fxh-list'>
        <li>Estado de equilibrio emocional.</li>
        <li>Capacidad para manejar el estrés cotidiano.</li>
        <li>Habilidades para mantener relaciones satisfactorias.</li>
        <li>Flexibilidad para adaptarse a los cambios.</li>
        <li>Sentido de propósito y significado en la vida.</li>
      </ul>

      <p className='fxh-subtitle'>📌 Pilares Fundamentales</p>

      <p className='fxh-subsubtitle'>Autoconocimiento emocional</p>
      <ul className='fxh-list'>
        <li>Técnicas de identificación y registro de emociones.</li>
        <li>Desarrollo de inteligencia emocional.</li>
        <li>Mindfulness para la conciencia plena.</li>
      </ul>

      <p className='fxh-subsubtitle'>Gestión del estrés</p>
      <ul className='fxh-list'>
        <li>Técnicas de respiración consciente.</li>
        <li>Relajación muscular progresiva.</li>
        <li>Planificación anti-estrés.</li>
      </ul>

      <p className='fxh-subsubtitle'>Hábitos mentales positivos</p>
      <ul className='fxh-list'>
        <li>Cultivo de pensamientos constructivos.</li>
        <li>Práctica de gratitud diaria.</li>
        <li>Reframing cognitivo.</li>
      </ul>

      <p className='fxh-subtitle'>📌 Herramientas Prácticas en FitMind</p>

      <p className='fxh-subsubtitle'>Rutinas diarias</p>
      <ul className='fxh-list'>
        <li>Meditación guiada por niveles.</li>
        <li>Journaling emocional.</li>
        <li>Pausas activas mentales.</li>
      </ul>

      <p className='fxh-subsubtitle'>Programas especializados</p>
      <ul className='fxh-list'>
        <li>Manejo de ansiedad en 21 días.</li>
        <li>Fortalecimiento de autoestima.</li>
        <li>Desarrollo de resiliencia.</li>
      </ul>

      <p className='fxh-subsubtitle'>Tecnología y bienestar</p>
      <ul className='fxh-list'>
        <li>Wearables para monitoreo del estrés.</li>
        <li>Apps de seguimiento emocional.</li>
        <li>Realidad virtual aplicada a relajación.</li>
      </ul>

      <p className='fxh-subtitle'>📌 Integración con el Bienestar Físico</p>

      <ul className='fxh-list'>
        <li>El ejercicio mejora la salud mental.</li>
        <li>La nutrición influye en el estado de ánimo.</li>
        <li>El descanso impacta la estabilidad emocional.</li>
      </ul>

      <p className='fxh-text'>
        En <strong>FitMind</strong>, entendemos que el bienestar mental es un proceso continuo que requiere
        herramientas adecuadas y acompañamiento profesional. Nuestro módulo ofrece un enfoque integral,
        práctico y basado en evidencia científica para ayudarte a desarrollar fortaleza psicológica
        y disfrutar una vida más plena y equilibrada.
      </p>

    </div>
  );
};

export default BienestarMental;
