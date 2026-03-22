
import React from 'react';
import NavBarCV from './NavBarCV';
import HistorialCorrer from './CV/HistorialCorrer';



const CV = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const beneficios = [
    "Mejora la salud del corazón y los vasos sanguíneos",
    "Disminuye la presión arterial y el colesterol malo (LDL)",
    "Incrementa la capacidad pulmonar y la oxigenación",
    "Reduce el riesgo de enfermedades cardiovasculares y metabólicas",
    "Favorece la quema de grasa y el control del peso",
    "Disminuye el estrés, la ansiedad y mejora el estado de ánimo",
  ];

  return (
    <div style={{ textAlign: 'center', }}>
        <NavBarCV />
      <div
        style={{
          maxWidth: '60rem',
          margin: '4rem auto',
          textAlign: 'left',
          padding: '2rem',
          backgroundColor: '#e6f7f7',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.6rem' }}>
          🫀 Beneficios del Ejercicio Cardiovascular
        </h2>
        <p style={{ marginTop: '1rem', fontSize: '1.5rem' }}>
          El entrenamiento cardiovascular, como caminar, correr, nadar o andar en bicicleta, tiene múltiples beneficios para tu 
          cuerpo y mente. Entre ellos destacan:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.6' }}>
          {beneficios.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
      </div>
      <HistorialCorrer />
    </div>
  );
};

export default CV;
