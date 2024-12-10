const express = require('express');
const enquetes = require("../controller/EnquetesController")
const auth = require("../middleware/auth.middleware")

const router = express.Router();

router.get("/:id", auth.authMiddleware, enquetes.getEnquete);
// router.put("/altera/:id",);
router.post("/create", auth.authMiddleware, enquetes.createEnquete);
// router.delete("/delete/:id",);

module.exports = router;