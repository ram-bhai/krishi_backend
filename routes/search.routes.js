const express = require("express");
const searchRouter = express.Router();
const searchController  = require ("../controllers/search.controller");

searchRouter.get('/tools',searchController.seachservice);
searchRouter.get("/location",searchController.searchlocation);

module.exports = searchRouter;