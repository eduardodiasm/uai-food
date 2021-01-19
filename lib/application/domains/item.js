const mongoose = require('mongoose')

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
  }
})

const ItemModel = mongoose.model('items', ItemSchema)

module.exports = ItemModel