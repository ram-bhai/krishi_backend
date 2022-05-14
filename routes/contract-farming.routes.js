const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require("../controllers/contract-farming.controller");
const multer = require('multer');
const fireBase = require("../middleware/firebase");


var storage = multer.diskStorage({
    destination: 'public/images',
    filename: function(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
var upload = multer({ storage: storage });




router.post("/contract-farming", upload.single('image'), fireBase.fireBaseStorage, userController.contract);




module.exports = router;