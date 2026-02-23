import React, { useState } from 'react';
import axios from 'axios';

function Registro({ setSignosVitales }) {
  const [formData, setFormData] = useState({
    frecuencia_cardiaca: '',
    presion_arterial: '',
    temperatura: '',
    saturacion_oxigeno: '',
    frecuencia_respiratoria: '',
  });

  const [mensaje, setMensaje] = useState('');
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuario_id = localStorage.getItem('usuario_id');
      if (!usuario_id) {
        setMensaje('Error: usuario no autenticado');
        return;
      }
      const payload = { usuario_id, fecha: new Date().toISOString().split('T')[0], ...formData };
      await axios.post(`${process.env.REACT_APP_API_URL}/api/signos-vitales`, payload, { headers: { 'user-id': usuario_id } });
      setFormData({
        frecuencia_cardiaca: '',
        presion_arterial: '',
        temperatura: '',
        saturacion_oxigeno: '',
        frecuencia_respiratoria: ''
      });
      const resUltimo = await axios.get(`${process.env.REACT_APP_API_URL}/api/signos-vitales/usuario/${usuario_id}`, { headers: { 'user-id': usuario_id } });
      if (setSignosVitales) {
        const registros = resUltimo.data;
        setSignosVitales(registros[registros.length - 1] || null);
      }
      setMensaje('Registro guardado correctamente ✅');
      window.dispatchEvent(new Event('sv:creado'));
    } catch (error) {
      console.error(error);
      setMensaje('Error al guardar los signos vitales ❌');
    }
  };

const beneficios = [
  { bold: "Monitoreo diario de tu salud:", text: " detecta cambios importantes a tiempo." },
  { bold: "Visualización en gráficos:", text: " identifica tendencias y patrones fácilmente." },
  { bold: "Prevención de complicaciones:", text: " útil especialmente para personas con enfermedades crónicas." },
  { bold: "Histórico completo:", text: " consulta tus registros anteriores en cualquier momento." },
  { bold: "Preparado para integrar con smartwatch:", text: " en el futuro tus signos vitales se registrarán automáticamente." }
];

  return (
    <>
      {/* ===============================
          📘 INTRODUCCIÓN DEL MÓDULO
      =============================== */}
      <div style={{ width: '90%', maxWidth: '400px', margin: '2rem auto' }}>
        <button
          onClick={() => setMostrarInfo(!mostrarInfo)}
          style={{
            backgroundColor: '#2980b9',
            color: '#fff',
            padding: '0.6rem 1.5rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.4rem',
            transition: 'all 0.3s'
          }}
        >
          {mostrarInfo ? 'Ocultar información' : 'ℹ️ ¿Qué es este módulo?'}
        </button>

        {mostrarInfo && (
          <div style={{
            marginTop: '1.5rem',
            padding: '1.5rem',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            textAlign: 'justify',
            lineHeight: '1.6'
          }}>
            <h3 style={{ color: '#2980b9', fontWeight: '600', textAlign:'center' }}>🩺 Registro de Signos Vitales</h3>
            <p style={{ fontSize:'1.6rem', marginBottom:'1rem' }}>
              Permite registrar tus signos vitales: temperatura, saturación de oxígeno, frecuencia cardíaca, frecuencia respiratoria y presión arterial.
            </p>
            <h3 style={{ color: '#2980b9', fontWeight: '600', textAlign:'center' }}>⚙️ Cómo funciona</h3>
            <p style={{ fontSize:'1.6rem', marginBottom:'1rem' }}>
              Ingresa tus valores y guarda el registro. Todos los datos se almacenan asociados a tu usuario y se pueden visualizar en gráficos.
            </p>
            <h3 style={{ color: '#2980b9', fontWeight: '600', textAlign:'center' }}>📋 Cómo usarlo</h3>
            <ol style={{ fontSize:'1.6rem', marginBottom:'1rem' }}>
              <li>Completa todos los campos del formulario.</li>
              <li>Haz clic en <strong>Registrar</strong> para guardar los datos.</li>
              <li>Consulta tus registros en gráficos y tablas.</li>
              <li>Usa diariamente para un seguimiento más preciso.</li>
            </ol>
          </div>
        )}
      </div>

      {/* ===============================
          📝 FORMULARIO
      =============================== */}
      <div style={{
        maxWidth: '350px',
        margin: '0 auto',
        padding: '30px',
        border: '2px solid #2980b9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#f9f9f9',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center'
      }}>
        <p style={{ marginBottom: '20px', color: '#2980b9', fontSize: '3rem', fontWeight: '700' }}>
          Registro de Signos Vitales
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="number" name="frecuencia_cardiaca" placeholder="Frecuencia cardíaca" value={formData.frecuencia_cardiaca} onChange={handleChange} min={20} max={260} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}/>
          <input type="text" name="presion_arterial" placeholder="Presión arterial (ej: 120/80 mmhg )" value={formData.presion_arterial} onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}/>
          <input type="number" name="temperatura" placeholder="Temperatura" step="0.1" value={formData.temperatura} onChange={handleChange} min={30} max={45} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}/>
          <input type="number" name="saturacion_oxigeno" placeholder="Saturación de oxígeno" value={formData.saturacion_oxigeno} onChange={handleChange} min={0} max={100} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}/>
          <input type="number" name="frecuencia_respiratoria" placeholder="Frecuencia respiratoria" value={formData.frecuencia_respiratoria} onChange={handleChange} min={3} max={60} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}/>
          <button type="submit" style={{ padding:'12px', borderRadius:'5px', border:'none', backgroundColor:'#2980b9', color:'white', fontWeight:'bold', fontSize:'16px', cursor:'pointer', transition:'background-color 0.3s ease' }}
                  onMouseEnter={e => e.target.style.backgroundColor = '#2980b9'}
                  onMouseLeave={e => e.target.style.backgroundColor = '#3498db'}>
            Registrar
          </button>
        </form>
        {mensaje && <p style={{ marginTop:'20px', fontWeight:'bold', color: mensaje.includes('Error') ? 'red' : 'green' }}>{mensaje}</p>}
      </div>

      {/* ===============================
          🧾 BENEFICIOS FUERA DEL FORMULARIO
      =============================== */}
      <div style={{
        marginTop:'3rem',
        padding:'2rem',
        backgroundColor:'#e3f2fd',
        borderRadius:'16px',
        maxWidth:'500px',   // como Yoga
        width:'86%',        // adaptable en móvil
        marginLeft:'auto',
        marginRight:'auto',
        boxShadow:'0 4px 15px rgba(0,0,0,0.08)',
        textAlign:'center',
        marginBottom: '3rem',
      }}>
        <p style={{ display:'flex', gap:'0.5rem', fontSize:'2.5rem', fontWeight:'700', color:'#2980b9', justifyContent:'center' }}>
          🏆 Beneficios de registrar tus signos vitales
        </p>
        
        <ul style={{ listStyle:'none', padding:0, marginTop:'1rem', fontSize:'1.4rem', lineHeight:'1.4' }}>
          {beneficios.map((b, i) => (
            <li key={i} style={{ marginBottom:'0.8rem', display:'flex', gap:'0.5rem', alignItems:'flex-start' }}>
              <span style={{ color:'#2980b9' }}>✔</span>
              <span><strong>{b.bold}</strong>{b.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Registro;