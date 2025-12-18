import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import logo from './images/imagen1.jpg';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      titulo: '',
      descripcion: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addtarea = this.addtarea.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  addtarea(e) {
    e.preventDefault();
    const API = 'http://10.93.154.208:4000';
    axios.post(`${API}/api/tareas`, this.state)
      .then(() => console.log('Tarea agregada'))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <div className="seccion-bienvenida">
          <div className="bienvenida-texto">
            <h3 className="titulo-bienvenida">Bienvenido a FitMind</h3>

            <p className="home-subtitle">
              Una buena salud, empieza por una buena alimentación.
            </p>

            <p className="home-description">
              ¿Quieres prestar más atención a tu alimentación?
              Controla tus comidas, conoce tus hábitos y alcanza
              tus objetivos con FitMind.
            </p>
            
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
}

export default App;
