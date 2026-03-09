import React, { useEffect } from 'react';
import './Comunidad.css';
import BarNavComunidad from './BarNavComunidad';


function Comunidad() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detaill">
      <BarNavComunidad/>

      <p className='fxh-title'>Comunidad FitMind</p>


      <p className='fxh-subtitle'>🌍 Introducción</p>
      <p className='fxh-text'>
        La Comunidad de FitMind es un espacio diseñado para conectar personas que comparten
        un objetivo en común: mejorar su bienestar físico y mental.
        Aquí podrás compartir metas, interactuar con otros usuarios y crear una red
        de apoyo basada en motivación, constancia y crecimiento personal.
      </p>

      <p className='fxh-subtitle'>🎯 Objetivos de la Comunidad</p>
      <ul className='fxh-list'>
        <li><strong>Conectar usuarios</strong> con intereses similares en salud y bienestar.</li>
        <li><strong>Fomentar responsabilidad compartida</strong> mediante metas públicas.</li>
        <li><strong>Crear motivación colectiva</strong> basada en progreso real.</li>
        <li><strong>Promover hábitos saludables</strong> a través del apoyo social.</li>
      </ul>

      <p className='fxh-subtitle'>👥 Funcionalidades Principales</p>

      <div className="fxh-flex">

        <div className="fxh-third">
          <p className='fxh-subsubtitle'>Perfiles Sociales</p>
          <ul className='fxh-list'>
            <li>Foto y descripción personal</li>
            <li>Metas activas visibles</li>
            <li>Historial de logros</li>
            <li>Nivel de consistencia</li>
          </ul>
        </div>

        <div className="fxh-third">
          <p className='fxh-subsubtitle'>Publicación de Objetivos</p>
          <ul className='fxh-list'>
            <li>Metas físicas y mentales</li>
            <li>Seguimiento de progreso</li>
            <li>Actualizaciones periódicas</li>
            <li>Visibilidad configurable</li>
          </ul>
        </div>

        <div className="fxh-third">
          <p className='fxh-subsubtitle'>Interacción Social</p>
          <ul className='fxh-list'>
            <li>Comentarios motivacionales</li>
            <li>Reacciones positivas</li>
            <li>Sistema de amigos</li>
            <li>Seguimiento de progreso</li>
          </ul>
        </div>

      </div>

      <p className='fxh-subtitle'>📊 Dinámica de Funcionamiento</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Etapa</th>
              <th>Acción del Usuario</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Crear objetivo</td>
              <td>Meta visible en perfil</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Actualizar progreso</td>
              <td>Actividad publicada en feed</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Interacción social</td>
              <td>Motivación y apoyo colectivo</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Cumplimiento</td>
              <td>Logro desbloqueado</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subtitle'>🚀 Futuro de la Comunidad</p>
      <ul className='fxh-list'>
        <li><strong>Ranking de consistencia</strong> basado en hábitos registrados.</li>
        <li><strong>Retos grupales</strong> con objetivos compartidos.</li>
        <li><strong>Badges y logros</strong> desbloqueables.</li>
        <li><strong>Integración con métricas de salud</strong> en tiempo real.</li>
      </ul>

      <p className='fxh-subtitle'>📌 Conclusión</p>
      <p className='fxh-text'>
        La sección Comunidad transforma FitMind en algo más que una app de seguimiento.
        La convierte en un ecosistema social donde el progreso individual se fortalece
        gracias al apoyo colectivo. La motivación compartida aumenta la adherencia,
        mejora la constancia y genera un entorno positivo centrado en la salud integral.
      </p>

    </div>
  );
}

export default Comunidad;