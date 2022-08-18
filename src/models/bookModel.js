const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name: String, 
    price : Number,
    rating : Number,
    author_id : {
        type :Number,
        require : true}
}, { timestamps: true });

module.exports = mongoose.model('Book_A', bookSchema) //users
