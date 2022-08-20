const publisherModel = require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let book = req.body
    let bookCreated = await publisherModel.create(book)
    res.send({data: bookCreated})
}


module.exports.createPublisher= createPublisher
