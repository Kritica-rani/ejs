//1. import all packages
const express = require("express");
const route = express.Router();
// import controller file
const pages = require("../controller/pages");

route.get("/", pages.displayData);
route.get("/list", pages.displayList);

module.exports = route;
