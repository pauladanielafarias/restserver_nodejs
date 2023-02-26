//----------- paquetes, modulos, librerias -----------
const express = require('express'); // ver: https://www.npmjs.com/package/express
 //loads environment variables from an .env file into process.env. ver: https://www.npmjs.com/package/dotenv
const dotenv = require('dotenv').config();
require('dotenv-expand').expand(dotenv) // ver: https://www.npmjs.com/package/dotenv-expand
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

        // use bootstrap
        this.app.use(express.static("node_modules/bootstrap/dist/"));

        //start view engine
        this.app.set('view engine', 'html');
        // start hbs
        this.app.engine('html', hbs.__express)

    }

    //------ RUTAS ------
    routes() {
        this.app.use('/', require('../routes'))

        // todas las rutas que no estén declaradas en routes van a retornar un error 404
        this.app.use(require('../controllers/error404').error404)
    };

    //------ LISTEN AT PORT ------
    listenPort(){
        this.app.listen(this.port, () => {
            console.log(`App ${process.env.npm_package_name} listening at port: ${this.port}`)
        })
    
    }






}


//----------- EXPORT CLASS -----------
module.exports = Server;