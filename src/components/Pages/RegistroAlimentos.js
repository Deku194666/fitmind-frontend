import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarAl from './NavBarAl';
import './RegistroAlimentos.css';

/* =====================
   Utils
===================== */
const num = (v, d = 0) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : d;
};

const hoyISO = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString();
};

/* =====================
   Buscador por comida
===================== */
function BuscadorComida({ comida, onAdd }) {
  const [busqueda, setBusqueda] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleBusqueda = async (e) => {
    const valor = e.target.value;
    setBusqueda(valor);

    if (!valor) {
      setResultados([]);
      return;
    }

    try {
      const usuario_id = localStorage.getItem('usuario_id');
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/alimentos/buscar`,
        {
          params: { q: valor },
          headers: { 'user-id': usuario_id },
        }
      );

      setResultados(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error('❌ Error buscando alimentos:', error.message);
      setResultados([]);
    }
  };

  const agregarAlimento = (al) => {
    const qty = num(cantidad, 1);

    const nuevo = {
      nombre: al.nombre,
      cantidad: qty,
      calorias: num(al.calorias),
      proteinas: num(al.proteinas),
      grasas: num(al.grasas),
      carbohidratos: num(al.carbohidratos),
      fibra: num(al.fibra),
    };

    onAdd(comida, nuevo);
    setBusqueda('');
    setCantidad('');
    setResultados([]);
  };

  return (
    <div className="registro-comida">
      <h4>{comida}</h4>

      <input
        type="text"
        className="registro-input"
        placeholder={`Buscar alimento para ${comida}...`}
        value={busqueda}
        onChange={handleBusqueda}
      />

      <input
        type="number"
        className="registro-input registro-cantidad"
        placeholder="Cantidad"
        min="0"
        step="0.1"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />

      {resultados.length > 0 && (
        <div className="registro-resultados">
          {resultados.map((al) => (
            <div
              key={al._id}
              onClick={() => agregarAlimento(al)}
              title="Agregar alimento"
            >
              {al.nombre} — {num(al.calorias)} kcal
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* =====================
   Página principal
===================== */
function RegistroAlimentos() {
  const [alimentosRegistrados, setAlimentosRegistrados] = useState({
    Desayuno: [],
    'Colación Mañana': [],
    Almuerzo: [],
    'Colación Tarde': [],
    Cena: [],
  });

  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
  const fetchRegistro = async () => {
    try {
      const usuario_id = localStorage.getItem('usuario_id');

      const fechaHoy = hoyISO(); // 👈 NUEVO

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/registroalimentos/${usuario_id}`,
        {
          params: { fecha: fechaHoy }, // 👈 NUEVO
          headers: { 'user-id': usuario_id },
        }
      );

      const base = {
        Desayuno: [],
        'Colación Mañana': [],
        Almuerzo: [],
        'Colación Tarde': [],
        Cena: [],
      };

      res.data.forEach((r) => {
        if (base[r.comida]) base[r.comida] = r.alimentos || [];
      });

      setAlimentosRegistrados(base);
    } catch (error) {
      console.error('❌ Error cargando registro:', error.message);
    }
  };

  fetchRegistro();
}, []);


  const guardarComida = async (comida, alimentos) => {
    const usuario_id = localStorage.getItem('usuario_id');

    const payload = {
      usuario_id,
      comida,
      alimentos,
      fecha: hoyISO(),
    };

    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/registroalimentos`,
      payload,
      { headers: { 'user-id': usuario_id } }
    );

    return res.data;
  };

  const onAddAlimento = async (comida, alimento) => {
    setAlimentosRegistrados((prev) => ({
      ...prev,
      [comida]: [...prev[comida], alimento],
    }));

    try {
      const doc = await guardarComida(comida, [
        ...alimentosRegistrados[comida],
        alimento,
      ]);

      if (doc?.alimentos) {
        setAlimentosRegistrados((prev) => ({
          ...prev,
          [comida]: doc.alimentos,
        }));
      }

      setMensaje(`✅ ${alimento.nombre} agregado a ${comida}`);
      setTimeout(() => setMensaje(''), 2000);
    } catch (error) {
      console.error('❌ Error guardando comida:', error.message);
    }
  };

  return (
    <>
      <NavBarAl />

      <div className="registro-container">
        <h2>Registro de Alimentos</h2>
        {mensaje && <p className="registro-mensaje">{mensaje}</p>}

        {Object.keys(alimentosRegistrados).map((comida) => (
          <BuscadorComida
            key={comida}
            comida={comida}
            onAdd={onAddAlimento}
          />
        ))}

        <div className="registro-listado">
          {Object.entries(alimentosRegistrados).map(([comida, alimentos]) => {
            const totalCalorias = alimentos.reduce(
              (s, a) => s + num(a.calorias) * num(a.cantidad, 1),
              0
            );

            return (
              <div key={comida}>
                <h4>{comida}</h4>

                {alimentos.length === 0 ? (
                  <p className="registro-vacio">
                    No hay alimentos registrados.
                  </p>
                ) : (
                  <>
                    <ul>
                      {alimentos.map((al, i) => (
                        <li key={i}>
                          {al.nombre} — {al.cantidad} porciones
                        </li>
                      ))}
                    </ul>
                    <div className="registro-totales">
                      Total calorías: {totalCalorias} kcal
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RegistroAlimentos;
