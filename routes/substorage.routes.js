const express = require('express');
const substorecontroller = require("../controllers/substorage.controller");
const router = express.Router();
const multer = require('multer');
const fireBase = require("../middleware/firebase");


var storage = multer.diskStorage({
    destination: 'public/images',
    filename: function(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
var upload = multer({ storage: storage });

router.post('/add/:id', upload.single('image'), substorecontroller.add);
router.post("/additems", substorecontroller.additems);
router.post("/updatestorageitems/:id", substorecontroller.updateitems);
router.post("/delete-items/:id", substorecontroller.deleteitems);
router.post("/bookstorage/:id", substorecontroller.bookstorage);
router.post("/add-items-in-coldstorage-by-customers", substorecontroller.itemsofcustomer);
router.get("/view", substorecontroller.view);
router.get("/delete/:id", substorecontroller.delete);
router.post("/update/:id", substorecontroller.update);
module.exports = router;