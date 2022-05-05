const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { body } = require('express-validator');
const auth = require("../middleware/customer.auth")


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

router.post("/contact",
    body("name").notEmpty(),
    body("email").isEmail(),
    body("message").notEmpty(), auth, userController.contact);

router.post("/contract-farming",
    body("name"))


module.exports = router;