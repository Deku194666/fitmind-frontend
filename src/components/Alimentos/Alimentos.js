import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Alimentos.css';

function BuscadorAlimentos() {
  const [alimentos, setAlimentos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    if (!busqueda) {
      setAlimentos([]);
      return;
    }

    const fetchAlimentos = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/alimentos/buscar?q=${busqueda}`,
          {
            headers: {
              'user-id': localStorage.getItem('usuario_id')
            }
          }
        );

        setAlimentos(res.data);
      } catch (error) {
        console.error('Error al buscar alimentos:', error);
      }
    };

    fetchAlimentos();
  }, [busqueda]);

  return (
    <div className="buscador-container">
      <h2 className="buscador-title">Buscador de Alimentos</h2>

      <input
        type="text"
        className="buscador-input"
        placeholder="Buscar alimento..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="buscador-grid">
        {alimentos.map((alimento) => (
          <div key={alimento._id} className="buscador-card">
            <h3>{alimento.nombre}</h3>
            <p><strong>Categoría:</strong> {alimento.categoria}</p>
            <p><strong>Calorías:</strong> {alimento.calorias} kcal</p>
            <p><strong>Proteínas:</strong> {alimento.proteinas} g</p>
            <p><strong>Grasas:</strong> {alimento.grasas} g</p>
            <p><strong>Carbohidratos:</strong> {alimento.carbohidratos} g</p>
            <p><strong>Fibra:</strong> {alimento.fibra} g</p>
            <p><strong>Porción:</strong> {alimento.porcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuscadorAlimentos;
