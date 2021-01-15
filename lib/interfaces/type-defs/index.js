const { gql } = require('apollo-server-express')

const foo = gql`
  type Query {
    hello: String
  }

`

module.exports = foo