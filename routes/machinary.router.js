
const express = require("express");
const multer = require("multer");
const {body} = require('express-validator');
const machinarycontrol =require("../controllers/machinary.controller");
const machinaryrouter = express.Router();

// const storage =multer.diskStorage({
//     destination:'public/images',
//     filename:(request,file,cb)=>{
//         cb(null,Date.now()+'_'+file.originalname);
//     }
// });
// const upload = multer({storage:storage});

machinaryrouter.post('/add',body('name').not().isEmpty(),machinarycontrol.add);
machinaryrouter.get('/view',machinarycontrol.view);
machinaryrouter.post('/update',machinarycontrol.update);
machinaryrouter.get('/delete/:id',machinarycontrol.delete);

module.exports=machinaryrouter;


 
