const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { body } = require('express-validator');
const auth = require("../middleware/customer.auth");
const multer = require('multer');
const fireBase = require("../middleware/firebase");


var storage = multer.diskStorage({
    destination: 'public/images',
    filename: function(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
var upload = multer({ storage: storage });



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


router.post("/contract-farming", upload.single('image'), fireBase.fireBaseStorage,
    body("name").notEmpty(),
    body("mobile").isLength(10),
    body("area").notEmpty(),
    body("address").notEmpty(),
    body("startdate").isDate().notEmpty(),
    body("enddate").isDate().notEmpty(), auth,
    userController.contract);


module.exports = router;