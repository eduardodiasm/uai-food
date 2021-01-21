const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./type-defs')
const resolvers = require('./resolvers')

module.exports = new ApolloServer({
  typeDefs,
  resolvers
})
