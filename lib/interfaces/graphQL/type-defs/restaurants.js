const { gql } = require('apollo-server-express')

module.exports = gql`
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
    name: String
  }

`