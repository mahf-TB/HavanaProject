const db = require("../models");

const User = db.User;

const getAllUsers = async (req, res)=>{
  try {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllUsers
};
