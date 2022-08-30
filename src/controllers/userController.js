const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (abcd, xyz) {
  try {
    let data = abcd.body;
    let savedData = await userModel.create(data);
    xyz.status(201).send({ msg: savedData });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    xyz.status(500).send({ msg: "Error", error: err.message })
  }
};

const loginUser = async function (req, res) {

  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(404).send({
        status: false,
        msg: "username or the password is not corerct",
      });

    let token = jwt.sign(
      {
        userId: user._id,
        batch: "plutonium",
        organisation: "FunctionUp",
      },
      "functionup-plutonium-very-very-secret-key"
    );
    res.setHeader("x-auth-token", token);
    res.status(201).send({ status: true, token: token });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};


const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(404).send({ status: false, msg: "No such user exists" });

    res.status(200).send({ status: true, data: userDetails });
    // Note: Try to see what happens if we change the secret while decoding the token}
  }
  catch{
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }}
  ;


  const updateUser = async function (req, res) {
    try {
      let userId = req.params.userId;
      let userData = req.body;
      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
      res.status(201).send({ status: true, data: updatedUser });
    } catch {
      console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
    }
    
  };


  const deleteUser = async function (req, res) {
   try{ let userId = req.params.userId;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
    res.status(201).send({ status: true, data: updatedUser });
  } catch {
    console.log("This is the error :", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
  }
  
  };

  const postMessage = async function (req, res) {
    try {let message = req.body.message
    let user = req.user
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

    //return the updated user document
    return res.status(201).send({ status: true, data: updatedUser })}
    catch {
      console.log("This is the error :", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
    }
  }




  module.exports.createUser = createUser;
  module.exports.getUserData = getUserData;
  module.exports.updateUser = updateUser;
  module.exports.loginUser = loginUser;
  module.exports.deleteUser = deleteUser;
  module.exports.postMessage = postMessage
