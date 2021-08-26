//----------- paquetes, modulos, librerias -----------
const {Router} = require('express');

//----------- archivos y métodos importados -----------
const { error404 }  = require('../controllers/errors.controller');

//----------- start router -----------
const router = Router();

//----------- ROUTES -----------

// ERROR 404 (GET)
router.get('/', error404);

// ERROR 404 (PUT)
router.put('/', error404);

// ERROR 404 (POST)
router.post('/', error404);

// ERROR 404 (DELETE)
router.delete('/', error404);

// ERROR 404 (PATCH)
router.patch('/', error404);


//----------- EXPORT METHODS -----------
module.exports = router;