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
      const { name, email } = user;
      const termino = query.toLowerCase();

      return (
        name.first.toLowerCase().includes(termino) ||
        name.last.toLowerCase().includes(termino) ||
        email.toLowerCase().includes(termino)
      );
    });

    // Actualiza los resultados de la tabla con los resultados filtrados
    setTablaFiltrada(resultadosFiltrados);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      buscar();
    }
  };

  return (
    <div className="buscador-container">
      <label htmlFor="buscadorInput">
        Buscador
      </label>
      <input
        className="buscador-input"
        type="text"
        id="buscadorInput"
        placeholder="Buscar por nombre, apellido o correo"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        aria-label="Campo de búsqueda"
      />
      <button className="boton-buscador" onClick={buscar} aria-label="Buscar">
        Buscar
      </button>
    </div>
  );
}

export default Buscador;
