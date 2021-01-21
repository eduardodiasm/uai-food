const { gql } = require('apollo-server-express')
const restaurants = require('./restaurants')
const items = require('./items')

const defaultStructure = gql`
  scalar Date

  type Query {
    _default: String
  },

  type Mutation {
    _default: String
  }
`

module.exports = [
  defaultStructure,
  restaurants,
  items
]
