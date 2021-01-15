const express = require('express')
const app = express()

const graphQLServer = require('./interfaces/graphQL')

graphQLServer.applyMiddleware({
  app,
  path: '/',
  cors: false
})

module.exports = app