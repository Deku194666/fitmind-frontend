


import React, { useEffect } from 'react';
import './Amigos.css';

function Amigos() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detaill">

      <p className='fxh-title'>Comunidad – Amigos</p>

      <p className='fxh-subtitle'>👥 Introducción</p>
      <p className='fxh-text'>
        La subsección Amigos permite a los usuarios de FitMind conectar entre sí,
        crear redes de apoyo y visualizar el progreso compartido.
        Esta funcionalidad fortalece la adherencia a objetivos personales
        mediante interacción social estructurada y seguimiento mutuo.
      </p>

      <p className='fxh-subtitle'>🎯 Objetivos de la Sección</p>
      <ul className='fxh-list'>
        <li><strong>Facilitar conexiones</strong> entre usuarios con metas similares.</li>
        <li><strong>Permitir seguimiento de progreso</strong> en tiempo real.</li>
        <li><strong>Fomentar motivación colectiva</strong> mediante interacción positiva.</li>
        <li><strong>Crear responsabilidad compartida</strong> en el cumplimiento de objetivos.</li>
      </ul>

      <p className='fxh-subtitle'>⚙️ Funcionalidades Principales</p>

      <div className="fxh-flex">

        <div className="fxh-third">
          <p className='fxh-subsubtitle'>Conexión de Amigos</p>
          <ul className='fxh-list'>
            <li>Enviar solicitud de amistad</li>
            <li>Aceptar o rechazar solicitudes</li>
            <li>Lista de amigos activos</li>
            <li>Eliminación de conexión</li>
          </ul>
        </div>

        <div className="fxh-third">
          <p className='fxh-subsubtitle'>Visualización de Actividad</p>
          <ul className='fxh-list'>
            <li>Estados recientes</li>
            <li>Actualización de objetivos</li>
            <li>Logros desbloqueados</li>
            <li>Registro de progreso</li>
          </ul>
        </div>

        <div className="fxh-third">
          <p className='fxh-subsubtitle'>Interacción</p>
          <ul className='fxh-list'>
            <li>Comentarios motivacionales</li>
            <li>Reacciones positivas</li>
            <li>Mensajes directos (futuro)</li>
            <li>Notificaciones de actividad</li>
          </ul>
        </div>

      </div>

      <p className='fxh-subtitle'>📊 Flujo de Funcionamiento</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Etapa</th>
              <th>Acción</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Buscar usuario</td>
              <td>Perfil visible</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Enviar solicitud</td>
              <td>Solicitud pendiente</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Aceptación</td>
              <td>Conexión establecida</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Interacción</td>
              <td>Actividad compartida</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subtitle'>🔒 Privacidad y Control</p>
      <ul className='fxh-list'>
        <li><strong>Configuración de visibilidad:</strong> Perfil público o privado.</li>
        <li><strong>Control de publicaciones:</strong> Selección de audiencia.</li>
        <li><strong>Bloqueo de usuarios:</strong> Gestión de interacciones no deseadas.</li>
        <li><strong>Gestión de notificaciones:</strong> Personalización de alertas.</li>
      </ul>

      <p className='fxh-subtitle'>📌 Conclusión</p>
      <p className='fxh-text'>
        La subsección Amigos convierte la experiencia individual en una experiencia compartida.
        La interacción estructurada entre usuarios aumenta la motivación,
        refuerza la constancia y genera un entorno digital saludable orientado
        al crecimiento físico y mental.
      </p>

    </div>
  );
}

export default Amigos;