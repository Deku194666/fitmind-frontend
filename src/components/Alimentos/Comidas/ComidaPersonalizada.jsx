


import React, { useEffect } from 'react';
import './ComidaPersonalizada.css';
import NavBarComidaPersonalizada from './NavBarComidaPersonalizada';


function ComidaPersonalizada() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ea-container">

        
        <NavBarComidaPersonalizada/>
      

      <p className="title-main">🍽️ Comidas Personalizadas</p>

      <p className="text-body">
        La sección de <strong>Comidas Personalizadas</strong> de <strong>FitMind</strong> te permite
        crear y guardar tus propias comidas combinando los alimentos que consumes habitualmente 🧠.
        Así no tendrás que registrar cada ingrediente por separado cada vez que comas lo mismo.
      </p>

      <p className="title-section">🧩 ¿Cómo funciona?</p>

      <p className="text-body">
        Crear una comida personalizada es muy sencillo. Tú defines el nombre de tu comida,
        agregas los ingredientes con sus porciones y FitMind calculará automáticamente
        los valores nutricionales totales 📊.
      </p>

      <ul className="text-body">
        <li>🔍 <strong>Busca ingredientes:</strong> selecciona alimentos desde la base de datos de FitMind.</li>
        <li>⚖️ <strong>Define porciones:</strong> indica la cantidad en gramos de cada ingrediente.</li>
        <li>📐 <strong>Cálculo automático:</strong> FitMind suma calorías, proteínas, carbohidratos, grasas y fibra.</li>
        <li>💾 <strong>Guarda tu comida:</strong> queda almacenada en tu perfil para usarla cuando quieras.</li>
      </ul>

      <p className="title-section">🥗 Ejemplo de uso</p>

      <p className="text-body">
        Supón que comiste <strong>Tallarines con carne y salsa</strong>. En lugar de registrar cada
        ingrediente por separado cada vez, puedes crear esa comida una sola vez con sus ingredientes
        y porciones, y FitMind la recordará 🍝.
      </p>

      <div className="table-wrapper">
        <table className="styled-table">
        <thead>
          <tr>
            <th>Ingrediente</th>
            <th>Porción</th>
            <th>Calorías</th>
            <th>Proteínas</th>
            <th>Carbos</th>
            <th>Grasas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tallarines cocidos</td>
            <td>200g</td>
            <td>260 kcal</td>
            <td>9g</td>
            <td>50g</td>
            <td>1g</td>
          </tr>
          <tr>
            <td>Carne molida</td>
            <td>150g</td>
            <td>250 kcal</td>
            <td>26g</td>
            <td>0g</td>
            <td>15g</td>
          </tr>
          <tr>
            <td>Salsa de tomate</td>
            <td>100g</td>
            <td>35 kcal</td>
            <td>1g</td>
            <td>7g</td>
            <td>0g</td>
          </tr>
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>450g</strong></td>
            <td><strong>545 kcal</strong></td>
            <td><strong>36g</strong></td>
            <td><strong>57g</strong></td>
            <td><strong>16g</strong></td>
          </tr>
        </tbody>
      </table>
      </div>

      <p className="title-section">📋 Gestión de tus comidas</p>

      <p className="text-body">
        Todas tus comidas personalizadas quedan guardadas en tu perfil 🔐.
        Puedes administrarlas fácilmente desde esta sección:
      </p>

      <ul className="text-body">
        <li>📌 Ver el listado completo de tus comidas creadas.</li>
        <li>✏️ Editar ingredientes o porciones de una comida existente.</li>
        <li>🗑️ Eliminar comidas que ya no uses.</li>
        <li>➕ Registrar una comida guardada directamente en tu diario del día.</li>
      </ul>

      <p className="title-section">📅 Integración con el diario diario</p>

      <p className="text-body">
        Una vez creada tu comida personalizada, podrás seleccionarla directamente
        desde el registro diario de alimentación 📆. FitMind sumará automáticamente
        sus macros al total del día sin que tengas que ingresar nada de nuevo.
      </p>

      <ul className="text-body">
        <li>🌅 Asigna tu comida a desayuno, almuerzo, cena o merienda.</li>
        <li>🔄 Reutilízala cuantas veces quieras sin volver a crearla.</li>
        <li>📊 Sus valores nutricionales se suman automáticamente a tu resumen diario.</li>
      </ul>

      <p className="title-section">✨ Próximamente en Comidas Personalizadas</p>

      <ul className="text-body">
        <li>📸 Registrar una comida tomando una foto con IA para detectar macros automáticamente.</li>
        <li>🔍 Escaneo de código de barras para agregar alimentos empaquetados.</li>
        <li>🤖 Sugerencias inteligentes de comidas según tus objetivos nutricionales.</li>
        <li>🌍 Base de datos ampliada con comidas típicas latinoamericanas.</li>
      </ul>

      <p className="title-section">✅ Conclusión</p>

      <p className="text-body">
        Las <strong>Comidas Personalizadas</strong> hacen que el registro nutricional sea
        mucho más rápido, cómodo y realista ❤️. Ya no tendrás que registrar cada ingrediente
        por separado — crea tus comidas una vez y úsalas siempre que quieras.
        Cuanto más completes tu biblioteca de comidas, más fácil será mantener un registro
        nutricional preciso y constante.
      </p>
    </div>
  );
}

export default ComidaPersonalizada;