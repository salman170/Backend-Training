const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


const createBook = async function (req, res) {
    let data = req.body
    let author_id = data.author
    let publisher_id = data.publisher
    if (!author_id) {
        return res.send({ status: false, msg: "Author id must be present" })
    }
    if (!publisher_id) {
        res.send({ status: false, msg: "Publisher id must be present" })
    }
    let findAuthor = await authorModel.findOne({ _id: author_id })
    let findPublisher = await publisherModel.findOne({ _id: publisher_id })
    if (findAuthor) {
        if (findPublisher) {
            let bookCreated = await bookModel.create(data)
            res.send({ data: bookCreated })
        }
        else {
            res.send({ status: false, msg: "The publisher is not present" })
        }
    }
    else {
        res.send({ status: false, msg: "The Authoris not present" })
    }
}



// a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true. 


const updateBook = async function (req, res) {
    let updateBook = await bookModel.updateMany(
        {publisher :{$in :["62ffe53995436f0ee2e1114a", "62ff880677d7c1b7c0b51497"]}},
        {$set : {isHardCover : false}},
        {new : true},
    )
    res.send({ msg: updateBook })


    // b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60) 
    // let authorRating = await authorModel.find({rating : {$gt : 3.5}}).select({_id : 1})
    // let updatedPrice = await bookModel.updateMany(
    //     { author : authorRating},
    //     { $inc: { price: +10 } },
    //     { new: true }
    // )
    // res.send({ data: updatedPrice })

    
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({ data: specificBook })

}

// let updatePrice = await bookModel.updateMany(
//     {"author.ratings ":{$gt: 3.5 }},
//     {$inc:{price : 10}},
//     {new : true, upsert:true }
// ).populate('author')

module.exports.createBook = createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateBook = updateBook
