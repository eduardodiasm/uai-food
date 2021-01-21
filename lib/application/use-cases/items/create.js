const Item = require('../../domains/item')
const Restaurant = require('../../domains/restaurant')

module.exports = async function (params) {

  const { restaurant } = params
  const foundRestaurant = await Restaurant.findById(restaurant)

  if (!foundRestaurant) throw new Error('Restaurant not found')

  const item = await Item.create(params)
  await Restaurant.findOneAndUpdate({
    _id: restaurant
  }, {
    $push: {items: item._id}
  })

  return item
}