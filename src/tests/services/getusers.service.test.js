import getUsers from "../../services/getusers.service"; // Ajusta la ruta a tu archivo
// Configura Jest para permitir solicitudes reales
beforeAll(() => {
    jest.setTimeout(30000); // Aumenta el tiempo de espera para las solicitudes
});

test('getUsers devuelve datos de usuarios', async () => {
    const users = await getUsers();
    expect(users).not.toBeNull(); // Verifica si la respuesta no es nula
    expect(users.length).toBeGreaterThan(0); // Verifica si la respuesta contiene datos
    // Puedes realizar más aserciones según la estructura de los datos reales
});