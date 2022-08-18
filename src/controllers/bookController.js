const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")


// 2. CRUD operations. Write API's to do the following:
// Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the author collection nor the books collection)
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const createAuthor = async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

// List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )
const findBook = async function (req,res){
    let findAuthor = await AuthorModel.find({author_name : "Chetan Bhagat"})
    let findBook = await BookModel.find({author_id: {$eq : findAuthor[0].author_id}})
    res.send({msg : findBook})

    // let allBooksByCB = await AuthorModel.findOne({author_name: "Chetan Bhagat"}).select({ author_id:1, _id: 0})
    // let booksByAuId = await BookModel.find(allBooksByCB)
    // res.send({ msg: booksByAuId })
}


// find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)

let UpdateBook = async function (req,res){
    let author = await AuthorModel.find().select({ author_id:1, _id: 0})
    let authorBook = await BookModel.find({name:"Two states"}).select({ author_id:1, _id: 0})
    let booksByAuId = await BookModel.findOneAndUpdate(
        {authorBook : {$eq: author}},
        {$set: {price: 50}},
        {new : true, }
        )
    res.send({ msg: booksByAuId })
}



// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)

const booksCost = async function (req, res) {
    let booksCost = await BookModel.find({ price : { $gte: 50, $lte: 100} } ); //.select({ author_id :1, _id:0})
    //let authorId = await AuthorModel.find().select({author_id:1, _id:0})
    let authorId = booksCost.map(x=> x.author_id)
    let authorName = await AuthorModel.find({booksCost:{$eq:authorId}}).select({author_name:1, _id:0})
    res.send({ msg: authorName })
}





module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.findBook= findBook
module.exports.UpdateBook= UpdateBook
module.exports.booksCost= booksCost 

