const { Schema, model, Types } = require('mongoose');

const ShoppingSchema = Schema({
    products: [{
        _id: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            default: 1
        },
        name: {
            type: String
        }
    }],
    customer:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})

module.exports = model('Shopping', ShoppingSchema)