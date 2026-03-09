import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarFarmacosRespi from './NavBarFarmacosRespi';
import './FarmacosRespi.css';

function FarmacosRespi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fr-detail">
      <NavBarFarmacosRespi />

      <p className="fr-title">Fármacos Respiratorios</p>

      <p className="fr-subtitle">📌 Introducción</p>
      <p className="fr-text">
        Los <strong>Fármacos Respiratorios</strong> son medicamentos diseñados para tratar enfermedades que afectan las vías respiratorias, 
        como el <Link to="/ecnt/asma">Asma</Link>, la <Link to="/ecnt/epoc">EPOC</Link>, las alergias y las infecciones pulmonares. 
        Estos medicamentos ayudan a abrir las vías aéreas, reducir la inflamación y eliminar secreciones, mejorando la respiración 
        y la calidad de vida de los pacientes.
      </p>

      <p className="fr-subtitle">📜 Historia de los Fármacos Respiratorios</p>
      <ul className="fr-list">
        <li><strong>Siglo XIX:</strong> Uso de la efedrina (extraída de plantas) para el <Link to="/ecnt/asma">Asma</Link>.</li>
        <li><strong>1920s:</strong> Introducción de la adrenalina (epinefrina) para crisis asmáticas.</li>
        <li><strong>1950s:</strong> Desarrollo de los primeros broncodilatadores (como el salbutamol).</li>
        <li><strong>1970s:</strong> Uso de corticoides inhalados para controlar la inflamación en el <Link to="/ecnt/asma">Asma</Link>.</li>
        <li><strong>2000s:</strong> Avances biológicos para asma grave (como omalizumab).</li>
      </ul>

      <p className="fr-subtitle">🔍 Clasificación de los Fármacos Respiratorios</p>

      <p className="fr-subsubtitle">📌 1. Broncodilatadores</p>
      <div className="fr-table-wrapper">
        <table className="fr-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Ejemplo</th>
              <th>Mecanismo</th>
              <th>Uso Principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Beta-2 agonistas (SABA)</td>
              <td><Link to="/farmacos/farmacos2/salbutamol">Salbutamol</Link></td>
              <td>Relajan músculos bronquiales</td>
              <td>Alivio rápido en crisis de <Link to="/ecnt/asma">Asma</Link></td>
            </tr>
            <tr>
              <td>Beta-2 agonistas (LABA)</td>
              <td>Salmeterol, Formoterol</td>
              <td>Efecto prolongado (12+ horas)</td>
              <td>Control diario en <Link to="/ecnt/epoc">EPOC</Link> y <Link to="/ecnt/asma">Asma</Link></td>
            </tr>
            <tr>
              <td>Anticolinérgicos (SAMA/LAMA)</td>
              <td>Ipratropio (SAMA), Tiotropio (LAMA)</td>
              <td>Bloquean receptores muscarínicos</td>
              <td><Link to="/ecnt/epoc">EPOC</Link>, Broncoespasmo</td>
            </tr>
            <tr>
              <td>Metilxantinas</td>
              <td>Teofilina</td>
              <td>Relaja músculos bronquiales</td>
              <td><Link to="/ecnt/asma">Asma</Link> / <Link to="/ecnt/epoc">EPOC</Link> (uso menos común hoy)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fr-subsubtitle">📌 2. Antiinflamatorios (Controladores)</p>
      <div className="fr-table-wrapper">
        <table className="fr-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Ejemplo</th>
              <th>Mecanismo</th>
              <th>Uso Principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IA Corticoides inhalados (ICS)</td>
              <td>Budesonida, Fluticasona</td>
              <td>Reducen inflamación bronquial</td>
              <td><Link to="/ecnt/asma">Asma</Link> y <Link to="/ecnt/epoc">EPOC</Link> (prevención de crisis)</td>
            </tr>
            <tr>
              <td>Corticoides orales</td>
              <td>Prednisona</td>
              <td>Antiinflamatorio sistémico</td>
              <td>Crisis graves (uso corto)</td>
            </tr>
            <tr>
              <td>Antileucotrienos</td>
              <td>Montelukast</td>
              <td>Bloquean sustancias inflamatorias</td>
              <td>Asma alérgico, rinitis</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="fr-subsubtitle">📌 3. Antihistamínicos (Para Alergias)</p>
      <ul className="fr-list">
        <li><strong>Ejemplos:</strong> Loratadina, Cetirizina</li>
        <li><strong>Uso:</strong> Rinitis alérgica, picazón, estornudos</li>
      </ul>

      <p className="fr-subsubtitle">📌 4. Mucolíticos y Expectorantes</p>
      <ul className="fr-list">
        <li><strong>Ejemplos:</strong> Acetilcisteína, Ambroxol</li>
        <li><strong>Uso:</strong> Enfermedades con flema (bronquitis, <Link to="/ecnt/epoc">EPOC</Link>)</li>
      </ul>

      <p className="fr-subsubtitle">📌 5. Antibióticos (Para Infecciones Respiratorias)</p>
      <ul className="fr-list">
        <li><strong>Ejemplos:</strong> <Link to="/farmacos/farmacos2/amoxicilina">Amoxicilina</Link>, Azitromicina</li>
        <li><strong>Uso:</strong> Neumonía, bronquitis bacteriana</li>
      </ul>

      <p className="fr-subtitle">⚠️ Efectos Secundarios Comunes</p>
      <ul className="fr-list">
        <li><strong>Broncodilatadores (SABA):</strong> Temblor, taquicardia</li>
        <li><strong>Corticoides inhalados:</strong> Ronquera, candidiasis oral (usar enjuague bucal)</li>
        <li><strong>Corticoides orales:</strong> Aumento de peso, osteoporosis (en uso prolongado)</li>
        <li><strong>Anticolinérgicos:</strong> Boca seca, retención urinaria</li>
      </ul>

      <p className="fr-subtitle">✅ Conclusión</p>
      <p className="fr-text">
        Los <strong>Fármacos Respiratorios</strong> son clave para manejar enfermedades como el <Link to="/ecnt/asma">Asma </Link> 
         y la <Link to="/ecnt/epoc">EPOC</Link>, mejorando la calidad de vida de millones de personas. Desde broncodilatadores 
        de acción rápida hasta modernos biológicos, estos medicamentos deben usarse según prescripción médica para evitar efectos adversos. 
        Recuerda: Si usas inhaladores, aprende la técnica correcta y sigue tu tratamiento al pie de la letra. ¡Respirar mejor es vivir mejor! 🌬️💙
      </p>

    </div>
  );
}

export default FarmacosRespi;
