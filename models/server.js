//----------- paquetes, modulos, librerias -----------
const express = require('express'); // ver: https://www.npmjs.com/package/express
require('dotenv').config(); //loads environment variables from a .env file into process.env. ver: https://www.npmjs.com/package/dotenv
const cors = require('cors'); //provides a Connect/Express middleware that can be used to enable CORS with various options. ver: https://www.npmjs.com/package/cors
const hbs = require('hbs');

class Server {
    
    //-------------- CONSTRUCTOR --------------
    constructor() {
        //----- constantes -----

        //start express
        this.app = express(); 

        //using PORT environment variable from file .env
        this.port = process.env.PORT; 

        //-- RUTAS:
        // API/USUARIOS
        this.usuariosPaths = ['/api/usuarios','/api/users'];

        // todas las rutas que no estén declaradas van a retornar un error 404
        this.error404Path = ('/*')


        //----- Middlewares: funciones que van a ejecutarse siempre al levantar el servidor - son las funciones que tienen app.use() -----
        this.middlewares();

        //----- Rutas -----
        this.routes();
    }


    //-------------- METHODS --------------

    //------ MIDDLEWARES ------
    middlewares(){
        // start cors
        this.app.use(cors());
        
        // Read and parse body
        this.app.use(express.json()); // cualquier info que venga de POST, PUT o DELETE la va a intentar serializar a un formato json

        // Servir contenido estático con express
        this.app.use(express.static('public'));
        //start view engine
        this.app.set('view engine', 'html');
        // start hbs
        this.app.engine('html', hbs.__express)

    }

    //------ RUTAS ------
    routes() {
        // API/USUARIOS ROUTE
        this.app.use(this.usuariosPaths, require('../routes/usuarios.routes'))
        


        // ERROR 404 ROUTE + CONTROLLER
        this.app.use(this.error404Path, require('../routes/errors.routes'));

    };

    //------ LISTEN AT PORT ------
    listenPort(){
        this.app.listen(this.port, () => {
            console.log(`App listening at port: ${this.port}`)
        })
    
    }






}


//----------- EXPORT CLASS -----------
module.exports = Server;