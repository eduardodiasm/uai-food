require('dotenv').config()

const express = require('express')
const app = express()

const graphQLServer = require('./interfaces/graphQL')

const sequelizeORM = require('./infrastructure/database/sequelize')
sequelizeORM.startConnection()


graphQLServer.applyMiddleware({
  app,
  path: '/',
  cors: false
})

module.exports = app