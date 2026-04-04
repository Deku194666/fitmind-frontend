

import React, { useEffect, useState } from 'react';
import './CrearComida.css';
import { useBuscarAlimentos } from '../../../hooks/useBuscarAlimentos';
import axios from 'axios';



function CrearComida() {
  const [nombreComida, setNombreComida] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [ingredientes, setIngredientes] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const { alimentos, loading } = useBuscarAlimentos(busqueda);
  


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  // Agregar ingrediente a la lista
  const agregarIngrediente = (alimento) => {
  const yaExiste = ingredientes.find(i => i.alimentoId === alimento._id);
  if (yaExiste) {
    setMensaje('⚠️ Este alimento ya está en la lista.');
    setTimeout(() => setMensaje(''), 3000);
    return;
  }

  const alimentoAdaptado = {
    alimentoId: alimento._id,
    nombre: alimento.nombre,
    calorias: alimento.calorias,
    proteinas: alimento.proteinas,
    carbos: alimento.carbohidratos, // 👈 FIX CLAVE
    grasas: alimento.grasas,
    fibra: alimento.fibra,
    porcion: 100
  };

  setIngredientes([...ingredientes, alimentoAdaptado]);
  setBusqueda('');
};

  // Cambiar porción de un ingrediente
  const cambiarPorcion = (id, valor) => {
    setIngredientes(ingredientes.map(i =>
      i.alimentoId === id ? { ...i, porcion: Number(valor) } : i
    ));
  };

  // Eliminar ingrediente
  const eliminarIngrediente = (id) => {
    setIngredientes(ingredientes.filter(i => i.alimentoId !== id));
  };

  // Calcular macros totales según porción
  const calcularMacro = (valor, porcion) => ((valor * porcion) / 100).toFixed(1);

  const totales = ingredientes.reduce((acc, i) => ({
    calorias: acc.calorias + (i.calorias * i.porcion) / 100,
    proteinas: acc.proteinas + (i.proteinas * i.porcion) / 100,
    carbos: acc.carbos + (i.carbos * i.porcion) / 100,
    grasas: acc.grasas + (i.grasas * i.porcion) / 100,
    fibra: acc.fibra + (i.fibra * i.porcion) / 100,
  }), { calorias: 0, proteinas: 0, carbos: 0, grasas: 0, fibra: 0 });


  // Guardar comida
  const guardarComida = async () => {
  if (!nombreComida.trim()) {
    setMensaje('⚠️ Ponle un nombre a tu comida.');
    setTimeout(() => setMensaje(''), 3000);
    return;
  }

  if (ingredientes.length === 0) {
    setMensaje('⚠️ Agrega al menos un ingrediente.');
    setTimeout(() => setMensaje(''), 3000);
    return;
  }

  const usuario_id = localStorage.getItem('usuario_id');

  if (!usuario_id) {
    setMensaje('❌ Usuario no autenticado');
    return;
  }

  try {
    const res = await axios.post(
  `${process.env.REACT_APP_API_URL}/api/comidas`,
  {
    nombre: nombreComida,
    ingredientes: ingredientes,
    totales: totales
  },
  {
    headers: {
      'user-id': usuario_id
    }
  }
);

console.log("RESPUESTA BACKEND:", res);

if (res && (res.status === 200 || res.status === 201)) {
  setMensaje('✅ ¡Comida guardada correctamente!');

  setNombreComida('');
  setIngredientes([]);

} else {
  setMensaje('⚠️ Se guardó, pero respuesta inesperada');
}

    // 🔥 limpiar
    setNombreComida('');
    setIngredientes([]);

  } catch (error) {
  console.error("STATUS:", error.response?.status);
  console.error("DATA:", error.response?.data);
  console.error("FULL ERROR:", error);
}

  setTimeout(() => setMensaje(''), 3000);
};



  return (
    <div className="ea-container">
 

      <p className="title-main">🍽️ Crear Comida Personalizada</p>

      <p className="text-body">
        Crea tu propia comida combinando los ingredientes que consumes.
        FitMind calculará automáticamente los macros totales según las porciones que indiques 📊.
      </p>

      {/* Nombre de la comida */}
      <p className="title-section">✏️ Nombre de tu comida</p>
      <div className="cc-input-group">
        <input
          className="cc-input"
          type="text"
          placeholder="Ej: Tallarines con carne y salsa"
          value={nombreComida}
          onChange={(e) => setNombreComida(e.target.value)}
        />
      </div>

      {/* Buscador de alimentos */}
      <p className="title-section">🔍 Buscar ingrediente</p>
      <div className="cc-input-group">
        <input
          className="cc-input"
          type="text"
          placeholder="Busca un alimento..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
      {loading && <p className="cc-sin-resultados">Buscando...</p>}

      {/* Resultados de búsqueda */}
      {busqueda.length > 0 && (
        <div className="cc-resultados">
          {alimentos.length === 0 ? (
            <p className="cc-sin-resultados">No se encontraron alimentos.</p>
          ) : (
            alimentos.map(alimento => (
              <div key={alimento._id} className="cc-resultado-item" onClick={() => agregarIngrediente(alimento)}>
                <span>{alimento.nombre}</span>
                <span className="cc-resultado-calorias">{alimento.calorias} kcal/100g</span>
              </div>
            ))
          )}
        </div>
      )}

      {/* Lista de ingredientes agregados */}
      {ingredientes.length > 0 && (
        <>
          <p className="title-section">🧾 Ingredientes agregados</p>
          <div className="table-wrapper">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Ingrediente</th>
                  <th>Porción (g)</th>
                  <th>Calorías</th>
                  <th>Proteínas</th>
                  <th>Carbos</th>
                  <th>Grasas</th>
                  <th>Fibra</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {ingredientes.map(i => (
                  <tr key={i.alimentoId}>
                    <td>{i.nombre}</td>
                    <td>
                      <input
                        className="cc-porcion-input"
                        type="number"
                        min="1"
                        value={i.porcion}
                        onChange={(e) => cambiarPorcion(i.alimentoId, e.target.value)}
                      />
                    </td>
                    <td>{calcularMacro(i.calorias, i.porcion)} kcal</td>
                    <td>{calcularMacro(i.proteinas, i.porcion)}g</td>
                    <td>{calcularMacro(i.carbos, i.porcion)}g</td>
                    <td>{calcularMacro(i.grasas, i.porcion)}g</td>
                    <td>{calcularMacro(i.fibra, i.porcion)}g</td>
                    <td>
                      <button className="cc-btn-eliminar" onClick={() => eliminarIngrediente(i.alimentoId)}>🗑️</button>
                    </td>
                  </tr>
                ))}
                {/* Fila de totales */}
                <tr className="cc-fila-total">
                  <td><strong>Total</strong></td>
                  <td>—</td>
                  <td><strong>{totales.calorias.toFixed(1)} kcal</strong></td>
                  <td><strong>{totales.proteinas.toFixed(1)}g</strong></td>
                  <td><strong>{totales.carbos.toFixed(1)}g</strong></td>
                  <td><strong>{totales.grasas.toFixed(1)}g</strong></td>
                  <td><strong>{totales.fibra.toFixed(1)}g</strong></td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Mensaje de feedback */}
      {mensaje && <p className="cc-mensaje">{mensaje}</p>}

      {/* Botón guardar */}
      <div className="cc-btn-group">
        <button className="cc-btn-guardar" onClick={guardarComida}>
          💾 Guardar Comida
        </button>
      </div>

    </div>
  );
}

export default CrearComida;
