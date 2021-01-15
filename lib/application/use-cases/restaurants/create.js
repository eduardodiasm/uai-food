const restaurantModel = require('../../domains/restaurant')

module.exports = async function get (params) {
  const restaurant = await restaurantModel.create(params)
  return restaurant
}