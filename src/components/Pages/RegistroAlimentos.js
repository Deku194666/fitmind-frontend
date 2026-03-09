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

const hoyISO = () => new Date().toLocaleDateString('en-CA');

/* =====================
   Config comidas
===================== */
const COMIDAS = {
  desayuno: 'Desayuno',
  colacion_manana: 'Colación Mañana',
  almuerzo: 'Almuerzo',
  colacion_tarde: 'Colación Tarde',
  cena: 'Cena',
};

/* =====================
   Buscador por comida
===================== */
function BuscadorComida({ comidaKey, onAdd }) {
  const [busqueda, setBusqueda] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleBusqueda = async (e) => {
    const valor = e.target.value;
    setBusqueda(valor);

    if (!valor) return setResultados([]);

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
    } catch {
      setResultados([]);
    }
  };

  const agregarAlimento = (al) => {
    onAdd(comidaKey, {
      nombre: al.nombre,
      cantidad: num(cantidad, 1),
      calorias: num(al.calorias),
      proteinas: num(al.proteinas),
      grasas: num(al.grasas),
      carbohidratos: num(al.carbohidratos),
      fibra: num(al.fibra),
    });

    setBusqueda('');
    setCantidad('');
    setResultados([]);
  };

  return (
    <div className="registro-comida">
      <h4>{COMIDAS[comidaKey]}</h4>

      <input
        className="registro-input"
        placeholder={`Buscar alimento para ${COMIDAS[comidaKey]}...`}
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
            <div key={al._id} onClick={() => agregarAlimento(al)}>
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
export default function RegistroAlimentos() {
  const [alimentosRegistrados, setAlimentosRegistrados] = useState({
    desayuno: [],
    colacion_manana: [],
    almuerzo: [],
    colacion_tarde: [],
    cena: [],
  });

  const [mensaje, setMensaje] = useState('');

  /* ===== Cargar del backend ===== */
  useEffect(() => {
    const fetchRegistro = async () => {
      try {
        const usuario_id = localStorage.getItem('usuario_id');
        const fecha = hoyISO();

        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/registroalimentos/dia/${usuario_id}`,
          { params: { fecha } }
        );

        const base = {
          desayuno: [],
          colacion_manana: [],
          almuerzo: [],
          colacion_tarde: [],
          cena: [],
        };

        res.data.forEach((r) => {
          if (base.hasOwnProperty(r.comida)) {
            base[r.comida] = r.alimentos || [];
          }
        });

        setAlimentosRegistrados(base);
      } catch (err) {
        console.error('❌ Error cargando registro:', err.message);
      }
    };

    fetchRegistro();
  }, []);

  /* ===== Guardar comida ===== */
  const guardarComida = async (comida, alimento) => {
  const usuario_id = localStorage.getItem('usuario_id');

  return axios.post(
    `${process.env.REACT_APP_API_URL}/api/registroalimentos`,
    {
      usuario_id,
      comida,
      alimento, // 👈 SOLO UNO
      fecha: hoyISO(),
    }
  );
};


  /* ===== Agregar alimento ===== */
const onAddAlimento = async (comida, alimento) => {
  // UI optimista: mostramos inmediatamente
  setAlimentosRegistrados((prev) => ({
    ...prev,
    [comida]: [...prev[comida], alimento],
  }));

  try {
    // ⬇️ SOLO mandamos UN alimento
    await guardarComida(comida, alimento);

    setMensaje(`✅ ${alimento.nombre} agregado a ${COMIDAS[comida]}`);
    setTimeout(() => setMensaje(''), 2000);
  } catch (err) {
    console.error('❌ Error guardando alimento:', err);
  }
};


  return (
    <>
      <NavBarAl />

      <div className="registro-container">
        <div className="registro-form-card">
          <p className="registro-form-title">Registro de Alimentos</p>
          {mensaje && <p className="registro-mensaje">{mensaje}</p>}

          {Object.keys(COMIDAS).map((key) => (
            <BuscadorComida
              key={key}
              comidaKey={key}
              onAdd={onAddAlimento}
            />
          ))}
        </div>

        <div className="registro-listado">
          {Object.entries(alimentosRegistrados).map(([key, alimentos]) => {
            const total = alimentos.reduce(
              (s, a) => s + num(a.calorias) * num(a.cantidad, 1),
              0
            );

            return (
              <div key={key}>
                <h4>{COMIDAS[key]}</h4>

                {alimentos.length === 0 ? (
                  <p className="registro-vacio">No hay alimentos registrados.</p>
                ) : (
                  <>
                    <ul>
                      {alimentos.map((a, i) => (
                        <li key={i}>
                          {a.nombre} — {a.cantidad}
                        </li>
                      ))}
                    </ul>
                    <div className="registro-totales">
                      Total calorías: {total} kcal
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
