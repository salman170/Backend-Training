const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId: {
        type : ObjectId,
        ref:"User-collection",
        required: true
    },
	productId: {
        type : ObjectId,
        ref:"Product-Collections",
        required: true
    },
	amount: Number,
	isFreeAppUser: Boolean, 
	date: String
    
}, { timestamps: true });

module.exports = mongoose.model('Order-Collections', orderSchema) //users
