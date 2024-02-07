const User = require("../models/userModel.js")


//login

const loginUser = async (req, res) => {
  res.json({ mssg: "login user" });
};

//signup

const signupUser = async (req, res) => {

  const {email,password,username} =req.body;
  try{
    const user= await User.signup(email,password,username);
    res.status(200).json({email,user})
  }catch(error){
    res.status(400).json({error:error.message})
  }
  res.json({ mssg: "signup user" });
};

module.exports = { loginUser, signupUser };
