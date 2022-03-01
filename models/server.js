require('dotenv').config();
const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        // Middlewares ( funciones que añaden funcionalidades adicionales al WS )
        this.middlewares();
        // Llamar la cración de rutas
        this.routes();
    }

    middlewares() {
        // Directorio público
        this.app.use(express.static('public'));
        // Lectura y parseo del body, de esta manera cualquier información
        // recibida se intentará serializar a formato JSON
        this.app.use(express.json());
        // Activar cors
        this.app.use(cors());
    }

    // Configuración de rutas
    routes() {
        // El router de ../routes/user se configura con el path de /api/usuarios
        // por eso en el router solo se indica el path /
        this.app.use(this.usuariosPath, require('../routes/users.routes'));
    }

    // Arrancar servicios en úerto
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor Iniciado: ${this.port} `);
        });
    }
}

module.exports = Server;