import React from 'react';
import './App.css';
import logo from './images/imagen1.jpg';

function App() {
  return (
    <div>
      <div className="container">
        <div className="seccion-bienvenida">
          <div className="bienvenida-texto">
            <h3 className="titulo-bienvenida">Bienvenido a FitMind</h3>
            <p className="texto1-bienvenida">
              Una buena salud empieza por una buena alimentación.
            </p>
            <p className="texto2-bienvenida">
              ¿Quieres prestar más atención a tu alimentación? Controla tus comidas,
              conoce tus hábitos y alcanza tus objetivos con FitMind.
            </p>
          </div>
        </div>

        <img
          src={logo}
          alt="FitMind Logo"
          className="logo-fitmind"
        />
      </div>
    </div>
  );
}

export default App;
