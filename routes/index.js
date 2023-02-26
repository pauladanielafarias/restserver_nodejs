//----------- PKGs, archivos y métodos importados -----------
const { Router } = require('express');
const { get_usuarios, put_usuarios, post_usuarios, delete_usuarios, patch_usuarios } = require('../controllers/usuarios');

//----------- start router -----------
const router = Router();

// API USUARIOS
router.route(['/api/usuarios', '/api/users'])
    .get(get_usuarios)
    .patch(patch_usuarios);

router.route(['/api/usuarios/:id', '/api/users/:id'])
    .put(put_usuarios)
    .post(post_usuarios)
    .delete(delete_usuarios);

module.exports = router;