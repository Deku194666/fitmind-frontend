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
function BuscadorComida({ comidaKey, onAdd, comidasUsuario }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [busqueda, setBusqueda] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [resultados, setResultados] = useState([]);

  /* ===== Buscar alimentos y comidas ===== */
  const handleBusqueda = async (e) => {
    const valor = e.target.value;
    setBusqueda(valor);

    if (!valor) {
      setResultados([]); // No mostrar nada si no hay búsqueda
      return;
    }

    try {
      const usuario_id = localStorage.getItem('usuario_id');

      // Buscar alimentos individuales
      const resAlimentos = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/alimentos/buscar`,
        {
          params: { q: valor },
          headers: { 'user-id': usuario_id },
        }
      );

      // Buscar comidas que coincidan con el término
      const resComidas = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/comidas`,
        { headers: { 'user-id': usuario_id } }
      );

      const filtradas = [
        ...(Array.isArray(resAlimentos.data) ? resAlimentos.data : []),
        ...(Array.isArray(resComidas.data)
          ? resComidas.data.filter((c) =>
              c.nombre.toLowerCase().includes(valor.toLowerCase())
            )
          : []),
      ];

      setResultados(filtradas);
    } catch {
      setResultados([]);
    }
  };

  const agregarAlimento = (item) => {
  if (item.ingredientes) {
    // 🔥 Es una comida completa
    item.ingredientes.forEach((al) => {
      const cantidadReal = num(al.cantidad || 1); // normalizar cantidad
      onAdd(comidaKey, {
        nombre: al.nombre,
        cantidad: cantidadReal,
        calorias: num(al.calorias) * cantidadReal,
        proteinas: num(al.proteinas) * cantidadReal,
        grasas: num(al.grasas) * cantidadReal,
        carbohidratos: num(al.carbohidratos || al.carbos) * cantidadReal,
        fibra: num(al.fibra) * cantidadReal,
      });
    });
  } else {
    // 🔥 Es un alimento individual
    const cantidadReal = cantidad === '' ? 1 : num(cantidad, 1);
    onAdd(comidaKey, {
      nombre: item.nombre,
      cantidad: cantidadReal,
      calorias: num(item.calorias) * cantidadReal,
      proteinas: num(item.proteinas) * cantidadReal,
      grasas: num(item.grasas) * cantidadReal,
      carbohidratos: num(item.carbohidratos) * cantidadReal,
      fibra: num(item.fibra) * cantidadReal,
    });
  }

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
              {al.nombre} — {al.totales ? al.totales.calorias : num(al.calorias)} kcal
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
  const [comidasUsuario, setComidasUsuario] = useState([]);

  /* ===== Cargar del backend ===== */
  useEffect(() => {
    const fetchRegistro = async () => {
      try {
        const usuario_id = localStorage.getItem('usuario_id');
        const fecha = hoyISO();

        // Traer el registro diario
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

        // Traer las comidas creadas por el usuario
        const resComidas = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/comidas`,
          { headers: { 'user-id': usuario_id } }
        );

        setComidasUsuario(Array.isArray(resComidas.data) ? resComidas.data : []);
      } catch (err) {
        console.error('❌ Error cargando registro o comidas:', err.message);
      }
    };

    fetchRegistro();
  }, []);

  /* ===== Guardar comida ===== */
  const guardarComida = async (comida, alimento) => {
    const usuario_id = localStorage.getItem('usuario_id');

    return axios.post(`${process.env.REACT_APP_API_URL}/api/registroalimentos`, {
      usuario_id,
      comida,
      alimento,
      fecha: hoyISO(),
    });
  };

  /* ===== Agregar alimento ===== */
  const onAddAlimento = async (comida, alimento) => {
    setAlimentosRegistrados((prev) => ({
      ...prev,
      [comida]: [...prev[comida], alimento],
    }));

    try {
  const res = await guardarComida(comida, alimento);

  // Aunque el backend no devuelva el objeto guardado, asumimos éxito si no hay error
  setMensaje(`✅ ${alimento.nombre} agregado a ${COMIDAS[comida]}`);
  setTimeout(() => setMensaje(''), 2000);

} catch (err) {
  console.error('❌ Error guardando alimento:', err);
  setMensaje(`❌ No se pudo agregar ${alimento.nombre}, pero puede que se haya guardado`);
  setTimeout(() => setMensaje(''), 3000);
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
              comidasUsuario={comidasUsuario}
            />
          ))}
        </div>

        {/* Mantener listado de alimentos registrados */}
        <div className="registro-listado">
          {Object.entries(alimentosRegistrados).map(([key, alimentos]) => {
            console.log("COMIDA:", key, JSON.stringify(alimentos, null, 2));
            const total = alimentos.reduce(
              (s, a) => s + num(a.calorias),
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