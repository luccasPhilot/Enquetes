const express = require('express');
const users = require("../controller/UserController")
const auth = require("../middleware/auth.middleware")
const validaUser = require("../middleware/validaCamposUser.middleware")

const router = express.Router();

router.get('/:username', auth.authMiddleware, users.getUser);
router.put('/:username', auth.authMiddleware, users.updateUser);

router.post('/', auth.authMiddleware, 
    validaUser.validarCamposUsuario(["username", "password", "tipo", "email", "cidade"]), 
    users.createUser); // Apenas admin

router.delete('/:username', auth.authMiddleware, users.deleteUser); // Apenas admin

module.exports = router;