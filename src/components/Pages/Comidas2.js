



import React from 'react';
import './Comidas2.css';

const recetas = [
  {
    id: 1,
    nombre: 'Muffin de Avena y de Coco',
    imagen: 'https://www.bakeandshare.com/wp-content/uploads/2022/07/muffins-avena-chocolate-9.jpg', 
    descripcion: 'Muffins saludables caseros, fácil y ricos de hacer.',
    descripcion2: '222 calorias, 6g de proteina, 21.3g de carbohidratos, 4.5g de fibra, 12.6g de grasa.',
    ingredientes: [
      '1/2 taza de avena tradicional',
      '1/2 de taza de avena en polvo (moler la normal)',
      '1/2 taza de coco rallado',
      '2 claras de huevo',
      '1 taza de leche vegetal',
      'stevia o endulzante que ocupes',
      'Opcional: 1/2 taza de chispas de chocolate 60% cacao o mas'
    ],
    pasos: [
      'Mezclar la avena en polvo, avena en hojuelas, el coco, la leche, y endulzar a gusto.',
      'Mezclar bien y dejar reposar una noche en el refrigerador.',
      'Al otro día, agregar las claras y los chips de chocolate y revolver bien.',
      'Distribuir la masa en moldes individuales pequeños, decorar con escamas de coco o almendras laminadas, y cocinar por 25 minutos a 180°C.',
      'Una porción son 3 muffins por persona, receta para 4 porciones.',
    ]
  },
  {
    id: 2,
    nombre: 'Galletas de Avena y de Coco',
    imagen: 'https://comedera.com/wp-content/uploads/sites/9/2023/03/Galletas-de-avena-y-coco-shutterstock_415058374.jpg', 
    descripcion: 'Galletas saludables caseras, fáciles y ricas de hacer.',
    descripcion2: '190 calorias, 8g de proteina, 20g de carbohidratos, 4g de fibra, 8g de grasa.',
    ingredientes: [
      '2 claras de huevo',
      '1 taza de avena',
      '1/4 taza de coco en hojuelas o rallado',
      '1/4 de taza de frutos deshidratados',
      'stevia o endulzante',
      '1/2 taza de harina de almendras'
    ],
    pasos: [
      'Batir las claras de huevo.',
      'Incorporar todos los demás ingredientes y mezclar bien.',
      'Con las manos húmedas, formar bolitas y aplastarlas en forma de galleta.',
      'Precalentar el horno a 180°C y aplicar un toque de aceite en spray o aceite de coco en la bandeja.',
      'Hornear 10-15 minutos hasta que estén ligeramente doradas.',
      'Receta para 10 galletas aprox., 3 galletas por porción.',
    ]
  },
  {
    id: 3,
    nombre: 'Tarta de Manzana al Sartén',
    imagen: 'https://content-cocina.lecturas.com/medio/2022/05/11/tarta-de-manzana-rellena_fce2b5db_1200x1600.jpg', 
    descripcion: 'Tarta baja en calorías, saludable y rica para postre o merienda.',
    descripcion2: '35-40 calorias, 2-2.3g de proteina, 4-5g de carbohidratos, 1g de fibra, 0.4g de grasa.',
    ingredientes: [
      '3-4 claras de huevo',
      '4 cucharadas de avena en polvo',
      '1 cucharada de yogurt natural sin grasa',
      '1/2 cucharadita de polvos de hornear',
      '1 cucharadita de endulzante',
      '1/2 a 1 manzana'
    ],
    pasos: [
      'Trozar la manzana como gajos.',
      'Licuar todos los demás ingredientes.',
      'Aceitar un sartén pequeño, colocar las rodajas de manzana y verter la masa encima.',
      'Cocinar a fuego bajo, tapando parcialmente, 5 minutos, luego dar vuelta y cocinar 1 minuto más.',
      'Receta para 8 porciones pequeñas, cada trozo es una porción.',
    ]
  },
  {
    id: 4,
    nombre: 'Helado de Chocolate Proteico',
    imagen: 'https://danzadefogones.com/wp-content/uploads/2015/07/Helado-de-chocolate-y-platano-4-480x270.jpg', 
    descripcion: 'Helado saludable, bajo en calorías y delicioso.',
    descripcion2: '220 calorias, 27g de proteina, 30g de carbohidratos, 4g de fibra, 2g de grasa.',
    ingredientes: [
      'Plátanos congelados en rodajas',
      'Cacao en polvo sin azúcar',
      'Endulzante',
      '1 scoop de proteína en polvo (30g)'
    ],
    pasos: [
      'Agregar una cucharada de cacao por cada plátano y 1 scoop de proteína.',
      'Licuar hasta obtener una pasta y servir.',
      'Para 1 porción usar 1 plátano; para 2 porciones, 2 plátanos y el doble de proteína y cacao.'
    ]
  }
];

const Comidas = () => {
  return (
    <div className="comidas-container">
      <p className='title'>Recetas Dulces Saludables</p>
      {recetas.map(receta => (
        <div key={receta.id} className="receta-card">
          <h3>{receta.nombre}</h3>
          <img src={receta.imagen} alt={receta.nombre} />
          <p>{receta.descripcion}</p>

          <p className='pe1'>Ingredientes:</p>
          <ul>
            {receta.ingredientes.map((ing, index) => <li key={index}>{ing}</li>)}
          </ul>

          <p className='pe1'>Pasos:</p>
          <ol>
            {receta.pasos.map((paso, index) => <li key={index}>{paso}</li>)}
          </ol>

          <p className='pe1'>Por porción:</p>
          <p>{receta.descripcion2}</p>
        </div>
      ))}
    </div>
  );
}

export default Comidas;
