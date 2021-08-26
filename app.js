//----------- paquetes, modulos, librerias -----------

//----------- archivos importados -----------
const Server = require('./models/server');

// start server
const server = new Server();

//method from server.js
server.listenPort();