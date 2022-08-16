const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        require: true,
    },
    tags: [
        {
            authorName: String,
            totalPages: Number,
            stockAvailable: Boolean,
        }
    ],

    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: { type: Number, default: 2021 },
}, { timestamps: true });



module.exports = mongoose.model('BookAssignment', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
