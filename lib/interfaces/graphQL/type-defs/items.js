const { gql } = require('apollo-server-express')

module.exports = gql`

  extend type Mutation {
    createItem (item: ItemInput): Item
    updateItem (id: ID!, params: ItemUpdateInput!): Item
  }

  input ItemInput {
    name: String!
    description: String
    price: Float!
    restaurant: ID!
  }

  input ItemUpdateInput {
    name: String
    description: String
    price: Float
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