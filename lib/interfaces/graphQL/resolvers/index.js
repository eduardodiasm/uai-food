const { merge } = require('lodash')
const restaurants = require('./restaurants')
const items = require('./items')

module.exports = merge(
  restaurants,
  items
)
