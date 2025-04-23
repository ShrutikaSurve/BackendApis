const express = require("express");
const createUserController = require("../Controllers/authController");
const router = express.Router();

//Api Routes
router.post("/create",createUserController)

module.exports = router;