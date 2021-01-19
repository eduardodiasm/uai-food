const restaurants = require('./restaurants')
const items = require('./items')

module.exports = {
  ...restaurants,
  ...items
}
