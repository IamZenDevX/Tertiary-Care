const doctor_location = require('../models/doctor_locationModel');


exports.adddocloc = async(req, res, next) => {
const {day, doctorid, free, location, time} = req.body;
let createddoctor_location;
createddoctor_location = await doctor_location.create({
location, 
day, 
doctorid, 
time, 
free, 
});
res.json(createddoctor_location);



}

exports.getdocloc = async(req, res, next) => {
const {id} = req.params;
let var_doctor_location_List;
 var_doctor_location_List = await doctor_location.findById(id,'location free day time doctorid ');
res.json(var_doctor_location_List);



}




