const express = require('express');
const substorecontroller = require("../controllers/substorage.controller");
const router = express.Router();

router.post('/add/:id', substorecontroller.add);
router.post("/additems", substorecontroller.additems);
router.post("/updatestorageitems/:id", substorecontroller.updateitems);
router.post("/delete-items/:id", substorecontroller.deleteitems);
<<<<<<< HEAD
router.post("/bookstorage/:id", substorecontroller.bookstorage);
// router.get("/view-coldstorage-customer-list/:id", substorecontroller.customerlist);
=======
//router.get("/view-item-list", substorecontroller.viewItems);
>>>>>>> 44a86c4772984d5d0dfcdca3c11d6fd30ece375b
router.get("/view", substorecontroller.view);
router.get("/delete/:id", substorecontroller.delete);
router.post("/update/:id", substorecontroller.update);

module.exports = router;