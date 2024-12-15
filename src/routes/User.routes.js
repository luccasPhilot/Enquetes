const express = require('express');
const users = require("../controller/UserController")
const auth = require("../middleware/auth.middleware")
const validaUser = require("../middleware/validaCamposPermitidos.middleware")

const router = express.Router();

router.get('/:username', auth.authMiddleware, users.getUser);
router.put('/:username', auth.authMiddleware, 
    validaUser.validarCamposPermitidos(["username", "password", "email", "cidade"]),
    users.updateUser);

router.post('/', auth.authMiddleware, 
    validaUser.validarCamposPermitidos(["username", "password", "tipo", "email", "cidade"]), 
    users.createUser); // Apenas admin

router.delete('/:username', auth.authMiddleware, users.deleteUser); // Apenas admin

module.exports = router;