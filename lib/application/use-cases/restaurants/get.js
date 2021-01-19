const restaurantModel = require('../../domains/restaurant')

module.exports = async function get () {
  const restaurants = await restaurantModel.find()
  return restaurants
}