const authorModel = require("../models/authorModel")


const createAuthor= async function (req, res) {
    let book = req.body
    let bookCreated = await authorModel.create(book)
    res.send({data: bookCreated})
}



module.exports.createAuthor= createAuthor

