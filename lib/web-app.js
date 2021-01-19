require('dotenv').config()

const express = require('express')
const app = express()

const graphQLServer = require('./interfaces/graphQL')

const mongooseORM = require('./infrastructure/database/mongo')
mongooseORM.asyncConnect()

graphQLServer.applyMiddleware({
  app,
  path: '/',
  cors: false
})

module.exports = app