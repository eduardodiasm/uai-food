const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
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

  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  }

},
  // Options
  {
    timestamps: true
  }
)

ItemSchema.index({ name: 'text', description: 'text' })

const ItemModel = mongoose.model('Item', ItemSchema, 'items')

module.exports = ItemModel