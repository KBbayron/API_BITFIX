const http = require('http');
const express = require('express');

class Server {
    constructor(port, routes) {
        this.port = port;
        this.app = express();
        this.routes = routes;
        this.setup();
    }

    setup() {
        // Configura middlewares y rutas
        this.app.use(express.json()); // Para parsear JSON
        this.app.use(express.urlencoded({ extended: true })); // Para parsear formularios
        this.app.use(this.routes); // Usa las rutas definidas
    }

    listen() {
        return new Promise((resolve, reject) => {
            this.server = http.createServer(this.app);
            this.server.listen(this.port, () => {
                console.log(`Servidor escuchando en el puerto ${this.port}`);
                resolve();
            }).on('error', (err) => {
                reject(err);
            });
        });
    }
}

module.exports = { Server };