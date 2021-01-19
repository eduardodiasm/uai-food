const { gql } = require('apollo-server-express')

module.exports = gql`

  extend type Mutation {
    createItem (params: ItemInput): Item
  }

  input ItemInput {
    name: String!
    description: String
    price: Float!
    restaurant: ID!
  }

  type Item {
    id: ID
    name: String
    description: String
    price: Float
    restaurant: ID
    createdAt: Date
    updatedAt: Date
  }

`