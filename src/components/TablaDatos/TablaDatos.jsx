import React, { useState, useEffect } from 'react';
import getUsers from '../../services/getusers.service';
import './TablaDatos.css';

function TablaDatos() {
  const resultsPerPage = 10; // Número de resultados por página
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Obtiene los datos de usuarios desde el servicio al cargar el componente
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, []);

  // Calcula el número total de páginas en función de la cantidad total de usuarios
  const totalPages = Math.ceil(users.length / resultsPerPage);

  // Calcula el índice del último y primer resultado de la página actual
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;

  // Obtiene los resultados de la página actual
  const currentResults = users.slice(indexOfFirstResult, indexOfLastResult);

  // Función para ir a la página siguiente
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Función para ir a la página anterior
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h2 className="tabla-titulo">Tabla de Datos de Usuarios</h2>
      <table className="tabla-datos">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo Electrónico</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {currentResults.map((user, index) => (
            <tr key={index}>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.email}</td>
              <td>{user.dob.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="tabla-botonera">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default TablaDatos;
