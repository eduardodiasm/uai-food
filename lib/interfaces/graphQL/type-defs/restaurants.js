const { gql } = require('apollo-server-express')

module.exports = gql`

  scalar Date

  extend type Query {
    hello: String
  }

  extend type Mutation {
    createRestaurant (params: RestaurantInput): Restaurant
  }

  input RestaurantInput {
    name: String
  }

  type Restaurant {
    id: ID
    name: String
    createdAt: Date
    updatedAt: Date
  }

`