const express = require('express');
const opcaoEnquetes = require("../controller/OpcoesEnqueteController")
const auth = require("../middleware/auth.middleware")
const validaEnquete = require("../middleware/validaCamposPermitidos.middleware")

const router = express.Router();

router.get("/:id", opcaoEnquetes.getOpcaoEnquete);
router.put("/:id",
    auth.authMiddleware,
    validaEnquete.validarCamposPermitidos(["EnqueteId", "opcao"]),
    opcaoEnquetes.updateOpcaoEnquete);

router.post("/",
    auth.authMiddleware,
    validaEnquete.validarCamposPermitidos(["EnqueteId", "opcao"]),
    opcaoEnquetes.createOpcaoEnquete);

router.delete("/:id", auth.authMiddleware, opcaoEnquetes.deleteOpcaoEnquete);

module.exports = router;