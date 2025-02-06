const { server, db } = require('./config/config'); // Importa la configuración
const routes = require('./src/routes/git '); // Importa las rutas
const { Server } = require('./server'); // Importa la clase Server

// Crear una instancia del servidor
const serverInstance = new Server(server.port, routes);

// Función principal para iniciar el servidor
async function main() {
    try {
        // Aquí podrías agregar la conexión a la base de datos si es necesario
        console.log('Conectando a la base de datos...');
        console.log(db); // Muestra la configuración de la base de datos
        console.log('Base de datos conectada.');

        // Iniciar el servidor
        await serverInstance.listen();
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
}

// Llamar a la función principal
main();