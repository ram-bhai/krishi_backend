const express = require("express");
const searchRouter = express.Router();
const searchController  = require ("../controllers/search.controller");

searchRouter.post('/tools',searchController.searchservice);

module.exports = searchRouter;