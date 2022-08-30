const jasonwebtoken = require("jsonwebtoken");
const userModel = require("../models/userModel");



const authenticate = async function ( req, res, next) {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
        return res.send("No such user exists");
    }
    req.user = user
  
    let token = req.headers["x-auth-token"];

    //If no token is present in the request header return error. This means the user is not logged in.
    if (!token) {
        return res.send({ status: false, msg: "token must be present" });
    } else {
        next()
    }

}



const authorise = function (req, res, next) {
    // comapre the logged in user's id and the id in request
    let userId = req.params.userId;
    
    let token = req.headers["x-auth-token"];

        let decodedToken = jasonwebtoken.verify(token, "functionup-plutonium-very-very-secret-key");
        if (!decodedToken)
            return res.send({ status: false, msg: "token is invalid" });
        else {
            if (decodedToken.userId == userId) {
                next()
            } else {
                return res.send({ status: false, msg: "'User logged is not allowed to modify the requested users data" })
            }
        }

}
module.exports.authenticate = authenticate
module.exports.authorise = authorise



