const user = require("../models/userModel");

exports.adduser = async (req, res, next) => {
  const {
    category,
    desc,
    dob,
    gender,
    googleid,
    mailid,
    name,
    phonrno,
    qua,
    spec,
    thumbnail,
    totalperson,
    totalrating,
    userid,
    username,
  } = req.body;
  let createduser;
  createduser = await user.create({
    totalrating,
    qua,
    totalperson,
    googleid,
    dob,
    spec,
    userid,
    category,
    gender,
    username,
    thumbnail,
    mailid,
    phonrno,
    desc,
    name,
  });
  res.json(createduser);
};

exports.getuser = async (req, res, next) => {
  const { id } = req.params;
  let var_user_List;
  var_user_List = await user.findById(
    id,
    "googleid category qua gender mailid dob username totalrating thumbnail totalperson name userid desc spec phonrno "
  );
  res.json(var_user_List);
};

exports.updateuser = async (req, res, next) => {
  const {
    category,
    desc,
    dob,
    gender,
    googleid,
    mailid,
    name,
    phonrno,
    qua,
    spec,
    thumbnail,
    totalperson,
    totalrating,
    userid,
    username,
  } = req.body;
  const { id } = req.params;
  let var_user_List;
  var_user_List = await user.findOne(
    {
      category: "doctor",
    },
    "category "
  );
  if (category == var_user_List.category) {
    const updateduser = await user.findByIdAndUpdate(
      id,
      {
        name: name,
        thumbnail: thumbnail,
        googleid: googleid,
        userid: userid,
        mailid: mailid,
        qua: qua,
        totalperson: totalperson,
        desc: desc,
        phonrno: phonrno,
        gender: gender,
        username: username,
        spec: spec,
        totalrating: totalrating,
        dob: desc,
      },
      { new: true }
    );
    res.json(updateduser);
  } else {
    res.json("You Dont have permission to access this facility it has rights only for doctor");
  }
};
