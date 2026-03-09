

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Imagen.css';
 

function Imagen() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className=".imagen-container">
      <p className='p133'> Exámenes de Imagenología </p>
      <p className='p143'>Introducción📌 </p>
      <p className='p153' > En esta sección encontraras los diferentes tipos de examenes de imagenologia, en la cual podras ver  sus 
        caracteristicas y detalles que te pueden llevar a entender mejor tu enfermedad. A continuación se muestran los tipos de examenes 
        imagenologicos que mas se usan en la actualidad. </p>
      <ul className='p153' style={{ listStyleType: 'disc'}} >
        <li> 📌<Link to="/examenes/radiografia"> Radiografia (Rx): </Link> útil para evaluar huesos, pulmones o el abdomen. </li>
        <li> 📌<Link to="/examenes/ecografia">Ecografía (Ultrasonido): </Link>   emplea ondas sonoras para observar tejidos blandos y órganos como hígado, riñones o tiroides. </li>
        <li> 📌<Link to="/examenes/tc"> Tomografia Computarizada (TC): </Link>  genera imágenes detalladas de cortes transversales del cuerpo. </li>
        <li> 📌<Link to="/examenes/rnm"> Resonancia Nuclear Magnetica (RNM): </Link>  ofrece imágenes más precisas de tejidos blandos, ideal para el cerebro, médula espinal o articulaciones. </li>
      </ul>

    </div>
    
  );
}

export default Imagen;