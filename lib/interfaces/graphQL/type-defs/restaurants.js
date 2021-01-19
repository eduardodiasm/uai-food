const { gql } = require('apollo-server-express')

module.exports = gql`

  scalar Date

  extend type Query {
    hello: String
    restaurants: [Restaurant]
  }

  extend type Mutation {
    createRestaurant (params: RestaurantInput): Restaurant
  }

  input RestaurantInput {
    name: String!
    culinaryType: String
    location: [Float]
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