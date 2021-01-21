const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    culinaryType: {
      type: String,
      trim: true
    },

    location: { 
      type: [ Number ], 
      default: [], 
      index: '2dsphere' 
    },

    city: {
      type: String,
      trim: true
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
  }
)

RestaurantSchema.index({ location: '2dsphere' });

const RestaurantModel = mongoose.model('Restaurant', RestaurantSchema)

module.exports = RestaurantModel