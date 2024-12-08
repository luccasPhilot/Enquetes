const express = require('express');
const users = require("../controller/UserController")
const auth = require("../middleware/auth.middleware")
const validaUser = require("../middleware/validaCamposUser.middleware")

const router = express.Router();

router.get('/users/:username', auth.authMiddleware, users.getUser);
router.put('/users/:username', auth.authMiddleware, users.updateUser);

router.post('/users', auth.authMiddleware, 
    validaUser.validarCamposUsuario(["username", "password", "tipo", "email", "cidade"]), 
    users.createUser); // Apenas admin

router.delete('/users/:username', auth.authMiddleware, users.deleteUser); // Apenas admin

module.exports = router;