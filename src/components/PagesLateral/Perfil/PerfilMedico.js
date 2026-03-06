import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PerfilMedico.css';

function PerfilMedico() {

  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchPerfil = async () => {
      try {
        const usuario_id = localStorage.getItem('usuario_id');
        if (!usuario_id) {
          setLoading(false);
          return;
        }

        const API = process.env.REACT_APP_API_URL;
        const res = await axios.get(`${API}/api/infomedica/${usuario_id}`);
        setPerfil(res.data);

      } catch (error) {
        console.log('No hay perfil médico aún');
      } finally {
        setLoading(false);
      }
    };

    fetchPerfil();
  }, []);

  // 🔥 Interpretación automática IMC
  const interpretarIMC = (imc) => {
    const valor = parseFloat(imc);
    if (!valor) return null;

    if (valor < 18.5) return "Bajo peso";
    if (valor < 25) return "Peso normal";
    if (valor < 30) return "Sobrepeso";
    return "Obesidad";
  };

  const mostrar = (label, value) => {
    if (!value && value !== false) return null;

    return (
      <div className="fxh-data-row">
        <span className="fxh-label">{label}</span>
        <span className="fxh-value">{value}</span>
      </div>
    );
  };

  const mostrarBoolean = (label, value) => {
    if (value === undefined) return null;

    return (
      <div className="fxh-data-row">
        <span className="fxh-label">{label}</span>
        <span className={`fxh-badge ${value ? 'yes' : 'no'}`}>
          {value ? 'Sí' : 'No'}
        </span>
      </div>
    );
  };

  return (
    <div className="fxh-detail">

      <p className='fxh-title'>Perfil Médico</p>

      <p className="fxh-text" style={{ marginTop: '10px', marginBottom: '20px', marginLeft: '1rem', marginRight: '1rem' }}>
  Aquí puedes visualizar toda la información médica que registraste en tu perfil.
  Estos datos son utilizados para seguimiento, análisis y personalización dentro
  de la plataforma. Mantén tu información actualizada para mejores recomendaciones
  y control de tu salud.
</p>

      {loading ? (
        <p className="fxh-text">Cargando perfil médico...</p>
      ) : perfil ? (

        <div className="fxh-card">

          {/* ================= ANTROPOMETRÍA ================= */}
          <h3 className="fxh-section">Antropometría</h3>

          {mostrar("Peso:", perfil.peso)}
          {mostrar("Talla:", perfil.talla)}

          {perfil.imc && (
            <div className="fxh-data-row">
              <span className="fxh-label">IMC</span>
              <span className="fxh-value">
                {perfil.imc} ({interpretarIMC(perfil.imc)})
              </span>
            </div>
          )}

          {/* ================= CONDICIONES ================= */}
          <h3 className="fxh-section">Condiciones</h3>

          {mostrarBoolean("Diabetes:", perfil.diabetes)}
          {mostrarBoolean("Hipertensión:", perfil.hipertension)}
          {mostrar("Enfermedad diagnosticada:", perfil.enfermedadDiagnosticada)}
          {mostrar("Enfermedad crónica:", perfil.enfermedadCronica)}

          {/* ================= MEDICACIÓN ================= */}
          <h3 className="fxh-section">Medicación</h3>

          {mostrar("Medicamentos regulares:", perfil.medRegular)}

          {perfil.medicamentos && perfil.medicamentos.length > 0 && (
            <div className="fxh-data-row">
              <span className="fxh-label">Lista de medicamentos:</span>
              <span className="fxh-value">
                {perfil.medicamentos.join(', ')}
              </span>
            </div>
          )}

          {/* ================= ESTILO DE VIDA ================= */}
          <h3 className="fxh-section">Estilo de vida</h3>

          {mostrar("Alimentación:", perfil.alimentacion)}
          {mostrar("Ejercicio:", perfil.ejercicio)}
          {mostrar("Sueño:", perfil.sueno)}
          {mostrar("Alcohol:", perfil.alcohol)}
          {mostrar("Tabaquismo:", perfil.fuma)}

          {/* ================= OTROS ================= */}
          <h3 className="fxh-section">Otros</h3>

          {mostrar("Síntomas:", perfil.sintomas)}
          {mostrar("Exámenes:", perfil.examenes)}
          {mostrar("Otros datos:", perfil.otros)}

          <div className="fxh-data-row fxh-date">
            <span className="fxh-label">Última actualización:</span>
            <span className="fxh-value">
              {perfil.updatedAt
                ? new Date(perfil.updatedAt).toLocaleDateString()
                : 'No disponible'}
            </span>
          </div>

        </div>

      ) : (
        <p className="fxh-text">
          No hay información médica registrada aún.
        </p>
      )}

    </div>
  );
}

export default PerfilMedico;