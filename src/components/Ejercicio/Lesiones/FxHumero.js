import React, { useEffect } from 'react';
import './FxHumero.css';

function FxHumero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fxh-detail">
      <p className='fxh-title'>Fracturas de Húmero</p>

      <p className='fxh-subtitle'>📌 Introducción</p>
      <p className='fxh-text'>
        Las fracturas de húmero representan aproximadamente el <strong>3-5% de todas las fracturas</strong> en adultos. 
        Pueden ocurrir en diferentes niveles: proximal (45%), diáfisis (35%) y distal (20%). 
        Su tratamiento varía según la localización, desplazamiento y características del paciente.
      </p>

      <p className='fxh-subtitle'>Anatomía Clave 🦴</p>
      <ul className='fxh-list'>
        <li><strong>Húmero proximal:</strong> Cabeza anatómica, troquíter, troquín y diáfisis</li>
        <li><strong>Diáfisis humeral:</strong> Relación con nervio radial en surco espiral</li>
        <li><strong>Húmero distal:</strong> Cóndilo, epitróclea y fosa olecraneana</li>
        <li><strong>Vascularización:</strong> Arteria humeral profunda y circunflejas</li>
      </ul>

      <p className='fxh-subtitle'>Clasificación de Fracturas 📊</p>

      <p className='fxh-subsubtitle'>Fracturas proximales (Neer):</p>
      <ul className='fxh-list'>
        <li><strong>1 parte:</strong> No desplazada o mínimamente desplazada</li>
        <li><strong>2 partes:</strong> Una parte desplazada mayor a 1cm o mayor a 45°</li>
        <li><strong>3 partes:</strong> Dos partes desplazadas</li>
        <li><strong>4 partes:</strong> Todas partes desplazadas</li>
      </ul>

      <p className='fxh-subsubtitle'>Fracturas diafisarias (AO):</p>
      <div className="fxh-table-wrapper">
        <table className="fxh-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>Fracturas simples</td>
            </tr>
            <tr>
              <td>B</td>
              <td>Fragmento en cuña</td>
            </tr>
            <tr>
              <td>C</td>
              <td>Fracturas complejas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subtitle'>Mecanismos de Lesión 🤕</p>
      <ul className='fxh-list'>
        <li><strong>Trauma directo:</strong> Caídas, accidentes deportivos</li>
        <li><strong>Trauma indirecto:</strong> Caída sobre mano extendida</li>
        <li><strong>Traumatismos de alta energía:</strong> Accidentes vehiculares</li>
        <li><strong>Fracturas patológicas:</strong> Metástasis, osteoporosis</li>
      </ul>

      <p className='fxh-subtitle'>Diagnóstico 🩺</p>
      <p className='fxh-subsubtitle'>1. Examen Físico</p>
      <ul className='fxh-list'>
        <li><strong>Dolor e impotencia funcional</strong></li>
        <li><strong>Evaluación neurovascular:</strong> Nervio radial (diáfisis)</li>
        <li><strong>Deformidad visible:</strong> En fracturas desplazadas</li>
        <li><strong>Pruebas específicas:</strong> Movilidad activa/pasiva</li>
      </ul>

      <p className='fxh-subsubtitle'>2. Estudios de Imagen</p>
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
              <td>Radiografía</td>
              <td>Línea de fractura, desplazamiento</td>
              <td>Proyecciones AP y lateral</td>
            </tr>
            <tr>
              <td>TAC</td>
              <td>Evaluación 3D, fragmentos</td>
              <td>Fracturas complejas</td>
            </tr>
            <tr>
              <td>RMN</td>
              <td>Lesiones partes blandas</td>
              <td>Evaluar manguito rotador</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subtitle'>Tratamiento Conservador 🏥</p>
      <ul className='fxh-list'>
        <li>Fracturas no desplazadas o mínimamente desplazadas</li>
        <li>Pacientes ancianos con baja demanda funcional</li>
        <li>Fracturas diafisarias con contacto cortical mayor a 50%</li>
      </ul>

      <p className='fxh-subsubtitle'>Protocolo:</p>
      <ul className='fxh-list'>
        <li><strong>Inmovilización:</strong> Cabestrillo o férula braquiopalmar</li>
        <li><strong>Movilización temprana:</strong> Ejercicios pendulares a los 7-10 días</li>
        <li><strong>Control radiográfico:</strong> Semanal las primeras 3 semanas</li>
        <li><strong>Rehabilitación:</strong> Inicio progresivo según consolidación</li>
      </ul>

      <p className='fxh-subtitle'>Tratamiento Quirúrgico 🔪</p>
      <ul className='fxh-list'>
        <li>Desplazamiento mayor a 2cm o mayor a 30° angulación</li>
        <li>Fracturas intraarticulares con escalón mayor a 3mm</li>
        <li>Fracturas diafisarias con compromiso radial</li>
        <li>Fracturas patológicas con riesgo inminente</li>
      </ul>

      <p className='fxh-subsubtitle'>Técnicas Quirúrgicas:</p>
      <ul className='fxh-list'>
        <li><strong>Osteosíntesis con placa:</strong> Fracturas proximales y diafisarias</li>
        <li><strong>Clavos endomedulares:</strong> Fracturas diafisarias</li>
        <li><strong>Hemiartroplastia:</strong> Fracturas proximales complejas</li>
        <li><strong>Fijación externa:</strong> Fracturas abiertas grado III</li>
      </ul>

      <p className='fxh-subtitle'>Rehabilitación 🏋️‍♂️</p>
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
              <td>Aguda (0-3 sem)</td>
              <td>Control dolor, movilización pasiva</td>
              <td>3 semanas</td>
            </tr>
            <tr>
              <td>Subaguda (3-6 sem)</td>
              <td>ROM activo asistido</td>
              <td>3 semanas</td>
            </tr>
            <tr>
              <td>Recuperación (6-12 sem)</td>
              <td>Fortalecimiento progresivo</td>
              <td>6 semanas</td>
            </tr>
            <tr>
              <td>Funcional (mayor a 12 sem)</td>
              <td>Retorno actividades</td>
              <td>3-6 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='fxh-subtitle'>Complicaciones ⚠️</p>
      <ul className='fxh-list'>
        <li><strong>Lesión nervio radial:</strong> 10-15% en fracturas diafisarias</li>
        <li><strong>Pseudoartrosis:</strong> 2-10% (mayor en fumadores)</li>
        <li><strong>Rigidez articular:</strong> Especialmente en fracturas proximales</li>
        <li><strong>Infección:</strong> 1-5% en tratamiento quirúrgico</li>
      </ul>

      <p className='fxh-subtitle'>Prevención 🛡️</p>
      <ul className='fxh-list'>
        <li><strong>Prevención de caídas:</strong> Ejercicio, evaluación domiciliaria</li>
        <li><strong>Manejo osteoporosis:</strong> Calcio, vitamina D, bifosfonatos</li>
        <li><strong>Protección deportiva:</strong> Equipo adecuado</li>
        <li><strong>Rehabilitación precoz:</strong> Evitar rigideces</li>
      </ul>

      <p className='fxh-subtitle'>Conclusión</p>
      <p className='fxh-text'>
        Las fracturas de húmero requieren un manejo individualizado según localización, desplazamiento y características del paciente. 
        Mientras las fracturas no desplazadas pueden tratarse conservadoramente con buenos resultados, las desplazadas o complejas 
        requieren reducción anatómica y fijación estable. La rehabilitación supervisada es clave para recuperar la función del miembro superior.
      </p>
    </div>
  );
}

export default FxHumero;
