//----------- paquetes, modulos, librerias -----------
const {response, request} = require('express')

//----------- CONTROLLERS -----------

//-- ERROR 404 (GET) --
const error404 = (req = request, res = response) => {
    res.status(404).render('../public/404');
};



//----------- EXPORT METHODS -----------
module.exports = {
    error404,
}