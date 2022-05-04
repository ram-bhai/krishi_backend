const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const storeController = require("../controllers/store.controller");


router.post("/addStore",
    body("name").notEmpty(), storeController.add);

module.exports = router;