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
    culinaryType: String
    location: [Float]
  }

  input FilterRestaurantsInput {
    city: String
    distance: [Float]
    culinaryType: String
    item: String
  }

  type Restaurant {
    id: ID
    name: String
    culinaryType: String
    location: [Float]
    createdAt: Date
    updatedAt: Date
  }

`