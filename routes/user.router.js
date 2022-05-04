const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { body } = require('express-validator');


router.post("/signup",
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").notEmpty(),
    body("contact").isLength(10),
    body("occupation").notEmpty(),
    body("address").notEmpty(), userController.signup);

router.post("/signin",
    body("email").isEmail(),
    body("password").notEmpty(),
    userController.signin);


module.exports = router;