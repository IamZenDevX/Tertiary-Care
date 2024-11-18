const express = require("express");
const router = express.Router();

const appointmentRoute = require("./appointmentRoute");
const doctor_locationRoute = require("./doctor_locationRoute");
const locationRoute = require("./locationRoute");
const userRoute = require("./userRoute");

router.use("/appointment", appointmentRoute);
router.use("/docloc", doctor_locationRoute);
router.use("/location", locationRoute);
router.use("/user", userRoute);

module.exports = router;
