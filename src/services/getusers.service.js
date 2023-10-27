// services/getusers.service.js
const API_URL = 'https://randomuser.me/api/?results=100';

// La función getUsers es una función asincrónica que realiza la solicitud a la API.
async function getUsers() {
  try {
    // Hace una solicitud a la API utilizando fetch y espera la respuesta.
    const response = await fetch(API_URL);

    // Verifica si la respuesta de la API es exitosa (código de estado 200).
    if (!response.ok) {
      // Si la respuesta no es exitosa, lanza un error con un mensaje descriptivo.
      throw new Error(`Error al obtener datos: ${response.statusText}`);
    }

    // Convierte la respuesta en formato JSON y espera a que se complete.
    const data = await response.json();

    // La respuesta de la API está en data.results. Retorna esa parte de los datos.
    return data.results;
  } catch (error) {
    // Si ocurre algún error en el proceso de solicitud o procesamiento de datos, lo captura.
    console.error('Error al obtener datos:', error);

    // Lanza el error nuevamente para que pueda ser manejado en el componente que utiliza esta función.
    throw error;
  }
}

// Exporta la función getUsers para que pueda ser utilizada en otros módulos.
export default getUsers;
