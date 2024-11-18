const express = require("express");
const router = express.Router();

const {adduser, getuser, updateuser} = require("../controller/userController");



router.post("/adduser",  adduser);

router.get("/getuser/id/:id",  getuser);

router.put("/updateuser/id/:id",  updateuser);

module.exports = router;