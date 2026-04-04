import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sueno.css?v=1';

function Sueno() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [datos, setDatos] = useState({
    fecha: new Date().toISOString().split('T')[0],
    horaDormir: '',
    horaDespertar: '',
    despertares: 0,
    calidad: 3,
    pantallasAntes: false,
    cafeNoche: false,
    somnolencia: false,
    notas: ''
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDatos({
      ...datos,
      [name]: type === 'checkbox' ? checked : value
    });
  };



const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const usuario_id = localStorage.getItem("usuario_id");

    if (!usuario_id) {
      setMensaje("Usuario no identificado ❌");
      return;
    }

    await axios.post(`${process.env.REACT_APP_API_URL}/api/sueno`, {
      ...datos,       // 🔥 todo lo que ya tienes
      usuario_id      // 🔥 esto se agrega
    });

    setMensaje('Registro guardado ✅');

  } catch (error) {
    console.error(error);
    setMensaje('Error al guardar ❌');
  }
};




  return (
    <div className="contenedor">

      <h1 className="titulo">Registro de Sueño</h1>

      <div className="contenedor-principal">

        <div className="contenedor-formulario">

          <h3 className="subtitulo">Datos del sueño</h3>

          <form onSubmit={handleSubmit} className="formulario">

            <input type="date" name="fecha" value={datos.fecha} onChange={handleChange} className="input" />



          <div className="fila">

  <div className="grupo">
    <label>Hora de dormir</label>
    <input 
      type="time" 
      name="horaDormir" 
      value={datos.horaDormir} 
      onChange={handleChange} 
      className="input" 
    />
  </div>

  <div className="grupo">
    <label>Hora de despertar</label>
    <input 
      type="time" 
      name="horaDespertar" 
      value={datos.horaDespertar} 
      onChange={handleChange} 
      className="input" 
    />
  </div>

</div>

            <div className="grupo">
  <label>Despertares nocturnos</label>
  <input 
    type="number" 
    name="despertares" 
    value={datos.despertares} 
    onChange={handleChange} 
    className="input" 
    min="0"
  />
</div>

            <label className="label">Calidad del Sueño: {datos.calidad} ⭐</label>
            <input type="range" min="1" max="5" name="calidad" value={datos.calidad} onChange={handleChange} />

            {/* CHECKS */}
            <div className="checks">
              <label className="check-item">
                <span>Uso de pantallas</span>
                <input type="checkbox" name="pantallasAntes" checked={datos.pantallasAntes} onChange={handleChange} />
              </label>

              <label className="check-item">
                <span>Café nocturno</span>
                <input type="checkbox" name="cafeNoche" checked={datos.cafeNoche} onChange={handleChange} />
              </label>

              <label className="check-item">
                <span>Somnolencia</span>
                <input type="checkbox" name="somnolencia" checked={datos.somnolencia} onChange={handleChange} />
              </label>
            </div>

            <textarea name="notas" placeholder="Notas..." value={datos.notas} onChange={handleChange} className="textarea" />

            <button className="boton">Guardar</button>

          </form>

          {mensaje && <p className="mensaje">{mensaje}</p>}

        </div>

      </div>
    </div>
  );
}

export default Sueno;