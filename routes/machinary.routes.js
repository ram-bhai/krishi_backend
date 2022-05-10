const express = require("express");
const { body } = require('express-validator');
const machinarycontrol = require("../controllers/machinary.controller");
const machinaryrouter = express.Router();
const multer = require('multer');
const fireBase = require("../middleware/firebase");


var storage = multer.diskStorage({
    destination: 'public/images',
    filename: function(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
var upload = multer({ storage: storage });

machinaryrouter.post('/add', upload.single('images'), body('name').not().isEmpty(), machinarycontrol.add);
machinaryrouter.get('/view', machinarycontrol.view);
machinaryrouter.post('/book-machines/:id', machinarycontrol.bookmachines);
machinaryrouter.post('/update/:id', upload.single('images'), machinarycontrol.update);
machinaryrouter.get('/delete/:id', machinarycontrol.delete);

module.exports = machinaryrouter;