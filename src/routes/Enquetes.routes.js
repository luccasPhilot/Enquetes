const express = require('express');
const enquetes = require("../controller/EnquetesController")
const auth = require("../middleware/auth.middleware")
const validaEnquete = require("../middleware/validaCamposPermitidos.middleware")

const router = express.Router();

router.get("/:id", enquetes.getEnquete);
router.put("/:id", 
    auth.authMiddleware,
    validaEnquete.validarCamposPermitidos(["titulo", "descricao"]),
    enquetes.updateEnquete);

router.post("/", 
    auth.authMiddleware,
    validaEnquete.validarCamposPermitidos(["titulo", "descricao"]), 
    enquetes.createEnquete);
router.delete("/:id", auth.authMiddleware, enquetes.deleteEnquete);

module.exports = router;