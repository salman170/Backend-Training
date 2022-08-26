const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder = async function (req, res) {
    let user = await userModel.findById(data["userId"])
    let product = await productModel.findById(data["productId"])
    if (!user) {
        return res.send({ status: false, msg: "user validations fail" })
    }
    else if (!product) {
        return res.send({ status: false, msg: "produt validations fail" })
    }
    if (req.headers["isfreeappuser"]!='false') {
        req.body.amount = 0;
        let savedData = await orderModel.create(data)
        return res.send({ data: savedData })
    } 
     if (req.headers["isfreeappuser"]=='false'){
        let userBalance = await userModel.findById(data["userId"]).select({ balance: 1, _id: 0 })
        if (userBalance.balance< req.body.amount) {
            return res.send({ status: false, msg: "the user doesn't have enough balance" })
        } else {
            let x = req.body.amount
            let xyz = await userModel.updateOne(
                { _id : { $eq: req.body.userId } }, 
                { $inc: { balance : -x }}, 
                { new: true }
            )
            let savedData = await orderModel.create(data)
            return res.send({ data: savedData })
        }}
}

module.exports.createOrder = createOrder
