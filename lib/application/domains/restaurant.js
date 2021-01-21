const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  culinaryType: {
    type: String,
    required: true,
    trim: true
  },

  city: {
    type: String,
    required: true,
    trim: true
  },

  location: {
    type: [ Number ],
    require: true
  },

  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }]

}, { timestamps: true })


RestaurantSchema.index({'culinaryType': 'text'})

const RestaurantModel = mongoose.model('Restaurant', RestaurantSchema, 'restaurants')

module.exports = RestaurantModel