const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  culinaryType: {
    type: String,
  },

  location: {
    type: [Number],
  },

  // Relationships: 
  items: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'item' 
  }]

},
  // Options
{
  timestamps: true
})

const RestaurantModel = mongoose.model('restaurants', RestaurantSchema)

module.exports = RestaurantModel;