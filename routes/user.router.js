const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { body } = require('express-validator');
const auth = require("../middleware/customer.auth")
const { validator, validationResult } = require('express-validator');
const User = require('../models/user.model');

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
//     body("name").notEmpty(),
//    // body("mobile").isLength(10),
//    // body("image").notEmpty(),
//     // body("area").notEmpty(),
//     // body("address").notEmpty(),
//     // body("startdate").isDate().notEmpty(),
//     // body("enddate").isDate().notEmpty(),
     userController.contract);
 router.get('/view/:id',(request,response)=>{
    User.findOne({_id:request.params.id}).then(result=>{
        console.log(result);
        return response.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        return response.status(500).json(err);
    })
 })
module.exports = router;