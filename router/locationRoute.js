const express = require("express");
const router = express.Router();

const {addlocation, getlocation} = require("../controller/locationController");



router.post("/addlocation",  addlocation);

router.get("/id/:id",  getlocation);

module.exports = router;