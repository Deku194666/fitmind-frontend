


import React, { useEffect } from 'react';
import './RegistroMacrosPresentacion.css';
import BarNavEstadisticasMacros from '../BarNavEstadisticasMacros';


function RegistroMacrosPresentacion() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="em-container11">

        
        <BarNavEstadisticasMacros   />


      <p className="title-main">📊 Macronutrientes</p>

      <p className="text-body">
        Los macronutrientes son los componentes principales de tu alimentación 🍽️ y cumplen funciones esenciales
        en el organismo. Analizar su consumo te permite entender cómo tu dieta impacta tu energía, rendimiento
        físico 💪 y bienestar general 🧠.
      </p>

      <p className="title-section">🥩 Proteínas</p>

      <p className="text-body">
        Las proteínas son fundamentales para la construcción y reparación de tejidos, incluyendo músculos 🏋️.
        También participan en procesos metabólicos y en el sistema inmunológico.
        Un consumo adecuado favorece el desarrollo muscular y la recuperación.
      </p>

      <p className="title-section">🍞 Carbohidratos</p>

      <p className="text-body">
        Los carbohidratos son la principal fuente de energía del cuerpo ⚡.
        Son esenciales para el funcionamiento del cerebro y el rendimiento físico.
        Se recomienda priorizar carbohidratos complejos como cereales integrales y evitar azúcares refinados.
      </p>

      <p className="title-section">🥑 Grasas</p>

      <p className="text-body">
        Las grasas cumplen funciones clave como la absorción de vitaminas y la producción de hormonas 🧬.
        Es importante diferenciar entre grasas saludables (como las del aguacate o frutos secos)
        y grasas saturadas o trans, que deben limitarse.
      </p>

      <p className="title-section">🌾 Fibra</p>

      <p className="text-body">
        La fibra es esencial para una buena salud digestiva 🦠.
        Ayuda a regular el tránsito intestinal, controlar los niveles de azúcar en sangre
        y mejorar la sensación de saciedad.
      </p>

      <p className="title-section">📈 Análisis y seguimiento</p>

      <p className="text-body">
        En esta sección podrás visualizar la evolución de tus macronutrientes a lo largo del tiempo,
        identificar desequilibrios nutricionales y ajustar tu alimentación según tus objetivos 🎯.
        Un buen balance entre proteínas, carbohidratos, grasas y fibra es clave para una salud óptima.
      </p>

      <p className="title-section">✅ Conclusión</p>

      <p className="text-body">
        Monitorear tus macronutrientes te permite tomar decisiones informadas sobre tu alimentación.
        Mantener un equilibrio adecuado contribuirá a mejorar tu energía diaria, rendimiento y bienestar integral 🌱.
      </p>

    </div>
  );
}

export default RegistroMacrosPresentacion;