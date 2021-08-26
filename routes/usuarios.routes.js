//----------- paquetes, modulos, librerias -----------
const {Router} = require('express');

//----------- archivos y métodos importados -----------
const { get_usuarios, 
        put_usuarios, 
        post_usuarios, 
        delete_usuarios, 
        patch_usuarios}  = require('../controllers/usuarios.controller');

//----------- start router -----------
const router = Router();

//----------- ROUTES -----------

// API/USUARIOS GET
router.get('/', get_usuarios);

// API/USUARIOS PUT
router.put('/:id', put_usuarios);

// API/USUARIOS POST 
router.post('/:id', post_usuarios);

// API/USUARIOS DELETE
router.delete('/:id', delete_usuarios);

// API/USUARIOS PATCH
router.patch('/', patch_usuarios);


//----------- EXPORT METHODS -----------
module.exports = router;