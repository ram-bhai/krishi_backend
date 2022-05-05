const express = require('express');
const router = express.Router();
const adminController = require("../controllers/admin.controller");


router.post("/signin", adminController.signin);

router.get("/viewQueries", adminController.viewqueries);

router.get("/userlist", adminController.userList);

router.get("/contract-farming-list", adminController.viewList);

router.get("/delete/:id", adminController.deleteContract);

module.exports = router;