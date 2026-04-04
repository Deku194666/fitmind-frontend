import React from "react";
import { Plus } from "lucide-react"; // Asegúrate de tener lucide-react instalado

export default function TestBoton() {
  return (
    <>
      <div style={{ height: "90vh", background: "#eee", padding: "10px" }}>
        <h1>Scroll hacia abajo..</h1>
        <p>Contenido de prueba largo para scroll</p>
      </div>

      <button >
        <Plus size={28} />
      </button>
    </>
  );
}