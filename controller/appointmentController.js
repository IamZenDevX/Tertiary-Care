const appointment = require('../models/appointmentModel');


exports.addappointment = async(req, res, next) => {
const {doctorid, doctorname, location, patentid, patentname, phonenumber} = req.body;
let createdappointment;
createdappointment = await appointment.create({
location, 
phonenumber, 
patentname, 
doctorname, 
patentid, 
doctorid, 
});
res.json(createdappointment);



}

exports.getappointment = async(req, res, next) => {
const {docid} = req.params;
let var_appointment_List;
 var_appointment_List = await appointment.findById(docid,'patentid doctorid patentname doctorname phonenumber location ');
res.json(var_appointment_List);



}




