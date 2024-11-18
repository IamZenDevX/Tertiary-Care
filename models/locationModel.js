const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
{
touristid: {
type: String, 
},
locationname: {
type: String, 
},
lat: {
type: Number, 
},
lng: {
type: Number, 
},
},
);





module.exports = mongoose.model("location", locationSchema);
