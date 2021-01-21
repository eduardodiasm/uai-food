const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  culinaryType: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  location: {
    type: [Number],
    required: true,
    unique: true
  },

  city: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },

  // Relationships:
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }]
},

// Options
{
  timestamps: true
}
)

/*
  * Making the Schema able to a full-text search over the culinaryType and name
  * of the documents
*/

RestaurantSchema.index({ culinaryType: 'text', name: 'text' })

const RestaurantModel = mongoose.model('Restaurant', RestaurantSchema, 'restaurants')
module.exports = RestaurantModel
