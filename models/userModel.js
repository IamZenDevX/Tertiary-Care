const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userid: {
    type: String,
  },
  username: {
    type: String,
  },
  googleid: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  category: {
    type: String, //doctor or patient
  },
  name: {
    type: String,
  },
  dob: {
    type: String,
  },
  gender: {
    type: String,
  },
  qua: {
    type: String,
  },
  spec: {
    type: String,
  },
  mailid: {
    type: String,
  },
  phonrno: {
    type: String,
  },
  totalrating: {
    type: Number,
  },
  totalperson: {
    type: Number,
  },
  desc: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
