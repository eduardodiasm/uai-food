const { gql } = require('apollo-server-express')
const restaurants = require('./index')

const defaultStructure = gql`
  type Query {
    _default: String
  },

  type Mutation {
    _default: String
  }
`

module.exports = [
  defaultStructure,
  restaurants
]