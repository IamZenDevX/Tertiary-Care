const express = require("express");
const router = express.Router();

const {adddocloc, getdocloc} = require("../controller/doctor_locationController");



router.post("/adddocloc",  adddocloc);

router.get("/getdocloc/id/:id",  getdocloc);

module.exports = router;