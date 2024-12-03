const express = require('express');
import { login } from '../controller/AuthController';
import { authMiddleware } from "../middleware/auth.middleware"

const router = express.Router();

router.post('/login', login);

module.exports = router;