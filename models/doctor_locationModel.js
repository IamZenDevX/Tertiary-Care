const mongoose = require("mongoose");

const doctor_locationSchema = new mongoose.Schema(
{
doctorid: {
type: String, 
},
location: {
type: String, 
},
time: {
type: String, 
},
day: {
type: String, 
},
free: {
type: String, 
},
},
);





module.exports = mongoose.model("doctor_location", doctor_locationSchema);
