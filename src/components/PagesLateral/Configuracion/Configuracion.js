
import React, { useEffect } from 'react';
import './Configuracion.css';

function Configuracion() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detaill">

      <p className='fxh-title'>Configuración</p>

      <p className='fxh-subtitle'>⚙️ Introducción</p>
      <p className='fxh-text'>
        La sección Configuración permite al usuario personalizar los parámetros
        fundamentales de su experiencia en FitMind. Aquí se establecen metas,
        límites y preferencias que impactan directamente en el seguimiento
        diario de salud física y mental.
      </p>

      <p className='fxh-subtitle'>🎯 Objetivos de la Sección</p>
      <ul className='fxh-list'>
        <li><strong>Personalizar metas diarias</strong> según necesidades individuales.</li>
        <li><strong>Ajustar parámetros nutricionales</strong> y de hidratación.</li>
        <li><strong>Optimizar el seguimiento automático</strong> del sistema.</li>
        <li><strong>Permitir escalabilidad futura</strong> con nuevas variables.</li>
      </ul>

      <p className='fxh-subtitle'>⚙️ Parámetros Iniciales Configurables</p>

      <div className="fxh-flex">

        <div className="fxh-third">
          <p className='fxh-subsubtitle'>Nutrición</p>
          <ul className='fxh-list'>
            <li>Calorías diarias objetivo</li>
            <li>Distribución de macronutrientes</li>
            <li>Restricciones alimentarias</li>
            <li>Meta de comidas diarias</li>
          </ul>
        </div>

        <div className="fxh-third">
          <p className='fxh-subsubtitle'>Hidratación</p>
          <ul className='fxh-list'>
            <li>Meta diaria de agua (ml)</li>
            <li>Recordatorios automáticos</li>
            <li>Seguimiento de consumo</li>
            <li>Historial semanal</li>
          </ul>
        </div>

        <div className="fxh-third">
          <p className='fxh-subsubtitle'>Salud General</p>
          <ul className='fxh-list'>
            <li>Peso actual</li>
            <li>Altura</li>
            <li>Nivel de actividad física</li>
            <li>Objetivo (mantener, perder, ganar)</li>
          </ul>
        </div>

      </div>

      <p className='fxh-subtitle'>📊 Flujo de Configuración</p>
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
              <td>Ingreso de datos iniciales</td>
              <td>Perfil personalizado</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ajuste de metas</td>
              <td>Objetivos definidos</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Guardado de configuración</td>
              <td>Datos persistentes</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Monitoreo diario</td>
              <td>Seguimiento automático</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subtitle'>🔒 Control y Seguridad</p>
      <ul className='fxh-list'>
        <li><strong>Actualización dinámica:</strong> Los cambios pueden modificarse en cualquier momento.</li>
        <li><strong>Persistencia segura:</strong> Datos almacenados en base de datos protegida.</li>
        <li><strong>Impacto inmediato:</strong> Las metas actualizadas afectan los cálculos del sistema.</li>
        <li><strong>Escalabilidad:</strong> Preparado para agregar nuevas métricas en el futuro.</li>
      </ul>

      <p className='fxh-subtitle'>📌 Conclusión</p>
      <p className='fxh-text'>
        La sección Configuración es el núcleo de personalización de FitMind.
        Permite adaptar el sistema a la realidad de cada usuario, asegurando
        precisión en el monitoreo y coherencia en el seguimiento de metas
        a corto, mediano y largo plazo.
      </p>

    </div>
  );
}

export default Configuracion;