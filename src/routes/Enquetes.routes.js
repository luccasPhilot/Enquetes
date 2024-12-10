const express = require('express');
const enquetes = require("../controller/EnquetesController")
const auth = require("../middleware/auth.middleware")

const router = express.Router();

router.get("/:id", auth.authMiddleware, enquetes.getEnquete);
// router.put();
// router.post();
// router.delete();

module.exports = router;