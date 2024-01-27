const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

mongoose.models = {}
module.exports = mongoose.model('Products', productsSchema)