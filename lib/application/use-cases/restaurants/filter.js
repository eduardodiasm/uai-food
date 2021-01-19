const restaurantModel = require('../../domains/restaurant')

module.exports = async function filter (query) {
  const restaurants = await restaurantModel.find()
  return restaurants
}