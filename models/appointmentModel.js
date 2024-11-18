const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
{
doctorid: {
type: String, 
},
doctorname: {
type: String, 
},
patentname: {
type: String, 
},
patentid: {
type: String, 
},
location: {
type: String, 
},
phonenumber: {
type: String, 
},
},
);





module.exports = mongoose.model("appointment", appointmentSchema);
