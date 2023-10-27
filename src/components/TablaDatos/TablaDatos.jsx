import React, { useState, useEffect } from "react";
import getUsers from "../../services/getusers.service";
import "./TablaDatos.css";
import Buscador from "../Buscador/Buscador";

function TablaDatos() {
  // Cantidad de resultados por página
  const resultsPerPage = 10;

  // Estado local para usuarios y tabla filtrada
  const [users, setUsers] = useState([]);
  const [tablaFiltrada, setTablaFiltrada] = useState([]);

  // Estado local para la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Utiliza el efecto para cargar datos de usuarios cuando el componente se monta
  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
        setTablaFiltrada(data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  // Función para cambiar a la siguiente página
  const nextPage = () => {
    if (currentPage < Math.ceil(tablaFiltrada.length / resultsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Función para cambiar a la página anterior
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h2 className="tabla-titulo">Tabla de Datos de Usuarios</h2>

      {/* Componente Buscador para filtrar la tabla */}
      <Buscador tablaDatos={users} setTablaFiltrada={setTablaFiltrada} />

      {/* Tabla para mostrar los datos */}
      <table className="tabla-datos">
        <caption>Lista de usuarios</caption>
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo Electrónico</th>
            <th scope="col">Edad</th>
          </tr>
        </thead>
        <tbody>
          {tablaFiltrada
            .slice(
              (currentPage - 1) * resultsPerPage,
              currentPage * resultsPerPage
            )
            .map((user, index) => (
              <tr key={index}>
                <td headers="nombre">{user.name.first}</td>
                <td headers="apellido">{user.name.last}</td>
                <td headers="email">{user.email}</td>
                <td headers="edad">{user.dob.age}</td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Navegación de páginas */}
      <div className="tabla-botonera">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          aria-label="Página anterior"
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de{" "}
          {Math.ceil(tablaFiltrada.length / resultsPerPage)}
        </span>
        <button
          onClick={nextPage}
          disabled={
            currentPage === Math.ceil(tablaFiltrada.length / resultsPerPage)
          }
          aria-label="Página siguiente"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default TablaDatos;
