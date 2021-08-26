//----------- paquetes, modulos, librerias -----------
const {response, request} = require('express')

//----------- CONTROLLERS -----------

//-- API/USUARIOS GET --
const get_usuarios = (req = request, res = response) => {
    
    const {q='no query', apikey} = req.query;

    res.json({
        msg:'GET API - controller',
        query:{
            q,
            apikey

        }
    });
};

//-- API/USUARIOS PUT --
const put_usuarios = (req = request, res = response) => {
    const {id}= req.params;
    
    res.json({
        msg:'PUT API - controller',
        id
    });
}

//-- API/USUARIOS POST --
const post_usuarios = (req = request, res = response) => {

    const body = req.body;
    const {id }= req.body;

    res.status(201).json({
        msg:'POST API - controller',
        body,
        id
    });
}

//-- API/USUARIOS DELETE --
const delete_usuarios = (req = request, res = response) => {
    const id = req.params.id;

    res.json({
        msg:'DELETE API - controller',
        id
    });
}

//-- API/USUARIOS PATCH --
const patch_usuarios = (req = request, res = response) => {

    res.json({
        msg:'PATCH API - controller'
    });
}



//----------- EXPORT METHODS -----------
module.exports = {
    get_usuarios,
    put_usuarios,
    post_usuarios,
    delete_usuarios,
    patch_usuarios,
}