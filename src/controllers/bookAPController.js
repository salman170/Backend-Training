const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createAuthor= async function (req, res) {
    let book = req.body
    let bookCreated = await authorModel.create(book)
    res.send({data: bookCreated})
}
const createPublisher= async function (req, res) {
    let book = req.body
    let bookCreated = await publisherModel.create(book)
    res.send({data: bookCreated})
}
const createBook= async function (req, res) {
    let data = req.body
    let author_id = data.author
    let publisher_id = data.publisher
    if (!author_id){
        return res.send({status : false , msg :"Author id must be present" })
    }
    if(!publisher_id){
        res.send({status : false , msg :"Publisher id must be present" })
    }
    let findAuthor = await authorModel.findOne({_id: author_id })
    let findPublisher = await publisherModel.findOne({_id: publisher_id })
    if(findAuthor){
        if(findPublisher){
            let bookCreated = await bookModel.create(data)
            res.send({data: bookCreated})
        }
        else{
            res.send({status : false , msg :"The publisher is not present" })
        }
    }
    else{
        res.send({status : false , msg :"The Authoris not present" })
    }
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})

}

module.exports.createAuthor= createAuthor
module.exports.createPublisher= createPublisher
module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
