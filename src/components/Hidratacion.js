import React, { useState, useEffect } from 'react';
import './Hidratacion.css';
import axios from 'axios';

const Hidratacion = () => {

    // 🔥 SCROLL ARRIBA
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  const [ml, setMl] = useState(0);
  const [vasos, setVasos] = useState(0);
  const [inputMl, setInputMl] = useState('');
  const [registros, setRegistros] = useState([]);  // SIEMPRE ARRAY
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState(2000);

useEffect(() => {
  const guardado = localStorage.getItem("meta_hidratacion");
  if (guardado) {
    setMeta(Number(guardado));
  }
}, []);

  const porcentaje = Math.min((ml / meta) * 100, 100);

  // -----------------------------------------
  // Obtener userId desde localStorage
  // -----------------------------------------
  const getUserId = () => {
    const userId =
      localStorage.getItem('usuarioId') ||
      localStorage.getItem('usuario_id') ||
      localStorage.getItem('userId');

    console.log('🆔 UserID encontrado:', userId);
    return userId;
  };

  // -----------------------------------------
  // Cargar datos al iniciar
  // -----------------------------------------
  useEffect(() => {
    cargarDatosIniciales();
  }, []);

  const cargarDatosIniciales = async () => {
    const userId = getUserId();
    if (!userId) {
      setError('No hay usuario logueado');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Cargar resumen
      const resumenRes = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/hidratacion/resumen/${userId}`,
        { headers: { 'user-id': userId } }
      );

      console.log('📊 Resumen:', resumenRes.data);

      const totalMl =
        resumenRes.data?.total_ml ||
        resumenRes.data?.total ||
        resumenRes.data?.data?.total_ml ||
        0;

      setMl(totalMl);
      setVasos(Math.floor(totalMl / 200));

      // Cargar registros
      await cargarRegistros();
    } catch (error) {
      console.error('❌ Error cargando resumen:', error);
      setError('Error al cargar datos de hidratación');
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------------------
  // Cargar registros desde el backend
  // -----------------------------------------
  const cargarRegistros = async () => {
    const userId = getUserId();
    if (!userId) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/hidratacion/todos/${userId}`,
        { headers: { 'user-id': userId } }
      );

      console.log('📦 Respuesta /todos:', res.data);

      // NORMALIZACIÓN: asegurar que res.data sea SIEMPRE un array
      const arrayData = extraerArrayDeRespuesta(res.data);

      procesarRegistros(arrayData);
    } catch (error) {
      console.error('❌ Error cargando registros:', error);
      setRegistros([]);
    }
  };

  // -----------------------------------------
  // Extraer array de cualquier tipo de estructura del backend
  // -----------------------------------------
  const extraerArrayDeRespuesta = (data) => {
    if (Array.isArray(data)) return data;

    if (data && typeof data === 'object') {
      for (const key of Object.keys(data)) {
        if (Array.isArray(data[key])) {
          return data[key];
        }
      }
    }

    return [];
  };

  // -----------------------------------------
  // Procesar registros para mostrarlos
  // -----------------------------------------
  const procesarRegistros = (arr) => {
    if (!Array.isArray(arr)) arr = [];

    const datosProcesados = arr
      .filter((item) => item && typeof item === 'object')
      .map((item) => {
        let fechaLabel = '';

        if (item.fecha) {
          const d = new Date(item.fecha);
          fechaLabel = `${d.getDate()}/${d.getMonth() + 1} ${d
            .toLocaleTimeString('es-CL')
            .slice(0, 5)}`;
        }

        return {
          ...item,
          fechaLabel,
          cantidad_ml: Number(item.cantidad_ml) || 0,
        };
      })
      .sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

    console.log(`✅ ${datosProcesados.length} registros procesados`);

    setRegistros(datosProcesados);
  };

  // -----------------------------------------
  // Guardar hidratación
  // -----------------------------------------
  const guardarHidratacion = async (cantidadAgregada) => {
    const userId = getUserId();
    if (!userId) {
      setError('No hay usuario logueado');
      return;
    }

    setIsPosting(true);
    setError('');

    try {
      console.log('📤 Guardando:', {
        usuario_id: userId,
        cantidad_ml: cantidadAgregada,
      });

      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/hidratacion/registrar`,
        {
          usuario_id: userId,
          cantidad_ml: cantidadAgregada,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'user-id': userId,
          },
        }
      );

      // Actualizar estado local
      setMl((prev) => prev + cantidadAgregada);
      setVasos((prev) => prev + Math.floor(cantidadAgregada / 200));

      // Recargar registros
      await cargarRegistros();
    } catch (error) {
      console.error('❌ Error guardando:', error);
      setError('Error al guardar hidratación');
    } finally {
      setIsPosting(false);
    }
  };

  // -----------------------------------------
  // Funciones de botones
  // -----------------------------------------
  const agregarVaso = () => guardarHidratacion(200);

  const agregarMlPersonalizado = () => {
    const cantidad = parseInt(inputMl);
    if (isNaN(cantidad) || cantidad <= 0) {
      setError('Ingresa una cantidad válida (número mayor a 0)');
      return;
    }
    guardarHidratacion(cantidad);
    setInputMl('');
  };

  // -----------------------------------------
  // Render
  // -----------------------------------------
  return (
    <div className="hidratacion-container">
      <div className="text-content">
        <h2>💧 Importancia de la Hidratación</h2>
        <p className="p11">
          Beber suficiente agua es esencial para mantener energía, concentración y bienestar general.
        </p>
      </div>

      <div className="contador-agua">
        {loading && <p className="loading">Cargando datos...</p>}
        {error && <p className="error-message">{error}</p>}

        <h3 className="p3"> Total ingerido: {ml} ml ({vasos} vasos) </h3>
        <h4 className="meta"> 🎯 Meta diaria: {meta} ml   </h4>

        <div className="buttons-container">
          <button className="vaso" onClick={agregarVaso} disabled={isPosting || loading}>
            {isPosting ? 'Guardando...' : '➕ Agregar vaso (200ml)'}
          </button>

          <div className="input-personalizado">
            <input
              className="input1"
              type="number"
              placeholder="Ingresa ml personalizados"
              value={inputMl}
              onChange={(e) => setInputMl(e.target.value)}
              disabled={isPosting || loading}
              min="1"
            />
            <button
              className="ml"
              onClick={agregarMlPersonalizado}
              disabled={isPosting || loading || !inputMl}
            >
              Agregar ml
            </button>
          </div>

          <button
            className="reiniciar"
            onClick={() => {
              setMl(0);
              setVasos(0);
              setRegistros([]);
            }}
            disabled={isPosting || loading}
          >
            Reiniciar contador local
          </button>
        </div>

        {/* LISTA DE REGISTROS */}
        <div className="registros-recientes">
          <h4>📝 Últimos registros</h4>

          {Array.isArray(registros) && registros.length > 0 ? (
            <ul>
              {registros.slice(-5).reverse().map((reg, index) => (
                <li key={index}>
                  <strong>{reg.cantidad_ml} ml</strong> — {reg.fechaLabel}
                </li>
              ))}
            </ul>
          ) : (
            <p className="sin-registros">No hay registros aún.</p>
          )}

          <p className="total-registros">
            Total: {Array.isArray(registros) ? registros.length : 0} registros
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hidratacion;
