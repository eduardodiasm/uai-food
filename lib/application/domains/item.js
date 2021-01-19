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
  },

  restaurant :{
    type:mongoose.Schema.Types.ObjectId,
    ref:'restaurants'
  }

})

const ItemModel = mongoose.model('items', ItemSchema)

module.exports = ItemModel