const express = require("express");
const router = express.Router();

const {addappointment, getappointment} = require("../controller/appointmentController");



router.post("/addappointment",  addappointment);

router.get("/getappointment/docid/:docid",  getappointment);

module.exports = router;