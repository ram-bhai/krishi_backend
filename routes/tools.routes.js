const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const toolController = require('../controllers/tools.controller');

router.post("/addMachine",
    body("toolname").notEmpty(),
    body("images").notEmpty(),
    body("desc").notEmpty(),
    toolController.add
);

module.exports = router;