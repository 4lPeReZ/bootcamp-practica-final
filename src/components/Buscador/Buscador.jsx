import React, { useState } from "react";
import "./Buscador.css";

function Buscador({ tablaDatos, setTablaFiltrada }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const buscar = () => {
    // Filtra los datos de la tabla según el término de búsqueda
    const resultadosFiltrados = tablaDatos.filter((user) => {
      const { nombre, apellido, correo } = user;
      const termino = query.toLowerCase();

      return (
        nombre.toLowerCase().includes(termino) ||
        apellido.toLowerCase().includes(termino) ||
        correo.toLowerCase().includes(termino)
      );
    });

    // Actualiza los resultados de la tabla con los resultados filtrados
    setTablaFiltrada(resultadosFiltrados);
  };

  return (
    <div className="buscador-container">
      <input
        type="text"
        placeholder="Buscar por nombre, apellido o correo"
        value={query}
        onChange={handleInputChange}
      />
      <button className="boton-buscador" onClick={buscar}>
        Buscar
      </button>
    </div>
  );
}

export default Buscador;
