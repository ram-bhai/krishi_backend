
const express = require("express");
const {body} = require('express-validator');
const machinarycontrol =require("../controllers/machinary.controller");
const machinaryrouter = express.Router();

machinaryrouter.post('/add',body('name').not().isEmpty(),machinarycontrol.add);
machinaryrouter.get('/view',machinarycontrol.view);
machinaryrouter.post('/update',machinarycontrol.update);
machinaryrouter.get('/delete/:id',machinarycontrol.delete);

module.exports=machinaryrouter;


 
