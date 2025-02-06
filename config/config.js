require('dotenv').config(); // Carga las variables de entorno desde .env

// Validar variables de entorno obligatorias
const requiredEnvVariables = ['PORT', 'DB_HOST', 'DB_USERNAME', 'DB_NAME'];
for (const variable of requiredEnvVariables) {
    if (!process.env[variable]) {
        throw new Error(`La variable de entorno "${variable}" es obligatoria.`);
    }
}

// Configuración del servidor
const serverConfig = {
    port: parseInt(process.env.PORT, 10) || 3000, // Puerto por defecto 3000
};

// Configuración de la base de datos
const dbConfig = {
    port: parseInt(process.env.DB_PORT, 10) || 3306, // Puerto por defecto de MySQL
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD || '', // Contraseña vacía si no está definida
    database: process.env.DB_NAME,
    dialect: 'mysql', // Asegúrate de usar el dialecto correcto
};

// Exportar la configuración
module.exports = {
    server: serverConfig,
    db: dbConfig,
};