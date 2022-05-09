
const express = require("express");
const {body} = require('express-validator');
const machinarycontrol =require("../controllers/machinary.controller");
const machinaryrouter = express.Router();
const auth = require('../middleware/customer.auth');
machinaryrouter.post('/add',body('name').not().isEmpty(),machinarycontrol.add);
machinaryrouter.get('/view',machinarycontrol.view);
machinaryrouter.post('/update/:id',machinarycontrol.update);
machinaryrouter.get('/delete/:id',machinarycontrol.delete);
machinaryrouter.get('/view/:id',machinarycontrol.viewWithId);
module.exports=machinaryrouter;


 
