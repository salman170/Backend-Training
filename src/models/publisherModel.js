const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    name: String,
    headQuarter: String,

}, { timestamps: true });

module.exports = mongoose.model('newPublisher', authorSchema)


//"62ff572dc01d8acedf7c39ca"