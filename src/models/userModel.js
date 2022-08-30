const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: {type: String, require : true},
    lastName: {type: String, require : true},
    mobile: {
        type: String,
        unique : true,
        required: true
    },
    emailId: {type: String, require : true , unique: true},
    password: {type: String, require : true, unique: true},
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isDeleted : {
        type: Boolean,
        default: false
    },
    age: Number,
    posts: {type: [], deafult: []}
}, { timestamps: true });

module.exports = mongoose.model('new-User', userSchema)
