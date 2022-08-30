const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (abcd, xyz) {
  let data = abcd.body;
  let savedData = await userModel.create(data);
  xyz.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;


  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
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
  res.send({ status: true, token: token });
};


const getUserData = async function (req, res) {

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
  // Note: Try to see what happens if we change the secret while decoding the token
};


const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData , {new: true});
  res.send({ status: true , data: updatedUser });
};


const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set :{isDeleted : true}} , {new : true});
  res.send({ status: true , data: updatedUser });
};

const postMessage = async function (req, res) {
  let message = req.body.message
  let user = req.user
  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

  //return the updated user document
  return res.send({ status: true, data: updatedUser })
}




module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage
