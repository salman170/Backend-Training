const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder = async function (req, res) {
    let data = req.body
    let user = await userModel.findById(data["userId"])
    let product = await productModel.findById(data["productId"])
    if (!user) {
        return res.send({ status: false, msg: "user validations fail" })
    }
    else if (!product) {
        return res.send({ status: false, msg: "produt validations fail" })
    }
    // if (req.headers["isfreeappuser"]) {
    //     req.body.amount = 0;
    //     let savedData = await orderModel.create(data)
    //     return res.send({ data: savedData })
    // } 
     if (!req.headers["isfreeappuser"]) {
        let x = req.body.amount
        let userBalance = await userModel.findById(data["userId"]).select({ balance: 1, _id: 0 })
        if (userBalance < req.body.amount) {
            return res.send({ status: false, msg: "the user doesn't have enough balance" })
        } else {
            let xyz = await userModel.updateOne(
                { x: { $lte: balance } }, { $set: { balance: (balance * 1 - x * 1) } }, { new: true }
            )
            let savedData = await orderModel.create(data)
            return res.send({ data: savedData })
        }}
}

module.exports.createOrder = createOrder
