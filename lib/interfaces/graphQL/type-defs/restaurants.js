const { gql } = require('apollo-server-express')

module.exports = gql`

  extend type Query {
    restaurants: [Restaurant]
    filterRestaurants (query: FilterRestaurantsInput): [Restaurant]
  }

  extend type Mutation {
    createRestaurant (restaurant: RestaurantInput): Restaurant
  }

  input RestaurantInput {
    name: String!
    city: String
    culinaryType: String
    location: [Float]
  }

  input FilterRestaurantsInput {
    city: String
    location: FilterLocationInput
    culinaryType: String
    item: String
  }

  input FilterLocationInput {
    latitude: Float
    longitude: Float
    range: Float
  }

  type Restaurant {
    id: ID
    name: String
    city: String
    culinaryType: String
    location: [Float]
    createdAt: Date
    updatedAt: Date
  }

`