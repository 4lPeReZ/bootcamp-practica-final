// services/getusers.service.js
const API_URL = 'https://randomuser.me/api/?results=200';

async function getUsers() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error al obtener datos: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
}

export default getUsers;
