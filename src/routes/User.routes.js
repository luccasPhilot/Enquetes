const express = require('express');
const users = require("../controller/UserController")
const auth = require("../middleware/auth.middleware")

const router = express.Router();

router.get('/users/:username', auth.authMiddleware, users.getUser);
router.put('/users/:username', auth.authMiddleware, users.updateUser);
router.post('/users', auth.authMiddleware, users.createUser); // Apenas admin
router.delete('/users/:username', auth.authMiddleware, users.deleteUser); // Apenas admin

module.exports = router;