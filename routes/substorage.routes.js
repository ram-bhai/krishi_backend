const express = require('express');
const substorecontroller = require("../controllers/substorage.controller");
const router = express.Router();

router.post('/add/:id', substorecontroller.add);
router.post("/additems", substorecontroller.additems);
router.post("/updatestorageitems/:id", substorecontroller.updateitems);
router.post("/delete-items/:id", substorecontroller.deleteitems);
//router.get("/view-item-list", substorecontroller.viewItems);
router.post("/bookstorage/:id", substorecontroller.bookstorage);
router.post("/add-items-in-coldstorage-by-customers", substorecontroller.itemsofcustomer);
//router.get("/view-item-list", substorecontroller.viewItems);
router.get("/view", substorecontroller.view);
router.get("/delete/:id", substorecontroller.delete);
router.post("/update/:id", substorecontroller.update);

module.exports = router;