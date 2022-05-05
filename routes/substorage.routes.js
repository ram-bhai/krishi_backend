const express = require('express');
const substorecontroller = require ("../controllers/substorage.controller");
const router = express.Router();

router.post('/add/:id',substorecontroller.add);
router.get("/view",substorecontroller.view);
router.get("/delete/:id",substorecontroller.delete);
router.post("/update/:id",substorecontroller.update);

module.exports=router;