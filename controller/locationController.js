const location = require('../models/locationModel');


exports.addlocation = async(req, res, next) => {
const {lat, lng, locationname, touristid} = req.body;
let createdlocation;
createdlocation = await location.create({
locationname, 
lng, 
lat, 
touristid, 
});
res.json(createdlocation);



}

exports.getlocation = async(req, res, next) => {
const {id} = req.params;
let var_location_List;
 var_location_List = await location.findById(id,'lat locationname lng touristid ');
res.json(var_location_List);



}




