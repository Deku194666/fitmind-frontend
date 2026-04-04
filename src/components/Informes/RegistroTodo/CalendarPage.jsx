import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarPage.css';
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Typography, Paper, Box } from '@mui/material';




function CalendarPage() {
const hoy = new Date();
const fechaLocal = new Date(
  hoy.getFullYear(),
  hoy.getMonth(),
  hoy.getDate(),
  12, 
  0,
  0
);

const [date, setDate] = useState(fechaLocal);
  const [registro, setRegistro] = useState(null);
  const [caloriasPorComida, setCaloriasPorComida] = useState({});
  const [totalCalorias, setTotalCalorias] = useState(0);
  const [metaCalorias, setMetaCalorias] = useState(2200);
  const [macrosPorComida, setMacrosPorComida] = useState({});
  const [metaProteinas, setMetaProteinas] = useState(80);
  const [metaCarbos, setMetaCarbos] = useState(200);
  const [metaGrasas, setMetaGrasas] = useState(70);
  const [metaFibra, setMetaFibra] = useState(25);
  const [totalMacros, setTotalMacros] = useState({proteinas: 0, carbohidratos: 0, grasas: 0, fibra: 0, });
  const [ejercicios, setEjercicios] = useState([]);
  const [ejerciciosDelDia, setEjerciciosDelDia] = useState([]);
  const [totalDuracion, setTotalDuracion] = useState(0);
  const [totalCaloriasQuemadas, setTotalCaloriasQuemadas] = useState(0);
  const [ejercicioPorTipo, setEjercicioPorTipo] = useState({});
  const [totalHidratacion, setTotalHidratacion] = useState(0);
  const [metaHidratacion, setMetaHidratacion] = useState(() => { return Number(localStorage.getItem("meta_hidratacion")) || 2000;});
  const [signosVitales, setSignosVitales] = useState(null);
  const [anchorElSignosVitales, setAnchorElSignosVitales] = useState(null);
  const [sueno, setSueno] = useState(null);
  const [skincare, setSkincare] = useState(null);
  const [medicamentos, setMedicamentos] = useState([]);
  const [yogaData, setYogaData] = useState([]);
  const [yogaHoy, setYogaHoy] = useState(null);
  const [emociones, setEmociones] = useState([]);
  const [emocionHoy, setEmocionHoy] = useState(null);

  


  // Mock (luego backend)
  const mockData = {
    nutrition: { calories: 2100, protein: 120, carbs: 250, fats: 70, fiber: 20 },
    exercise: [{ type: "Gym", duration: 60 }],
    hydration: { water: 2.3 },
    skincare: { done: true },
    mental: { mood: 7, note: "Día tranquilo" },
    vitals: { heartRate: 72 }
  };


  const COMIDAS = {
  desayuno: "Desayuno",
  colacion_manana: "Colación Mañana",
  almuerzo: "Almuerzo",
  colacion_tarde: "Colación Tarde",
  cena: "Cena",
};




  useEffect(() => {
  const fetchCalorias = async () => {
    try {
      const usuario_id = localStorage.getItem("usuario_id");

      const fechaFormateada = date.toLocaleDateString("sv-SE")

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/registroalimentos/dia/${usuario_id}`,
        {
          params: { fecha: fechaFormateada },
          headers: { "user-id": usuario_id },
        }
      );

      if (!res.data || res.data.length === 0) {
        setRegistro(null);
        setTotalCalorias(0);
        return;
      }

      const base = {
        desayuno: [],
        colacion_manana: [],
        almuerzo: [],
        colacion_tarde: [],
        cena: [],
      };

      res.data.forEach((r) => {
        if (base[r.comida]) base[r.comida] = r.alimentos || [];
      });

      setRegistro(base);

    } catch (error) {
      console.error(error);
    }
  };

  fetchCalorias();
}, [date]);



useEffect(() => {
  if (!registro) return;

  const result = {};
  let total = 0;

  Object.entries(registro).forEach(([comida, alimentos]) => {
    let subtotal = 0;

    alimentos.forEach((a) => {
      const cant = Number(a.cantidad) || 1;
      subtotal += (Number(a.calorias) || 0) * cant;
    });

    result[comida] = subtotal;
    total += subtotal;
  });

  setCaloriasPorComida(result);
  setTotalCalorias(total);

}, [registro]);



useEffect(() => {
  if (!registro) return;

  const result = {};
  const total = {
    proteinas: 0,
    carbohidratos: 0,
    grasas: 0,
    fibra: 0,
  };

  Object.entries(registro).forEach(([comida, alimentos]) => {
    const totales = {
      proteinas: 0,
      carbohidratos: 0,
      grasas: 0,
      fibra: 0,
    };

    alimentos.forEach((a) => {
      const cant = Number(a.cantidad) || 1;

      totales.proteinas += (Number(a.proteinas) || 0) * cant;
      totales.carbohidratos += (Number(a.carbohidratos) || 0) * cant;
      totales.grasas += (Number(a.grasas) || 0) * cant;
      totales.fibra += (Number(a.fibra) || 0) * cant;
    });

    result[comida] = totales;

    total.proteinas += totales.proteinas;
    total.carbohidratos += totales.carbohidratos;
    total.grasas += totales.grasas;
    total.fibra += totales.fibra;
  });

  setMacrosPorComida(result);
  setTotalMacros(total);

}, [registro]);


useEffect(() => {
  const fetchEjercicios = async () => {
    try {
      const usuario_id = localStorage.getItem("usuario_id");
      if (!usuario_id) return;

      const endpoints = [
        "elongacion",
        "musculacion",
        "correr",
        "trote",
        "sprint",
        "bicicleta",
        "caminar",
        "nadar",
        "boxeosaco",
      ];

      const resultados = await Promise.all(
        endpoints.map(async (ep) => {
          try {
            const res = await axios.get(
              `${process.env.REACT_APP_API_URL}/api/${ep}/${usuario_id}`,
              { headers: { "user-id": usuario_id } }
            );

            const data = Array.isArray(res.data) ? res.data : [res.data];

            return data.map((e) => ({
              tipo: ep,
              tiempo: e.tiempo,
              calorias: e.calorias,
              fecha: e.fecha,
            }));

          } catch {
            return [];
          }
        })
      );

      setEjercicios(resultados.flat());
      console.log("EJERCICIOS:", resultados.flat());

    } catch (error) {
      console.error(error);
    }
  };

  fetchEjercicios();
}, [date]);



useEffect(() => {
  if (!ejercicios.length) {
    setEjerciciosDelDia([]);
    return;
  }

  const fechaSeleccionada = date.toLocaleDateString("sv-SE")

  const filtrados = ejercicios.filter((e) => {
    if (!e.fecha) return false;

    const fechaEjercicio = e.fecha.split("T")[0];

    return fechaEjercicio === fechaSeleccionada;
  });

  setEjerciciosDelDia(filtrados);

}, [ejercicios, date]);


useEffect(() => {
  if (!ejerciciosDelDia.length) {
    setTotalDuracion(0);
    setTotalCaloriasQuemadas(0);
    setEjercicioPorTipo({});
    return;
  }

  let totalMin = 0;
  let totalCal = 0;
  const porTipo = {};

  ejerciciosDelDia.forEach((e) => {
    const duracionMin = (Number(e.tiempo) || 0) / 60; // convertir segundos → minutos
    const calorias = Number(e.calorias) || 0;

    totalMin += duracionMin;
    totalCal += calorias;

    if (!porTipo[e.tipo]) {
      porTipo[e.tipo] = {
        duracion: 0,
        calorias: 0,
      };
    }

    porTipo[e.tipo].duracion += duracionMin;
    porTipo[e.tipo].calorias += calorias;
  });

  setTotalDuracion(totalMin.toFixed(1));
  setTotalCaloriasQuemadas(totalCal);
  setEjercicioPorTipo(porTipo);

}, [ejerciciosDelDia]);


useEffect(() => {
  const actualizarMeta = () => {
    const nuevaMeta =
      Number(localStorage.getItem("meta_hidratacion")) || 2000;

    setMetaHidratacion(nuevaMeta);
  };

  window.addEventListener("focus", actualizarMeta);

  return () => {
    window.removeEventListener("focus", actualizarMeta);
  };
}, []);


useEffect(() => {
  const fetchHidratacion = async () => {
    const usuario_id =
      localStorage.getItem("usuarioId") ||
      localStorage.getItem("usuario_id") ||
      localStorage.getItem("userId");

    if (!usuario_id) return;

    const fechaFormateada = date.toLocaleDateString("sv-SE")

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/hidratacion/resumen/${usuario_id}`,
        {
          params: { fecha: fechaFormateada }, // 🔥 CLAVE
          headers: {
            "user-id": usuario_id,
          },
        }
      );

      let totalMl = 0;

      if (res.data) {
        totalMl =
          res.data.total_ml ||
          res.data.total ||
          res.data.data?.total_ml ||
          0;
      }

      setTotalHidratacion(totalMl);

    } catch (error) {
      console.error("Error hidratación:", error);
    }
  };

  fetchHidratacion();
}, [date]);



const porcentaje = Math.min(
  (totalHidratacion / metaHidratacion) * 100,
  100
).toFixed(1);




const abrirMenuSignosVitales = (event) => {
  setAnchorElSignosVitales(event.currentTarget);
};

const cerrarMenuSignosVitales = () => {
  setAnchorElSignosVitales(null);
};



useEffect(() => {
  let cancel = false;

  const fetchSignosVitales = async () => {
    try {
      const usuario_id = localStorage.getItem('usuario_id');
      if (!usuario_id) return;

      const fechaFormateada = date.toLocaleDateString("sv-SE") 

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/signos-vitales/usuario/${usuario_id}`,
        {
          params: { fecha: fechaFormateada }, // 🔥 FILTRO POR DÍA
          headers: { 'user-id': usuario_id }
        }
      );

      const registros = Array.isArray(res.data) ? res.data : [];

      // 🔥 Tomamos el más reciente DEL DÍA
      const ultimo = registros
        .map(r => ({
          ...r,
          _ts: new Date(r.fecha || r.createdAt).getTime()
        }))
        .sort((a, b) => a._ts - b._ts)
        .at(-1) || null;

      if (!cancel) setSignosVitales(ultimo);

    } catch (err) {
      if (!cancel) {
        if (err.response?.status === 404) setSignosVitales(null);
        else console.error("Error signos vitales:", err);
      }
    }
  };

  fetchSignosVitales();

  return () => {
    cancel = true;
  };
}, [date]);




useEffect(() => {
  const fetchSueno = async () => {
    try {
      const usuario_id = localStorage.getItem("usuario_id");
      if (!usuario_id) return;

      const fechaFormateada = date.toLocaleDateString("sv-SE")

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/sueno`
      );

      console.log("RESPUESTA SUEÑO:", res.data);

      const registros = Array.isArray(res.data) ? res.data : [];

      // 🔥 filtrar por usuario y fecha
        const filtrados = registros.filter(r => {
        const fechaOriginal = r.fecha || r.createdAt;
        
        console.log("🧪 REGISTRO SUEÑO:", {
          original: fechaOriginal,
          local: new Date(fechaOriginal).toLocaleDateString("sv-SE")
        });
        
        const fechaRegistro = fechaOriginal?.split("T")[0];
        
        return (
          r.usuario_id === usuario_id &&
          fechaRegistro === fechaFormateada
        );
      });

      // 🔥 tomar el último del día
      const ultimo = filtrados
        .map(r => ({
          ...r,
          _ts: new Date(r.fecha || r.createdAt).getTime()
        }))
        .sort((a, b) => a._ts - b._ts)
        .at(-1) || null;

      setSueno(ultimo);

    } catch (error) {
      console.error("❌ ERROR SUEÑO:", error);
    }
  };

  fetchSueno();
}, [date]);


function calcularHorasDormidas(horaDormir, horaDespertar) {
  if (!horaDormir || !horaDespertar) return 0;

  const [hDormir, mDormir] = horaDormir.split(':').map(Number);
  const [hDespertar, mDespertar] = horaDespertar.split(':').map(Number);

  let inicio = hDormir + mDormir / 60;
  let fin = hDespertar + mDespertar / 60;

  if (fin <= inicio) fin += 24;

  return Math.round((fin - inicio) * 10) / 10;
}





useEffect(() => {
  const fetchSkincare = async () => {
    try {
      const usuario_id = localStorage.getItem("usuario_id");
      if (!usuario_id) return;

      // 🔥 Fecha seleccionada en UTC, formato YYYY-MM-DD
      const fechaFormateada = date.toLocaleDateString("sv-SE")

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/skincare`
      );

      const registros = Array.isArray(res.data) ? res.data : [];

      // 🔥 Filtramos registros por usuario y fecha exacta en UTC
      const filtrados = registros.filter(r => {
        const fechaRegistro = (r.fecha || r.createdAt)?.split("T")[0];
        return (
          String(r.usuario_id) === String(usuario_id) &&
          fechaRegistro === fechaFormateada
        );
      });

      // 🔥 Tomamos el último registro del día (por timestamp)
      const ultimo = filtrados
        .map(r => ({
          ...r,
          _ts: new Date(r.fecha || r.createdAt).getTime()
        }))
        .sort((a, b) => a._ts - b._ts)
        .at(-1) || null;

      setSkincare(ultimo);

    } catch (error) {
      console.error("❌ ERROR SKINCARE:", error);
    }
  };

  fetchSkincare();
}, [date]);



useEffect(() => {
  const fetchMedicamentos = async () => {
    try {
      const usuario_id = localStorage.getItem("usuario_id");
      if (!usuario_id) return;

      const fechaFormateada = date.toLocaleDateString("sv-SE");

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/farmacos/${usuario_id}`,
        {
          headers: { "user-id": usuario_id }
        }
      );

      console.log("FECHA:", fechaFormateada);
      console.log("DATA:", res.data);

      // 🔥 NORMALIZAR (igual que dashboard)
      const data = Array.isArray(res.data)
        ? res.data
        : res.data
        ? [res.data]
        : [];

        // 👇 🔥 DEBUG 
      data.forEach(f => {
        console.log("OBJETO:", f);
      });

      // 🔥 FILTRAR POR FECHA
        const filtrados = data.filter(f => {
        const fechaFarmaco = f.fechaInicio?.split("T")[0];
        return fechaFarmaco === fechaFormateada;
      });

      setMedicamentos(filtrados);

    } catch (error) {
      console.error("Error medicamentos:", error);
    }
  };

  fetchMedicamentos();
}, [date]);



useEffect(() => {
  const fetchYoga = async () => {
    try {
      const usuario_id = localStorage.getItem("usuario_id");
      if (!usuario_id) return;

      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/yoga/${usuario_id}`, {
        headers: { "user-id": usuario_id }
      });

      const data = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];

      setYogaData(data);

      // Filtrar por fecha seleccionada
      const fechaFormateada = date.toISOString().split("T")[0]; // yyyy-mm-dd
      const filtradoHoy = data.find(y => y.fecha?.split("T")[0] === fechaFormateada);
      setYogaHoy(filtradoHoy ?? null);

      console.log("YOGA HOY:", filtradoHoy);

    } catch (error) {
      console.error("Error yoga:", error);
      setYogaHoy(null);
    }
  };

  fetchYoga();
}, [date]);




useEffect(() => {
  const fetchEmociones = async () => {
    try {
      const usuario_id = localStorage.getItem("usuario_id");
      if (!usuario_id) return;

      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/emociones`, {
        headers: { "user-id": usuario_id }
      });

      const data = Array.isArray(res.data) ? res.data : [];

      
      // 🔥 👉 PONLO EXACTAMENTE AQUÍ
      console.log("📅 fecha seleccionada:", date.toISOString().split("T")[0]);
      console.log("📅 date RAW:", date);
      console.log("📅 formateada:", date.toLocaleDateString("en-CA"));


      data.forEach(e => {
        console.log("🧠 emoción:", e.fecha);
      });

      setEmociones(data);
      

      // 🔥 NUEVO FILTRO CORRECTO
const fechaSeleccionada =
  date.getFullYear() + "-" +
  String(date.getMonth() + 1).padStart(2, "0") + "-" +
  String(date.getDate()).padStart(2, "0");

const hoy = data.filter(e => {
  const fechaBD = e.fecha?.split("T")[0]; // 🔥 normaliza BD
  return fechaBD === fechaSeleccionada;
});
      // Tomar la última emoción del día
      const ultima = hoy
        .map(e => ({ ...e, _ts: new Date(e.fecha).getTime() }))
        .sort((a, b) => a._ts - b._ts)
        .at(-1) || null;

      setEmocionHoy(ultima);

    } catch (error) {
      console.error("Error emociones:", error);
      setEmocionHoy(null);
    }
  };

  fetchEmociones();
}, [date]);



  return (
    <div className="calendar-container">

      <h1 className="calendar-title">📅 Calendario de Salud</h1>

      {/* 📆 CALENDARIO REAL */}
      <Calendar
        onChange={setDate}
        value={date}
      />

      {/* 📊 DETALLE DEL DÍA */}
      <div className="day-detail">

        <h2> 📊 {date.toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
            })}
        </h2>

        <div className="modules-grid">

          {/* 🍽 Alimentación */}
          <div className="module-card">
            <p className='AL'>🥗 Alimentación</p>
            <div className="module-card">
              
              {/* 🔥 BLOQUE CALORÍAS */}
              
              <div className="nutrition-block">
                <p className="block-title">🔥 Calorías</p>
                <p className='macros'><strong>Total:</strong> {totalCalorias} kcal</p>
                <p className='macros'><strong>Meta:</strong> {metaCalorias} kcal</p>
                <p className='macros'><strong>Diferencia:</strong> {metaCalorias - totalCalorias} kcal</p>
              </div>
              
              {/* 🍽 BLOQUE COMIDAS */}
              
              <div className="nutrition-block">
                <p className="block-title">🍽 Por comida</p>
                
                {Object.entries(caloriasPorComida).map(([key, value]) => (
                  <p key={key} className="macros">
                    <strong>{COMIDAS[key]}:</strong> {value} kcal
                  </p>
                ))}
              </div>

            
            </div>


            
            <div className="nutrition-card">
              
             
              {/* 🔥 MACROS TOTAL */}
              
              <div className="nutrition-block">
                <p className="block-title1">💪 Macronutrientes</p>
                
                <p className="macro-line">
                  <strong>🥩 Proteínas:</strong> {totalMacros.proteinas.toFixed(1)}g / {metaProteinas}g
                </p>
                
                <p className="macro-line">
                  <strong>🥑 Grasas:</strong> {totalMacros.grasas.toFixed(1)}g / {metaGrasas}g
                </p>
                
                <p className="macro-line">
                  <strong>🍚 Carbohidratos:</strong> {totalMacros.carbohidratos.toFixed(1)}g / {metaCarbos}g
                </p>
                
                <p className="macro-line">
                  <strong>🥦 Fibra:</strong> {totalMacros.fibra.toFixed(1)}g / {metaFibra}g
                </p>
              </div>

  {/* 💪 MACROS POR COMIDA */}
  <div className="nutrition-block">
    <p className="block-title">💪 Macros por comida</p>

    {Object.entries(macrosPorComida).map(([key, value]) => (
      <div key={key} className="macros">
        <strong>{COMIDAS[key]}:</strong>

        <div>
          P: {value.proteinas?.toFixed(1) || 0}g |{" "}
          C: {value.carbohidratos?.toFixed(1) || 0}g |{" "}
          G: {value.grasas?.toFixed(1) || 0}g |{" "}
          F: {value.fibra?.toFixed(1) || 0}g
        </div>
      </div>
    ))}
  </div>

</div>
          </div>

          {/* 🏃 Ejercicio */}
          <div className="module-card">
            <p className='AL'>🏃 Ejercicio</p>
            
            {/* 🔥 RESUMEN */}
            <div className="nutrition-block">
              <p className="block-title">🔥 Actividad</p>
              
              <p className="macros">
                <strong>Duración total:</strong> {totalDuracion} min
              </p>
              
              <p className="macros">
                <strong>Calorías quemadas:</strong> {totalCaloriasQuemadas} kcal
              </p>
            </div>
            
            
            {/* 📊 POR TIPO */}
            <div className="nutrition-block">
              <p className="block-title">📊 Por tipo</p>
              
              {Object.keys(ejercicioPorTipo).length === 0 ? (
                <p className="macros">No hay ejercicios este día</p>
              ) : (
                Object.entries(ejercicioPorTipo).map(([tipo, data]) => (
                <p key={tipo} className="macros">
                  <strong>{tipo}:</strong> {data.duracion.toFixed(1)} min | {data.calorias} kcal
                </p>
              ))
            )}
          </div>
        </div>

        {/* 💧 Hidratación */}
        <div className="module-card">
          <p className='AL'>💧 Hidratación</p>
          <p className='macros'>
            {totalHidratacion} ml / {metaHidratacion} ml ({porcentaje}%)
          </p>
        </div>



        {/* ❤️ Signos */}


        {signosVitales && (
          <div className="module-card">
            <p className='AL'>🩺 Signos Vitales</p>
            
            <p className='macros'>
              🫀 FC: {signosVitales.frecuencia_cardiaca} lpm
            </p>
            
            <p className='macros'>
              🩸 PA: {signosVitales.presion_arterial} mmHg
            </p>
            
            <p className='macros'>
              🌡️ T°: {signosVitales.temperatura} °C
            </p>
            
            <p className='macros'>
              🫁 SatO2: {signosVitales.saturacion_oxigeno}%
            </p>
            
            <p className='macros'>
              💨 FR: {signosVitales.frecuencia_respiratoria} rpm
            </p>
          </div>
      )}



            
          {/* 🛌 Sueño */}
          
          <div className="module-card">
            <p className='AL'>🛌 Sueño</p>
            
            {sueno ? (
              <>
              <p className='macros'>
                <strong>Fecha:</strong> {(() => {
                  const fecha = sueno.fecha.split("T")[0];
                  const [year, month, day] = fecha.split("-");
                  return `${day}/${month}/${year}`;
                })()}
              </p>
              
              <p className='macros'>
                <strong>Horas Dormidas:</strong> {calcularHorasDormidas(sueno.horaDormir, sueno.horaDespertar)} hrs
              </p>
              
              <p className='macros'>
                <strong>Calidad del Sueño:</strong> {sueno.calidad}
              </p>
              
              <p className='macros'>
                <strong>Despertares nocturnos:</strong> {sueno.despertares}
              </p>
              
              <p className='macros'>
                <strong>Comentarios:</strong> {sueno.notas || "Sin comentarios"}
              </p>
            </>
          ) : (
          <p className='macros'>No hay registro de sueño</p>
        )}
      </div>
      
      


         {/* 🧴 Cuidado de la Piel */}
<div className="module-card">
  <p className='AL'>🧴 Cuidado de la Piel</p>

  {skincare ? (
    <>
      <p className='macros'><strong>☀️ Rutina Mañana:</strong></p>
      {Object.entries(skincare.morning || {}).map(([k, v]) =>
        v ? <p key={k} className='macros'>✔️ {k}</p> : null
      )}

      <p className='macros'><strong>🌙 Rutina Noche:</strong></p>
      {Object.entries(skincare.night || {}).map(([k, v]) =>
        v ? <p key={k} className='macros'>✔️ {k}</p> : null
      )}

      <p className='macros'><strong>🧴 Estado de la piel:</strong></p>
      {Object.entries(skincare.skinState || {}).map(([k, v]) => (
        <p key={k} className='macros'>
          {k}: {v}/10
        </p>
      ))}

      <p className='macros'>
        <strong>📝 Notas:</strong> {skincare.notes || "Sin notas"}
      </p>
    </>
  ) : (
    <p className='macros'>No hay registro de skincare</p>
  )}
</div>

         {/* 🧠 Mental */}
<div className="module-card">
  <p className='AL'>🧠 Salud Mental</p>

  {(yogaHoy ) ? (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 3, width: { xs: "100%", sm: "30rem" }, marginBottom: 3 }}>


      {/* 🔹 Yoga */}
      {yogaHoy && (
        <Box sx={{ textAlign: "center", marginBottom: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#2980b9" }}>🧘‍♂️ Última sesión de Yoga</Typography>
          <Typography>⏱️ Tiempo realizado: {Math.floor(yogaHoy.tiempo / 60)} min {yogaHoy.tiempo % 60} seg</Typography>
          <Typography>🔥 Calorías quemadas: {yogaHoy.calorias}</Typography>
          <Typography  sx={{  marginBottom: "4rem" }} >📅 Fecha: {new Date(yogaHoy.fecha).toLocaleString()}</Typography>
        </Box>
      )}
     
    </Paper>



  ) : null}

  
      {/* 🧠 Emociones */}
      <Paper>
      <Box sx={{ textAlign: "center", marginBottom: 2 }}>
        
        <p className='AL'>🧠 Emociones</p>
        
        {emocionHoy ? (
    
    <>
      <p className='macros'>
        <strong>Emoción:</strong> {emocionHoy.emocion}
      </p>
      <p className='macros'>
        <strong>Sentimiento:</strong> {emocionHoy.sentimiento}
      </p>
      <p className='macros'>
        <strong>Descripción:</strong> {emocionHoy.descripcion || "Vacio"}
      </p>
      <p className='macros'>
        <strong>Fecha:</strong> {emocionHoy.fecha?.split("T")[0]}
      </p>
    </>
  ) : (
    <p className='macros'>No hay registro de emociones</p>
  )}

  </Box>

  </Paper>

</div>
          



          


        {/* 📅 Farmacos */}
        <div className="module-card">
          <p className='AL'>💊 Fármacos del {date.toLocaleDateString()}</p>
          
          {medicamentos.length === 0 ? (
            <p className='macros'>No hay medicamentos este día</p>
          ) : (
            medicamentos.map((m, i) => (
            <div key={i} className="med-item">
              <p className='macros'><strong>{m.nombre}</strong></p>
              <p className='macros'>{m.dosis} — {m.frecuencia}</p>
              <p className='macros'> Horas: {Array.isArray(m.horas) ? m.horas.join(", ") : m.horas} </p>
              <p className='macros'>{m.notas || "Sin notas"}</p>
            </div>
        ))
  )}
</div>

        </div>
      </div>

    </div>
  );
}

export default CalendarPage;